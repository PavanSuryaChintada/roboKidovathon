import React from 'react';

export const RoboJuniorVsSenior: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="bg-[#FACC15] text-[#111111] font-barlow font-black text-xs px-3 py-1 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] uppercase inline-block mb-2">
          CHOOSE YOUR DIVISION ⚔️
        </span>
        <h2 className="text-4xl sm:text-6xl font-barlow font-black uppercase text-[#111111] leading-none">
          JUNIOR VS SENIOR
        </h2>
      </div>

      {/* Split Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* JUNIOR DIVISION */}
        <div className="bg-[#FACC15] border-2.5 border-[#111111] shadow-[7px_7px_0px_#111111] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b-2 border-[#111111] pb-3 mb-4">
              <span className="font-barlow font-black text-3xl sm:text-4xl uppercase text-[#111111]">
                JUNIOR DIVISION
              </span>
              <span className="bg-[#111111] text-white font-barlow font-black text-sm px-3 py-1 uppercase">
                UP TO AGE 15
              </span>
            </div>

            <div className="space-y-3 font-dmsans text-sm text-[#111111]">
              <div className="p-3 bg-white border-2 border-[#111111] flex justify-between items-center">
                <span className="font-barlow font-bold text-base uppercase">PRIMARY CHALLENGE:</span>
                <span className="font-barlow font-black text-base text-[#0052FF]">ROBO-SPRINT</span>
              </div>

              <div className="p-3 bg-white border-2 border-[#111111] flex justify-between items-center">
                <span className="font-barlow font-bold text-base uppercase">MATCH DURATION:</span>
                <span className="font-barlow font-black text-base text-[#111111]">3 MINUTES</span>
              </div>

              <div className="p-3 bg-white border-2 border-[#111111] flex justify-between items-center">
                <span className="font-barlow font-bold text-base uppercase">MAX ROBOT DIMENSIONS:</span>
                <span className="font-barlow font-black text-base text-[#FF3B00]">1.5 FT × 1.5 FT</span>
              </div>

              <div className="p-3 bg-white border-2 border-[#111111] flex justify-between items-center">
                <span className="font-barlow font-bold text-base uppercase">QUALIFICATION:</span>
                <span className="font-barlow font-black text-base text-[#059669]">TOP 1 TEAM PER SCHOOL</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-[#111111] text-xs font-mono font-bold text-[#111111]/80 uppercase">
            Focus: Fast reaction, ball-passing mechanics & team coordination.
          </div>
        </div>

        {/* SENIOR DIVISION */}
        <div className="bg-[#0052FF] text-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#111111] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b-2 border-white pb-3 mb-4">
              <span className="font-barlow font-black text-3xl sm:text-4xl uppercase text-[#FACC15]">
                SENIOR DIVISION
              </span>
              <span className="bg-[#FACC15] text-[#111111] font-barlow font-black text-sm px-3 py-1 uppercase">
                AGE 15 & ABOVE
              </span>
            </div>

            <div className="space-y-3 font-dmsans text-sm text-[#111111]">
              <div className="p-3 bg-white border-2 border-[#111111] flex justify-between items-center">
                <span className="font-barlow font-bold text-base uppercase">PRIMARY CHALLENGE:</span>
                <span className="font-barlow font-black text-base text-[#0052FF]">ROBO-PRECISION</span>
              </div>

              <div className="p-3 bg-white border-2 border-[#111111] flex justify-between items-center">
                <span className="font-barlow font-bold text-base uppercase">MATCH DURATION:</span>
                <span className="font-barlow font-black text-base text-[#111111]">5 MINUTES</span>
              </div>

              <div className="p-3 bg-white border-2 border-[#111111] flex justify-between items-center">
                <span className="font-barlow font-bold text-base uppercase">MAX ROBOT DIMENSIONS:</span>
                <span className="font-barlow font-black text-base text-[#FF3B00]">2.5 FT × 2.5 FT</span>
              </div>

              <div className="p-3 bg-white border-2 border-[#111111] flex justify-between items-center">
                <span className="font-barlow font-bold text-base uppercase">QUALIFICATION:</span>
                <span className="font-barlow font-black text-base text-[#059669]">TOP 1 TEAM PER SCHOOL</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-white/20 text-xs font-mono font-bold text-white/90 uppercase">
            Focus: High precision crane arm, 5-level cup stacking & zero manual touch.
          </div>
        </div>
      </div>
    </section>
  );
};
