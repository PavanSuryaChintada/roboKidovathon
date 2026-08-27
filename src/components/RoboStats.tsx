import React from 'react';

export const RoboStats: React.FC = () => {
  const stats = [
    { value: '15+',  label: 'SCHOOLS',  sub: 'VÄSTERÅS CLUSTER',  accent: 'text-[#E2FF00]' },
    { value: '600+', label: 'STUDENTS', sub: 'JUNIOR & SENIOR',   accent: 'text-[#0052FF]' },
    { value: '45+',  label: 'TEACHERS', sub: 'CERTIFIED MENTORS', accent: 'text-[#E2FF00]' },
    { value: '600+', label: 'PARENTS',  sub: 'COMMUNITY REACH',   accent: 'text-[#0052FF]' },
  ];

  return (
    <section className="w-full bg-[#F5F2EE] text-[#07111F]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-20 md:py-28">
        {/* Eyebrow + heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 border-b border-[#07111F]/10 pb-8">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#0052FF] uppercase block mb-3">
              01 / LEAGUE REACH — PILOT TARGETS
            </span>
            <h2
              className="font-extrabold uppercase leading-none tracking-tighter text-[#07111F]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Built for the Next<br className="hidden sm:block" /> Generation.
            </h2>
          </div>
          <p className="text-sm text-[#4A5568] font-light max-w-xs leading-relaxed">
            Confirmed target engagement across the Västerås school cluster — Sweden pilot 2026.
          </p>
        </div>

        {/* Giant Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#07111F]/10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-10 lg:py-0 lg:px-10 first:lg:pl-0 last:lg:pr-0 flex flex-col gap-3"
            >
              <span
                className={`font-extrabold leading-none tracking-tighter ${stat.accent}`}
                style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)', lineHeight: 1 }}
              >
                {stat.value}
              </span>
              <div>
                <span className="block font-bold text-base uppercase tracking-widest text-[#07111F]">
                  {stat.label}
                </span>
                <span className="block text-[10px] font-mono tracking-[0.2em] text-[#4A5568] uppercase mt-0.5">
                  {stat.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
