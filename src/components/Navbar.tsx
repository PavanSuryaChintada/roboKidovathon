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
    { id: 'about', label: 'About' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'for-schools', label: 'Schools' },
    { id: 'prizes', label: 'Prizes' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'prizes') {
      if (activeTab !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const el = document.getElementById('prizes-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById('prizes-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 select-none ${
        isScrolled
          ? 'bg-[#070709]/95 backdrop-blur-md border-b border-white/10 py-3 text-white'
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between gap-6">
        
        {/* Brand Mark (Left) */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left group focus:outline-none flex items-center gap-2.5"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
          <span className="font-headline font-bold text-lg sm:text-xl tracking-tight text-white uppercase group-hover:text-slate-200 transition-colors">
            ROBO-KIDO-A-THON
          </span>
        </button>

        {/* Desktop Navigation Links (Center) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-xs font-display font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button (Right) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenRegister}
            className="btn-pill-lime text-xs font-bold py-2 px-5"
          >
            <span>JOIN LEAGUE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#22C55E] focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0F] border-b border-white/10 px-6 py-6 space-y-4 text-white">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`py-2 text-left text-sm font-display font-medium border-b border-white/5 ${
                  activeTab === item.id ? 'text-[#22C55E]' : 'text-slate-300'
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
            className="w-full btn-pill-lime py-3 text-xs flex items-center justify-center gap-2 mt-2"
          >
            <span>JOIN LEAGUE NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
