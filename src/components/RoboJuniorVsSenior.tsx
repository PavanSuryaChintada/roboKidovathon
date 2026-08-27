import React from 'react';

export const RoboJuniorVsSenior: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
          CHOOSE YOUR DIVISION ⚔️
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-balance">
          Junior vs Senior Division
        </h2>
      </div>

      {/* Split Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* JUNIOR DIVISION */}
        <div className="card-event p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-[#0052FF] border border-white/15">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span className="font-extrabold text-2xl uppercase text-white">
                JUNIOR DIVISION
              </span>
              <span className="bg-[#0052FF]/20 text-[#0052FF] font-mono font-bold text-xs px-3 py-1 rounded-full uppercase border border-[#0052FF]/40">
                UP TO AGE 15
              </span>
            </div>

            <div className="space-y-2.5 font-inter text-xs sm:text-sm text-slate-300">
              <div className="p-3 bg-[#0B0F19] border border-white/10 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase text-slate-300">PRIMARY CHALLENGE:</span>
                <span className="font-bold text-[#0052FF]">ROBO-SPRINT</span>
              </div>

              <div className="p-3 bg-[#0B0F19] border border-white/10 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase text-slate-300">MATCH DURATION:</span>
                <span className="font-bold text-white">3 MINUTES</span>
              </div>

              <div className="p-3 bg-[#0B0F19] border border-white/10 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase text-slate-300">MAX ROBOT DIMENSIONS:</span>
                <span className="font-bold text-[#E2FF00]">1.5 FT × 1.5 FT</span>
              </div>

              <div className="p-3 bg-[#0B0F19] border border-white/10 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase text-slate-300">QUALIFICATION:</span>
                <span className="font-bold text-emerald-400">TOP 1 TEAM PER SCHOOL</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-white/10 text-xs font-mono text-slate-400 uppercase">
            Focus: Fast reaction, ball-passing mechanics & team coordination.
          </div>
        </div>

        {/* SENIOR DIVISION */}
        <div className="card-event p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-[#E2FF00] border border-white/15">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span className="font-extrabold text-2xl uppercase text-white">
                SENIOR DIVISION
              </span>
              <span className="bg-[#E2FF00]/20 text-[#E2FF00] font-mono font-bold text-xs px-3 py-1 rounded-full uppercase border border-[#E2FF00]/40">
                AGE 15 & ABOVE
              </span>
            </div>

            <div className="space-y-2.5 font-inter text-xs sm:text-sm text-slate-300">
              <div className="p-3 bg-[#0B0F19] border border-white/10 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase text-slate-300">PRIMARY CHALLENGE:</span>
                <span className="font-bold text-[#0052FF]">ROBO-PRECISION</span>
              </div>

              <div className="p-3 bg-[#0B0F19] border border-white/10 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase text-slate-300">MATCH DURATION:</span>
                <span className="font-bold text-white">5 MINUTES</span>
              </div>

              <div className="p-3 bg-[#0B0F19] border border-white/10 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase text-slate-300">MAX ROBOT DIMENSIONS:</span>
                <span className="font-bold text-[#E2FF00]">2.5 FT × 2.5 FT</span>
              </div>

              <div className="p-3 bg-[#0B0F19] border border-white/10 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase text-slate-300">QUALIFICATION:</span>
                <span className="font-bold text-emerald-400">TOP 1 TEAM PER SCHOOL</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-white/10 text-xs font-mono text-slate-400 uppercase">
            Focus: High precision crane arm, 5-level cup stacking & zero manual touch.
          </div>
        </div>
      </div>
    </section>
  );
};
