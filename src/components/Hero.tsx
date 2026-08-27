import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onNavigate }) => {
  const countdown = useCountdown('2026-03-21T09:00:00Z');

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-14 px-6 sm:px-10 bg-[#07111F] text-white overflow-hidden select-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-45"
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

      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#07111F] via-[#07111F]/70 to-[#07111F]/60" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#07111F]/90 via-[#07111F]/50 to-[#07111F]/70" />

      <div className="relative z-20 max-w-[1440px] mx-auto w-full my-auto py-8">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[2px] bg-white/[0.08] border border-white/[0.15] backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#E2FF00] shadow-[0_0_8px_#E2FF00] animate-pulse" />
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-white uppercase">
            ROBO-KIDO-A-THON // SWEDEN LEAGUE 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl"
        >
          <h1
            className="font-display font-black uppercase leading-[0.86] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)' }}
          >
            The Next<br />
            Generation of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-[#E2FF00]">
              Innovators
            </span><br />
            Starts Here.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono-code text-slate-300"
        >
          <div className="flex items-center gap-1.5 bg-white/[0.05] border border-white/[0.1] px-3 py-1.5 rounded-[2px]">
            <MapPin className="w-3.5 h-3.5 text-[#0052FF]" />
            <span className="font-bold text-white uppercase">VÄSTERÅS / SWEDEN</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/[0.05] border border-white/[0.1] px-3 py-1.5 rounded-[2px]">
            <Calendar className="w-3.5 h-3.5 text-[#E2FF00]" />
            <span className="font-bold text-white uppercase">ABB VENUE · MARCH 21, 2026</span>
          </div>
          <span className="text-slate-400 hidden sm:inline">
            SWEDEN’S PREMIER STUDENT ROBOTICS CHAMPIONSHIP
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenRegister}
            className="btn-volt-primary py-4 px-8 text-xs sm:text-sm font-display font-black tracking-[0.14em]"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('for-schools')}
            className="btn-editorial-ghost-dark py-4 px-8 text-xs sm:text-sm font-display font-bold tracking-[0.14em]"
          >
            <span>FOR SCHOOLS PORTAL →</span>
          </button>

          <div className="sm:ml-4 p-3 rounded-[2px] bg-black/60 border border-white/[0.12] backdrop-blur-md flex items-center gap-3 divide-x divide-white/10">
            <span className="text-[9px] font-mono-code font-bold tracking-wider text-[#E2FF00] uppercase pr-1">
              FINALS IN:
            </span>
            <div className="flex items-center gap-2 pl-3 font-mono-code font-bold text-xs text-white">
              <span>{countdown.days}d</span>
              <span>:</span>
              <span>{countdown.hours}h</span>
              <span>:</span>
              <span>{countdown.minutes}m</span>
              <span>:</span>
              <span className="text-[#E2FF00]">{countdown.seconds}s</span>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto w-full pt-8 border-t border-white/[0.1]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { value: '15+', label: 'PARTICIPATING SCHOOLS', sub: 'Västerås Cluster' },
            { value: '600+', label: 'STUDENT COMPETITORS', sub: 'Junior & Senior' },
            { value: '45+', label: 'CERTIFIED EDUCATORS', sub: 'Dedicated Mentors' },
            { value: '2,000 SEK', label: '1ST PLACE CASH PRIZE', sub: '+ Stockholm National Berth', isHighlight: true },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span
                className={`font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-none ${
                  stat.isHighlight ? 'text-[#E2FF00]' : 'text-white'
                }`}
              >
                {stat.value}
              </span>
              <span className="text-[10px] font-mono-code font-bold tracking-[0.15em] text-slate-300 uppercase mt-1">
                {stat.label}
              </span>
              <span className="text-[10px] text-slate-400 font-light mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
