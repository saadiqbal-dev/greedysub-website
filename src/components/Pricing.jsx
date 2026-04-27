import React from 'react';

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5L20 7"/>
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="island reveal">
          <div className="section-tag">Pricing</div>
          <h2>Free to try. Pro pays for itself.</h2>
          <p className="section-lead">Less than the cost of one forgotten Netflix subscription. 30-day free trial included on Pro.</p>

          <div className="pricing-grid">
            <div className="plan">
              <div className="plan-name">Free</div>
              <div className="plan-price">$0<span className="per"> / forever</span></div>
              <div className="plan-tag">Get started without a card.</div>
              <ul>
                <li>{checkIcon} Track up to 5 subscriptions</li>
                <li>{checkIcon} Manual add & cancel</li>
                <li>{checkIcon} Basic renewal alerts</li>
                <li>{checkIcon} Home currency selector</li>
                <li>{checkIcon} 100% local data storage</li>
              </ul>
              <a href="#cta" className="btn btn-ghost">Add free version</a>
            </div>

            <div className="plan pro">
              <div className="ribbon">Popular</div>
              <div className="plan-name">Pro</div>
              <div className="plan-price">$5<span className="per"> / mo · or $40 / yr</span></div>
              <div className="plan-tag">Save $20 with yearly. 30-day free trial.</div>
              <ul>
                <li>{checkIcon} Unlimited subscriptions & trials</li>
                <li>{checkIcon} Auto-detect from receipts & checkout</li>
                <li>{checkIcon} One-click cancel (50+ services)</li>
                <li>{checkIcon} Multi-currency dashboard, live rates</li>
                <li>{checkIcon} Budget alerts at checkout</li>
                <li>{checkIcon} Price change detection</li>
                <li>{checkIcon} CSV export</li>
              </ul>
              <a href="#cta" className="btn btn-primary">Start 30-day free trial <span className="chev">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
