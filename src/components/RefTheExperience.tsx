import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">THE</span>
            <span className="text-white block">EXPERIENCE</span>
          </h2>
        </motion.div>

        {/* ── 3 TALL POSTER CARDS WITH BOLD LABELS & MOTION ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.03, rotate: 0 }}
              className={`relative overflow-hidden rounded-3xl border border-white/15 bg-[#121216] shadow-2xl transition-all duration-300 cursor-pointer ${card.tilt}`}
              style={{ minHeight: '440px' }}
            >
              <img
                src={card.image}
                alt={card.label}
                className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-transform duration-700 hover:scale-110"
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
            </motion.div>
          ))}
        </div>

        {/* ── VIBRANT SPLIT FEATURE BANNER (Pink/Coral Card Matching Reference) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.3)' }}
          className="rounded-3xl overflow-hidden border border-white/15 grid grid-cols-1 lg:grid-cols-12 bg-[#FF3366] text-black shadow-2xl transition-all"
        >
          {/* Left Visual Photo */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-0 bg-black overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=900&q=80"
              alt="Live tournament match"
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Coral Content Box */}
          <div className="lg:col-span-6 p-8 sm:p-14 flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h3
              className="font-headline font-black uppercase text-black leading-[1.02] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              ANY ROBOT,<br />
              ANY ARENA.
            </h3>
            <p className="text-xs sm:text-sm text-black/80 font-medium leading-relaxed max-w-md pt-1">
              From high-velocity differential ball ejectors to 5-level autonomous cup stacking cranes. Standardized match arenas, electronic buzzer systems, and certified referee scoring.
            </p>
          </div>
        </motion.div>

        {/* Centered Pill Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('challenges')}
            className="btn-pill-white text-xs sm:text-sm font-bold py-3.5 px-8 shadow-xl"
          >
            <span>TOURNAMENT TRACK DETAILS</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
