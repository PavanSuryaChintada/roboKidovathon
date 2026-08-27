import React from 'react';

export const RoboStats: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 border-b border-slate-200">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
            LEAGUE REACH & PILOT TARGETS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold uppercase text-[#0F172A]">
            PROVEN EVENT SCALE
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-dmsans text-slate-500 max-w-md">
          Figures reflect the confirmed target Sweden pilot engagement across the Västerås school cluster.
        </p>
      </div>

      {/* Grid of Enormous Clean Numbers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="space-y-1 border-l-2 border-[#0052FF] pl-4 sm:pl-6">
          <span className="text-6xl sm:text-7xl lg:text-8xl font-syne font-extrabold text-[#0F172A] block leading-none tracking-tight">
            15+
          </span>
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-slate-500 block pt-2">
            SCHOOLS ENGAGED
          </span>
        </div>

        <div className="space-y-1 border-l-2 border-[#0052FF] pl-4 sm:pl-6">
          <span className="text-6xl sm:text-7xl lg:text-8xl font-syne font-extrabold text-[#0052FF] block leading-none tracking-tight">
            600+
          </span>
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-slate-500 block pt-2">
            STUDENTS PARTICIPATING
          </span>
        </div>

        <div className="space-y-1 border-l-2 border-slate-300 pl-4 sm:pl-6">
          <span className="text-6xl sm:text-7xl lg:text-8xl font-syne font-extrabold text-[#0F172A] block leading-none tracking-tight">
            45+
          </span>
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-slate-500 block pt-2">
            TEACHERS INVOLVED
          </span>
        </div>

        <div className="space-y-1 border-l-2 border-slate-300 pl-4 sm:pl-6">
          <span className="text-6xl sm:text-7xl lg:text-8xl font-syne font-extrabold text-[#0F172A] block leading-none tracking-tight">
            600+
          </span>
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-slate-500 block pt-2">
            PARENTS REACHED
          </span>
        </div>
      </div>
    </section>
  );
};
