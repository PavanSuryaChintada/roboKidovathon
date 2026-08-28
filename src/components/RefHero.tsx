import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroVideo from '../uhd_25fps.mp4';

interface RefHeroProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const RefHero: React.FC<RefHeroProps> = ({
  onOpenRegister,
  onNavigate,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay error:', err);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[620px] flex items-center justify-center text-center px-6 sm:px-10 overflow-hidden select-none bg-[#070709]">
      
      {/* ── FULL VIEWPORT BACKGROUND VIDEO (z-0) ── */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          src={heroVideo}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/uhd_25fps.mp4" type="video/mp4" />
        </video>

        {/* Minimal Neutral Scrim for Crisp Contrast (z-[1]) */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/40 pointer-events-none z-[1]" />
      </div>

      {/* ── SCANDINAVIAN MINIMALIST HERO CONTENT (z-10) ── */}
      <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center space-y-6 relative z-10">
        
        {/* Minimal Monospace Event Stamp */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 text-[11px] font-mono-code font-medium tracking-[0.2em] text-slate-300 uppercase"
        >
          <span>SWEDEN · MARCH 21, 2026 · ABB ARENA</span>
        </motion.div>

        {/* Scandinavian Minimalist Headline (Pure White, Crisp Geometric Sans) */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-[-0.03em] uppercase leading-[1.02] text-center drop-shadow-xl"
        >
          ROBOTICS REDEFINED
        </motion.h1>

        {/* Clean Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-300 font-normal max-w-xl mx-auto leading-relaxed drop-shadow-md"
        >
          Turnkey on-site robotics workshops delivered directly into Swedish classrooms, culminating at the Västerås City Finals.
        </motion.p>

        {/* ── EXACTLY 2 SLUSH-STYLE ACTION PILL BUTTONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2, boxShadow: '0 0 25px rgba(34, 197, 94, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenRegister}
            className="btn-pill-lime text-xs sm:text-sm font-bold py-3.5 px-8 flex items-center gap-2 shadow-2xl"
          >
            <span>REGISTER SCHOOL COHORT</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('for-schools')}
            className="btn-pill-outline text-xs sm:text-sm font-semibold py-3.5 px-8 flex items-center gap-2 shadow-xl bg-black/40 backdrop-blur-md border-white/20 hover:border-white/50"
          >
            <span>SCHOOLS & EDUCATORS</span>
          </motion.button>
        </motion.div>

      </div>

    </section>
  );
};
