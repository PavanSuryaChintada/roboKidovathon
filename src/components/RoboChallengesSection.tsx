import React from 'react';

interface RoboChallengesSectionProps {
  onNavigate: (route: string) => void;
}

export const RoboChallengesSection: React.FC<RoboChallengesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full bg-white text-[#0B1020]">
      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 pt-20 md:pt-28 pb-10">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#0052FF] uppercase block mb-4">
          04 / ARENA FORMATS
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2
            className="font-extrabold uppercase leading-none tracking-tight text-[#0B1020]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 0.95 }}
          >
            The Competition<br />Tracks.
          </h2>
          <button
            onClick={() => onNavigate('challenges')}
            className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#0052FF] border-b border-[#0052FF] pb-0.5 hover:opacity-70 transition-opacity self-start sm:self-end shrink-0"
          >
            VIEW FULL RULEBOOK →
          </button>
        </div>
      </div>

      {/* ── ROBO-SPRINT Panel ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 border-t border-slate-200">
        {/* Left — blue color block */}
        <div className="lg:col-span-5 bg-[#0052FF] px-8 sm:px-12 py-14 md:py-20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-white/60 uppercase">
                JUNIOR DIVISION · UP TO AGE 15
              </span>
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-white/60 uppercase border border-white/30 px-2 py-0.5">
                ⏱ 3 MIN
              </span>
            </div>
            <h3
              className="font-extrabold uppercase leading-none tracking-tighter text-white"
              style={{ fontSize: 'clamp(3rem, 6vw, 7rem)', lineHeight: 0.85 }}
            >
              ROBO-<br />SPRINT
            </h3>
            <p className="text-sm text-white/70 font-light mt-4 max-w-xs leading-relaxed">
              Air-hockey ball passing arena. Pass as many balls as possible into the opponent's court within 3 minutes.
            </p>
          </div>
          <div className="mt-10 space-y-3 text-xs font-mono text-white/60 uppercase">
            <div className="flex justify-between border-t border-white/20 pt-3">
              <span>ROBOT LIMIT</span>
              <span className="text-white font-bold">1.5 FT × 1.5 FT</span>
            </div>
            <div className="flex justify-between border-t border-white/20 pt-3">
              <span>SCORING</span>
              <span className="text-white font-bold">FEWEST BALLS WINS</span>
            </div>
            <div className="flex justify-between border-t border-white/20 pt-3">
              <span>CATEGORY</span>
              <span className="text-white font-bold">JUNIOR LEAGUE</span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('challenges')}
            className="mt-10 self-start text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white border-b border-white/50 pb-0.5 hover:border-white transition-colors"
          >
            EXPLORE ROBO-SPRINT →
          </button>
        </div>

        {/* Right — image */}
        <div className="lg:col-span-7 relative overflow-hidden min-h-[320px] lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=900&q=85"
            alt="Robo-Sprint competition arena"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0052FF]/30 pointer-events-none" />
          {/* Large background number */}
          <div className="absolute bottom-4 right-6 text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase">
            [ ARENA FORMAT 01 · JUNIOR ]
          </div>
        </div>
      </div>

      {/* ── ROBO-PRECISION Panel ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 border-t border-slate-200">
        {/* Left — image */}
        <div className="lg:col-span-7 relative overflow-hidden min-h-[320px] lg:min-h-0 order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85"
            alt="Robo-Precision cup stacking arena"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B1020]/30 pointer-events-none" />
          <div className="absolute bottom-4 left-6 text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase">
            [ ARENA FORMAT 02 · SENIOR ]
          </div>
        </div>

        {/* Right — dark color block */}
        <div className="lg:col-span-5 bg-[#0B1020] px-8 sm:px-12 py-14 md:py-20 flex flex-col justify-between order-1 lg:order-2">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-white/40 uppercase">
                SENIOR DIVISION · AGE 15+
              </span>
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase border border-white/20 px-2 py-0.5">
                ⏱ 5 MIN
              </span>
            </div>
            <h3
              className="font-extrabold uppercase leading-none tracking-tighter text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)', lineHeight: 0.85 }}
            >
              ROBO-<br />PRECISION
            </h3>
            <p className="text-sm text-white/50 font-light mt-4 max-w-xs leading-relaxed">
              5-level cup tower stacking arena. Build the tallest, most stable tower using a robotic grabber arm. Zero manual touch.
            </p>
          </div>
          <div className="mt-10 space-y-3 text-xs font-mono text-white/40 uppercase">
            <div className="flex justify-between border-t border-white/10 pt-3">
              <span>ROBOT LIMIT</span>
              <span className="text-white font-bold">2.5 FT × 2.5 FT</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-3">
              <span>SCORING</span>
              <span className="text-white font-bold">TALLEST TOWER WINS</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-3">
              <span>CATEGORY</span>
              <span className="text-[#E2FF00] font-bold">SENIOR LEAGUE</span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('challenges')}
            className="mt-10 self-start text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/60 border-b border-white/20 pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            EXPLORE ROBO-PRECISION →
          </button>
        </div>
      </div>
    </section>
  );
};
