import React from 'react';
import { RoboSprintBot, RoboPrecisionBot } from './CompetitionRobots';

interface RoboChallengesSectionProps {
  onNavigate: (route: string) => void;
}

export const RoboChallengesSection: React.FC<RoboChallengesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
            02 // ARENA FORMATS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-balance">
            The Competition Tracks
          </h2>
        </div>

        <button
          onClick={() => onNavigate('challenges')}
          className="btn-event-secondary text-xs px-5 py-2.5 rounded-lg whitespace-nowrap"
        >
          VIEW RULEBOOK →
        </button>
      </div>

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Track 1: ROBO-SPRINT */}
        <div className="card-event p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-[#0052FF] border border-slate-700/80">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="bg-[#0052FF]/20 text-[#0052FF] border border-[#0052FF]/40 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                JUNIOR DIVISION (UP TO AGE 15)
              </span>
              <span className="text-xs font-mono font-bold text-[#E2E8F0]">
                ⏱ 3 MINUTES
              </span>
            </div>

            <h3 className="text-3xl font-extrabold text-white">
              Robo-Sprint
            </h3>
            <p className="text-xs font-mono font-bold text-[#E2E8F0] uppercase tracking-wider">
              AIR-HOCKEY BALL PASSING ARENA
            </p>

            <div className="my-4 flex justify-center bg-[#0F172A] p-4 rounded-xl border border-slate-700">
              <RoboSprintBot className="w-40 sm:w-48" />
            </div>

            <div className="space-y-2 text-xs font-inter text-[#E2E8F0] font-medium border-t border-slate-700 pt-3">
              <p>
                <strong className="font-bold text-white">OBJECTIVE:</strong> Pass as many balls as possible into opponent's court area within 3 minutes.
              </p>
              <p>
                <strong className="font-bold text-white">ROBOT LIMIT:</strong> Max 1.5 ft × 1.5 ft (maximum dimensions).
              </p>
              <p>
                <strong className="font-bold text-[#0052FF]">SCORING:</strong> Team with fewest balls in court at whistle wins.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('challenges')}
            className="mt-6 w-full btn-event-primary py-3 text-xs sm:text-sm rounded-xl text-center whitespace-nowrap"
          >
            SELECT ROBO-SPRINT →
          </button>
        </div>

        {/* Track 2: ROBO-PRECISION */}
        <div className="card-event p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-[#E2FF00] border border-slate-700/80">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="bg-[#E2FF00]/20 text-[#E2FF00] border border-[#E2FF00]/40 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                SENIOR DIVISION (AGE 15 & ABOVE)
              </span>
              <span className="text-xs font-mono font-bold text-[#E2E8F0]">
                ⏱ 5 MINUTES
              </span>
            </div>

            <h3 className="text-3xl font-extrabold text-white">
              Robo-Precision
            </h3>
            <p className="text-xs font-mono font-bold text-[#E2E8F0] uppercase tracking-wider">
              5-LEVEL TOWER CUP STACKING ARENA
            </p>

            <div className="my-4 flex justify-center bg-[#0F172A] p-4 rounded-xl border border-slate-700">
              <RoboPrecisionBot className="w-40 sm:w-48" />
            </div>

            <div className="space-y-2 text-xs font-inter text-[#E2E8F0] font-medium border-t border-slate-700 pt-3">
              <p>
                <strong className="font-bold text-white">OBJECTIVE:</strong> Build a 5-level cup tower using robotic grabber. Zero manual touch.
              </p>
              <p>
                <strong className="font-bold text-white">ROBOT LIMIT:</strong> Max 2.5 ft × 2.5 ft (maximum dimensions).
              </p>
              <p>
                <strong className="font-bold text-[#E2FF00]">SCORING:</strong> Tallest, most stable cup tower wins.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('challenges')}
            className="mt-6 w-full btn-event-primary py-3 text-xs sm:text-sm rounded-xl text-center whitespace-nowrap"
          >
            SELECT ROBO-PRECISION →
          </button>
        </div>
      </div>
    </section>
  );
};
