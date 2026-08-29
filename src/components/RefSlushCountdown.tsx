import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';

interface RefSlushCountdownProps {
  onOpenRegister?: () => void;
}

export const RefSlushCountdown: React.FC<RefSlushCountdownProps> = ({ onOpenRegister }) => {
  const countdown = useCountdown('2026-11-10T23:59:59+01:00');

  const units = [
    { value: countdown.days, label: 'DAYS' },
    { value: countdown.hours, label: 'HRS' },
    { value: countdown.minutes, label: 'MIN' },
    { value: countdown.seconds, label: 'SEC' },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-16 px-4 sm:px-6 select-none">
      <div className="max-w-[960px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#F2F6FA] border border-slate-200 rounded-2xl sm:rounded-3xl py-10 sm:py-12 px-6 sm:px-12 text-center shadow-sm flex flex-col items-center justify-center space-y-6"
        >
          {/* Top Label */}
          <span className="text-xs sm:text-sm font-sans font-medium text-slate-600 tracking-wide">
            RoboKidovation Västerås · Grand Finale, November 10, 2026
          </span>

          {/* Horizontal numbers with side labels */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 pt-2">
            {countdown.isExpired ? (
              <span className="font-headline font-black text-2xl sm:text-4xl text-[#0A1930] tracking-tight leading-none uppercase">
                It's Grand Finale day!
              </span>
            ) : (
              units.map((unit) => (
                <div key={unit.label} className="flex items-baseline gap-2 sm:gap-2.5">
                  <span className="font-headline font-black text-4xl sm:text-5xl md:text-6xl text-[#0A1930] tracking-tight leading-none">
                    {unit.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono-code font-bold text-slate-500 uppercase tracking-wider">
                    {unit.label}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Flashing urgency CTA */}
          {!countdown.isExpired && (
            <motion.button
              onClick={onOpenRegister}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flash-cta inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-headline font-black text-xs sm:text-sm tracking-wider uppercase shadow-md cursor-pointer"
            >
              <span>Registration closing soon</span>
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};
