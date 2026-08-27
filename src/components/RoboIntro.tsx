import React from 'react';

export const RoboIntro: React.FC = () => {
  return (
    <section className="w-full bg-[#F8FAFC] text-[#0B1020] py-20 md:py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Split Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-16 border-b border-slate-200 pb-12">
          {/* Left Side: Editorial Title */}
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
              02 // MISSION STATEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1020] leading-tight text-balance tracking-tight">
              The Future of STEM Starts Here.
            </h2>
          </div>

          {/* Right Side: Paragraph */}
          <div className="lg:col-span-5 space-y-4 pt-1">
            <p className="text-sm sm:text-base text-[#334155] font-inter font-normal leading-relaxed">
              Robo-Kidovation turns STEM learning into an exciting hands-on championship. Students build real physical robots, program microcontroller logic, solve arena challenges, and compete live.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] font-inter font-normal leading-relaxed">
              Evolved from the Techfest IIT Bombay model and adapted for Nordic school standards, participants work with physical hardware, microcontrollers, and real mechanics.
            </p>
          </div>
        </div>

        {/* 4 Editorial Grid Cards (Thin 1px border, clean 6px radius) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-editorial p-6 space-y-3">
            <span className="text-[11px] font-mono font-bold text-[#0052FF] uppercase">[01 / HARDWARE]</span>
            <h3 className="text-lg font-bold text-[#0B1020]">Real Hardware</h3>
            <p className="text-xs text-[#334155] font-inter font-normal leading-relaxed">
              Motors, chassis, gearboxes, sensors, and electronic microcontrollers.
            </p>
          </div>

          <div className="card-editorial p-6 space-y-3">
            <span className="text-[11px] font-mono font-bold text-[#0052FF] uppercase">[02 / TEAMWORK]</span>
            <h3 className="text-lg font-bold text-[#0B1020]">Team Collaboration</h3>
            <p className="text-xs text-[#334155] font-inter font-normal leading-relaxed">
              Collaborative strategy, hardware troubleshooting, and live match execution.
            </p>
          </div>

          <div className="card-editorial p-6 space-y-3">
            <span className="text-[11px] font-mono font-bold text-[#0052FF] uppercase">[03 / LOGIC]</span>
            <h3 className="text-lg font-bold text-[#0B1020]">Autonomous Robotics</h3>
            <p className="text-xs text-[#334155] font-inter font-normal leading-relaxed">
              Programming sensor arrays, motor timing, and line-tracking algorithms.
            </p>
          </div>

          <div className="card-editorial p-6 space-y-3">
            <span className="text-[11px] font-mono font-bold text-[#0052FF] uppercase">[04 / ARENA]</span>
            <h3 className="text-lg font-bold text-[#0B1020]">Live Competition</h3>
            <p className="text-xs text-[#334155] font-inter font-normal leading-relaxed">
              Head-to-head match scoring, referee officiating, and live spectators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
