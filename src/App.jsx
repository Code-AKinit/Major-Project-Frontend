import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Security from './components/Security';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  const [activeTab, setActiveTab] = useState('landlord');

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <Features />
      <HowItWorks />
      <Benefits />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
