import React from 'react';

export const EventInfoBlock: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="card-event p-8 sm:p-12 border border-slate-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
              CHAMPIONSHIP METADATA
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-extrabold uppercase text-[#0F172A]">
              EVENT INFORMATION
            </h2>
          </div>

          <div className="bg-slate-100 text-[#0F172A] font-mono font-bold text-xs px-4 py-2 rounded-lg border border-slate-300">
            OFFICIAL SWEDEN LEAGUE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-slate-500 uppercase block">LOCATION</span>
            <span className="text-xl font-syne font-bold text-[#0F172A] block">VÄSTERÅS, SWEDEN</span>
            <span className="text-xs font-dmsans text-slate-500 block">Västmanland Arena Cluster</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono text-slate-500 uppercase block">SEASON</span>
            <span className="text-xl font-syne font-bold text-[#0F172A] block">2026 LEAGUE</span>
            <span className="text-xs font-dmsans text-slate-500 block">Autumn School Championship</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono text-slate-500 uppercase block">DIVISIONS</span>
            <span className="text-xl font-syne font-bold text-[#0F172A] block">JUNIOR & SENIOR</span>
            <span className="text-xs font-dmsans text-slate-500 block">Elementary through College</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono text-slate-500 uppercase block">ENTRY COST</span>
            <span className="text-xl font-syne font-bold text-[#0052FF] block">100 SEK + VAT</span>
            <span className="text-xs font-dmsans text-slate-500 block">Per Student Participant</span>
          </div>
        </div>
      </div>
    </section>
  );
};
