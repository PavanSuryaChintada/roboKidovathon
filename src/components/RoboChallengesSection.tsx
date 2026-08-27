import React from 'react';
import { RoboSprintBot, RoboPrecisionBot } from './CompetitionRobots';

interface RoboChallengesSectionProps {
  onNavigate: (route: string) => void;
}

export const RoboChallengesSection: React.FC<RoboChallengesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full bg-white text-[#0B1020] py-20 md:py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-2">
              04 // ARENA FORMATS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1020] text-balance tracking-tight">
              The Competition Tracks
            </h2>
          </div>

          <button
            onClick={() => onNavigate('challenges')}
            className="btn-event-secondary-light text-xs px-5 py-2.5 rounded-md whitespace-nowrap"
          >
            VIEW RULEBOOK →
          </button>
        </div>

        {/* Competition Track Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Track 1: ROBO-SPRINT */}
          <div className="card-editorial p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-[#0052FF]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-blue-50 text-[#0052FF] border border-blue-200 text-xs font-mono font-bold px-3 py-1 rounded-sm uppercase">
                  JUNIOR DIVISION (UP TO AGE 15)
                </span>
                <span className="text-xs font-mono font-bold text-[#334155]">
                  ⏱ 3 MINUTES
                </span>
              </div>

              <h3 className="text-3xl font-bold text-[#0B1020]">
                Robo-Sprint
              </h3>
              <p className="text-xs font-mono font-bold text-[#0052FF] uppercase tracking-wider">
                AIR-HOCKEY BALL PASSING ARENA
              </p>

              <div className="my-4 flex justify-center bg-[#F8FAFC] p-6 rounded-md border border-slate-200">
                <RoboSprintBot className="w-44 sm:w-52" />
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm font-inter text-[#334155] font-normal border-t border-slate-200 pt-4">
                <p>
                  <strong className="font-bold text-[#0B1020]">OBJECTIVE:</strong> Pass as many balls as possible into opponent's court area within 3 minutes.
                </p>
                <p>
                  <strong className="font-bold text-[#0B1020]">ROBOT LIMIT:</strong> Max 1.5 ft × 1.5 ft (maximum dimensions).
                </p>
                <p>
                  <strong className="font-bold text-[#0052FF]">SCORING:</strong> Team with fewest balls in court at whistle wins.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('challenges')}
              className="mt-8 w-full btn-event-primary py-3.5 text-xs sm:text-sm rounded-md text-center whitespace-nowrap"
            >
              SELECT ROBO-SPRINT →
            </button>
          </div>

          {/* Track 2: ROBO-PRECISION */}
          <div className="card-editorial p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-[#0B1020]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-slate-100 text-[#0B1020] border border-slate-300 text-xs font-mono font-bold px-3 py-1 rounded-sm uppercase">
                  SENIOR DIVISION (AGE 15 & ABOVE)
                </span>
                <span className="text-xs font-mono font-bold text-[#334155]">
                  ⏱ 5 MINUTES
                </span>
              </div>

              <h3 className="text-3xl font-bold text-[#0B1020]">
                Robo-Precision
              </h3>
              <p className="text-xs font-mono font-bold text-[#0052FF] uppercase tracking-wider">
                5-LEVEL TOWER CUP STACKING ARENA
              </p>

              <div className="my-4 flex justify-center bg-[#F8FAFC] p-6 rounded-md border border-slate-200">
                <RoboPrecisionBot className="w-44 sm:w-52" />
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm font-inter text-[#334155] font-normal border-t border-slate-200 pt-4">
                <p>
                  <strong className="font-bold text-[#0B1020]">OBJECTIVE:</strong> Build a 5-level cup tower using robotic grabber. Zero manual touch.
                </p>
                <p>
                  <strong className="font-bold text-[#0B1020]">ROBOT LIMIT:</strong> Max 2.5 ft × 2.5 ft (maximum dimensions).
                </p>
                <p>
                  <strong className="font-bold text-[#0052FF]">SCORING:</strong> Tallest, most stable cup tower wins.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('challenges')}
              className="mt-8 w-full btn-event-primary py-3.5 text-xs sm:text-sm rounded-md text-center whitespace-nowrap"
            >
              SELECT ROBO-PRECISION →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
