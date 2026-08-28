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

  const stats = [
    { value: '15+', label: 'SCHOOLS' },
    { value: '600+', label: 'STUDENTS' },
    { value: '100 SEK', label: 'ENTRY FEE' },
    { value: '120 MIN', label: 'WORKSHOP' },
    { value: 'ABB ARENA', label: 'FINALS VENUE' },
  ];

  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-between pt-28 pb-10 px-6 sm:px-12 md:px-16 overflow-hidden select-none bg-[#070709]">
      
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

        {/* Slush-style Ambient Dark Gradient Scrim (z-[1]) */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/60 pointer-events-none z-[1]" />
      </div>

      {/* ── TOP SPACER ── */}
      <div className="relative z-10" />

      {/* ── CENTER SLUSH-STYLE EDITORIAL TYPOGRAPHY (z-10) ── */}
      <div className="max-w-[1400px] mx-auto w-full text-center relative z-10 py-8 space-y-4">
        
        {/* Line 1: SWEDEN'S MOST [INNOVATION-DRIVEN STUDENT LEAGUE] */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans uppercase tracking-[0.02em] leading-[1.15] text-center"
          style={{ fontSize: 'clamp(2rem, 4.4vw, 4.2rem)' }}
        >
          <span className="text-slate-400 font-normal">SWEDEN’S MOST </span>
          <span className="text-white font-extrabold">INNOVATION-DRIVEN STUDENT LEAGUE</span>
        </motion.h1>

        {/* Line 2 (Indented/Stepped Slush Flow): AND [LARGEST SCHOOL ROBOTICS] TOURNAMENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans uppercase tracking-[0.02em] leading-[1.15] text-center"
          style={{ fontSize: 'clamp(1.9rem, 4.2vw, 4rem)' }}
        >
          <span className="text-slate-400 font-normal">AND </span>
          <span className="text-white font-extrabold">LARGEST SCHOOL ROBOTICS </span>
          <span className="text-slate-400 font-normal">TOURNAMENT</span>
        </motion.div>

      </div>

      {/* ── BOTTOM METRICS BAR & CTA (Matching Slush Layout) ── */}
      <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10 border-t border-white/[0.08] pt-6">
        
        {/* Left Side: Stats Row */}
        <div className="flex flex-wrap items-baseline gap-6 sm:gap-10 md:gap-12">
          {stats.map((item) => (
            <div key={item.label} className="space-y-0.5">
              <span className="font-sans font-extrabold text-lg sm:text-2xl text-white block tracking-tight">
                {item.value}
              </span>
              <span className="font-mono-code text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest block">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Side: Slush-Style Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenRegister}
            className="px-6 py-3 rounded-lg bg-[#193B28] hover:bg-[#235338] text-[#4ADE80] border border-[#22C55E]/40 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg flex items-center gap-2"
          >
            <span>REGISTER COHORT NOW</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('for-schools')}
            className="px-5 py-3 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 font-sans font-medium text-xs sm:text-sm tracking-wider uppercase transition-all"
          >
            <span>FOR SCHOOLS</span>
          </motion.button>
        </div>

      </div>

    </section>
  );
};
