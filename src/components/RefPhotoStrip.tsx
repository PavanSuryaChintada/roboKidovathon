import React from 'react';

export const RefPhotoStrip: React.FC = () => {
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80',
      title: 'CIRCUIT DESIGN',
    },
    {
      src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80',
      title: 'TEAMWORK',
    },
    {
      src: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=400&q=80',
      title: 'AUTONOMOUS BOTS',
    },
    {
      src: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=400&q=80',
      title: 'ARENA DUELS',
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
      title: 'FIRMWARE CODE',
    },
    {
      src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80',
      title: 'SERVO TESTING',
    },
    {
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
      title: 'PODIUM VICTORY',
    },
  ];

  return (
    <section className="w-full bg-[#070709] text-white py-24 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* ── SECTION TITLE: RECENT (Outline) CASE STUDIES (Solid) ── */}
        <div>
          <h2
            className="font-headline font-black uppercase tracking-tight leading-[0.88]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">TOURNAMENT</span>
            <span className="text-white block">HIGHLIGHTS</span>
          </h2>
        </div>

        {/* ── 7-COLUMN TALL NARROW VERTICAL PHOTO STRIP ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl h-[340px] sm:h-[400px] border border-white/10 bg-[#121216] group"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-75 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-3 right-3 text-center">
                <span className="font-headline font-bold text-xs uppercase tracking-wider text-white block drop-shadow-md">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
