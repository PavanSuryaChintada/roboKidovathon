import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Trophy, ArrowRight, BookOpen, Scale, Repeat, ChevronDown } from 'lucide-react';
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
  const [openCats, setOpenCats] = useState<Set<string>>(new Set([COMPETITION_CATEGORIES[0]?.id]));

  const toggleCat = (id: string) => {
    setOpenCats((prev) => {
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
            <span className="text-stroke block">ROBO-SPRINT</span>
            <span className="text-[#0A1930] block">RULEBOOK</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-2xl leading-relaxed">
            Explorer and Advanced share one arena format: 2.44 m × 1.22 m, 1 team vs 1 team, 3-minute matches, 3–4 students per team, moving balls into the opponent's side. Robo-Precision is a separate 5-minute autonomous build challenge for gymnasium teams. Tap a card below to open its full rules.
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

              {/* Toggle Strip */}
              <button
                type="button"
                onClick={() => toggleCat(cat.id)}
                aria-expanded={openCats.has(cat.id)}
                className="w-full flex items-center justify-between gap-4 px-8 sm:px-12 py-5 bg-[#F8FAFC] border-t border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <span className="font-headline font-bold text-xs sm:text-sm uppercase tracking-wider text-[#0A1930]">
                  {openCats.has(cat.id) ? 'Hide' : 'View'} Robot Requirements, Scoring &amp; Judging
                </span>
                <motion.div animate={{ rotate: openCats.has(cat.id) ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown className="w-4 h-4 text-[#006AA7] shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openCats.has(cat.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    {/* Mandatory Regulations & Scoring */}
                    <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white">
                      <div className="space-y-4">
                        <h3 className="font-headline font-black text-lg sm:text-xl uppercase tracking-wider text-[#0A1930] flex items-center gap-2">
                          <ShieldCheck className="w-5 h-5 text-[#006AA7]" />
                          <span>ROBOT REQUIREMENTS</span>
                        </h3>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                          {cat.robotRequirements.map((rule) => (
                            <li key={rule} className="flex items-start gap-2">
                              <span className="text-[#006AA7] font-bold mt-0.5">•</span>
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-slate-500 font-light leading-relaxed pt-1">
                          {cat.keyRule}
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h3 className="font-headline font-black text-lg sm:text-xl uppercase tracking-wider text-[#0A1930] flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-[#006AA7]" />
                            <span>SCORING</span>
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                            {cat.scoring}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#0A1930] flex items-center gap-2">
                            <Repeat className="w-3.5 h-3.5 text-[#006AA7]" />
                            <span>TIE-BREAK ORDER</span>
                          </h4>
                          <ol className="space-y-1 text-xs text-slate-500 font-light">
                            {cat.tieBreak.map((step, i) => (
                              <li key={step} className="flex items-start gap-2">
                                <span className="text-[#006AA7] font-bold">{i + 1}.</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#0A1930] flex items-center gap-2">
                            <Scale className="w-3.5 h-3.5 text-[#006AA7]" />
                            <span>JUDGING EMPHASIS</span>
                          </h4>
                          <div className="space-y-1.5">
                            {cat.judgingWeights.map((w) => (
                              <div key={w.label} className="flex items-center gap-3">
                                <span className="w-12 text-xs font-mono-code font-bold text-[#0A1930] shrink-0">{w.pct}</span>
                                <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                                  <div className={`h-full ${cat.accentBg}`} style={{ width: w.pct }} />
                                </div>
                                <span className="text-[11px] text-slate-500 font-light shrink-0">{w.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4">
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

                    {/* What Students Demonstrate */}
                    <div className="px-8 sm:px-12 pb-8 sm:pb-12 bg-white">
                      <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">
                        Students Are Expected To Demonstrate
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.demonstrates.map((d) => (
                          <span
                            key={d}
                            className="text-[10px] font-mono-code font-bold text-[#0A1930] bg-[#F8FAFC] border border-slate-200 px-3 py-1.5 rounded-full uppercase tracking-wide"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* ── BASIC MATCH RULES & PENALTIES (SHARED ACROSS BOTH LEAGUES) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 space-y-4"
          >
            <h3 className="font-headline font-black text-lg sm:text-xl uppercase tracking-wider text-[#0A1930]">
              Basic Match Rules
            </h3>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed list-decimal list-inside">
              <li>Both robots must start fully inside their designated starting area.</li>
              <li>Students may only touch the robot before the referee starts the match.</li>
              <li>Once the match starts, students may control the robot only through the approved control method.</li>
              <li>Students may not enter the arena or manually move balls.</li>
              <li>If a robot becomes stuck, the referee may allow one controlled reset to the team's starting area.</li>
              <li>A reset does not stop the match clock.</li>
              <li>Teams may not intentionally damage another robot.</li>
              <li>A robot may push or redirect balls but may not intentionally trap balls permanently inside the robot.</li>
              <li>A ball counts only when it has completely crossed into the opponent's half.</li>
              <li>The referee's decision on ball position and scoring is final.</li>
              <li>Teams must use the robot that passed the pre-match inspection.</li>
              <li>Repairs between matches are allowed within the allotted technical period.</li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 rounded-3xl border border-slate-200 bg-[#013A63] p-8 sm:p-10 space-y-4"
          >
            <h3 className="font-headline font-black text-lg sm:text-xl uppercase tracking-wider text-white">
              Penalties
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
              <li><span className="font-bold text-[#FFCD00]">Minor infringement</span> — warning</li>
              <li><span className="font-bold text-[#FFCD00]">Repeated infringement</span> — &minus;5 points</li>
              <li><span className="font-bold text-[#FFCD00]">Unsafe behaviour / deliberate interference</span> — match loss</li>
              <li><span className="font-bold text-[#FFCD00]">Deliberate damage or serious misconduct</span> — possible disqualification</li>
            </ul>
          </motion.div>
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
