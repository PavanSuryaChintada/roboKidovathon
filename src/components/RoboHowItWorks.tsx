import React from 'react';

export const RoboHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      color: '#E2FF00',
      desc: 'Attend school workshops, receive official hardware kits & STEM mentor guidance.',
    },
    {
      num: '02',
      title: 'BUILD',
      color: '#00F2FE',
      desc: 'Assemble real robot chassis, gearboxes, wheels, mechanical grabbers & electronics.',
    },
    {
      num: '03',
      title: 'CODE',
      color: '#FF0055',
      desc: 'Program microcontrollers & motor drivers to execute arena challenge strategies.',
    },
    {
      num: '04',
      title: 'COMPETE',
      color: '#7928CA',
      desc: 'Fight in live school heats & qualify for the City Finals in Västerås.',
    },
    {
      num: '05',
      title: 'WIN',
      color: '#00E676',
      desc: 'Win cash prizes (2000 / 1400 / 1000 SEK), trophies, and advance to national level.',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="bg-[#00F2FE]/20 text-[#00F2FE] font-barlow font-black text-xs px-3.5 py-1.5 rounded-full border border-[#00F2FE]/40 uppercase tracking-widest inline-block mb-2">
          GAME PROGRESSION 🚀
        </span>
        <h2 className="text-4xl sm:text-6xl font-barlow font-black uppercase text-white leading-none">
          HOW IT WORKS
        </h2>
        <p className="text-sm sm:text-base text-[#A1A1AA] font-dmsans mt-2">
          From hands-on school workshops to national championship victory in 5 steps.
        </p>
      </div>

      {/* Steps Row / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="card-slush-glass rounded-2xl p-5 flex flex-col justify-between relative group hover:-translate-y-1 transition-transform border border-white/10"
          >
            <div>
              <span style={{ color: step.color }} className="font-barlow font-black text-4xl sm:text-5xl leading-none block drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                {step.num}
              </span>
              <h3 className="font-barlow font-black text-2xl uppercase tracking-wider text-white my-2">
                {step.title}
              </h3>
              <p className="text-xs font-dmsans text-[#A1A1AA] leading-relaxed">
                {step.desc}
              </p>
            </div>

            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-white/40 font-mono text-xs">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
