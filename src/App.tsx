import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoboStats } from './components/RoboStats';
import { RoboMission } from './components/RoboMission';
import { RoboHardwareArchitecture } from './components/RoboHardwareArchitecture';
import { RoboCompetitionTracks } from './components/RoboCompetitionTracks';
import { RoboHowItWorks } from './components/RoboHowItWorks';
import { RoboChampionshipJourney } from './components/RoboChampionshipJourney';
import { RoboForSchoolsSection } from './components/RoboForSchoolsSection';
import { RoboPrizePool } from './components/RoboPrizePool';
import { RoboFaqSection } from './components/RoboFaqSection';
import { RoboFinalCta } from './components/RoboFinalCta';
import { RoboFooter } from './components/RoboFooter';

import { ChallengesPage } from './pages/ChallengesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ForSchoolsPage } from './pages/ForSchoolsPage';
import { AboutPage } from './pages/AboutPage';

import { RegisterModal } from './components/RegisterModal';
import { EventDeckModal } from './components/EventDeckModal';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [isDeckOpen, setIsDeckOpen] = useState<boolean>(false);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFaq = () => {
    if (currentRoute !== 'home') {
      setCurrentRoute('home');
      setTimeout(() => {
        const el = document.getElementById('faq-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('faq-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#07111F] font-sans selection:bg-[#0052FF] selection:text-white relative overflow-x-hidden">
      
      {/* 1. Sticky Event Navigation */}
      <Navbar
        activeTab={currentRoute}
        onNavigate={handleNavigate}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenFaq={handleOpenFaq}
      />

      {/* 2. Page Router */}
      <main className="w-full">
        {currentRoute === 'home' && (
          <>
            {/* 01. Cinematic Video Hero */}
            <Hero
              onOpenRegister={() => setIsRegisterOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* 02. Editorial Statistics Strip */}
            <RoboStats />

            {/* 03. Mission Split Layout */}
            <RoboMission onNavigate={handleNavigate} />

            {/* 04. Engineering Architecture & Real Hardware */}
            <RoboHardwareArchitecture />

            {/* 05. Competition Formats (Sprint & Precision) */}
            <RoboCompetitionTracks
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 06. How It Works Roadmap Progression */}
            <RoboHowItWorks onNavigate={handleNavigate} />

            {/* 07. Championship Progression Timeline */}
            <RoboChampionshipJourney />

            {/* 08. B2B School & Educator Portal */}
            <RoboForSchoolsSection
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
              onOpenDeckModal={() => setIsDeckOpen(true)}
            />

            {/* 09. Championship Prize Pool Reveal */}
            <RoboPrizePool onOpenRegister={() => setIsRegisterOpen(true)} />

            {/* 10. Numbered Editorial FAQ */}
            <RoboFaqSection />

            {/* 11. High-Energy Final CTA */}
            <RoboFinalCta
              onOpenRegister={() => setIsRegisterOpen(true)}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentRoute === 'challenges' && (
          <ChallengesPage
            onOpenRegister={() => setIsRegisterOpen(true)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {currentRoute === 'how-it-works' && (
          <HowItWorksPage
            onOpenRegister={() => setIsRegisterOpen(true)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {currentRoute === 'for-schools' && (
          <ForSchoolsPage
            onOpenRegister={() => setIsRegisterOpen(true)}
            onOpenDeckModal={() => setIsDeckOpen(true)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onOpenRegister={() => setIsRegisterOpen(true)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* 3. Master Footer */}
      <RoboFooter
        onNavigate={handleNavigate}
        onOpenFaq={handleOpenFaq}
      />

      {/* 4. Interactive Modals */}
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
