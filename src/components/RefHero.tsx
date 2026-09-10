import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { roboPrecisionActionWide } from '../assets/images';

interface RefHeroProps {
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
}

export const RefHero: React.FC<RefHeroProps> = ({
  onNavigate,
  onOpenRegister,
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
    <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-between pt-28 pb-8 sm:pb-10 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none bg-[#070709]">

      {/* ── FULL VIEWPORT BACKGROUND VIDEO (z-0) ── */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster={roboPrecisionActionWide}
          className="w-full h-full object-cover scale-[1.36] origin-center"
        >
          <source src="/blix_hero.mp4" type="video/mp4" />
        </video>

        {/* ── CINEMATIC BALANCED OVERLAYS (z-[1]) ── */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none z-[1]" />

        {/* ── AMBIENT LIVE AUDIO TOGGLE (z-[2]) ── */}
        <div className="absolute top-28 right-4 sm:right-8 z-[2]">
          <button
            onClick={toggleSound}
            aria-label={isMuted ? 'Enable video audio' : 'Mute video audio'}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono-code transition-all"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline text-slate-300">SOUND OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#FFCD00]" />
                <span className="hidden sm:inline text-[#FFCD00] font-bold">ARENA AUDIO ON</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── CONTENT: pinned to bottom of screen ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20 pt-28">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">

          {/* LEFT: headline block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <span className="font-mono-code font-bold text-xs sm:text-sm text-[#FFCD00] tracking-[0.25em] uppercase">
              13–14 NOVEMBER 2026 · VÄSTERÅS, SWEDEN
            </span>

            {/* Main headline */}
            <h1
              className="font-headline font-black uppercase text-white tracking-tight leading-[0.95]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
            >
              Build ideas.<br />
              Test them.<br />
              <span className="text-[#FFCD00]">Take them further.</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-xl">
              Västerås Future Innovators — hands-on STEM robotics and the Young Innovators Hackathon,
              built for Swedish schools, grades 4–9 and Gymnasium.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
              <button
                onClick={onOpenRegister}
                className="px-7 py-4 rounded-full bg-[#FFCD00] hover:bg-[#E6B800] text-[#0A1930] font-syne font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <span>REGISTER SCHOOL / TEAM</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('events')}
                className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 font-syne font-bold text-xs sm:text-sm tracking-wider uppercase transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <span>EXPLORE EVENTS</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT: quick-fact pills, bottom-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-wrap gap-2.5 items-end justify-start lg:justify-end"
          >
            {[
              { label: 'GRADES', value: '4–9 + GYM' },
              { label: 'PRIZE POOL', value: 'SEK 3,000' },
              { label: 'PROGRAMME', value: '20H STEM' },
              { label: 'LGR22', value: 'CURRICULUM FIT' },
              { label: 'ARENA', value: '244 × 122 CM' },
              { label: 'FINAL DATE', value: 'NOV 13, 2026' },
            ].map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-0.5 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white"
              >
                <span className="font-mono-code font-bold text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest">
                  {fact.label}
                </span>
                <span className="font-headline font-black text-sm sm:text-base tracking-wide uppercase">
                  {fact.value}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── SCROLL CUE ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

    </section>
  );
};
