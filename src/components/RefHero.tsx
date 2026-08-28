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
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-center px-6 sm:px-10 overflow-hidden select-none bg-black">
      
      {/* ── FULL VIEWPORT BACKGROUND VIDEO (z-0 - Crisp & Clear) ── */}
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

        {/* Lighter Scrim allowing video motion to shine through (z-[1]) */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/30 pointer-events-none z-[1]" />
      </div>

      {/* ── HERO CONTENT (z-10 - Refined Scale & Elegant Balance) ── */}
      <div className="max-w-[900px] mx-auto flex flex-col items-center justify-center space-y-4 relative z-10">
        
        {/* Top Category Badge */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] sm:text-xs font-mono-code font-bold tracking-[0.2em] text-[#22C55E] uppercase block drop-shadow-md bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10"
        >
          SWEDEN NATIONAL ROBOTICS CHAMPIONSHIP · 2026
        </motion.span>

        {/* Elegant Headline (Balanced scale that lets video dominate) */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="font-headline font-black uppercase text-white tracking-tight leading-tight text-center drop-shadow-2xl"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)' }}
        >
          ROBOTICS REDEFINED
        </motion.h1>

        {/* Clean, Non-Dominating Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-slate-200/90 font-light max-w-lg mx-auto leading-relaxed drop-shadow-md"
        >
          Sweden’s premier on-site tournament transforming students into confident engineering champions.
        </motion.p>

        {/* ── EXACTLY 2 COMPACT ACTION BUTTONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-3"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2, boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenRegister}
            className="btn-pill-lime text-xs sm:text-sm font-bold py-3 px-6 sm:px-7 flex items-center gap-2 shadow-xl"
          >
            <span>REGISTER SCHOOL COHORT</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('for-schools')}
            className="btn-pill-outline text-xs sm:text-sm font-bold py-3 px-6 sm:px-7 flex items-center gap-2 shadow-lg bg-black/40 backdrop-blur-md"
          >
            <span>SCHOOLS & EDUCATORS</span>
          </motion.button>
        </motion.div>

      </div>

    </section>
  );
};
