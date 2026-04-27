import { useEffect } from 'react';

export function useMagnetic() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.btn-primary, .nav-cta');
    const handlers = [];

    buttons.forEach((btn) => {
      btn.classList.add('magnetic');
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.18;
        const y = (e.clientY - r.top - r.height / 2) * 0.18;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      };
      const onLeave = () => {
        btn.style.transform = '';
      };
      btn.addEventListener('pointermove', onMove);
      btn.addEventListener('pointerleave', onLeave);
      handlers.push({ btn, onMove, onLeave });
    });

    return () => {
      handlers.forEach(({ btn, onMove, onLeave }) => {
        btn.removeEventListener('pointermove', onMove);
        btn.removeEventListener('pointerleave', onLeave);
      });
    };
  }, []);
}
