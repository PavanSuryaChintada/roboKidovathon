import React from 'react';
import { HeroRobot } from './CompetitionRobots';
import { TechnicalRegistrationCrosshair, TechNoteBadge } from './RoboEngineeringAnnotations';

interface RoboHeroProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const RoboHero: React.FC<RoboHeroProps> = ({
  onOpenRegister,
  onNavigate,
}) => {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] max-w-6xl mx-auto px-4 pt-1 pb-4 flex flex-col justify-between overflow-visible">
      {/* Top Registration Crosshair & Badge */}
      <div className="w-full flex items-center justify-between mb-2">
        <TechnicalRegistrationCrosshair />
        <div className="inline-flex items-center gap-2 bg-[#FACC15] text-[#111111] font-barlow font-black text-xs md:text-sm px-4 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] -rotate-1">
          <span>⚡ OFFICIAL SWEDEN ROBOTICS LEAGUE</span>
          <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-ping" />
          <span className="font-bold">VÄSTERÅS 2026</span>
        </div>
        <TechnicalRegistrationCrosshair />
      </div>

      {/* Hero Headline & Grounded Robot Poster Composition */}
      <div className="relative w-full my-auto select-none pt-2 pb-4">
        {/* Narrower Rotated Yellow Backdrop Physical Card */}
        <div className="absolute right-4 sm:right-12 md:right-20 bottom-4 w-60 sm:w-72 md:w-80 h-64 sm:h-76 md:h-84 bg-[#FACC15] border-2.5 border-[#111111] shadow-[5px_5px_0px_#111111] rotate-3 z-0 opacity-95 hidden sm:block" />

        {/* Subtle Engineering Blueprint Drawing Lines (Low Opacity ~18%) */}
        <svg className="absolute right-0 bottom-0 w-80 h-80 z-0 pointer-events-none opacity-18 hidden md:block" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="110" stroke="#111111" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="150" cy="150" r="70" stroke="#111111" strokeWidth="1" />
          <line x1="20" y1="150" x2="280" y2="150" stroke="#111111" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="150" y1="20" x2="150" y2="280" stroke="#111111" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="160" y="35" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="bold" fill="#111111">[CHASSIS AXIS R=110MM]</text>
        </svg>

        {/* Spaced Word Blocks (BUILD. CREATE. COMPETE.) */}
        <div className="relative z-10 space-y-2 sm:space-y-3">
          {/* Word 1: BUILD. */}
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-barlow font-black tracking-tighter leading-none text-[#111111] text-left">
            BUILD.
          </div>

          {/* Word 2: CREATE. (Electric Blue with Yellow Wave Underline) */}
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-barlow font-black tracking-tighter leading-none text-[#0052FF] underline decoration-wavy decoration-[#FACC15] text-left pl-2 sm:pl-8">
            CREATE.
          </div>

          {/* Word 3: COMPETE. */}
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-barlow font-black tracking-tighter leading-none text-[#111111] text-left pl-4 sm:pl-16">
            COMPETE.
          </div>
        </div>

        {/* Robot Grounded Downwards Overlapping Right of CREATE & COMPETE */}
        <div className="absolute right-0 sm:right-4 md:right-10 bottom-0 z-20 hover:scale-105 transition-transform duration-300 pointer-events-auto">
          <HeroRobot className="w-56 sm:w-72 md:w-[23rem] lg:w-[25rem]" />
        </div>
      </div>

      {/* Editorial Base Structure: Thin Black Baseline + Split Grid */}
      <div className="relative z-30 w-full pt-3 border-t-2 border-[#111111] mt-2">
        {/* Top Metadata Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <TechNoteBadge label="ARENA" value="01" color="yellow" />
          <TechNoteBadge label="MOTOR" value="12V GEAR" color="blue" />
          <TechNoteBadge label="MODE" value="AUTONOMOUS" color="red" />
        </div>

        {/* Split Grid: Left Description Copy | Right Aligned CTAs */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#111111] font-dmsans font-medium max-w-lg text-center md:text-left">
            From elementary school through college, students build real robots, program code logic, solve arena challenges, and compete live.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto btn-brutal text-xs sm:text-sm px-5 py-3"
            >
              JOIN THE COMPETITION →
            </button>
            <button
              onClick={() => onNavigate('for-schools')}
              className="w-full sm:w-auto btn-brutal-yellow text-xs sm:text-sm px-5 py-3"
            >
              FOR SCHOOLS →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
