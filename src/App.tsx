import { useState } from 'react';
import { BrutalistNav } from './components/BrutalistNav';
import { RoboHero } from './components/RoboHero';
import { HeroTickerStrip } from './components/HeroTickerStrip';
import { BlackTransitionStrip } from './components/BlackTransitionStrip';
import { RoboIntro } from './components/RoboIntro';
import { RoboStats } from './components/RoboStats';
import { WowBuildBot } from './components/WowBuildBot';
import { WowScoreboardTimer } from './components/WowScoreboardTimer';
import { WowArenaDiagrams } from './components/WowArenaDiagrams';
import { RoboChallengesSection } from './components/RoboChallengesSection';
import { RoboHowItWorks } from './components/RoboHowItWorks';
import { RoboJourney } from './components/RoboJourney';
import { RoboJuniorVsSenior } from './components/RoboJuniorVsSenior';
import { RoboForSchoolsSection } from './components/RoboForSchoolsSection';
import { RoboPrizes } from './components/RoboPrizes';
import { RoboFinalCta } from './components/RoboFinalCta';
import { RoboFooter } from './components/RoboFooter';

import { ChallengesPage } from './pages/ChallengesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ForSchoolsPage } from './pages/ForSchoolsPage';
import { AboutPage } from './pages/AboutPage';
import { JoinPage } from './pages/JoinPage';

import { RegisterModal } from './components/RegisterModal';
import { EventDeckModal } from './components/EventDeckModal';
import { FaqSection } from './components/FaqSection';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [isDeckOpen, setIsDeckOpen] = useState<boolean>(false);
  const [isFaqOpen, setIsFaqOpen] = useState<boolean>(false);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-white font-sans selection:bg-[#FF0055] selection:text-white relative overflow-x-hidden">
      {/* Slush Dark Sticky Navigation */}
      <BrutalistNav
        activeTab={currentRoute}
        onNavigate={handleNavigate}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenFaq={() => setIsFaqOpen(true)}
      />

      {/* Main Content Router */}
      <main className="w-full">
        {currentRoute === 'home' && (
          <>
            {/* 1. Slush Event Hero Section */}
            <RoboHero
              onOpenRegister={() => setIsRegisterOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* 2. Moving Event Ticker Strip */}
            <HeroTickerStrip />

            {/* 3. Slush Dark Laser Transition Strip */}
            <BlackTransitionStrip />

            {/* 4. Concept Intro */}
            <RoboIntro />

            {/* 5. Verified Impact & Stats */}
            <RoboStats />

            {/* WOW MOMENT 01: BUILD YOUR BOT Interactive Flow */}
            <WowBuildBot />

            {/* WOW MOMENT 02: COMPETITION SCOREBOARD TIMER */}
            <WowScoreboardTimer />

            {/* 6. Competition Tracks (Robo-Sprint & Robo-Precision) */}
            <RoboChallengesSection onNavigate={handleNavigate} />

            {/* WOW MOMENT 03: TECHNICAL ARENA DIAGRAMS */}
            <WowArenaDiagrams />

            {/* 7. 5-Stage Game Progression */}
            <RoboHowItWorks />

            {/* 8. Multi-Stage Competition Roadmap */}
            <RoboJourney />

            {/* 9. Junior vs Senior Division Split */}
            <RoboJuniorVsSenior />

            {/* 10. Educator & School Portal Box */}
            <RoboForSchoolsSection
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 11. Prize Allocations Scoreboard */}
            <RoboPrizes />

            {/* 12. Final Call To Action */}
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

      {/* Slush Footer */}
      <RoboFooter
        onNavigate={handleNavigate}
        onOpenFaq={() => setIsFaqOpen(true)}
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

      {/* FAQ Modal */}
      {isFaqOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="card-slush-glass rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative border border-[#FF0055]/40 shadow-[0_0_40px_rgba(255,0,85,0.3)]">
            <button
              onClick={() => setIsFaqOpen(false)}
              className="absolute top-4 right-4 bg-[#FF0055] text-white font-barlow font-black text-sm px-3 py-1 rounded-lg"
            >
              CLOSE ✕
            </button>
            <h2 className="text-white text-3xl font-barlow font-black uppercase mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <FaqSection />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
