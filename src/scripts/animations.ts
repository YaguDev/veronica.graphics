import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import paperUrl from '../assets/textures/paper.webp?url';

gsap.registerPlugin(ScrollTrigger);
function initializePage() {
  let active = true;
  const listeners = new AbortController();
  const root = document.documentElement;
  const loader = document.querySelector<HTMLElement>('.intro-loader');
  const page = document.querySelector<HTMLElement>('[data-page-content]');
  const skip = document.querySelector<HTMLButtonElement>('.intro-loader__skip');
  const motion = gsap.matchMedia();
  let entering = false;
  let loaderTween: gsap.core.Tween | undefined;

  function finishLoader() {
    const hadFocus = loader?.contains(document.activeElement);
    root.removeAttribute('data-intro-pending');
    page?.removeAttribute('inert');
    try { sessionStorage.setItem('veronica-editorial-intro-v1', 'seen'); } catch { /* Storage can be disabled. */ }
    if (hadFocus) document.querySelector<HTMLElement>('main')?.focus({ preventScroll: true });
  }

  function animatePage() {
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      if (document.querySelector('.hero') && window.scrollY < 80) {
        // Illustrator's path order is not reading order. Reveal by horizontal position.
        const titlePaths = gsap.utils.toArray<SVGGraphicsElement>('.portfolio-title path')
          .sort((a, b) => a.getBBox().x - b.getBBox().x);
        const entranceDelay = root.hasAttribute('data-intro-pending') ? .45 : 0;
        gsap.timeline({ defaults: { ease: 'power3.out', clearProps: 'transform,opacity,clipPath' } })
          .from(titlePaths, { y: 16, opacity: 0, duration: 1.1, stagger: .055 }, entranceDelay)
          .from('[data-botanical]', { x: (_index, element) => element.dataset.botanical === 'top' ? 0 : element.dataset.botanical === 'left' ? -220 : 220, y: (_index, element) => element.dataset.botanical === 'top' ? -160 : 0, opacity: 0, duration: 1.8, stagger: .16 }, entranceDelay + .1)
          .from('[data-intro-item]', { y: 12, opacity: 0, duration: .8, stagger: .1 }, entranceDelay + .35)
          .from('.site-header', { y: -10, opacity: 0, duration: .65 }, entranceDelay + .3);
      }
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(element => {
        gsap.from(element, { y: 26, opacity: 0, duration: .85, ease: 'power2.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: element, start: 'top 94%', once: true } });
      });
      if (document.querySelector('[data-portrait]')) gsap.from('[data-portrait] img', { y: 35, opacity: 0, duration: 1.1, ease: 'power3.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: '.about', start: 'top 85%', once: true } });
    });
    ScrollTrigger.refresh();
  }

  function enter(instant = false) {
    if (entering || !active) return;
    entering = true;
    if (instant || !root.hasAttribute('data-intro-pending') || !loader) { finishLoader(); animatePage(); return; }
    gsap.to('.intro-loader__track span', { scaleX: 1, duration: .2, ease: 'power2.out' });
    animatePage();
    loaderTween = gsap.to(loader, { yPercent: -100, duration: .75, ease: 'power3.inOut', onComplete: finishLoader });
  }

  skip?.addEventListener('click', () => enter(true), { signal: listeners.signal });
  document.addEventListener('portfolio:intro-timeout', () => { loaderTween?.kill(); if (!entering) enter(true); else finishLoader(); }, { once: true, signal: listeners.signal });
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  reducedMotion.addEventListener('change', event => {
    if (event.matches && root.hasAttribute('data-intro-pending')) { loaderTween?.kill(); if (!entering) enter(true); else finishLoader(); }
  }, { signal: listeners.signal });

  if (root.hasAttribute('data-intro-pending')) {
    page?.setAttribute('inert', '');
    loader?.focus({ preventScroll: true });
    // Give the introduction time to be seen even when all resources are cached.
    // This runs alongside resource loading, so slow connections do not wait twice.
    // Two full 1.8-second flower cycles, including on fast/cached connections.
    const minimumDisplay = new Promise<void>(resolve => setTimeout(resolve, 3600));
    // Progress represents loaded resources, not the presentation timer.
    const paper = new Image();
    paper.src = paperUrl;
    const portrait = document.querySelector<HTMLImageElement>('.about__portrait img');
    const artwork = Array.from(document.querySelectorAll<HTMLImageElement>('.hero__botanical img'), image => image.decode());
    const resources = [document.fonts.ready, paper.decode(), portrait?.decode() ?? Promise.resolve(), ...artwork];
    let completed = 0;
    const ready = Promise.allSettled(resources.map(resource => Promise.resolve(resource).finally(() => {
      completed += 1;
      if (active && !entering) gsap.to('.intro-loader__track span', { scaleX: completed / resources.length, duration: .25, overwrite: true });
    })));
    let timeout: ReturnType<typeof setTimeout>;
    const deadline = new Promise<void>(resolve => { timeout = setTimeout(resolve, 2200); });
    const resourcesSettled = Promise.race([ready, deadline]).then(() => clearTimeout(timeout));
    Promise.all([minimumDisplay, resourcesSettled]).then(() => enter());
  } else { finishLoader(); animatePage(); }

  document.addEventListener('astro:before-swap', () => {
    active = false;
    listeners.abort();
    loaderTween?.kill();
    gsap.killTweensOf('.intro-loader__track span');
    motion.revert();
    finishLoader();
  }, { once: true });
}

document.addEventListener('astro:page-load', initializePage);
