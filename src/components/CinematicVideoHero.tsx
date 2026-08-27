import React from 'react';

interface CinematicVideoHeroProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const CinematicVideoHero: React.FC<CinematicVideoHeroProps> = ({
  onOpenRegister,
  onNavigate: _onNavigate,
}) => {
  const stats = [
    { value: '15+',   label: 'SCHOOLS' },
    { value: '600+',  label: 'STUDENTS' },
    { value: '45+',   label: 'TEACHERS' },
    { value: '2000',  label: 'SEK 1ST PRIZE' },
  ];

  return (
    <section
      className="relative w-full min-h-screen flex flex-col overflow-hidden select-none"
      style={{
        background: 'linear-gradient(170deg, #C8EAFF 0%, #E4F4FF 30%, #F0F9FF 55%, #EAF5EC 75%, #F5F2EE 100%)',
      }}
    >
      {/* Subtle circuit / grid overlay for tech texture */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.04 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#07111F" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Decorative blobs — left and right */}
      <div
        className="absolute top-16 left-[-8%] w-[40vw] h-[40vw] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,82,255,0.10) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-10 right-[-6%] w-[35vw] h-[35vw] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(226,255,0,0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* ══ CENTRE CONTENT ══ */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-24 pb-6">

        {/* Event tag */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#07111F]/15 bg-white/60 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] inline-block" />
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#07111F]/60 uppercase">
            OFFICIAL SWEDEN CHAMPIONSHIP LEAGUE
          </span>
        </div>

        {/* Sub-brand */}
        <p className="text-sm sm:text-base font-light tracking-[0.15em] text-[#07111F]/50 uppercase mb-2">
          robo-kidovation
        </p>

        {/* Main event name — huge display type */}
        <h1
          className="font-extrabold uppercase leading-none tracking-tighter text-[#07111F] relative"
          style={{ fontSize: 'clamp(4rem, 14vw, 13rem)', lineHeight: 0.88 }}
        >
          ROBO-KIDO
          <br />
          <span className="relative inline-block">
            A-THON
            {/* Yellow accent underline */}
            <span
              className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-1.5 sm:h-2.5 bg-[#E2FF00] -z-10"
              style={{ bottom: '8%', height: '12%' }}
            />
          </span>
        </h1>

        {/* Year badge overlapping */}
        <div
          className="mt-3 inline-block bg-[#07111F] text-[#E2FF00] font-mono font-bold tracking-[0.3em] text-sm px-4 py-1"
          style={{ letterSpacing: '0.3em' }}
        >
          2026
        </div>

        {/* Date + Location */}
        <p className="mt-6 text-sm sm:text-base font-bold tracking-[0.15em] uppercase text-[#07111F]">
          LIVE IN VÄSTERÅS · SWEDEN | FEBRUARY – MARCH 2026
        </p>

        {/* Primary CTA */}
        <button
          onClick={onOpenRegister}
          className="mt-6 px-8 py-3.5 bg-[#07111F] text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#0052FF] transition-colors duration-200"
        >
          REGISTER NOW →
        </button>

        {/* Stats row — centered, Snowflake style */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div className="flex flex-col items-center">
                <span
                  className="font-extrabold text-[#07111F] leading-none"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                >
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#07111F]/45 mt-1">
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-8 bg-[#07111F]/15" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ══ BOTTOM ILLUSTRATION STRIP — robots / students scene ══ */}
      <div className="relative z-10 w-full overflow-hidden" style={{ height: 'clamp(160px, 22vw, 280px)' }}>
        {/* Wide robotics photo strip at bottom */}
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80"
          alt="Students building robots"
          className="absolute bottom-0 left-0 w-full object-cover object-top"
          style={{ height: '100%', objectPosition: 'center 20%' }}
        />
        {/* Fade top of image into hero */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #F0F9FF 0%, rgba(240,249,255,0.6) 30%, transparent 80%)',
          }}
        />
        {/* Bottom location strip */}
        <div className="absolute bottom-0 left-0 right-0 py-3 px-6 sm:px-10 flex items-center justify-between bg-[#07111F]/80 backdrop-blur-sm">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-white/50 uppercase">
            [ VÄSTERÅS, SWEDEN · ABB VENUE · MARCH 21, 2026 ]
          </span>
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-white/50 uppercase hidden sm:block">
            JUNIOR & SENIOR DIVISIONS
          </span>
        </div>
      </div>
    </section>
  );
};
