import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Trophy, Sparkles } from 'lucide-react';

export const RefPhotoStrip: React.FC = () => {
  const highlights = [
    {
      span: 'lg:col-span-8',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
      tag: 'ARENA CALIBRATION // MARCH 2026',
      icon: Cpu,
      title: 'Autonomous Speed & Precision Duels',
      desc: 'Students write MicroPython algorithms to process optical line feedback, adjust PWM motor torque, and navigate complex match courses under electronic laser timing.',
    },
    {
      span: 'lg:col-span-4',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=85',
      tag: 'IN-SCHOOL WORKSHOPS',
      icon: Sparkles,
      title: 'Rapid Physical Prototyping',
      desc: 'Zero plastic toy blocks. Real DC gearmotors, chassis fasteners, and optical sensor arrays assembled directly in classrooms.',
    },
    {
      span: 'lg:col-span-5',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=85',
      tag: 'ABB ARENA VÄSTERÅS',
      icon: Trophy,
      title: 'Refereed Tournament Knockouts',
      desc: 'High-stakes buzzer-timed qualifying heats on standardized match mats under certified referee oversight.',
    },
    {
      span: 'lg:col-span-7',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85',
      tag: 'LGR22 CURRICULUM ALIGNED',
      icon: ShieldCheck,
      title: 'Translating Theory into Tournament Trophies',
      desc: 'Hands-on electrical circuits, gear ratios, and algorithmic control logic directly fulfilling Swedish national STEM criteria.',
    },
  ];

  return (
    <section className="w-full bg-[#070709] text-white py-28 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
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
            <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#22C55E] uppercase block">
              LIVE MATCH ARENAS // VÄSTERÅS 2026
            </span>
            <h2
              className="font-headline font-black uppercase tracking-tight leading-[1.02]"
              style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)' }}
            >
              <span className="text-stroke block">TOURNAMENT</span>
              <span className="text-white block">HIGHLIGHTS</span>
            </h2>
          </motion.div>

          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md leading-relaxed pb-2">
            Capturing the intense engineering collaboration, closed-loop firmware coding, and live referee heats across Swedish schools.
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
                whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.3)' }}
                className={`relative overflow-hidden rounded-3xl border border-white/15 bg-[#121216] shadow-2xl group cursor-pointer min-h-[340px] sm:min-h-[400px] flex flex-col justify-end p-6 sm:p-8 ${item.span}`}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="relative space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[9px] font-mono-code font-bold text-[#22C55E] uppercase tracking-wider">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.tag}</span>
                  </div>

                  <h3 className="font-headline font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-[#22C55E] transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xl">
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
