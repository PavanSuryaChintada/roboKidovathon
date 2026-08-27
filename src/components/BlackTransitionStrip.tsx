import React from 'react';

export const BlackTransitionStrip: React.FC = () => {
  return (
    <div className="w-full bg-[#050507] text-[#00F2FE] border-y border-white/10 py-4 px-4 my-6 text-center select-none shadow-xl">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-barlow font-black text-sm sm:text-base md:text-lg tracking-widest uppercase">
        <span className="text-[#FF0055] drop-shadow-[0_0_10px_rgba(255,0,85,0.5)]">BUILD</span>
        <span className="text-white/40">→</span>
        <span className="text-[#E2FF00] drop-shadow-[0_0_10px_rgba(226,255,0,0.5)]">CODE</span>
        <span className="text-white/40">→</span>
        <span className="text-[#00F2FE] drop-shadow-[0_0_10px_rgba(0,242,254,0.5)]">TEST</span>
        <span className="text-white/40">→</span>
        <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">COMPETE</span>
      </div>
    </div>
  );
};
