import React from 'react';

interface RoboFinalCtaProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const RoboFinalCta: React.FC<RoboFinalCtaProps> = ({
  onOpenRegister,
  onNavigate,
}) => {
  return (
    <section className="w-full bg-[#0052FF] text-white overflow-hidden relative">
      {/* Large ghost text background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-extrabold uppercase text-white/5 whitespace-nowrap leading-none tracking-tighter"
          style={{ fontSize: 'clamp(6rem, 20vw, 18rem)' }}
        >
          2026
        </span>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left */}
          <div className="lg:col-span-8">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-white/50 uppercase block mb-6">
              SWEDEN CHAMPIONSHIP LEAGUE · VÄSTERÅS 2026
            </span>
            <h2
              className="font-extrabold uppercase leading-none tracking-tighter text-white"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)', lineHeight: 0.9 }}
            >
              Ready to<br />
              Compete?
            </h2>
            <p className="text-base text-white/70 font-light mt-6 max-w-md leading-relaxed">
              Join Sweden's official student robotics league. Register your school or student team today and build something real.
            </p>
          </div>

          {/* Right — CTAs */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <button
              onClick={onOpenRegister}
              className="w-full py-4 bg-white text-[#0052FF] font-bold text-xs tracking-[0.2em] uppercase hover:bg-slate-100 transition-colors"
            >
              JOIN THE COMPETITION →
            </button>
            <button
              onClick={() => onNavigate('for-schools')}
              className="w-full py-4 bg-transparent text-white font-bold text-xs tracking-[0.2em] uppercase border border-white/40 hover:border-white transition-colors"
            >
              FOR SCHOOLS →
            </button>
            <p className="text-[10px] font-mono text-white/40 text-center uppercase tracking-widest pt-1">
              REGISTRATION OPEN · 2026 SEASON
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
