import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      setIsScrolled(window.scrollY > 30);
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
          ? 'bg-[#070709]/95 backdrop-blur-md border-b border-white/10 py-3.5 text-white shadow-2xl'
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between gap-6">
        
        {/* Brand Mark */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left group focus:outline-none flex items-center"
        >
          <span className="font-headline font-bold text-lg sm:text-xl tracking-tight text-white uppercase group-hover:text-[#22C55E] transition-colors duration-200">
            ROBO-KIDO-A-THON
          </span>
        </button>

        {/* Desktop Navigation Links (Center - No Glow) */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 p-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
          {navLinks.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-display font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/[0.12] font-semibold border border-white/15'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button (Right - No Glow) */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenRegister}
            className="btn-pill-lime text-xs font-bold py-2 px-5.5 transition-all duration-200"
          >
            <span>JOIN LEAGUE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-slate-300 focus:outline-none transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0F] border-b border-white/10 px-6 py-6 space-y-4 text-white">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`py-2.5 px-3 rounded-lg text-left text-sm font-display font-medium transition-all ${
                  activeTab === item.id
                    ? 'text-white bg-white/[0.08] font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
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
