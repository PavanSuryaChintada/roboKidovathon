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
    <nav className="sticky top-0 z-50 w-full bg-white border-b-2.5 border-[#111111] shadow-[0px_4px_0px_#111111] select-none mb-6">
      {/* Full Length Navbar Inner Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Logo / Physical Badge */}
        <div
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="bg-[#FACC15] text-[#111111] font-barlow font-black text-lg sm:text-xl px-2.5 py-0.5 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] group-hover:rotate-2 transition-transform">
            ROBO
          </div>
          <div className="flex flex-col">
            <span className="font-barlow font-black text-xl sm:text-2xl leading-none text-[#111111] tracking-wider uppercase">
              KIDO-A-THON
            </span>
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#0052FF] uppercase -mt-0.5">
              SWEDEN LEAGUE
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
                className={`px-3.5 py-1.5 border-2 transition-all ${
                  isActive
                    ? 'bg-[#111111] text-[#FACC15] border-[#111111] shadow-[2px_2px_0px_#111111]'
                    : 'bg-transparent text-[#111111] border-transparent hover:border-[#111111] hover:bg-[#F7F4EC]'
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
            className="btn-brutal-yellow text-xs sm:text-sm px-4 py-2"
          >
            FOR SCHOOLS →
          </button>
          <button
            onClick={onOpenRegister}
            className="btn-brutal text-xs sm:text-sm px-5 py-2 bg-[#111111] text-white"
          >
            JOIN THE COMPETITION →
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden px-3 py-1.5 bg-[#FACC15] border-2 border-[#111111] font-barlow font-black text-sm shadow-[2px_2px_0px_#111111]"
        >
          {mobileMenuOpen ? 'CLOSE ✕' : 'MENU ☰'}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-t-2 border-[#111111] px-4 py-4 space-y-3 font-barlow font-bold text-lg uppercase shadow-[0px_4px_0px_#111111]">
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
              className={`w-full text-left px-4 py-2.5 border-2 ${
                activeTab === item.id
                  ? 'bg-[#111111] text-[#FACC15] border-[#111111]'
                  : 'bg-[#F7F4EC] text-[#111111] border-[#111111]'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { onOpenRegister(); setMobileMenuOpen(false); }}
              className="w-full btn-brutal py-3 text-sm text-center"
            >
              JOIN THE COMPETITION →
            </button>
            <button
              onClick={() => handleLinkClick('for-schools')}
              className="w-full btn-brutal-yellow py-3 text-sm text-center"
            >
              FOR SCHOOLS →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
