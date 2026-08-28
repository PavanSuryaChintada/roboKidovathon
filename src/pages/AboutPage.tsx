import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldCheck, Award, MapPin } from 'lucide-react';

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

        {/* ── HEADER: ABOUT (Outline) THE LEAGUE (Solid) ── */}
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
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">ABOUT</span>
            <span className="text-white block">THE LEAGUE</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
            Evolving the world-renowned Techfest IIT Bombay robotics competition model into a structured, curriculum-compliant tournament for Scandinavian young innovators.
          </p>
        </motion.div>

        {/* ── STORY & PHILOSOPHY GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="font-headline font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              FROM GLOBAL BENCHMARK TO LOCAL CLASSROOM IMPACT
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Techfest IIT Bombay is Asia's largest annual science and technology festival, engaging over 175,000 students worldwide. The Robo-Kidovation model adapts this high-energy, refereed robotics competition format specifically for Swedish school cohorts.
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Instead of theoretical classroom exercises on screens, we put real DC motors, sensors, microcontrollers, and chassis fasteners in students' hands. They build, wire, code, test, and compete in live tournament arenas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#121216] border border-white/10 flex items-center gap-3">
                <Award className="w-5 h-5 text-[#22C55E] shrink-0" />
                <span className="text-xs font-mono-code font-bold text-white uppercase">
                  Gender Parity Focus
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#121216] border border-white/10 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0052FF] shrink-0" />
                <span className="text-xs font-mono-code font-bold text-white uppercase">
                  Swedish Lgr22 Aligned
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenRegister}
                className="btn-pill-lime text-xs font-bold py-3.5 px-8 flex items-center gap-2 shadow-xl"
              >
                <span>JOIN AS A SCHOOL OR STUDENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#121216] aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
                alt="Students collaborating on robotics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono-code font-bold text-[#22C55E] uppercase block mb-1">
                  VÄSTERÅS PILOT 2026
                </span>
                <span className="font-headline font-bold text-lg text-white uppercase">
                  15 Schools · 600+ Students · 45+ Educators
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#121216] border border-white/10 flex items-center justify-between text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#22C55E]" />
                <span>ABB ARENA, VÄSTERÅS</span>
              </span>
              <span>21 MARCH 2026</span>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};
