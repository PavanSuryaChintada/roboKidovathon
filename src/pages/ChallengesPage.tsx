import React from 'react';
import { RoboSprintBot, RoboPrecisionBot } from '../components/CompetitionRobots';

interface ChallengesPageProps {
  onOpenRegister: () => void;
}

export const ChallengesPage: React.FC<ChallengesPageProps> = ({ onOpenRegister }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Page Hero Header */}
      <div className="card-slush-glass rounded-3xl p-8 sm:p-12 text-center border border-[#FF0055]/30 shadow-[0_0_35px_rgba(255,0,85,0.25)]">
        <span className="bg-[#FF0055]/20 text-[#FF0055] font-barlow font-black text-xs px-3.5 py-1.5 rounded-full border border-[#FF0055]/40 uppercase tracking-widest inline-block mb-3">
          OFFICIAL LEAGUE RULEBOOK 📜
        </span>
        <h1 className="text-5xl sm:text-7xl font-barlow font-black uppercase text-white leading-none">
          COMPETITION ARENA TRACKS
        </h1>
        <p className="text-sm sm:text-base font-dmsans text-[#A1A1AA] max-w-2xl mx-auto mt-3">
          Detailed rules, robot size constraints, scoring mechanisms, and arena specifications for Junior & Senior competition divisions.
        </p>
      </div>

      {/* Challenge 1: ROBO-SPRINT */}
      <div id="robo-sprint" className="card-slush-glass rounded-3xl p-6 sm:p-10 space-y-6 border border-[#FF0055]/40">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
          <div>
            <span className="bg-[#FF0055] text-white font-barlow font-black text-xs px-3 py-1 rounded-full uppercase">
              JUNIOR DIVISION (UP TO AGE 15)
            </span>
            <h2 className="text-4xl sm:text-5xl font-barlow font-black uppercase text-white leading-none mt-2">
              ROBO-SPRINT ARENA
            </h2>
          </div>
          <div className="bg-[#E2FF00] text-[#0B0B0E] font-barlow font-black text-lg px-4 py-1.5 rounded-xl">
            TIME LIMIT: 3 MINUTES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 font-dmsans text-sm text-[#A1A1AA]">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <span className="font-barlow font-black text-lg text-[#00F2FE] block">CORE OBJECTIVE:</span>
              <p className="text-xs sm:text-sm">
                Pass as many balls as possible into the opponent's area across the center divider, similar to an air-hockey match.
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <span className="font-barlow font-black text-lg text-white block">STARTING CONDITIONS:</span>
              <p className="text-xs sm:text-sm">
                Each team starts with exactly 5 balls in its designated court area at the start whistle.
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <span className="font-barlow font-black text-lg text-[#FF0055] block">ROBOT MAXIMUM DIMENSIONS:</span>
              <p className="text-xs sm:text-sm font-bold text-white">
                1.5 ft × 1.5 ft (maximum width, length & height including wheels, sweeper arms & components).
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <span className="font-barlow font-black text-lg text-[#00E676] block">SCORING & VICTORY:</span>
              <p className="text-xs sm:text-sm">
                The team with the fewest balls in its court area at the end of 3 minutes wins the match.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-[#FF0055]/10 border border-[#FF0055]/30 rounded-3xl">
            <RoboSprintBot className="w-64 sm:w-72" />
            <button
              onClick={onOpenRegister}
              className="mt-6 btn-slush-magenta w-full py-3.5 text-center text-sm rounded-xl"
            >
              REGISTER FOR ROBO-SPRINT →
            </button>
          </div>
        </div>
      </div>

      {/* Challenge 2: ROBO-PRECISION */}
      <div id="robo-precision" className="card-slush-glass rounded-3xl p-6 sm:p-10 space-y-6 border border-[#00F2FE]/40">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
          <div>
            <span className="bg-[#00F2FE] text-[#0B0B0E] font-barlow font-black text-xs px-3 py-1 rounded-full uppercase">
              SENIOR DIVISION (AGE 15 & ABOVE)
            </span>
            <h2 className="text-4xl sm:text-5xl font-barlow font-black uppercase text-white leading-none mt-2">
              ROBO-PRECISION ARENA
            </h2>
          </div>
          <div className="bg-[#E2FF00] text-[#0B0B0E] font-barlow font-black text-lg px-4 py-1.5 rounded-xl">
            TIME LIMIT: 5 MINUTES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 font-dmsans text-sm text-[#A1A1AA]">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <span className="font-barlow font-black text-lg text-[#00F2FE] block">CORE OBJECTIVE:</span>
              <p className="text-xs sm:text-sm">
                Build a vertical tower by picking up and stacking cups up to 5 levels using robotic arms and grippers.
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <span className="font-barlow font-black text-lg text-[#FF0055] block">TOUCH RULE:</span>
              <p className="text-xs sm:text-sm font-bold text-[#FF0055]">
                Zero manual touch or human assistance allowed once the 5-minute timer starts.
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <span className="font-barlow font-black text-lg text-white block">ROBOT MAXIMUM DIMENSIONS:</span>
              <p className="text-xs sm:text-sm font-bold text-white">
                2.5 ft × 2.5 ft (maximum width, length & height including crane arm, chassis & components).
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <span className="font-barlow font-black text-lg text-[#00E676] block">SCORING & VICTORY:</span>
              <p className="text-xs sm:text-sm">
                Evaluation is based on the tallest, most stable cup tower stacked at the 5-minute whistle.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-[#00F2FE]/10 border border-[#00F2FE]/30 rounded-3xl">
            <RoboPrecisionBot className="w-64 sm:w-72" />
            <button
              onClick={onOpenRegister}
              className="mt-6 btn-slush-volt w-full py-3.5 text-center text-sm rounded-xl"
            >
              REGISTER FOR ROBO-PRECISION →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
