import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveDashboard from './components/InteractiveDashboard';
import ProductPillars from './components/ProductPillars';
import InteractiveCalculator from './components/InteractiveCalculator';
import HealthCheckupModal from './components/HealthCheckupModal';
import ComparisonTable from './components/ComparisonTable';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import SecuritySection from './components/SecuritySection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import OnboardingModal from './components/OnboardingModal';
import ProductTourModal from './components/ProductTourModal';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isHealthCheckOpen, setIsHealthCheckOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Apply dark / light class to root element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode ? 'bg-[#090d16] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Navigation Header */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenHealthCheck={() => setIsHealthCheckOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner with Key Metrics */}
        <Hero 
          darkMode={darkMode}
          onOpenOnboarding={() => setIsOnboardingOpen(true)}
          onOpenTour={() => setIsTourOpen(true)}
          onOpenHealthCheck={() => setIsHealthCheckOpen(true)}
        />

        {/* Live Interactive Product OS Sandbox */}
        <InteractiveDashboard 
          darkMode={darkMode}
          onOpenOnboarding={() => setIsOnboardingOpen(true)}
        />

        {/* 3 Core Product Pillars: Understand, Act, Grow */}
        <ProductPillars 
          darkMode={darkMode}
          onOpenOnboarding={() => setIsOnboardingOpen(true)}
        />

        {/* Interactive Compound Yield & Growth Calculator */}
        <InteractiveCalculator 
          darkMode={darkMode}
          onOpenOnboarding={() => setIsOnboardingOpen(true)}
        />

        {/* Feature & Architecture Comparison Matrix */}
        <ComparisonTable 
          darkMode={darkMode}
          onOpenOnboarding={() => setIsOnboardingOpen(true)}
        />

        {/* Transparent Pricing Tiers & Billing Toggle */}
        <Pricing 
          darkMode={darkMode}
          onOpenOnboarding={() => setIsOnboardingOpen(true)}
        />

        {/* Social Proof & Customer Reviews */}
        <Testimonials 
          darkMode={darkMode}
        />

        {/* Bank-Grade Security & FDIC Trust Grid */}
        <SecuritySection 
          darkMode={darkMode}
        />

        {/* Categorized & Filterable FAQ Accordion */}
        <FAQ 
          darkMode={darkMode}
        />
      </main>

      {/* Footer */}
      <Footer 
        darkMode={darkMode}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
      />

      {/* Interactive Modals */}
      <OnboardingModal 
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        darkMode={darkMode}
      />

      <HealthCheckupModal 
        isOpen={isHealthCheckOpen}
        onClose={() => setIsHealthCheckOpen(false)}
        darkMode={darkMode}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
      />

      <ProductTourModal 
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        darkMode={darkMode}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
      />

      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenHealthCheck={() => setIsHealthCheckOpen(true)}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
      />

    </div>
  );
}
