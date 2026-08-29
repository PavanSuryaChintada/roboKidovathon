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
    { id: 'advisory', label: 'Advisory' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'advisory') {
      if (activeTab !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const el = document.getElementById('advisory-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById('advisory-section');
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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 text-[#0A1930] shadow-sm'
          : 'bg-transparent py-5 text-[#0A1930]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between gap-6">

        {/* Brand Mark */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left group focus:outline-none flex items-center"
        >
          <span className="font-headline font-bold text-base sm:text-xl tracking-tight text-[#0A1930] uppercase group-hover:text-[#006AA7] transition-colors duration-200">
            ROBOKIDOVATION VÄSTERÅS
          </span>
        </button>

        {/* Desktop Navigation Links (Center) */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 p-1 rounded-full bg-slate-50 border border-slate-200">
          {navLinks.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-display font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-[#006AA7] bg-white font-semibold border border-slate-200 shadow-sm'
                    : 'text-slate-500 hover:text-[#0A1930] hover:bg-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button (Right - Swedish Yellow Pill) */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenRegister}
            className="btn-pill-lime text-xs font-black py-2 px-5.5 transition-all duration-200 shadow-md"
          >
            <span>JOIN LEAGUE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#0A1930] hover:text-[#006AA7] focus:outline-none transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#0A1930]" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 text-[#0A1930]">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`py-2.5 px-3 rounded-lg text-left text-sm font-display font-medium transition-all ${
                  activeTab === item.id
                    ? 'text-[#006AA7] bg-slate-50 font-semibold'
                    : 'text-slate-500 hover:text-[#0A1930] hover:bg-slate-50'
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
