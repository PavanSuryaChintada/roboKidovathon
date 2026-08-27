import React from 'react';
import { RoboSprintBot, RoboPrecisionBot } from './CompetitionRobots';

interface RoboChallengesSectionProps {
  onNavigate: (route: string) => void;
}

export const RoboChallengesSection: React.FC<RoboChallengesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
            02 // ARENA FORMATS
          </span>
          <h2 className="text-4xl sm:text-6xl font-syne font-extrabold uppercase text-[#0F172A] leading-none">
            THE CHALLENGES
          </h2>
        </div>

        <button
          onClick={() => onNavigate('challenges')}
          className="btn-event-secondary text-xs sm:text-sm px-6 py-3 rounded-xl"
        >
          VIEW DETAILED RULEBOOK →
        </button>
      </div>

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Track 1: ROBO-SPRINT */}
        <div className="card-event p-8 flex flex-col justify-between border-t-4 border-t-[#0052FF]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="bg-blue-50 text-[#0052FF] border border-blue-200 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                JUNIOR DIVISION (UP TO AGE 15)
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                ⏱ 3 MINUTES
              </span>
            </div>

            <h3 className="text-4xl font-syne font-extrabold uppercase text-[#0F172A]">
              ROBO-SPRINT
            </h3>
            <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
              AIR-HOCKEY BALL PASSING ARENA
            </p>

            <div className="my-6 flex justify-center bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <RoboSprintBot className="w-48 sm:w-56" />
            </div>

            <div className="space-y-2 text-xs sm:text-sm font-dmsans text-slate-600 border-t border-slate-100 pt-4">
              <p>
                <strong className="font-syne font-bold text-[#0F172A] text-sm">OBJECTIVE:</strong> Pass as many balls as possible into opponent's court area within 3 minutes.
              </p>
              <p>
                <strong className="font-syne font-bold text-[#0F172A] text-sm">ROBOT LIMIT:</strong> Max 1.5 ft × 1.5 ft (maximum dimensions).
              </p>
              <p>
                <strong className="font-syne font-bold text-[#0052FF] text-sm">SCORING:</strong> Team with fewest balls in court at whistle wins.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('challenges')}
            className="mt-6 w-full btn-event-primary py-3.5 text-sm rounded-xl text-center"
          >
            SELECT ROBO-SPRINT →
          </button>
        </div>

        {/* Track 2: ROBO-PRECISION */}
        <div className="card-event p-8 flex flex-col justify-between border-t-4 border-t-[#0F172A]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="bg-slate-100 text-slate-900 border border-slate-300 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                SENIOR DIVISION (AGE 15 & ABOVE)
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                ⏱ 5 MINUTES
              </span>
            </div>

            <h3 className="text-4xl font-syne font-extrabold uppercase text-[#0F172A]">
              ROBO-PRECISION
            </h3>
            <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
              5-LEVEL TOWER CUP STACKING ARENA
            </p>

            <div className="my-6 flex justify-center bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <RoboPrecisionBot className="w-48 sm:w-56" />
            </div>

            <div className="space-y-2 text-xs sm:text-sm font-dmsans text-slate-600 border-t border-slate-100 pt-4">
              <p>
                <strong className="font-syne font-bold text-[#0F172A] text-sm">OBJECTIVE:</strong> Build a 5-level cup tower using robotic grabber. Zero manual touch.
              </p>
              <p>
                <strong className="font-syne font-bold text-[#0F172A] text-sm">ROBOT LIMIT:</strong> Max 2.5 ft × 2.5 ft (maximum dimensions).
              </p>
              <p>
                <strong className="font-syne font-bold text-[#0052FF] text-sm">SCORING:</strong> Tallest, most stable cup tower wins.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('challenges')}
            className="mt-6 w-full btn-event-primary py-3.5 text-sm rounded-xl text-center"
          >
            SELECT ROBO-PRECISION →
          </button>
        </div>
      </div>
    </section>
  );
};
