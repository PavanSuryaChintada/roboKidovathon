import React from 'react';

export const RoboHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      color: '#FACC15',
      textColor: '#111111',
      desc: 'Attend school workshops, receive official hardware kits & STEM mentor guidance.',
    },
    {
      num: '02',
      title: 'BUILD',
      color: '#0052FF',
      textColor: '#FFFFFF',
      desc: 'Assemble real robot chassis, gearboxes, wheels, mechanical grabbers & electronics.',
    },
    {
      num: '03',
      title: 'CODE',
      color: '#FF3B00',
      textColor: '#FFFFFF',
      desc: 'Program microcontrollers & motor drivers to execute arena challenge strategies.',
    },
    {
      num: '04',
      title: 'COMPETE',
      color: '#111111',
      textColor: '#FACC15',
      desc: 'Fight in live school heats & qualify for the City Finals in Västerås.',
    },
    {
      num: '05',
      title: 'WIN',
      color: '#059669',
      textColor: '#FFFFFF',
      desc: 'Win cash prizes (2000 / 1400 / 1000 SEK), trophies, and advance to national level.',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="bg-[#0052FF] text-white font-barlow font-black text-xs px-3 py-1 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] uppercase inline-block mb-2">
          GAME PROGRESSION 🚀
        </span>
        <h2 className="text-4xl sm:text-6xl font-barlow font-black uppercase text-[#111111] leading-none">
          HOW IT WORKS
        </h2>
        <p className="text-sm sm:text-base text-[#111111]/80 font-dmsans mt-2">
          From hands-on school workshops to national championship victory in 5 steps.
        </p>
      </div>

      {/* Steps Row / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: step.color, color: step.textColor }}
            className="border-2.5 border-[#111111] shadow-[5px_5px_0px_#111111] p-5 flex flex-col justify-between relative group hover:-translate-y-1 transition-transform"
          >
            <div>
              <span className="font-barlow font-black text-4xl sm:text-5xl leading-none opacity-80 block">
                {step.num}
              </span>
              <h3 className="font-barlow font-black text-2xl uppercase tracking-wider my-2">
                {step.title}
              </h3>
              <p className="text-xs font-dmsans leading-relaxed opacity-95">
                {step.desc}
              </p>
            </div>

            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-[#111111] text-white font-barlow font-bold text-xs px-1.5 py-0.5 border border-white">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
