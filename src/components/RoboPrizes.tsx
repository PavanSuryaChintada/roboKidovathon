import React from 'react';

export const RoboPrizes: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="card-slush-glass rounded-3xl p-6 sm:p-10 text-center border border-white/10 shadow-[0_0_40px_rgba(255,0,85,0.2)]">
        <span className="bg-[#FF0055]/20 text-[#FF0055] font-barlow font-black text-xs px-3.5 py-1.5 rounded-full border border-[#FF0055]/50 uppercase tracking-widest inline-block mb-3">
          CHAMPIONSHIP ALLOCATIONS 🏆
        </span>

        <h2 className="text-4xl sm:text-6xl font-barlow font-black uppercase text-[#E2FF00] leading-none mb-2 drop-shadow-[0_0_20px_rgba(226,255,0,0.3)]">
          PRIZE POOL SCOREBOARD
        </h2>
        <p className="text-xs sm:text-sm font-dmsans text-[#A1A1AA] max-w-lg mx-auto mb-8">
          Official prize allocations awarded at the Västerås City Finals across combined Junior & Senior categories.
        </p>

        {/* Podium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {/* 2nd Place */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00F2FE] hover:shadow-[0_0_25px_rgba(0,242,254,0.3)] transition-all order-2 md:order-1">
            <span className="text-4xl font-barlow font-black text-white/50 block">2ND PLACE</span>
            <span className="text-5xl sm:text-6xl font-barlow font-black text-[#00F2FE] block my-2 leading-none drop-shadow-[0_0_15px_rgba(0,242,254,0.4)]">
              1,400 SEK
            </span>
            <span className="text-xs font-mono text-[#A1A1AA] uppercase block">SILVER MEDAL & TROPHY</span>
          </div>

          {/* 1st Place Podium Peak */}
          <div className="p-8 bg-[#E2FF00]/15 text-white border-2 border-[#E2FF00] rounded-3xl shadow-[0_0_35px_rgba(226,255,0,0.4)] order-1 md:order-2 transform md:-translate-y-4">
            <span className="bg-[#E2FF00] text-[#0B0B0E] font-barlow font-black text-xs px-3 py-1 rounded-full uppercase inline-block mb-2">
              GRAND CHAMPION
            </span>
            <span className="text-5xl font-barlow font-black text-white block">1ST PLACE</span>
            <span className="text-6xl sm:text-7xl font-barlow font-black text-[#E2FF00] block my-2 leading-none drop-shadow-[0_0_20px_rgba(226,255,0,0.5)]">
              2,000 SEK
            </span>
            <span className="text-xs font-mono font-bold text-white uppercase block">
              GOLD MEDAL, TROPHY & NATIONAL QUALIFIER PASS
            </span>
          </div>

          {/* 3rd Place */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FF0055] hover:shadow-[0_0_25px_rgba(255,0,85,0.3)] transition-all order-3">
            <span className="text-4xl font-barlow font-black text-white/50 block">3RD PLACE</span>
            <span className="text-5xl sm:text-6xl font-barlow font-black text-[#FF0055] block my-2 leading-none drop-shadow-[0_0_15px_rgba(255,0,85,0.4)]">
              1,000 SEK
            </span>
            <span className="text-xs font-mono text-[#A1A1AA] uppercase block">BRONZE MEDAL & TROPHY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
