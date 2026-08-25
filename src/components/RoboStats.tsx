import React from 'react';

export const RoboStats: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Brutalist Stats Container */}
      <div className="bg-[#111111] text-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#FACC15] p-6 sm:p-10 relative">
        <div className="flex items-center justify-between border-b-2 border-white/20 pb-4 mb-6">
          <span className="font-barlow font-black text-xl md:text-2xl text-[#FACC15] uppercase tracking-wider">
            LEAGUE IMPACT & REACH
          </span>
          <span className="bg-[#FF3B00] text-white font-barlow font-bold text-xs px-2.5 py-0.5 border border-white uppercase">
            SWEDEN PILOT & PROJECTIONS
          </span>
        </div>

        {/* Grid of Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white/5 border-2 border-white/10 hover:border-[#FACC15] transition-colors">
            <span className="text-5xl sm:text-6xl md:text-7xl font-barlow font-black text-[#FACC15] block leading-none">
              15
            </span>
            <span className="text-xs sm:text-sm font-barlow font-extrabold uppercase tracking-widest text-white/90 mt-2 block">
              SCHOOLS ENGAGED
            </span>
          </div>

          <div className="p-4 bg-white/5 border-2 border-white/10 hover:border-[#0052FF] transition-colors">
            <span className="text-5xl sm:text-6xl md:text-7xl font-barlow font-black text-[#0052FF] block leading-none">
              600+
            </span>
            <span className="text-xs sm:text-sm font-barlow font-extrabold uppercase tracking-widest text-white/90 mt-2 block">
              STUDENT PARTICIPANTS
            </span>
          </div>

          <div className="p-4 bg-white/5 border-2 border-white/10 hover:border-[#FF3B00] transition-colors">
            <span className="text-5xl sm:text-6xl md:text-7xl font-barlow font-black text-[#FF3B00] block leading-none">
              45+
            </span>
            <span className="text-xs sm:text-sm font-barlow font-extrabold uppercase tracking-widest text-white/90 mt-2 block">
              TEACHERS INVOLVED
            </span>
          </div>

          <div className="p-4 bg-white/5 border-2 border-white/10 hover:border-[#059669] transition-colors">
            <span className="text-5xl sm:text-6xl md:text-7xl font-barlow font-black text-[#059669] block leading-none">
              600+
            </span>
            <span className="text-xs sm:text-sm font-barlow font-extrabold uppercase tracking-widest text-white/90 mt-2 block">
              PARENTS REACHED
            </span>
          </div>
        </div>

        {/* Source Note Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 font-dmsans">
          <span>*Figures represent target Sweden pilot engagement in Västerås cluster.</span>
          <span className="font-semibold text-[#FACC15] mt-1 sm:mt-0">Historical Origin Success: 1,000+ Student Participants in India Model</span>
        </div>
      </div>
    </section>
  );
};
