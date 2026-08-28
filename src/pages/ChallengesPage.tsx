import React from 'react';
import { COMPETITION_CATEGORIES } from '../data/roboData';
import { ArrowLeft, ArrowRight, ShieldCheck, Trophy } from 'lucide-react';

interface ChallengesPageProps {
  onOpenRegister: () => void;
  onNavigateHome: () => void;
}

export const ChallengesPage: React.FC<ChallengesPageProps> = ({
  onOpenRegister,
  onNavigateHome,
}) => {
  return (
    <div className="w-full min-h-screen bg-[#070709] text-white pt-28 pb-24 px-6 sm:px-10 select-none">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* Back Button */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono-code font-bold tracking-wider text-[#22C55E] uppercase hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        {/* ── HEADER: TOURNAMENT (Outline) RULEBOOK (Solid) ── */}
        <div className="border-b border-white/10 pb-12">
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#22C55E] uppercase block mb-3">
            OFFICIAL TECHNICAL SPECIFICATIONS // 2026 SEASON
          </span>
          
          <h1
            className="font-headline font-black uppercase tracking-tight leading-[0.88]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">TOURNAMENT</span>
            <span className="text-white block">RULEBOOK</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
            Detailed dimensions, powertrain voltage limits, arena coordinates, scoring rubrics, and referee guidelines for the 2026 Robo-Kido-A-Thon Västerås Championship.
          </p>
        </div>

        {/* ── CHALLENGE CARDS ── */}
        <div className="space-y-16">
          {COMPETITION_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="rounded-3xl border border-white/15 bg-[#121216] overflow-hidden shadow-2xl space-y-0"
            >
              {/* Category Header Banner */}
              <div
                className={`p-8 sm:p-12 ${
                  cat.id === 'robo-sprint'
                    ? 'bg-gradient-to-r from-[#0052FF] to-[#06B6D4] text-white'
                    : 'bg-gradient-to-r from-[#FF3366] to-[#7C3AED] text-white'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] bg-black/40 px-3 py-1 rounded-full uppercase border border-white/20">
                    {cat.code} // {cat.division}
                  </span>
                  <span className="text-xs font-mono-code font-bold bg-black/40 px-3 py-1 rounded-full border border-white/20">
                    DURATION: {cat.duration}
                  </span>
                </div>

                <h2
                  className="font-headline font-black uppercase tracking-tight text-white leading-none"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
                >
                  {cat.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white/90 font-light max-w-2xl">
                  {cat.objective}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#0A0A0E] border-b border-white/10">
                {cat.specs.map((s) => (
                  <div key={s.label} className="p-4 rounded-2xl bg-[#121216] border border-white/10 space-y-1">
                    <span className="block text-[9px] font-mono-code font-bold text-[#22C55E] uppercase">
                      {s.label}
                    </span>
                    <span className="block text-xs font-headline font-bold text-white uppercase tracking-wider">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mandatory Regulations & Scoring */}
              <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#121216]">
                <div className="space-y-4">
                  <h3 className="font-headline font-black text-lg sm:text-xl uppercase tracking-wider text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#22C55E]" />
                    <span>MANDATORY REGULATIONS</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#22C55E] font-bold mt-0.5">•</span>
                      <span>Chassis must stay strictly within {cat.dimensions} at match start.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#22C55E] font-bold mt-0.5">•</span>
                      <span>12V DC maximum low-voltage battery limit across all powertrains.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#22C55E] font-bold mt-0.5">•</span>
                      <span>{cat.keyRule}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#22C55E] font-bold mt-0.5">•</span>
                      <span>Referees hold absolute authority over arena resets and buzzer decisions.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-headline font-black text-lg sm:text-xl uppercase tracking-wider text-white flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-[#FACC15]" />
                      <span>SCORING & ADVANCEMENT</span>
                    </h3>
                    <div className="p-4 rounded-2xl bg-[#0A0A0E] border border-white/10 space-y-2">
                      <p className="text-xs sm:text-sm text-white font-semibold">
                        {cat.scoring}
                      </p>
                      <p className="text-xs text-slate-400 font-light">
                        Winning teams advance through intra-school qualifiers to the central Västerås City Finals at the ABB Venue on March 21, 2026.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenRegister}
                    className="btn-pill-lime text-xs font-bold py-3.5 px-8 self-start flex items-center gap-2"
                  >
                    <span>ENROL TEAM FOR {cat.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
