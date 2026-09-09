import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, ShieldCheck, Trophy } from 'lucide-react';
import { PARTNER_LOGOS } from '../data/roboData';

interface RefManifestoProps {
  onNavigate: (route: string) => void;
}

export const RefManifesto: React.FC<RefManifestoProps> = ({ onNavigate }) => {
  const pillars = [
    {
      icon: Cpu,
      title: '20-Hour STEM Project',
      desc: 'A ten-session, in-school STEM project brings the official Robo-Sprint kit, mechanisms, and mentor guidance directly to your classroom.',
    },
    {
      icon: ShieldCheck,
      title: 'Lgr22-Linked Learning',
      desc: 'Practical learning opportunities connected to Teknik, Matematik and NO/Fysik in Lgr22 — documented evidence teachers can use in ordinary assessment.',
    },
    {
      icon: Trophy,
      title: 'Grand Finale, Nov 13 2026',
      desc: 'School champions compete live in Västerås for SEK 3,000 in prizes, cash, trophies, and certificates.',
    },
  ];

  return (
    <section className="w-full bg-white text-[#0A1930] py-28 px-6 sm:px-10 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1280px] mx-auto space-y-16">

        {/* ── MANIFESTO HEADLINE & INTRO ── */}
        <div className="text-center max-w-3xl mx-auto space-y-6">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-extrabold uppercase tracking-tight text-[#0A1930] leading-[1.15] text-center flex flex-col items-center justify-center space-y-1 sm:space-y-1.5"
            style={{ fontSize: 'clamp(1.4rem, 5vw, 3.8rem)' }}
          >
            <span className="whitespace-nowrap">REAL HARDWARE.</span>
            <span className="whitespace-nowrap">REAL CODE.</span>
            <span className="whitespace-nowrap text-[#006AA7]">REAL CHAMPIONS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto"
          >
            RoboKidovation Västerås is a hands-on, live-arena robotics tournament that turns abstract STEM concepts into real team-built machines — fostering genuine teamwork and technological ambition across schools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('about')}
              className="btn-pill-blue text-xs sm:text-sm font-bold py-3.5 px-8 flex items-center gap-2 mx-auto shadow-md"
            >
              <span>EXPLORE LEAGUE STORY</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* ── 3-COLUMN VALUE PILLARS BENTO ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, borderColor: 'rgba(0, 106, 167, 0.3)' }}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4 hover:border-[#006AA7]/30 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#006AA7]/10 border border-[#006AA7]/20 flex items-center justify-center text-[#006AA7]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-syne font-bold text-lg sm:text-xl text-[#0A1930] uppercase tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── HOST & PARTNER LOGO MARQUEE ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-16 border-t border-slate-200 text-center space-y-8"
        >
          <span className="block text-[10px] font-mono-code font-bold tracking-[0.25em] text-slate-500 uppercase">
            HOSTED & PRESENTED BY
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {PARTNER_LOGOS.map((logo) => (
              <motion.div
                key={logo.name}
                whileHover={{ scale: 1.08 }}
                className="flex flex-col items-center gap-2 cursor-pointer transition-all"
              >
                <img
                  src={logo.file}
                  alt={logo.name}
                  className="h-10 sm:h-12 w-auto object-contain transition-all"
                />
                <span className="text-[9px] font-mono-code text-slate-500 uppercase tracking-wide">
                  {logo.role}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
