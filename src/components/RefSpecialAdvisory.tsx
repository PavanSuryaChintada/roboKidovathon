import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Calendar, Trophy, Package, Sparkles } from 'lucide-react';
import { PARTNER_LOGOS, KIT_PIECES, CHAMPIONSHIP_STAGES } from '../data/roboData';

const FRAMEWORK_STEPS = [
  'Explore Components',
  'Build The Robot',
  'Test Movement',
  'Improve The Design',
  'School Robo-Sprint',
  'Represent The School',
];

export const RefSpecialAdvisory: React.FC = () => {
  return (
    <section id="advisory-section" className="w-full bg-[#F2F6FA] text-[#0A1930] py-28 px-6 sm:px-10 border-t border-slate-200 overflow-hidden scroll-mt-24">
      <div className="max-w-[1280px] mx-auto space-y-16">

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#006AA7] uppercase block">
            OFFICIAL LAUNCH & ADVISORY
          </span>
          <h2
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
          >
            <span className="text-stroke block">SPECIAL</span>
            <span className="text-[#0A1930] block">ADVISORY</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-xl mx-auto">
            RoboKidovation Västerås is developed by Indisk BarnKlubb (IBK) Västerås alongside INIAC and SkillSkolan, with Blix as technology and kit partner — turning STEM concepts into something students can build, test, improve and finally compete with.
          </p>
        </div>

        {/* ── PARTNER LOGOS ── */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {PARTNER_LOGOS.map((logo) => (
            <motion.div
              key={logo.name}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center gap-2"
            >
              <img
                src={logo.file}
                alt={logo.name}
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <span className="text-[9px] font-mono-code text-slate-500 uppercase tracking-wide">
                {logo.role}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── AMBASSADOR LAUNCH CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="w-16 h-16 rounded-2xl bg-[#FFCD00]/20 border border-[#FFCD00]/50 flex items-center justify-center text-[#0A1930]">
              <Award className="w-8 h-8" />
            </div>
          </div>
          <div className="lg:col-span-10 space-y-2 text-center lg:text-left">
            <span className="text-[10px] font-mono-code font-bold tracking-[0.2em] text-[#006AA7] uppercase block">
              OFFICIAL LAUNCH
            </span>
            <h3 className="font-headline font-black text-xl sm:text-2xl uppercase tracking-tight text-[#0A1930]">
              H.E. Ambassador Anurag Bhushan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Ambassador of India to Sweden &amp; Latvia — formally launching RoboKidovation Västerås and addressing participating students, educators, and community representatives.
            </p>
            <span className="inline-block mt-1 text-[11px] font-mono-code font-bold text-[#0A1930] bg-[#FFCD00]/25 border border-[#FFCD00]/60 px-3 py-1 rounded-full uppercase tracking-wide">
              Theme: Bringing Schools Together Through Robotics
            </span>
          </div>
        </motion.div>

        {/* ── FRAMEWORK FLOW ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 justify-center text-[#006AA7]">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-mono-code font-bold tracking-[0.2em] uppercase">
              From Classroom Learning To City Competition
            </span>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-3 lg:gap-2">
            {FRAMEWORK_STEPS.map((step, i) => (
              <React.Fragment key={step}>
                <div className="flex-1 rounded-2xl bg-white border border-slate-200 shadow-sm px-5 py-4 text-center">
                  <span className="font-syne font-bold text-xs sm:text-sm text-[#0A1930] uppercase tracking-wide">
                    {step}
                  </span>
                </div>
                {i < FRAMEWORK_STEPS.length - 1 && (
                  <div className="flex items-center justify-center text-[#006AA7] shrink-0 rotate-90 lg:rotate-0">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-2xl mx-auto text-center">
            The Robo-Sprint arena format is adapted from Blix-A-Thon, hosted at Techfest, IIT Bombay. In Västerås it is delivered as INIAC's own STEM programme and pedagogy, with Blix supplying the reusable hardware kit as technology partner.
          </p>
        </motion.div>

        {/* ── COMPETITION STRUCTURE ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHAMPIONSHIP_STAGES.map((stage) => (
            <motion.div
              key={stage.stageNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 space-y-3"
            >
              <div className="flex items-center gap-2 text-[#006AA7]">
                <Calendar className="w-4 h-4" />
                <span className="text-[10px] font-mono-code font-bold tracking-[0.2em] uppercase">
                  {stage.stageCode} · {stage.date}
                </span>
              </div>
              <h3 className="font-headline font-black text-lg sm:text-xl uppercase tracking-tight text-[#0A1930]">
                {stage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                {stage.description}
              </p>
              <div className="pt-3 border-t border-slate-200 text-[11px] font-mono-code font-bold text-[#0A1930] uppercase tracking-wide">
                {stage.advancement}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── PRIZE + KIT LIST ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 sm:p-12 space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#006AA7]/10 border border-[#006AA7]/20 flex items-center justify-center text-[#006AA7]">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-black text-lg uppercase tracking-tight text-[#0A1930]">
                  SEK 3,000 Prize Pool
                </h3>
                <p className="text-xs text-slate-500 font-light">
                  SEK 1,200 Explorer + SEK 1,800 Advanced · Cash + Trophy + Certificates
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#FFCD00]/20 border border-[#FFCD00]/50 flex items-center justify-center text-[#0A1930]">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-black text-lg uppercase tracking-tight text-[#0A1930]">
                  Official Robo-Sprint Kit
                </h3>
                <p className="text-xs text-slate-500 font-light">
                  {KIT_PIECES.length} component types per team build
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {KIT_PIECES.map((piece) => (
              <div
                key={piece.label}
                className="px-3 py-2 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center"
              >
                <span className="block text-[10px] font-mono-code font-bold text-[#0A1930] uppercase truncate">
                  {piece.label}
                </span>
                <span className="block text-[9px] font-mono-code text-slate-500">
                  {piece.qty}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
