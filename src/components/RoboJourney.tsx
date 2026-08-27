import React from 'react';

export const RoboJourney: React.FC = () => {
  const journeyStages = [
    {
      stage: 'STAGE 01',
      title: 'SCHOOL LEVEL WORKSHOPS & QUALIFIERS',
      location: 'IN YOUR SCHOOL VENUE',
      dateLabel: 'PHASE 1',
      details: 'Teams build and program robots in hands-on school sessions. Top 1 Junior Team and Top 1 Senior Team from each school qualify for the City Finals.',
      badge: 'QUALIFIER STAGE',
    },
    {
      stage: 'STAGE 02',
      title: 'CITY FINALS — VÄSTERÅS',
      location: 'CENTRAL VENUE, VÄSTERÅS, SWEDEN',
      dateLabel: 'PHASE 2',
      details: 'Qualified school champions compete head-to-head at a central venue in Västerås. Evaluated live by a Robotics & Technology Experts Panel.',
      badge: 'FINALS STAGE',
    },
    {
      stage: 'STAGE 03',
      title: 'FUTURE NATIONAL PROGRESSION',
      location: 'SWEDEN CHAMPIONSHIP ARENA',
      dateLabel: 'EXPANSION',
      details: 'City Finals winners advance to national-level competition, joining top innovation teams across Nordic school clusters.',
      badge: 'NATIONAL LEVEL',
    },
  ];

  return (
    <section className="w-full bg-white text-[#0B1020] py-20 md:py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-5 mb-10 gap-3">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
              09 // LEAGUE ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1020] text-balance tracking-tight">
              Competition Journey
            </h2>
          </div>

          <div className="bg-slate-100 text-[#0052FF] font-mono font-bold text-xs px-3.5 py-1.5 rounded-md border border-slate-200 uppercase self-start sm:self-auto">
            SCHOOL → CITY → NATIONAL
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-5">
          {journeyStages.map((st, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#F8FAFC] border border-slate-200 rounded-md flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="bg-[#0052FF] text-white font-mono font-bold text-xs px-2.5 py-0.5 rounded-sm uppercase">
                    {st.stage}
                  </span>
                  <span className="text-xs font-mono text-[#334155] uppercase font-bold">
                    {st.dateLabel}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1020] text-balance">
                  {st.title}
                </h3>
                <p className="text-xs font-mono font-bold text-[#0052FF]">
                  📍 {st.location}
                </p>
                <p className="text-xs sm:text-sm text-[#334155] font-inter pt-0.5 font-normal leading-relaxed">
                  {st.details}
                </p>
              </div>

              <div className="md:w-44 text-right flex md:flex-col justify-between items-end">
                <span className="font-bold text-xs uppercase text-[#0B1020] bg-white px-3.5 py-1.5 rounded-md border border-slate-200">
                  {st.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
