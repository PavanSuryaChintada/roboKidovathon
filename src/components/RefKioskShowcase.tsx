import React from 'react';
import { motion } from 'framer-motion';
import { roboSprintMatFocus } from '../assets/images';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface RefKioskShowcaseProps {
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
}

export const RefKioskShowcase: React.FC<RefKioskShowcaseProps> = ({
  onNavigate,
  onOpenRegister,
}) => {
  return (
    <section className="w-full bg-white text-[#0A1930] py-24 sm:py-28 px-6 sm:px-10 border-t border-slate-200 overflow-hidden">
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
              THE PORTABLE ARENA &amp; SETUP
            </span>
          </div>

          <h2
            className="font-headline font-black uppercase tracking-tight leading-[0.95] text-[#0A1930]"
            style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.8rem)' }}
          >
            DESIGN,<br />
            BUILD &amp;<br />
            COMPETE.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-lg pt-1">
            Turnkey school delivery. Mentors arrive directly at your school with the complete Robo-Sprint kit and the official 244 × 122 cm roll-out competition arena mat.
          </p>

          {/* Quick Classroom Requirements */}
          <div className="space-y-2.5 py-2">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-light">
              <CheckCircle2 className="w-4 h-4 text-[#006AA7] shrink-0 mt-0.5" />
              <span><strong>Classroom Footprint:</strong> Fits standard school folding tables or a small floor area.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-light">
              <CheckCircle2 className="w-4 h-4 text-[#006AA7] shrink-0 mt-0.5" />
              <span><strong>Zero Lab Budget:</strong> All motors, chassis, transmitters, batteries, and arena barriers provided.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-light">
              <CheckCircle2 className="w-4 h-4 text-[#006AA7] shrink-0 mt-0.5" />
              <span><strong>Low-Voltage Safe:</strong> Operates entirely on safe 6V DC low-voltage battery packs — no soldering.</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('for-schools')}
              className="btn-pill-lime text-xs sm:text-sm font-bold py-3.5 px-7 shadow-md flex items-center gap-2"
            >
              <span>FOR SCHOOLS GUIDE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('challenges')}
              className="btn-pill-outline text-xs sm:text-sm font-bold py-3.5 px-6"
            >
              <span>ARENA RULES</span>
            </button>
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN: ARENA SPECIFICATION CARD ── */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[440px] rounded-3xl p-6 sm:p-7 bg-[#0A1930] text-white border border-slate-200 shadow-xl space-y-6 overflow-hidden">
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
                244 cm × 122 cm Metric Mat
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-xs text-slate-300 space-y-2 font-mono-code">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">STATUS:</span>
                <span className="text-[#FFCD00] font-bold">READY TO DEPLOY IN SCHOOLS</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">FOOTPRINT:</span>
                <span className="text-white">2.44 m × 1.22 m ROLL-OUT</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">ARENA ARCHITECTURE:</span>
                <span className="text-white">ZIGZAG BARRIER &amp; DEFLECTION ARCHES</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">VENUE:</span>
                <span className="text-white">VÄSTERÅS MUNICIPAL DISTRICT</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={onOpenRegister}
              className="w-full py-3.5 rounded-full bg-[#FFCD00] hover:bg-[#E6B800] text-[#0A1930] font-syne font-black text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>REGISTER SCHOOL COHORT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
