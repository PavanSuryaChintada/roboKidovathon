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
      <div className="card-slush-glass rounded-3xl p-6 sm:p-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
          <div>
            <span className="bg-[#00F2FE]/15 text-[#00F2FE] font-barlow font-black text-xs px-3.5 py-1.5 rounded-full border border-[#00F2FE]/40 uppercase tracking-widest inline-block mb-2">
              FOR EDUCATORS & PRINCIPALS
            </span>
            <h2 className="text-4xl sm:text-6xl font-barlow font-black uppercase text-white leading-none">
              BRING THE ROBOT REVOLUTION TO YOUR SCHOOL.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('for-schools')}
            className="btn-slush-volt text-sm px-6 py-3 rounded-xl self-start md:self-auto"
          >
            FOR SCHOOLS PORTAL →
          </button>
        </div>

        {/* 3-Column Deliverables / Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: What We Provide */}
          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-3">
            <h3 className="font-barlow font-black text-2xl uppercase text-[#00F2FE] border-b border-white/10 pb-2">
              WHAT WE PROVIDE
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-dmsans text-[#A1A1AA]">
              <li className="flex items-start gap-2">
                <span className="text-[#00F2FE] font-bold">✓</span>
                <span>Official Robotics Kits & Components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F2FE] font-bold">✓</span>
                <span>Trainers & Dedicated STEM Mentors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F2FE] font-bold">✓</span>
                <span>Certificates for All Student Participants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F2FE] font-bold">✓</span>
                <span>Full Arena Logistics, Referees & Live Scoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F2FE] font-bold">✓</span>
                <span>Digital Photo Showcase & Media Coverage</span>
              </li>
            </ul>
          </div>

          {/* Column 2: What We Need From School */}
          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-3">
            <h3 className="font-barlow font-black text-2xl uppercase text-[#FF0055] border-b border-white/10 pb-2">
              SCHOOL REQUIREMENTS
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-dmsans text-[#A1A1AA]">
              <li className="flex items-start gap-2">
                <span className="text-[#FF0055] font-bold">▶</span>
                <span>School venue for intro workshop & school qualifiers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF0055] font-bold">▶</span>
                <span>4 teacher volunteers during school-level event</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF0055] font-bold">▶</span>
                <span>1 teacher volunteer during City Finals (Västerås)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF0055] font-bold">▶</span>
                <span>Student participant coordination</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Transparent Fee Model */}
          <div className="p-5 bg-[#FF0055]/15 border border-[#FF0055]/40 rounded-2xl flex flex-col justify-between shadow-[0_0_25px_rgba(255,0,85,0.2)]">
            <div>
              <h3 className="font-barlow font-black text-2xl uppercase text-white border-b border-white/10 pb-2">
                TRANSPARENT COST MODEL
              </h3>
              <div className="my-4 text-center">
                <span className="text-5xl font-barlow font-black text-[#E2FF00] block leading-none drop-shadow-[0_0_15px_rgba(226,255,0,0.4)]">
                  100 SEK
                </span>
                <span className="text-xs font-mono font-bold text-white/80 block mt-1 uppercase">
                  + VAT (125 SEK TOTAL PER STUDENT)
                </span>
              </div>
              <p className="text-xs font-dmsans text-[#A1A1AA] text-center font-medium bg-black/40 p-2.5 rounded-xl border border-white/10">
                Zero administrative overhead for school administration. Complete turnkey event execution.
              </p>
            </div>

            <button
              onClick={onOpenRegister}
              className="mt-4 w-full btn-slush-magenta py-3 text-xs sm:text-sm rounded-xl"
            >
              REGISTER YOUR SCHOOL NOW →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
