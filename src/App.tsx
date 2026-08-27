import { useState } from 'react';
import { BrutalistNav } from './components/BrutalistNav';
import { CinematicVideoHero } from './components/CinematicVideoHero';
import { RoboIntro } from './components/RoboIntro';
import { RoboStats } from './components/RoboStats';
import { MediaStorytelling } from './components/MediaStorytelling';
import { WowBuildBot } from './components/WowBuildBot';
import { WowScoreboardTimer } from './components/WowScoreboardTimer';
import { WowArenaDiagrams } from './components/WowArenaDiagrams';
import { RoboChallengesSection } from './components/RoboChallengesSection';
import { RoboHowItWorks } from './components/RoboHowItWorks';
import { RoboJourney } from './components/RoboJourney';
import { RoboJuniorVsSenior } from './components/RoboJuniorVsSenior';
import { RoboForSchoolsSection } from './components/RoboForSchoolsSection';
import { RoboPrizes } from './components/RoboPrizes';
import { EventInfoBlock } from './components/EventInfoBlock';
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
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] font-sans selection:bg-[#0052FF] selection:text-white relative overflow-x-hidden">
      {/* Clean Professional Event Navigation */}
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
            {/* 1. Full-Width Cinematic Video Hero */}
            <CinematicVideoHero
              onOpenRegister={() => setIsRegisterOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* 2. Enormous Clean Statistics Data Section */}
            <RoboStats />

            {/* 3. About / Mission Split Editorial Section */}
            <RoboIntro />

            {/* 4. Photo & Video Storytelling Blocks (Students Build, Code, Compete) */}
            <MediaStorytelling />

            {/* WOW MOMENT 01: BUILD YOUR BOT Interactive Flow */}
            <WowBuildBot />

            {/* 5. Competition Tracks (Robo-Sprint & Robo-Precision) */}
            <RoboChallengesSection onNavigate={handleNavigate} />

            {/* WOW MOMENT 02: COMPETITION SCOREBOARD TIMER */}
            <WowScoreboardTimer />

            {/* WOW MOMENT 03: TECHNICAL ARENA DIAGRAMS */}
            <WowArenaDiagrams />

            {/* 6. 5-Stage Game Progression */}
            <RoboHowItWorks />

            {/* 7. Multi-Stage Competition Roadmap */}
            <RoboJourney />

            {/* 8. Junior vs Senior Division Split */}
            <RoboJuniorVsSenior />

            {/* 9. Educator & School Portal Box */}
            <RoboForSchoolsSection
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 10. Prize Allocations Scoreboard */}
            <RoboPrizes />

            {/* 11. Event Metadata Block */}
            <EventInfoBlock />

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

      {/* Footer */}
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
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative border border-slate-200 shadow-2xl">
            <button
              onClick={() => setIsFaqOpen(false)}
              className="absolute top-4 right-4 bg-slate-900 text-white font-jakarta font-bold text-xs px-3 py-1.5 rounded-lg"
            >
              CLOSE ✕
            </button>
            <h2 className="text-[#0F172A] text-3xl font-syne font-extrabold uppercase mb-4">
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
