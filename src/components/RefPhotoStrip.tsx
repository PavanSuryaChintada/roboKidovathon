import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Trophy, Landmark } from 'lucide-react';

export const RefPhotoStrip: React.FC = () => {
  const highlights = [
    {
      span: 'lg:col-span-8',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
      tag: 'ROBO-SPRINT ARENA',
      icon: Trophy,
      title: 'Air-Hockey Style Ball-Passing Duels',
      desc: 'Teams drive wired remote-controlled robots to pass as many balls as possible into the opponent’s court before the buzzer sounds.',
    },
    {
      span: 'lg:col-span-4',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=85',
      tag: 'IN-SCHOOL WORKSHOPS',
      icon: Sparkles,
      title: 'Rapid Hands-On Assembly',
      desc: 'Real gearmotors, chassis parts, and wired transmitters assembled by student teams directly in their classrooms.',
    },
    {
      span: 'lg:col-span-5',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=85',
      tag: 'GRAND FINALE · NOV 13, 2026',
      icon: Landmark,
      title: 'Inter-School Championship Showcase',
      desc: 'Qualifying teams from every participating school converge in Västerås for live refereed matches and an innovation showcase.',
    },
    {
      span: 'lg:col-span-7',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85',
      tag: 'LGR22-LINKED LEARNING',
      icon: GraduationCap,
      title: 'STEM Concepts You Can Touch, Test And Understand',
      desc: 'The 20-hour STEM project connects to central content in Teknik, Matematik and NO/Fysik — practical evidence of learning, not just attendance.',
    },
  ];

  return (
    <section className="w-full bg-white text-[#0A1930] py-28 px-6 sm:px-10 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-12">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <h2
              className="font-headline font-black uppercase tracking-tight leading-[1.02]"
              style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)' }}
            >
              <span className="text-stroke block">TOURNAMENT</span>
              <span className="text-[#0A1930] block">HIGHLIGHTS</span>
            </h2>
          </motion.div>

          <p className="text-xs sm:text-sm text-slate-500 font-light max-w-md leading-relaxed pb-2">
            Capturing the hands-on teamwork, mechanical build sessions, and live arena heats across Västerås schools.
          </p>
        </div>

        {/* ── PREMIUM EDITORIAL BENTO SHOWCASE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, borderColor: 'rgba(0, 106, 167, 0.35)' }}
                className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-[#0A1930] shadow-sm group cursor-pointer min-h-[340px] sm:min-h-[400px] flex flex-col justify-end p-6 sm:p-8 ${item.span}`}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1930] via-[#0A1930]/70 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="relative space-y-3">
                  <div className="flex items-center gap-2 text-[10px] font-mono-code font-bold text-[#FFCD00] uppercase tracking-wider">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.tag}</span>
                  </div>

                  <h3 className="font-headline font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-[#FFCD00] transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
