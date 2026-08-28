import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';

export const RefSlushCountdown: React.FC = () => {
  const countdown = useCountdown('2026-03-21T09:00:00Z');

  const units = [
    { value: countdown.days, label: 'DAYS' },
    { value: countdown.hours, label: 'HRS' },
    { value: countdown.minutes, label: 'MIN' },
    { value: countdown.seconds, label: 'SEC' },
  ];

  return (
    <section className="w-full bg-[#070709] py-8 sm:py-12 px-4 sm:px-6 select-none">
      <div className="max-w-[960px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#0E0E12]/90 border border-white/[0.08] rounded-2xl sm:rounded-3xl py-8 sm:py-10 px-6 sm:px-12 text-center shadow-2xl flex flex-col items-center justify-center space-y-4"
        >
          {/* Top Label */}
          <span className="text-xs sm:text-sm font-sans font-medium text-slate-400 tracking-wide">
            Robo-Kido-A-Thon 2026, March 21 · ABB Arena, Västerås
          </span>

          {/* Slush-style horizontal numbers with side labels */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 pt-1">
            {units.map((unit) => (
              <div key={unit.label} className="flex items-baseline gap-1.5 sm:gap-2">
                <span className="font-headline font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
                  {unit.value}
                </span>
                <span className="text-[10px] sm:text-xs font-mono-code font-bold text-slate-400 uppercase tracking-wider">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
