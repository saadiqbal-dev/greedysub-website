import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { GITHUB_URL } from '../config';

function LegalSection({ num, title, children }) {
  return <article className="legal-card"><h2 className="legal-card-title"><span className="legal-section-number">{num}</span>{title}</h2>{children}</article>;
}

const p = { fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', margin: '0 0 12px' };
const li = { fontSize: 15, lineHeight: 1.65, color: 'var(--ink-2)', padding: '5px 0' };

function Ul({ items }) {
  return <ul style={{ margin: '8px 0 12px', paddingLeft: 22 }}>{items.map((item) => <li key={item} style={li}>{item}</li>)}</ul>;
}

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://greedysub.com/' },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://greedysub.com/privacy' },
    ],
  };

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How the free and open-source GreedySub Chrome extension stores subscription data locally and handles limited network requests."
        canonical="https://greedysub.com/privacy"
        keywords="GreedySub privacy, local storage, Chrome extension privacy, open source"
      />
      <StructuredData data={breadcrumbSchema} />
      <Navbar legalPage />

      <header className="legal-header">
        <nav aria-label="Breadcrumb" className="legal-breadcrumb">
          <ol><li><Link to="/">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">Privacy Policy</li></ol>
        </nav>
        <div className="wrap">
          <span className="legal-label">Privacy</span>
          <h1>Privacy Policy</h1>
          <p>Effective date: July 15, 2026 &nbsp;·&nbsp; Last updated: July 15, 2026</p>
        </div>
      </header>

      <main className="legal-main">
        <div className="narrow">
          <div className="legal-summary">
            <p><strong>The short version:</strong> GreedySub does not require an account and stores subscription records in your browser. It does not sell data, run advertising trackers, process payments, or keep a browsing-history log. Limited requests can leave your device for exchange rates and when you choose to visit external links.</p>
          </div>

          <LegalSection num="1" title="Scope">
            <p style={p}>This policy covers the GreedySub Chrome extension and greedysub.com. It explains what the software processes, where information is stored, and the choices available to you.</p>
          </LegalSection>

          <LegalSection num="2" title="Data Stored on Your Device">
            <p style={p}>GreedySub uses <code>chrome.storage.local</code> to keep the information needed for its features, which can include:</p>
            <Ul items={[
              'Subscriptions and trials you add or confirm, including service name, price, currency, billing cycle, and renewal date.',
              'Reminder, budget, display, detection, theme, and currency preferences.',
              'Local activity metadata such as the latest known visit time for a tracked service and locally calculated savings.',
              'Dismissed detections and other state needed to avoid duplicate prompts.',
            ]} />
            <p style={p}>The latest-visit value is a single timestamp used to estimate whether a tracked service is still in use. GreedySub does not maintain or upload a general browsing-history list.</p>
          </LegalSection>

          <LegalSection num="3" title="On-Page Detection">
            <p style={p}>To detect supported subscription and trial events, the extension can run on HTTP and HTTPS pages you visit. It may inspect the page URL and visible text for billing-related signals and extract candidate details such as service name, price, billing interval, or trial date.</p>
            <p style={p}>Detection happens in your browser. Candidate subscription data is not sent to GreedySub servers. If supported on-device browser AI is enabled, that processing also stays on your device.</p>
          </LegalSection>

          <LegalSection num="4" title="Network Requests and Third Parties">
            <p style={p}>GreedySub does not operate an account, analytics, payment, advertising, or license-validation backend. The extension may request current currency rates from <a href="https://open.er-api.com" target="_blank" rel="noreferrer">open.er-api.com</a>. Like most web requests, that provider may receive your IP address and standard request metadata under its own policy.</p>
            <p style={p}>When you follow a cancellation deep link, Chrome Web Store link, or GitHub link, your browser connects directly to that third-party site. GreedySub does not control those sites.</p>
          </LegalSection>

          <LegalSection num="5" title="Chrome Permissions">
            <p style={p}>The extension requests permissions only for its core functions:</p>
            <Ul items={[
              'Storage — save records and settings locally.',
              'Alarms — schedule renewal and trial checks.',
              'Notifications — display reminders and subscription detections.',
              'HTTP/HTTPS host access — detect supported subscription events and update tracked-service visit timestamps on pages you visit.',
            ]} />
            <p style={p}>These permissions do not give GreedySub access to passwords or payment-card details entered into browser-protected fields.</p>
          </LegalSection>

          <LegalSection num="6" title="Data Sharing, Sale, and Retention">
            <p style={p}>We do not sell personal information or share subscription records with advertisers or data brokers. Local extension data remains until you remove it in GreedySub, clear extension storage, or uninstall the extension. Uninstalling normally removes the extension’s local storage.</p>
          </LegalSection>

          <LegalSection num="7" title="Your Choices">
            <Ul items={[
              'Review, edit, or delete subscriptions from the extension.',
              'Disable detection, reminders, or other optional behavior in settings where available.',
              'Manage site access and notification permissions in Chrome.',
              'Uninstall the extension to stop all processing by GreedySub.',
            ]} />
          </LegalSection>

          <LegalSection num="8" title="Security and Limitations">
            <p style={p}>Chrome isolates extension storage from ordinary websites, but no device or software is perfectly secure. Anyone with access to your unlocked Chrome profile may be able to view extension data. Keep Chrome and your operating system updated and protect your device account.</p>
          </LegalSection>

          <LegalSection num="9" title="Children and International Users">
            <p style={p}>GreedySub is not directed to children under 13. If you believe a child has provided information through a channel we control, contact us. Because core records stay on your device, GreedySub does not operate a central user-record database for access or deletion requests.</p>
          </LegalSection>

          <LegalSection num="10" title="Open Source, Changes, and Contact">
            <p style={p}>You can inspect the source, report privacy concerns, and review changes on <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>. We may update this policy when the software or its data practices change and will revise the date above.</p>
            <p style={p}>Privacy questions can be sent to <a href="mailto:saad@sloppydev.com">saad@sloppydev.com</a> or filed in the project’s <a href={`${GITHUB_URL}/issues`} target="_blank" rel="noreferrer">issue tracker</a>.</p>
          </LegalSection>
        </div>
      </main>

      <Footer />
    </>
  );
}
