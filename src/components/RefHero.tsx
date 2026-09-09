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
    { value: 'GRADES 4–9', label: 'EXPLORER & ADVANCED' },
    { value: 'SEK 3,000', label: 'PRIZE POOL' },
    { value: '20H', label: 'STEM PROJECT' },
    { value: 'NOV 13', label: 'GRAND FINALE' },
  ];

  return (
    <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-between pt-28 pb-10 px-6 sm:px-12 md:px-16 overflow-hidden select-none bg-white">

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

        {/* ── LIGHT WASH OVERLAY FOR WHITE THEME LEGIBILITY (z-[1]) ── */}
        <div className="absolute inset-0 bg-white/20 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-white/25 pointer-events-none z-[1]" />
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
          className="font-syne uppercase tracking-[0.03em] leading-none text-center drop-shadow-sm whitespace-normal md:whitespace-nowrap px-4"
          style={{ fontSize: 'clamp(1rem, 1.95vw, 1.7rem)' }}
        >
          <span className="text-slate-600 font-medium">SWEDEN’S NEWEST </span>
          <span className="text-[#0A1930] font-extrabold">SCHOOL ROBOTICS LEAGUE</span>
        </motion.h1>

        {/* Line 2: BRINGING SCHOOLS TOGETHER [THROUGH ROBOTICS] (Unbroken) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-syne uppercase tracking-[0.03em] leading-none text-center drop-shadow-sm whitespace-normal md:whitespace-nowrap px-4"
          style={{ fontSize: 'clamp(0.95rem, 1.85vw, 1.6rem)' }}
        >
          <span className="text-slate-600 font-medium">BRINGING SCHOOLS TOGETHER </span>
          <span className="text-[#0A1930] font-extrabold">THROUGH ROBOTICS</span>
        </motion.div>

      </div>

      {/* ── BOTTOM METRICS BAR & CTA (White + Swedish Flag Theme) ── */}
      <div className="max-w-[1360px] mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10 border-t border-[#0A1930]/10 pt-6">

        {/* Left Side: Stats Row */}
        <div className="flex flex-wrap items-baseline gap-6 sm:gap-10 md:gap-12">
          {stats.map((item) => (
            <div key={item.label} className="space-y-0.5">
              <span className="font-syne font-extrabold text-base sm:text-xl text-[#0A1930] block tracking-tight">
                {item.value}
              </span>
              <span className="font-mono-code text-[10px] font-semibold text-slate-500 uppercase tracking-widest block">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenRegister}
            className="px-6 py-3 rounded-lg bg-[#FFCD00] hover:bg-[#E6B800] text-[#0A1930] font-syne font-black text-xs sm:text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2"
          >
            <span>REGISTER COHORT NOW</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('for-schools')}
            className="px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-[#0A1930] border border-[#0A1930]/15 font-syne font-semibold text-xs sm:text-xs tracking-wider uppercase transition-all shadow-sm"
          >
            <span>FOR SCHOOLS</span>
          </motion.button>
        </div>

      </div>

    </section>
  );
};
