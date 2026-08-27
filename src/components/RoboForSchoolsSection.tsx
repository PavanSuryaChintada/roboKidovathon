import React from 'react';

interface RoboForSchoolsSectionProps {
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
}

export const RoboForSchoolsSection: React.FC<RoboForSchoolsSectionProps> = ({
  onNavigate,
  onOpenRegister,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="card-event p-8 sm:p-12 border-2 border-slate-900">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-8 mb-8 gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
              EDUCATORS & PRINCIPALS PORTAL
            </span>
            <h2 className="text-4xl sm:text-6xl font-syne font-extrabold uppercase text-[#0F172A] leading-none">
              BRING ROBOTICS TO YOUR SCHOOL.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('for-schools')}
            className="btn-event-secondary text-sm px-6 py-3 rounded-xl self-start md:self-auto"
          >
            FOR SCHOOLS PORTAL →
          </button>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Deliverables */}
          <div className="space-y-3">
            <h3 className="font-syne font-extrabold text-xl uppercase text-[#0F172A] border-b border-slate-200 pb-2">
              WHAT WE PROVIDE
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-dmsans text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#0052FF] font-bold">✓</span>
                <span>Official Robotics Kits & Electronic Drivers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0052FF] font-bold">✓</span>
                <span>Dedicated Trainers & STEM Mentors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0052FF] font-bold">✓</span>
                <span>Certificates for All Student Participants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0052FF] font-bold">✓</span>
                <span>Full Arena Logistics, Referees & Live Scoring</span>
              </li>
            </ul>
          </div>

          {/* School Requirements */}
          <div className="space-y-3">
            <h3 className="font-syne font-extrabold text-xl uppercase text-[#0F172A] border-b border-slate-200 pb-2">
              SCHOOL REQUIREMENTS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-dmsans text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#0F172A] font-bold">▶</span>
                <span>School venue for intro workshop & school qualifiers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0F172A] font-bold">▶</span>
                <span>4 teacher volunteers during school-level event</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0F172A] font-bold">▶</span>
                <span>1 teacher volunteer during City Finals in Västerås</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0F172A] font-bold">▶</span>
                <span>Student participant coordination</span>
              </li>
            </ul>
          </div>

          {/* Transparent Cost Box */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-syne font-extrabold text-xl uppercase text-white border-b border-slate-800 pb-2">
                TRANSPARENT COST MODEL
              </h3>
              <div className="my-4 text-center">
                <span className="text-5xl font-syne font-extrabold text-[#E2FF00] block leading-none">
                  100 SEK
                </span>
                <span className="text-xs font-mono text-slate-300 block mt-1 uppercase">
                  + VAT (125 SEK TOTAL PER STUDENT)
                </span>
              </div>
              <p className="text-xs font-dmsans text-slate-300 text-center bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                Zero administrative overhead for school administration. Complete turnkey event execution.
              </p>
            </div>

            <button
              onClick={onOpenRegister}
              className="btn-event-blue w-full py-3.5 text-xs sm:text-sm rounded-xl text-center"
            >
              REGISTER YOUR SCHOOL NOW →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
