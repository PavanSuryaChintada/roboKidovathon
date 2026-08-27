import React, { useState } from 'react';

export const WowScoreboardTimer: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'sprint' | 'precision'>('sprint');
  const [isRunning, setIsRunning] = useState<boolean>(false);

  return (
    <section className="w-full bg-[#0C1222] text-white py-16 md:py-20 border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="card-editorial-dark p-6 sm:p-10 relative text-center border border-slate-800">
          {/* Top Header */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-700 pb-4 mb-6 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0052FF] animate-ping" />
              <span className="font-mono font-bold text-xs text-[#E2FF00] uppercase tracking-wider">
                06 // MATCH CLOCK ARENA
              </span>
            </div>

            <div className="flex gap-2 text-xs font-mono font-bold">
              <span className="bg-[#1E293B] text-white px-3 py-1 rounded-sm border border-slate-700">
                MATCH READY ⚡
              </span>
              <span className="bg-[#0052FF] text-white px-3 py-1 rounded-sm">
                VÄSTERÅS STADIUM
              </span>
            </div>
          </div>

          {/* Track Switcher */}
          <div className="flex justify-center gap-3 mb-6">
            <button
              onClick={() => { setSelectedTrack('sprint'); setIsRunning(false); }}
              className={`px-4 py-2 font-semibold text-xs sm:text-sm uppercase rounded-md border transition-all ${
                selectedTrack === 'sprint'
                  ? 'bg-[#0052FF] text-white border-[#0052FF]'
                  : 'bg-[#1E293B] text-[#E2E8F0] border-slate-700 hover:border-slate-500'
              }`}
            >
              ROBO-SPRINT (JUNIOR 3 MIN)
            </button>

            <button
              onClick={() => { setSelectedTrack('precision'); setIsRunning(false); }}
              className={`px-4 py-2 font-semibold text-xs sm:text-sm uppercase rounded-md border transition-all ${
                selectedTrack === 'precision'
                  ? 'bg-[#0052FF] text-white border-[#0052FF]'
                  : 'bg-[#1E293B] text-[#E2E8F0] border-slate-700 hover:border-slate-500'
              }`}
            >
              ROBO-PRECISION (SENIOR 5 MIN)
            </button>
          </div>

          {/* Digital Timer Display */}
          <div className="py-2">
            <span className="text-6xl sm:text-8xl md:text-9xl font-extrabold text-[#E2FF00] block font-mono tracking-tight">
              {selectedTrack === 'sprint' ? '03:00' : '05:00'}
            </span>
            <span className="text-xs font-mono text-[#E2E8F0] tracking-wider uppercase block mt-2 font-bold">
              OFFICIAL ARENA MATCH TIMER LIMIT
            </span>
          </div>

          {/* Controls */}
          <div className="mt-6 pt-4 border-t border-slate-700 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-6 py-2.5 font-semibold text-xs sm:text-sm rounded-md transition-all ${
                isRunning ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'
              }`}
            >
              {isRunning ? 'PAUSE MATCH ⏸' : 'START ARENA TIMER ▶'}
            </button>

            <span className="text-xs font-mono text-[#E2E8F0]">
              {selectedTrack === 'sprint'
                ? 'AIR-HOCKEY BALL PASSING ARENA // 5 BALLS START'
                : '5-LEVEL CUP TOWER STACKING ARENA // ZERO MANUAL TOUCH'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
