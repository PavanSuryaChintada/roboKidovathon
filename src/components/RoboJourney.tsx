import React from 'react';

export const RoboJourney: React.FC = () => {
  // Dates are configurable values from source deck structure
  const journeyStages = [
    {
      stage: 'STAGE 01',
      title: 'SCHOOL LEVEL WORKSHOPS & QUALIFIERS',
      location: 'IN YOUR SCHOOL VENUE',
      dateLabel: 'PHASE 1 (CONFIGURABLE DATES)',
      details: 'Teams build and program robots in hands-on school sessions. Top 1 Junior Team and Top 1 Senior Team from each school qualify for the City Finals.',
      badge: 'QUALIFIER STAGE',
      badgeBg: '#FACC15',
    },
    {
      stage: 'STAGE 02',
      title: 'CITY FINALS — VÄSTERÅS',
      location: 'CENTRAL VENUE, VÄSTERÅS, SWEDEN',
      dateLabel: 'PHASE 2 (CONFIGURABLE DATES)',
      details: 'Qualified school champions compete head-to-head at a central venue in Västerås. Evaluated live by a Robotics & Technology Experts Panel.',
      badge: 'FINALS STAGE',
      badgeBg: '#FF3B00',
    },
    {
      stage: 'STAGE 03',
      title: 'FUTURE NATIONAL PROGRESSION',
      location: 'SWEDEN CHAMPIONSHIP ARENA',
      dateLabel: 'FUTURE EXPANSION',
      details: 'City Finals winners advance to national-level competition, joining top innovation teams across Nordic school clusters.',
      badge: 'NATIONAL LEVEL',
      badgeBg: '#0052FF',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#111111] p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-[#111111] pb-4 mb-6 gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0052FF]">
              LEAGUE ROADMAP
            </span>
            <h2 className="text-3xl sm:text-5xl font-barlow font-black uppercase text-[#111111] leading-none">
              COMPETITION JOURNEY
            </h2>
          </div>

          <div className="bg-[#111111] text-white font-barlow font-bold text-xs px-3 py-1 border border-[#111111] uppercase">
            SCHOOL → CITY → NATIONAL
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {journeyStages.map((st, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#F7F4EC] border-2 border-[#111111] shadow-[4px_4px_0px_#111111] flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-3">
                  <span
                    style={{ backgroundColor: st.badgeBg }}
                    className="text-[#111111] font-barlow font-black text-xs px-2.5 py-0.5 border border-[#111111] uppercase"
                  >
                    {st.stage}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#111111]/60 uppercase">
                    {st.dateLabel}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-barlow font-black uppercase text-[#111111] leading-tight">
                  {st.title}
                </h3>
                <p className="text-xs font-mono font-bold text-[#0052FF] uppercase">
                  📍 {st.location}
                </p>
                <p className="text-xs sm:text-sm text-[#111111]/85 font-dmsans pt-1">
                  {st.details}
                </p>
              </div>

              <div className="md:w-44 text-right flex md:flex-col justify-between items-end">
                <span className="font-barlow font-black text-sm uppercase text-[#111111] bg-white px-3 py-1 border border-[#111111]">
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
