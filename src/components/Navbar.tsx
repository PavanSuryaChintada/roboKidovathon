import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
  onOpenFaq: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenRegister,
  onOpenFaq
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'challenges', label: 'CHALLENGES' },
    { id: 'how-it-works', label: 'HOW IT WORKS' },
    { id: 'for-schools', label: 'FOR SCHOOLS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'faq') {
      onOpenFaq();
    } else {
      onNavigate(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 select-none ${
        isScrolled
          ? 'bg-[#000000]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3 text-white'
          : 'bg-gradient-to-b from-[#000000]/90 via-[#000000]/40 to-transparent border-b border-white/10 py-5 text-white'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between gap-4">
        
        {/* Brand Lockup */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="bg-[#0052FF] text-white font-display font-black text-xs sm:text-sm px-2.5 py-1 rounded-[2px] tracking-wider group-hover:bg-[#0043D6] transition-colors shadow-sm">
            ROBO
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-base sm:text-lg leading-none text-white tracking-tight uppercase group-hover:text-slate-200 transition-colors">
              KIDO-A-THON
            </span>
            <span className="text-[9px] font-mono-code font-bold tracking-[0.22em] text-[#0052FF] uppercase mt-0.5">
              SWEDEN LEAGUE 2026
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-4 py-1.5 text-xs font-display font-bold tracking-[0.12em] uppercase transition-all rounded-full ${
                  isActive
                    ? 'text-white bg-[#0052FF] shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Triggers */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleLinkClick('for-schools')}
            className="px-4 py-2 text-xs font-display font-bold tracking-[0.12em] uppercase text-white/90 border border-white/20 hover:border-white hover:bg-white/10 rounded-[2px] transition-all"
          >
            FOR SCHOOLS →
          </button>

          <button
            onClick={onOpenRegister}
            className="btn-conference-primary py-2.5 px-5 text-xs"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-[2px] border border-white/20"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#05070D]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-slide-up text-white">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`py-2.5 text-left text-sm font-display font-bold tracking-wider uppercase border-b border-white/5 ${
                  activeTab === item.id ? 'text-[#0052FF]' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => handleLinkClick('for-schools')}
              className="w-full py-3 text-xs font-display font-bold tracking-wider uppercase text-white border border-white/20 rounded-[2px]"
            >
              FOR SCHOOLS PORTAL →
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full btn-conference-primary py-3.5 text-xs flex items-center justify-center gap-2"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
