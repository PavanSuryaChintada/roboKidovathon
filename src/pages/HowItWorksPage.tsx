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
    <div className="w-full bg-white text-[#07111F] pt-28 pb-20 select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono-code font-bold tracking-wider text-[#0052FF] uppercase mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        <div className="border-b border-[#07111F]/10 pb-12">
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#0052FF] uppercase block mb-3">
            METHODOLOGY & SYLLABUS // VÄSTERÅS 2026
          </span>
          <h1
            className="font-display font-black uppercase leading-none tracking-tight text-[#07111F]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            How It<br />
            <span className="text-[#0052FF]">Works.</span>
          </h1>
          <p className="mt-4 text-base text-[#4A5568] font-light max-w-2xl leading-relaxed">
            Our turnkey 5-stage tournament pipeline designed to take students with zero prior engineering background from complete beginners to confident arena competitors.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {ROADMAP_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="p-8 sm:p-12 border border-[#07111F]/15 rounded-[2px] bg-[#F8F9FA] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-3">
                <span className="font-display font-black text-6xl text-[#0052FF] leading-none block">
                  {step.stepNumber}
                </span>
                <span className="text-[10px] font-mono-code font-bold tracking-widest text-[#4A5568] uppercase mt-1 block">
                  {step.tag}
                </span>
              </div>

              <div className="lg:col-span-6 space-y-2">
                <h2 className="font-display font-black uppercase text-2xl sm:text-3xl text-[#07111F]">
                  {step.title} — {step.subtitle}
                </h2>
                <p className="text-sm text-[#4A5568] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <span className="text-xs font-mono-code font-bold text-[#07111F] bg-white border border-[#07111F]/15 px-3.5 py-2 rounded-[2px]">
                  ✓ CERTIFIED PHASE
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 sm:p-12 bg-[#07111F] text-white rounded-[2px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display font-black text-2xl uppercase tracking-tight">
              Ready to bring this to your students?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light mt-1 max-w-lg">
              Workshops take place in February 2026. Register your school or team before January 31, 2026.
            </p>
          </div>
          <button
            onClick={onOpenRegister}
            className="btn-volt-primary text-xs py-4 px-8 whitespace-nowrap"
          >
            <span>REGISTER COHORT NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
