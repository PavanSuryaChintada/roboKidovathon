import React from 'react';

export const RoboJuniorVsSenior: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
          CHOOSE YOUR DIVISION ⚔️
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A]">
          Junior vs Senior Division
        </h2>
      </div>

      {/* Split Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* JUNIOR DIVISION */}
        <div className="card-event p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-[#0052FF]">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <span className="font-extrabold text-2xl uppercase text-[#0F172A]">
                JUNIOR DIVISION
              </span>
              <span className="bg-blue-50 text-[#0052FF] font-mono font-bold text-xs px-3 py-1 rounded-full uppercase border border-blue-200">
                UP TO AGE 15
              </span>
            </div>

            <div className="space-y-2.5 font-jakarta text-xs sm:text-sm text-slate-700">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase">PRIMARY CHALLENGE:</span>
                <span className="font-bold text-[#0052FF]">ROBO-SPRINT</span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase">MATCH DURATION:</span>
                <span className="font-bold text-[#0F172A]">3 MINUTES</span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase">MAX ROBOT DIMENSIONS:</span>
                <span className="font-bold text-[#FF3B00]">1.5 FT × 1.5 FT</span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase">QUALIFICATION:</span>
                <span className="font-bold text-emerald-700">TOP 1 TEAM PER SCHOOL</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-200 text-xs font-mono text-slate-500 uppercase">
            Focus: Fast reaction, ball-passing mechanics & team coordination.
          </div>
        </div>

        {/* SENIOR DIVISION */}
        <div className="card-event p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-[#0F172A]">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <span className="font-extrabold text-2xl uppercase text-[#0F172A]">
                SENIOR DIVISION
              </span>
              <span className="bg-slate-900 text-white font-mono font-bold text-xs px-3 py-1 rounded-full uppercase">
                AGE 15 & ABOVE
              </span>
            </div>

            <div className="space-y-2.5 font-jakarta text-xs sm:text-sm text-slate-700">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase">PRIMARY CHALLENGE:</span>
                <span className="font-bold text-[#0052FF]">ROBO-PRECISION</span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase">MATCH DURATION:</span>
                <span className="font-bold text-[#0F172A]">5 MINUTES</span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase">MAX ROBOT DIMENSIONS:</span>
                <span className="font-bold text-[#FF3B00]">2.5 FT × 2.5 FT</span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
                <span className="font-bold uppercase">QUALIFICATION:</span>
                <span className="font-bold text-emerald-700">TOP 1 TEAM PER SCHOOL</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-200 text-xs font-mono text-slate-500 uppercase">
            Focus: High precision crane arm, 5-level cup stacking & zero manual touch.
          </div>
        </div>
      </div>
    </section>
  );
};
