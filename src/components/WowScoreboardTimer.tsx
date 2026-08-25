import React, { useState } from 'react';

export const WowScoreboardTimer: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'sprint' | 'precision'>('sprint');
  const [isRunning, setIsRunning] = useState<boolean>(false);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* Stadium Digital Scoreboard Box */}
      <div className="bg-[#111111] text-white border-2.5 border-[#111111] shadow-[8px_8px_0px_#FF3B00] p-6 sm:p-10 relative text-center">
        {/* Top Flags Header */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-white/20 pb-4 mb-6 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF3B00] animate-ping" />
            <span className="font-barlow font-black text-sm text-[#FACC15] uppercase tracking-widest">
              ARENA 01 // MATCH CLOCK
            </span>
          </div>

          <div className="flex gap-2">
            <span className="bg-[#0052FF] text-white font-barlow font-bold text-xs px-2.5 py-0.5 border border-white uppercase">
              MATCH READY ⚡
            </span>
            <span className="bg-[#FACC15] text-[#111111] font-barlow font-bold text-xs px-2.5 py-0.5 border border-white uppercase">
              VÄSTERÅS STADIUM
            </span>
          </div>
        </div>

        {/* Track Switcher */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => { setSelectedTrack('sprint'); setIsRunning(false); }}
            className={`px-4 py-1.5 font-barlow font-black text-xs sm:text-sm uppercase border-2 transition-all ${
              selectedTrack === 'sprint'
                ? 'bg-[#FACC15] text-[#111111] border-white shadow-[3px_3px_0px_#FFFFFF]'
                : 'bg-white/10 text-white border-white/30 hover:border-white'
            }`}
          >
            ROBO-SPRINT (JUNIOR 3 MIN)
          </button>

          <button
            onClick={() => { setSelectedTrack('precision'); setIsRunning(false); }}
            className={`px-4 py-1.5 font-barlow font-black text-xs sm:text-sm uppercase border-2 transition-all ${
              selectedTrack === 'precision'
                ? 'bg-[#0052FF] text-white border-white shadow-[3px_3px_0px_#FFFFFF]'
                : 'bg-white/10 text-white border-white/30 hover:border-white'
            }`}
          >
            ROBO-PRECISION (SENIOR 5 MIN)
          </button>
        </div>

        {/* Giant Digital Timer Display */}
        <div className="py-4">
          <span className="text-7xl sm:text-9xl md:text-[10rem] font-barlow font-black tracking-tighter text-[#FACC15] leading-none drop-shadow-[0_0_20px_rgba(250,204,21,0.3)] block font-mono">
            {selectedTrack === 'sprint' ? '03:00' : '05:00'}
          </span>
          <span className="text-xs sm:text-sm font-mono text-white/70 tracking-widest uppercase block mt-2">
            OFFICIAL ARENA MATCH TIMER LIMIT
          </span>
        </div>

        {/* Match Action Controls */}
        <div className="mt-6 pt-4 border-t-2 border-white/20 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-6 py-2.5 font-barlow font-black text-sm uppercase border-2 border-white shadow-[4px_4px_0px_#FFFFFF] transition-transform ${
              isRunning ? 'bg-[#FF3B00] text-white' : 'bg-[#059669] text-white'
            }`}
          >
            {isRunning ? 'PAUSE MATCH ⏸' : 'START ARENA TIMER ▶'}
          </button>

          <span className="text-xs font-mono text-white/80">
            {selectedTrack === 'sprint'
              ? 'AIR-HOCKEY BALL PASSING ARENA // 5 BALLS START'
              : '5-LEVEL CUP TOWER STACKING ARENA // ZERO MANUAL TOUCH'}
          </span>
        </div>
      </div>
    </section>
  );
};
