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
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0C1222] text-white select-none">
      {/* 100% Width Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover opacity-75 z-0 transition-opacity duration-700 pointer-events-none"
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

      {/* Dark Left-to-Right Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C1222] via-[#0C1222]/85 to-transparent z-10 pointer-events-none" />

      {/* Top Metadata */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-4 sm:px-6 pt-20 sm:pt-24 flex items-center justify-between">
        <div className="text-xs font-mono font-bold tracking-widest text-[#C9CED8] uppercase whitespace-nowrap">
          SWEDEN · VÄSTERÅS · 2026
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 bg-[#1E293B]/80 backdrop-blur-md border border-slate-700 px-3 py-1 rounded-md text-xs font-mono tracking-widest text-[#C9CED8] uppercase whitespace-nowrap">
          INTERNATIONAL YOUTH ROBOTICS LEAGUE
        </div>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-4 sm:px-6 my-auto py-8 md:py-12">
        <div className="max-w-4xl space-y-4 text-left">
          {/* Label Badge */}
          <div className="inline-block bg-[#0052FF]/20 text-[#E2FF00] border border-[#0052FF]/40 text-xs font-mono font-bold px-3.5 py-1 rounded-sm uppercase tracking-wider whitespace-nowrap">
            OFFICIAL 2026 CHAMPIONSHIP
          </div>

          {/* Primary Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none whitespace-nowrap">
            Robo-Kido-A-Thon
          </h1>

          {/* Tagline */}
          <div className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase flex flex-wrap items-center gap-3 whitespace-nowrap">
            <span>BUILD.</span>
            <span className="text-[#0052FF]">CODE.</span>
            <span className="text-[#E2FF00]">COMPETE.</span>
          </div>

          {/* Description (#E2E8F0 High Contrast Copy) */}
          <p className="text-sm sm:text-base md:text-lg text-[#E2E8F0] font-inter max-w-[550px] leading-relaxed pt-1 text-balance font-normal">
            The flagship hands-on robotics championship in Västerås. Students build real robots, program autonomous code logic, and compete in live arena challenges.
          </p>

          {/* Action CTAs (Rectangular 6px radius) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto btn-event-primary text-sm px-7 py-3.5 rounded-md flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>JOIN THE COMPETITION</span>
              <span>→</span>
            </button>
            <button
              onClick={() => onNavigate('for-schools')}
              className="w-full sm:w-auto btn-event-secondary-dark text-sm px-7 py-3.5 rounded-md flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>FOR SCHOOLS</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Information Strip */}
      <div className="relative z-20 w-full border-t border-slate-800 bg-[#0C1222]/95 backdrop-blur-md py-3.5 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#C9CED8] gap-3 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="whitespace-nowrap">[ LOCATION: VÄSTERÅS, SWEDEN ]</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="whitespace-nowrap">[ FORMAT: ARENA MATCHES & CUP STACKING ]</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 font-bold text-white">
            <span className="text-[#E2FF00] whitespace-nowrap">• 15 SCHOOLS</span>
            <span className="whitespace-nowrap">• 600+ STUDENTS</span>
            <span className="whitespace-nowrap">• 2000 SEK 1ST PRIZE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
