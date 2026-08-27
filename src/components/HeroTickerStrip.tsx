import React from 'react';

export const HeroTickerStrip: React.FC = () => {
  const items = [
    'ARENA 01 // STADIUM ARENA',
    'ROBOT READY',
    'JUNIOR + SENIOR DIVISIONS',
    'LIVE COMPETITION',
    'BUILD / CODE / COMPETE',
    'SWEDEN NATIONAL LEAGUE 2026',
    'VÄSTERÅS, SWEDEN',
  ];

  const repeatedItems = Array(6).fill(items).flat();

  return (
    <div className="w-full bg-gradient-to-r from-[#FF0055] via-[#E2FF00] to-[#00F2FE] py-2.5 overflow-hidden select-none shadow-[0_0_25px_rgba(255,0,85,0.4)]">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs md:text-sm font-barlow font-black tracking-widest text-[#0B0B0E] uppercase">
            <span>● {item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
