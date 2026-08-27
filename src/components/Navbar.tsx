import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
  onOpenFaq?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenRegister,
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

  const navLinks = [
    { id: 'about', label: 'ABOUT' },
    { id: 'challenges', label: 'CHALLENGES' },
    { id: 'how-it-works', label: 'HOW IT WORKS' },
    { id: 'for-schools', label: 'SCHOOLS' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 select-none ${
        isScrolled
          ? 'bg-[#000000]/95 border-b border-white/10 py-4 text-white'
          : 'bg-transparent py-6 sm:py-8 text-white'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between gap-6">
        
        {/* Brand Mark (Left) */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left group focus:outline-none flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-[#0052FF]" />
          <span className="font-display font-black text-sm sm:text-base tracking-[0.08em] uppercase text-white hover:text-slate-200 transition-colors">
            ROBO-KIDO-A-THON
          </span>
        </button>

        {/* Minimal Navigation Links & Action (Right) */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <nav className="flex items-center gap-7 lg:gap-9">
            {navLinks.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-xs font-display font-bold tracking-[0.14em] uppercase transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            onClick={onOpenRegister}
            className="text-xs font-display font-black tracking-[0.14em] uppercase text-white bg-transparent hover:text-[#0052FF] flex items-center gap-1.5 transition-colors border-b border-white/40 hover:border-[#0052FF] pb-0.5"
          >
            <span>REGISTER</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#0052FF] focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05070A] border-b border-white/10 px-6 py-6 space-y-4 text-white">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`py-2 text-left text-xs font-display font-bold tracking-[0.14em] uppercase border-b border-white/5 ${
                  activeTab === item.id ? 'text-white' : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="w-full py-3.5 mt-2 text-xs font-display font-black tracking-[0.14em] uppercase bg-white text-black hover:bg-[#0052FF] hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
