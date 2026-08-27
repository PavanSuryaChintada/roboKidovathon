import React from 'react';

interface CinematicVideoHeroProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const CinematicVideoHero: React.FC<CinematicVideoHeroProps> = ({
  onOpenRegister,
  onNavigate,
}) => {
  return (
    <section className="relative w-full min-h-[75vh] md:min-h-[82vh] lg:min-h-[86vh] flex flex-col justify-between overflow-hidden bg-slate-950 text-white select-none">
      {/* 100% Width Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover opacity-65 z-0 transition-opacity duration-700"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-robotic-arm-working-in-a-factory-42866-large.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-working-on-a-circuit-board-42878-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle Dark Editorial Vignette Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60 z-10 pointer-events-none" />

      {/* Top Bar Event Tag & Location */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-white">
          <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-ping" />
          <span className="font-bold uppercase">SWEDEN · VÄSTERÅS · 2026</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest text-slate-300 uppercase">
          INTERNATIONAL YOUTH ROBOTICS LEAGUE
        </div>
      </div>

      {/* Hero Content Overlay: Slush-Style Ultra-Condensed Editorial Typography */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 my-auto py-12">
        <div className="max-w-4xl space-y-4 text-left">
          {/* Main League Title */}
          <div className="inline-block font-mono text-xs md:text-sm font-bold tracking-widest text-[#E2FF00] uppercase bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md border border-white/15">
            OFFICIAL 2026 CHAMPIONSHIP
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-syne font-extrabold tracking-tight uppercase text-white leading-none drop-shadow-2xl">
            ROBO-KIDO<span className="text-[#0052FF]">-</span>A<span className="text-[#0052FF]">-</span>THON
          </h1>

          {/* Editorial Tagline */}
          <div className="text-2xl sm:text-4xl md:text-5xl font-syne font-extrabold tracking-tight text-white uppercase flex flex-wrap items-center gap-3">
            <span>BUILD.</span>
            <span className="text-[#0052FF]">CODE.</span>
            <span className="text-[#E2FF00]">COMPETE.</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-dmsans max-w-2xl leading-relaxed pt-2">
            The flagship hands-on robotics championship in Västerås. Elementary school through college teams build real robots, program autonomous code logic, and compete in live stadium arenas.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto btn-event-blue text-sm md:text-base px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <span>JOIN THE COMPETITION</span>
              <span>→</span>
            </button>
            <button
              onClick={() => onNavigate('for-schools')}
              className="w-full sm:w-auto btn-event-secondary text-sm md:text-base px-8 py-4 rounded-xl flex items-center justify-center gap-2"
            >
              <span>FOR SCHOOLS</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Baseline Event Strip */}
      <div className="relative z-20 w-full border-t border-white/15 bg-slate-950/80 backdrop-blur-md py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs sm:text-sm font-mono text-slate-300 gap-4">
          <div className="flex items-center gap-4">
            <span>[VENUES: SWEDEN / VÄSTERÅS]</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">[FORMAT: ARENA MATCHES & STACKING]</span>
          </div>
          <div className="flex items-center gap-3 font-bold text-white">
            <span className="text-[#E2FF00]">● 15 SCHOOLS</span>
            <span>● 600+ STUDENTS</span>
            <span>● 2000 SEK 1ST PRIZE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
