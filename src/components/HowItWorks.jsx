import React from 'react';
import StructuredData from './StructuredData';

const steps = [
  {
    num: '01 / DETECT',
    title: 'Automatically',
    text: 'Land on a receipt, checkout, or trial signup — GreedySub extracts the price, currency, cycle, and next charge in milliseconds.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
      </svg>
    ),
  },
  {
    num: '02 / TRACK',
    title: 'Visually',
    text: 'Every subscription, trial, and upcoming charge in one calm dashboard. Status dots tell you what\'s healthy at a glance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 10h18M9 3v18"/>
      </svg>
    ),
  },
  {
    num: '03 / WARN',
    title: 'Before you pay',
    text: 'Smart alerts ahead of trial ends and renewals. Plus checkout warnings when a sign-up would blow your monthly budget.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/>
      </svg>
    ),
  },
  {
    num: '04 / CANCEL',
    title: 'In one click',
    text: 'No more digging through 5 layers of menus. GreedySub has direct cancel links for 50+ services. Click, done, money saved.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 5l7 7-7 7"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Track Subscriptions and Cancel Trials with GreedySub',
    description: 'Four quiet steps to track subscriptions, get renewal alerts, and cancel unused services with GreedySub.',
    totalTime: 'PT5M',
    tool: {
      '@type': 'HowToTool',
      name: 'GreedySub Chrome Extension',
    },
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `${s.title} — ${s.num.split(' / ')[1]}`,
      text: s.text,
      url: `https://greedysub.com/#how-step-${i + 1}`,
    })),
  };

  return (
    <section id="how" aria-labelledby="how-heading">
      <StructuredData data={howToSchema} />
      <div className="wrap">
        <div className="island reveal">
          <div className="section-tag">How it works</div>
          <h2 id="how-heading">Four quiet steps. Zero spreadsheets.</h2>
          <p className="section-lead">GreedySub lives in your browser. It watches for subscription moments, organizes them on a clean dashboard, warns you before charges, and cancels in a click.</p>

          <ol className="steps">
            {steps.map((s, i) => (
              <li className={`step reveal delay-${i + 1}`} key={s.num} id={`how-step-${i + 1}`}>
                <div className="step-num">{s.num}</div>
                <div className="step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
