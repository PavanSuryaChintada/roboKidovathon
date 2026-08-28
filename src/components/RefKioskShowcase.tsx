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
    <section className="w-full bg-[#070709] text-white py-24 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
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
            className="font-headline font-black uppercase text-white leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 6.5vw, 5.8rem)' }}
          >
            DESIGN<br />
            CREATE &<br />
            CONNECT.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-lg">
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

        {/* ── RIGHT COLUMN: VERTICAL KIOSK / TABLET ARENA MOCKUP WITH MOTION ── */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-[380px] rounded-[36px] p-4 bg-gradient-to-b from-[#2E1065] via-[#4C1D95] to-[#1E1B4B] border-4 border-indigo-500/40 shadow-[0_0_50px_rgba(147,51,234,0.3)] transition-all cursor-pointer"
          >
            {/* Screen Notch / Frame */}
            <div className="w-full bg-[#0F0B1E] rounded-[28px] p-6 text-center space-y-6 border border-white/10 overflow-hidden relative" style={{ minHeight: '520px' }}>
              
              {/* Graphic Neon Header Tag */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#22C55E] text-black font-headline font-black text-xs tracking-wider uppercase shadow-md">
                SWEDEN NATIONAL PILOT 2026
              </div>

              {/* Central Title */}
              <div className="py-8 space-y-2">
                <span className="block text-xs font-mono-code font-bold tracking-[0.25em] text-[#FACC15] uppercase">
                  OFFICIAL TOURNAMENT DISCIPLINE
                </span>
                <h3
                  className="font-headline font-black uppercase text-white leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)' }}
                >
                  CUSTOM<br />
                  <span className="text-[#A855F7]">ROBOT</span><br />
                  STATION
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 text-xs text-slate-300 space-y-1 text-left">
                <div className="flex justify-between font-mono-code text-[10px]">
                  <span className="text-slate-400">STATUS:</span>
                  <span className="text-[#22C55E] font-bold">READY TO DEPLOY</span>
                </div>
                <div className="flex justify-between font-mono-code text-[10px]">
                  <span className="text-slate-400">VENUE:</span>
                  <span className="text-white">ABB ARENA VÄSTERÅS</span>
                </div>
              </div>

              {/* Tap To Begin Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenRegister}
                className="w-full py-4 rounded-full bg-[#22C55E] hover:bg-[#4ADE80] text-black font-headline font-black text-sm tracking-wider uppercase transition-all shadow-lg mt-4 animate-pulse"
              >
                TAP TO REGISTER
              </motion.button>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
