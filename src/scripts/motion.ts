import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { animate, hover, inView, press } from 'motion';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduced) {
  // Smooth scrolling. Anchor links scroll smoothly too.
  const lenis = new Lenis({ lerp: 0.1, anchors: true });
  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  // Tells the stylesheet that JS took over the reveal, so its fail-safe stays off.
  document.documentElement.classList.add('motion-ready');

  const ease = [0.22, 1, 0.36, 1] as const;

  // Scroll reveal: elements marked data-reveal fade and rise once as they enter the viewport.
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const delay = Number(el.dataset.delay ?? 0);
    inView(
      el,
      () => {
        animate(el, { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0px)'] }, { duration: 0.7, delay, ease });
      },
      { amount: 0.15 },
    );
  });

  // Hover lift for bento tiles.
  document.querySelectorAll<HTMLElement>('[data-lift]').forEach((el) => {
    hover(el, () => {
      animate(el, { transform: 'translateY(-6px)' }, { duration: 0.3, ease });
      return () => animate(el, { transform: 'translateY(0px)' }, { duration: 0.3, ease });
    });
  });

  // Press feedback for buttons.
  document.querySelectorAll<HTMLElement>('.btn').forEach((el) => {
    press(el, () => {
      animate(el, { transform: 'scale(0.96)' }, { duration: 0.12 });
      return () => animate(el, { transform: 'scale(1)' }, { duration: 0.2, ease });
    });
  });
}
