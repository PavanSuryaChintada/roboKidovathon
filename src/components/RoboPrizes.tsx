import React from 'react';

export const RoboPrizes: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="card-event-dark p-8 sm:p-14 text-center border border-slate-800">
        <span className="text-xs font-mono font-bold tracking-widest text-[#E2FF00] uppercase block mb-2">
          CHAMPIONSHIP ALLOCATIONS
        </span>

        <h2 className="text-4xl sm:text-6xl font-syne font-extrabold uppercase text-white leading-none mb-3">
          THE PRIZE POOL
        </h2>
        <p className="text-xs sm:text-sm font-dmsans text-slate-400 max-w-lg mx-auto mb-10">
          Official prize pool allocations awarded at the Västerås City Finals across Junior & Senior competition categories.
        </p>

        {/* Prestigious Podium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* 2nd Place */}
          <div className="p-6 bg-slate-800/80 border border-slate-700 rounded-2xl text-center space-y-2 order-2 md:order-1">
            <span className="text-3xl font-syne font-extrabold text-slate-400 block">2ND PLACE</span>
            <span className="text-5xl sm:text-6xl font-syne font-extrabold text-white block my-1 leading-none">
              1,400 SEK
            </span>
            <span className="text-xs font-mono font-bold text-slate-400 uppercase block">
              SILVER MEDAL & TROPHY
            </span>
          </div>

          {/* 1st Place Peak */}
          <div className="p-8 bg-slate-900 border-2 border-[#0052FF] rounded-3xl text-center space-y-3 order-1 md:order-2 shadow-2xl transform md:-translate-y-4">
            <span className="bg-[#0052FF] text-white text-xs font-mono font-bold px-3 py-1 rounded-full uppercase inline-block">
              GRAND CHAMPION
            </span>
            <span className="text-4xl font-syne font-extrabold text-white block">1ST PLACE</span>
            <span className="text-6xl sm:text-7xl font-syne font-extrabold text-[#E2FF00] block my-2 leading-none">
              2,000 SEK
            </span>
            <span className="text-xs font-mono font-bold text-white uppercase block">
              GOLD MEDAL, TROPHY & NATIONAL PASS
            </span>
          </div>

          {/* 3rd Place */}
          <div className="p-6 bg-slate-800/80 border border-slate-700 rounded-2xl text-center space-y-2 order-3">
            <span className="text-3xl font-syne font-extrabold text-slate-400 block">3RD PLACE</span>
            <span className="text-5xl sm:text-6xl font-syne font-extrabold text-white block my-1 leading-none">
              1,000 SEK
            </span>
            <span className="text-xs font-mono font-bold text-slate-400 uppercase block">
              BRONZE MEDAL & TROPHY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
