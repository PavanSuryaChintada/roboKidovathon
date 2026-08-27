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
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 select-none">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group whitespace-nowrap shrink-0"
        >
          <div className="bg-[#0052FF] text-white font-inter font-extrabold text-xs sm:text-sm px-2 py-0.5 rounded-sm tracking-wider">
            ROBO
          </div>
          <div className="flex flex-col">
            <span className="font-inter font-bold text-base sm:text-lg leading-none text-[#0B1020] tracking-tight uppercase whitespace-nowrap">
              KIDO-A-THON
            </span>
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#0052FF] uppercase -mt-0.5 whitespace-nowrap">
              SWEDEN LEAGUE 2026
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links (#334155 text with #0052FF hover) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 font-inter font-semibold text-xs tracking-wide text-[#334155] uppercase whitespace-nowrap">
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
                className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0052FF] text-white font-semibold'
                    : 'bg-transparent text-[#334155] hover:text-[#0052FF] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3 whitespace-nowrap shrink-0">
          <button
            onClick={() => handleLinkClick('for-schools')}
            className="btn-event-secondary-light text-xs px-4 py-2 rounded-md whitespace-nowrap"
          >
            FOR SCHOOLS →
          </button>
          <button
            onClick={onOpenRegister}
            className="btn-event-primary text-xs px-4 py-2 rounded-md whitespace-nowrap"
          >
            JOIN THE COMPETITION →
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden px-3.5 py-1.5 bg-[#0052FF] text-white font-inter font-semibold text-xs rounded-md whitespace-nowrap shrink-0"
        >
          {mobileMenuOpen ? 'CLOSE ✕' : 'MENU ☰'}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-t border-slate-200 px-4 py-4 space-y-2 font-inter font-semibold text-sm uppercase shadow-lg">
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
              className={`w-full text-left px-4 py-2.5 rounded-md ${
                activeTab === item.id
                  ? 'bg-[#0052FF] text-white font-semibold'
                  : 'bg-slate-50 text-[#334155]'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { onOpenRegister(); setMobileMenuOpen(false); }}
              className="w-full btn-event-primary py-3 text-sm text-center rounded-md"
            >
              JOIN THE COMPETITION →
            </button>
            <button
              onClick={() => handleLinkClick('for-schools')}
              className="w-full btn-event-secondary-light py-3 text-sm text-center rounded-md"
            >
              FOR SCHOOLS →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
