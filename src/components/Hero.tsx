import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { METRICS_DATA } from '../data/hackathonData';
import {
  ArrowRight,
  Layers,
  ChevronDown
} from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  // Hackathon Kickoff Date: April 3, 2026 14:00:00 UTC
  const countdown = useCountdown('2026-04-03T14:00:00Z');

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-16 px-6 sm:px-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-indigo-500/10 to-cyan-500/15 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-600/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      {/* Main Center Stage */}
      <div className="max-w-[1440px] mx-auto w-full flex-1 flex flex-col items-center justify-center text-center my-auto">
        
        {/* Eyebrow Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] backdrop-blur-md mb-8 shadow-inner"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="text-[10px] sm:text-xs font-mono-code font-bold tracking-[0.25em] text-slate-300 uppercase">
            GLOBAL INITIATIVE // APRIL 3–5, 2026
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono-code text-indigo-400 bg-indigo-500/15 px-2 py-0.5 rounded border border-indigo-500/30">
            $1.25M ALLOCATION
          </span>
        </motion.div>

        {/* Hero Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-extrabold tracking-tight uppercase leading-[0.88] max-w-6xl"
          style={{ fontSize: 'clamp(2.8rem, 8.5vw, 8rem)' }}
        >
          <span className="block text-white">THE WORLD'S PREMIER</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500 drop-shadow-sm">
            GLOBAL HACKATHON
          </span>
        </motion.h1>

        {/* Subtitle / Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-2xl text-base sm:text-lg text-slate-300 font-light leading-relaxed font-sans"
        >
          Where elite software engineers, frontier researchers, and visionary builders converge for a 48-hour global sprint to architect planet-scale intelligence, autonomous machines, and decentralized protocols.
        </motion.p>

        {/* Live Countdown Timer Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 p-2 sm:p-3 rounded-2xl bg-white/[0.025] border border-white/[0.08] backdrop-blur-xl shadow-2xl"
        >
          <div className="grid grid-cols-4 gap-2 sm:gap-6 divide-x divide-white/[0.07]">
            {[
              { val: countdown.days, label: 'DAYS' },
              { val: countdown.hours, label: 'HOURS' },
              { val: countdown.minutes, label: 'MINUTES' },
              { val: countdown.seconds, label: 'SECONDS' },
            ].map((unit, idx) => (
              <div key={unit.label} className={`flex flex-col items-center px-3 sm:px-6 py-2 ${idx !== 0 ? 'pl-3 sm:pl-6' : ''}`}>
                <span
                  className="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {unit.val}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono-code font-bold tracking-[0.25em] text-slate-400 uppercase mt-1.5">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dual High-Contrast Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-display font-bold tracking-[0.15em] uppercase text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 border border-indigo-400/40 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 group"
          >
            <span>DEPLOY APPLICATION</span>
            <ArrowRight className="w-4 h-4 text-indigo-200 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#tracks"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-display font-semibold tracking-[0.15em] uppercase text-slate-200 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.1] hover:border-white/[0.25] transition-all duration-200 flex items-center justify-center gap-2.5 backdrop-blur-md"
          >
            <Layers className="w-4 h-4 text-slate-400" />
            <span>EXPLORE TRACKS</span>
          </a>
        </motion.div>

      </div>

      {/* Floating Glass Metrics Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-[1440px] mx-auto w-full mt-16 pt-10 border-t border-white/[0.08]"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {METRICS_DATA.map((item, idx) => (
            <div
              key={item.label}
              className="relative p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono-code font-bold tracking-[0.2em] text-slate-400 uppercase">
                  METRIC 0{idx + 1}
                </span>
                {item.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#6366F1]" />
                )}
              </div>
              <div
                className={`font-display font-extrabold text-3xl sm:text-4xl tracking-tight ${
                  item.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-300' : 'text-white'
                }`}
              >
                {item.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wide mt-1">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-400 font-light mt-1.5 leading-relaxed">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Down Scroll Anchor */}
      <div className="flex justify-center mt-8">
        <a
          href="#tracks"
          className="p-2 rounded-full text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
          aria-label="Scroll down to tracks"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

    </section>
  );
};
