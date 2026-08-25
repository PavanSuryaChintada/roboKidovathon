import React from 'react';

export const RoboPrizes: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="bg-[#111111] text-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#FF3B00] p-6 sm:p-10 text-center">
        <span className="bg-[#FF3B00] text-white font-barlow font-black text-xs px-3 py-1 border border-white uppercase tracking-wider inline-block mb-3">
          CHAMPIONSHIP ALLOCATIONS 🏆
        </span>

        <h2 className="text-4xl sm:text-6xl font-barlow font-black uppercase text-[#FACC15] leading-none mb-2">
          PRIZE POOL SCOREBOARD
        </h2>
        <p className="text-xs sm:text-sm font-dmsans text-white/80 max-w-lg mx-auto mb-8">
          Official prize allocations awarded at the Västerås City Finals across combined Junior & Senior categories.
        </p>

        {/* Podium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {/* 2nd Place */}
          <div className="p-6 bg-white/10 border-2 border-white/20 hover:border-[#0052FF] transition-colors order-2 md:order-1">
            <span className="text-4xl font-barlow font-black text-white/60 block">2ND PLACE</span>
            <span className="text-5xl sm:text-6xl font-barlow font-black text-[#0052FF] block my-2 leading-none">
              1,400 SEK
            </span>
            <span className="text-xs font-mono text-white/70 uppercase block">SILVER MEDAL & TROPHY</span>
          </div>

          {/* 1st Place Podium Peak */}
          <div className="p-8 bg-[#FACC15] text-[#111111] border-2.5 border-white shadow-[0px_0px_15px_rgba(250,204,21,0.4)] order-1 md:order-2 transform md:-translate-y-4">
            <span className="bg-[#111111] text-white font-barlow font-black text-xs px-3 py-1 uppercase inline-block mb-2">
              GRAND CHAMPION
            </span>
            <span className="text-5xl font-barlow font-black text-[#111111] block">1ST PLACE</span>
            <span className="text-6xl sm:text-7xl font-barlow font-black text-[#111111] block my-2 leading-none">
              2,000 SEK
            </span>
            <span className="text-xs font-mono font-black text-[#111111] uppercase block">
              GOLD MEDAL, TROPHY & NATIONAL QUALIFIER PASS
            </span>
          </div>

          {/* 3rd Place */}
          <div className="p-6 bg-white/10 border-2 border-white/20 hover:border-[#FF3B00] transition-colors order-3">
            <span className="text-4xl font-barlow font-black text-white/60 block">3RD PLACE</span>
            <span className="text-5xl sm:text-6xl font-barlow font-black text-[#FF3B00] block my-2 leading-none">
              1,000 SEK
            </span>
            <span className="text-xs font-mono text-white/70 uppercase block">BRONZE MEDAL & TROPHY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
