import React from 'react';

interface RoboFooterProps {
  onNavigate: (route: string) => void;
  onOpenFaq: () => void;
}

export const RoboFooter: React.FC<RoboFooterProps> = ({ onNavigate, onOpenFaq }) => {
  return (
    <footer className="w-full bg-[#0F172A] text-white border-t border-slate-800 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-slate-800">
        {/* Brand Column */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-white text-[#0F172A] font-syne font-extrabold text-lg px-2.5 py-0.5 rounded-md">
              ROBO
            </span>
            <span className="font-syne font-extrabold text-2xl text-white tracking-tight uppercase">
              KIDO-A-THON
            </span>
          </div>
          <p className="text-xs font-mono font-bold text-[#E2FF00] tracking-widest uppercase">
            SWEDEN LEAGUE · VÄSTERÅS 2026
          </p>
          <p className="text-xs font-dmsans text-slate-400 max-w-sm leading-relaxed">
            Official Hands-On Student Robotics Competition League in Sweden. Evolved from Techfest IIT Bombay model to Västerås.
          </p>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-wrap gap-6 font-jakarta font-semibold text-xs uppercase tracking-wider text-slate-300">
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
            HOME
          </button>
          <button onClick={() => onNavigate('challenges')} className="hover:text-white transition-colors">
            CHALLENGES
          </button>
          <button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">
            HOW IT WORKS
          </button>
          <button onClick={() => onNavigate('for-schools')} className="hover:text-white transition-colors">
            FOR SCHOOLS
          </button>
          <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
            ABOUT
          </button>
          <button onClick={onOpenFaq} className="hover:text-white transition-colors">
            FAQ
          </button>
        </div>
      </div>

      {/* Copyright & Disclaimer */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-dmsans text-slate-500 gap-4">
        <span>© 2026 Robo Kido-A-Thon / Robo-Kidovation League. All rights reserved.</span>
        <span>Adapted for Nordic School Culture, Inclusion & GDPR Safety.</span>
      </div>
    </footer>
  );
};
