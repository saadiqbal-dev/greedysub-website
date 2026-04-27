import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SectionNum({ n }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 26, height: 26, borderRadius: 8,
      background: 'var(--sky-soft)', color: 'var(--sky-deep)',
      fontSize: 12, fontWeight: 600, flexShrink: 0,
    }}>{n}</span>
  );
}

function LegalSection({ num, title, children }) {
  return (
    <div style={{
      background: 'white', border: '1px solid var(--line)',
      borderRadius: 'var(--r-lg)', padding: '40px 44px',
      marginBottom: 16, boxShadow: 'var(--shadow-sm)',
    }}>
      <h2 style={{
        fontSize: 19, fontWeight: 600, letterSpacing: '-0.02em',
        margin: '0 0 16px', color: 'var(--ink)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <SectionNum n={num} />
        {title}
      </h2>
      {children}
    </div>
  );
}

const p = { fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', margin: '0 0 12px' };
const h3 = { fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', margin: '24px 0 8px', color: 'var(--ink)' };
const li = {
  fontSize: 15, lineHeight: 1.65, color: 'var(--ink-2)',
  padding: '5px 0 5px 20px', position: 'relative',
  borderTop: '1px solid var(--line)',
};

function Ul({ items }) {
  return (
    <ul style={{ margin: '8px 0 12px', paddingLeft: 0, listStyle: 'none' }}>
      {items.map((item, i) => (
        <li key={i} style={{ ...li, ...(i === 0 ? { borderTop: 'none' } : {}) }}>
          <span style={{ position: 'absolute', left: 0, color: 'var(--sky-deep)', fontWeight: 500 }}>–</span>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

export default function TermsOfService() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar legalPage />

      <header style={{ padding: '120px 0 48px', textAlign: 'center' }}>
        <div className="wrap">
          <span style={{
            display: 'inline-block', fontSize: 12, fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--sky-deep)', background: 'var(--sky-soft)',
            padding: '4px 12px', borderRadius: 999, marginBottom: 20,
          }}>Legal</span>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.08,
            letterSpacing: '-0.03em', fontWeight: 500,
            margin: '0 auto 16px', maxWidth: '22ch',
          }}>Terms of Service</h1>
          <p style={{ color: 'var(--ink-3)', fontSize: 14, margin: 0 }}>
            Effective date: April 27, 2026 &nbsp;·&nbsp; Last updated: April 27, 2026
          </p>
        </div>
      </header>

      <main style={{ paddingBottom: 100 }}>
        <div className="narrow">

          <div style={{
            background: 'var(--sky-tint)', border: '1px solid var(--sky-soft)',
            borderRadius: 'var(--r)', padding: '16px 20px', marginBottom: 16,
          }}>
            <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0 }}>
              <strong style={{ color: 'var(--ink)' }}>Plain-English summary:</strong> GreedySub is a subscription organization tool — not a financial advisor, not a bank, and not an accountant. Any numbers shown (savings estimates, spending totals, exchange rates) are for personal reference only. We are not liable for any financial decisions you make based on them. Pro billing is handled entirely by Polar.sh; GreedySub never touches your payment details. We offer a 14-day refund request window, processed by Polar.sh. We are not liable for indirect losses of any kind.
            </p>
          </div>

          <LegalSection num="1" title="Acceptance of Terms">
            <p style={p}>By installing, accessing, or using GreedySub (the "Extension") or its associated website (together, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, you must not install or use the Service.</p>
            <p style={{ ...p, marginBottom: 0 }}>These Terms constitute a legally binding agreement between you ("User," "you") and GreedySub ("we," "us," "our"). You represent that you are at least 13 years of age (or 16 in the EEA) and have the legal capacity to enter into this agreement.</p>
          </LegalSection>

          <LegalSection num="2" title="Description of the Service">
            <p style={p}>GreedySub is a browser extension for Google Chrome that helps users track recurring subscription charges and free trials, receive renewal reminders, and identify opportunities to cancel unused services. The Service operates locally in your browser and does not require account creation.</p>
            <p style={p}>We offer two tiers:</p>
            <Ul items={[
              '<strong>Free:</strong> Track up to 5 subscriptions, basic renewal alerts, manual add/cancel, local data storage',
              '<strong>Pro:</strong> Unlimited subscriptions, auto-detection from receipts and checkout pages, one-click cancel for 50+ services, multi-currency dashboard, CSV export, budget alerts, and price-change detection — $5/month or $40/year, with a 30-day free trial',
            ]} />
            <p style={{ ...p, marginBottom: 0 }}>We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice.</p>
          </LegalSection>

          <LegalSection num="3" title="License Grant">
            <p style={p}>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the Extension on devices you own or control, solely for your personal, non-commercial use.</p>
            <p style={p}>This license does not include the right to:</p>
            <Ul items={[
              'Copy, modify, distribute, sell, or sublicense the Extension or any part of it',
              'Reverse-engineer, decompile, or disassemble the Extension (except to the extent permitted by applicable law)',
              'Create derivative works based on the Extension',
              'Remove or alter any proprietary notices, labels, or marks',
              'Use the Extension for any commercial purpose without our prior written consent',
              'Share, resell, or transfer your Pro license key to any other person',
            ]} />
          </LegalSection>

          <LegalSection num="4" title="Acceptable Use">
            <p style={p}>You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:</p>
            <Ul items={[
              'Use the Service in any way that violates applicable local, national, or international law or regulation',
              'Attempt to gain unauthorized access to any portion of the Service or its related systems',
              'Use automated means to abuse or overload any Service infrastructure',
              'Exploit, harm, or attempt to exploit or harm minors',
              'Interfere with or disrupt the integrity or performance of the Service',
              'Impersonate any person or entity or misrepresent your affiliation',
            ]} />
            <p style={{ ...p, marginBottom: 0 }}>Violation of this section may result in immediate termination of your license.</p>
          </LegalSection>

          <LegalSection num="5" title="Pro Subscription and Payment">
            <h3 style={h3}>5.1 Billing</h3>
            <p style={p}>Pro subscriptions are billed on a recurring basis — monthly ($5.00 USD/month) or annually ($40.00 USD/year) — and processed by <a href="https://polar.sh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sky-deep)' }}>Polar.sh</a>. By subscribing, you authorize Polar.sh to charge your payment method on a recurring basis until you cancel. Applicable taxes may be added at checkout depending on your location.</p>

            <h3 style={h3}>5.2 Free Trial</h3>
            <p style={p}>Pro includes a 30-day free trial. No charge is made during the trial period. If you do not cancel before the trial ends, your payment method will be charged for the first billing period.</p>

            <h3 style={h3}>5.3 Cancellation</h3>
            <p style={p}>You may cancel your Pro subscription at any time through your Polar.sh account dashboard or by contacting <a href="mailto:saad@sloppydev.com" style={{ color: 'var(--sky-deep)' }}>saad@sloppydev.com</a>. Cancellation takes effect at the end of the current billing period. You will retain Pro access until that date.</p>

            <h3 style={h3}>5.4 Refund Policy</h3>
            <p style={p}>You may request a full refund within <strong>14 days</strong> of the initial charge by emailing <a href="mailto:saad@sloppydev.com" style={{ color: 'var(--sky-deep)' }}>saad@sloppydev.com</a> with your order reference. We will instruct Polar.sh to process the refund on your behalf. <strong>All payment processing and refund execution is carried out solely by Polar.sh</strong> — GreedySub does not collect, hold, or transfer any payment funds at any time. Refund timing (typically 5–10 business days) is determined by Polar.sh and your card issuer, not by us. Refunds are not available for charges made after the 14-day window or for partial billing periods following voluntary downgrade.</p>

            <h3 style={h3}>5.5 License Keys</h3>
            <p style={{ ...p, marginBottom: 0 }}>Pro access is tied to a license key issued by Polar.sh. License keys are personal and non-transferable. Sharing a license key constitutes a material breach of these Terms and may result in immediate revocation without refund.</p>
          </LegalSection>

          <LegalSection num="6" title="Privacy">
            <p style={{ ...p, marginBottom: 0 }}>Your use of the Service is also governed by our <Link to="/privacy" style={{ color: 'var(--sky-deep)' }}>Privacy Policy</Link>, which is incorporated into these Terms by reference. In summary: your subscription data never leaves your browser. The only data we receive is what is necessary to validate your Pro license via Polar.sh.</p>
          </LegalSection>

          <LegalSection num="7" title="Third-Party Services">
            <p style={p}>The Service integrates with or links to third-party services including:</p>
            <Ul items={[
              '<strong>Polar.sh</strong> — payment processing and subscription management, governed by <a href="https://polar.sh/legal/terms" target="_blank" rel="noopener noreferrer" style="color:var(--sky-deep)">Polar.sh Terms of Service</a> and <a href="https://polar.sh/legal/privacy" target="_blank" rel="noopener noreferrer" style="color:var(--sky-deep)">Privacy Policy</a>',
              '<strong>Exchange rate APIs</strong> — anonymous currency data fetches for the multi-currency dashboard',
              '<strong>Google Chrome Web Store</strong> — distribution platform governed by <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style="color:var(--sky-deep)">Google\'s Terms of Service</a>',
            ]} />
            <p style={{ ...p, marginBottom: 0 }}>We are not responsible for the content, privacy practices, or terms of any third-party service.</p>
          </LegalSection>

          <LegalSection num="8" title="Intellectual Property">
            <p style={p}>GreedySub and all associated software, design, text, graphics, logos, and content are the exclusive property of GreedySub and are protected by copyright, trademark, and other intellectual property laws.</p>
            <p style={p}>No title or ownership in the Service is transferred to you under these Terms. All rights not expressly granted are reserved.</p>
            <p style={{ ...p, marginBottom: 0 }}>If you provide feedback or suggestions regarding the Service, you grant us a worldwide, royalty-free, irrevocable license to use, reproduce, and incorporate that feedback without restriction or compensation to you.</p>
          </LegalSection>

          <LegalSection num="9" title="Disclaimers">
            <div style={{
              background: 'oklch(0.97 0.02 75)', border: '1px solid oklch(0.91 0.06 80)',
              borderRadius: 'var(--r)', padding: '16px 20px', margin: '0 0 16px',
            }}>
              <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0 }}>
                <strong>Important:</strong> The following disclaimers apply to the fullest extent permitted by applicable law.
              </p>
            </div>
            <p style={p}>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>

            <h3 style={h3}>Not a Financial Advisor</h3>
            <p style={p}><strong>GreedySub is a personal organization tool only.</strong> Nothing in the Service — including spending totals, savings estimates, trial countdowns, exchange rates, price-change alerts, or budget warnings — constitutes financial advice, investment advice, tax advice, accounting advice, or any other form of professional financial guidance. We are not a financial institution, bank, broker, accountant, or financial advisor, and we do not hold any financial services license.</p>
            <p style={p}>You are solely responsible for any financial decisions you make. Any action you take based on information displayed in GreedySub (including canceling or keeping a subscription) is taken entirely at your own risk. Always consult a qualified financial professional for advice specific to your circumstances.</p>

            <h3 style={h3}>No Guarantee of Accuracy</h3>
            <p style={p}>We do not warrant that:</p>
            <Ul items={[
              'The Service will be uninterrupted, error-free, or secure',
              'Auto-detection will identify all subscriptions or trials accurately — missed or misclassified entries are possible',
              'Spending totals, savings estimates, or "money saved" figures are accurate or complete',
              'One-click cancel links will work for all services at all times (third-party services change their flows)',
              'Exchange rates are accurate, real-time, or suitable for any financial purpose',
              'Price-change or budget alerts will fire in every case — do not rely on them as your sole reminder',
              'The Service will remain compatible with all websites or future versions of Chrome',
            ]} />
            <p style={{ ...p, marginBottom: 0 }}>We accept no responsibility for any loss, cost, or damage — financial or otherwise — arising from inaccurate information displayed by the Service, missed alerts, or decisions made in reliance on the Service.</p>
          </LegalSection>

          <LegalSection num="10" title="Limitation of Liability">
            <p style={p}>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GREEDYSUB AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES WHATSOEVER, INCLUDING BUT NOT LIMITED TO:</p>
            <Ul items={[
              'Loss of money, revenue, profits, savings, or anticipated savings',
              'Charges incurred because the Service failed to alert you of a renewal or trial end',
              'Incorrect subscription totals, savings estimates, or exchange rate conversions',
              'Loss of data, goodwill, or other intangible losses',
              'Any financial decision made in reliance on information displayed by the Service',
              'Failure of one-click cancel features to successfully cancel a third-party subscription',
            ]} />
            <p style={p}>THIS APPLIES REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE) AND EVEN IF GREEDYSUB HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
            <p style={p}>IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE EXCEED THE GREATER OF (A) THE TOTAL AMOUNT YOU ACTUALLY PAID TO US IN THE 12 MONTHS IMMEDIATELY PRECEDING THE CLAIM, OR (B) $10.00 USD.</p>
            <p style={{ ...p, marginBottom: 0 }}>Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so some of the above limitations may not apply to you. In such jurisdictions, our liability is limited to the fullest extent permitted by law.</p>
          </LegalSection>

          <LegalSection num="11" title="Indemnification">
            <p style={p}>You agree to indemnify, defend, and hold harmless GreedySub and its affiliates, officers, agents, and employees from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:</p>
            <Ul items={[
              'Your violation of these Terms',
              'Your use or misuse of the Service',
              'Your violation of any law or the rights of a third party',
            ]} />
          </LegalSection>

          <LegalSection num="12" title="Termination">
            <p style={p}>We may suspend or terminate your access to the Service at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>
            <p style={p}>You may terminate your use of the Service at any time by uninstalling the Extension and canceling any active Pro subscription.</p>
            <p style={{ ...p, marginBottom: 0 }}>Upon termination, the license granted under these Terms will immediately cease. Sections that by their nature should survive termination (intellectual property, disclaimers, limitation of liability, governing law) shall survive.</p>
          </LegalSection>

          <LegalSection num="13" title="Governing Law and Disputes">
            <p style={p}>These Terms shall be governed by and construed in accordance with applicable law. Any disputes arising from these Terms shall first be attempted to be resolved through good-faith negotiation.</p>
            <p style={{ ...p, marginBottom: 0 }}>If a dispute cannot be resolved through negotiation, both parties agree to submit to the exclusive jurisdiction of the courts of competent jurisdiction. Nothing in this section limits your statutory rights as a consumer under applicable local law. If any provision of these Terms is found to be unenforceable, the remaining provisions continue in full force and effect.</p>
          </LegalSection>

          <LegalSection num="14" title="App Store Additional Terms">
            <h3 style={h3}>Google Chrome Web Store</h3>
            <p style={p}>GreedySub is distributed via the Google Chrome Web Store. Your use of the Chrome Web Store is subject to <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sky-deep)' }}>Google's Terms of Service</a>. These Terms are between you and GreedySub only; Google is not a party to these Terms and has no obligation or liability to you in connection with GreedySub.</p>

            <h3 style={h3}>Google Play Store (Future)</h3>
            <p style={p}>If GreedySub is distributed via Google Play, Google Play's terms govern the distribution channel only. As the developer, we are solely responsible for GreedySub and its content. Google has no obligation to provide maintenance or support for GreedySub.</p>

            <h3 style={h3}>Apple App Store (Future)</h3>
            <p style={{ ...p, marginBottom: 0 }}>If GreedySub is distributed via the Apple App Store: (a) Apple has no obligation to provide maintenance or support for GreedySub; (b) Apple is not responsible for any product warranties, whether express or implied; (c) Apple is not responsible for addressing product claims or third-party claims relating to GreedySub; (d) Apple shall be a third-party beneficiary of these Terms and may enforce these Terms against you. You represent that you are not in a country subject to a U.S. Government embargo and are not on any U.S. Government prohibited-party list.</p>
          </LegalSection>

          <LegalSection num="15" title="Changes to These Terms">
            <p style={p}>We may update these Terms from time to time. When we make material changes, we will update the "Last updated" date and, where appropriate, notify you through the extension or via email.</p>
            <p style={{ ...p, marginBottom: 0 }}>Your continued use of the Service after the effective date of any changes constitutes acceptance of the updated Terms. If you do not agree to the revised Terms, you must stop using the Service and uninstall the Extension.</p>
          </LegalSection>

          <LegalSection num="16" title="Contact Us">
            <p style={p}>For any questions about these Terms:</p>
            <Ul items={[
              '<strong>Email:</strong> <a href="mailto:saad@sloppydev.com" style="color:var(--sky-deep)">saad@sloppydev.com</a>',
              '<strong>Support:</strong> <a href="mailto:saad@sloppydev.com" style="color:var(--sky-deep)">saad@sloppydev.com</a>',
            ]} />
            <p style={{ ...p, marginBottom: 0 }}>We aim to respond to all inquiries within 5 business days.</p>
          </LegalSection>

        </div>
      </main>

      <Footer />
    </>
  );
}
