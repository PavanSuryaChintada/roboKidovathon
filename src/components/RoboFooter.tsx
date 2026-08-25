import React from 'react';

interface RoboFooterProps {
  onNavigate: (route: string) => void;
  onOpenFaq: () => void;
}

export const RoboFooter: React.FC<RoboFooterProps> = ({ onNavigate, onOpenFaq }) => {
  return (
    <footer className="w-full bg-[#111111] text-white border-t-2.5 border-[#111111] pt-12 pb-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-white/15">
        {/* Brand Column */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#FACC15] text-[#111111] font-barlow font-black text-xl px-2.5 py-0.5 border border-white">
              ROBO
            </span>
            <span className="font-barlow font-black text-3xl text-white tracking-wider uppercase">
              KIDO-A-THON
            </span>
          </div>
          <p className="font-barlow font-bold text-lg text-[#FACC15] tracking-widest uppercase">
            BUILD. CREATE. COMPETE.
          </p>
          <p className="text-xs font-dmsans text-white/60 max-w-sm">
            Official Hands-On Student Robotics Competition League in Sweden. Evolved from Techfest IIT Bombay model to Västerås.
          </p>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-wrap gap-6 font-barlow font-bold text-base uppercase text-white/90">
          <button onClick={() => onNavigate('home')} className="hover:text-[#FACC15] transition-colors">
            HOME
          </button>
          <button onClick={() => onNavigate('challenges')} className="hover:text-[#FACC15] transition-colors">
            CHALLENGES
          </button>
          <button onClick={() => onNavigate('how-it-works')} className="hover:text-[#FACC15] transition-colors">
            HOW IT WORKS
          </button>
          <button onClick={() => onNavigate('for-schools')} className="hover:text-[#FACC15] transition-colors">
            FOR SCHOOLS
          </button>
          <button onClick={() => onNavigate('about')} className="hover:text-[#FACC15] transition-colors">
            ABOUT
          </button>
          <button onClick={onOpenFaq} className="hover:text-[#FACC15] transition-colors">
            FAQ
          </button>
        </div>
      </div>

      {/* Copyright & Disclaimer */}
      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-dmsans text-white/50 gap-4">
        <span>© 2026 Robo Kido-A-Thon / Robo-Kidovation League. All rights reserved.</span>
        <span>Adapted for Nordic School Culture, Inclusion & GDPR Safety.</span>
      </div>
    </footer>
  );
};
