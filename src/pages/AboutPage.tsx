import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  onOpenRegister: () => void;
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenRegister,
  onNavigateHome,
}) => {
  return (
    <div className="w-full min-h-screen bg-[#070709] text-white pt-28 pb-24 px-6 sm:px-10 select-none">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono-code font-bold tracking-wider text-[#22C55E] uppercase hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </motion.button>

        {/* ── HEADER: ABOUT THE (Outline) LEAGUE (Solid) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-white/10 pb-12"
        >
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#22C55E] uppercase block mb-3">
            LEAGUE ORIGINS & PHILOSOPHY // SWEDEN 2026
          </span>
          
          <h1
            className="font-headline font-black uppercase tracking-tight leading-[0.88]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">ABOUT THE</span>
            <span className="text-white block">LEAGUE</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
            Evolving the world-renowned Techfest IIT Bombay robotics competition framework into a Scandinavian student engineering championship.
          </p>
        </motion.div>

        {/* ── NARRATIVE BENTO GRID WITH MOTION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="font-headline font-black uppercase text-2xl sm:text-4xl text-white tracking-wide">
              Evolved from Global Engineering Benchmarks
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Techfest IIT Bombay is Asia's largest annual science and technology festival, engaging over 175,000 students worldwide. The Robo-Kidovation model takes this exact hands-on, high-intensity robotics tournament format and adapts it specifically for Swedish school cohorts.
            </p>
            
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Rather than theoretical coding exercises on screens, we place real motors, sensors, microcontrollers, and screwdrivers directly in students' hands. They build, wire, program, iterate, and compete in refereed match arenas.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono-code font-bold text-white">
              <span className="p-3 bg-[#121216] border border-white/15 rounded-2xl flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span>INCLUSIVE GENDER PARITY FOCUS</span>
              </span>
              <span className="p-3 bg-[#121216] border border-white/15 rounded-2xl flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span>SWEDISH CURRICULUM LGR22 MAPPED</span>
              </span>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenRegister}
                className="btn-pill-lime py-3.5 px-8 text-xs flex items-center gap-2 shadow-xl"
              >
                <span>JOIN AS A PARTICIPANT OR SCHOOL</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-white/15 bg-[#121216] shadow-2xl group cursor-pointer"
            style={{ minHeight: '400px' }}
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85"
              alt="Engineering students working together"
              className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono-code font-bold text-[#FACC15] uppercase block mb-1">
                VÄSTERÅS PILOT 2026
              </span>
              <span className="text-xs font-headline font-bold text-white uppercase tracking-wider">
                15 Schools · 600+ Students · 45+ Certified Educators
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
