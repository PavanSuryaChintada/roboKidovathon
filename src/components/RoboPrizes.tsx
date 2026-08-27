import React from 'react';

export const RoboPrizes: React.FC = () => {
  return (
    <section className="w-full bg-[#07111F] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Top strip */}
        <div className="border-b border-white/8 py-5 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-white/25 uppercase">
            PRIZE ALLOCATION · VÄSTERÅS CITY FINALS 2026
          </span>
          <span className="text-[10px] font-mono text-white/15 uppercase tracking-widest hidden sm:block">
            PER DIVISION · JUNIOR & SENIOR
          </span>
        </div>

        {/* Dramatic heading block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/8 py-16 md:py-20">
          <div className="lg:col-span-7">
            <h2
              className="font-extrabold uppercase leading-none tracking-tighter text-white"
              style={{ fontSize: 'clamp(5rem, 14vw, 14rem)', lineHeight: 0.85 }}
            >
              PRIZE<br />
              <span className="text-[#E2FF00]">POOL</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end pl-0 lg:pl-10 mt-8 lg:mt-0">
            <p className="text-sm text-white/35 leading-relaxed max-w-xs" style={{ fontWeight: 300 }}>
              Official prize allocations awarded at the Västerås City Finals to top-ranked competitors across both Junior and Senior divisions.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-8 h-px bg-[#E2FF00]/30" />
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">ABB VENUE · MARCH 21, 2026</span>
            </div>
          </div>
        </div>

        {/* Prize breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/8 py-16 md:py-20">
          {/* 2nd */}
          <div className="pb-10 lg:pb-0 lg:pr-14">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[9px] font-mono font-bold text-white/20 border border-white/10 px-2 py-0.5 uppercase">RANK 02</span>
              <span className="text-[9px] font-mono text-white/20 uppercase tracking-wider">SECOND PLACE</span>
            </div>
            <span className="font-extrabold text-white/35 leading-none block" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1 }}>
              1,400
            </span>
            <span className="text-lg font-extrabold text-white/20 uppercase tracking-[0.2em] mt-1 block">SEK</span>
            <div className="mt-6 space-y-2 text-[10px] font-mono text-white/20 uppercase">
              {['Silver Medal', 'Championship Trophy', 'Finalist Certificate'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-3 h-px bg-white/10 inline-block" />{item}
                </div>
              ))}
            </div>
          </div>

          {/* 1st — dominant */}
          <div className="py-10 lg:py-0 lg:px-14">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[9px] font-mono font-bold text-[#E2FF00] border border-[#E2FF00]/30 px-2 py-0.5 uppercase">RANK 01</span>
              <span className="text-[9px] font-mono text-[#E2FF00]/60 uppercase tracking-wider">GRAND CHAMPION</span>
              <div className="flex-1 h-px bg-[#E2FF00]/15" />
            </div>
            <span className="font-extrabold text-[#E2FF00] leading-none block" style={{ fontSize: 'clamp(4.5rem, 11vw, 10rem)', lineHeight: 0.9 }}>
              2,000
            </span>
            <span className="text-2xl font-extrabold text-[#E2FF00]/40 uppercase tracking-[0.2em] mt-2 block">SEK</span>
            <div className="mt-6 space-y-2 text-[10px] font-mono text-white/35 uppercase">
              {['Gold Medal & Grand Trophy', 'National Competition Qualification', 'Champions Certificate', 'Event Media Feature'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-3 h-px bg-[#E2FF00]/25 inline-block" />{item}
                </div>
              ))}
            </div>
          </div>

          {/* 3rd */}
          <div className="pt-10 lg:pt-0 lg:pl-14">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[9px] font-mono font-bold text-white/15 border border-white/8 px-2 py-0.5 uppercase">RANK 03</span>
              <span className="text-[9px] font-mono text-white/15 uppercase tracking-wider">THIRD PLACE</span>
            </div>
            <span className="font-extrabold text-white/20 leading-none block" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}>
              1,000
            </span>
            <span className="text-base font-extrabold text-white/12 uppercase tracking-[0.2em] mt-1 block">SEK</span>
            <div className="mt-6 space-y-2 text-[10px] font-mono text-white/15 uppercase">
              {['Bronze Medal', 'Championship Trophy', 'Finalist Certificate'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-3 h-px bg-white/8 inline-block" />{item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom footnote */}
        <div className="border-t border-white/8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-white/15 uppercase tracking-widest">
          <span>CERTIFICATES ISSUED TO ALL REGISTERED PARTICIPANTS</span>
          <span>JUDGED BY INDEPENDENT TECHNOLOGY EXPERT PANEL</span>
        </div>
      </div>
    </section>
  );
};
