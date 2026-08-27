import React from 'react';

export const RoboStats: React.FC = () => {
  return (
    <section className="w-full bg-white text-[#0B1020] py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1.5">
              LEAGUE REACH & PILOT TARGETS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1020] tracking-tight text-balance">
              Proven Event Scale
            </h2>
          </div>
          <p className="text-sm sm:text-base font-inter text-[#334155] font-medium max-w-md leading-relaxed">
            Figures reflect the confirmed target Sweden pilot engagement across the Västerås school cluster.
          </p>
        </div>

        {/* Grid of Large Editorial Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-2 border-l-2 border-[#0052FF] pl-5">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0B1020] block leading-none tracking-tight">
              15+
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#334155] block pt-1 break-normal">
              SCHOOLS ENGAGED
            </span>
          </div>

          <div className="space-y-2 border-l-2 border-[#0052FF] pl-5">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0052FF] block leading-none tracking-tight">
              600+
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#334155] block pt-1 break-normal">
              STUDENTS PARTICIPATING
            </span>
          </div>

          <div className="space-y-2 border-l-2 border-slate-300 pl-5">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0B1020] block leading-none tracking-tight">
              45+
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#334155] block pt-1 break-normal">
              TEACHERS INVOLVED
            </span>
          </div>

          <div className="space-y-2 border-l-2 border-slate-300 pl-5">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0B1020] block leading-none tracking-tight">
              600+
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#334155] block pt-1 break-normal">
              PARENTS REACHED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
