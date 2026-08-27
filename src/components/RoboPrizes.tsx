import React from 'react';

export const RoboPrizes: React.FC = () => {
  return (
    <section className="w-full bg-[#000000] text-white overflow-hidden">
      {/* Full-bleed dramatic header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 pt-20 md:pt-28">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-white/30 uppercase block mb-6">
          08 / CHAMPIONSHIP ALLOCATIONS
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-white/10 pb-16 md:pb-20">
          {/* Left — dramatic heading */}
          <div className="lg:col-span-6">
            <h2
              className="font-extrabold uppercase leading-none tracking-tighter"
              style={{ fontSize: 'clamp(5rem, 14vw, 14rem)', lineHeight: 0.85, color: '#FFFFFF' }}
            >
              PRIZE<br />
              <span className="text-[#E2FF00]">POOL</span>
            </h2>
          </div>

          {/* Right — description */}
          <div className="lg:col-span-6 flex flex-col justify-end pl-0 lg:pl-16 mt-8 lg:mt-0">
            <p className="text-base text-white/50 font-light leading-relaxed max-w-sm mb-6">
              Official prize allocations awarded at the Västerås City Finals across Junior & Senior competition categories.
            </p>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
              VÄSTERÅS CITY FINALS · MARCH 2026 · ABB VENUE
            </span>
          </div>
        </div>
      </div>

      {/* Prize breakdown — horizontal editorial */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {/* 2nd Place */}
          <div className="py-10 lg:py-0 lg:pr-14">
            <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-white/30 uppercase block mb-6">
              02 / SECOND PLACE
            </span>
            <span
              className="font-extrabold text-white/50 leading-none block"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1 }}
            >
              1,400
            </span>
            <span className="text-xl font-extrabold text-white/30 uppercase tracking-widest mt-1 block">SEK</span>
            <div className="mt-6 space-y-1 text-[11px] font-mono text-white/30 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-4 h-px bg-white/20 inline-block" />
                SILVER MEDAL
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-px bg-white/20 inline-block" />
                CHAMPIONSHIP TROPHY
              </div>
            </div>
          </div>

          {/* 1st Place — dramatically larger */}
          <div className="py-10 lg:py-0 lg:px-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-[#E2FF00] uppercase">
                01 / GRAND CHAMPION
              </span>
              <div className="flex-1 h-px bg-[#E2FF00]/20" />
            </div>
            <span
              className="font-extrabold text-[#E2FF00] leading-none block"
              style={{ fontSize: 'clamp(4.5rem, 11vw, 10rem)', lineHeight: 0.9 }}
            >
              2,000
            </span>
            <span className="text-3xl font-extrabold text-[#E2FF00]/60 uppercase tracking-widest mt-2 block">SEK</span>
            <div className="mt-6 space-y-1 text-[11px] font-mono text-white/50 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-4 h-px bg-[#E2FF00]/40 inline-block" />
                GOLD MEDAL
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-px bg-[#E2FF00]/40 inline-block" />
                CHAMPIONSHIP TROPHY
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-px bg-[#E2FF00]/40 inline-block" />
                NATIONAL COMPETITION PASS
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="py-10 lg:py-0 lg:pl-14">
            <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-white/30 uppercase block mb-6">
              03 / THIRD PLACE
            </span>
            <span
              className="font-extrabold text-white/30 leading-none block"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}
            >
              1,000
            </span>
            <span className="text-lg font-extrabold text-white/20 uppercase tracking-widest mt-1 block">SEK</span>
            <div className="mt-6 space-y-1 text-[11px] font-mono text-white/20 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-4 h-px bg-white/10 inline-block" />
                BRONZE MEDAL
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-px bg-white/10 inline-block" />
                CHAMPIONSHIP TROPHY
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom annotation strip */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">
          <span>CERTIFICATES AWARDED TO ALL PARTICIPANTS</span>
          <span>CATEGORIES: JUNIOR · SENIOR · PER DIVISION</span>
        </div>
      </div>
    </section>
  );
};
