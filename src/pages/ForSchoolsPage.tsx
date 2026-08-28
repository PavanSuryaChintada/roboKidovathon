import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';

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

        {/* ── HEADER: FOR SCHOOLS (Outline) & INSTITUTIONS (Solid) ── */}
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
            className="font-headline font-black uppercase tracking-tight leading-[0.88]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">FOR SCHOOLS &</span>
            <span className="text-white block">INSTITUTIONS</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
            A comprehensive, turnkey robotics tournament programme created specifically to eliminate administrative overhead, supply all physical hardware, and seamlessly map into the Swedish curriculum.
          </p>
        </motion.div>

        {/* ── 3-COLUMN PILLAR BENTO GRID WITH MOTION ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(34, 197, 94, 0.5)' }}
            className="p-8 sm:p-10 rounded-3xl border border-white/15 bg-[#121216] space-y-4 hover:border-[#22C55E]/40 transition-all shadow-xl cursor-pointer"
          >
            <span className="px-3.5 py-1 rounded-full bg-[#22C55E] text-black text-[10px] font-headline font-bold uppercase tracking-wider inline-block">
              PILLAR 01 // BUDGET
            </span>
            <h2 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              Zero School Budget Cost
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              No expensive equipment purchases or recurring software licenses required. The transparent 100 SEK (+VAT) per student fee covers all workshop kits, instruction, and competition infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(0, 82, 255, 0.5)' }}
            className="p-8 sm:p-10 rounded-3xl border border-white/15 bg-[#121216] space-y-4 hover:border-[#0052FF]/40 transition-all shadow-xl cursor-pointer"
          >
            <span className="px-3.5 py-1 rounded-full bg-[#0052FF] text-white text-[10px] font-headline font-bold uppercase tracking-wider inline-block">
              PILLAR 02 // LOGISTICS
            </span>
            <h2 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              Complete Turnkey Delivery
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Certified STEM trainers arrive directly at your school with all physical kits, competition arena mats, and microcontrollers. Schools simply provide an open room for 2 hours in February 2026.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(255, 51, 102, 0.5)' }}
            className="p-8 sm:p-10 rounded-3xl border border-white/15 bg-[#121216] space-y-4 hover:border-[#FF3366]/40 transition-all shadow-xl cursor-pointer"
          >
            <span className="px-3.5 py-1 rounded-full bg-[#FF3366] text-white text-[10px] font-headline font-bold uppercase tracking-wider inline-block">
              PILLAR 03 // PEDAGOGY
            </span>
            <h2 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              Lgr22 Curriculum Aligned
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Directly supports technology, physics, and digital competency learning goals. Fosters collaborative problem solving, physical engineering intuition, and algorithmic thinking.
            </p>
          </motion.div>

        </div>

        {/* ── ENROL COHORT BANNER WITH MOTION ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#121216] border border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl"
        >
          <div className="lg:col-span-8 space-y-2">
            <span className="text-[10px] font-mono-code font-bold text-[#22C55E] uppercase tracking-wider block">
              RESERVE WORKSHOP DATES FOR FEBRUARY 2026
            </span>
            <h3 className="font-headline font-black text-2xl sm:text-4xl uppercase tracking-tight text-white">
              Enrol Your School Cohort Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-lg">
              School slots are limited to 15 participating institutions across the Västerås municipal cluster for the 2026 pilot.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenRegister}
              className="btn-pill-lime text-xs font-bold py-4 px-6 flex items-center justify-center gap-2 shadow-xl"
            >
              <span>REGISTER SCHOOL NOW</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenDeckModal}
              className="btn-pill-outline text-xs font-bold py-3.5 px-6 flex items-center justify-center gap-2 shadow-xl"
            >
              <Download className="w-4 h-4 text-[#22C55E]" />
              <span>DOWNLOAD PROSPECTUS PDF</span>
            </motion.button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
