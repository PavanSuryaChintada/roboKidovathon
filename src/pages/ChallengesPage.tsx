import React from 'react';
import { RoboSprintBot, RoboPrecisionBot } from '../components/CompetitionRobots';

interface ChallengesPageProps {
  onOpenRegister: () => void;
}

export const ChallengesPage: React.FC<ChallengesPageProps> = ({ onOpenRegister }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Page Hero Header */}
      <div className="bg-[#111111] text-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#FACC15] p-8 sm:p-12 text-center">
        <span className="bg-[#FACC15] text-[#111111] font-barlow font-black text-xs px-3 py-1 border border-white uppercase tracking-wider inline-block mb-3">
          OFFICIAL LEAGUE RULEBOOK 📜
        </span>
        <h1 className="text-5xl sm:text-7xl font-barlow font-black uppercase text-white leading-none">
          COMPETITION ARENA TRACKS
        </h1>
        <p className="text-sm sm:text-base font-dmsans text-white/80 max-w-2xl mx-auto mt-3">
          Detailed rules, robot size constraints, scoring mechanisms, and arena specifications for Junior & Senior competition divisions.
        </p>
      </div>

      {/* Challenge 1: ROBO-SPRINT */}
      <div id="robo-sprint" className="bg-white border-2.5 border-[#111111] shadow-[8px_8px_0px_#111111] p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-[#111111] pb-4 gap-2">
          <div>
            <span className="bg-[#FACC15] text-[#111111] font-barlow font-black text-xs px-3 py-1 border border-[#111111] uppercase">
              JUNIOR DIVISION (UP TO AGE 15)
            </span>
            <h2 className="text-4xl sm:text-5xl font-barlow font-black uppercase text-[#111111] leading-none mt-2">
              ROBO-SPRINT ARENA
            </h2>
          </div>
          <div className="bg-[#111111] text-[#FACC15] font-barlow font-black text-lg px-4 py-1.5 border border-[#111111]">
            TIME LIMIT: 3 MINUTES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 font-dmsans text-sm text-[#111111]">
            <div className="p-3 bg-[#F7F4EC] border-2 border-[#111111]">
              <span className="font-barlow font-black text-lg text-[#0052FF] block">CORE OBJECTIVE:</span>
              <p className="text-xs sm:text-sm">
                Pass as many balls as possible into the opponent's area across the center divider, similar to an air-hockey match.
              </p>
            </div>

            <div className="p-3 bg-[#F7F4EC] border-2 border-[#111111]">
              <span className="font-barlow font-black text-lg text-[#111111] block">STARTING CONDITIONS:</span>
              <p className="text-xs sm:text-sm">
                Each team starts with exactly 5 balls in its designated court area at the start whistle.
              </p>
            </div>

            <div className="p-3 bg-[#F7F4EC] border-2 border-[#111111]">
              <span className="font-barlow font-black text-lg text-[#FF3B00] block">ROBOT MAXIMUM DIMENSIONS:</span>
              <p className="text-xs sm:text-sm font-bold">
                1.5 ft × 1.5 ft (maximum width, length & height including wheels, sweeper arms & components).
              </p>
            </div>

            <div className="p-3 bg-[#F7F4EC] border-2 border-[#111111]">
              <span className="font-barlow font-black text-lg text-[#059669] block">SCORING & VICTORY:</span>
              <p className="text-xs sm:text-sm">
                The team with the fewest balls in its court area at the end of 3 minutes wins the match.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-[#FACC15]/20 border-2 border-[#111111]">
            <RoboSprintBot className="w-64 sm:w-72" />
            <button
              onClick={onOpenRegister}
              className="mt-6 btn-brutal w-full py-3 text-center text-sm"
            >
              REGISTER FOR ROBO-SPRINT →
            </button>
          </div>
        </div>
      </div>

      {/* Challenge 2: ROBO-PRECISION */}
      <div id="robo-precision" className="bg-white border-2.5 border-[#111111] shadow-[8px_8px_0px_#111111] p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-[#111111] pb-4 gap-2">
          <div>
            <span className="bg-[#0052FF] text-white font-barlow font-black text-xs px-3 py-1 border border-[#111111] uppercase">
              SENIOR DIVISION (AGE 15 & ABOVE)
            </span>
            <h2 className="text-4xl sm:text-5xl font-barlow font-black uppercase text-[#111111] leading-none mt-2">
              ROBO-PRECISION ARENA
            </h2>
          </div>
          <div className="bg-[#111111] text-[#FACC15] font-barlow font-black text-lg px-4 py-1.5 border border-[#111111]">
            TIME LIMIT: 5 MINUTES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 font-dmsans text-sm text-[#111111]">
            <div className="p-3 bg-[#F7F4EC] border-2 border-[#111111]">
              <span className="font-barlow font-black text-lg text-[#0052FF] block">CORE OBJECTIVE:</span>
              <p className="text-xs sm:text-sm">
                Build a vertical tower by picking up and stacking cups up to 5 levels using robotic arms and grippers.
              </p>
            </div>

            <div className="p-3 bg-[#F7F4EC] border-2 border-[#111111]">
              <span className="font-barlow font-black text-lg text-[#111111] block">TOUCH RULE:</span>
              <p className="text-xs sm:text-sm font-bold text-[#FF3B00]">
                Zero manual touch or human assistance allowed once the 5-minute timer starts.
              </p>
            </div>

            <div className="p-3 bg-[#F7F4EC] border-2 border-[#111111]">
              <span className="font-barlow font-black text-lg text-[#FF3B00] block">ROBOT MAXIMUM DIMENSIONS:</span>
              <p className="text-xs sm:text-sm font-bold">
                2.5 ft × 2.5 ft (maximum width, length & height including crane arm, chassis & components).
              </p>
            </div>

            <div className="p-3 bg-[#F7F4EC] border-2 border-[#111111]">
              <span className="font-barlow font-black text-lg text-[#059669] block">SCORING & VICTORY:</span>
              <p className="text-xs sm:text-sm">
                Evaluation is based on the tallest, most stable cup tower stacked at the 5-minute whistle.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-[#0052FF]/10 border-2 border-[#111111]">
            <RoboPrecisionBot className="w-64 sm:w-72" />
            <button
              onClick={onOpenRegister}
              className="mt-6 btn-brutal-blue w-full py-3 text-center text-sm"
            >
              REGISTER FOR ROBO-PRECISION →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
