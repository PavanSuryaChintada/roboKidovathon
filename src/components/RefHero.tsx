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
    <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center text-center px-6 sm:px-10 overflow-hidden select-none bg-black">
      
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

        {/* Subtle Dark Vignette Scrim (z-[1]) */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/50 pointer-events-none z-[1]" />
      </div>

      {/* ── HERO CONTENT (z-10) ── */}
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center space-y-6 relative z-10">
        
        {/* Top Minimal Category Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] sm:text-xs font-mono-code font-bold tracking-[0.25em] text-[#22C55E] uppercase block drop-shadow-md"
        >
          SWEDEN NATIONAL ROBOTICS CHAMPIONSHIP · 2026
        </motion.span>

        {/* One-Line Impact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="font-headline font-black uppercase text-white tracking-tight leading-none text-center drop-shadow-2xl"
          style={{ fontSize: 'clamp(3.8rem, 9.5vw, 8.5rem)' }}
        >
          ROBOTICS REDEFINED
        </motion.h1>

        {/* Clean Supporting Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed pt-1 drop-shadow-lg"
        >
          Sweden’s premier on-site tournament transforming students into confident engineering champions.
        </motion.p>

        {/* ── EXACTLY 2 HIGH-IMPACT CTA BUTTONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 25px rgba(34, 197, 94, 0.6)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenRegister}
            className="btn-pill-lime text-xs sm:text-sm font-black py-4 px-8 flex items-center gap-2 shadow-2xl"
          >
            <span>REGISTER SCHOOL COHORT</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('for-schools')}
            className="btn-pill-outline text-xs sm:text-sm font-bold py-4 px-8 flex items-center gap-2 shadow-xl bg-black/30 backdrop-blur-md"
          >
            <span>SCHOOLS & EDUCATORS</span>
          </motion.button>
        </motion.div>

      </div>

    </section>
  );
};
