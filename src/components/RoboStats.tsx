import React from 'react';

export const RoboStats: React.FC = () => {
  const stats = [
    { value: '15+',  label: 'SCHOOLS',  sub: 'PARTICIPATING INSTITUTIONS', accent: 'text-[#07111F]' },
    { value: '600+', label: 'STUDENTS', sub: 'REGISTERED COMPETITORS',     accent: 'text-[#0052FF]' },
    { value: '45+',  label: 'EDUCATORS',sub: 'CERTIFIED MENTORS & STAFF',  accent: 'text-[#07111F]' },
    { value: '600+', label: 'COMMUNITY', sub: 'STAKEHOLDERS ENGAGED',       accent: 'text-[#0052FF]' },
  ];

  return (
    <section className="w-full bg-[#F5F2EE]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Top label strip */}
        <div className="border-b border-[#07111F]/10 py-5 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#0052FF] uppercase">
            EVENT SCALE · VÄSTERÅS PILOT 2026
          </span>
          <span className="text-[10px] font-mono text-[#07111F]/30 uppercase tracking-widest hidden sm:block">
            ROBO-KIDOVATION CHAMPIONSHIP
          </span>
        </div>

        {/* Main heading + stats grid */}
        <div className="py-16 md:py-20">
          <div className="mb-16">
            <h2
              className="font-extrabold uppercase leading-none tracking-tighter text-[#07111F]"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
            >
              Proven Scale.<br />
              <span className="text-[#0052FF]">Real Impact.</span>
            </h2>
            <p className="mt-4 text-sm text-[#4A5568] font-light max-w-md leading-relaxed">
              Confirmed institutional engagement across the Västerås school cluster — Sweden national pilot cohort 2026.
            </p>
          </div>

          {/* Data grid — annual report style */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#07111F]/10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="py-8 lg:py-0 lg:px-10 first:lg:pl-0 last:lg:pr-0 flex flex-col gap-2"
              >
                <span
                  className={`font-extrabold leading-none tracking-tighter ${stat.accent}`}
                  style={{ fontSize: 'clamp(3rem, 6.5vw, 6.5rem)', lineHeight: 1 }}
                >
                  {stat.value}
                </span>
                <div className="mt-1">
                  <span className="block font-bold text-sm uppercase tracking-[0.12em] text-[#07111F]">
                    {stat.label}
                  </span>
                  <span className="block text-[10px] font-mono tracking-[0.18em] text-[#07111F]/35 uppercase mt-0.5">
                    {stat.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
