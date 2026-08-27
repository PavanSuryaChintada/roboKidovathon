import React from 'react';

export const RoboHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01', title: 'ONBOARD',   tag: 'INSTITUTION INTAKE',
      desc: 'School registers. Institutional coordinator assigned. Hardware kit allocation confirmed. Schedule issued.',
    },
    {
      num: '02', title: 'BUILD',     tag: 'ENGINEERING PHASE',
      desc: 'Teams assemble chassis, integrate motors, mount sensors and wire electronic control systems under mentor supervision.',
    },
    {
      num: '03', title: 'PROGRAMME', tag: 'SOFTWARE PHASE',
      desc: 'Teams deploy microcontroller firmware: line-tracking, collision avoidance, match strategy execution.',
    },
    {
      num: '04', title: 'QUALIFY',   tag: 'INSTITUTION HEATS',
      desc: 'Intra-school competition rounds. Top-ranked Junior and Senior teams advance to City Finals.',
    },
    {
      num: '05', title: 'COMPETE',   tag: 'CITY CHAMPIONSHIP',
      desc: 'City Finals at central venue. Expert panel judging. Prize allocation: 2,000 / 1,400 / 1,000 SEK + national pass.',
    },
  ];

  return (
    <section className="w-full bg-[#F5F2EE] text-[#07111F]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Header strip */}
        <div className="border-b border-[#07111F]/10 py-5 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#0052FF] uppercase">
            PROGRAMME STRUCTURE
          </span>
          <span className="text-[10px] font-mono text-[#07111F]/30 uppercase tracking-widest hidden sm:block">
            5-PHASE COMPETITION PIPELINE
          </span>
        </div>

        <div className="py-16 md:py-20">
          <h2
            className="font-extrabold uppercase leading-none tracking-tighter text-[#07111F] mb-14"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', lineHeight: 0.95 }}
          >
            Competition<br />Structure.
          </h2>

          {/* Desktop — connected timeline */}
          <div className="hidden lg:grid grid-cols-5 relative">
            <div className="absolute top-[28px] left-[10%] right-[10%] h-px bg-[#07111F]/10" />
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center px-3 relative">
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 z-10 mb-5 ${
                    i === 4 ? 'bg-[#E2FF00] border-[#E2FF00]' : 'bg-[#F5F2EE] border-[#07111F]/40'
                  }`}
                />
                <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#0052FF] uppercase mb-1">{step.tag}</span>
                <span
                  className="font-extrabold uppercase text-[#07111F] leading-none mb-3"
                  style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)' }}
                >
                  {step.num}<br />{step.title}
                </span>
                <p className="text-[10px] text-[#4A5568] leading-relaxed" style={{ fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile — vertical */}
          <div className="lg:hidden relative pl-8 space-y-0">
            <div className="absolute left-3 top-3 bottom-3 w-px bg-[#07111F]/10" />
            {steps.map((step, i) => (
              <div key={i} className="relative pb-10 last:pb-0">
                <div className={`absolute -left-5 top-1 w-3.5 h-3.5 rounded-full border-2 ${i === 4 ? 'bg-[#E2FF00] border-[#E2FF00]' : 'bg-[#F5F2EE] border-[#07111F]/40'}`} />
                <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#0052FF] uppercase block mb-1">{step.tag}</span>
                <span className="font-extrabold uppercase text-[#07111F] text-lg block mb-1.5">{step.num} {step.title}</span>
                <p className="text-xs text-[#4A5568] leading-relaxed" style={{ fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
