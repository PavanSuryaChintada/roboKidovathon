import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-250 select-none ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#07111F]/10 shadow-sm py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#07111F]/8 py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between gap-4">
        
        {/* Brand Lockup */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="bg-[#0052FF] text-white font-display font-extrabold text-sm sm:text-base px-2.5 py-1 rounded-[2px] tracking-tight group-hover:bg-[#0043D6] transition-colors">
            ROBO
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-base sm:text-lg leading-none text-[#07111F] tracking-tight uppercase">
              KIDO-A-THON
            </span>
            <span className="text-[9px] font-mono-code font-bold tracking-[0.2em] text-[#0052FF] uppercase mt-0.5">
              SWEDEN LEAGUE 2026
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3.5 py-1.5 text-xs font-display font-bold tracking-[0.1em] uppercase transition-all rounded-[2px] ${
                  isActive
                    ? 'text-[#0052FF] bg-[#0052FF]/10'
                    : 'text-[#07111F]/75 hover:text-[#07111F] hover:bg-[#07111F]/5'
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
            className="px-4 py-2 text-xs font-display font-bold tracking-[0.1em] uppercase text-[#07111F] border border-[#07111F]/20 hover:border-[#07111F] hover:bg-[#07111F]/5 rounded-[2px] transition-all"
          >
            FOR SCHOOLS →
          </button>

          <button
            onClick={onOpenRegister}
            className="px-5 py-2 text-xs font-display font-bold tracking-[0.1em] uppercase text-white bg-[#0052FF] hover:bg-[#0043D6] rounded-[2px] shadow-sm hover:shadow-md transition-all flex items-center gap-2"
          >
            <span>JOIN THE COMPETITION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#07111F] hover:bg-[#07111F]/5 rounded-[2px] border border-[#07111F]/15"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#07111F]/10 px-6 py-6 space-y-4 animate-slide-up">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`py-2 text-left text-sm font-display font-bold tracking-wider uppercase border-b border-slate-100 ${
                  activeTab === item.id ? 'text-[#0052FF]' : 'text-[#07111F]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('for-schools')}
              className="w-full py-3 text-xs font-display font-bold tracking-wider uppercase text-[#07111F] border border-[#07111F]/20 rounded-[2px]"
            >
              FOR SCHOOLS PORTAL →
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 text-xs font-display font-bold tracking-wider uppercase text-white bg-[#0052FF] rounded-[2px] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>JOIN THE COMPETITION</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
