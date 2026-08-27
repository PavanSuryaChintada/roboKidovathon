import React from 'react';

export const RoboStats: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Slush Dark Stats Container */}
      <div className="card-slush-glass rounded-3xl p-6 sm:p-10 relative">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-4 mb-6 gap-2">
          <span className="font-barlow font-black text-xl md:text-2xl text-[#E2FF00] uppercase tracking-wider">
            LEAGUE IMPACT & REACH
          </span>
          <span className="bg-[#FF0055]/20 text-[#FF0055] font-barlow font-bold text-xs px-3 py-1 rounded-full border border-[#FF0055]/50 uppercase tracking-widest">
            SWEDEN PILOT & PROJECTIONS
          </span>
        </div>

        {/* Grid of Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-[#E2FF00] hover:shadow-[0_0_25px_rgba(226,255,0,0.3)] transition-all">
            <span className="text-5xl sm:text-6xl md:text-7xl font-barlow font-black text-[#E2FF00] block leading-none drop-shadow-[0_0_15px_rgba(226,255,0,0.4)]">
              15
            </span>
            <span className="text-xs sm:text-sm font-barlow font-extrabold uppercase tracking-widest text-[#A1A1AA] mt-2 block">
              SCHOOLS ENGAGED
            </span>
          </div>

          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00F2FE] hover:shadow-[0_0_25px_rgba(0,242,254,0.3)] transition-all">
            <span className="text-5xl sm:text-6xl md:text-7xl font-barlow font-black text-[#00F2FE] block leading-none drop-shadow-[0_0_15px_rgba(0,242,254,0.4)]">
              600+
            </span>
            <span className="text-xs sm:text-sm font-barlow font-extrabold uppercase tracking-widest text-[#A1A1AA] mt-2 block">
              STUDENT PARTICIPANTS
            </span>
          </div>

          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FF0055] hover:shadow-[0_0_25px_rgba(255,0,85,0.3)] transition-all">
            <span className="text-5xl sm:text-6xl md:text-7xl font-barlow font-black text-[#FF0055] block leading-none drop-shadow-[0_0_15px_rgba(255,0,85,0.4)]">
              45+
            </span>
            <span className="text-xs sm:text-sm font-barlow font-extrabold uppercase tracking-widest text-[#A1A1AA] mt-2 block">
              TEACHERS INVOLVED
            </span>
          </div>

          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00E676] hover:shadow-[0_0_25px_rgba(0,230,118,0.3)] transition-all">
            <span className="text-5xl sm:text-6xl md:text-7xl font-barlow font-black text-[#00E676] block leading-none drop-shadow-[0_0_15px_rgba(0,230,118,0.4)]">
              600+
            </span>
            <span className="text-xs sm:text-sm font-barlow font-extrabold uppercase tracking-widest text-[#A1A1AA] mt-2 block">
              PARENTS REACHED
            </span>
          </div>
        </div>

        {/* Source Note Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A1A1AA] font-dmsans">
          <span>*Figures represent target Sweden pilot engagement in Västerås cluster.</span>
          <span className="font-semibold text-[#E2FF00] mt-1 sm:mt-0">Historical Origin Success: 1,000+ Student Participants in India Model</span>
        </div>
      </div>
    </section>
  );
};
