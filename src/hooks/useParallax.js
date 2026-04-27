import { useEffect } from 'react';

export function useParallax() {
  useEffect(() => {
    const mock = document.querySelector('.mock-wrap');
    const toast = document.querySelector('.toast');
    const heroBg = document.querySelector('.hero-bg');

    let pTicking = false;
    function onParallax() {
      const y = window.scrollY;
      if (mock) {
        mock.style.transform = `translateY(${y * -0.06}px) scale(${1 - Math.min(y, 600) * 0.00008})`;
      }
      if (toast) {
        toast.style.transform = `rotate(${2 - y * 0.005}deg) translateY(${y * -0.04}px)`;
      }
      if (heroBg) {
        heroBg.style.transform = `translateY(${y * 0.18}px)`;
      }
      pTicking = false;
    }

    const onScroll = () => {
      if (!pTicking) {
        requestAnimationFrame(onParallax);
        pTicking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
