import React from 'react';

interface RoboChallengesSectionProps {
  onNavigate: (route: string) => void;
}

export const RoboChallengesSection: React.FC<RoboChallengesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full bg-[#F5F2EE] text-[#07111F]">
      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 pt-20 md:pt-28 pb-10">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#0052FF] uppercase block mb-4">
          04 / ARENA FORMATS
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2
            className="font-extrabold uppercase leading-none tracking-tight text-[#07111F]"
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

      {/* ── ROBO-SPRINT — yellow-led identity ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 border-t border-[#07111F]/10">
        {/* Left — championship yellow color block */}
        <div className="lg:col-span-5 bg-[#E2FF00] px-8 sm:px-12 py-14 md:py-20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-[#07111F]/60 uppercase">
                JUNIOR DIVISION · UP TO AGE 15
              </span>
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#07111F]/60 uppercase border border-[#07111F]/20 px-2 py-0.5">
                ⏱ 3 MIN
              </span>
            </div>
            <h3
              className="font-extrabold uppercase leading-none tracking-tighter text-[#07111F]"
              style={{ fontSize: 'clamp(3rem, 6vw, 7rem)', lineHeight: 0.85 }}
            >
              ROBO-<br />SPRINT
            </h3>
            <p className="text-sm text-[#07111F]/65 font-light mt-4 max-w-xs leading-relaxed">
              Air-hockey ball passing arena. Pass as many balls as possible into the opponent's court within 3 minutes.
            </p>
          </div>
          <div className="mt-10 space-y-3 text-xs font-mono text-[#07111F]/50 uppercase">
            <div className="flex justify-between border-t border-[#07111F]/15 pt-3">
              <span>ROBOT LIMIT</span>
              <span className="text-[#07111F] font-bold">1.5 FT × 1.5 FT</span>
            </div>
            <div className="flex justify-between border-t border-[#07111F]/15 pt-3">
              <span>SCORING</span>
              <span className="text-[#07111F] font-bold">FEWEST BALLS WINS</span>
            </div>
            <div className="flex justify-between border-t border-[#07111F]/15 pt-3">
              <span>CATEGORY</span>
              <span className="text-[#07111F] font-bold">JUNIOR LEAGUE</span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('challenges')}
            className="mt-10 self-start text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#07111F] border-b border-[#07111F]/40 pb-0.5 hover:border-[#07111F] transition-colors"
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
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#E2FF00]/20 pointer-events-none" />
          <div className="absolute bottom-4 right-6 text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase">
            [ ARENA FORMAT 01 · JUNIOR ]
          </div>
        </div>
      </div>

      {/* ── ROBO-PRECISION — blue-led identity ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 border-t border-[#07111F]/10">
        {/* Left — image */}
        <div className="lg:col-span-7 relative overflow-hidden min-h-[320px] lg:min-h-0 order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85"
            alt="Robo-Precision cup stacking arena"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#07111F]/30 pointer-events-none" />
          <div className="absolute bottom-4 left-6 text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase">
            [ ARENA FORMAT 02 · SENIOR ]
          </div>
        </div>

        {/* Right — deep navy block */}
        <div className="lg:col-span-5 bg-[#07111F] px-8 sm:px-12 py-14 md:py-20 flex flex-col justify-between order-1 lg:order-2">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-white/35 uppercase">
                SENIOR DIVISION · AGE 15+
              </span>
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-white/35 uppercase border border-white/15 px-2 py-0.5">
                ⏱ 5 MIN
              </span>
            </div>
            <h3
              className="font-extrabold uppercase leading-none tracking-tighter text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)', lineHeight: 0.85 }}
            >
              ROBO-<br />PRECISION
            </h3>
            <p className="text-sm text-white/45 font-light mt-4 max-w-xs leading-relaxed">
              5-level cup tower stacking arena. Build the tallest, most stable tower using a robotic grabber arm. Zero manual touch.
            </p>
          </div>
          <div className="mt-10 space-y-3 text-xs font-mono text-white/35 uppercase">
            <div className="flex justify-between border-t border-white/8 pt-3">
              <span>ROBOT LIMIT</span>
              <span className="text-white font-bold">2.5 FT × 2.5 FT</span>
            </div>
            <div className="flex justify-between border-t border-white/8 pt-3">
              <span>SCORING</span>
              <span className="text-white font-bold">TALLEST TOWER WINS</span>
            </div>
            <div className="flex justify-between border-t border-white/8 pt-3">
              <span>CATEGORY</span>
              <span className="text-[#0052FF] font-bold">SENIOR LEAGUE</span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('challenges')}
            className="mt-10 self-start text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/50 border-b border-white/20 pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            EXPLORE ROBO-PRECISION →
          </button>
        </div>
      </div>
    </section>
  );
};
