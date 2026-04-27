import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <div className="logo">
          <span className="logo-mark"></span>
          <span style={{ color: 'var(--ink)' }}>GreedySub</span>
          <span style={{ color: 'var(--ink-3)', marginLeft: 8, fontSize: 13 }}>© 2026</span>
        </div>
        <div className="foot-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
          <a href="mailto:saad@sloppydev.com">Support</a>
          <a href="#">Twitter / X</a>
          <a href="#">Changelog</a>
        </div>
      </div>
    </footer>
  );
}
