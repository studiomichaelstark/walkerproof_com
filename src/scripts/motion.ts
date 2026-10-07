import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { animate, hover, inView, press, scroll } from 'motion';

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

  // Hero demo: the "Rain jacket" chip is dragged across the board, then returns. Looks like the board is being worked.
  const chip = document.querySelector<HTMLElement>('[data-chip]');
  const board = document.querySelector<HTMLElement>('[data-board]');
  if (chip && board) {
    const loop = async () => {
      const step = chip.getBoundingClientRect().width + 12;
      await animate(chip, { transform: 'translateX(0px)' }, { duration: 0.01 });
      await new Promise((r) => setTimeout(r, 1800));
      await animate(chip, { transform: `translateX(${step}px)` }, { duration: 0.9, ease });
      await new Promise((r) => setTimeout(r, 1500));
      await animate(chip, { transform: `translateX(${step * 2}px)` }, { duration: 0.9, ease });
      await new Promise((r) => setTimeout(r, 2200));
      loop();
    };
    loop();
  }

  // Parallax: masonry columns drift at different speeds while the section scrolls by.
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((col) => {
    if (!window.matchMedia('(min-width: 48rem)').matches) return;
    const dist = Number(col.dataset.parallax ?? 0);
    scroll(animate(col, { transform: [`translateY(${-dist}px)`, `translateY(${dist}px)`] }, { ease: 'linear' }), {
      target: col,
      offset: ['start end', 'end start'],
    });
  });

  // Sticky steps: scroll progress picks the active step and cross-fades the visual.
  const stepsRoot = document.querySelector<HTMLElement>('[data-steps]');
  if (stepsRoot && window.matchMedia('(min-width: 64rem)').matches) {
    stepsRoot.setAttribute('data-steps-ready', '');
    const items = [...stepsRoot.querySelectorAll<HTMLElement>('[data-step]')];
    const visuals = [...stepsRoot.querySelectorAll<HTMLElement>('[data-visual]')];
    let current = 0;
    scroll(
      (progress: number) => {
        const next = Math.min(items.length - 1, Math.floor(progress * items.length));
        if (next === current) return;
        current = next;
        items.forEach((el, i) => (i === next ? el.setAttribute('aria-current', 'step') : el.removeAttribute('aria-current')));
        visuals.forEach((el, i) => animate(el, { opacity: i === next ? 1 : 0 }, { duration: 0.5, ease }));
      },
      { target: stepsRoot, offset: ['start 40%', 'end end'] },
    );
  }

  // Cursor spotlight on glass cards.
  document.querySelectorAll<HTMLElement>('[data-spot]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  // Hero shoes: the two shoes take turns lifting, like a step cycle.
  const stride = document.querySelector<HTMLElement>('[data-stride]');
  if (stride) {
    const step = (el: Element | null, delay: number) => {
      if (!el) return;
      animate(
        el,
        { transform: ['translateY(0%) rotate(0deg)', 'translateY(-9%) rotate(-5deg)', 'translateY(0%) rotate(0deg)'] },
        { duration: 2.4, delay, repeat: Infinity, ease: 'easeInOut' },
      );
    };
    step(stride.querySelector('[data-shoe="left"]'), 0);
    step(stride.querySelector('[data-shoe="right"]'), 1.2);
  }
}
