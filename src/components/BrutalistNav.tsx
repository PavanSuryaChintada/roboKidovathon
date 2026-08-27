import React, { useState } from 'react';

interface BrutalistNavProps {
  activeTab: string;
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
  onOpenFaq: () => void;
}

export const BrutalistNav: React.FC<BrutalistNavProps> = ({
  activeTab,
  onNavigate,
  onOpenRegister,
  onOpenFaq,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (route: string) => {
    if (route === 'faq') {
      onOpenFaq();
    } else {
      onNavigate(route);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/10 select-none">
      {/* Slush-Level Navbar Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo / Event Title */}
        <div
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 cursor-pointer group whitespace-nowrap"
        >
          <div className="bg-[#0052FF] text-white font-inter font-extrabold text-xs sm:text-sm px-2.5 py-0.5 rounded-md tracking-wider">
            ROBO
          </div>
          <div className="flex flex-col">
            <span className="font-inter font-extrabold text-base sm:text-xl leading-none text-white tracking-tight uppercase whitespace-nowrap">
              KIDO-A-THON
            </span>
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#E2FF00] uppercase -mt-0.5 whitespace-nowrap">
              SWEDEN LEAGUE 2026
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 font-inter font-semibold text-xs sm:text-sm tracking-wide text-slate-300 uppercase whitespace-nowrap">
          {[
            { id: 'home', label: 'HOME' },
            { id: 'challenges', label: 'CHALLENGES' },
            { id: 'how-it-works', label: 'HOW IT WORKS' },
            { id: 'for-schools', label: 'FOR SCHOOLS' },
            { id: 'about', label: 'ABOUT' },
            { id: 'faq', label: 'FAQ' },
          ].map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-white/15 text-white font-bold border border-white/20'
                    : 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3 whitespace-nowrap">
          <button
            onClick={() => handleLinkClick('for-schools')}
            className="btn-event-secondary text-xs sm:text-sm px-4 py-2 rounded-lg whitespace-nowrap"
          >
            FOR SCHOOLS →
          </button>
          <button
            onClick={onOpenRegister}
            className="btn-event-primary text-xs sm:text-sm px-5 py-2 rounded-lg whitespace-nowrap"
          >
            JOIN THE COMPETITION →
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden px-3.5 py-1.5 bg-[#0052FF] text-white font-inter font-bold text-xs rounded-lg whitespace-nowrap"
        >
          {mobileMenuOpen ? 'CLOSE ✕' : 'MENU ☰'}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#0B0F19] border-t border-white/10 px-4 py-4 space-y-2 font-inter font-semibold text-sm uppercase shadow-2xl">
          {[
            { id: 'home', label: 'HOME' },
            { id: 'challenges', label: 'CHALLENGES' },
            { id: 'how-it-works', label: 'HOW IT WORKS' },
            { id: 'for-schools', label: 'FOR SCHOOLS' },
            { id: 'about', label: 'ABOUT' },
            { id: 'faq', label: 'FAQ' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg ${
                activeTab === item.id
                  ? 'bg-[#0052FF] text-white'
                  : 'bg-white/5 text-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { onOpenRegister(); setMobileMenuOpen(false); }}
              className="w-full btn-event-primary py-3 text-sm text-center rounded-lg"
            >
              JOIN THE COMPETITION →
            </button>
            <button
              onClick={() => handleLinkClick('for-schools')}
              className="w-full btn-event-secondary py-3 text-sm text-center rounded-lg"
            >
              FOR SCHOOLS →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
