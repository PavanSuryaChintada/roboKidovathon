import React from 'react';
import { ROADMAP_STEPS } from '../data/roboData';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface HowItWorksPageProps {
  onOpenRegister: () => void;
  onNavigateHome: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onOpenRegister,
  onNavigateHome,
}) => {
  return (
    <div className="w-full min-h-screen bg-[#070709] text-white pt-28 pb-24 px-6 sm:px-10 select-none">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* Back Button */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono-code font-bold tracking-wider text-[#22C55E] uppercase hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        {/* ── HEADER: HOW IT (Outline) WORKS (Solid) ── */}
        <div className="border-b border-white/10 pb-12">
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#22C55E] uppercase block mb-3">
            METHODOLOGY & SYLLABUS // VÄSTERÅS 2026
          </span>
          
          <h1
            className="font-headline font-black uppercase tracking-tight leading-[0.88]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">HOW IT</span>
            <span className="text-white block">WORKS</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
            Our turnkey 5-stage tournament pipeline designed to take students with zero prior engineering background from complete beginners to confident arena competitors.
          </p>
        </div>

        {/* ── 5 STAGE ROADMAP BENTO CARDS ── */}
        <div className="space-y-6">
          {ROADMAP_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="p-8 sm:p-12 rounded-3xl border border-white/15 bg-[#121216] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-white/25 transition-all"
            >
              <div className="lg:col-span-3 space-y-1">
                <span className="font-headline font-black text-6xl text-[#22C55E] leading-none block">
                  {step.stepNumber}
                </span>
                <span className="text-[10px] font-mono-code font-bold tracking-widest text-slate-400 uppercase block">
                  {step.tag}
                </span>
              </div>

              <div className="lg:col-span-6 space-y-2">
                <h2 className="font-headline font-black uppercase text-2xl sm:text-3xl text-white tracking-wide">
                  {step.title} — {step.subtitle}
                </h2>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <span className="text-xs font-headline font-bold text-black bg-[#FACC15] px-4 py-2 rounded-full uppercase tracking-wider shadow-md">
                  ✓ CERTIFIED PHASE
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── GRAPHIC TAPE CALLOUT BANNER ── */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#121216] via-[#1A1A22] to-[#121216] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#22C55E] text-black font-headline font-black text-[10px] uppercase tracking-wider mb-2">
              FEBRUARY 2026 COHORT
            </div>
            <h3 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              Ready to bring this to your students?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light mt-1 max-w-lg">
              School registration closes January 31, 2026. Turnkey kit allocation and trainer schedules provided.
            </p>
          </div>
          <button
            onClick={onOpenRegister}
            className="btn-pill-lime text-xs font-black py-4 px-8 whitespace-nowrap flex items-center gap-2"
          >
            <span>REGISTER COHORT NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
