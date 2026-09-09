import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    { id: 'for-schools', label: 'For Schools' },
    { id: 'how-it-works', label: 'STEM Programme' },
    { id: 'challenges', label: 'RoboKidovation' },
    { id: 'lgr22', label: 'Lgr22' },
    { id: 'events', label: 'Events' },
    { id: 'about', label: 'About INIAC' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToId = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'contact') {
      // Footer renders on every page, so no route change is needed.
      scrollToId('site-footer');
    } else if (id === 'advisory') {
      // Advisory section only exists on the home page.
      if (activeTab !== 'home') {
        onNavigate('home');
        setTimeout(() => scrollToId('advisory-section'), 100);
      } else {
        scrollToId('advisory-section');
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
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between gap-6">

        {/* Brand Mark - White initially, transitions to dark when scrolled */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left group focus:outline-none flex items-center"
        >
          <span
            className={`font-headline font-bold text-base sm:text-xl tracking-tight uppercase transition-colors duration-300 ${
              isScrolled
                ? 'text-[#0A1930] group-hover:text-[#006AA7]'
                : 'text-white group-hover:text-[#FFCD00]'
            }`}
          >
            ROBOKIDOVATION VÄSTERÅS
          </span>
        </button>

        {/* Desktop Navigation Links (Center) */}
        <nav
          className={`hidden md:flex items-center gap-1.5 lg:gap-2 p-1 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-slate-50 border border-slate-200'
              : 'bg-black/30 border border-white/15 backdrop-blur-md'
          }`}
        >
          {navLinks.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-display font-medium tracking-wide transition-all duration-200 ${
                  isScrolled
                    ? isActive
                      ? 'text-[#006AA7] bg-white font-semibold border border-slate-200 shadow-sm'
                      : 'text-slate-600 hover:text-[#0A1930] hover:bg-white'
                    : isActive
                    ? 'text-white bg-white/20 font-semibold border border-white/20 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button (Right) */}
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

        {/* Mobile Hamburger Toggle with Icon Rotation Motion */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 focus:outline-none transition-colors ${
            isScrolled
              ? 'text-[#0A1930] hover:text-[#006AA7]'
              : 'text-white hover:text-slate-300'
          }`}
          aria-label="Toggle navigation"
        >
          <motion.div
            key={mobileMenuOpen ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </motion.button>

      </div>

      {/* Mobile Drawer with Fluid Dropdown & Stagger Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl"
          >
            <div className="px-6 py-6 space-y-4 text-[#0A1930]">
              <div className="flex flex-col gap-1.5">
                {navLinks.map((item, idx) => {
                  const isActive = activeTab === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => handleLinkClick(item.id)}
                      className={`py-3 px-4 rounded-xl text-left text-sm font-display font-medium transition-all ${
                        isActive
                          ? 'text-[#006AA7] bg-slate-100 font-bold border border-slate-200'
                          : 'text-slate-700 hover:text-[#0A1930] hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: navLinks.length * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full btn-pill-lime py-3.5 text-xs font-black flex items-center justify-center gap-2 shadow-md"
                >
                  <span>JOIN LEAGUE NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
