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
    <section className="w-full bg-[#F8FAFC] text-[#0B1020] py-20 md:py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-2">
            08 // CHAMPIONSHIP JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1020] text-balance tracking-tight">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-[#334155] font-inter mt-2 text-balance font-normal">
            From hands-on school workshops to national victory in 5 structured steps.
          </p>
        </div>

        {/* Horizontal Editorial Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="card-editorial p-6 flex flex-col justify-between space-y-4 border-t-2 border-t-[#0052FF]"
            >
              <div>
                <span className="font-mono font-bold text-2xl sm:text-3xl text-[#0052FF] block leading-none">
                  {step.num}
                </span>
                <h3 className="font-bold text-base uppercase tracking-tight text-[#0B1020] mt-3 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs font-inter text-[#334155] leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
