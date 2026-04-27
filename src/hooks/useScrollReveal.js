import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const refs = useRef(new Set());

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    const h = window.innerHeight;

    function checkReveal() {
      els.forEach((el) => {
        if (el.classList.contains('in')) return;
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > 0) el.classList.add('in');
      });
    }

    requestAnimationFrame(checkReveal);
    const t1 = setTimeout(checkReveal, 100);
    const t2 = setTimeout(() => {
      els.forEach((el) => el.classList.add('in'));
    }, 1500);

    const onScroll = () => checkReveal();
    const onResize = () => checkReveal();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);
}
