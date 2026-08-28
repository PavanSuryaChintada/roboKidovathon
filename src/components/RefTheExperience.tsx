import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Zap, Trophy } from 'lucide-react';

interface RefTheExperienceProps {
  onNavigate: (route: string) => void;
  onOpenRegister?: () => void;
}

export const RefTheExperience: React.FC<RefTheExperienceProps> = ({
  onNavigate,
}) => {
  const cards = [
    {
      id: '01',
      title: 'PHYSICAL HARDWARE',
      desc: 'No drag-and-drop simulators. 100% genuine DC motors, IR sensor matrices, laser-cut acrylic chassis, and MicroPython firmware.',
      icon: Cpu,
      span: 'lg:col-span-4',
      bg: 'bg-[#121216]',
      border: 'border-white/10',
    },
    {
      id: '02',
      title: 'LIVE MATCH HEATS',
      desc: 'High-stakes obstacle mazes, speed trials, and precision line tracking under official referee timing at ABB Arena.',
      icon: Trophy,
      span: 'lg:col-span-4',
      bg: 'bg-[#121216]',
      border: 'border-white/10',
    },
    {
      id: '03',
      title: 'ZERO BUDGET STRAIN',
      desc: '100 SEK fee per student. Turnkey delivery covers certified mentors, competition arenas, hardware kits, and transport guidance.',
      icon: Zap,
      span: 'lg:col-span-4',
      bg: 'bg-[#121216]',
      border: 'border-white/10',
    },
  ];

  return (
    <section className="w-full bg-[#070709] text-white py-28 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* ── TOP HEADLINE: THE (Outline) EXPERIENCE (Solid) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-headline font-black uppercase tracking-tight leading-[1.02]"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
            >
              <span className="text-stroke block">THE</span>
              <span className="text-white block">EXPERIENCE</span>
            </h2>
          </motion.div>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-md leading-relaxed pb-2">
            Engineered specifically to fulfill Swedish curriculum requirements while delivering an unforgettable arena championship atmosphere.
          </p>
        </div>

        {/* ── 3-COLUMN BENTO GRID WITH MOTION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(250, 204, 21, 0.4)' }}
                className={`rounded-3xl p-8 ${card.bg} border ${card.border} space-y-6 flex flex-col justify-between hover:border-white/25 transition-all shadow-xl ${card.span}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-xs font-bold text-slate-500">
                      // {card.id}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.06] flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-headline font-bold text-2xl uppercase tracking-wide text-white">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-headline font-bold text-xs uppercase tracking-wider text-slate-400">
                    SWEDEN 2026 PILOT
                  </span>
                  <button
                    onClick={() => onNavigate('challenges')}
                    className="text-xs font-bold text-[#FACC15] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
