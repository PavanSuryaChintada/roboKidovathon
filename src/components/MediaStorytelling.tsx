import React from 'react';

export const MediaStorytelling: React.FC = () => {
  const blocks = [
    {
      tag: '01 // HANDS-ON MECHANICS',
      title: 'Students Build.',
      desc: 'Teams assemble physical chassis, gearboxes, wheel drives, and mechanical grabbers using real tools.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    },
    {
      tag: '02 // LOGIC & SOFTWARE',
      title: 'Students Code.',
      desc: 'Participants program microcontrollers, calibrate IR sensor arrays, and optimize motor speed logic.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    },
    {
      tag: '03 // STADIUM ARENA',
      title: 'Students Compete.',
      desc: 'Teams put their robots to the live test in head-to-head arena matches under referee officiating.',
      image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <section className="w-full bg-[#0C1222] text-white py-20 md:py-24 border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-2">
              03 // EXPERIENCE THE CHAMPIONSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance tracking-tight">
              Real Robotics in Action
            </h2>
          </div>
          <p className="text-sm sm:text-base font-inter text-[#E2E8F0] font-normal max-w-md">
            Authentic STEM learning documented through real student participation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((item, idx) => (
            <div
              key={idx}
              className="group card-editorial-dark overflow-hidden flex flex-col justify-between border border-slate-800"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#060912]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1222] via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-mono font-bold text-white tracking-wider bg-[#0C1222]/90 px-2.5 py-1 rounded-sm border border-slate-700">
                  {item.tag}
                </span>
              </div>

              <div className="p-6 space-y-2 bg-[#0C1222] flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white text-balance">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E2E8F0] font-inter mt-1.5 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
