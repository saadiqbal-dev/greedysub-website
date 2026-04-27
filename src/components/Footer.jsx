import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="wrap foot-row">
        <div className="logo">
          <span className="logo-mark" aria-hidden="true"></span>
          <span style={{ color: 'var(--ink)' }}>GreedySub</span>
          <span style={{ color: 'var(--ink-3)', marginLeft: 8, fontSize: 13 }}>© 2026</span>
        </div>
        <nav aria-label="Footer navigation">
          <div className="foot-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
            <a href="mailto:saad@sloppydev.com">Support</a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
