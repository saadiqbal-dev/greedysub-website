import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ legalPage = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = React.useRef(0);
  const ticking = React.useRef(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > 200 && y > lastY.current + 4) setHidden(true);
      else if (y < lastY.current - 4) setHidden(false);
      lastY.current = y;
      ticking.current = false;
    }

    const handler = () => {
      if (!ticking.current) {
        requestAnimationFrame(onScroll);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="logo-mark"></span>
          <span>GreedySub</span>
        </Link>
        <div className="nav-divider"></div>
        {legalPage ? (
          <div className="nav-links">
            <Link to="/" style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 13.5, padding: '7px 12px', borderRadius: 999 }}>← Back to home</Link>
            <a href="/#cta" className="nav-cta">Add to Chrome</a>
          </div>
        ) : (
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#privacy">Privacy</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#cta" className="nav-cta">Add to Chrome</a>
          </div>
        )}
      </div>
    </nav>
  );
}
