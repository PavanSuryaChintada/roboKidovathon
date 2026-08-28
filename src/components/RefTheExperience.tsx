import React from 'react';

interface RefTheExperienceProps {
  onNavigate: (route: string) => void;
  onOpenRegister?: () => void;
}

export const RefTheExperience: React.FC<RefTheExperienceProps> = ({
  onNavigate,
}) => {
  const cards = [
    {
      label: 'PHYSICAL',
      sub: 'REAL HARDWARE & SENSORS',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      tilt: '-rotate-1',
    },
    {
      label: 'AUTONOMOUS',
      sub: 'MICROPYTHON FIRMWARE',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=600&q=80',
      tilt: 'rotate-1',
    },
    {
      label: 'COMPETITIVE',
      sub: 'REFEREED LIVE ARENA',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
      tilt: '-rotate-1',
    },
  ];

  return (
    <section className="w-full bg-[#070709] text-white py-24 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* ── SECTION TITLE: THE (Outline) EXPERIENCE (Solid) ── */}
        <div>
          <h2
            className="font-headline font-black uppercase tracking-tight leading-[0.88]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">THE</span>
            <span className="text-white block">EXPERIENCE</span>
          </h2>
        </div>

        {/* ── 3 TALL POSTER CARDS WITH BOLD LABELS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-3xl border border-white/15 bg-[#121216] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${card.tilt}`}
              style={{ minHeight: '440px' }}
            >
              <img
                src={card.image}
                alt={card.label}
                className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

              {/* Bottom Label Tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="block text-[10px] font-mono-code text-[#22C55E] uppercase font-bold tracking-widest mb-1">
                  {card.sub}
                </span>
                <span
                  className="font-headline font-black text-3xl sm:text-4xl text-white uppercase tracking-wider block drop-shadow-md"
                >
                  {card.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── VIBRANT SPLIT FEATURE BANNER (Pink/Coral Card Matching Reference) ── */}
        <div className="rounded-3xl overflow-hidden border border-white/15 grid grid-cols-1 lg:grid-cols-12 bg-[#FF3366] text-black">
          {/* Left Visual Photo */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-0 bg-black">
            <img
              src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=900&q=80"
              alt="Live tournament match"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Right Coral Content Box */}
          <div className="lg:col-span-6 p-8 sm:p-14 flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h3
              className="font-headline font-black uppercase text-black leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              ANY ROBOT,<br />
              ANY ARENA.
            </h3>
            <p className="text-xs sm:text-sm text-black/80 font-medium leading-relaxed max-w-md">
              From high-velocity differential ball ejectors to 5-level autonomous cup stacking cranes. Standardized match arenas, electronic buzzer systems, and certified referee scoring.
            </p>
          </div>
        </div>

        {/* Centered Pill Trigger */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => onNavigate('challenges')}
            className="btn-pill-white text-xs sm:text-sm font-bold py-3.5 px-8"
          >
            <span>TOURNAMENT TRACK DETAILS</span>
          </button>
        </div>

      </div>
    </section>
  );
};
