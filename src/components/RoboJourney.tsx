import React from 'react';

export const RoboJourney: React.FC = () => {
  const stages = [
    {
      num: '01',
      title: 'SCHOOL LEVEL',
      subtitle: 'QUALIFYING ROUND',
      location: 'YOUR SCHOOL VENUE · VÄSTERÅS',
      date: 'FEBRUARY 2026',
      desc: 'Teams build, code, and compete within their own school. The top 1 Junior team and top 1 Senior team from each school automatically qualify for City Finals.',
      badge: 'QUALIFIER',
    },
    {
      num: '02',
      title: 'CITY FINALS',
      subtitle: 'VÄSTERÅS CHAMPIONSHIP',
      location: 'CENTRAL ABB VENUE · VÄSTERÅS',
      date: 'MARCH 21, 2026',
      desc: 'Qualified school champions compete head-to-head at the central Västerås arena. Evaluated live by a Robotics & Technology Experts Panel. Prize pool: 2000 / 1400 / 1000 SEK.',
      badge: 'CITY FINALS',
    },
    {
      num: '03',
      title: 'NATIONAL STAGE',
      subtitle: 'STOCKHOLM GRAND FINALE',
      location: 'STOCKHOLM SHOWDOWN · NORDIC CUP',
      date: 'EXPANSION PHASE',
      desc: 'City Finals winners advance to represent Västerås at the Stockholm Showdown — competing for the 25,000 SEK Nordic Cup Grand Finale prize.',
      badge: 'NATIONAL',
    },
  ];

  return (
    <section className="w-full bg-white text-[#0B1020]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-20 md:py-28">
        <div className="mb-14">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#0052FF] uppercase block mb-3">
            06 / LEAGUE ROADMAP
          </span>
          <h2
            className="font-extrabold uppercase leading-none tracking-tighter text-[#0B1020]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 0.95 }}
          >
            Competition<br />Journey.
          </h2>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Left spine line */}
          <div className="absolute left-6 sm:left-10 top-4 bottom-4 w-px bg-slate-200" />

          <div className="space-y-0">
            {stages.map((stage, i) => (
              <div key={i} className="relative grid grid-cols-1 lg:grid-cols-12 border-b border-slate-100 last:border-b-0">
                {/* Spine dot */}
                <div className={`absolute left-[22px] sm:left-[36px] top-10 w-3 h-3 rounded-full border-2 z-10 ${i === 1 ? 'bg-[#0052FF] border-[#0052FF]' : 'bg-white border-slate-400'}`} />

                {/* Stage number + meta — left */}
                <div className="lg:col-span-3 pl-16 sm:pl-20 pr-6 py-10 border-r border-slate-100 flex flex-col justify-center">
                  <span
                    className="font-extrabold text-slate-100 leading-none tracking-tighter select-none"
                    style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 1 }}
                  >
                    {stage.num}
                  </span>
                  <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#0052FF] uppercase mt-2">{stage.badge}</span>
                </div>

                {/* Main content — middle */}
                <div className="lg:col-span-6 px-6 sm:px-10 py-10 flex flex-col justify-center">
                  <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#64748B] uppercase mb-2">
                    {stage.subtitle}
                  </span>
                  <h3
                    className="font-extrabold uppercase text-[#0B1020] tracking-tight mb-4"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1 }}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-sm text-[#64748B] font-light leading-relaxed max-w-md">
                    {stage.desc}
                  </p>
                </div>

                {/* Location + date — right */}
                <div className="lg:col-span-3 px-6 sm:px-8 py-10 border-l border-slate-100 flex flex-col justify-center gap-3">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#64748B] uppercase block mb-1">LOCATION</span>
                    <span className="text-xs font-bold text-[#0B1020] uppercase tracking-wide">{stage.location}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#64748B] uppercase block mb-1">DATE</span>
                    <span className="text-xs font-bold text-[#0052FF] uppercase tracking-wide">{stage.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
