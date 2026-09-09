import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import {
  ROADMAP_STEPS,
  RoadmapStep,
  LEARNING_BLOCKS,
  LearningBlock,
  STEM_PROJECT_SESSIONS,
  ProjectSession,
  STEM_PROJECT_DELIVERABLES,
  ProjectDeliverable,
} from '../data/roboData';

interface HowItWorksPageProps {
  onNavigateHome: () => void;
  onOpenRegister: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigateHome,
  onOpenRegister,
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

        {/* ── HEADER: STEM (Outline) PROGRAMME (Solid) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-slate-200 pb-12"
        >
          <span className="text-[10px] font-mono-code font-medium tracking-[0.2em] text-slate-500 uppercase block mb-3">
            A PROJECT, NOT JUST A WORKSHOP // VÄSTERÅS 2026
          </span>

          <h1
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">STEM</span>
            <span className="text-[#0A1930] block">PROGRAMME</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-2xl leading-relaxed">
            RoboKidovation begins with a practical STEM programme where students learn how a working robot is built from the ground up — then build, test and improve their own robot for the Robo-Sprint challenge. No previous robotics experience needed.
          </p>
        </motion.div>

        {/* ── 5 LEARNING BLOCKS ── */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          {LEARNING_BLOCKS.map((block: LearningBlock, idx: number) => (
            <motion.div
              key={block.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1.5 text-center"
            >
              <span className="font-headline font-black text-sm sm:text-base text-[#006AA7] uppercase tracking-wide block">
                {block.tag}
              </span>
              <span className="text-[11px] text-slate-500 font-light leading-snug block">
                {block.desc}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── 5-STAGE PROCESS CARDS ── */}
        <div className="space-y-6">
          {ROADMAP_STEPS.map((step: RoadmapStep, idx: number) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(0, 106, 167, 0.35)' }}
              className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-[#F8FAFC] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all shadow-sm"
            >
              <div className="lg:col-span-3 space-y-1">
                <span className="font-headline font-black text-6xl text-[#006AA7] leading-none block">
                  {step.stepNumber}
                </span>
                <span className="text-[10px] font-mono-code font-bold text-slate-500 uppercase tracking-widest block">
                  {step.tag}
                </span>
              </div>

              <div className="lg:col-span-6 space-y-2">
                <h2 className="font-headline font-bold text-2xl sm:text-3xl text-[#0A1930] uppercase tracking-wide">
                  {step.title} — {step.subtitle}
                </h2>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <span className="text-[10px] font-mono-code font-bold text-[#0A1930] bg-[#FFCD00] px-4 py-2 rounded-full font-black">
                  {step.badge ?? 'VERIFIED STAGE'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── 20-HOUR SESSION BREAKDOWN ── */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-6">
            <span className="text-[10px] font-mono-code font-bold tracking-[0.2em] text-[#006AA7] uppercase block mb-2">
              20-HOUR STEM PROJECT
            </span>
            <h2 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0A1930]">
              10 Sessions · Build → Test → Improve → Compete
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
              Schools can adapt the programme around Teknik, Matematik and NO/Fysik, with student documentation, reflection and project work supporting the learning process. A lighter 10–12 hour version is available for younger cohorts where a full assessed project is too heavy.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-slate-200">
                  <th className="px-5 py-3 text-[10px] font-mono-code font-bold text-slate-500 uppercase tracking-wider">Session</th>
                  <th className="px-5 py-3 text-[10px] font-mono-code font-bold text-slate-500 uppercase tracking-wider">Hours</th>
                  <th className="px-5 py-3 text-[10px] font-mono-code font-bold text-slate-500 uppercase tracking-wider">Focus</th>
                </tr>
              </thead>
              <tbody>
                {STEM_PROJECT_SESSIONS.map((s: ProjectSession) => (
                  <tr key={s.session} className="border-b border-slate-100 last:border-0 hover:bg-[#F8FAFC] transition-colors">
                    <td className="px-5 py-3.5 text-sm font-headline font-bold text-[#006AA7]">
                      {String(s.session).padStart(2, '0')}
                    </td>
                    <td className="px-5 py-3.5 text-xs font-mono-code text-slate-500">
                      {s.hours}
                    </td>
                    <td className="px-5 py-3.5 text-sm text-[#0A1930] font-light">
                      {s.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── WHAT STUDENTS PRODUCE ── */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-6">
            <h2 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0A1930]">
              What Students Produce
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
              By the end of the 20 hours, every team should have more than just a robot.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STEM_PROJECT_DELIVERABLES.map((d: ProjectDeliverable, idx: number) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[#006AA7]" />
                <h3 className="font-headline font-bold text-sm uppercase tracking-wide text-[#0A1930]">
                  {d.title}
                </h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CALLOUT BANNER ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#006AA7] to-[#013A63] border border-[#013A63] flex flex-col md:flex-row items-center justify-between gap-8 shadow-md"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#FFCD00]">
              <Calendar className="w-4 h-4" />
              <span>QUALIFIERS RUN IN OCTOBER 2026</span>
            </div>
            <h3 className="font-headline font-black text-2xl sm:text-3xl text-white uppercase">
              Enrol your school cohort today.
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-light max-w-xl">
              Registrations close ahead of the November 13, 2026 Robo-Sprint City Final. Session dates and hardware kits are assigned upon enrolment.
            </p>
          </div>

          <button
            onClick={onOpenRegister}
            className="btn-pill-lime py-4 px-8 text-xs font-black shrink-0 flex items-center gap-2"
          >
            <span>START REGISTRATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </div>
  );
};
