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
      title: 'REAL BUILD KIT',
      desc: 'No screens-only simulators. Every team builds with a genuine Robo-Sprint kit — gearboxes, wheels, chassis parts, and a wired transmitter.',
      icon: Cpu,
      span: 'lg:col-span-4',
    },
    {
      id: '02',
      title: 'LIVE ARENA MATCHES',
      desc: 'Arena ball-transfer Robo-Sprint heats — 3-minute matches for both the Explorer and Advanced leagues — refereed live on the divided arena mat.',
      icon: Trophy,
      span: 'lg:col-span-4',
    },
    {
      id: '03',
      title: 'SCHOOL-FIRST DELIVERY',
      desc: 'It starts with a 20-hour, ten-session in-school STEM project. Mentors bring the kit, arena mat, and team guidance directly to your classroom.',
      icon: Zap,
      span: 'lg:col-span-4',
    },
  ];

  return (
    <section className="w-full bg-white text-[#0A1930] py-28 px-6 sm:px-10 border-t border-slate-200 overflow-hidden">
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
              <span className="text-[#0A1930] block">EXPERIENCE</span>
            </h2>
          </motion.div>

          <p className="text-sm sm:text-base text-slate-600 font-light max-w-md leading-relaxed pb-2">
            INIAC's STEM programme for the Swedish school environment — real teamwork, real hardware, real matches.
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
                whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(0, 106, 167, 0.35)' }}
                className={`rounded-3xl p-8 bg-[#F8FAFC] border border-slate-200 space-y-6 flex flex-col justify-between hover:border-[#006AA7]/30 transition-all shadow-sm ${card.span}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-xs font-bold text-slate-400">
                      // {card.id}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#006AA7]/10 flex items-center justify-center text-[#006AA7]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-headline font-bold text-2xl uppercase tracking-wide text-[#0A1930]">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="font-headline font-bold text-xs uppercase tracking-wider text-slate-500">
                    VÄSTERÅS 2026
                  </span>
                  <button
                    onClick={() => onNavigate('challenges')}
                    className="text-xs font-bold text-[#006AA7] hover:text-[#0A1930] flex items-center gap-1 transition-colors"
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
