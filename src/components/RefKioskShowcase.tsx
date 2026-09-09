import React from 'react';
import { motion } from 'framer-motion';
import { roboSprintMatFocus } from '../assets/images';

interface RefKioskShowcaseProps {
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
}

export const RefKioskShowcase: React.FC<RefKioskShowcaseProps> = ({
  onNavigate,
  onOpenRegister,
}) => {
  return (
    <section className="w-full bg-white text-[#0A1930] py-28 px-6 sm:px-10 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── LEFT COLUMN: HEADLINE & TEXT ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="space-y-2">
            <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#006AA7] uppercase block">
              SCHOOL ROBOTICS ECOSYSTEM
            </span>
            <span className="text-xs font-mono-code text-slate-500 uppercase tracking-widest block">
              01 // THE HARDWARE
            </span>
          </div>

          <h2
            className="font-headline font-black uppercase tracking-tight leading-[0.95] text-[#0A1930]"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
          >
            DESIGN<br />
            BUILD &<br />
            CONNECT.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-lg pt-2">
            Turnkey school delivery. Mentors arrive directly at your school with the full Robo-Sprint hardware kit and the divided arena mat.
          </p>

          <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-lg">
            Zero administrative burden on school budgets — kits, workshops, and mentor support are coordinated directly with your school.
          </p>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('for-schools')}
              className="btn-pill-white text-xs sm:text-sm font-bold py-3.5 px-8 shadow-md"
            >
              <span>VIEW FOR SCHOOLS →</span>
            </motion.button>
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN: VERTICAL ARENA KIOSK CARD ── */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] rounded-3xl p-6 bg-[#0A1930] text-white border border-slate-200 shadow-xl space-y-6 overflow-hidden">
            {/* Ambient Backlight */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#006AA7]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-1">
              <span className="block text-[10px] font-mono-code font-bold tracking-widest text-[#FFCD00] uppercase">
                ARENA SPECIFICATION // MODEL 2026.1
              </span>
              <h3 className="font-syne font-extrabold text-2xl uppercase text-white tracking-tight">
                Robo-Sprint Dual Arena
              </h3>
            </div>

            {/* 3D CAD Arena Mat Render Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-white/20 p-3 shadow-inner group flex items-center justify-center">
              <img
                src={roboSprintMatFocus}
                alt="Robo-Sprint Arena Mat 3D Specification"
                className="w-full h-auto max-h-[220px] object-contain mx-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#0A1930]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono-code font-bold text-[#FFCD00] uppercase border border-white/10 shadow">
                8 ft × 4 ft Official Court
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-xs text-slate-300 space-y-2">
              <div className="flex justify-between font-mono-code text-[11px]">
                <span className="text-slate-400">STATUS:</span>
                <span className="text-[#FFCD00] font-bold">READY TO DEPLOY IN SCHOOLS</span>
              </div>
              <div className="flex justify-between font-mono-code text-[11px]">
                <span className="text-slate-400">ARENA ARCHITECTURE:</span>
                <span className="text-white">ZIGZAG BARRIER WITH ARCHES</span>
              </div>
              <div className="flex justify-between font-mono-code text-[11px]">
                <span className="text-slate-400">VENUE:</span>
                <span className="text-white">VÄSTERÅS MUNICIPAL DISTRICT</span>
              </div>
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenRegister}
              className="w-full py-3.5 rounded-full bg-[#FFCD00] hover:bg-[#E6B800] text-[#0A1930] font-syne font-black text-xs tracking-wider uppercase transition-all shadow-md"
            >
              REGISTER SCHOOL COHORT
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
