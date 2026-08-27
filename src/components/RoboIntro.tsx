import React from 'react';

export const RoboIntro: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      {/* Large Split Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-12">
        {/* Left Side: Large Editorial Headline (7 cols) */}
        <div className="lg:col-span-7">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-2">
            01 // MISSION STATEMENT
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold uppercase text-[#0F172A] leading-tight">
            THE FUTURE OF STEM STARTS HERE.
          </h2>
        </div>

        {/* Right Side: Short Paragraph (5 cols) */}
        <div className="lg:col-span-5 space-y-4 pt-2">
          <p className="text-base sm:text-lg text-slate-600 font-dmsans leading-relaxed">
            Robo-Kidovation turns STEM learning into an exciting hands-on championship. Students build real physical robots, program microcontroller logic, solve arena challenges, and compete live.
          </p>
          <p className="text-sm text-slate-500 font-dmsans">
            Evolved from the Techfest IIT Bombay model and adapted for Nordic school standards, participants work with physical hardware, microcontrollers, and real mechanics.
          </p>
        </div>
      </div>

      {/* 4 Restrained Editorial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        <div className="card-event p-6 space-y-2 border border-slate-200">
          <span className="text-xs font-mono font-bold text-[#0052FF] uppercase">[HARDWARE]</span>
          <h3 className="text-xl font-syne font-bold text-[#0F172A] uppercase">REAL HARDWARE</h3>
          <p className="text-xs text-slate-500 font-dmsans leading-relaxed">
            Motors, chassis, gearboxes, sensors, and electronic microcontrollers.
          </p>
        </div>

        <div className="card-event p-6 space-y-2 border border-slate-200">
          <span className="text-xs font-mono font-bold text-[#0052FF] uppercase">[COLLABORATION]</span>
          <h3 className="text-xl font-syne font-bold text-[#0F172A] uppercase">TEAMWORK</h3>
          <p className="text-xs text-slate-500 font-dmsans leading-relaxed">
            Collaborative strategy, hardware troubleshooting, and live match execution.
          </p>
        </div>

        <div className="card-event p-6 space-y-2 border border-slate-200">
          <span className="text-xs font-mono font-bold text-[#0052FF] uppercase">[LOGIC]</span>
          <h3 className="text-xl font-syne font-bold text-[#0F172A] uppercase">AUTONOMOUS ROBOTICS</h3>
          <p className="text-xs text-slate-500 font-dmsans leading-relaxed">
            Programming sensor arrays, motor timing, and line-tracking algorithms.
          </p>
        </div>

        <div className="card-event p-6 space-y-2 border border-slate-200">
          <span className="text-xs font-mono font-bold text-[#0052FF] uppercase">[ARENA]</span>
          <h3 className="text-xl font-syne font-bold text-[#0F172A] uppercase">LIVE COMPETITION</h3>
          <p className="text-xs text-slate-500 font-dmsans leading-relaxed">
            Head-to-head match scoring, referee officiating, and live spectators.
          </p>
        </div>
      </div>
    </section>
  );
};
