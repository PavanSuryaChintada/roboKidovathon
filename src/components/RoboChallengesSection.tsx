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
          <div className="inline-block bg-[#FF0055]/20 text-[#FF0055] font-barlow font-black text-xs px-3.5 py-1.5 rounded-full border border-[#FF0055]/50 uppercase tracking-widest mb-2">
            GAME MODE SELECTOR 🎮
          </div>
          <h2 className="text-4xl sm:text-6xl font-barlow font-black uppercase text-white leading-none">
            COMPETITION TRACKS
          </h2>
        </div>

        <button
          onClick={() => onNavigate('challenges')}
          className="btn-slush-magenta text-xs sm:text-sm px-6 py-3 rounded-xl self-start md:self-auto"
        >
          VIEW FULL RULEBOOK →
        </button>
      </div>

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Track 1: ROBO-SPRINT (Junior Category) */}
        <div className="card-slush-glass rounded-3xl p-6 sm:p-8 relative border border-[#FF0055]/40 hover:border-[#FF0055] shadow-[0_0_30px_rgba(255,0,85,0.2)] transition-all">
          {/* Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="bg-[#FF0055] text-white font-barlow font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              JUNIOR CATEGORY (UP TO AGE 15)
            </span>
            <span className="bg-white/10 text-[#E2FF00] font-barlow font-black text-xs px-3 py-1 rounded-full border border-white/20">
              ⏱ 3 MINUTES
            </span>
          </div>

          <h3 className="text-4xl sm:text-5xl font-barlow font-black uppercase text-white leading-none">
            ROBO-SPRINT
          </h3>
          <p className="text-xs font-mono font-bold text-[#FF0055] uppercase tracking-widest mt-1 mb-4">
            AIR-HOCKEY BALL PASSING ARENA
          </p>

          {/* Robot Visual */}
          <div className="my-4 flex justify-center">
            <RoboSprintBot className="w-56 sm:w-64" />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 my-4 space-y-2 text-xs sm:text-sm font-dmsans text-[#A1A1AA]">
            <p>
              <strong className="font-barlow font-black text-base text-[#00F2FE]">OBJECTIVE:</strong> Pass as many balls as possible into opponent's court area within 3 minutes.
            </p>
            <p>
              <strong className="font-barlow font-black text-base text-white">ROBOT LIMIT:</strong> Max 1.5 ft × 1.5 ft (arms & wheels included).
            </p>
            <p>
              <strong className="font-barlow font-black text-base text-[#FF0055]">SCORING:</strong> Team with fewest balls in court at final whistle wins.
            </p>
          </div>

          <button
            onClick={() => onNavigate('challenges')}
            className="w-full btn-slush-magenta py-3.5 text-sm rounded-xl flex items-center justify-center gap-2"
          >
            <span>SELECT ROBO-SPRINT</span>
            <span>→</span>
          </button>
        </div>

        {/* Track 2: ROBO-PRECISION (Senior Category) */}
        <div className="card-slush-glass rounded-3xl p-6 sm:p-8 relative border border-[#00F2FE]/40 hover:border-[#00F2FE] shadow-[0_0_30px_rgba(0,242,254,0.2)] transition-all">
          {/* Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="bg-[#00F2FE] text-[#0B0B0E] font-barlow font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              SENIOR CATEGORY (AGE 15 & ABOVE)
            </span>
            <span className="bg-white/10 text-[#E2FF00] font-barlow font-black text-xs px-3 py-1 rounded-full border border-white/20">
              ⏱ 5 MINUTES
            </span>
          </div>

          <h3 className="text-4xl sm:text-5xl font-barlow font-black uppercase text-white leading-none">
            ROBO-PRECISION
          </h3>
          <p className="text-xs font-mono font-bold text-[#00F2FE] uppercase tracking-widest mt-1 mb-4">
            5-LEVEL TOWER CUP STACKING ARENA
          </p>

          {/* Robot Visual */}
          <div className="my-4 flex justify-center">
            <RoboPrecisionBot className="w-56 sm:w-64" />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 my-4 space-y-2 text-xs sm:text-sm font-dmsans text-[#A1A1AA]">
            <p>
              <strong className="font-barlow font-black text-base text-[#00F2FE]">OBJECTIVE:</strong> Build a tower by stacking cups up to 5 levels using robotic arm. Zero manual touch.
            </p>
            <p>
              <strong className="font-barlow font-black text-base text-white">ROBOT LIMIT:</strong> Max 2.5 ft × 2.5 ft (arms & components included).
            </p>
            <p>
              <strong className="font-barlow font-black text-base text-[#FF0055]">SCORING:</strong> Tallest, most stable tower wins within 5 minutes.
            </p>
          </div>

          <button
            onClick={() => onNavigate('challenges')}
            className="w-full btn-slush-volt py-3.5 text-sm rounded-xl flex items-center justify-center gap-2"
          >
            <span>SELECT ROBO-PRECISION</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
