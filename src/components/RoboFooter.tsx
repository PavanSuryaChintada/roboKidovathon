import React from 'react';

interface RoboFooterProps {
  onNavigate: (route: string) => void;
  onOpenFaq: () => void;
}

export const RoboFooter: React.FC<RoboFooterProps> = ({ onNavigate, onOpenFaq }) => {
  return (
    <footer className="w-full bg-[#050507] text-white border-t border-white/10 pt-12 pb-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-white/10">
        {/* Brand Column */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#FF0055] text-white font-barlow font-black text-xl px-2.5 py-0.5 rounded-lg border border-[#FF0055] shadow-[0_0_15px_rgba(255,0,85,0.5)]">
              ROBO
            </span>
            <span className="font-barlow font-black text-3xl text-white tracking-wider uppercase">
              KIDO-A-THON
            </span>
          </div>
          <p className="font-barlow font-bold text-lg text-[#E2FF00] tracking-widest uppercase">
            BUILD. CREATE. COMPETE.
          </p>
          <p className="text-xs font-dmsans text-[#A1A1AA] max-w-sm leading-relaxed">
            Official Hands-On Student Robotics Competition League in Sweden. Evolved from Techfest IIT Bombay model to Västerås.
          </p>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-wrap gap-6 font-barlow font-bold text-base uppercase text-white/90">
          <button onClick={() => onNavigate('home')} className="hover:text-[#FF0055] transition-colors">
            HOME
          </button>
          <button onClick={() => onNavigate('challenges')} className="hover:text-[#FF0055] transition-colors">
            CHALLENGES
          </button>
          <button onClick={() => onNavigate('how-it-works')} className="hover:text-[#FF0055] transition-colors">
            HOW IT WORKS
          </button>
          <button onClick={() => onNavigate('for-schools')} className="hover:text-[#FF0055] transition-colors">
            FOR SCHOOLS
          </button>
          <button onClick={() => onNavigate('about')} className="hover:text-[#FF0055] transition-colors">
            ABOUT
          </button>
          <button onClick={onOpenFaq} className="hover:text-[#FF0055] transition-colors">
            FAQ
          </button>
        </div>
      </div>

      {/* Copyright & Disclaimer */}
      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-dmsans text-[#A1A1AA] gap-4">
        <span>© 2026 Robo Kido-A-Thon / Robo-Kidovation League. All rights reserved.</span>
        <span>Adapted for Nordic School Culture, Inclusion & GDPR Safety.</span>
      </div>
    </footer>
  );
};
