import React from 'react';
import { Check, ShieldCheck, School, ArrowRight, Sparkles } from 'lucide-react';

interface PricingSchoolPortalProps {
  onOpenRegisterModal: () => void;
}

export const PricingSchoolPortal: React.FC<PricingSchoolPortalProps> = ({ onOpenRegisterModal }) => {
  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-bold text-[#0062B8] uppercase tracking-wider">
            Registration & School Partnerships
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Accessible Pricing & Zero-Cost School Administration
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            We ensure complete transparency and zero financial overhead for participating schools while maintaining an accessible participation model for students.
          </p>
        </div>

        {/* 2 Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Student Entry Pass */}
          <div className="lg:col-span-6 bg-white rounded-lg p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-50 text-[#0062B8] border border-blue-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                  Student Entry Ticket
                </span>
                <span className="text-xs text-slate-500 font-semibold">All-Inclusive Pass</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
                Individual Student Pass
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium mb-6">
                Covers hands-on workshop, robotics hardware kit usage, mentorship, arena entry, and official certification.
              </p>

              {/* Price Display Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-md p-6 mb-8 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-extrabold font-display text-[#0062B8]">125</span>
                  <span className="text-xl font-bold text-slate-900">SEK</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 font-semibold">
                  (100 SEK + VAT per student entry)
                </p>
              </div>

              {/* Includes Checklist */}
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-[#0062B8] text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                    ✓
                  </div>
                  <span>Full 2-Hour Hands-on Workshop & Hardware Access</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-[#0062B8] text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                    ✓
                  </div>
                  <span>Arena Competition Entry at ABB Venue, Västerås</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-[#0062B8] text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                    ✓
                  </div>
                  <span>Mentorship by Expert STEM Trainers</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-[#0062B8] text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                    ✓
                  </div>
                  <span>Official Diploma Certificate & Event Media Showcase</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenRegisterModal}
              className="w-full px-6 py-3.5 text-sm font-bold text-white bg-[#0062B8] hover:bg-[#00529B] rounded-md transition shadow-xs flex items-center justify-center gap-2 group"
            >
              <span>Register Student (125 SEK)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Card 2: School Portal & Zero Cost Info */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-lg p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                  For School Administrators
                </span>
                <span className="text-xs text-slate-500 font-semibold">100% Free For Schools</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
                Zero Cost School Administration
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium mb-6">
                We handle the heavy lifting. All robotics kits, arena mats, scoring systems, and facilitators are provided directly by our organization.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-slate-50 p-4.5 rounded-md border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#0062B8]" />
                    <span>What We Provide To Your School</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 font-bold" />
                      <span>Physical Hardware Kits</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 font-bold" />
                      <span>Trainers & STEM Mentors</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 font-bold" />
                      <span>Official Arena Mats & Logistics</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 font-bold" />
                      <span>Diplomas & Certificates</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4.5 rounded-md border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                    <School className="w-4 h-4 text-slate-700" />
                    <span>What We Request From Schools</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0062B8]" />
                      <span>Open space / classroom for a 2-hour workshop in Feb 2026.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0062B8]" />
                      <span>4 teacher volunteers during school round; 1 during City Finals.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-md border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Need a custom school invoice or group entry?</span>
              </div>
              <a
                href="mailto:contact@robokidoathon.se"
                className="text-[#0062B8] hover:underline font-bold"
              >
                Contact Organizers →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
