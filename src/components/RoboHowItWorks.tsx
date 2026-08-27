import React from 'react';

export const RoboHowItWorks: React.FC = () => {
  const steps = [
    { num: '01', title: 'DISCOVER', desc: 'Attend a 2-hour hands-on school workshop. Receive hardware kit. Meet your STEM mentor.', tag: 'SCHOOL WORKSHOP' },
    { num: '02', title: 'BUILD',    desc: 'Assemble chassis, gearboxes, drive wheels, sensor mounts & electronic controllers.', tag: 'HARDWARE PHASE' },
    { num: '03', title: 'CODE',     desc: 'Program microcontroller logic — line-tracking, obstacle avoidance, match strategy.', tag: 'SOFTWARE PHASE' },
    { num: '04', title: 'COMPETE',  desc: 'Face other schools in live arena heats. Qualify as top Junior or Senior team.', tag: 'SCHOOL HEATS' },
    { num: '05', title: 'WIN',      desc: 'City Finals in Västerås. Face city champions for 2000 SEK prize & national pass.', tag: 'CITY FINALS' },
  ];

  return (
    <section className="w-full bg-[#F5F2EE] text-[#07111F]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-20 md:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#0052FF] uppercase block mb-3">
              05 / CHAMPIONSHIP JOURNEY
            </span>
            <h2
              className="font-extrabold uppercase leading-none tracking-tighter text-[#07111F]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', lineHeight: 0.95 }}
            >
              How It Works.
            </h2>
          </div>
          <span className="text-[10px] font-mono text-[#4A5568] uppercase tracking-widest">
            SCHOOL → CITY → NATIONAL
          </span>
        </div>

        {/* Connected horizontal roadmap — desktop */}
        <div className="hidden lg:grid grid-cols-5 relative">
          <div className="absolute top-[30px] left-[10%] right-[10%] h-px bg-[#07111F]/15" />
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center px-3 relative">
              <div className={`w-4 h-4 rounded-full border-2 z-10 mb-6 ${i === 4 ? 'bg-[#E2FF00] border-[#E2FF00]' : 'bg-[#F5F2EE] border-[#07111F]'}`} />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#0052FF] uppercase mb-1">{step.tag}</span>
              <span
                className="font-extrabold uppercase text-[#07111F] leading-none mb-3"
                style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2rem)' }}
              >
                {step.num}<br />{step.title}
              </span>
              <p className="text-[11px] text-[#4A5568] font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile — vertical timeline */}
        <div className="lg:hidden relative pl-8 space-y-0">
          <div className="absolute left-3 top-3 bottom-3 w-px bg-[#07111F]/15" />
          {steps.map((step, i) => (
            <div key={i} className="relative pb-10 last:pb-0">
              <div className={`absolute -left-5 top-1 w-4 h-4 rounded-full border-2 ${i === 4 ? 'bg-[#E2FF00] border-[#E2FF00]' : 'bg-[#F5F2EE] border-[#07111F]'}`} />
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#0052FF] uppercase block mb-1">{step.tag}</span>
              <span className="font-extrabold uppercase text-[#07111F] text-xl block mb-1.5">{step.num} {step.title}</span>
              <p className="text-xs text-[#4A5568] font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
