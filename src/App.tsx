import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { CompetitionTracks } from './components/CompetitionTracks';
import { TimelineSection } from './components/TimelineSection';
import { PrizeSection } from './components/PrizeSection';
import { PricingSchoolPortal } from './components/PricingSchoolPortal';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { EventDeckModal } from './components/EventDeckModal';

export function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isDeckOpen, setIsDeckOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-slate-900 font-sans text-brand-slate-900 selection:bg-brand-orange selection:text-white">
      {/* Sticky Header */}
      <Navbar
        onOpenRegisterModal={() => setIsRegisterOpen(true)}
        onOpenDeckModal={() => setIsDeckOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenRegisterModal={() => setIsRegisterOpen(true)}
          onOpenDeckModal={() => setIsDeckOpen(true)}
        />

        {/* 2. Value Proposition & Key Stats */}
        <ValueProposition />

        {/* 3. Competition Tracks & Interactive Arena Rules */}
        <CompetitionTracks />

        {/* 4. Multi-Stage Timeline */}
        <TimelineSection />

        {/* 5. Prize Pool & Stockholm Grand Finale */}
        <PrizeSection />

        {/* 6. Pricing & School Portal Box */}
        <PricingSchoolPortal
          onOpenRegisterModal={() => setIsRegisterOpen(true)}
        />

        {/* 7. FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenRegisterModal={() => setIsRegisterOpen(true)}
        onOpenDeckModal={() => setIsDeckOpen(true)}
      />

      {/* Interactive Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <EventDeckModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
      />
    </div>
  );
}

export default App;
