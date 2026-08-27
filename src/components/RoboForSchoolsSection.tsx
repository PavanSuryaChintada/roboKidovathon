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
    <section className="w-full bg-white text-[#0B1020] py-20 md:py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="card-editorial p-6 sm:p-10 border border-slate-200">
          {/* Top Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 mb-8 gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1.5">
                11 // EDUCATORS & PRINCIPALS PORTAL
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0B1020] text-balance tracking-tight">
                Bring Robotics to Your School.
              </h2>
            </div>

            <button
              onClick={() => onNavigate('for-schools')}
              className="btn-event-secondary-light text-xs px-5 py-2.5 rounded-md self-start md:self-auto whitespace-nowrap"
            >
              FOR SCHOOLS PORTAL →
            </button>
          </div>

          {/* 3-Column Institutional Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Deliverables */}
            <div className="space-y-3">
              <h3 className="font-bold text-base uppercase text-[#0B1020] border-b border-slate-200 pb-2">
                WHAT WE PROVIDE
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm font-inter text-[#334155] font-normal">
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
              <h3 className="font-bold text-base uppercase text-[#0B1020] border-b border-slate-200 pb-2">
                SCHOOL REQUIREMENTS
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm font-inter text-[#334155] font-normal">
                <li className="flex items-start gap-2">
                  <span className="text-[#0052FF] font-bold">▶</span>
                  <span>School venue for intro workshop & school qualifiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052FF] font-bold">▶</span>
                  <span>4 teacher volunteers during school-level event</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052FF] font-bold">▶</span>
                  <span>1 teacher volunteer during City Finals in Västerås</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052FF] font-bold">▶</span>
                  <span>Student participant coordination</span>
                </li>
              </ul>
            </div>

            {/* Transparent Cost Box */}
            <div className="bg-[#F8FAFC] text-[#0B1020] p-6 rounded-md border border-slate-200 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-bold text-base uppercase text-[#0B1020] border-b border-slate-200 pb-2">
                  TRANSPARENT COST MODEL
                </h3>
                <div className="my-4 text-center">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#0052FF] block leading-none">
                    100 SEK
                  </span>
                  <span className="text-xs font-mono text-[#334155] block mt-1.5 uppercase font-bold">
                    + VAT (125 SEK TOTAL PER STUDENT)
                  </span>
                </div>
                <p className="text-xs font-inter text-[#334155] text-center bg-white p-3 rounded-md border border-slate-200 font-normal leading-relaxed">
                  Zero administrative overhead for school administration. Complete turnkey event execution.
                </p>
              </div>

              <button
                onClick={onOpenRegister}
                className="btn-event-primary w-full py-3.5 text-xs sm:text-sm rounded-md text-center whitespace-nowrap"
              >
                REGISTER YOUR SCHOOL NOW →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
