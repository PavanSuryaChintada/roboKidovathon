import React from 'react';

export const BlackTransitionStrip: React.FC = () => {
  return (
    <div className="w-full bg-[#111111] text-[#FACC15] border-y-2.5 border-[#111111] py-3.5 px-4 my-6 text-center select-none shadow-[4px_4px_0px_#111111]">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-barlow font-black text-sm sm:text-base md:text-lg tracking-widest uppercase">
        <span>BUILD</span>
        <span className="text-white">→</span>
        <span>CODE</span>
        <span className="text-white">→</span>
        <span>TEST</span>
        <span className="text-white">→</span>
        <span className="text-white">COMPETE</span>
      </div>
    </div>
  );
};
