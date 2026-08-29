import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
    { value: '4', label: 'HOST PARTNERS' },
    { value: 'GRADES 2–9', label: 'JUNIOR & SENIOR' },
    { value: 'SEK 3,000', label: 'PRIZE POOL' },
    { value: '120 MIN', label: 'INTRO WORKSHOP' },
    { value: 'NOV 10', label: 'GRAND FINALE' },
  ];

  return (
    <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-between pt-28 pb-8 sm:pb-10 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none bg-[#070709]">

      {/* ── FULL VIEWPORT BACKGROUND VIDEO (z-0) ── */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          src="/uhd_25fps.mp4"
          className="w-full h-full object-cover"
        />

        {/* ── CINEMATIC BALANCED BLACK OVERLAY (z-[1]) ── */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/35 pointer-events-none z-[1]" />
      </div>

      {/* ── TOP SPACER ── */}
      <div className="relative z-10" />

      {/* ── CENTER SLUSH-STYLE UNBROKEN EDITORIAL TYPOGRAPHY (z-10) ── */}
      <div className="w-full text-center relative z-10 py-6 flex flex-col items-center justify-center space-y-2.5">

        {/* Line 1: SWEDEN'S NEWEST [SCHOOL ROBOTICS LEAGUE] (Unbroken) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-syne uppercase tracking-[0.03em] leading-none text-center drop-shadow-md whitespace-normal md:whitespace-nowrap px-4"
          style={{ fontSize: 'clamp(1rem, 1.95vw, 1.7rem)' }}
        >
          <span className="text-slate-300 font-medium">SWEDEN’S NEWEST </span>
          <span className="text-white font-extrabold">SCHOOL ROBOTICS LEAGUE</span>
        </motion.h1>

        {/* Line 2: BRINGING SCHOOLS TOGETHER [THROUGH ROBOTICS] (Unbroken) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-syne uppercase tracking-[0.03em] leading-none text-center drop-shadow-md whitespace-normal md:whitespace-nowrap px-4"
          style={{ fontSize: 'clamp(0.95rem, 1.85vw, 1.6rem)' }}
        >
          <span className="text-slate-300 font-medium">BRINGING SCHOOLS TOGETHER </span>
          <span className="text-white font-extrabold">THROUGH ROBOTICS</span>
        </motion.div>

      </div>

      {/* ── BOTTOM METRICS BAR & CTA (Guaranteed Single Unbroken Row) ── */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-row items-end justify-between gap-4 sm:gap-6 relative z-10 border-t border-white/10 pt-5 sm:pt-6 overflow-x-auto no-scrollbar">

        {/* Left Side: All 5 Stats in a Strictly Single Horizontal Line */}
        <div className="flex flex-nowrap items-baseline gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 shrink-0">
          {stats.map((item) => (
            <div key={item.label} className="space-y-0.5 shrink-0 whitespace-nowrap">
              <span className="font-syne font-extrabold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white block tracking-tight">
                {item.value}
              </span>
              <span className="font-mono-code text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Side: Action Buttons in a Strictly Single Horizontal Line */}
        <div className="flex flex-nowrap items-center gap-2.5 sm:gap-3 shrink-0 whitespace-nowrap pl-4">
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenRegister}
            className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg bg-[#FFCD00] hover:bg-[#E6B800] text-[#0A1930] font-syne font-black text-[11px] sm:text-xs tracking-wider uppercase transition-all shadow-xl flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0"
          >
            <span>REGISTER COHORT NOW</span>
            <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('for-schools')}
            className="px-3.5 sm:px-4 md:px-5 py-2.5 sm:py-3 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/15 font-syne font-semibold text-[11px] sm:text-xs tracking-wider uppercase transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <span>FOR SCHOOLS</span>
          </motion.button>
        </div>

      </div>

    </section>
  );
};
