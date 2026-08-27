import React from 'react';

export const RoboPrizes: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="card-event p-6 sm:p-12 text-center border border-slate-700/80">
        <span className="text-xs font-mono font-bold tracking-widest text-[#E2FF00] uppercase block mb-1">
          CHAMPIONSHIP ALLOCATIONS
        </span>

        <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white leading-none mb-2 text-balance">
          The Prize Pool
        </h2>
        <p className="text-xs sm:text-sm font-inter text-[#E2E8F0] font-medium max-w-lg mx-auto mb-8 text-balance">
          Official prize pool allocations awarded at the Västerås City Finals across Junior & Senior competition categories.
        </p>

        {/* Podium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {/* 2nd Place */}
          <div className="p-5 bg-[#0F172A] border border-slate-700 rounded-xl text-center space-y-1.5 order-2 md:order-1">
            <span className="text-2xl font-bold text-slate-300 block">2ND PLACE</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-white block my-1 leading-none">
              1,400 SEK
            </span>
            <span className="text-xs font-mono font-bold text-[#E2E8F0] uppercase block">
              SILVER MEDAL & TROPHY
            </span>
          </div>

          {/* 1st Place Peak */}
          <div className="p-6 bg-[#0052FF] border-2 border-white/20 rounded-2xl text-center space-y-2 order-1 md:order-2 shadow-2xl transform md:-translate-y-3">
            <span className="bg-[#0F172A] text-[#E2FF00] text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase inline-block">
              GRAND CHAMPION
            </span>
            <span className="text-3xl font-extrabold text-white block">1ST PLACE</span>
            <span className="text-5xl sm:text-6xl font-extrabold text-[#E2FF00] block my-1 leading-none">
              2,000 SEK
            </span>
            <span className="text-xs font-mono font-bold text-white uppercase block">
              GOLD MEDAL, TROPHY & NATIONAL PASS
            </span>
          </div>

          {/* 3rd Place */}
          <div className="p-5 bg-[#0F172A] border border-slate-700 rounded-xl text-center space-y-1.5 order-3">
            <span className="text-2xl font-bold text-slate-300 block">3RD PLACE</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-white block my-1 leading-none">
              1,000 SEK
            </span>
            <span className="text-xs font-mono font-bold text-[#E2E8F0] uppercase block">
              BRONZE MEDAL & TROPHY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
