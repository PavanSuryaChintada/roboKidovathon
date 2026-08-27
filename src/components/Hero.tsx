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
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 bg-[#07111F] text-white overflow-hidden select-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-40"
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

      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#07111F] via-[#07111F]/70 to-[#07111F]/50" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#07111F]/90 via-transparent to-[#07111F]/60" />

      <div className="relative z-20 max-w-[1440px] mx-auto w-full my-auto py-8">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[2px] bg-white/[0.08] border border-white/[0.15] backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#E2FF00] shadow-[0_0_8px_#E2FF00]" />
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-white uppercase">
            SWEDEN LEAGUE · VÄSTERÅS 2026 // NATIONAL PILOT
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl"
        >
          <span className="block text-sm sm:text-base md:text-lg font-mono-code font-bold tracking-[0.2em] text-[#0052FF] uppercase mb-2">
            OFFICIAL HANDS-ON STUDENT ROBOTICS CHAMPIONSHIP
          </span>
          <h1
            className="font-display font-extrabold uppercase leading-[0.88] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)' }}
          >
            ROBO-KIDO-A-THON
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#E2FF00] mt-1">
              BUILD. CODE. COMPETE.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 font-light leading-relaxed font-sans"
        >
          Sweden’s premier student engineering tournament. Young innovators build physical autonomous bots, master real microcontroller code, and face off live in municipal arena heats.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-6"
        >
          <div className="p-3 sm:p-4 rounded-[2px] bg-black/60 border border-white/[0.12] backdrop-blur-md flex items-center gap-4 sm:gap-6 divide-x divide-white/10">
            <div className="flex items-center gap-2 pr-2">
              <Calendar className="w-4 h-4 text-[#E2FF00]" />
              <span className="text-[10px] font-mono-code font-bold tracking-wider text-slate-300 uppercase hidden sm:inline">
                CITY FINALS IN:
              </span>
            </div>
            {[
              { val: countdown.days, label: 'DAYS' },
              { val: countdown.hours, label: 'HRS' },
              { val: countdown.minutes, label: 'MIN' },
              { val: countdown.seconds, label: 'SEC' },
            ].map((unit, idx) => (
              <div key={unit.label} className={`flex flex-col items-center ${idx !== 0 ? 'pl-4 sm:pl-6' : ''}`}>
                <span className="font-display font-extrabold text-xl sm:text-2xl text-white leading-none">
                  {unit.val}
                </span>
                <span className="text-[8px] font-mono-code font-bold tracking-widest text-slate-400 uppercase mt-0.5">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-code text-slate-300 bg-white/[0.04] border border-white/[0.08] px-4 py-3 rounded-[2px]">
            <MapPin className="w-4 h-4 text-[#0052FF]" />
            <span>CENTRAL ABB VENUE · VÄSTERÅS</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenRegister}
            className="btn-electric-primary py-4 px-8 text-xs sm:text-sm font-display font-bold tracking-[0.14em]"
          >
            <span>JOIN THE COMPETITION</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('for-schools')}
            className="btn-editorial-ghost-dark py-4 px-8 text-xs sm:text-sm font-display font-bold tracking-[0.14em]"
          >
            <span>FOR SCHOOLS PORTAL →</span>
          </button>
        </motion.div>

      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto w-full pt-8 border-t border-white/[0.1]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { value: '15+', label: 'PARTICIPATING SCHOOLS', sub: 'Västerås Cluster' },
            { value: '600+', label: 'STUDENT COMPETITORS', sub: 'Junior & Senior' },
            { value: '45+', label: 'CERTIFIED EDUCATORS', sub: 'Dedicated Mentors' },
            { value: '2,000 SEK', label: '1ST PLACE PRIZE', sub: '+ Stockholm Pass', isHighlight: true },
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
