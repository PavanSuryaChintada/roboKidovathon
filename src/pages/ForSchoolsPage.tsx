import React from 'react';
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';

interface ForSchoolsPageProps {
  onOpenRegister: () => void;
  onOpenDeckModal: () => void;
  onNavigateHome: () => void;
}

export const ForSchoolsPage: React.FC<ForSchoolsPageProps> = ({
  onOpenRegister,
  onOpenDeckModal,
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
            PRINCIPALS & EDUCATORS PORTAL // VÄSTERÅS 2026
          </span>
          <h1
            className="font-display font-black uppercase leading-none tracking-tight text-[#07111F]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            For Schools &<br />
            <span className="text-[#0052FF]">Institutions.</span>
          </h1>
          <p className="mt-4 text-base text-[#4A5568] font-light max-w-2xl leading-relaxed">
            A comprehensive, turnkey robotics tournament programme created specifically to eliminate administrative overhead, supply all physical hardware, and seamlessly map into the Swedish curriculum.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-[#07111F]/15 rounded-[2px] bg-[#F8F9FA] space-y-4">
            <span className="text-[10px] font-mono-code font-bold text-[#0052FF] uppercase block">
              PILLAR 01 // BUDGET
            </span>
            <h2 className="font-display font-black text-2xl uppercase tracking-tight text-[#07111F]">
              Zero School Budget Cost
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
              No expensive equipment purchases or recurring software licenses required. The transparent 100 SEK (+VAT) per student fee covers all workshop kits, instruction, and competition infrastructure.
            </p>
          </div>

          <div className="p-8 border border-[#07111F]/15 rounded-[2px] bg-[#F8F9FA] space-y-4">
            <span className="text-[10px] font-mono-code font-bold text-[#0052FF] uppercase block">
              PILLAR 02 // LOGISTICS
            </span>
            <h2 className="font-display font-black text-2xl uppercase tracking-tight text-[#07111F]">
              Complete Turnkey Delivery
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
              Certified STEM trainers arrive directly at your school with all physical kits, competition arena mats, and microcontrollers. Schools simply provide an open room for 2 hours in February 2026.
            </p>
          </div>

          <div className="p-8 border border-[#07111F]/15 rounded-[2px] bg-[#F8F9FA] space-y-4">
            <span className="text-[10px] font-mono-code font-bold text-[#0052FF] uppercase block">
              PILLAR 03 // PEDAGOGY
            </span>
            <h2 className="font-display font-black text-2xl uppercase tracking-tight text-[#07111F]">
              Lgr22 Curriculum Aligned
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
              Directly supports technology, physics, and digital competency learning goals. Fosters collaborative problem solving, physical engineering intuition, and algorithmic thinking.
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 sm:p-12 bg-[#07111F] text-white rounded-[2px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-2">
            <span className="text-[10px] font-mono-code font-bold text-[#E2FF00] uppercase">
              RESERVE WORKSHOP DATES FOR FEBRUARY 2026
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight">
              Enrol Your School Cohort Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-lg">
              School slots are limited to 15 participating institutions across the Västerås municipal cluster for the 2026 pilot.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={onOpenRegister}
              className="btn-volt-primary text-xs py-4 px-6"
            >
              <span>REGISTER SCHOOL NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenDeckModal}
              className="btn-editorial-ghost-dark text-xs py-3.5 px-6"
            >
              <Download className="w-4 h-4 text-[#E2FF00]" />
              <span>DOWNLOAD PROSPECTUS PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
