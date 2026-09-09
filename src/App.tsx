import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { RefHero } from './components/RefHero';
import { RefSlushCountdown } from './components/RefSlushCountdown';
import { RefManifesto } from './components/RefManifesto';
import { RefSpecialAdvisory } from './components/RefSpecialAdvisory';
import { RefTheExperience } from './components/RefTheExperience';
import { RefKioskShowcase } from './components/RefKioskShowcase';
import { RefSkillPills } from './components/RefSkillPills';
import { RefPhotoStrip } from './components/RefPhotoStrip';
import { RefTapeBanner } from './components/RefTapeBanner';
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
      
      {/* ── 0. Floating Minimal Header with Neon Pill Button ── */}
      <Navbar
        activeTab={currentRoute}
        onNavigate={handleNavigate}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* ── Page Router ── */}
      <main className="w-full">
        {currentRoute === 'home' && (
          <>
            {/* 01. Hero: Split Headline + 3x3 Staggered Pill Bento Gallery */}
            <RefHero
              onNavigate={handleNavigate}
            />

            {/* 01.5 Slush-style Dedicated Full-Width Countdown Banner */}
            <RefSlushCountdown onOpenRegister={() => setIsRegisterOpen(true)} />

            {/* 02. Manifesto: MAKE ROBOTICS [avatar] THE EXPERIENCE [avatar] + Logos + Reel */}
            <RefManifesto onNavigate={handleNavigate} />

            {/* 02.5 Special Advisory: Ambassador launch, framework, competition structure, kit list */}
            <RefSpecialAdvisory />

            {/* 03. THE [Outline] EXPERIENCE [Solid] + 3 Angled Poster Cards + Coral Split Banner */}
            <RefTheExperience
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 04. DESIGN, CREATE & CONNECT + Vertical Kiosk Screen Mockup */}
            <RefKioskShowcase
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 05. CHAMPIONSHIP SKILLS + Colorful Neon Pill Cloud */}
            <RefSkillPills
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 06. TOURNAMENT [Outline] HIGHLIGHTS [Solid] + 7-Column Tall Vertical Photo Ribbon */}
            <RefPhotoStrip />

            {/* 07. SCANDINAVIAN ON-SITE ROBOTICS LEAGUE Graphic Tape Banner */}
            <RefTapeBanner
              onOpenRegister={() => setIsRegisterOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* 08. WHAT'S [Solid] TRENDING [Outline] + 3-Column News/Insights Cards */}
            <RefTrendingCards
              onNavigate={handleNavigate}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* 09. Clean, High-Impact Pre-Footer CTA Banner */}
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

      {/* ── Master Dark Footer ── */}
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
