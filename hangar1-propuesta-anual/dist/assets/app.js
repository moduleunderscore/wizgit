document.documentElement.classList.add('js');

(() => {
  const deck = document.querySelector('.deck');
  const slides = [...document.querySelectorAll('.slide')];
  const prevButton = document.getElementById('prev-slide');
  const nextButton = document.getElementById('next-slide');
  const currentLabel = document.getElementById('current-slide');
  const currentRoute = document.getElementById('current-route');
  const viewportLabel = document.getElementById('web-viewport');
  const progressBar = document.getElementById('progress-bar');
  const dotsContainer = document.getElementById('slide-dots');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const slideVideos = [...document.querySelectorAll('.slide video')];
  let currentIndex = 0;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;

  const formatIndex = (index) => String(index + 1).padStart(2, '0');
  const clampIndex = (index) => Math.max(0, Math.min(slides.length - 1, index));
  const syncSlideVideos = (activeSlide) => {
    slideVideos.forEach((video) => {
      const shouldPlay = video.closest('.slide') === activeSlide && !reducedMotion.matches;
      if (shouldPlay) {
        const playback = video.play();
        if (playback && typeof playback.catch === 'function') playback.catch(() => {});
      } else {
        video.pause();
        if (video.currentTime > 0) video.currentTime = 0;
      }
    });
  };
  const updateViewportLabel = () => {
    if (!viewportLabel) return;
    viewportLabel.textContent = window.innerWidth <= 760 ? 'MOBILE' : window.innerWidth <= 1100 ? 'TABLET' : 'DESKTOP';
  };

  slides.forEach((slide, index) => {
    const dot = document.createElement('button');
    dot.className = 'slide-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Ir a la slide ${index + 1}`);
    dot.addEventListener('click', () => setSlide(index, { focus: true }));
    dotsContainer.appendChild(dot);
    slide.inert = index !== 0;
  });

  const dots = [...dotsContainer.querySelectorAll('.slide-dot')];

  function setSlide(nextIndex, options = {}) {
    const targetIndex = clampIndex(nextIndex);
    if (targetIndex === currentIndex && options.initial !== true) return;

    const previousIndex = currentIndex;
    const previousSlide = slides[previousIndex];
    const nextSlide = slides[targetIndex];
    currentIndex = targetIndex;

    slides.forEach((slide, index) => {
      const active = index === currentIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
      if (active) slide.scrollTop = 0;
    });
    syncSlideVideos(nextSlide);

    if (previousSlide && previousSlide !== nextSlide && targetIndex > previousIndex && !reducedMotion.matches) {
      previousSlide.classList.add('is-leaving-left');
      window.setTimeout(() => previousSlide.classList.remove('is-leaving-left'), 620);
    }

    deck.dataset.theme = nextSlide.dataset.theme || 'dark';
    deck.dataset.slide = String(currentIndex + 1);
    currentLabel.textContent = formatIndex(currentIndex);
    if (currentRoute) currentRoute.textContent = nextSlide.dataset.route || `hangar1.mx/slide-${currentIndex + 1}`;
    progressBar.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
    dots.forEach((dot, index) => {
      if (index === currentIndex) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });

    const hash = `#slide-${currentIndex + 1}`;
    if (window.location.hash !== hash) history.replaceState(null, '', hash);

    if (options.focus) {
      const heading = nextSlide.querySelector('h1, h2');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
      }
    }
  }

  function nextSlide() { setSlide(currentIndex + 1, { focus: true }); }
  function previousSlide() { setSlide(currentIndex - 1, { focus: true }); }

  prevButton.addEventListener('click', previousSlide);
  nextButton.addEventListener('click', nextSlide);

  document.querySelectorAll('[data-go]').forEach((control) => {
    control.addEventListener('click', (event) => {
      event.preventDefault();
      setSlide(Number(control.dataset.go), { focus: true });
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const tagName = event.target instanceof HTMLElement ? event.target.tagName : '';
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tagName)) return;

    if (event.key === 'ArrowRight' || event.key === 'PageDown') {
      event.preventDefault();
      nextSlide();
    } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      event.preventDefault();
      previousSlide();
    } else if (event.key === 'Home') {
      event.preventDefault();
      setSlide(0, { focus: true });
    } else if (event.key === 'End') {
      event.preventDefault();
      setSlide(slides.length - 1, { focus: true });
    }
  });

  deck.addEventListener('touchstart', (event) => {
    if (event.touches.length !== 1) return;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
    touchStartTime = Date.now();
  }, { passive: true });

  deck.addEventListener('touchend', (event) => {
    if (event.changedTouches.length !== 1) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    const deltaY = event.changedTouches[0].clientY - touchStartY;
    const elapsed = Date.now() - touchStartTime;
    const horizontalGesture = Math.abs(deltaX) > 54 && Math.abs(deltaX) > Math.abs(deltaY) * 1.35;
    if (!horizontalGesture || elapsed > 700) return;
    if (deltaX < 0) nextSlide();
    else previousSlide();
  }, { passive: true });

  window.addEventListener('hashchange', () => {
    const match = window.location.hash.match(/^#slide-(\d+)$/);
    if (match) setSlide(Number(match[1]) - 1, { focus: false });
  });
  window.addEventListener('resize', updateViewportLabel, { passive: true });
  reducedMotion.addEventListener?.('change', () => syncSlideVideos(slides[currentIndex]));

  const initialMatch = window.location.hash.match(/^#slide-(\d+)$/);
  const initialIndex = initialMatch ? clampIndex(Number(initialMatch[1]) - 1) : 0;
  currentIndex = initialIndex;
  updateViewportLabel();
  setSlide(initialIndex, { initial: true, focus: false });
})();
