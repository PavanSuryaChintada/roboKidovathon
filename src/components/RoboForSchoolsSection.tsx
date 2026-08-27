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
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="card-event p-6 sm:p-10 border-2 border-slate-900">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 mb-6 gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
              EDUCATORS & PRINCIPALS PORTAL
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A]">
              Bring Robotics to Your School.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('for-schools')}
            className="btn-event-secondary text-xs px-5 py-2.5 rounded-lg self-start md:self-auto"
          >
            FOR SCHOOLS PORTAL →
          </button>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Deliverables */}
          <div className="space-y-2">
            <h3 className="font-bold text-base uppercase text-[#0F172A] border-b border-slate-200 pb-2">
              WHAT WE PROVIDE
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-jakarta text-slate-600">
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
          <div className="space-y-2">
            <h3 className="font-bold text-base uppercase text-[#0F172A] border-b border-slate-200 pb-2">
              SCHOOL REQUIREMENTS
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-jakarta text-slate-600">
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
          <div className="bg-slate-900 text-white p-5 rounded-xl flex flex-col justify-between space-y-3">
            <div>
              <h3 className="font-bold text-base uppercase text-white border-b border-slate-800 pb-2">
                TRANSPARENT COST MODEL
              </h3>
              <div className="my-3 text-center">
                <span className="text-4xl font-extrabold text-[#E2FF00] block leading-none">
                  100 SEK
                </span>
                <span className="text-xs font-mono text-slate-300 block mt-1 uppercase">
                  + VAT (125 SEK TOTAL PER STUDENT)
                </span>
              </div>
              <p className="text-xs font-jakarta text-slate-300 text-center bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                Zero administrative overhead for school administration. Complete turnkey event execution.
              </p>
            </div>

            <button
              onClick={onOpenRegister}
              className="btn-event-blue w-full py-3 text-xs sm:text-sm rounded-lg text-center"
            >
              REGISTER YOUR SCHOOL NOW →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
