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
      <div className="bg-[#FACC15] border-2.5 border-[#111111] shadow-[9px_9px_0px_#111111] p-8 sm:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Statement & Buttons */}
        <div className="flex-1 space-y-4 text-center md:text-left z-10">
          <span className="bg-[#111111] text-white font-barlow font-black text-xs px-3 py-1 border border-[#111111] uppercase tracking-wider inline-block">
            LEAGUE CALL TO ACTION 🔥
          </span>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-barlow font-black uppercase text-[#111111] leading-none">
            READY?<br />
            <span className="text-[#0052FF]">BUILD THE FUTURE.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#111111]/90 font-dmsans max-w-md">
            Join Sweden's official student robotics league. Register your school or student team today.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={onOpenRegister}
              className="btn-brutal text-sm md:text-base px-6 py-3.5 bg-[#111111] text-white"
            >
              JOIN THE COMPETITION →
            </button>
            <button
              onClick={() => onNavigate('for-schools')}
              className="btn-brutal-blue text-sm md:text-base px-6 py-3.5"
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
