import { useEffect, useRef } from 'react';

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

export function useCounters() {
  const done = useRef(new WeakSet());

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-counter]'));
    const h = window.innerHeight;

    function animateCounter(el) {
      if (done.current.has(el)) return;
      done.current.add(el);
      const target = parseFloat(el.dataset.target);
      const prefix = el.dataset.prefix || '';
      const isInt = Number.isInteger(target);
      const dur = 1400;
      const start = performance.now();
      function tick(now) {
        const t = Math.min(1, (now - start) / dur);
        const v = target * easeOut(t);
        el.textContent = prefix + (isInt ? Math.round(v) : v.toFixed(2));
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    function checkCounters() {
      els.forEach((el) => {
        if (done.current.has(el)) return;
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.9 && r.bottom > 0) animateCounter(el);
      });
    }

    requestAnimationFrame(checkCounters);
    const onScroll = () => checkCounters();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
