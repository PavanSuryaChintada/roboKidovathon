import React from 'react';

export const RoboStats: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 border-b border-slate-800">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
            LEAGUE REACH & PILOT TARGETS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-balance">
            Proven Event Scale
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-inter text-slate-400 max-w-md">
          Figures reflect the confirmed target Sweden pilot engagement across the Västerås school cluster.
        </p>
      </div>

      {/* Grid of Clean Professional Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div className="space-y-1 border-l-2 border-[#0052FF] pl-4">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white block leading-none tracking-tight">
            15+
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block pt-1 break-normal">
            SCHOOLS ENGAGED
          </span>
        </div>

        <div className="space-y-1 border-l-2 border-[#0052FF] pl-4">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0052FF] block leading-none tracking-tight">
            600+
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block pt-1 break-normal">
            STUDENTS PARTICIPATING
          </span>
        </div>

        <div className="space-y-1 border-l-2 border-slate-700 pl-4">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white block leading-none tracking-tight">
            45+
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block pt-1 break-normal">
            TEACHERS INVOLVED
          </span>
        </div>

        <div className="space-y-1 border-l-2 border-slate-700 pl-4">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white block leading-none tracking-tight">
            600+
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block pt-1 break-normal">
            PARENTS REACHED
          </span>
        </div>
      </div>
    </section>
  );
};
