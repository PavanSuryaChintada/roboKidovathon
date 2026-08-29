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
    <div className="w-full min-h-screen bg-white text-[#0A1930] pt-28 pb-24 px-6 sm:px-10 select-none">
      <div className="max-w-[1440px] mx-auto space-y-16">

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono-code font-bold tracking-wider text-[#006AA7] uppercase hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </motion.button>

        {/* ── HEADER: ABOUT (Outline) THE LEAGUE (Solid) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-slate-200 pb-12"
        >
          <span className="text-[10px] font-mono-code font-medium tracking-[0.2em] text-slate-500 uppercase block mb-3">
            LEAGUE ORIGINS & MISSION // 2026
          </span>

          <h1
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">ABOUT</span>
            <span className="text-[#0A1930] block">THE LEAGUE</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-2xl leading-relaxed">
            Adapting the Blix-A-Thon robotics competition model — hosted at Techfest, IIT Bombay — into a school-based tournament for young innovators in Västerås.
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
            <h2 className="font-headline font-black text-3xl sm:text-4xl text-[#0A1930] uppercase tracking-tight">
              FROM TECHFEST IIT BOMBAY TO A VÄSTERÅS CLASSROOM
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Techfest, IIT Bombay is one of India's largest science and technology festivals. Blix-A-Thon, the robotics competition hosted there, has run across multiple editions with 2,000+ student participants in recent years. RoboKidovation Västerås adapts that format for Swedish school cohorts.
            </p>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Instead of theoretical classroom exercises on screens, we put real gearmotors, wired transmitters, and chassis fasteners in students' hands. They build, wire, test, and compete in live tournament arenas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-3">
                <Award className="w-5 h-5 text-[#006AA7] shrink-0" />
                <span className="text-xs font-mono-code font-bold text-[#0A1930] uppercase">
                  Junior & Senior Leagues
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#006AA7] shrink-0" />
                <span className="text-xs font-mono-code font-bold text-[#0A1930] uppercase">
                  India-Proven Format
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenRegister}
                className="btn-pill-lime text-xs font-black py-3.5 px-8 flex items-center gap-2 shadow-md"
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
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#0A1930] aspect-[4/3] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
                alt="Students collaborating on robotics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono-code font-bold text-[#FFCD00] uppercase block mb-1">
                  ROBOSKOLAN QUALIFIERS · OCTOBER 2026
                </span>
                <span className="font-headline font-bold text-lg text-white uppercase">
                  Junior & Senior Robo-Sprint Leagues
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between text-xs font-mono-code text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#006AA7]" />
                <span>VÄSTERÅS, SWEDEN</span>
              </span>
              <span>GRAND FINALE · NOV 10, 2026</span>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};
