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
    <div className="w-full bg-white text-[#07111F] pt-28 pb-20 select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono-code font-bold tracking-wider text-[#0052FF] uppercase mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        <div className="border-b border-[#07111F]/10 pb-12">
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#0052FF] uppercase block mb-3">
            OFFICIAL TECHNICAL RULEBOOK // 2026 SEASON
          </span>
          <h1
            className="font-display font-black uppercase leading-none tracking-tight text-[#07111F]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            Tournament<br />
            <span className="text-[#0052FF]">Rulebook.</span>
          </h1>
          <p className="mt-4 text-base text-[#4A5568] font-light max-w-2xl leading-relaxed">
            Detailed specifications, dimensions, scoring rubrics, and referee guidelines for the 2026 Robo-Kido-A-Thon Västerås Championship.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {COMPETITION_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="border border-[#07111F]/15 rounded-[2px] overflow-hidden"
            >
              <div className={`p-8 sm:p-12 ${cat.id === 'robo-sprint' ? 'bg-[#0052FF] text-white' : 'bg-[#07111F] text-white'}`}>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] bg-white/20 px-3 py-1 rounded-[2px] uppercase">
                    {cat.code} // {cat.division}
                  </span>
                  <span className="text-xs font-mono-code text-white/80">
                    DURATION: {cat.duration}
                  </span>
                </div>

                <h2
                  className="font-display font-black uppercase tracking-tight text-white leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
                >
                  {cat.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white/90 font-light max-w-xl">
                  {cat.objective}
                </p>
              </div>

              <div className="p-8 sm:p-12 bg-[#F8F9FA] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-[#07111F]/10">
                {cat.specs.map((s) => (
                  <div key={s.label} className="p-4 bg-white border border-[#07111F]/10 rounded-[2px] space-y-1">
                    <span className="block text-[9px] font-mono-code font-bold text-[#0052FF] uppercase">
                      {s.label}
                    </span>
                    <span className="block text-xs font-display font-bold text-[#07111F] uppercase">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-8 sm:p-12 bg-white grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h3 className="font-display font-black text-lg uppercase tracking-wider text-[#07111F] flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#0052FF]" />
                    <span>MANDATORY REGULATIONS</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0052FF] font-bold mt-0.5">•</span>
                      <span>Chassis must stay strictly within {cat.dimensions} at match start.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0052FF] font-bold mt-0.5">•</span>
                      <span>12V DC maximum low-voltage battery limit across all powertrains.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0052FF] font-bold mt-0.5">•</span>
                      <span>{cat.keyRule}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0052FF] font-bold mt-0.5">•</span>
                      <span>Referees hold absolute authority over arena resets and buzzer decisions.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display font-black text-lg uppercase tracking-wider text-[#07111F] flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-[#E2FF00] bg-[#07111F] p-0.5 rounded-[2px]" />
                    <span>SCORING & ADVANCEMENT</span>
                  </h3>
                  <div className="p-4 bg-[#F8F9FA] border border-[#07111F]/10 rounded-[2px] space-y-2">
                    <p className="text-xs sm:text-sm text-[#07111F] font-semibold">
                      {cat.scoring}
                    </p>
                    <p className="text-xs text-[#4A5568] font-light">
                      Winning teams advance through intra-school qualifiers to the central Västerås City Finals at the ABB Venue on March 21, 2026.
                    </p>
                  </div>
                  <button
                    onClick={onOpenRegister}
                    className="btn-electric-primary text-xs py-3.5 px-6"
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
