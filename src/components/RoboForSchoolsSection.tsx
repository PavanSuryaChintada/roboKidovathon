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
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#111111] p-6 sm:p-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#111111] pb-6 mb-8 gap-4">
          <div>
            <span className="bg-[#0052FF] text-white font-barlow font-black text-xs px-3 py-1 border border-[#111111] uppercase tracking-wider inline-block mb-2">
              FOR EDUCATORS & PRINCIPALS
            </span>
            <h2 className="text-4xl sm:text-6xl font-barlow font-black uppercase text-[#111111] leading-none">
              BRING THE ROBOT REVOLUTION TO YOUR SCHOOL.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('for-schools')}
            className="btn-brutal-yellow text-sm px-6 py-3 self-start md:self-auto"
          >
            FOR SCHOOLS PORTAL →
          </button>
        </div>

        {/* 3-Column Deliverables / Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: What We Provide */}
          <div className="p-5 bg-[#F7F4EC] border-2 border-[#111111] space-y-3">
            <h3 className="font-barlow font-black text-2xl uppercase text-[#0052FF] border-b border-[#111111] pb-2">
              WHAT WE PROVIDE
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-dmsans text-[#111111]">
              <li className="flex items-start gap-2">
                <span className="text-[#0052FF] font-bold">✓</span>
                <span>Official Robotics Kits & Components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0052FF] font-bold">✓</span>
                <span>Trainers & Dedicated STEM Mentors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0052FF] font-bold">✓</span>
                <span>Certificates for All Student Participants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0052FF] font-bold">✓</span>
                <span>Full Arena Logistics, Referees & Live Scoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0052FF] font-bold">✓</span>
                <span>Digital Photo Showcase & Media Coverage</span>
              </li>
            </ul>
          </div>

          {/* Column 2: What We Need From School */}
          <div className="p-5 bg-[#F7F4EC] border-2 border-[#111111] space-y-3">
            <h3 className="font-barlow font-black text-2xl uppercase text-[#FF3B00] border-b border-[#111111] pb-2">
              SCHOOL REQUIREMENTS
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-dmsans text-[#111111]">
              <li className="flex items-start gap-2">
                <span className="text-[#FF3B00] font-bold">▶</span>
                <span>School venue for intro workshop & school qualifiers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF3B00] font-bold">▶</span>
                <span>4 teacher volunteers during school-level event</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF3B00] font-bold">▶</span>
                <span>1 teacher volunteer during City Finals (Västerås)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF3B00] font-bold">▶</span>
                <span>Student participant coordination</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Transparent Fee Model */}
          <div className="p-5 bg-[#FACC15] border-2 border-[#111111] flex flex-col justify-between">
            <div>
              <h3 className="font-barlow font-black text-2xl uppercase text-[#111111] border-b border-[#111111] pb-2">
                TRANSPARENT COST MODEL
              </h3>
              <div className="my-4 text-center">
                <span className="text-5xl font-barlow font-black text-[#111111] block leading-none">
                  100 SEK
                </span>
                <span className="text-xs font-mono font-bold text-[#111111]/80 block mt-1 uppercase">
                  + VAT (125 SEK TOTAL PER STUDENT)
                </span>
              </div>
              <p className="text-xs font-dmsans text-[#111111] text-center font-medium bg-white/70 p-2 border border-[#111111]">
                Zero administrative overhead for school administration. Complete turnkey event execution.
              </p>
            </div>

            <button
              onClick={onOpenRegister}
              className="mt-4 w-full btn-brutal py-3 text-xs sm:text-sm"
            >
              REGISTER YOUR SCHOOL NOW →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
