import React from 'react';
import { motion } from 'framer-motion';

interface RefKioskShowcaseProps {
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
}

export const RefKioskShowcase: React.FC<RefKioskShowcaseProps> = ({
  onNavigate,
  onOpenRegister,
}) => {
  return (
    <section className="w-full bg-[#070709] text-white py-28 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ── LEFT COLUMN: HEADLINE & TEXT ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          <h2
            className="font-headline font-black uppercase text-white leading-[1.12] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 6.5vw, 5.8rem)' }}
          >
            DESIGN<br />
            CREATE &<br />
            CONNECT.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-lg pt-2">
            Turnkey school delivery. Certified STEM mentors arrive directly at your school with all physical hardware kits, electronic controllers, and competition arena mats.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-lg">
            Zero administrative burden on school budgets. Mapped directly into the Swedish Lgr22 technology & digital competency syllabus.
          </p>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('for-schools')}
              className="btn-pill-white text-xs sm:text-sm font-bold py-3.5 px-8 shadow-xl"
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
          <div className="relative w-full max-w-[380px] rounded-3xl p-6 bg-[#121216] border border-white/15 shadow-2xl text-center space-y-6">
            <div className="py-4 space-y-2">
              <span className="block text-xs font-mono-code font-bold tracking-widest text-slate-400 uppercase">
                SWEDEN NATIONAL PILOT 2026
              </span>
              <h3
                className="font-headline font-black uppercase text-white leading-[1.12] tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)' }}
              >
                CUSTOM<br />
                ROBOT<br />
                STATION
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-xs text-slate-300 space-y-1.5 text-left">
              <div className="flex justify-between font-mono-code text-[11px]">
                <span className="text-slate-400">STATUS:</span>
                <span className="text-white font-bold">READY TO DEPLOY</span>
              </div>
              <div className="flex justify-between font-mono-code text-[11px]">
                <span className="text-slate-400">VENUE:</span>
                <span className="text-white">ABB ARENA VÄSTERÅS</span>
              </div>
            </div>

            {/* Tap To Begin Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenRegister}
              className="w-full py-3.5 rounded-full bg-[#22C55E] hover:bg-[#4ADE80] text-black font-headline font-black text-sm tracking-wider uppercase transition-all shadow-md"
            >
              REGISTER COHORT
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
