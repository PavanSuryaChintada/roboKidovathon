import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Trophy, ArrowRight, BookOpen } from 'lucide-react';
import { COMPETITION_CATEGORIES, CompetitionCategory } from '../data/roboData';

interface ChallengesPageProps {
  onNavigateHome: () => void;
  onOpenRegister: () => void;
  onOpenDeckModal: () => void;
}

export const ChallengesPage: React.FC<ChallengesPageProps> = ({
  onNavigateHome,
  onOpenRegister,
  onOpenDeckModal,
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

        {/* ── HEADER: TOURNAMENT (Outline) RULEBOOK (Solid) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-slate-200 pb-12"
        >
          <span className="text-[10px] font-mono-code font-medium tracking-[0.2em] text-slate-500 uppercase block mb-3">
            OFFICIAL TECHNICAL SPECIFICATIONS // 2026 SEASON
          </span>

          <h1
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">TOURNAMENT</span>
            <span className="text-[#0A1930] block">RULEBOOK</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-2xl leading-relaxed">
            Arena dimensions, ball counts, scoring rules, and referee guidelines for the 2026 RoboKidovation Västerås Championship.
          </p>
        </motion.div>

        {/* ── CHALLENGE CARDS WITH MOTION ── */}
        <div className="space-y-16">
          {COMPETITION_CATEGORIES.map((cat: CompetitionCategory, idx: number) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm"
            >
              {/* Category Banner */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1930] via-[#0A1930]/60 to-transparent" />

                <div className="absolute bottom-6 left-6 sm:left-10 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] bg-black/40 px-3 py-1 rounded-full uppercase border border-white/20 text-white">
                        {cat.ageRange}
                      </span>
                      <span className="text-xs font-mono-code font-bold bg-black/40 px-3 py-1 rounded-full border border-white/20 text-white">
                        {cat.division}
                      </span>
                    </div>
                    <h2 className="font-headline font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
                      {cat.title}
                    </h2>
                  </div>

                  <span className="font-headline font-bold text-xs uppercase tracking-widest text-slate-300">
                    {cat.specs[0].value}
                  </span>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="p-6 sm:p-10 border-t border-b border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#F8FAFC]">
                {cat.specs.map((s: { label: string; value: string }) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ scale: 1.03 }}
                    className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 transition-all"
                  >
                    <span className="block text-[9px] font-mono-code font-bold text-[#006AA7] uppercase">
                      {s.label}
                    </span>
                    <span className="block text-xs font-headline font-bold text-[#0A1930] uppercase tracking-wider">
                      {s.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Mandatory Regulations & Scoring */}
              <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white">
                <div className="space-y-4">
                  <h3 className="font-headline font-black text-lg sm:text-xl uppercase tracking-wider text-[#0A1930] flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#006AA7]" />
                    <span>MANDATORY REGULATIONS</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#006AA7] font-bold mt-0.5">•</span>
                      <span>Each team starts the round with 5 balls in their own court.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#006AA7] font-bold mt-0.5">•</span>
                      <span>Robots run on safe 6V DC battery power through the wired transmitter/receiver control set.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#006AA7] font-bold mt-0.5">•</span>
                      <span>{cat.keyRule}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#006AA7] font-bold mt-0.5">•</span>
                      <span>Referees hold final authority over arena resets and match timing.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-headline font-black text-lg sm:text-xl uppercase tracking-wider text-[#0A1930] flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-[#006AA7]" />
                      <span>SCORING</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                      {cat.scoring}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
                    <button
                      onClick={onOpenRegister}
                      className="btn-pill-lime text-xs font-black py-3 px-6 shadow-md"
                    >
                      <span>REGISTER FOR {cat.division.toUpperCase()}</span>
                    </button>
                    <button
                      onClick={onOpenDeckModal}
                      className="btn-pill-outline text-xs font-bold py-3 px-5 flex items-center gap-2"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>DOWNLOAD COMPLETE SPECS</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-slate-200 text-center space-y-6"
        >
          <h3 className="font-headline font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#0A1930]">
            Need Guidance For Your School Cohort?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xl mx-auto leading-relaxed">
            Our mentors deliver full-kit workshops and prepare student teams directly at your school.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenRegister}
              className="btn-pill-lime text-xs sm:text-sm font-black py-3.5 px-8"
            >
              <span>REGISTER COHORT NOW</span>
            </button>
            <button
              onClick={onNavigateHome}
              className="btn-pill-outline text-xs sm:text-sm font-bold py-3.5 px-6 flex items-center gap-2"
            >
              <span>RETURN TO MAIN PORTAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
