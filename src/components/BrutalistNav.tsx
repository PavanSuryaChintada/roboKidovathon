import React, { useState, useEffect } from 'react';

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (route: string) => {
    if (route === 'faq') {
      onOpenFaq();
    } else {
      onNavigate(route);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full select-none transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0C1222]/85 backdrop-blur-md border-b border-white/15 shadow-xl text-white py-3'
          : 'bg-transparent text-white border-b border-white/10 py-4'
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group whitespace-nowrap shrink-0"
        >
          <div className="bg-[#0052FF] text-white font-inter font-extrabold text-xs sm:text-sm px-2 py-0.5 rounded-sm tracking-wider shadow-sm">
            ROBO
          </div>
          <div className="flex flex-col">
            <span className="font-inter font-bold text-base sm:text-lg leading-none text-white tracking-tight uppercase whitespace-nowrap">
              KIDO-A-THON
            </span>
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#E2FF00] uppercase -mt-0.5 whitespace-nowrap">
              SWEDEN LEAGUE 2026
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 font-inter font-semibold text-xs tracking-wide text-white/90 uppercase whitespace-nowrap">
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
                className={`px-3.5 py-1.5 rounded-md transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0052FF] text-white font-bold shadow-md'
                    : 'bg-transparent text-white/90 hover:text-white hover:bg-white/10'
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
            className={`text-xs px-4 py-2.5 rounded-md whitespace-nowrap font-semibold border transition-all ${
              isScrolled
                ? 'bg-slate-800/80 text-white border-white/20 hover:bg-slate-700'
                : 'bg-white/10 text-white border-white/25 hover:bg-white/20'
            }`}
          >
            FOR SCHOOLS →
          </button>
          <button
            onClick={onOpenRegister}
            className="btn-event-primary text-xs px-4 py-2.5 rounded-md whitespace-nowrap"
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
        <div className="lg:hidden w-full bg-[#0C1222] border-t border-white/15 px-4 py-4 space-y-2 font-inter font-semibold text-sm uppercase shadow-2xl text-white">
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
                  ? 'bg-[#0052FF] text-white font-bold'
                  : 'bg-slate-800 text-white/90'
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
              className="w-full bg-white/10 text-white border border-white/20 py-3 text-sm text-center rounded-md"
            >
              FOR SCHOOLS →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
