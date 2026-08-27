import { useState } from 'react';
import { BrutalistNav } from './components/BrutalistNav';
import { CinematicVideoHero } from './components/CinematicVideoHero';
import { RoboStats } from './components/RoboStats';
import { RoboIntro } from './components/RoboIntro';
import { WowBuildBot } from './components/WowBuildBot';
import { RoboChallengesSection } from './components/RoboChallengesSection';
import { RoboHowItWorks } from './components/RoboHowItWorks';
import { RoboJourney } from './components/RoboJourney';
import { RoboForSchoolsSection } from './components/RoboForSchoolsSection';
import { RoboPrizes } from './components/RoboPrizes';
import { RoboFinalCta } from './components/RoboFinalCta';
import { RoboFooter } from './components/RoboFooter';
import { FaqSection } from './components/FaqSection';

import { ChallengesPage } from './pages/ChallengesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ForSchoolsPage } from './pages/ForSchoolsPage';
import { AboutPage } from './pages/AboutPage';
import { JoinPage } from './pages/JoinPage';

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

  return (
    <div className="min-h-screen bg-white text-[#0B1020] font-sans selection:bg-[#0052FF] selection:text-white relative overflow-x-hidden">
      {/* Navigation */}
      <BrutalistNav
        activeTab={currentRoute}
        onNavigate={handleNavigate}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenFaq={() => {
          setCurrentRoute('home');
          setTimeout(() => {
            const el = document.getElementById('faq-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />

      {/* Main Content Router */}
      <main className="w-full">
        {currentRoute === 'home' && (
          <>
            {/* 1 — Full-Screen Cinematic Video Hero (LOCKED — DO NOT CHANGE) */}
            <CinematicVideoHero
              onOpenRegister={() => setIsRegisterOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* 2 — Dark Editorial Statistics Strip */}
            <RoboStats />

            {/* 3 — White Asymmetric Mission Split */}
            <RoboIntro />

            {/* 4 — Dark Real Hardware Annotated Visual */}
            <WowBuildBot />

            {/* 5 — Competition Track Poster Panels (Blue + Dark) */}
            <RoboChallengesSection onNavigate={handleNavigate} />

            {/* 6 — Light Connected Horizontal Roadmap */}
            <RoboHowItWorks />

            {/* 7 — White Vertical Championship Timeline */}
            <RoboJourney />

            {/* 8 — Dark Navy For Schools Institutional Section */}
            <RoboForSchoolsSection
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 9 — Full-Black Dramatic Prize Pool Reveal */}
            <RoboPrizes />

            {/* 10 — White Editorial FAQ (inline, not modal) */}
            <div id="faq-section">
              <FaqSection />
            </div>

            {/* 11 — Final Call To Action */}
            <RoboFinalCta
              onOpenRegister={() => setIsRegisterOpen(true)}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentRoute === 'challenges' && (
          <ChallengesPage onOpenRegister={() => setIsRegisterOpen(true)} />
        )}

        {currentRoute === 'how-it-works' && (
          <HowItWorksPage onOpenRegister={() => setIsRegisterOpen(true)} />
        )}

        {currentRoute === 'for-schools' && (
          <ForSchoolsPage
            onOpenRegister={() => setIsRegisterOpen(true)}
            onOpenDeckModal={() => setIsDeckOpen(true)}
          />
        )}

        {currentRoute === 'about' && <AboutPage />}

        {currentRoute === 'join' && <JoinPage />}
      </main>

      {/* Footer */}
      <RoboFooter
        onNavigate={handleNavigate}
        onOpenFaq={() => {
          setCurrentRoute('home');
          setTimeout(() => {
            const el = document.getElementById('faq-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />

      {/* Modals */}
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
