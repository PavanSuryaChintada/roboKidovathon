import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { RefHeroMarquee } from './components/RefHeroMarquee';
import { RefCompetitionFlow } from './components/RefCompetitionFlow';
import { RefHero } from './components/RefHero';
import { RefTrackComparison } from './components/RefTrackComparison';
import { RefKioskShowcase } from './components/RefKioskShowcase';
import { RefCompetitionInfo } from './components/RefCompetitionInfo';
import { RefSlushCountdown } from './components/RefSlushCountdown';
import { RefPhotoStrip } from './components/RefPhotoStrip';
import { RefWorkshopTapeBanner } from './components/RefWorkshopTapeBanner';
import { RefFooter } from './components/RefFooter';

import { ChallengesPage } from './pages/ChallengesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ForSchoolsPage } from './pages/ForSchoolsPage';
import { AboutPage } from './pages/AboutPage';
import { Lgr22Page } from './pages/Lgr22Page';
import { EventsPage } from './pages/EventsPage';

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
    <div className="min-h-screen bg-white text-[#0A1930] font-sans selection:bg-[#FFCD00] selection:text-[#0A1930] relative overflow-x-hidden">
      
      {/* ── 0. Floating Responsive Header ── */}
      <Navbar
        activeTab={currentRoute}
        onNavigate={handleNavigate}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* ── Page Router ── */}
      <main className="w-full">
        {currentRoute === 'home' && (
          <>
            {/* 01. Trusted Partners Marquee / Ticker */}
            <div className="pt-20">
              <RefHeroMarquee />
            </div>

            {/* 02. Competition Flow: Workshop -> Inter-School Competition -> Inter-School Finals */}
            <RefCompetitionFlow
              onOpenRegister={() => setIsRegisterOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* 03. Main Hero / Video & Design Section */}
            <RefHero
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 04. Top Three Cards: Robo Sprint / Robo Sprint Advanced / Robo Quiz */}
            <RefTrackComparison
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 05. Design, Build & Compete: Robo Sprint + Arena Match (Cohesive 2-Card Layout) */}
            <RefKioskShowcase
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 06. Competition Information: Robo Sprint + Robo Quiz (Side-by-Side) */}
            <RefCompetitionInfo
              onOpenRegister={() => setIsRegisterOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* 07. Event Information: December 4 & 5 Grand Finale Countdown */}
            <div className="py-10 bg-white border-t border-slate-200">
              <RefSlushCountdown onOpenRegister={() => setIsRegisterOpen(true)} />
            </div>

            {/* 08. Tournament Highlights Photo Reel */}
            <RefPhotoStrip />

            {/* 09. Main Conversion Anchor: Bring Hands-On STEM to Your School */}
            <RefWorkshopTapeBanner
              onOpenRegister={() => setIsRegisterOpen(true)}
              onOpenDeckModal={() => setIsDeckOpen(true)}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentRoute === 'challenges' && (
          <ChallengesPage
            onOpenRegister={() => setIsRegisterOpen(true)}
            onOpenDeckModal={() => setIsDeckOpen(true)}
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

        {currentRoute === 'lgr22' && (
          <Lgr22Page
            onOpenRegister={() => setIsRegisterOpen(true)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {currentRoute === 'events' && (
          <EventsPage
            onOpenRegister={() => setIsRegisterOpen(true)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* ── Master Dark Footer with Verified Contacts ── */}
      <RefFooter
        onNavigate={handleNavigate}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* ── Interactive Modals ── */}
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
