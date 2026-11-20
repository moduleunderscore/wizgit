(() => {
  "use strict";

  // Every fresh visit begins on the Wizard cover, even when the browser
  // restores an old scroll position or the shared URL contains another hash.
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  const mobileEntry = window.matchMedia("(max-width: 820px)");
  const replaceEntryHash = () => {
    if (window.history?.replaceState) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}#cover`,
      );
    } else {
      window.location.hash = "cover";
    }
  };
  const resetMobileEntry = () => {
    if (!mobileEntry.matches) return;
    replaceEntryHash();
    document.body?.classList.add("is-cover");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
    window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 160);
  };

  replaceEntryHash();
  resetMobileEntry();
  window.addEventListener("pageshow", resetMobileEntry);
  window.addEventListener("load", resetMobileEntry, { once: true });

  const DATA = window.WIZARD_DATA;
  if (!DATA) return;

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const twoDigits = (value) => String(value).padStart(2, "0");
  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  function initTubesHero() {
    const canvases = $$('[data-tubes-background]');
    if (!canvases.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const moduleUrl = './assets/vendor/tubes1.min.js';
    const palettes = [
      {
        tubes: ['#39ff14', '#38c6f4', '#304ffe'],
        lights: ['#39ff14', '#38c6f4', '#7c66ff', '#e7e9ef'],
      },
      {
        tubes: ['#38c6f4', '#e7e9ef', '#39ff14'],
        lights: ['#38c6f4', '#39ff14', '#8aa5ff', '#ffffff'],
      },
      {
        tubes: ['#39ff14', '#3159ff', '#9b7bff'],
        lights: ['#39ff14', '#38c6f4', '#7057ff', '#dce8ff'],
      },
    ];
    let modulePromise = null;

    const supportsWebGL = () => {
      try {
        const probe = document.createElement('canvas');
        return Boolean(probe.getContext('webgl2') || probe.getContext('webgl'));
      } catch {
        return false;
      }
    };

    canvases.forEach((canvas, fieldIndex) => {
      const stage = canvas.closest('[data-tubes-stage]') || canvas.closest('.chapter') || canvas.parentElement;
      if (!stage) return;

      const isClosingField = canvas.dataset.tubesVariant === 'closing';
      let app = null;
      let stageVisible = !('IntersectionObserver' in window);
      let isMounting = false;
      let paletteIndex = Number(canvas.dataset.palette || fieldIndex) % palettes.length;
      let resizeFrame = 0;

      const setState = (state) => {
        canvas.dataset.tubesState = state;
      };

      const tuneRenderer = () => {
        const renderer = app?.three;
        if (!renderer) return;
        renderer.minPixelRatio = 1;
        renderer.maxPixelRatio = window.innerWidth < 640
          ? (isClosingField ? 1 : 1.2)
          : (isClosingField ? 1.32 : 1.55);
        renderer.resize?.();
      };

      const dispose = (state = 'paused') => {
        app?.dispose?.();
        app = null;
        isMounting = false;
        setState(state);
      };

      const mount = async () => {
        if (app) {
          setState(stageVisible && !document.hidden ? 'running' : 'paused');
          return;
        }
        if (isMounting || !stageVisible || document.hidden) return;
        if (reducedMotion.matches) {
          dispose('reduced');
          return;
        }
        if (!supportsWebGL()) {
          setState('fallback');
          return;
        }

        isMounting = true;
        setState('loading');

        try {
          modulePromise ||= import(moduleUrl);
          const { default: TubesCursor } = await modulePromise;
          if (!stageVisible || document.hidden || reducedMotion.matches) {
            isMounting = false;
            setState(reducedMotion.matches ? 'reduced' : 'paused');
            return;
          }

          const palette = palettes[paletteIndex];
          app = TubesCursor(canvas, {
            tubes: {
              colors: palette.tubes,
              lights: {
                intensity: isClosingField ? 150 : 180,
                colors: palette.lights,
              },
            },
            bloom: {
              threshold: isClosingField ? 0.1 : 0.06,
              strength: isClosingField ? 1.05 : 1.24,
              radius: isClosingField ? 0.36 : 0.42,
            },
            sleepRadiusX: isClosingField ? 330 : 250,
            sleepRadiusY: isClosingField ? 150 : 125,
            sleepTimeScale1: isClosingField ? 0.55 : 0.72,
            sleepTimeScale2: isClosingField ? 0.92 : 1.18,
          });
          isMounting = false;
          tuneRenderer();
          setState('running');
        } catch {
          app?.dispose?.();
          app = null;
          isMounting = false;
          setState('fallback');
        }
      };

      const cyclePalette = (event) => {
        if (event.target.closest('button, a, input, textarea, select, label')) return;
        if (!app || reducedMotion.matches) return;
        paletteIndex = (paletteIndex + 1) % palettes.length;
        const palette = palettes[paletteIndex];
        app.tubes?.setColors?.(palette.tubes);
        app.tubes?.setLightsColors?.(palette.lights);
        canvas.dataset.palette = String(paletteIndex + 1);
      };

      stage.addEventListener('pointerdown', cyclePalette, { passive: true });

      if ('IntersectionObserver' in window) {
        const visibilityObserver = new IntersectionObserver(([entry]) => {
          stageVisible = entry.isIntersecting;
          if (stageVisible) mount();
          else setState('paused');
        }, { threshold: 0.01 });
        visibilityObserver.observe(stage);
      }

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) setState('paused');
        else mount();
      });

      reducedMotion.addEventListener?.('change', () => {
        if (reducedMotion.matches) dispose('reduced');
        else mount();
      });

      window.addEventListener('resize', () => {
        cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(tuneRenderer);
      }, { passive: true });

      setState(reducedMotion.matches ? 'reduced' : 'loading');
      mount();
    });
  }

  function initReveal() {
    const items = $$('[data-reveal]');
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!items.length || reduced || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    items.forEach((item) => observer.observe(item));
    document.documentElement.classList.add("motion-ready");
  }

  function initRevolutionVideo() {
    const video = $('[data-revolution-video]');
    const stage = video?.closest('.revolution-editorial');
    if (!video || !stage) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stageVisible = false;

    const pause = (state) => {
      video.pause();
      stage.dataset.videoState = state;
    };

    const sync = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      if (reducedMotion.matches) {
        if (video.readyState >= 1) video.currentTime = 0;
        pause('reduced');
        return;
      }

      if (!stageVisible || document.hidden) {
        pause('paused');
        return;
      }

      const play = video.play();
      if (play?.then) {
        play
          .then(() => { stage.dataset.videoState = 'playing'; })
          .catch(() => { stage.dataset.videoState = 'blocked'; });
      }
    };

    video.addEventListener('loadedmetadata', sync);
    document.addEventListener('visibilitychange', sync);
    reducedMotion.addEventListener?.('change', sync);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        stageVisible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
        sync();
      }, { threshold: [0, 0.5] });
      observer.observe(stage);
    } else {
      stageVisible = true;
      sync();
    }

    stage.dataset.videoState = 'loading';
    sync();
  }

  function initWizardVideo() {
    const video = $('[data-wizard-video]');
    const stage = video?.closest('.chapter--wizard');
    if (!video || !stage) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stageVisible = false;

    const pause = (state) => {
      video.pause();
      stage.dataset.videoState = state;
    };

    const sync = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      if (reducedMotion.matches) {
        if (video.readyState >= 1) video.currentTime = 0;
        pause('reduced');
        return;
      }

      if (!stageVisible || document.hidden) {
        pause('paused');
        return;
      }

      const play = video.play();
      if (play?.then) {
        play
          .then(() => { stage.dataset.videoState = 'playing'; })
          .catch(() => { stage.dataset.videoState = 'blocked'; });
      }
    };

    video.addEventListener('loadedmetadata', sync);
    document.addEventListener('visibilitychange', sync);
    reducedMotion.addEventListener?.('change', sync);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        stageVisible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
        sync();
      }, { threshold: [0, 0.45] });
      observer.observe(stage);
    } else {
      stageVisible = true;
      sync();
    }

    stage.dataset.videoState = 'loading';
    sync();
  }

  function initCapabilitiesVideo() {
    const video = $('[data-capabilities-video]');
    const stage = video?.closest('.chapter--capabilities');
    if (!video || !stage) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stageVisible = false;

    const pause = (state) => {
      video.pause();
      stage.dataset.videoState = state;
    };

    const sync = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      if (reducedMotion.matches) {
        if (video.readyState >= 1) video.currentTime = 0;
        pause('reduced');
        return;
      }

      if (!stageVisible || document.hidden) {
        pause('paused');
        return;
      }

      const play = video.play();
      if (play?.then) {
        play
          .then(() => { stage.dataset.videoState = 'playing'; })
          .catch(() => { stage.dataset.videoState = 'blocked'; });
      }
    };

    video.addEventListener('loadedmetadata', sync);
    document.addEventListener('visibilitychange', sync);
    reducedMotion.addEventListener?.('change', sync);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        stageVisible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
        sync();
      }, { threshold: [0, 0.45] });
      observer.observe(stage);
    } else {
      stageVisible = true;
      sync();
    }

    stage.dataset.videoState = 'loading';
    sync();
  }

  function initApplicationsVideo() {
    const video = $('[data-applications-video]');
    const stage = video?.closest('.chapter--applications');
    if (!video || !stage) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stageVisible = false;

    const pause = (state) => {
      video.pause();
      stage.dataset.videoState = state;
    };

    const sync = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      if (reducedMotion.matches) {
        if (video.readyState >= 1) video.currentTime = 0;
        pause('reduced');
        return;
      }

      if (!stageVisible || document.hidden) {
        pause('paused');
        return;
      }

      const play = video.play();
      if (play?.then) {
        play
          .then(() => { stage.dataset.videoState = 'playing'; })
          .catch(() => { stage.dataset.videoState = 'blocked'; });
      }
    };

    video.addEventListener('loadedmetadata', sync);
    document.addEventListener('visibilitychange', sync);
    reducedMotion.addEventListener?.('change', sync);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        stageVisible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
        sync();
      }, { threshold: [0, 0.45] });
      observer.observe(stage);
    } else {
      stageVisible = true;
      sync();
    }

    stage.dataset.videoState = 'loading';
    sync();
  }

  function initProcessVideo() {
    const video = $('[data-process-video]');
    const stage = video?.closest('.chapter--map');
    if (!video || !stage) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stageVisible = false;

    const pause = (state) => {
      video.pause();
      stage.dataset.videoState = state;
    };

    const sync = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      if (reducedMotion.matches) {
        if (video.readyState >= 1) video.currentTime = 0;
        pause('reduced');
        return;
      }

      if (!stageVisible || document.hidden) {
        pause('paused');
        return;
      }

      const play = video.play();
      if (play?.then) {
        play
          .then(() => { stage.dataset.videoState = 'playing'; })
          .catch(() => { stage.dataset.videoState = 'blocked'; });
      }
    };

    video.addEventListener('loadedmetadata', sync);
    document.addEventListener('visibilitychange', sync);
    reducedMotion.addEventListener?.('change', sync);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        stageVisible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
        sync();
      }, { threshold: [0, 0.45] });
      observer.observe(stage);
    } else {
      stageVisible = true;
      sync();
    }

    stage.dataset.videoState = 'loading';
    sync();
  }

  function initEpilogueVideo() {
    const video = $('[data-epilogue-video]');
    const stage = video?.closest('.chapter--epilogue');
    if (!video || !stage) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stageVisible = false;

    const pause = (state) => {
      video.pause();
      stage.dataset.videoState = state;
    };

    const sync = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      if (reducedMotion.matches) {
        if (video.readyState >= 1) video.currentTime = 0;
        pause('reduced');
        return;
      }

      if (!stageVisible || document.hidden) {
        pause('paused');
        return;
      }

      const play = video.play();
      if (play?.then) {
        play
          .then(() => { stage.dataset.videoState = 'playing'; })
          .catch(() => { stage.dataset.videoState = 'blocked'; });
      }
    };

    video.addEventListener('loadedmetadata', sync);
    document.addEventListener('visibilitychange', sync);
    reducedMotion.addEventListener?.('change', sync);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        stageVisible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
        sync();
      }, { threshold: [0, 0.45] });
      observer.observe(stage);
    } else {
      stageVisible = true;
      sync();
    }

    stage.dataset.videoState = 'loading';
    sync();
  }

  function initChapterNavigation() {
    const chapters = $$('[data-chapter]:not([data-deck-hidden="true"])');
    const navLinks = $$('[data-nav]');
    const activeNumber = $('[data-active-number]');
    const activeLabel = $('[data-active-label]');
    const headerTracker = $('[data-header-tracker]');
    const visible = new Map();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let currentNumber = null;
    let sceneTimer = 0;

    const setActive = (number) => {
      const index = chapters.findIndex((chapter) => chapter.dataset.chapter === number);
      if (index < 0) return;

      if (currentNumber !== null && currentNumber !== number && !reducedMotion.matches) {
        window.clearTimeout(sceneTimer);
        document.body.classList.remove('is-scene-changing');
        void document.body.offsetWidth;
        document.body.classList.add('is-scene-changing');
        sceneTimer = window.setTimeout(() => {
          document.body.classList.remove('is-scene-changing');
        }, 760);
      }

      currentNumber = number;
      const visibleNumber = twoDigits(index);
      document.body.dataset.activeChapter = number;
      chapters.forEach((chapter) => {
        chapter.classList.toggle('is-current', chapter.dataset.chapter === number);
      });

      navLinks.forEach((link) => {
        const active = link.dataset.nav === number;
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });

      if (activeNumber) activeNumber.textContent = visibleNumber;
      if (activeLabel) {
        activeLabel.textContent = chapters[index].dataset.headerLabel || "Wizard";
      }
      if (headerTracker) {
        const finalChapter = String(Math.max(0, chapters.length - 1)).padStart(2, "0");
        headerTracker.setAttribute("aria-valuenow", String(index));
        headerTracker.setAttribute(
          "aria-valuetext",
          index === 0
            ? "Portada"
            : `${visibleNumber} de ${finalChapter} · ${chapters[index].dataset.headerLabel || "Wizard"}`,
        );
      }
      document.documentElement.style.setProperty(
        "--chapter-progress",
        String((index + 1) / Math.max(1, chapters.length)),
      );

    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) visible.set(entry.target, entry.intersectionRatio);
            else visible.delete(entry.target);
          });

          const current = [...visible.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
          if (current) setActive(current.dataset.chapter);
        },
        { rootMargin: "-20% 0px -48%", threshold: [0, 0.15, 0.35, 0.6] },
      );
      chapters.forEach((chapter) => observer.observe(chapter));
    }

    setActive("00");
  }

  function initPresentationNavigation() {
    const anchors = $$('[data-present-step]:not([data-deck-hidden="true"])');
    const previous = $('[data-prev]');
    const next = $('[data-next]');
    const current = $('[data-present-current]');
    const total = $('[data-present-total]');
    const header = $('[data-header]');
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!anchors.length || !previous || !next) return;

    let stops = [];
    let activeIndex = 0;
    let scrollFrame = 0;
    let resizeFrame = 0;
    let navigationLockUntil = 0;
    let navigationTimer = 0;

    const documentTop = (element) => window.scrollY + element.getBoundingClientRect().top;
    const clampScroll = (value) =>
      Math.max(0, Math.min(Math.max(0, document.documentElement.scrollHeight - window.innerHeight), value));
    const buildStops = () => {
      const headerHeight = header?.offsetHeight || 0;
      stops = anchors.map((anchor, index) => {
        const chapter = anchor.closest('[data-chapter]');
        return {
          chapter,
          id: anchor.id,
          label: anchor.dataset.presentLabel || `Momento ${index + 1}`,
          semantic: true,
          top: clampScroll(documentTop(anchor) - headerHeight),
        };
      }).sort((a, b) => a.top - b.top);
      if (total) total.textContent = twoDigits(Math.max(0, stops.length - 1));
    };

    const stepLabel = (index) => stops[index]?.label || `Momento ${index + 1}`;

    const setDisabled = (control, disabled) => {
      control.setAttribute("aria-disabled", String(disabled));
      control.tabIndex = disabled ? -1 : 0;
    };

    const updateControls = (index) => {
      activeIndex = Math.max(0, Math.min(stops.length - 1, index));
      const previousIndex = Math.max(0, activeIndex - 1);
      const nextIndex = Math.min(stops.length - 1, activeIndex + 1);
      const onCover = stops[activeIndex]?.chapter?.id === "cover";

      previous.href = `#${stops[previousIndex].id}`;
      next.href = `#${stops[nextIndex].id}`;
      previous.setAttribute(
        "aria-label",
        activeIndex === 0 ? "Inicio de la presentación" : `Anterior: ${stepLabel(previousIndex)}`,
      );
      next.setAttribute(
        "aria-label",
        activeIndex === stops.length - 1
          ? "Final de la presentación"
          : `Siguiente: ${stepLabel(nextIndex)}`,
      );
      setDisabled(previous, activeIndex === 0);
      setDisabled(next, activeIndex === stops.length - 1);
      if (current) current.textContent = twoDigits(activeIndex);
      document.body.classList.toggle("is-cover", onCover);
    };

    const findActiveIndex = () => {
      const navigationLine = window.scrollY + 32;
      let index = 0;
      stops.forEach((stop, stopIndex) => {
        if (stop.top <= navigationLine) index = stopIndex;
      });
      return index;
    };

    const syncFromScroll = () => {
      if (Date.now() < navigationLockUntil) return;
      updateControls(findActiveIndex());
    };

    const navigateTo = (index) => {
      const nextIndex = Math.max(0, Math.min(stops.length - 1, index));
      const stop = stops[nextIndex];

      clearTimeout(navigationTimer);
      navigationLockUntil = reducedMotion.matches ? 0 : Date.now() + 850;
      updateControls(nextIndex);
      window.scrollTo({ top: stop.top, behavior: reducedMotion.matches ? "auto" : "smooth" });
      if (stop.chapter?.id && window.history?.replaceState) {
        window.history.replaceState(null, "", `#${stop.chapter.id}`);
      }

      navigationTimer = window.setTimeout(() => {
        navigationLockUntil = 0;
        syncFromScroll();
      }, reducedMotion.matches ? 0 : 900);
    };

    const navigateRelative = (direction) => {
      const baseIndex = Date.now() < navigationLockUntil ? activeIndex : findActiveIndex();
      navigateTo(baseIndex + direction);
    };

    const alignInitialHash = () => {
      const targetId = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!targetId) return false;
      const targetIndex = stops.findIndex((stop) => stop.semantic && stop.id === targetId);
      if (targetIndex < 0) return false;

      navigationLockUntil = Date.now() + 720;
      updateControls(targetIndex);
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo({ top: stops[targetIndex].top, behavior: "auto" });
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
      });
      return true;
    };

    previous.addEventListener("click", (event) => {
      event.preventDefault();
      if (activeIndex === 0 && findActiveIndex() === 0) return;
      navigateRelative(-1);
    });

    next.addEventListener("click", (event) => {
      event.preventDefault();
      if (activeIndex === stops.length - 1 && findActiveIndex() === stops.length - 1) return;
      navigateRelative(1);
    });

    $$('[data-nav], .brand, .direct-nav a').forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href")?.slice(1);
        const targetIndex = stops.findIndex((stop) => stop.semantic && stop.id === targetId);
        if (targetIndex < 0) return;
        event.preventDefault();
        navigateTo(targetIndex);
      });
    });

    window.addEventListener(
      "scroll",
      () => {
        cancelAnimationFrame(scrollFrame);
        scrollFrame = requestAnimationFrame(syncFromScroll);
      },
      { passive: true },
    );
    window.addEventListener(
      "resize",
      () => {
        cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(() => {
          buildStops();
          syncFromScroll();
        });
      },
      { passive: true },
    );
    window.addEventListener("scrollend", () => {
      navigationLockUntil = 0;
      syncFromScroll();
    });
    window.addEventListener("load", () => {
      buildStops();
      if (!alignInitialHash()) syncFromScroll();
      window.setTimeout(() => {
        buildStops();
        if (!alignInitialHash()) syncFromScroll();
      }, 520);
    });
    buildStops();
    requestAnimationFrame(() => {
      if (!alignInitialHash()) syncFromScroll();
      window.setTimeout(() => {
        buildStops();
        if (!alignInitialHash()) syncFromScroll();
      }, 140);
    });
  }

  function initIndustries() {
    const root = $('[data-industry-ui]');
    if (!root) return;

    const stage = root.closest('.industry-board');
    const video = $('[data-industry-video]', stage || document);
    const list = $('[data-industry-list]', root);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stageVisible = false;
    let activeStep = 4;
    let pulseTimer = 0;

    // Visual reading order for the nine-cell field. The centre profession is
    // stored last in the data set so the established outer layout stays stable.
    const pulseOrder = [0, 1, 2, 3, 8, 4, 5, 7, 6];

    const syncVideo = () => {
      if (!video) return;
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      if (reducedMotion.matches) {
        if (video.readyState >= 1) video.currentTime = 0;
        video.pause();
        stage.dataset.videoState = 'reduced';
        return;
      }

      if (!stageVisible || document.hidden) {
        video.pause();
        stage.dataset.videoState = 'paused';
        return;
      }

      const play = video.play();
      if (play?.then) {
        play
          .then(() => { stage.dataset.videoState = 'playing'; })
          .catch(() => { stage.dataset.videoState = 'blocked'; });
      }
    };

    DATA.industries.forEach((industry) => {
      const tile = document.createElement("li");
      tile.dataset.code = industry.code;
      tile.textContent = industry.name;
      list.append(tile);
    });

    const tiles = $$('li', list);

    const setActiveIndustry = (step) => {
      activeStep = (step + pulseOrder.length) % pulseOrder.length;
      const activeTileIndex = pulseOrder[activeStep];
      tiles.forEach((tile, index) => {
        tile.classList.toggle('is-active', index === activeTileIndex);
      });
    };

    const stopPulse = () => {
      window.clearInterval(pulseTimer);
      pulseTimer = 0;
    };

    const syncPulse = () => {
      stopPulse();
      setActiveIndustry(activeStep);

      if (!stageVisible || document.hidden || reducedMotion.matches) return;

      pulseTimer = window.setInterval(() => {
        setActiveIndustry(activeStep + 1);
      }, 1350);
    };

    video?.addEventListener('loadedmetadata', syncVideo);
    document.addEventListener('visibilitychange', () => {
      syncVideo();
      syncPulse();
    });
    reducedMotion.addEventListener?.('change', () => {
      syncVideo();
      syncPulse();
    });

    if ('IntersectionObserver' in window && stage) {
      const observer = new IntersectionObserver(([entry]) => {
        stageVisible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        syncVideo();
        syncPulse();
      }, { threshold: [0, 0.35] });
      observer.observe(stage);
    } else {
      stageVisible = true;
      syncVideo();
      syncPulse();
    }

    if (stage) stage.dataset.videoState = 'loading';
    syncVideo();
    setActiveIndustry(activeStep);
  }

  function initCarousel() {
    const root = $('[data-carousel]');
    if (!root) return;

    const viewport = $(".carousel__viewport", root);
    const track = $('[data-carousel-track]', root);
    const current = $('[data-carousel-current]', root);
    const total = $('[data-carousel-total]', root);
    const progress = $('[data-carousel-progress]', root);
    const previous = $('[data-carousel-prev]', root);
    const next = $('[data-carousel-next]', root);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const autoplayDelay = 5000;
    let activeIndex = 0;
    let scrollFrame = 0;
    let scrollIdleTimer = 0;
    let autoplayTimer = 0;
    let carouselVisible = false;
    let pointerInside = false;
    let pointerActive = false;
    let focusInside = false;

    DATA.applications.forEach((application, index) => {
      const card = document.createElement("article");
      card.className = "application-card";
      card.setAttribute("role", "group");
      card.setAttribute("aria-roledescription", "diapositiva");
      card.setAttribute(
        "aria-label",
        `${index + 1} de ${DATA.applications.length}: ${application.name}. ${application.text}`,
      );
      card.innerHTML = `
        <p class="application-card__number">APLICACIÓN / ${twoDigits(index + 1)}</p>
        <h3>${escapeHtml(application.name)}</h3>
      `;
      track.append(card);
    });

    const cards = $$(".application-card", track);
    if (total) total.textContent = twoDigits(cards.length);
    const updateMeta = () => {
      current.textContent = twoDigits(activeIndex + 1);
      progress.style.transform = `scaleX(${(activeIndex + 1) / cards.length})`;
      cards.forEach((card, index) => {
        card.classList.toggle('is-current', index === activeIndex);
      });
    };

    const autoplayState = () => {
      if (reducedMotion.matches) return 'reduced';
      if (document.hidden) return 'hidden';
      if (!carouselVisible) return 'offscreen';
      if (pointerInside || pointerActive || focusInside) return 'paused';
      return 'ready';
    };

    const clearAutoplay = () => {
      window.clearTimeout(autoplayTimer);
      autoplayTimer = 0;
    };

    const canAutoplay = () => autoplayState() === 'ready' && cards.length > 1;

    const scheduleAutoplay = () => {
      clearAutoplay();
      const state = autoplayState();
      root.dataset.autoplay = state;
      if (!canAutoplay()) return;

      root.dataset.autoplay = 'scheduled';
      autoplayTimer = window.setTimeout(() => {
        if (!canAutoplay()) {
          scheduleAutoplay();
          return;
        }
        const nextIndex = activeIndex === cards.length - 1 ? 0 : activeIndex + 1;
        goTo(nextIndex);
      }, autoplayDelay);
    };

    const goTo = (index) => {
      activeIndex = Math.max(0, Math.min(cards.length - 1, index));
      viewport.scrollTo({
        left: cards[activeIndex].offsetLeft,
        behavior: reducedMotion.matches ? 'auto' : 'smooth',
      });
      updateMeta();
      scheduleAutoplay();
    };

    previous.addEventListener("click", () => goTo(activeIndex - 1));
    next.addEventListener("click", () => goTo(activeIndex + 1));
    viewport.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(activeIndex - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(activeIndex + 1);
      }
    });
    viewport.addEventListener(
      "scroll",
      () => {
        cancelAnimationFrame(scrollFrame);
        scrollFrame = requestAnimationFrame(() => {
          const closest = cards.reduce(
            (result, card, index) => {
              const distance = Math.abs(card.offsetLeft - viewport.scrollLeft);
              return distance < result.distance ? { index, distance } : result;
            },
            { index: 0, distance: Number.POSITIVE_INFINITY },
          );
          if (closest.index !== activeIndex) {
            activeIndex = closest.index;
            updateMeta();
          }
          window.clearTimeout(scrollIdleTimer);
          scrollIdleTimer = window.setTimeout(scheduleAutoplay, 180);
        });
      },
      { passive: true },
    );

    if (canHover) {
      root.addEventListener('pointerenter', () => {
        pointerInside = true;
        scheduleAutoplay();
      });
      root.addEventListener('pointerleave', () => {
        pointerInside = false;
        scheduleAutoplay();
      });
    }

    root.addEventListener('pointerdown', () => {
      pointerActive = true;
      scheduleAutoplay();
    }, { passive: true });

    ['pointerup', 'pointercancel'].forEach((eventName) => {
      root.addEventListener(eventName, () => {
        pointerActive = false;
        scheduleAutoplay();
      }, { passive: true });
    });

    root.addEventListener('focusin', () => {
      focusInside = true;
      scheduleAutoplay();
    });

    root.addEventListener('focusout', () => {
      window.setTimeout(() => {
        focusInside = root.contains(document.activeElement);
        scheduleAutoplay();
      }, 0);
    });

    document.addEventListener('visibilitychange', scheduleAutoplay);
    reducedMotion.addEventListener?.('change', scheduleAutoplay);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        carouselVisible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
        scheduleAutoplay();
      }, { threshold: [0, 0.45, 0.75] });
      observer.observe(root);
    } else {
      carouselVisible = true;
    }

    updateMeta();
    scheduleAutoplay();
  }

  function initMap() {
    const shell = $('[data-map-shell]');
    if (!shell) return;

    const grid = $('[data-map-grid]', shell);
    const detail = $('[data-map-detail]', shell);
    const toggles = $$('[data-map-view]', shell);
    let view = "capabilities";
    let selected = { row: "generation", moment: "acquisition" };

    const productById = new Map(DATA.products.map((product) => [product.id, product]));
    const serviceById = new Map(DATA.services.map((service) => [service.id, service]));

    const getRows = () => (view === "capabilities" ? DATA.capabilities : DATA.products);
    const getRelation = (row, momentId) => row.relations[momentId];
    const entityName = (id) => {
      if (id.startsWith("service:")) return serviceById.get(id.split(":")[1])?.name || id;
      return productById.get(id)?.name || id;
    };

    const renderDetail = () => {
      const row = getRows().find((item) => item.id === selected.row);
      const moment = DATA.moments.find((item) => item.id === selected.moment);
      const relation = getRelation(row, selected.moment);

      if (view === "capabilities") {
        detail.innerHTML = `
          <p class="map-detail__coords">${escapeHtml(row.name)} × ${escapeHtml(moment.kicker)}</p>
          <h3>${escapeHtml(relation.opportunity)}</h3>
          <p class="map-detail__description">${escapeHtml(row.description)}</p>
          <p class="map-detail__label">Máquinas o servicios pertinentes</p>
          <ul class="entity-list">
            ${relation.entities.map((id) => `<li>${escapeHtml(entityName(id))}</li>`).join("")}
          </ul>
          <p class="map-detail__config">Configuración e integración según el proceso real.</p>
        `;
      } else {
        detail.innerHTML = `
          <p class="map-detail__coords">${escapeHtml(row.name)} × ${escapeHtml(moment.kicker)}</p>
          <h3>${escapeHtml(relation)}</h3>
          <p class="map-detail__description">${escapeHtml(row.description)}</p>
          <p class="map-detail__label">Máquina relacionada</p>
          <ul class="entity-list"><li>${escapeHtml(row.name)}</li></ul>
          <p class="map-detail__config">La relación muestra una aplicación posible; no una función incluida automáticamente.</p>
        `;
      }
    };

    const applySelection = () => {
      $$('[data-map-row]', grid).forEach((element) => {
        element.classList.toggle("is-active", element.dataset.mapRow === selected.row);
      });
      $$('[data-map-moment]', grid).forEach((element) => {
        element.classList.toggle("is-active", element.dataset.mapMoment === selected.moment);
      });
      $$('[data-map-cell]', grid).forEach((cell) => {
        const sameRow = cell.dataset.mapRow === selected.row;
        const sameMoment = cell.dataset.mapMoment === selected.moment;
        cell.classList.toggle("is-row", sameRow);
        cell.classList.toggle("is-col", sameMoment);
        cell.classList.toggle("is-selected", sameRow && sameMoment);
        if (cell.matches("button")) cell.setAttribute("aria-pressed", String(sameRow && sameMoment));
      });
      renderDetail();
    };

    const selectCell = (rowId, momentId) => {
      selected = { row: rowId, moment: momentId };
      applySelection();
    };

    const render = () => {
      const rows = getRows();
      grid.replaceChildren();

      const corner = document.createElement("div");
      corner.className = "map-corner";
      corner.textContent = view === "capabilities" ? "Capacidad / momento" : "Máquina / momento";
      grid.append(corner);

      DATA.moments.forEach((moment) => {
        const heading = document.createElement("div");
        heading.className = "map-column";
        heading.dataset.mapMoment = moment.id;
        heading.innerHTML = `<span>${escapeHtml(moment.kicker)}</span><strong>${escapeHtml(moment.label)}</strong>`;
        grid.append(heading);
      });

      rows.forEach((row) => {
        const rowLabel = document.createElement("div");
        rowLabel.className = "map-row-label";
        rowLabel.dataset.mapRow = row.id;
        rowLabel.textContent = row.name;
        grid.append(rowLabel);

        DATA.moments.forEach((moment) => {
          const relation = getRelation(row, moment.id);
          const cell = document.createElement(relation ? "button" : "div");
          cell.className = `map-cell${relation ? "" : " is-empty"}`;
          cell.dataset.mapCell = "";
          cell.dataset.mapRow = row.id;
          cell.dataset.mapMoment = moment.id;
          if (relation) {
            cell.type = "button";
            cell.setAttribute("aria-pressed", "false");
            cell.setAttribute("aria-label", `${row.name} en ${moment.label}`);
            cell.addEventListener("click", () => selectCell(row.id, moment.id));
          } else {
            cell.setAttribute("aria-hidden", "true");
          }
          cell.innerHTML = '<span class="map-cell__node" aria-hidden="true"></span>';
          grid.append(cell);
        });
      });

      applySelection();
    };

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        view = toggle.dataset.mapView;
        toggles.forEach((button) =>
          button.setAttribute("aria-pressed", String(button === toggle)),
        );
        selected =
          view === "capabilities"
            ? { row: "generation", moment: "acquisition" }
            : { row: "core", moment: "acquisition" };
        render();
      });
    });

    render();
  }

  function initMachines() {
    const catalog = $('[data-machine-catalog]');
    if (!catalog) return;

    const list = $('[data-machine-list]', catalog);
    const panel = $('[data-machine-panel]', catalog);
    const chapter = catalog.closest('.chapter');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const videoByProductId = new Map(
      (DATA.productVideos || []).map((video) => [video.productId, video]),
    );
    const familyById = new Map(
      (DATA.productFamilies || []).map((family) => [family.id, family]),
    );
    const routeItems = $$('.machine-catalog__route [data-moment]', catalog);
    let activeIndex = 0;
    let catalogVisible = false;
    const desktopMachineLayout = window.matchMedia('(min-width: 821px)');

    const syncPanelLayout = () => {
      const media = $('.machine-panel__media', panel);
      const video = $('video[data-machine-product-video]', panel);
      if (!media || !desktopMachineLayout.matches) {
        panel.style.removeProperty('--product-media-width');
        panel.dataset.layoutState = 'stacked';
        return;
      }

      const panelWidth = panel.clientWidth;
      const panelHeight = panel.clientHeight;
      if (!panelWidth || !panelHeight) return;

      const videoAspect = video?.videoWidth && video?.videoHeight
        ? video.videoWidth / video.videoHeight
        : 16 / 9;
      const minimumCopyWidth = Math.min(300, panelWidth);
      const mediaWidth = Math.max(
        0,
        Math.min(panelHeight * videoAspect, panelWidth - minimumCopyWidth),
      );

      panel.style.setProperty('--product-media-width', `${mediaWidth.toFixed(2)}px`);
      panel.dataset.layoutState = 'synced';
    };

    if ('ResizeObserver' in window) {
      const panelResizeObserver = new ResizeObserver(syncPanelLayout);
      panelResizeObserver.observe(panel);
    } else {
      window.addEventListener('resize', syncPanelLayout, { passive: true });
    }
    desktopMachineLayout.addEventListener?.('change', syncPanelLayout);

    const syncPanelVideo = () => {
      const video = $('video[data-machine-product-video]', panel);
      if (!video) return;

      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      if (reducedMotion.matches) {
        if (video.readyState >= 1) video.currentTime = 0;
        video.pause();
        panel.dataset.videoState = 'reduced';
        return;
      }

      if (!catalogVisible || document.hidden) {
        video.pause();
        panel.dataset.videoState = 'paused';
        return;
      }

      const play = video.play();
      if (play && typeof play.catch === 'function') {
        play.then(() => {
          panel.dataset.videoState = 'playing';
        }).catch(() => {
          panel.dataset.videoState = 'paused';
        });
      }
    };

    DATA.products.forEach((product, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "machine-tab";
      button.id = `machine-tab-${product.id}`;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", String(index === 0));
      button.setAttribute("aria-controls", "machine-panel");
      button.setAttribute(
        "aria-label",
        `${product.name}: ${product.tagline || product.description}`,
      );
      button.dataset.moment = product.primaryMoment;
      button.title = `${product.name} · ${product.tagline || product.description}`;
      button.tabIndex = index === 0 ? 0 : -1;
      button.innerHTML = `
        <span>${twoDigits(index + 1)}</span>
        <span class="machine-tab__copy">
          <strong>${escapeHtml(product.name)}</strong>
          <small>${escapeHtml(product.tagline || product.description)}</small>
        </span>
        <i aria-hidden="true"></i>
      `;
      button.addEventListener("click", () => activate(index));
      list.append(button);
    });

    const buttons = $$('.machine-tab', list);
    panel.id = "machine-panel";
    panel.setAttribute("role", "tabpanel");

    const activate = (index, moveFocus = false) => {
      activeIndex = (index + DATA.products.length) % DATA.products.length;
      const product = DATA.products[activeIndex];
      const family = familyById.get(product.primaryMoment) || {
        number: twoDigits(activeIndex + 1),
        name: product.primaryMoment,
        description: "",
      };

      buttons.forEach((button, buttonIndex) => {
        const isActive = buttonIndex === activeIndex;
        button.setAttribute("aria-selected", String(isActive));
        button.tabIndex = isActive ? 0 : -1;
      });

      routeItems.forEach((item) => {
        const isActive = item.dataset.moment === product.primaryMoment;
        item.classList.toggle('is-active', isActive);
        if (isActive) item.setAttribute('aria-current', 'step');
        else item.removeAttribute('aria-current');
      });

      const videoMeta = videoByProductId.get(product.id);
      const videoLabel = videoMeta?.label || product.name;
      const demoLink = product.demoUrl
        ? `<a
            class="machine-panel__demo machine-panel__demo--orb"
            href="${escapeHtml(product.demoUrl)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir ${escapeHtml(product.demoName || product.name)} en una nueva pestaña"
          >
            <span class="machine-panel__orb" aria-hidden="true"><i></i></span>
            <span class="machine-panel__demo-copy">
              <small>${escapeHtml(product.demoLabel || "Demo interactivo")}</small>
              <strong>${escapeHtml(product.demoName || product.name)}</strong>
            </span>
            <span class="machine-panel__demo-arrow" aria-hidden="true">↗</span>
          </a>`
        : "";
      const previousVideo = $('video[data-machine-product-video]', panel);
      previousVideo?.pause();

      panel.setAttribute("aria-labelledby", `machine-tab-${product.id}`);
      panel.dataset.moment = product.primaryMoment;
      panel.dataset.product = product.id;
      panel.dataset.productStage = "true";
      panel.dataset.hasVideo = String(Boolean(videoMeta?.src));
      const media = videoMeta?.src
        ? `<video
            data-machine-product-video
            muted
            loop
            playsinline
            preload="metadata"
            aria-hidden="true"
            tabindex="-1"
          >
            <source src="${escapeHtml(videoMeta.src)}" type="video/mp4" />
          </video>`
        : `<div class="machine-panel__media-placeholder" aria-hidden="true">
            <span>DEMO EN PREPARACIÓN / ${escapeHtml(videoLabel)}</span>
            <i></i><i></i><i></i>
          </div>`;

      panel.innerHTML = `
        <div class="machine-panel__media" aria-hidden="true">
          ${media}
          <div class="machine-panel__veil"></div>
        </div>
        <div class="machine-panel__copy">
          <p class="machine-panel__index"><span>${escapeHtml(family.number)} / ${escapeHtml(family.name)}</span>${videoMeta?.src ? '' : '<span>Video en preparación</span>'}</p>
          <h3>${escapeHtml(product.name)}</h3>
          <p class="machine-panel__role">${escapeHtml(product.tagline)}</p>
          <p>${escapeHtml(product.description)}</p>
          ${demoLink}
          <div class="machine-panel__family" aria-label="Propósito de ${escapeHtml(family.name)}">
            <span>${escapeHtml(family.name)}</span>
            <p>${escapeHtml(family.description)}</p>
          </div>
        </div>
      `;

      const activeVideo = $('video[data-machine-product-video]', panel);
      panel.dataset.videoState = activeVideo ? 'loading' : 'pending';
      activeVideo?.addEventListener('loadedmetadata', syncPanelLayout, { once: true });
      syncPanelLayout();
      requestAnimationFrame(syncPanelLayout);
      syncPanelVideo();
      buttons[activeIndex].scrollIntoView?.({ block: 'nearest', inline: 'nearest' });
      if (moveFocus) buttons[activeIndex].focus();
    };

    list.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      if (event.key === "Home") activate(0, true);
      else if (event.key === "End") activate(DATA.products.length - 1, true);
      else if (["ArrowDown", "ArrowRight"].includes(event.key)) activate(activeIndex + 1, true);
      else activate(activeIndex - 1, true);
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        catalogVisible = entry.isIntersecting;
        syncPanelVideo();
      }, { threshold: 0.16 });
      observer.observe(chapter || catalog);
    } else {
      catalogVisible = true;
    }

    document.addEventListener('visibilitychange', syncPanelVideo);
    reducedMotion.addEventListener?.('change', syncPanelVideo);
    activate(0);
  }

  function initCases() {
    const showcase = $('[data-case-showcase]');
    const cases = DATA.cases || [];
    if (!showcase || !cases.length) return;

    const list = $('[data-case-list]', showcase);
    const panel = $('[data-case-panel]', showcase);
    const chapter = showcase.closest('.chapter--cases');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let activeIndex = Math.max(0, cases.findIndex((item) => item.id === 'within'));
    let showcaseVisible = true;
    let activeCaseVideo = null;

    function syncCaseVideo() {
      if (!activeCaseVideo) return;
      const shouldPlay = showcaseVisible && !document.hidden && !reducedMotion.matches;
      activeCaseVideo.controls = reducedMotion.matches;
      if (shouldPlay) {
        activeCaseVideo.play().catch(() => {
          activeCaseVideo.controls = true;
        });
      } else {
        activeCaseVideo.pause();
      }
    }

    function applyCaseTheme(element, item) {
      const theme = item.theme || {};
      const tokens = [
        ['--case-accent', theme.accent],
        ['--case-accent-alt', theme.accentAlt],
        ['--case-accent-ink', theme.ink],
      ];
      tokens.forEach(([property, value]) => {
        if (value && CSS.supports('color', value)) element.style.setProperty(property, value);
      });
    }

    cases.forEach((item, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'case-selector__item';
      button.id = `case-tab-${item.id}`;
      button.dataset.family = item.family;
      button.dataset.caseId = item.id;
      applyCaseTheme(button, item);
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', 'case-panel');
      button.setAttribute('aria-selected', String(index === activeIndex));
      button.tabIndex = index === activeIndex ? 0 : -1;
      button.innerHTML = `
        <span>${twoDigits(index + 1)}</span>
        <strong>${escapeHtml(item.client)}</strong>
        <small>${escapeHtml(item.familyLabel)}</small>
      `;
      button.addEventListener('click', () => activate(index));
      list.append(button);
    });

    const buttons = $$('.case-selector__item', list);
    panel.id = 'case-panel';
    panel.setAttribute('role', 'tabpanel');

    function activate(index, moveFocus = false) {
      activeIndex = (index + cases.length) % cases.length;
      const item = cases[activeIndex];

      activeCaseVideo?.pause();
      activeCaseVideo = null;

      buttons.forEach((button, buttonIndex) => {
        const isActive = buttonIndex === activeIndex;
        button.setAttribute('aria-selected', String(isActive));
        button.tabIndex = isActive ? 0 : -1;
      });

      panel.classList.add('is-switching');
      panel.dataset.family = item.family;
      panel.dataset.caseId = item.id;
      applyCaseTheme(panel, item);
      if (chapter) {
        chapter.dataset.activeCase = item.id;
        applyCaseTheme(chapter, item);
      }
      panel.setAttribute('aria-labelledby', `case-tab-${item.id}`);
      const moments = item.moments?.length
        ? item.moments
        : [{ id: item.family, label: item.familyLabel }];
      const enablement = item.enablement?.length
        ? item.enablement
        : item.scope;
      const logoItems = item.logos?.length
        ? item.logos
        : item.logo
          ? [{ src: item.logo, className: item.logoClass || '', label: item.client }]
          : [];
      const logoMarkup = logoItems.length
        ? `<div class="case-viewer__logos${logoItems.length > 1 ? ' is-multiple' : ''}">
            ${logoItems.map((logo) => `<span class="case-viewer__logo-tile" data-logo-label="${escapeHtml(logo.label || item.client)}">
              <img class="case-viewer__logo ${escapeHtml(logo.className || '')}" data-case-logo src="${escapeHtml(logo.src)}" alt="" loading="eager" decoding="async">
            </span>`).join('')}
          </div>`
        : `<span class="case-viewer__monogram">${escapeHtml(item.code)}</span>`;
      const media = item.media && ['image', 'video'].includes(item.media.type) && item.media.src
        ? item.media
        : null;
      const mediaKind = media?.type === 'video' ? 'VIDEO' : media?.type === 'image' ? 'IMAGEN' : 'IDENTIDAD';
      const mediaMarkup = media?.type === 'video'
        ? `<video class="case-viewer__media" data-case-media="video" src="${escapeHtml(media.src)}" ${media.poster ? `poster="${escapeHtml(media.poster)}"` : ''} muted loop playsinline preload="metadata" aria-label="${escapeHtml(media.alt || `Video del trabajo realizado para ${item.client}`)}"></video>`
        : media?.type === 'image'
          ? `<img class="case-viewer__media" data-case-media="image" src="${escapeHtml(media.src)}" alt="${escapeHtml(media.alt || `Trabajo realizado para ${item.client}`)}" loading="eager" decoding="async">`
          : `<div class="case-viewer__fallback" data-case-media-fallback>
              <span>VISOR PREPARADO</span>
              ${logoMarkup}
              <small>Imagen o video del trabajo</small>
            </div>`;
      panel.innerHTML = `
        <div class="case-panel__copy">
          <p class="case-panel__meta"><span>CASO / ${escapeHtml(item.code)}</span><strong>${escapeHtml(item.client)}</strong></p>
          <div class="case-panel__moments" aria-label="Momentos del negocio">
            ${moments.map((moment) => `<span data-moment="${escapeHtml(moment.id)}">${escapeHtml(moment.label)}</span>`).join('')}
          </div>
          <div class="case-panel__narrative">
            <section class="case-info-block case-info-block--challenge">
              <p class="case-panel__kicker" data-case-index-step="challenge">01 / El reto</p>
              <h3>${escapeHtml(item.challenge || item.headline)}</h3>
              <p class="case-panel__summary">${escapeHtml(item.summary)}</p>
            </section>
            <section class="case-info-block case-info-block--solution">
              <p class="case-panel__kicker" data-case-index-step="solution">02 / La solución Wizard</p>
              <h4>${escapeHtml(item.evidenceTitle || item.headline)}</h4>
              <p class="case-panel__modules-label">Lo que instalamos</p>
              <ol class="case-panel__modules">
                ${item.scope.map((scope, scopeIndex) => `<li><span>0${scopeIndex + 1}</span><strong>${escapeHtml(scope)}</strong></li>`).join('')}
              </ol>
            </section>
            <section class="case-info-block case-info-block--benefits">
              <header>
                <p class="case-panel__kicker" data-case-index-step="benefits">03 / Beneficios para el negocio</p>
                <small>Capacidad instalada · no resultado medido</small>
              </header>
              <ol class="case-panel__benefits">
                ${enablement.map((benefit, benefitIndex) => `<li><span>0${benefitIndex + 1}</span><strong>${escapeHtml(benefit)}</strong></li>`).join('')}
              </ol>
            </section>
          </div>
        </div>
        <figure class="case-viewer" data-case-viewer data-media-kind="${media?.type || 'fallback'}">
          <div class="case-viewer__head">
            <span>WORK_VIEWER / ${escapeHtml(item.code)}</span>
            <i></i>
            <small>${media ? 'TRABAJO APLICADO' : 'LISTO PARA MATERIAL'}</small>
          </div>
          <div class="case-viewer__screen">
            ${mediaMarkup}
          </div>
          <figcaption class="case-viewer__foot"><span>${mediaKind} / ${escapeHtml(item.client)}</span><strong>${twoDigits(activeIndex + 1)} / ${twoDigits(cases.length)}</strong></figcaption>
        </figure>
      `;

      const mediaElement = $('[data-case-media]', panel);
      if (mediaElement && media?.objectPosition) mediaElement.style.objectPosition = media.objectPosition;
      activeCaseVideo = mediaElement?.tagName === 'VIDEO' ? mediaElement : null;
      syncCaseVideo();

      requestAnimationFrame(() => panel.classList.remove('is-switching'));
      buttons[activeIndex].scrollIntoView?.({ block: 'nearest', inline: 'nearest' });
      if (moveFocus) buttons[activeIndex].focus();
    }

    list.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'Home') activate(0, true);
      else if (event.key === 'End') activate(cases.length - 1, true);
      else if (['ArrowRight', 'ArrowDown'].includes(event.key)) activate(activeIndex + 1, true);
      else activate(activeIndex - 1, true);
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        showcaseVisible = entry.isIntersecting;
        syncCaseVideo();
      }, { threshold: 0.16 });
      observer.observe(chapter || showcase);
    }

    document.addEventListener('visibilitychange', syncCaseVideo);
    reducedMotion.addEventListener?.('change', syncCaseVideo);

    activate(activeIndex);
  }

  function initContact() {
    const link = $('[data-contact-link]');
    if (link) link.href = DATA.contactUrl;
  }

  function initDiscoveryBrief() {
    const brief = $('[data-discovery-brief]');
    if (!brief) return;

    const groups = $$('[data-brief-group]', brief);
    const clear = $('[data-brief-clear]', brief);
    const metadata = $$('[data-brief-meta]', brief);
    const openInputs = $$('[data-brief-open]', brief);
    const summary = $('.discovery-summary', brief);
    const copyButton = $('[data-brief-copy]', brief);
    const status = $('[data-brief-status]', brief);
    const dateInput = $('[data-brief-meta="date"]', brief);
    const emailInput = $('[data-brief-meta="email"]', brief);
    const fixedRecipient = $('[data-default-recipient]', brief);
    const defaultRecipient =
      fixedRecipient?.dataset.defaultRecipient?.trim() || "team@wizard-ai.mx";
    let summaryPulseFrame = 0;
    let summaryPulseTimer = 0;
    let copyFeedbackTimer = 0;

    const pulseSummary = () => {
      if (!summary) return;
      window.clearTimeout(summaryPulseTimer);
      window.cancelAnimationFrame(summaryPulseFrame);
      summary.classList.remove('is-updating');
      summaryPulseFrame = window.requestAnimationFrame(() => {
        summary.classList.add('is-updating');
        summaryPulseTimer = window.setTimeout(() => {
          summary.classList.remove('is-updating');
        }, 360);
      });
    };

    const setToday = () => {
      if (!dateInput || dateInput.value) return;
      const now = new Date();
      const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10);
      dateInput.value = localDate;
    };

    const selectedValues = (key) => {
      const group = groups.find((item) => item.dataset.briefGroup === key);
      if (!group) return [];
      return $$('[data-brief-option][aria-pressed="true"]', group).map(
        (button) => button.dataset.briefOption,
      );
    };

    const valueFor = (key) =>
      metadata.find((input) => input.dataset.briefMeta === key)?.value.trim() || "";

    const openValueFor = (key) =>
      openInputs.find((input) => input.dataset.briefOpen === key)?.value.trim() || "";

    const emailRecipients = () => {
      const candidates = valueFor("email")
        .replace(/[\r\n]/g, "")
        .split(",")
        .map((email) => email.trim())
        .filter(Boolean);
      const seen = new Set();

      return [defaultRecipient, ...candidates].filter((email) => {
        const key = email.toLowerCase();
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    };

    const buildBriefText = () => {
      const recipients = emailRecipients();
      const brand = valueFor("brand") || "Nuevo prospecto";
      const contact = valueFor("contact") || "Sin registrar";
      const date = valueFor("date") || "Sin registrar";
      const line = (label, values) => `${label}: ${values.length ? values.join(" · ") : "Sin elegir"}`;

      return [
        "MINI BRIEF / WIZARD",
        "",
        `Marca / empresa: ${brand}`,
        `Contacto: ${contact}`,
        `Fecha: ${date}`,
        `Correos de seguimiento: ${recipients.length ? recipients.join(" · ") : "Sin registrar"}`,
        line("Momento(s)", selectedValues("stage")),
        `Otro momento o área: ${openValueFor("stage") || "Sin nota abierta"}`,
        line("Dolor(es)", selectedValues("pain")),
        `Otro painpoint: ${openValueFor("pain") || "Sin nota abierta"}`,
        line("Producto(s) de interés", selectedValues("product")),
        `Otra idea o producto: ${openValueFor("product") || "Sin nota abierta"}`,
        "",
        "Siguiente paso sugerido: preparar una propuesta v1 del proceso.",
      ].join("\n");
    };

    const hasBriefContent = () =>
      Boolean(
        valueFor("brand") ||
          valueFor("contact") ||
          valueFor("email") ||
          openInputs.some((input) => input.value.trim()) ||
          groups.some((group) =>
            group.querySelector('[data-brief-option][aria-pressed="true"]'),
          ),
      );

    const setCopyReadyState = () => {
      if (!copyButton) return;
      window.clearTimeout(copyFeedbackTimer);
      copyButton.dataset.copyState = "idle";
      const label = $("span", copyButton);
      if (label) label.textContent = "Copiar brief";
      const ready = hasBriefContent();
      copyButton.disabled = !ready;
      copyButton.setAttribute("aria-disabled", String(!ready));
      if (status) {
        status.textContent = ready
          ? "Brief listo. Cópialo y pégalo en WhatsApp cuando tú decidas."
          : "Todo permanece local. Completa el brief para copiarlo sin salir del deck.";
      }
    };

    const copyText = async (text) => {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(text);
          return true;
        } catch (error) {
          // Continue with the legacy fallback when clipboard permission is unavailable.
        }
      }

      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.inset = "0 auto auto -9999px";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      let copied = false;
      try {
        copied = document.execCommand("copy");
      } catch (error) {
        copied = false;
      }
      textarea.remove();
      return copied;
    };

    const updateSummary = () => {
      groups.forEach((group) => {
        const key = group.dataset.briefGroup;
        const output = $(`[data-brief-summary="${key}"]`, brief);
        if (!output) return;
        const values = $$('[data-brief-option][aria-pressed="true"]', group).map(
          (button) => button.dataset.briefOption,
        );
        output.textContent = values.length ? values.join(" · ") : "Sin elegir";
      });

      $$('[data-brief-summary-meta]', brief).forEach((output) => {
        const key = output.dataset.briefSummaryMeta;
        if (key === "email") {
          output.textContent = emailRecipients().join(" · ");
          return;
        }
        const value = valueFor(key);
        output.textContent = value || "Sin registrar";
      });

      $$('[data-brief-summary-open]', brief).forEach((output) => {
        output.textContent = openValueFor(output.dataset.briefSummaryOpen) || "Sin nota";
      });

      setCopyReadyState();
      pulseSummary();
    };

    groups.forEach((group) => {
      const single = group.dataset.selection === "single";
      $$('[data-brief-option]', group).forEach((button) => {
        button.addEventListener("click", () => {
          const nextState = button.getAttribute("aria-pressed") !== "true";
          if (single) {
            $$('[data-brief-option]', group).forEach((option) =>
              option.setAttribute("aria-pressed", "false"),
            );
          }
          button.setAttribute("aria-pressed", String(nextState));
          updateSummary();
        });
      });
    });

    metadata.forEach((input) => input.addEventListener("input", updateSummary));
    openInputs.forEach((input) => input.addEventListener("input", updateSummary));
    emailInput?.addEventListener("blur", () => {
      emailInput.value = emailRecipients()
        .filter((email) => email.toLowerCase() !== defaultRecipient.toLowerCase())
        .join(", ");
      updateSummary();
    });

    copyButton?.addEventListener("click", async () => {
      if (copyButton.disabled) return;
      const copied = await copyText(buildBriefText());
      const label = $("span", copyButton);
      if (!copied) {
        if (status) status.textContent = "No se pudo copiar. Revisa el permiso del portapapeles e inténtalo de nuevo.";
        return;
      }
      copyButton.dataset.copyState = "copied";
      if (label) label.textContent = "Brief copiado";
      if (status) status.textContent = "Listo: el brief está en tu portapapeles y el deck sigue abierto.";
      copyFeedbackTimer = window.setTimeout(() => {
        copyButton.dataset.copyState = "idle";
        if (label) label.textContent = "Copiar brief";
      }, 2600);
    });

    clear?.addEventListener("click", () => {
      brief.reset();
      $$('[data-brief-option]', brief).forEach((button) =>
        button.setAttribute("aria-pressed", "false"),
      );
      setToday();
      updateSummary();
    });

    setToday();
    updateSummary();
  }

  initTubesHero();
  initRevolutionVideo();
  initWizardVideo();
  initCapabilitiesVideo();
  initApplicationsVideo();
  initProcessVideo();
  initEpilogueVideo();
  initChapterNavigation();
  initIndustries();
  initCarousel();
  initMap();
  initMachines();
  initCases();
  initContact();
  initDiscoveryBrief();
  initPresentationNavigation();
  initReveal();
})();
