import React from 'react';

export const HeroTickerStrip: React.FC = () => {
  const items = [
    'ARENA 01',
    'ROBOT READY',
    'JUNIOR + SENIOR',
    'LIVE COMPETITION',
    'BUILD / CODE / COMPETE',
    'SWEDEN NATIONAL LEAGUE',
    'VÄSTERÅS 2026',
  ];

  const repeatedItems = Array(6).fill(items).flat();

  return (
    <div className="w-full bg-[#FACC15] border-y-2.5 border-[#111111] py-2 overflow-hidden select-none shadow-[0px_4px_0px_#111111]">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-6">
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 text-xs md:text-sm font-barlow font-black tracking-widest text-[#111111] uppercase">
            <span>● {item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
