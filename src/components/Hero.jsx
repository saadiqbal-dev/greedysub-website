import React, { useEffect, useRef } from 'react';

export default function Hero({ ctaText, heroPill }) {
  const mockWrapRef = useRef(null);
  const browserRef = useRef(null);

  useEffect(() => {
    const mockWrap = mockWrapRef.current;
    const browser = browserRef.current;
    if (!mockWrap || !browser) return;

    const onMove = (e) => {
      const r = mockWrap.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      browser.style.transform = `perspective(1400px) rotateX(${-y * 2.2}deg) rotateY(${x * 2.6}deg)`;
    };
    const onLeave = () => {
      browser.style.transform = '';
    };

    mockWrap.addEventListener('pointermove', onMove);
    mockWrap.addEventListener('pointerleave', onLeave);
    return () => {
      mockWrap.removeEventListener('pointermove', onMove);
      mockWrap.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <header className="hero">
      <div className="hero-bg"></div>
      <div className="wrap hero-inner">
        <span className="pill">
          <span className="pill-dot">$</span>
          {heroPill}
        </span>
        <h1>The subscription tracker that <em>actually saves you money.</em></h1>
        <p className="lead">
          GreedySub spots subscriptions and free trials the moment you sign up, warns you before they charge, and helps you cancel in one click. All your data stays private — right in your browser.
        </p>
        <div className="cta-row">
          <a href="#cta" className="btn btn-primary">
            {ctaText} <span className="chev">→</span>
          </a>
          <a href="#how" className="btn btn-ghost">See how it works</a>
        </div>
        <div className="ticker">
          <span><span className="blip"></span> Live · v1.0</span>
          <span>No account required</span>
          <span>Works offline</span>
          <span className="mono">100% local data</span>
        </div>
      </div>

      <div className="mock-wrap" ref={mockWrapRef}>
        <div className="browser" ref={browserRef}>
          <div className="browser-bar">
            <div className="traffic"><span></span><span></span><span></span></div>
            <div className="urlbar">greedysub.app/dashboard</div>
            <div className="ext-icon" aria-hidden="true"></div>
          </div>
          <div className="panel">
            <aside className="panel-side">
              <div className="side-label">This month</div>
              <div className="stat">
                <div className="stat-label">Spending</div>
                <div className="stat-num sky" data-counter data-target="127.40" data-prefix="$">$127.40</div>
              </div>
              <div className="stat">
                <div className="stat-label">Saved by canceling</div>
                <div className="stat-num green" data-counter data-target="83" data-prefix="$">$83.00</div>
              </div>
              <div className="side-label">Active trials</div>
              <div className="stat">
                <div className="stat-label">Ending soon</div>
                <div className="stat-num" data-counter data-target="3">3</div>
              </div>
            </aside>
            <div className="panel-main">
              <div className="panel-head">
                <h3>Subscriptions</h3>
                <span className="sub">7 active · sorted by next charge</span>
              </div>
              <div className="sub-row">
                <span className="dot r" title="Renews soon, low usage"></span>
                <span>
                  <span className="sub-name">Adobe Creative Cloud</span>
                  <br />
                  <span className="sub-cycle">Monthly · unused 15 days</span>
                </span>
                <span className="sub-meta">in 2 days</span>
                <span className="price">$54.99</span>
                <button className="x-btn" title="Cancel">✕</button>
              </div>
              <div className="sub-row">
                <span className="dot a" title="Trial ending"></span>
                <span>
                  <span className="sub-name">ChatGPT Plus</span>
                  <br />
                  <span className="sub-cycle">Trial · ends in 3 days</span>
                </span>
                <span className="sub-meta">trial</span>
                <span className="price">$20.00</span>
                <button className="x-btn" title="Cancel">✕</button>
              </div>
              <div className="sub-row">
                <span className="dot g" title="Active"></span>
                <span>
                  <span className="sub-name">Spotify Premium</span>
                  <br />
                  <span className="sub-cycle">Monthly · used daily</span>
                </span>
                <span className="sub-meta">in 12 days</span>
                <span className="price">$10.99</span>
                <button className="x-btn" title="Cancel">✕</button>
              </div>
              <div className="sub-row">
                <span className="dot g" title="Active"></span>
                <span>
                  <span className="sub-name">Notion</span>
                  <br />
                  <span className="sub-cycle">Yearly · workspace</span>
                </span>
                <span className="sub-meta">in 84 days</span>
                <span className="price">$96.00</span>
                <button className="x-btn" title="Cancel">✕</button>
              </div>
              <div className="sub-row">
                <span className="dot a" title="Inactive"></span>
                <span>
                  <span className="sub-name">NordVPN</span>
                  <br />
                  <span className="sub-cycle">Monthly · unused 28 days</span>
                </span>
                <span className="sub-meta">in 19 days</span>
                <span className="price">$11.99</span>
                <button className="x-btn" title="Cancel">✕</button>
              </div>
            </div>
          </div>
        </div>
        <div className="toast">
          <div className="toast-head"><span className="dot a"></span> Trial ends in 3 days</div>
          <div className="toast-body"><b>ChatGPT Plus</b> renews May&nbsp;1 at <b>$20.00</b>. Cancel now to avoid charge.</div>
        </div>
      </div>

      <div className="strip-wrap reveal">
        <div className="wrap"><div className="strip-tag">— Detects subscriptions across —</div></div>
        <div className="marquee">
          {[
            'Netflix','Spotify','ChatGPT','Adobe Creative Cloud','Disney+','Notion','Figma','Canva','GitHub','Slack','Zoom','NordVPN','1Password','HBO Max','Hulu','Audible','Claude','+ 100 more'
          ].map((name, i) => (
            <span className="chip" key={i}>{name}</span>
          ))}
          {[
            'Netflix','Spotify','ChatGPT','Adobe Creative Cloud','Disney+','Notion','Figma','Canva','GitHub','Slack','Zoom','NordVPN','1Password','HBO Max','Hulu','Audible','Claude','+ 100 more'
          ].map((name, i) => (
            <span className="chip" key={`dup-${i}`}>{name}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
