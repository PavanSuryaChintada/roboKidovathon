import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, Layers, GraduationCap, ShieldCheck, Download, ArrowRight, ArrowLeft } from 'lucide-react';

interface ForSchoolsPageProps {
  onNavigateHome: () => void;
  onOpenRegister: () => void;
  onOpenDeckModal: () => void;
}

export const ForSchoolsPage: React.FC<ForSchoolsPageProps> = ({
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

        {/* ── HEADER: FOR (Outline) SCHOOLS (Solid) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-slate-200 pb-12"
        >
          <span className="text-[10px] font-mono-code font-medium tracking-[0.2em] text-slate-500 uppercase block mb-3">
            PRINCIPALS & EDUCATORS // VÄSTERÅS 2026
          </span>

          <h1
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">FOR</span>
            <span className="text-[#0A1930] block">SCHOOLS</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-2xl leading-relaxed">
            A turnkey robotics tournament model created to eliminate administrative overhead and bring all physical hardware directly into your classroom.
          </p>
        </motion.div>

        {/* ── 3 CORE VALUE PROPOSITIONS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: All-Inclusive Kit Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#006AA7]/10 border border-[#006AA7]/20 flex items-center justify-center text-[#006AA7]">
              <Boxes className="w-6 h-6" />
            </div>
            <h3 className="font-headline font-bold text-2xl text-[#0A1930] uppercase">
              ALL-INCLUSIVE KIT DELIVERY
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              No lab budget or equipment purchases needed. The official Robo-Sprint kit, arena mat, and mentor-led workshop are brought directly to your school.
            </p>
          </motion.div>

          {/* Card 2: 2-Hour On-Site Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#006AA7]/10 border border-[#006AA7]/20 flex items-center justify-center text-[#006AA7]">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-headline font-bold text-2xl text-[#0A1930] uppercase">
              20-HOUR IN-SCHOOL DELIVERY
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Ten 2-hour sessions bring the kits, gearboxes, and arena mats directly into your classroom ahead of the October 2026 qualifiers. Schools can also opt into a lighter 10–12 hour version for younger cohorts.
            </p>
          </motion.div>

          {/* Card 3: Lgr22-Aligned Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#006AA7]/10 border border-[#006AA7]/20 flex items-center justify-center text-[#006AA7]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-headline font-bold text-2xl text-[#0A1930] uppercase">
              LGR22-ALIGNED LEARNING
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Practical learning opportunities connected to central content in Teknik, Matematik and NO/Fysik — with documented student work teachers may use in ordinary assessment.
            </p>
          </motion.div>

        </div>

        {/* ── SAFETY & REGULATIONS BLOCK ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-6"
        >
          <div className="flex items-center gap-3 text-[#006AA7]">
            <ShieldCheck className="w-6 h-6" />
            <span className="font-headline font-bold text-xl uppercase tracking-wider text-[#0A1930]">
              SAFETY & PRIVACY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            <p>
              All hardware runs on safe 6V DC low-voltage battery power. Soldering and high-temperature equipment are not used during student workshops.
            </p>
            <p>
              GDPR-compliant handling of student data: no biometric, academic, or sensitive personal information is gathered or shared.
            </p>
          </div>
        </motion.div>

        {/* ── ENROL COHORT ACTION BANNER ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#FFCD00] text-[#0A1930] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-md"
        >
          <div className="lg:col-span-8 space-y-2">
            <span className="text-[10px] font-mono-code font-bold uppercase tracking-widest bg-black/10 px-3 py-1 rounded-full inline-block">
              RESERVE WORKSHOP DATES FOR OCTOBER 2026
            </span>
            <h3 className="font-headline font-black text-3xl sm:text-4xl text-[#0A1930] uppercase">
              ENROL YOUR SCHOOL COHORT
            </h3>
            <p className="text-xs sm:text-sm text-[#0A1930]/80 font-medium max-w-lg">
              School intake across the Västerås municipal district is open for the 2026 season. Registrations close ahead of the November 13, 2026 Robo-Sprint City Final.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={onOpenRegister}
              className="btn-pill-white text-xs font-bold py-3.5 px-6 shadow-md"
            >
              <span>REGISTER SCHOOL NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDeckModal}
              className="px-6 py-3.5 rounded-full border border-black/30 hover:border-black text-xs font-mono-code text-[#0A1930] uppercase tracking-wider transition-colors flex items-center justify-center gap-2 font-bold"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD DECK (PDF)</span>
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
