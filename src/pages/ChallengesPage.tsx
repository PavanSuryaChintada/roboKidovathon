import React from 'react';
import { RoboSprintBot, RoboPrecisionBot } from '../components/CompetitionRobots';

interface ChallengesPageProps {
  onOpenRegister: () => void;
}

export const ChallengesPage: React.FC<ChallengesPageProps> = ({ onOpenRegister }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Page Hero Header */}
      <div className="card-event p-8 sm:p-12 text-center border-t-4 border-t-[#0052FF]">
        <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-2">
          OFFICIAL LEAGUE RULEBOOK 📜
        </span>
        <h1 className="text-4xl sm:text-6xl font-syne font-extrabold uppercase text-[#0F172A] leading-none">
          COMPETITION ARENA TRACKS
        </h1>
        <p className="text-sm sm:text-base font-dmsans text-slate-600 max-w-2xl mx-auto mt-3">
          Detailed rules, robot size constraints, scoring mechanisms, and arena specifications for Junior & Senior competition divisions.
        </p>
      </div>

      {/* Challenge 1: ROBO-SPRINT */}
      <div id="robo-sprint" className="card-event p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200 pb-4 gap-2">
          <div>
            <span className="bg-blue-50 text-[#0052FF] font-mono font-bold text-xs px-3 py-1 rounded-full uppercase">
              JUNIOR DIVISION (UP TO AGE 15)
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-extrabold uppercase text-[#0F172A] leading-none mt-2">
              ROBO-SPRINT ARENA
            </h2>
          </div>
          <div className="bg-slate-900 text-white font-syne font-bold text-base px-4 py-1.5 rounded-xl">
            TIME LIMIT: 3 MINUTES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 font-dmsans text-sm text-slate-600">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-syne font-bold text-[#0F172A] text-base block">CORE OBJECTIVE:</span>
              <p className="text-xs sm:text-sm">
                Pass as many balls as possible into the opponent's area across the center divider, similar to an air-hockey match.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-syne font-bold text-[#0F172A] text-base block">STARTING CONDITIONS:</span>
              <p className="text-xs sm:text-sm">
                Each team starts with exactly 5 balls in its designated court area at the start whistle.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-syne font-bold text-[#0052FF] text-base block">ROBOT MAXIMUM DIMENSIONS:</span>
              <p className="text-xs sm:text-sm font-bold text-[#0F172A]">
                1.5 ft × 1.5 ft (maximum width, length & height including wheels, sweeper arms & components).
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-syne font-bold text-[#0F172A] text-base block">SCORING & VICTORY:</span>
              <p className="text-xs sm:text-sm">
                The team with the fewest balls in its court area at the end of 3 minutes wins the match.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl">
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
      <div id="robo-precision" className="card-event p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200 pb-4 gap-2">
          <div>
            <span className="bg-slate-900 text-white font-mono font-bold text-xs px-3 py-1 rounded-full uppercase">
              SENIOR DIVISION (AGE 15 & ABOVE)
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-extrabold uppercase text-[#0F172A] leading-none mt-2">
              ROBO-PRECISION ARENA
            </h2>
          </div>
          <div className="bg-slate-900 text-white font-syne font-bold text-base px-4 py-1.5 rounded-xl">
            TIME LIMIT: 5 MINUTES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 font-dmsans text-sm text-slate-600">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-syne font-bold text-[#0F172A] text-base block">CORE OBJECTIVE:</span>
              <p className="text-xs sm:text-sm">
                Build a vertical tower by picking up and stacking cups up to 5 levels using robotic arms and grippers.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-syne font-bold text-[#FF3B00] text-base block">TOUCH RULE:</span>
              <p className="text-xs sm:text-sm font-bold text-[#FF3B00]">
                Zero manual touch or human assistance allowed once the 5-minute timer starts.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-syne font-bold text-[#0F172A] text-base block">ROBOT MAXIMUM DIMENSIONS:</span>
              <p className="text-xs sm:text-sm font-bold text-[#0F172A]">
                2.5 ft × 2.5 ft (maximum width, length & height including crane arm, chassis & components).
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-syne font-bold text-[#0F172A] text-base block">SCORING & VICTORY:</span>
              <p className="text-xs sm:text-sm">
                Evaluation is based on the tallest, most stable cup tower stacked at the 5-minute whistle.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <RoboPrecisionBot className="w-56 sm:w-64" />
            <button
              onClick={onOpenRegister}
              className="mt-6 btn-event-blue w-full py-3.5 text-center text-sm rounded-xl"
            >
              REGISTER FOR ROBO-PRECISION →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
