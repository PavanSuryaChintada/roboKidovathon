import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { RefHero } from './components/RefHero';
import { RefHeroMarquee } from './components/RefHeroMarquee';
import { RefTrackComparison } from './components/RefTrackComparison';
import { RefKioskShowcase } from './components/RefKioskShowcase';
import { RefPhotoStrip } from './components/RefPhotoStrip';
import { RefTrendingCards } from './components/RefTrendingCards';
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
            {/* 01. Hero: Editorial Headline + Subtext + Primary/Secondary CTAs */}
            <RefHero
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 02. Trusted Partners Marquee */}
            <RefHeroMarquee />

            {/* 03. Competition Track Comparison: Explorer vs Advanced vs Precision */}
            <RefTrackComparison
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 04. Arena & Build Setup: Metric Measurements (244 x 122 cm) */}
            <RefKioskShowcase
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 05. Tournament Highlights & Real Action Photo Reel */}
            <RefPhotoStrip />

            {/* 06. Useful Educator & Competitor Resources */}
            <RefTrendingCards
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 10. Main Conversion Anchor: Bring Hands-On STEM to Your School */}
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
