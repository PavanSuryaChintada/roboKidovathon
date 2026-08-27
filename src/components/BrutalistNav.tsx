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
    <nav className="sticky top-0 z-50 w-full bg-[#0B0B0E]/85 backdrop-blur-xl border-b border-white/10 select-none mb-6">
      {/* Slush Dark Navbar Inner Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo / Slush Neon Badge */}
        <div
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="bg-[#FF0055] text-white font-barlow font-black text-lg sm:text-xl px-2.5 py-0.5 border border-[#FF0055] shadow-[0_0_15px_rgba(255,0,85,0.5)] group-hover:scale-105 transition-transform">
            ROBO
          </div>
          <div className="flex flex-col">
            <span className="font-barlow font-black text-xl sm:text-2xl leading-none text-white tracking-wider uppercase">
              KIDO-A-THON
            </span>
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#00F2FE] uppercase -mt-0.5">
              SWEDEN LEAGUE 2026
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 font-barlow font-bold text-base tracking-wider uppercase">
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
                className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                  isActive
                    ? 'bg-[#FF0055] text-white border-[#FF0055] shadow-[0_0_15px_rgba(255,0,85,0.4)]'
                    : 'bg-transparent text-white/80 border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleLinkClick('for-schools')}
            className="btn-slush-volt text-xs sm:text-sm px-4 py-2 rounded-lg"
          >
            FOR SCHOOLS →
          </button>
          <button
            onClick={onOpenRegister}
            className="btn-slush-magenta text-xs sm:text-sm px-5 py-2 rounded-lg"
          >
            JOIN THE COMPETITION →
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden px-3.5 py-1.5 bg-[#FF0055] text-white font-barlow font-black text-sm rounded-lg shadow-[0_0_15px_rgba(255,0,85,0.4)]"
        >
          {mobileMenuOpen ? 'CLOSE ✕' : 'MENU ☰'}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#0B0B0E] border-t border-white/10 px-4 py-4 space-y-3 font-barlow font-bold text-lg uppercase shadow-2xl">
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
              className={`w-full text-left px-4 py-2.5 rounded-lg border ${
                activeTab === item.id
                  ? 'bg-[#FF0055] text-white border-[#FF0055]'
                  : 'bg-white/5 text-white/90 border-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { onOpenRegister(); setMobileMenuOpen(false); }}
              className="w-full btn-slush-magenta py-3 text-sm text-center rounded-lg"
            >
              JOIN THE COMPETITION →
            </button>
            <button
              onClick={() => handleLinkClick('for-schools')}
              className="w-full btn-slush-volt py-3 text-sm text-center rounded-lg"
            >
              FOR SCHOOLS →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
