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
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs select-none">
      {/* Clean Event Navbar Inner Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo / Event Title */}
        <div
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="bg-[#0F172A] text-white font-syne font-extrabold text-base sm:text-lg px-2.5 py-1 rounded-md tracking-wider">
            ROBO
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-extrabold text-lg sm:text-xl leading-none text-[#0F172A] tracking-tight uppercase">
              KIDO-A-THON
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0052FF] uppercase -mt-0.5">
              SWEDEN LEAGUE 2026
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 font-jakarta font-semibold text-sm tracking-wide text-slate-700 uppercase">
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
                className={`px-3.5 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-slate-100 text-[#0F172A] font-bold'
                    : 'bg-transparent text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
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
            className="btn-event-secondary text-xs sm:text-sm px-4 py-2 rounded-lg"
          >
            FOR SCHOOLS
          </button>
          <button
            onClick={onOpenRegister}
            className="btn-event-primary text-xs sm:text-sm px-5 py-2 rounded-lg"
          >
            JOIN THE COMPETITION →
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden px-3.5 py-1.5 bg-slate-900 text-white font-jakarta font-bold text-xs rounded-lg"
        >
          {mobileMenuOpen ? 'CLOSE ✕' : 'MENU ☰'}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-t border-slate-200 px-4 py-4 space-y-2 font-jakarta font-semibold text-base uppercase shadow-lg">
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
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-50 text-slate-800'
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
