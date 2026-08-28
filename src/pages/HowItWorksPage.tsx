import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { ROADMAP_STEPS, RoadmapStep } from '../data/roboData';

interface HowItWorksPageProps {
  onNavigateHome: () => void;
  onOpenRegister: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigateHome,
  onOpenRegister,
}) => {
  return (
    <div className="w-full min-h-screen bg-[#070709] text-white pt-28 pb-24 px-6 sm:px-10 select-none">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono-code font-bold tracking-wider text-[#FACC15] uppercase hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </motion.button>

        {/* ── HEADER: TOURNAMENT (Outline) JOURNEY (Solid) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-white/10 pb-12"
        >
          <span className="text-[10px] font-mono-code font-medium tracking-[0.2em] text-slate-400 uppercase block mb-3">
            METHODOLOGY & SYLLABUS // VÄSTERÅS 2026
          </span>
          
          <h1
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">TOURNAMENT</span>
            <span className="text-white block">JOURNEY</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
            Our 5-stage tournament model guides students from zero prior robotics background into confident match competitors with zero administrative load on school staff.
          </p>
        </motion.div>

        {/* ── 5-STAGE PROCESS CARDS ── */}
        <div className="space-y-6">
          {ROADMAP_STEPS.map((step: RoadmapStep, idx: number) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(250, 204, 21, 0.4)' }}
              className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#121216] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all shadow-xl"
            >
              <div className="lg:col-span-3 space-y-1">
                <span className="font-headline font-black text-6xl text-[#FACC15] leading-none block">
                  {step.stepNumber}
                </span>
                <span className="text-[10px] font-mono-code font-bold text-slate-400 uppercase tracking-widest block">
                  {step.tag}
                </span>
              </div>

              <div className="lg:col-span-6 space-y-2">
                <h2 className="font-headline font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide">
                  {step.title} — {step.subtitle}
                </h2>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <span className="text-[10px] font-mono-code font-bold text-black bg-[#FACC15] px-4 py-2 rounded-full font-black">
                  VERIFIED STAGE
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CALLOUT BANNER ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#FACC15]">
              <Calendar className="w-4 h-4" />
              <span>WORKSHOPS RUN IN FEBRUARY 2026</span>
            </div>
            <h3 className="font-headline font-black text-2xl sm:text-3xl text-white uppercase">
              Enrol your school cohort today.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl">
              Registrations close January 31, 2026. Certified trainers, hardware kits, and match arenas assigned upon enrolment.
            </p>
          </div>

          <button
            onClick={onOpenRegister}
            className="btn-pill-lime py-4 px-8 text-xs font-black shrink-0 flex items-center gap-2 text-black"
          >
            <span>START REGISTRATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </div>
  );
};
