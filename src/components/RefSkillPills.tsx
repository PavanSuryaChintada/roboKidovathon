import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface RefSkillPillsProps {
  onNavigate: (route: string) => void;
  onOpenRegister?: () => void;
}

export const RefSkillPills: React.FC<RefSkillPillsProps> = ({ onNavigate }) => {
  const skillPills = [
    { label: 'Chassis Assembly', bg: 'bg-[#006AA7] text-white' },
    { label: 'Gearbox Mechanics', bg: 'bg-[#FFCD00] text-[#0A1930]' },
    { label: 'Wired Remote Control', bg: 'bg-[#0A1930] text-white' },
    { label: 'Ball-Transfer Mechanism', bg: 'bg-[#E6B800] text-[#0A1930]' },
    { label: 'Team Strategy', bg: 'bg-[#013A63] text-white' },
    { label: 'Arena Speed Control', bg: 'bg-[#FFCD00] text-[#0A1930]' },
    { label: 'Precision Driving', bg: 'bg-[#006AA7] text-white' },
    { label: 'Live Match Tactics', bg: 'bg-[#0A1930] text-white' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const pillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="w-full bg-white text-[#0A1930] py-28 px-6 sm:px-10 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── LEFT COLUMN: HEADLINE & DESCRIPTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-6 space-y-6"
        >
          <h2
            className="font-headline font-black uppercase text-[#0A1930] leading-[1.12] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}
          >
            CHAMPIONSHIP<br />
            SKILLS & TRACKS
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-lg pt-2">
            No screens-only simulations. Students build real gearboxes and wired remote-controlled robots from the ground up, gaining hands-on mechanical intuition and match strategy.
          </p>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('challenges')}
              className="btn-pill-white text-xs sm:text-sm font-bold py-3.5 px-8 flex items-center gap-2 shadow-md"
            >
              <span>EXPLORE ALL DISCIPLINES</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN: VIBRANT CAPSULE PILL CLOUD ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-6 flex flex-wrap items-center justify-start lg:justify-end gap-3 sm:gap-4 max-w-xl ml-auto"
        >
          {skillPills.map((pill, i) => (
            <motion.div
              key={i}
              variants={pillVariants}
              whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3.5 rounded-full font-headline font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm cursor-pointer transition-all ${pill.bg}`}
            >
              {pill.label}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
