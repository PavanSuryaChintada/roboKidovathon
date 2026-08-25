import React from 'react';
import { RoboSprintBot, RoboPrecisionBot } from './CompetitionRobots';

interface RoboChallengesSectionProps {
  onNavigate: (route: string) => void;
}

export const RoboChallengesSection: React.FC<RoboChallengesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-block bg-[#FF3B00] text-white font-barlow font-black text-xs px-3 py-1 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] -rotate-1 mb-2">
            GAME MODE SELECTOR 🎮
          </div>
          <h2 className="text-4xl sm:text-6xl font-barlow font-black uppercase text-[#111111] leading-none">
            COMPETITION TRACKS
          </h2>
        </div>

        <button
          onClick={() => onNavigate('challenges')}
          className="btn-brutal text-xs sm:text-sm px-5 py-2.5 self-start md:self-auto"
        >
          VIEW FULL RULEBOOK →
        </button>
      </div>

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Track 1: ROBO-SPRINT (Junior Category) */}
        <div className="bg-[#FACC15] border-2.5 border-[#111111] shadow-[7px_7px_0px_#111111] p-6 sm:p-8 relative transform -rotate-1 hover:rotate-0 transition-transform">
          {/* Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="bg-[#111111] text-white font-barlow font-black text-xs px-3 py-1 border border-[#111111] uppercase tracking-wider">
              JUNIOR CATEGORY (UP TO AGE 15)
            </span>
            <span className="bg-white text-[#111111] font-barlow font-black text-xs px-2.5 py-1 border border-[#111111]">
              ⏱ 3 MINUTES
            </span>
          </div>

          <h3 className="text-4xl sm:text-5xl font-barlow font-black uppercase text-[#111111] leading-none">
            ROBO-SPRINT
          </h3>
          <p className="text-xs font-mono font-bold text-[#111111]/70 uppercase tracking-widest mt-1 mb-4">
            AIR-HOCKEY BALL PASSING ARENA
          </p>

          {/* Robot Visual */}
          <div className="my-4 flex justify-center">
            <RoboSprintBot className="w-56 sm:w-64" />
          </div>

          <div className="bg-white border-2 border-[#111111] p-4 my-4 space-y-2 text-xs sm:text-sm font-dmsans text-[#111111]">
            <p>
              <strong className="font-barlow font-black text-base text-[#0052FF]">OBJECTIVE:</strong> Pass as many balls as possible into opponent's court area within 3 minutes.
            </p>
            <p>
              <strong className="font-barlow font-black text-base text-[#111111]">ROBOT LIMIT:</strong> Max 1.5 ft × 1.5 ft (arms & wheels included).
            </p>
            <p>
              <strong className="font-barlow font-black text-base text-[#FF3B00]">SCORING:</strong> Team with fewest balls in court at final whistle wins.
            </p>
          </div>

          <button
            onClick={() => onNavigate('challenges')}
            className="w-full btn-brutal py-3 text-sm flex items-center justify-center gap-2"
          >
            <span>SELECT ROBO-SPRINT</span>
            <span>→</span>
          </button>
        </div>

        {/* Track 2: ROBO-PRECISION (Senior Category) */}
        <div className="bg-[#0052FF] text-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#111111] p-6 sm:p-8 relative transform rotate-1 hover:rotate-0 transition-transform">
          {/* Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="bg-[#FACC15] text-[#111111] font-barlow font-black text-xs px-3 py-1 border border-[#111111] uppercase tracking-wider">
              SENIOR CATEGORY (AGE 15 & ABOVE)
            </span>
            <span className="bg-white text-[#111111] font-barlow font-black text-xs px-2.5 py-1 border border-[#111111]">
              ⏱ 5 MINUTES
            </span>
          </div>

          <h3 className="text-4xl sm:text-5xl font-barlow font-black uppercase text-[#FACC15] leading-none">
            ROBO-PRECISION
          </h3>
          <p className="text-xs font-mono font-bold text-white/80 uppercase tracking-widest mt-1 mb-4">
            5-LEVEL TOWER CUP STACKING ARENA
          </p>

          {/* Robot Visual */}
          <div className="my-4 flex justify-center">
            <RoboPrecisionBot className="w-56 sm:w-64" />
          </div>

          <div className="bg-white text-[#111111] border-2 border-[#111111] p-4 my-4 space-y-2 text-xs sm:text-sm font-dmsans">
            <p>
              <strong className="font-barlow font-black text-base text-[#0052FF]">OBJECTIVE:</strong> Build a tower by stacking cups up to 5 levels using robotic arm. Zero manual touch.
            </p>
            <p>
              <strong className="font-barlow font-black text-base text-[#111111]">ROBOT LIMIT:</strong> Max 2.5 ft × 2.5 ft (arms & components included).
            </p>
            <p>
              <strong className="font-barlow font-black text-base text-[#FF3B00]">SCORING:</strong> Tallest, most stable tower wins within 5 minutes.
            </p>
          </div>

          <button
            onClick={() => onNavigate('challenges')}
            className="w-full btn-brutal-yellow py-3 text-sm text-[#111111] flex items-center justify-center gap-2"
          >
            <span>SELECT ROBO-PRECISION</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
