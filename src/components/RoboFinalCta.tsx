import React from 'react';

export const RoboFinalCta: React.FC<{
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}> = ({ onOpenRegister, onNavigate }) => {
  return (
    <section className="w-full bg-[#07111F] text-white relative overflow-hidden">
      {/* Ghost 2026 bg */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-extrabold uppercase text-white/[0.025] whitespace-nowrap leading-none tracking-tighter"
          style={{ fontSize: 'clamp(8rem, 22vw, 20rem)' }}
        >
          2026
        </span>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Top label */}
        <div className="border-b border-white/8 py-5">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-white/25 uppercase">
            OPEN FOR REGISTRATION · VÄSTERÅS · SWEDEN · 2026
          </span>
        </div>

        <div className="py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left */}
          <div className="lg:col-span-8">
            <h2
              className="font-extrabold uppercase leading-none tracking-tighter text-white"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 8rem)', lineHeight: 0.88 }}
            >
              Ready to<br />
              <span className="text-[#E2FF00]">Compete?</span>
            </h2>
            <p className="text-base text-white/35 mt-6 max-w-md leading-relaxed" style={{ fontWeight: 300 }}>
              Join Sweden's leading student robotics championship. Register your institution or student team for the 2026 season. Engineering starts in February.
            </p>

            <div className="mt-8 flex flex-wrap gap-8 border-t border-white/8 pt-8">
              {[
                { label: 'REGISTRATION DEADLINE', val: 'JANUARY 2026' },
                { label: 'ENGINEERING WORKSHOPS', val: 'FEBRUARY 2026' },
                { label: 'CITY FINALS', val: 'MARCH 21, 2026' },
              ].map((item) => (
                <div key={item.label}>
                  <span className="block text-[9px] font-mono font-bold tracking-[0.2em] text-white/25 uppercase mb-1">{item.label}</span>
                  <span className="block text-sm font-bold text-white uppercase tracking-wide">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTAs */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={onOpenRegister}
              className="w-full py-4 bg-[#E2FF00] text-[#07111F] font-bold text-xs tracking-[0.2em] uppercase hover:bg-yellow-200 transition-colors"
            >
              REGISTER NOW →
            </button>
            <button
              onClick={() => onNavigate('for-schools')}
              className="w-full py-4 bg-transparent text-white font-bold text-xs tracking-[0.2em] uppercase border border-white/15 hover:border-white/50 transition-colors"
            >
              INSTITUTIONAL PARTNERSHIP →
            </button>
            <button
              onClick={() => onNavigate('challenges')}
              className="w-full py-4 bg-transparent text-white/40 font-bold text-xs tracking-[0.2em] uppercase hover:text-white/70 transition-colors"
            >
              VIEW TECHNICAL RULEBOOK →
            </button>
            <p className="text-[9px] font-mono text-white/15 text-center uppercase tracking-widest pt-2">
              ROBO-KIDOVATION · SWEDEN LEAGUE · 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
