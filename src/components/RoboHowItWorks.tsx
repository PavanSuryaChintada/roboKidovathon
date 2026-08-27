import React from 'react';

export const RoboHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      desc: 'Attend school workshops, receive official hardware kits & STEM mentor guidance.',
    },
    {
      num: '02',
      title: 'BUILD',
      desc: 'Assemble real robot chassis, gearboxes, wheels, grabbers & electronic drivers.',
    },
    {
      num: '03',
      title: 'CODE',
      desc: 'Program microcontrollers & calibrate sensor arrays for arena match logic.',
    },
    {
      num: '04',
      title: 'COMPETE',
      desc: 'Fight in live school heats & qualify for the City Finals in Västerås.',
    },
    {
      num: '05',
      title: 'WIN',
      desc: 'Win cash prizes (2000 / 1400 / 1000 SEK), trophies & national pass.',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 border-t border-slate-200">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
          03 // CHAMPIONSHIP JOURNEY
        </span>
        <h2 className="text-4xl sm:text-6xl font-syne font-extrabold uppercase text-[#0F172A] leading-none">
          HOW IT WORKS
        </h2>
        <p className="text-sm sm:text-base text-slate-500 font-dmsans mt-2">
          From hands-on school workshops to national victory in 5 structured steps.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="card-event p-6 flex flex-col justify-between relative space-y-4"
          >
            <div>
              <span className="font-syne font-extrabold text-5xl text-slate-300 block leading-none">
                {step.num}
              </span>
              <h3 className="font-syne font-extrabold text-xl uppercase tracking-tight text-[#0F172A] mt-2 mb-1">
                {step.title}
              </h3>
              <p className="text-xs font-dmsans text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
