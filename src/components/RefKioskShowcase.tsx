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
    <section id="design-build-compete" className="w-full bg-white text-[#0A1930] py-14 sm:py-18 px-6 sm:px-10 border-t border-slate-200 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto space-y-8">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#006AA7] uppercase block">
              SCHOOL ROBOTICS ECOSYSTEM // PORTABLE SETUP
            </span>
            <h2 className="font-headline font-black text-2xl sm:text-3xl md:text-4xl text-[#0A1930] uppercase tracking-tight">
              DESIGN, BUILD <span className="text-[#006AA7]">&amp; COMPETE</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xl">
              Turnkey classroom delivery and tournament equipment. Reusable hardware kits paired with the official roll-out competition arena.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-code text-slate-500 font-bold uppercase tracking-wider">
              2-CARD ECOSYSTEM
            </span>
          </div>
        </div>

        {/* ── COHESIVE TWO-CARD GROUPED LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* ── CARD 1: ROBO SPRINT (BUILD & HARDWARE) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-6 sm:p-8 bg-[#F8FAFC] border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-code font-bold px-2.5 py-1 rounded-full bg-[#006AA7]/10 text-[#006AA7] border border-[#006AA7]/20 uppercase tracking-wider">
                  ROBO SPRINT // CLASSROOM BUILD
                </span>
                <span className="text-xs font-mono-code text-slate-400 font-bold">CARD 01</span>
              </div>

              <div>
                <h3 className="font-headline font-black text-2xl sm:text-3xl text-[#0A1930] uppercase tracking-tight">
                  Robo-Sprint Hardware Kit
                </h3>
                <p className="text-xs font-mono-code text-[#006AA7] font-bold mt-1 uppercase">
                  Turnkey Classroom Delivery · Safe 6V DC
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Mentors arrive directly at your school with official mechanical kits, gearboxes, wired controllers, and battery packs. Every student cohort builds, tests, and refines a working competition robot.
              </p>

              {/* Requirement Checklist */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#006AA7] shrink-0 mt-0.5" />
                  <span><strong>Classroom Footprint:</strong> Fits standard school tables or a small floor area.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#006AA7] shrink-0 mt-0.5" />
                  <span><strong>Zero Lab Budget:</strong> All motors, chassis, controllers &amp; batteries provided.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#006AA7] shrink-0 mt-0.5" />
                  <span><strong>Low-Voltage Safe:</strong> Operates entirely on safe 6V DC power — zero soldering.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('for-schools')}
                className="btn-pill-lime text-xs font-bold py-3 px-6 shadow-xs flex items-center gap-2"
              >
                <span>FOR SCHOOLS GUIDE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenRegister}
                className="btn-pill-outline text-xs font-bold py-3 px-5"
              >
                <span>REQUEST KITS</span>
              </button>
            </div>
          </motion.div>

          {/* ── CARD 2: ARENA MATCH (ARENA SPECIFICATION) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-6 sm:p-8 bg-[#0A1930] text-white border border-[#0A1930] shadow-md flex flex-col justify-between space-y-6 relative overflow-hidden"
          >
            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#006AA7]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-code font-bold tracking-widest text-[#FFCD00] uppercase">
                  ARENA SPECIFICATION // MODEL 2026.1
                </span>
                <span className="text-xs font-mono-code text-slate-400 font-bold">CARD 02</span>
              </div>

              <div>
                <h3 className="font-headline font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Arena Match Dual Court
                </h3>
                <p className="text-xs font-mono-code text-[#FFCD00] font-bold mt-1 uppercase">
                  244 cm × 122 cm Roll-Out Metric Mat
                </p>
              </div>

              {/* 3D CAD Mat Spec Render Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white/10 border border-white/15 p-2.5 group flex items-center justify-center">
                <img
                  src={roboSprintMatFocus}
                  alt="Robo-Sprint Arena Mat 3D Specification"
                  className="w-full h-auto max-h-[140px] sm:max-h-[160px] object-contain mx-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#0A1930]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono-code font-bold text-[#FFCD00] uppercase border border-white/10 shadow">
                  Official Tournament Arena
                </div>
              </div>

              {/* Specs Grid */}
              <div className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 text-xs text-slate-300 space-y-1.5 font-mono-code">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">STATUS:</span>
                  <span className="text-[#FFCD00] font-bold">DEPLOYED IN SCHOOLS</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">FOOTPRINT:</span>
                  <span className="text-white font-bold">2.44 m × 1.22 m ROLL-OUT</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">ARCHITECTURE:</span>
                  <span className="text-white">ZIGZAG CENTRAL BARRIER</span>
                </div>
              </div>
            </div>

            <div className="relative pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenRegister}
                className="btn-pill-lime text-xs font-bold py-3 px-6 shadow-xs flex items-center gap-2"
              >
                <span>REGISTER COHORT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('challenges')}
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-mono-code font-bold uppercase transition-all"
              >
                <span>ARENA RULES</span>
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

