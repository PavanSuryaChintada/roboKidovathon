import React from 'react';

interface CinematicVideoHeroProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const CinematicVideoHero: React.FC<CinematicVideoHeroProps> = ({
  onOpenRegister,
  onNavigate: _onNavigate,
}) => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col overflow-hidden bg-[#0A0A0A] text-white select-none">
      {/* Full-Screen Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ opacity: 0.55 }}
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

      {/* Dark Gradient Overlay — top-to-bottom + slight vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.15) 40%, rgba(10,10,10,0.55) 80%, rgba(10,10,10,0.90) 100%)'
      }} />

      {/* === CENTER HEADLINE === */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 sm:px-8 text-center">
        <h1
          className="leading-tight tracking-tight text-center"
          style={{
            fontFamily: 'Inter, Manrope, sans-serif',
            fontSize: 'clamp(2rem, 5.5vw, 5.5rem)',
            maxWidth: '1100px',
          }}
        >
          <span className="block font-light text-white/70 uppercase">
            SWEDEN'S MOST{' '}
            <span className="font-extrabold text-white">HANDS-ON ROBOTICS</span>
          </span>
          <span className="block font-light text-white/70 uppercase mt-1">
            EVENT AND{' '}
            <span className="font-extrabold text-white">LARGEST YOUTH STEM</span>{' '}
            CHAMPIONSHIP
          </span>
        </h1>
      </div>

      {/* === BOTTOM STRIP — Stats + CTA === */}
      <div className="relative z-20 w-full px-6 sm:px-10 pb-8 sm:pb-10">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-end sm:items-center justify-between gap-6">

          {/* Stats Row */}
          <div className="flex flex-wrap items-end gap-6 sm:gap-10">
            {[
              { value: '15+',   label: 'SCHOOLS' },
              { value: '600+',  label: 'STUDENTS' },
              { value: '45+',   label: 'TEACHERS' },
              { value: '2000',  label: 'SEK 1ST PRIZE' },
              { value: '2026',  label: 'VÄSTERÅS, SWEDEN' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="font-extrabold leading-none text-white"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-medium uppercase tracking-widest mt-0.5"
                  style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpenRegister}
            className="shrink-0 whitespace-nowrap font-semibold text-sm px-7 py-3.5 rounded-md transition-all hover:opacity-90"
            style={{
              backgroundColor: '#0052FF',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.05em',
            }}
          >
            JOIN NOW →
          </button>
        </div>
      </div>

    </section>
  );
};
