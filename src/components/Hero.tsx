import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRegister,
  onNavigate,
}) => {
  const countdown = useCountdown('2026-03-21T09:00:00Z');

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-0 bg-[#000000] text-white overflow-hidden select-none">
      
      {/* ── 1. FULL-BLEED CINEMATIC ROBOTICS VIDEO BACKDROP ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-robotic-arm-working-in-a-factory-42866-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-working-on-a-circuit-board-42878-large.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Controlled Contrast Overlays (Ensures Crisp White Typography) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-[#000000]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/95 via-[#000000]/40 to-[#000000]/80" />
      </div>

      {/* ── 2. MAIN HERO STAGE ── */}
      <div className="relative z-20 max-w-[1440px] mx-auto w-full px-6 sm:px-10 my-auto py-8 sm:py-12">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#0052FF] uppercase">
            ROBO-KIDO-A-THON SVERIGE // VÄSTERÅS 2026
          </span>
          <span className="w-6 h-px bg-white/20" />
          <span className="text-[10px] font-mono-code font-semibold tracking-wider text-slate-400 uppercase hidden sm:inline">
            SWEDISH NATIONAL PILOT
          </span>
        </motion.div>

        {/* Massive Confident Editorial Headline with Balanced Line Wrap */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-5xl"
        >
          <h1
            className="font-display font-black uppercase leading-[0.86] tracking-tight text-white"
            style={{
              fontSize: 'clamp(3rem, 8.5vw, 7.8rem)',
              textWrap: 'balance',
            }}
          >
            The Next Generation<br />
            of Innovators<br />
            Starts Here.
          </h1>
        </motion.div>

        {/* Supporting Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-2xl"
        >
          <div className="flex items-center gap-3 text-xs sm:text-sm font-mono-code font-bold tracking-[0.2em] text-[#0052FF] uppercase mb-2">
            <span>BUILD.</span>
            <span className="text-white/40">/</span>
            <span>CREATE.</span>
            <span className="text-white/40">/</span>
            <span>COMPETE.</span>
          </div>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Sweden’s premier hands-on student robotics championship. Young engineers construct physical autonomous bots, program real microcontroller firmware, and face off live in municipal arena heats.
          </p>
        </motion.div>

        {/* Dual Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenRegister}
            className="btn-conference-primary py-4 px-8 text-xs sm:text-sm font-display font-black tracking-[0.14em]"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('challenges')}
            className="btn-conference-ghost py-4 px-8 text-xs sm:text-sm font-display font-bold tracking-[0.14em]"
          >
            <span>EXPLORE THE CHALLENGES →</span>
          </button>
        </motion.div>

      </div>

      {/* ── 3. BOTTOM EVENT PRODUCTION & INFORMATION STRIP ── */}
      <div className="relative z-20 w-full border-t border-white/10 bg-[#000000]/70 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-between text-xs font-mono-code">
            
            {/* Column 1: Location */}
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-500 uppercase tracking-widest">
                LOCATION & VENUE
              </span>
              <span className="text-slate-200 font-bold uppercase tracking-wider mt-0.5">
                VÄSTERÅS · SWEDEN
              </span>
            </div>

            {/* Column 2: Date & Countdown */}
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-500 uppercase tracking-widest">
                ABB ARENA FINALS
              </span>
              <span className="text-white font-bold uppercase tracking-wider mt-0.5">
                MARCH 21, 2026 · {countdown.days}d {countdown.hours}h {countdown.minutes}m
              </span>
            </div>

            {/* Column 3: Disciplines */}
            <div className="hidden md:flex flex-col">
              <span className="text-[9px] text-slate-500 uppercase tracking-widest">
                DISCIPLINES
              </span>
              <span className="text-slate-200 font-bold uppercase tracking-wider mt-0.5">
                ROBOTICS × AI × CODE × MAKE
              </span>
            </div>

            {/* Column 4: Micro Meta & Scroll */}
            <div className="flex flex-col md:items-end justify-center">
              <span className="text-[9px] font-bold text-[#0052FF] uppercase tracking-widest">
                01 / 04 // LIVE COHORT
              </span>
              <a
                href="#mission"
                className="text-[10px] text-slate-400 hover:text-white uppercase tracking-wider mt-0.5 inline-flex items-center gap-1 transition-colors"
              >
                <span>SCROLL TO EXPLORE</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#0052FF] animate-bounce" />
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
