import React from 'react';
import { VictoryRobot } from './CompetitionRobots';

interface RoboFinalCtaProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const RoboFinalCta: React.FC<RoboFinalCtaProps> = ({
  onOpenRegister,
  onNavigate,
}) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="card-slush-glass rounded-3xl p-8 sm:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#FF0055]/30 shadow-[0_0_45px_rgba(255,0,85,0.25)]">
        {/* Left Side: Statement & Buttons */}
        <div className="flex-1 space-y-4 text-center md:text-left z-10">
          <span className="bg-[#FF0055]/20 text-[#FF0055] font-barlow font-black text-xs px-3.5 py-1.5 rounded-full border border-[#FF0055]/40 uppercase tracking-widest inline-block">
            LEAGUE CALL TO ACTION 🔥
          </span>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-barlow font-black uppercase text-white leading-none">
            READY?<br />
            <span className="bg-gradient-to-r from-[#FF0055] via-[#E2FF00] to-[#00F2FE] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,0,85,0.4)]">
              BUILD THE FUTURE.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1AA] font-dmsans max-w-md">
            Join Sweden's official student robotics league. Register your school or student team today.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={onOpenRegister}
              className="btn-slush-magenta text-sm md:text-base px-7 py-3.5 rounded-xl"
            >
              JOIN THE COMPETITION →
            </button>
            <button
              onClick={() => onNavigate('for-schools')}
              className="btn-slush-volt text-sm md:text-base px-7 py-3.5 rounded-xl"
            >
              FOR SCHOOLS →
            </button>
          </div>
        </div>

        {/* Right Side: Victorious Champion Robot */}
        <div className="flex justify-center items-center hover:scale-105 transition-transform duration-300">
          <VictoryRobot className="w-64 sm:w-72 md:w-80" />
        </div>
      </div>
    </section>
  );
};
