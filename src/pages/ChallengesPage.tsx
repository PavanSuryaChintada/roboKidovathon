import React from 'react';
import { RoboSprintBot, RoboPrecisionBot } from '../components/CompetitionRobots';

interface ChallengesPageProps {
  onOpenRegister: () => void;
}

export const ChallengesPage: React.FC<ChallengesPageProps> = ({ onOpenRegister }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12 text-white">
      {/* Page Hero Header */}
      <div className="card-event p-8 sm:p-12 text-center border-t-4 border-t-[#0052FF] border border-white/15">
        <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-2">
          OFFICIAL LEAGUE RULEBOOK 📜
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold uppercase text-white leading-none text-balance">
          COMPETITION ARENA TRACKS
        </h1>
        <p className="text-sm sm:text-base font-inter text-slate-300 max-w-2xl mx-auto mt-3 text-balance">
          Detailed rules, robot size constraints, scoring mechanisms, and arena specifications for Junior & Senior competition divisions.
        </p>
      </div>

      {/* Challenge 1: ROBO-SPRINT */}
      <div id="robo-sprint" className="card-event p-6 sm:p-10 space-y-6 border border-white/15">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
          <div>
            <span className="bg-[#0052FF]/20 text-[#0052FF] font-mono font-bold text-xs px-3 py-1 rounded-full uppercase border border-[#0052FF]/40">
              JUNIOR DIVISION (UP TO AGE 15)
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white leading-none mt-2 text-balance">
              ROBO-SPRINT ARENA
            </h2>
          </div>
          <div className="bg-[#0B0F19] text-[#E2FF00] font-mono font-bold text-sm px-4 py-2 rounded-xl border border-white/15">
            TIME LIMIT: 3 MINUTES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 font-inter text-sm text-slate-300">
            <div className="p-4 bg-[#0B0F19] border border-white/10 rounded-xl">
              <span className="font-bold text-white text-base block">CORE OBJECTIVE:</span>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Pass as many balls as possible into the opponent's area across the center divider, similar to an air-hockey match.
              </p>
            </div>

            <div className="p-4 bg-[#0B0F19] border border-white/10 rounded-xl">
              <span className="font-bold text-white text-base block">STARTING CONDITIONS:</span>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Each team starts with exactly 5 balls in its designated court area at the start whistle.
              </p>
            </div>

            <div className="p-4 bg-[#0B0F19] border border-white/10 rounded-xl">
              <span className="font-bold text-[#0052FF] text-base block">ROBOT MAXIMUM DIMENSIONS:</span>
              <p className="text-xs sm:text-sm font-bold text-[#E2FF00] mt-1">
                1.5 ft × 1.5 ft (maximum width, length & height including wheels, sweeper arms & components).
              </p>
            </div>

            <div className="p-4 bg-[#0B0F19] border border-white/10 rounded-xl">
              <span className="font-bold text-white text-base block">SCORING & VICTORY:</span>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                The team with the fewest balls in its court area at the end of 3 minutes wins the match.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-[#0B0F19] border border-white/15 rounded-2xl">
            <RoboSprintBot className="w-56 sm:w-64" />
            <button
              onClick={onOpenRegister}
              className="mt-6 btn-event-primary w-full py-3.5 text-center text-sm rounded-xl"
            >
              REGISTER FOR ROBO-SPRINT →
            </button>
          </div>
        </div>
      </div>

      {/* Challenge 2: ROBO-PRECISION */}
      <div id="robo-precision" className="card-event p-6 sm:p-10 space-y-6 border border-white/15">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
          <div>
            <span className="bg-[#E2FF00]/20 text-[#E2FF00] font-mono font-bold text-xs px-3 py-1 rounded-full uppercase border border-[#E2FF00]/40">
              SENIOR DIVISION (AGE 15 & ABOVE)
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white leading-none mt-2 text-balance">
              ROBO-PRECISION ARENA
            </h2>
          </div>
          <div className="bg-[#0B0F19] text-[#E2FF00] font-mono font-bold text-sm px-4 py-2 rounded-xl border border-white/15">
            TIME LIMIT: 5 MINUTES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 font-inter text-sm text-slate-300">
            <div className="p-4 bg-[#0B0F19] border border-white/10 rounded-xl">
              <span className="font-bold text-white text-base block">CORE OBJECTIVE:</span>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Build a vertical tower by picking up and stacking cups up to 5 levels using robotic arms and grippers.
              </p>
            </div>

            <div className="p-4 bg-[#0B0F19] border border-white/10 rounded-xl">
              <span className="font-bold text-[#FF3B00] text-base block">TOUCH RULE:</span>
              <p className="text-xs sm:text-sm font-bold text-[#FF3B00] mt-1">
                Zero manual touch or human assistance allowed once the 5-minute timer starts.
              </p>
            </div>

            <div className="p-4 bg-[#0B0F19] border border-white/10 rounded-xl">
              <span className="font-bold text-white text-base block">ROBOT MAXIMUM DIMENSIONS:</span>
              <p className="text-xs sm:text-sm font-bold text-[#E2FF00] mt-1">
                2.5 ft × 2.5 ft (maximum width, length & height including crane arm, chassis & components).
              </p>
            </div>

            <div className="p-4 bg-[#0B0F19] border border-white/10 rounded-xl">
              <span className="font-bold text-white text-base block">SCORING & VICTORY:</span>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Evaluation is based on the tallest, most stable cup tower stacked at the 5-minute whistle.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-[#0B0F19] border border-white/15 rounded-2xl">
            <RoboPrecisionBot className="w-56 sm:w-64" />
            <button
              onClick={onOpenRegister}
              className="mt-6 btn-event-primary w-full py-3.5 text-center text-sm rounded-xl"
            >
              REGISTER FOR ROBO-PRECISION →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
