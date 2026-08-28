import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
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

        {/* Lighter Gradient Scrim (z-[1]) */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/35 pointer-events-none z-[1]" />
      </div>

      {/* ── HERO CONTENT (z-10 - Modern Editorial Typography) ── */}
      <div className="max-w-[960px] mx-auto flex flex-col items-center justify-center space-y-5 relative z-10">
        
        {/* Top Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono-code font-bold tracking-[0.2em] text-[#22C55E] uppercase shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>SWEDEN NATIONAL ROBOTICS CHAMPIONSHIP · 2026</span>
        </motion.div>

        {/* Modern Dual-Tone Title Style */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[1.05] drop-shadow-2xl"
        >
          <span>ROBOTICS </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#4ADE80] to-[#22C55E]">
            REDEFINED
          </span>
        </motion.h1>

        {/* Clean Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-200/90 font-light max-w-xl mx-auto leading-relaxed drop-shadow-md"
        >
          On-site tournament workshops empowering Sweden's next generation of mechanical, electrical, and software innovators.
        </motion.p>

        {/* ── EXACTLY 2 HIGH-CONTRAST ACTION BUTTONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 25px rgba(34, 197, 94, 0.55)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenRegister}
            className="btn-pill-lime text-xs sm:text-sm font-bold py-3.5 px-7 flex items-center gap-2 shadow-2xl"
          >
            <span>REGISTER SCHOOL COHORT</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('for-schools')}
            className="btn-pill-outline text-xs sm:text-sm font-bold py-3.5 px-7 flex items-center gap-2 shadow-xl bg-black/40 backdrop-blur-md"
          >
            <span>SCHOOLS & EDUCATORS</span>
          </motion.button>
        </motion.div>

      </div>

    </section>
  );
};
