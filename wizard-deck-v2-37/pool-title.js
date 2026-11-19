(() => {
  "use strict";

  const titleNodes = [...document.querySelectorAll("[data-pool-title]")];
  if (!titleNodes.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const supportsObserver = "IntersectionObserver" in window;
  const supportsResizeObserver = "ResizeObserver" in window;
  const instances = [];
  let sharedFrame = 0;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function wrapText(context, text, maxWidth) {
    const words = text.split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";

    words.forEach((word) => {
      const proposal = line ? `${line} ${word}` : word;
      if (line && context.measureText(proposal).width > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = proposal;
      }
    });

    if (line) lines.push(line);
    return lines;
  }

  function nextFrame() {
    if (sharedFrame || document.hidden || reducedMotion.matches) return;
    sharedFrame = requestAnimationFrame(renderFrame);
  }

  function renderFrame(now) {
    sharedFrame = 0;
    let keepRunning = false;

    instances.forEach((instance) => {
      if (!instance.visible || !instance.ready) return;
      instance.render(now, true);
      keepRunning = true;
    });

    if (keepRunning) nextFrame();
  }

  class PoolTitle {
    constructor(element) {
      this.element = element;
      this.canvas = document.createElement("canvas");
      this.canvas.className = "pool-title__canvas";
      this.canvas.setAttribute("aria-hidden", "true");
      this.context = this.canvas.getContext("2d", { alpha: false });
      this.base = document.createElement("canvas");
      this.baseContext = this.base.getContext("2d", { alpha: false });
      this.width = 0;
      this.height = 0;
      this.dpr = 1;
      this.ready = false;
      this.visible = !supportsObserver;
      this.ripples = [];
      this.pointer = { x: 0, y: 0, inside: false, movedAt: 0, idleAt: 0 };
      this.previousPointer = null;
      this.lastWake = 0;
      this.resizeFrame = 0;

      this.element.append(this.canvas);
      this.bindInteraction();
      this.build();

      if (supportsResizeObserver) {
        this.resizeObserver = new ResizeObserver(() => this.queueBuild());
        this.resizeObserver.observe(this.element);
      } else {
        window.addEventListener("resize", () => this.queueBuild(), { passive: true });
      }

      if (supportsObserver) {
        this.visibilityObserver = new IntersectionObserver(
          ([entry]) => {
            this.visible = entry.isIntersecting;
            this.element.dataset.poolState = this.visible ? "active" : "paused";
            if (this.visible) nextFrame();
          },
          { rootMargin: "0px", threshold: 0.01 },
        );
        this.visibilityObserver.observe(this.element);
      }
    }

    queueBuild() {
      cancelAnimationFrame(this.resizeFrame);
      this.resizeFrame = requestAnimationFrame(() => this.build());
    }

    bindInteraction() {
      const localPoint = (event) => {
        const rect = this.element.getBoundingClientRect();
        return {
          x: clamp(event.clientX - rect.left, 0, rect.width),
          y: clamp(event.clientY - rect.top, 0, rect.height),
        };
      };

      this.element.addEventListener(
        "pointerenter",
        (event) => {
          const point = localPoint(event);
          const now = performance.now();
          this.pointer = { ...point, inside: true, movedAt: now, idleAt: now };
          this.previousPointer = { ...point, time: now };
          nextFrame();
        },
        { passive: true },
      );

      this.element.addEventListener(
        "pointermove",
        (event) => {
          if (reducedMotion.matches) return;
          const point = localPoint(event);
          const now = performance.now();
          const previous = this.previousPointer || { ...point, time: now };
          const dx = point.x - previous.x;
          const dy = point.y - previous.y;
          const distance = Math.hypot(dx, dy);

          this.pointer = { ...point, inside: true, movedAt: now, idleAt: this.pointer.idleAt };

          if (distance > 2 && now - this.lastWake > 42) {
            const normalX = distance ? -dy / distance : 0;
            const normalY = distance ? dx / distance : 0;
            const wakeOffset = clamp(distance * 0.42, 4, 12);
            const wakeAmplitude = clamp(distance * 0.2, 1.8, 3.4);
            this.addRipple(point.x + normalX * wakeOffset, point.y + normalY * wakeOffset, {
              amplitude: wakeAmplitude,
              life: 1500,
              speed: 0.105,
              width: 10,
              kind: "wake",
            });
            this.addRipple(point.x - normalX * wakeOffset, point.y - normalY * wakeOffset, {
              amplitude: wakeAmplitude,
              life: 1500,
              speed: 0.105,
              width: 10,
              kind: "wake",
            });
            this.lastWake = now;
          }

          this.previousPointer = { ...point, time: now };
          nextFrame();
        },
        { passive: true },
      );

      this.element.addEventListener(
        "pointerleave",
        () => {
          this.pointer.inside = false;
          this.previousPointer = null;
        },
        { passive: true },
      );

      this.element.addEventListener("pointerdown", (event) => {
        if (reducedMotion.matches) return;
        const point = localPoint(event);
        this.addRipple(point.x, point.y, {
          amplitude: 8.5,
          life: 4300,
          speed: 0.12,
          width: 18,
          kind: "drop",
        });
        nextFrame();
      });
    }

    addRipple(x, y, options) {
      this.ripples.push({
        x,
        y,
        born: performance.now(),
        ...options,
      });
      if (this.ripples.length > 14) this.ripples.splice(0, this.ripples.length - 14);
      this.element.dataset.poolRipples = String(this.ripples.length);
      this.element.dataset.poolDrops = String(
        this.ripples.filter((ripple) => ripple.kind === "drop").length,
      );
    }

    build() {
      const rect = this.element.getBoundingClientRect();
      const width = Math.round(rect.width);
      const height = Math.round(rect.height);
      if (width < 8 || height < 8 || !this.context || !this.baseContext) return;

      this.width = width;
      this.height = height;
      this.dpr = Math.min(window.devicePixelRatio || 1, width < 620 ? 1.1 : 1.35);

      [this.canvas, this.base].forEach((canvas) => {
        canvas.width = Math.round(width * this.dpr);
        canvas.height = Math.round(height * this.dpr);
      });

      this.drawPoolBase();
      this.ready = true;
      this.element.classList.add("pool-title--ready");
      this.element.dataset.poolMode = reducedMotion.matches ? "reduced" : "animated";
      this.element.dataset.poolState = reducedMotion.matches
        ? "static"
        : this.visible
          ? "active"
          : "paused";
      this.element.dataset.poolRipples = String(this.ripples.length);
      this.element.dataset.poolDrops = String(
        this.ripples.filter((ripple) => ripple.kind === "drop").length,
      );
      this.render(performance.now(), !reducedMotion.matches);
      nextFrame();
    }

    drawPoolBase() {
      const context = this.baseContext;
      const { width, height, dpr } = this;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);

      const water = context.createLinearGradient(0, 0, width, height);
      water.addColorStop(0, "#b9ebe3");
      water.addColorStop(0.48, "#9ddbd5");
      water.addColorStop(1, "#c8eee6");
      context.fillStyle = water;
      context.fillRect(0, 0, width, height);

      const poolTile = clamp(Math.round(Math.min(width, height) / 5.4), 18, 34);
      for (let y = 0, row = 0; y < height; y += poolTile, row += 1) {
        for (let x = 0, column = 0; x < width; x += poolTile, column += 1) {
          context.fillStyle = (row + column) % 3 === 0
            ? "rgba(255,255,255,0.065)"
            : "rgba(17,120,137,0.025)";
          context.fillRect(x + 1, y + 1, poolTile - 2, poolTile - 2);
        }
      }

      context.strokeStyle = "rgba(236, 255, 250, 0.74)";
      context.lineWidth = 1;
      for (let x = 0.5; x <= width; x += poolTile) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = 0.5; y <= height; y += poolTile) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      this.drawStaticCaustics(context, width, height);
      this.drawMosaicText(context, width, height, dpr);

      const shade = context.createLinearGradient(0, 0, 0, height);
      shade.addColorStop(0, "rgba(255,255,255,0.16)");
      shade.addColorStop(0.5, "rgba(255,255,255,0)");
      shade.addColorStop(1, "rgba(3,55,77,0.09)");
      context.fillStyle = shade;
      context.fillRect(0, 0, width, height);
    }

    drawStaticCaustics(context, width, height) {
      context.save();
      context.globalCompositeOperation = "screen";
      context.lineCap = "round";
      for (let line = 0; line < 9; line += 1) {
        const y = ((line + 0.55) / 9) * height;
        context.beginPath();
        for (let x = -12; x <= width + 12; x += 12) {
          const wave = Math.sin(x * 0.033 + line * 1.37) * (3 + (line % 3));
          if (x === -12) context.moveTo(x, y + wave);
          else context.lineTo(x, y + wave);
        }
        context.strokeStyle = line % 2
          ? "rgba(255,255,255,0.17)"
          : "rgba(235,255,251,0.26)";
        context.lineWidth = line % 3 === 0 ? 2.2 : 1.1;
        context.stroke();
      }
      context.restore();
    }

    drawMosaicText(context, width, height, dpr) {
      const textCanvas = document.createElement("canvas");
      textCanvas.width = Math.round(width * dpr);
      textCanvas.height = Math.round(height * dpr);
      const textContext = textCanvas.getContext("2d");
      if (!textContext) return;
      textContext.setTransform(dpr, 0, 0, dpr, 0, 0);

      const style = getComputedStyle(this.element);
      const transformedText = style.textTransform === "uppercase"
        ? this.element.textContent.trim().toLocaleUpperCase("es-MX")
        : this.element.textContent.trim();
      const baseFontSize = parseFloat(style.fontSize) || 64;
      const maxWidth = width * 0.94;
      const maxHeight = height * 0.9;
      let fontSize = baseFontSize;
      let lineHeight = parseFloat(style.lineHeight);
      let lines = [];

      for (let attempt = 0; attempt < 18; attempt += 1) {
        lineHeight = Number.isFinite(parseFloat(style.lineHeight))
          ? parseFloat(style.lineHeight) * (fontSize / baseFontSize)
          : fontSize * 0.9;
        textContext.font = `${style.fontStyle} ${style.fontWeight} ${fontSize}px ${style.fontFamily}`;
        if ("letterSpacing" in textContext) textContext.letterSpacing = style.letterSpacing;
        lines = wrapText(textContext, transformedText, maxWidth);
        const widest = lines.reduce(
          (current, line) => Math.max(current, textContext.measureText(line).width),
          0,
        );
        if (lines.length * lineHeight <= maxHeight && widest <= maxWidth) break;
        fontSize *= 0.94;
      }

      const totalHeight = lines.length * lineHeight;
      const startY = Math.max(2, (height - totalHeight) / 2);
      textContext.textAlign = "left";
      textContext.textBaseline = "top";
      textContext.fillStyle = "#063f91";

      lines.forEach((line, index) => {
        const lineWidth = textContext.measureText(line).width;
        const x = Math.max(3, (width - lineWidth) / 2);
        textContext.fillText(line, x, startY + index * lineHeight);
      });

      textContext.globalCompositeOperation = "source-atop";
      const mosaicSize = clamp(Math.round(fontSize / 9), 5, 11);
      textContext.strokeStyle = "rgba(119, 199, 255, 0.36)";
      textContext.lineWidth = 0.7;
      for (let x = 0.5; x <= width; x += mosaicSize) {
        textContext.beginPath();
        textContext.moveTo(x, 0);
        textContext.lineTo(x, height);
        textContext.stroke();
      }
      for (let y = 0.5; y <= height; y += mosaicSize) {
        textContext.beginPath();
        textContext.moveTo(0, y);
        textContext.lineTo(width, y);
        textContext.stroke();
      }

      textContext.fillStyle = "rgba(17, 96, 180, 0.18)";
      for (let y = 0; y < height; y += mosaicSize * 2) {
        for (let x = (y / mosaicSize) % 4 === 0 ? 0 : mosaicSize; x < width; x += mosaicSize * 2) {
          textContext.fillRect(x, y, mosaicSize, mosaicSize);
        }
      }

      context.drawImage(textCanvas, 0, 0, width, height);
    }

    rippleSources(ripple) {
      if (ripple.kind !== "drop") return [[ripple.x, ripple.y, 1]];
      return [
        [ripple.x, ripple.y, 1],
        [-ripple.x, ripple.y, 0.42],
        [this.width * 2 - ripple.x, ripple.y, 0.42],
        [ripple.x, -ripple.y, 0.34],
        [ripple.x, this.height * 2 - ripple.y, 0.34],
      ];
    }

    drawAmbientRefraction(now) {
      const context = this.context;
      const { base, width, height, dpr } = this;
      const time = now * 0.001;
      const strip = 4;

      context.drawImage(base, 0, 0, base.width, base.height, 0, 0, width, height);
      for (let y = 0; y < height; y += strip) {
        const drawHeight = Math.min(strip + 1, height - y);
        const driftX = Math.sin(y * 0.051 + time * 0.82) * 0.78
          + Math.cos(y * 0.017 - time * 0.58) * 0.34;
        const driftY = Math.sin(y * 0.024 - time * 0.44) * 0.24;
        context.drawImage(
          base,
          0,
          y * dpr,
          base.width,
          drawHeight * dpr,
          driftX,
          y + driftY,
          width,
          drawHeight + 0.75,
        );
      }
    }

    drawRippleRefraction(now) {
      const context = this.context;
      const { base, width, height } = this;

      this.ripples.forEach((ripple) => {
        const age = now - ripple.born;
        if (age < 0 || age > ripple.life) return;
        const life = 1 - age / ripple.life;
        const radius = Math.max(2, age * ripple.speed);

        this.rippleSources(ripple).forEach(([sourceX, sourceY, reflection]) => {
          for (let band = -1; band <= 1; band += 1) {
            const bandRadius = radius + band * ripple.width * 0.58;
            const outer = Math.max(1, bandRadius + ripple.width * 0.48);
            const inner = Math.max(0.5, bandRadius - ripple.width * 0.48);
            if (outer < 2) continue;

            const ring = new Path2D();
            ring.arc(sourceX, sourceY, outer, 0, Math.PI * 2);
            ring.arc(sourceX, sourceY, inner, 0, Math.PI * 2, true);
            context.save();
            context.clip(ring, "evenodd");

            const phase = Math.sin(age * 0.022 + band * 1.65);
            const refraction = ripple.kind === "drop" ? 0.003 : 0.002;
            const scale = 1 + phase * ripple.amplitude * life * reflection * refraction;
            context.translate(sourceX, sourceY);
            context.scale(scale, scale);
            context.translate(-sourceX, -sourceY);
            context.drawImage(base, 0, 0, base.width, base.height, 0, 0, width, height);
            context.restore();
          }
        });
      });
    }

    drawMovingCaustics(now) {
      const context = this.context;
      const { width, height } = this;
      const time = now * 0.001;
      context.save();
      context.globalCompositeOperation = "screen";
      context.lineCap = "round";

      for (let line = 0; line < 7; line += 1) {
        const baseY = ((line + 0.7) / 7.5) * height;
        context.beginPath();
        for (let x = -16; x <= width + 16; x += 14) {
          const y = baseY
            + Math.sin(x * 0.025 + time * 1.15 + line * 1.7) * (3.5 + (line % 2) * 2)
            + Math.cos(x * 0.011 - time * 0.82) * 2.2;
          if (x === -16) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.strokeStyle = line % 2
          ? "rgba(255,255,255,0.18)"
          : "rgba(255,255,255,0.31)";
        context.lineWidth = line % 3 === 0 ? 2.4 : 1.15;
        context.stroke();
      }

      this.ripples.forEach((ripple) => {
        const age = now - ripple.born;
        if (age < 0 || age > ripple.life) return;
        const life = 1 - age / ripple.life;
        this.rippleSources(ripple).forEach(([sourceX, sourceY, reflection]) => {
          const radius = Math.max(1, age * ripple.speed);
          [-5, 0, 5].forEach((offset, index) => {
            if (radius + offset <= 0) return;
            context.beginPath();
            context.arc(sourceX, sourceY, radius + offset, 0, Math.PI * 2);
            context.strokeStyle = index === 1
              ? `rgba(255,255,255,${0.58 * life * reflection})`
              : `rgba(12,94,145,${0.24 * life * reflection})`;
            context.lineWidth = index === 1 && ripple.kind === "drop" ? 1.8 : 1;
            context.stroke();
          });
        });
      });

      context.restore();
    }

    render(now, animated) {
      if (!this.ready || !this.context) return;
      const { context, base, width, height, dpr } = this;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);

      if (!animated) {
        context.drawImage(base, 0, 0, base.width, base.height, 0, 0, width, height);
        return;
      }

      if (this.pointer.inside && now - this.pointer.movedAt > 300 && now - this.pointer.idleAt > 760) {
        this.addRipple(this.pointer.x, this.pointer.y, {
          amplitude: 1.8,
          life: 1800,
          speed: 0.085,
          width: 11,
          kind: "idle",
        });
        this.pointer.idleAt = now;
      }

      this.ripples = this.ripples.filter((ripple) => now - ripple.born < ripple.life);
      this.element.dataset.poolRipples = String(this.ripples.length);
      this.element.dataset.poolDrops = String(
        this.ripples.filter((ripple) => ripple.kind === "drop").length,
      );

      this.drawAmbientRefraction(now);
      this.drawRippleRefraction(now);
      this.drawMovingCaustics(now);
    }
  }

  titleNodes.forEach((element) => instances.push(new PoolTitle(element)));

  document.fonts?.ready.then(() => {
    instances.forEach((instance) => instance.queueBuild());
  });

  document.addEventListener("visibilitychange", () => {
    instances.forEach((instance) => {
      instance.element.dataset.poolState = document.hidden
        ? "paused"
        : reducedMotion.matches
          ? "static"
          : instance.visible
            ? "active"
            : "paused";
    });
    if (!document.hidden) nextFrame();
  });

  reducedMotion.addEventListener?.("change", () => {
    instances.forEach((instance) => instance.build());
    nextFrame();
  });
})();
