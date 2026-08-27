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
    <section className="relative w-full max-w-6xl mx-auto px-4 pt-4 pb-10 flex flex-col justify-between">
      {/* Top Clean League Badge */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="inline-flex items-center gap-2 bg-[#FACC15] text-[#111111] font-barlow font-black text-xs md:text-sm px-4 py-1.5 border-2 border-[#111111] shadow-[3px_3px_0px_#111111]">
          <span>⚡ OFFICIAL SWEDEN ROBOTICS LEAGUE</span>
          <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-ping" />
          <span className="font-bold">VÄSTERÅS 2026</span>
        </div>

        <div className="hidden sm:inline-block bg-[#111111] text-white font-barlow font-black text-xs px-3 py-1.5 border-2 border-[#111111]">
          HANDS-ON COMPETITION
        </div>
      </div>

      {/* Hero Poster Grid: Clean Headlines + Hero Robot */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto py-4 select-none">
        {/* Left Side: Bold Display Typography (7 cols) */}
        <div className="md:col-span-7 space-y-1 sm:space-y-2">
          {/* Word 1: BUILD. */}
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-barlow font-black tracking-tighter leading-none text-[#111111]">
            BUILD.
          </div>

          {/* Word 2: CREATE. */}
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-barlow font-black tracking-tighter leading-none text-[#0052FF] underline decoration-wavy decoration-[#FACC15]">
            CREATE.
          </div>

          {/* Word 3: COMPETE. */}
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-barlow font-black tracking-tighter leading-none text-[#111111]">
            COMPETE.
          </div>
        </div>

        {/* Right Side: Clean Robot Visual (5 cols) */}
        <div className="md:col-span-5 flex justify-center md:justify-end items-center">
          <HeroRobot className="w-64 sm:w-80 md:w-full max-w-sm hover:scale-105 transition-transform duration-300" />
        </div>
      </div>

      {/* Clean Bottom Baseline Rule & Actions */}
      <div className="w-full pt-6 border-t-2 border-[#111111] mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Description Copy */}
        <p className="text-sm sm:text-base text-[#111111] font-dmsans font-medium max-w-xl text-center md:text-left">
          From elementary school through college, students build real robots, program code logic, solve arena challenges, and compete live.
        </p>

        {/* Right Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto btn-brutal text-sm px-6 py-3.5"
          >
            JOIN THE COMPETITION →
          </button>
          <button
            onClick={() => onNavigate('for-schools')}
            className="w-full sm:w-auto btn-brutal-yellow text-sm px-6 py-3.5"
          >
            FOR SCHOOLS →
          </button>
        </div>
      </div>
    </section>
  );
};
