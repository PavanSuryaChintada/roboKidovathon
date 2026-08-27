import React from 'react';

interface RoboChallengesSectionProps {
  onNavigate: (route: string) => void;
}

export const RoboChallengesSection: React.FC<RoboChallengesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full bg-[#F5F2EE] text-[#07111F]">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-12 border-b border-[#07111F]/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#0052FF] uppercase block mb-2">
              COMPETITION CATEGORIES
            </span>
            <h2
              className="font-extrabold uppercase leading-none tracking-tighter text-[#07111F]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.95 }}
            >
              Arena Formats
            </h2>
          </div>
          <button
            onClick={() => onNavigate('challenges')}
            className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#07111F]/40 border-b border-[#07111F]/20 pb-0.5 hover:text-[#0052FF] hover:border-[#0052FF] transition-colors self-start sm:self-center"
          >
            TECHNICAL RULEBOOK →
          </button>
        </div>
      </div>

      {/* ── CAT A: ROBO-SPRINT — Yellow identity ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 bg-[#E2FF00] px-8 sm:px-12 py-16 md:py-20 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-[#07111F]/50 uppercase border border-[#07111F]/15 px-2 py-0.5">
                CAT A
              </span>
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#07111F]/50 uppercase">
                JUNIOR DIVISION · ≤ 15 YRS
              </span>
            </div>
            <h3
              className="font-extrabold uppercase leading-none tracking-tighter text-[#07111F]"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 7rem)', lineHeight: 0.85 }}
            >
              ROBO-<br />SPRINT
            </h3>

            <div className="mt-8 space-y-4">
              {[
                { key: 'FORMAT',    val: 'Air-Hockey Ball Transfer · Open Court' },
                { key: 'OBJECTIVE', val: 'Transfer maximum balls to opponent court within time limit' },
                { key: 'DURATION',  val: '3 Minutes per match' },
                { key: 'DIMENSION', val: '≤ 1.5 ft × 1.5 ft · Autonomous drive' },
                { key: 'SCORING',   val: 'Fewest remaining balls in own court at final whistle wins' },
              ].map((row) => (
                <div key={row.key} className="flex gap-4 border-t border-[#07111F]/10 pt-4 first:border-t-0 first:pt-0">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#07111F]/40 uppercase w-20 shrink-0 pt-0.5">{row.key}</span>
                  <span className="text-xs text-[#07111F] font-medium leading-relaxed">{row.val}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => onNavigate('challenges')}
            className="mt-10 self-start text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#07111F] border-b border-[#07111F]/40 pb-0.5 hover:border-[#07111F] transition-colors"
          >
            CATEGORY A RULEBOOK →
          </button>
        </div>
        <div className="lg:col-span-7 relative overflow-hidden min-h-[300px] lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=900&q=85"
            alt="Robo-Sprint competition"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#E2FF00]/25 pointer-events-none" />
          <div className="absolute top-6 right-6">
            <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">[ ARENA FORMAT A ]</span>
          </div>
        </div>
      </div>

      {/* ── CAT B: ROBO-PRECISION — Navy identity ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 border-t border-[#07111F]/10">
        <div className="lg:col-span-7 relative overflow-hidden min-h-[300px] lg:min-h-0 order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85"
            alt="Robo-Precision stacking competition"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#07111F]/35 pointer-events-none" />
          <div className="absolute top-6 left-6">
            <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">[ ARENA FORMAT B ]</span>
          </div>
        </div>
        <div className="lg:col-span-5 bg-[#07111F] px-8 sm:px-12 py-16 md:py-20 flex flex-col justify-between order-1 lg:order-2">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-white/30 uppercase border border-white/15 px-2 py-0.5">
                CAT B
              </span>
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-white/30 uppercase">
                SENIOR DIVISION · 15+ YRS
              </span>
            </div>
            <h3
              className="font-extrabold uppercase leading-none tracking-tighter text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)', lineHeight: 0.85 }}
            >
              ROBO-<br />PRECISION
            </h3>

            <div className="mt-8 space-y-4">
              {[
                { key: 'FORMAT',    val: '5-Level Autonomous Cup Tower Assembly' },
                { key: 'OBJECTIVE', val: 'Construct tallest stable tower with robotic arm — zero manual contact' },
                { key: 'DURATION',  val: '5 Minutes per match' },
                { key: 'DIMENSION', val: '≤ 2.5 ft × 2.5 ft · Precision crane arm required' },
                { key: 'SCORING',   val: 'Tallest, most structurally stable tower at buzzer wins' },
              ].map((row) => (
                <div key={row.key} className="flex gap-4 border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-white/25 uppercase w-20 shrink-0 pt-0.5">{row.key}</span>
                  <span className="text-xs text-white/75 font-medium leading-relaxed">{row.val}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => onNavigate('challenges')}
            className="mt-10 self-start text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/40 border-b border-white/15 pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            CATEGORY B RULEBOOK →
          </button>
        </div>
      </div>
    </section>
  );
};
