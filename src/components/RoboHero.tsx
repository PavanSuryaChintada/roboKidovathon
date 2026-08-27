import React from 'react';
import { HeroRobot } from './CompetitionRobots';

interface RoboHeroProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const RoboHero: React.FC<RoboHeroProps> = ({
  onOpenRegister,
  onNavigate,
}) => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-12 flex flex-col justify-between overflow-visible">
      {/* Slush Top Event Badge */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="inline-flex items-center gap-2 bg.white/5 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full text-xs font-mono text-[#E2FF00] shadow-[0_0_15px_rgba(226,255,0,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#FF0055] animate-ping" />
          <span className="font-bold tracking-widest uppercase">NOVEMBER 2026 • VÄSTERÅS, SWEDEN</span>
        </div>

        <div className="bg-[#FF0055]/15 border border-[#FF0055]/50 text-[#FF0055] font-barlow font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest">
          STADIUM CHAMPIONSHIP LEAGUE
        </div>
      </div>

      {/* Slush Main Hero Display Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-4 select-none">
        {/* Left Side: Slush Gradient Display Typography (7 cols) */}
        <div className="lg:col-span-7 space-y-2 text-center lg:text-left">
          {/* Word 1: BUILD. */}
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-barlow font-black tracking-tighter leading-none text-white drop-shadow-lg">
            BUILD.
          </div>

          {/* Word 2: CREATE. (Glowing Slush Neon Gradient Fill) */}
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-barlow font-black tracking-tighter leading-none bg-gradient-to-r from-[#FF0055] via-[#E2FF00] to-[#00F2FE] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,0,85,0.4)]">
            CREATE.
          </div>

          {/* Word 3: COMPETE. */}
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-barlow font-black tracking-tighter leading-none text-white drop-shadow-lg">
            COMPETE.
          </div>
        </div>

        {/* Right Side: Slush Dark Glass Robot Showcase Card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
          <div className="card-slush-glass p-6 rounded-3xl border border-[#FF0055]/40 shadow-[0_0_40px_rgba(255,0,85,0.3)] relative group hover:border-[#FF0055] transition-all">
            <div className="absolute top-3 left-4 text-[10px] font-mono font-bold text-[#00F2FE] tracking-widest uppercase">
              [ARENA_BOT_v2026 // LIVE ARENA]
            </div>
            <HeroRobot className="w-64 sm:w-80 lg:w-full max-w-sm mt-4 group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Slush Clean Base Baseline & CTAs */}
      <div className="w-full pt-6 border-t border-white/10 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Description Copy */}
        <p className="text-sm sm:text-base text-[#A1A1AA] font-dmsans font-medium max-w-xl text-center md:text-left leading-relaxed">
          From elementary school through college, student teams build real robots, program autonomous code logic, solve live arena challenges, and compete in stadium atmosphere.
        </p>

        {/* Neon Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto btn-slush-magenta text-sm px-7 py-3.5 rounded-xl"
          >
            JOIN THE COMPETITION →
          </button>
          <button
            onClick={() => onNavigate('for-schools')}
            className="w-full sm:w-auto btn-slush-volt text-sm px-7 py-3.5 rounded-xl"
          >
            FOR SCHOOLS →
          </button>
        </div>
      </div>
    </section>
  );
};
