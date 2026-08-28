import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Download, DollarSign, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ForSchoolsPageProps {
  onOpenRegister: () => void;
  onOpenDeckModal: () => void;
  onNavigateHome: () => void;
}

export const ForSchoolsPage: React.FC<ForSchoolsPageProps> = ({
  onOpenRegister,
  onOpenDeckModal,
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

        {/* ── HEADER: FOR (Outline) SCHOOLS (Solid) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-white/10 pb-12"
        >
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#22C55E] uppercase block mb-3">
            PRINCIPALS & EDUCATORS PORTAL // VÄSTERÅS 2026
          </span>
          
          <h1
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">FOR</span>
            <span className="text-white block">SCHOOLS</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
            A complete turnkey robotics tournament model created specifically to eliminate administrative overhead, supply all physical hardware, and seamlessly integrate into the Swedish curriculum.
          </p>
        </motion.div>

        {/* ── 3 CORE VALUE PROPOSITIONS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: 100 SEK Fee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-[#121216] border border-white/10 space-y-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E]">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-headline font-bold text-2xl text-white uppercase">
              100 SEK PER STUDENT
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              No school budget CapEx or expensive lab purchases. The fixed 100 SEK (+VAT) student fee covers all workshop equipment, certified trainers, and arena infrastructure.
            </p>
          </motion.div>

          {/* Card 2: 2-Hour On-Site Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#121216] border border-white/10 space-y-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/10 border border-[#0052FF]/20 flex items-center justify-center text-[#0052FF]">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-headline font-bold text-2xl text-white uppercase">
              2-HOUR IN-SCHOOL DELIVERY
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              We bring the kits, microcontrollers, arena mats, and certified instructors directly into your classroom in February 2026. Zero disruption to normal timetables.
            </p>
          </motion.div>

          {/* Card 3: Swedish Curriculum Alignment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#121216] border border-white/10 space-y-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FF3366]/10 border border-[#FF3366]/20 flex items-center justify-center text-[#FF3366]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-headline font-bold text-2xl text-white uppercase">
              LGR22 CURRICULUM MAPPED
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Mapped directly into Skolverket syllabus criteria for Technology (Teknik), Physics, and Digital Competency with concrete problem-solving metrics.
            </p>
          </motion.div>

        </div>

        {/* ── SAFETY & REGULATIONS BLOCK ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#121216] border border-white/10 space-y-6"
        >
          <div className="flex items-center gap-3 text-[#22C55E]">
            <ShieldCheck className="w-6 h-6" />
            <span className="font-headline font-bold text-xl uppercase tracking-wider text-white">
              CERTIFIED SAFETY & COMPLIANCE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            <p>
              All hardware and motors run on safe 12V DC low-voltage standards. Soldering and high-temperature equipment are prohibited during student workshops.
            </p>
            <p>
              Strict GDPR student privacy protection: no biometric, academic, or sensitive personal data is gathered or shared.
            </p>
          </div>
        </motion.div>

        {/* ── ENROL COHORT ACTION BANNER ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#22C55E] to-[#0052FF] text-black grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl"
        >
          <div className="lg:col-span-8 space-y-2">
            <span className="text-[10px] font-mono-code font-bold uppercase tracking-widest bg-black/15 px-3 py-1 rounded-full inline-block">
              RESERVE WORKSHOP DATES FOR FEBRUARY 2026
            </span>
            <h3 className="font-headline font-black text-3xl sm:text-4xl text-black uppercase">
              ENROL YOUR SCHOOL COHORT
            </h3>
            <p className="text-xs sm:text-sm text-black/85 font-medium max-w-lg">
              School intake is limited to 15 participating institutions across the Västerås municipal district for the 2026 season.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={onOpenRegister}
              className="btn-pill-white text-xs font-bold py-3.5 px-6 shadow-xl"
            >
              <span>REGISTER SCHOOL COHORT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenDeckModal}
              className="btn-pill-outline border-black/40 text-black hover:bg-black/10 text-xs font-bold py-3.5 px-6"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD EVENT PROSPECTUS</span>
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
