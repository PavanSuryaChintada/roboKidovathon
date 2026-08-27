import React from 'react';

interface RoboFooterProps {
  onNavigate: (route: string) => void;
  onOpenFaq: () => void;
}

export const RoboFooter: React.FC<RoboFooterProps> = ({ onNavigate, onOpenFaq }) => {
  return (
    <footer className="w-full bg-[#090D16] text-white border-t border-slate-800 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-slate-800">
        {/* Brand Column */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#0052FF] text-white font-inter font-extrabold text-base px-2.5 py-0.5 rounded-md">
              ROBO
            </span>
            <span className="font-inter font-extrabold text-xl text-white tracking-tight uppercase whitespace-nowrap">
              KIDO-A-THON
            </span>
          </div>
          <p className="text-xs font-mono font-bold text-[#E2FF00] tracking-widest uppercase">
            SWEDEN LEAGUE · VÄSTERÅS 2026
          </p>
          <p className="text-xs font-inter text-[#E2E8F0] max-w-sm leading-relaxed font-medium">
            Official Hands-On Student Robotics Competition League in Sweden. Evolved from Techfest IIT Bombay model to Västerås.
          </p>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-wrap gap-4 sm:gap-6 font-inter font-semibold text-xs uppercase tracking-wider text-[#E2E8F0]">
          <button onClick={() => onNavigate('home')} className="hover:text-[#E2FF00] transition-colors whitespace-nowrap">
            HOME
          </button>
          <button onClick={() => onNavigate('challenges')} className="hover:text-[#E2FF00] transition-colors whitespace-nowrap">
            CHALLENGES
          </button>
          <button onClick={() => onNavigate('how-it-works')} className="hover:text-[#E2FF00] transition-colors whitespace-nowrap">
            HOW IT WORKS
          </button>
          <button onClick={() => onNavigate('for-schools')} className="hover:text-[#E2FF00] transition-colors whitespace-nowrap">
            FOR SCHOOLS
          </button>
          <button onClick={() => onNavigate('about')} className="hover:text-[#E2FF00] transition-colors whitespace-nowrap">
            ABOUT
          </button>
          <button onClick={onOpenFaq} className="hover:text-[#E2FF00] transition-colors whitespace-nowrap">
            FAQ
          </button>
        </div>
      </div>

      {/* Copyright & Disclaimer */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-inter text-[#E2E8F0] gap-4 text-center sm:text-left font-medium">
        <span>© 2026 Robo Kido-A-Thon / Robo-Kidovation League. All rights reserved.</span>
        <span>Adapted for Nordic School Culture, Inclusion & GDPR Safety.</span>
      </div>
    </footer>
  );
};
