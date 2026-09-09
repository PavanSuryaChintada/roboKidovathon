import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Wrench, Sigma, FlaskConical, Info, GraduationCap, ChevronDown } from 'lucide-react';
import { LGR22_SUBJECTS, AGE_PATHWAYS, Lgr22Subject, AgePathway, GY25_CONNECTIONS } from '../data/roboData';

interface Lgr22PageProps {
  onNavigateHome: () => void;
  onOpenRegister: () => void;
}

const SUBJECT_ICONS: Record<string, React.ElementType> = {
  'Teknik': Wrench,
  'Matematik': Sigma,
  'NO/Fysik': FlaskConical,
};

export const Lgr22Page: React.FC<Lgr22PageProps> = ({
  onNavigateHome,
  onOpenRegister,
}) => {
  const [openPathways, setOpenPathways] = useState<Set<string>>(new Set());

  const togglePathway = (id: string) => {
    setOpenPathways((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-slate-200 pb-12"
        >
          <span className="text-[10px] font-mono-code font-medium tracking-[0.2em] text-slate-500 uppercase block mb-3">
            CONNECTED TO SCHOOL LEARNING
          </span>

          <h1
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">LEARNING,</span>
            <span className="text-[#0A1930] block">LGR22 &amp; GY25</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-2xl leading-relaxed">
            RoboKidovation and the STEM programme provide practical learning opportunities connected to central content within Teknik, Matematik and NO/Fysik in Lgr22 for grundskolan, and to programming-oriented education within Gy25 for gymnasium students.
          </p>
        </motion.div>

        {/* ── THREE SUBJECT COLUMNS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LGR22_SUBJECTS.map((subject: Lgr22Subject, idx: number) => {
            const Icon = SUBJECT_ICONS[subject.subject] ?? Wrench;
            return (
              <motion.div
                key={subject.subject}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#006AA7]/10 border border-[#006AA7]/20 flex items-center justify-center text-[#006AA7]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-headline font-bold text-xl text-[#0A1930] uppercase">
                  {subject.subject}
                </h3>
                <ul className="space-y-1.5">
                  {subject.connections.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      <span className="text-[#006AA7] font-bold mt-0.5">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* ── DISCLAIMER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-3 p-5 rounded-2xl bg-[#F2F6FA] border border-slate-200"
        >
          <Info className="w-4 h-4 text-[#006AA7] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            Curriculum connections depend on age, activity and the school's own planning. Advanced content may be offered as enrichment.
          </p>
        </motion.div>

        {/* ── THREE AGE PATHWAYS ── */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-6">
            <h2 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0A1930]">
              Three Age Pathways, One Family Of Challenges
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
              Explorer and Advanced play the same Robo-Sprint game at different learning depths; Robo-Precision is the gymnasium-level track for teams ready to go fully autonomous. Tap a card for the full picture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AGE_PATHWAYS.map((pathway: AgePathway, idx: number) => {
              const isOpen = openPathways.has(pathway.id);
              return (
                <motion.button
                  key={pathway.id}
                  type="button"
                  onClick={() => togglePathway(pathway.id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  aria-expanded={isOpen}
                  className={`text-left rounded-3xl border bg-white p-8 space-y-4 shadow-sm transition-colors w-full ${
                    isOpen ? 'border-[#006AA7]/40' : 'border-slate-200 hover:border-[#006AA7]/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[10px] font-mono-code font-bold tracking-widest text-[#006AA7] uppercase block">
                      {pathway.grades}
                    </span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    </motion.div>
                  </div>
                  <h3 className="font-headline font-black text-2xl uppercase tracking-tight text-[#0A1930]">
                    {pathway.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {pathway.focus.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-mono-code font-bold text-[#0A1930] bg-[#F8FAFC] border border-slate-200 px-3 py-1.5 rounded-full uppercase tracking-wide"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 font-light leading-relaxed pt-2 border-t border-slate-100">
                    {pathway.message}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-slate-500 font-light leading-relaxed pt-3 border-t border-slate-100">
                          {pathway.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── GY25 (GYMNASIUM) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 sm:p-12 space-y-5"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#006AA7]/10 border border-[#006AA7]/20 flex items-center justify-center text-[#006AA7]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono-code font-bold tracking-[0.2em] text-[#006AA7] uppercase block">
                {GY25_CONNECTIONS.audience}
              </span>
              <h3 className="font-headline font-black text-xl sm:text-2xl uppercase tracking-tight text-[#0A1930]">
                Gy25 Connection
              </h3>
            </div>
          </div>
          <p className="text-sm text-slate-600 font-light leading-relaxed max-w-3xl">
            {GY25_CONNECTIONS.note}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {GY25_CONNECTIONS.connections.map((c) => (
              <span
                key={c}
                className="text-[10px] font-mono-code font-bold text-[#0A1930] bg-white border border-slate-200 px-3 py-1.5 rounded-full uppercase tracking-wide"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── GRADING PITCH ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-8 sm:p-12 bg-[#013A63] border border-[#013A63] space-y-4 shadow-md"
        >
          <h3 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
            Evidence Of Learning, Not Just Attendance
          </h3>
          <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-3xl">
            The 20-hour project can be planned together with the school so that students produce documented evidence of practical work, technical problem-solving, testing, collaboration and reflection that teachers may use within their ordinary assessment where relevant to the subject and local planning.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenRegister}
              className="btn-pill-lime text-xs sm:text-sm font-black py-3.5 px-8 flex items-center gap-2"
            >
              <span>PLAN A PROGRAMME WITH US</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
