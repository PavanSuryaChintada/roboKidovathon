import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, ShieldCheck, Trophy } from 'lucide-react';

interface RefManifestoProps {
  onNavigate: (route: string) => void;
}

export const RefManifesto: React.FC<RefManifestoProps> = ({ onNavigate }) => {
  const logos = [
    { name: 'ABB ROBOTICS', sub: 'VENUE PARTNER' },
    { name: 'TECHFEST IIT BOMBAY', sub: 'GLOBAL LEAGUE' },
    { name: 'MÄLARDALEN UNIVERSITY', sub: 'ACADEMIC ADVISORY' },
    { name: 'VÄSTERÅS KOMMUN', sub: 'MUNICIPAL CLUSTER' },
    { name: 'SWEDISH STEM ACADEMY', sub: 'CURRICULUM LGR22' },
  ];

  const pillars = [
    {
      icon: Cpu,
      title: 'Turnkey In-School Delivery',
      desc: 'Certified STEM mentors arrive directly at your school with all physical hardware kits, electronic controllers, and competition arena mats.',
    },
    {
      icon: ShieldCheck,
      title: 'Swedish Lgr22 Aligned',
      desc: 'Directly fulfills the national curriculum criteria for technology, electronics, physics, and algorithmic digital competency.',
    },
    {
      icon: Trophy,
      title: 'ABB Arena City Finals',
      desc: 'Student cohorts qualify through classroom workshops to compete live at ABB Arena on March 21, 2026 under electronic timing.',
    },
  ];

  return (
    <section className="w-full bg-[#070709] text-white py-28 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto space-y-16">
        
        {/* ── MANIFESTO HEADLINE & INTRO ── */}
        <div className="text-center max-w-3xl mx-auto space-y-6">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-extrabold uppercase tracking-tight text-white leading-[1.1]"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)' }}
          >
            REAL HARDWARE. REAL CODE.<br />
            <span className="text-white">REAL CHAMPIONS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Robo-Kido-A-Thon is a hands-on, live-arena tournament model created to turn abstract STEM concepts into high-intensity physical robotics creations, fostering genuine teamwork and technological ambition across schools.
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
              className="btn-pill-white text-xs sm:text-sm font-bold py-3.5 px-8 flex items-center gap-2 mx-auto shadow-xl"
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
                whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.3)' }}
                className="p-8 rounded-3xl bg-[#121216] border border-white/10 space-y-4 hover:border-white/20 transition-all shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-syne font-bold text-lg sm:text-xl text-white uppercase tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── PARTNER & INSTITUTIONAL MARQUEE ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-16 border-t border-white/10 text-center space-y-8"
        >
          <span className="block text-[10px] font-mono-code font-bold tracking-[0.25em] text-slate-500 uppercase">
            OFFICIAL ADVISORY & INSTITUTIONAL PARTNERS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {logos.map((logo) => (
              <motion.div
                key={logo.name}
                whileHover={{ scale: 1.08, opacity: 1 }}
                className="flex flex-col items-center cursor-pointer transition-all"
              >
                <span className="font-syne font-bold text-sm sm:text-base tracking-wider text-slate-300">
                  {logo.name}
                </span>
                <span className="text-[9px] font-mono-code text-slate-500 uppercase mt-0.5">
                  {logo.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
