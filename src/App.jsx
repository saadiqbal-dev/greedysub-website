import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Privacy from './components/Privacy';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useCounters } from './hooks/useCounters';
import { useParallax } from './hooks/useParallax';
import { useMagnetic } from './hooks/useMagnetic';

const TWEAK_DEFAULTS = {
  hue: 235,
  chroma: 0.13,
  showGrid: true,
  cardRadius: 14,
  headlineWeight: 500,
  bgTone: 'cool',
  ctaText: "Add to Chrome — It's Free",
  heroPill: 'Average user saves $40–80 / month',
};

function HomePage() {
  const t = TWEAK_DEFAULTS;

  useEffect(() => {
    const r = document.documentElement;
    const h = t.hue;
    const c = t.chroma;
    r.style.setProperty('--sky', `oklch(0.72 ${c} ${h})`);
    r.style.setProperty('--sky-deep', `oklch(0.55 ${Math.min(c + 0.03, 0.2)} ${h + 10})`);
    r.style.setProperty('--sky-soft', `oklch(0.94 ${c * 0.3} ${h})`);
    r.style.setProperty('--sky-tint', `oklch(0.97 ${c * 0.15} ${h})`);

    const tones = {
      cool:    { bg: 'oklch(0.985 0.005 230)', bg2: 'oklch(0.975 0.012 230)' },
      warm:    { bg: 'oklch(0.985 0.005 80)',  bg2: 'oklch(0.975 0.010 80)' },
      neutral: { bg: 'oklch(0.985 0.002 250)', bg2: 'oklch(0.975 0.004 250)' },
    };
    const tone = tones[t.bgTone] || tones.cool;
    r.style.setProperty('--bg', tone.bg);
    r.style.setProperty('--bg-2', tone.bg2);
    r.style.setProperty('--r', t.cardRadius + 'px');
    r.style.setProperty('--r-lg', (t.cardRadius + 6) + 'px');

    document.querySelectorAll('h1, h2').forEach((el) => {
      el.style.fontWeight = t.headlineWeight;
    });

    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) heroBg.style.setProperty('--grid-vis', t.showGrid ? '1' : '0');
  }, []);

  useScrollReveal();
  useCounters();
  useParallax();
  useMagnetic();

  return (
    <>
      <Navbar />
      <Hero ctaText={TWEAK_DEFAULTS.ctaText} heroPill={TWEAK_DEFAULTS.heroPill} />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <Privacy />
      <Pricing />
      <FAQ />
      <FinalCTA ctaText={TWEAK_DEFAULTS.ctaText} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
