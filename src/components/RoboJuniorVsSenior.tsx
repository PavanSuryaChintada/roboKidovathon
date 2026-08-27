import React from 'react';

export const RoboJuniorVsSenior: React.FC = () => {
  return (
    <section className="w-full bg-[#F8FAFC] text-[#0B1020] py-20 md:py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-2">
            10 // CHOOSE YOUR DIVISION ⚔️
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1020] text-balance tracking-tight">
            Junior vs Senior Division
          </h2>
        </div>

        {/* Split Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* JUNIOR DIVISION */}
          <div className="card-editorial p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-[#0052FF]">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                <span className="font-bold text-2xl uppercase text-[#0B1020]">
                  JUNIOR DIVISION
                </span>
                <span className="bg-blue-50 text-[#0052FF] font-mono font-bold text-xs px-3 py-1 rounded-sm uppercase border border-blue-200">
                  UP TO AGE 15
                </span>
              </div>

              <div className="space-y-3 font-inter text-xs sm:text-sm text-[#334155]">
                <div className="p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-md flex justify-between items-center">
                  <span className="font-bold uppercase text-[#334155]">PRIMARY CHALLENGE:</span>
                  <span className="font-bold text-[#0052FF]">ROBO-SPRINT</span>
                </div>

                <div className="p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-md flex justify-between items-center">
                  <span className="font-bold uppercase text-[#334155]">MATCH DURATION:</span>
                  <span className="font-bold text-[#0B1020]">3 MINUTES</span>
                </div>

                <div className="p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-md flex justify-between items-center">
                  <span className="font-bold uppercase text-[#334155]">MAX ROBOT DIMENSIONS:</span>
                  <span className="font-bold text-[#FF3B00]">1.5 FT × 1.5 FT</span>
                </div>

                <div className="p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-md flex justify-between items-center">
                  <span className="font-bold uppercase text-[#334155]">QUALIFICATION:</span>
                  <span className="font-bold text-emerald-700">TOP 1 TEAM PER SCHOOL</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-mono text-[#475569] uppercase font-semibold">
              Focus: Fast reaction, ball-passing mechanics & team coordination.
            </div>
          </div>

          {/* SENIOR DIVISION */}
          <div className="card-editorial p-6 sm:p-8 flex flex-col justify-between border-t-4 border-t-[#0B1020]">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                <span className="font-bold text-2xl uppercase text-[#0B1020]">
                  SENIOR DIVISION
                </span>
                <span className="bg-slate-100 text-[#0B1020] font-mono font-bold text-xs px-3 py-1 rounded-sm uppercase border border-slate-300">
                  AGE 15 & ABOVE
                </span>
              </div>

              <div className="space-y-3 font-inter text-xs sm:text-sm text-[#334155]">
                <div className="p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-md flex justify-between items-center">
                  <span className="font-bold uppercase text-[#334155]">PRIMARY CHALLENGE:</span>
                  <span className="font-bold text-[#0052FF]">ROBO-PRECISION</span>
                </div>

                <div className="p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-md flex justify-between items-center">
                  <span className="font-bold uppercase text-[#334155]">MATCH DURATION:</span>
                  <span className="font-bold text-[#0B1020]">5 MINUTES</span>
                </div>

                <div className="p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-md flex justify-between items-center">
                  <span className="font-bold uppercase text-[#334155]">MAX ROBOT DIMENSIONS:</span>
                  <span className="font-bold text-[#FF3B00]">2.5 FT × 2.5 FT</span>
                </div>

                <div className="p-3.5 bg-[#F8FAFC] border border-slate-200 rounded-md flex justify-between items-center">
                  <span className="font-bold uppercase text-[#334155]">QUALIFICATION:</span>
                  <span className="font-bold text-emerald-700">TOP 1 TEAM PER SCHOOL</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-mono text-[#475569] uppercase font-semibold">
              Focus: High precision crane arm, 5-level cup stacking & zero manual touch.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
