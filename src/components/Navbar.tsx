import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ArrowRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenRegisterModal: () => void;
  onOpenDeckModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegisterModal, onOpenDeckModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Challenges', href: '#challenges' },
    { name: 'Rules & Arenas', href: '#rules' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-slate-900 rounded-md text-white flex items-center justify-center font-bold shadow-2xs">
              <Cpu className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight text-slate-900">
                  Blix<span className="text-[#0062B8]">-A-Thon</span>
                </span>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 rounded">
                  Västerås 2026
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wide">
                🇸🇪 Robo-Kidovation League Sweden
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 border border-slate-200 bg-slate-50/50 p-1 rounded-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-white rounded transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenDeckModal}
              className="px-4 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-md transition shadow-2xs flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>Event Deck</span>
            </button>
            <button
              onClick={onOpenRegisterModal}
              className="px-5 py-2 text-xs font-bold text-white bg-[#0062B8] hover:bg-[#00529B] rounded-md transition shadow-2xs flex items-center gap-2"
            >
              <span>Register Now (125 SEK)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenRegisterModal}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#0062B8] rounded-md"
            >
              Register
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeckModal();
              }}
              className="w-full text-center px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 rounded-md"
            >
              Download Event Deck
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegisterModal();
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-bold text-white bg-[#0062B8] rounded-md"
            >
              Register Student (125 SEK)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
