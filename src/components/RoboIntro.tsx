import React from 'react';

export const RoboIntro: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="bg-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#111111] p-6 sm:p-12 relative overflow-hidden">
        {/* Background Sticker Accent */}
        <div className="absolute top-3 right-4 bg-[#FF3B00] text-white font-barlow font-black text-xs px-3 py-1 border-2 border-[#111111] rotate-3 uppercase">
          HANDS-ON STEM ADVENTURE
        </div>

        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0052FF]">
            01 // ABOUT THE LEAGUE
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black uppercase text-[#111111] leading-none">
            TURNING STEM INTO AN EXCITING <span className="text-[#FF3B00]">HANDS-ON</span> ARENA.
          </h2>

          <p className="text-base sm:text-lg text-[#111111]/90 font-dmsans leading-relaxed pt-2">
            Robo-Kidovation turns STEM learning into an exciting hands-on adventure. Students build real robots, program them, solve challenges, and compete in live arenas. Suitable from elementary level through college, participants work with physical hardware, microcontrollers, and real mechanics rather than screen simulations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-3 bg-[#F7F4EC] border-2 border-[#111111]">
              <span className="font-barlow font-black text-xl text-[#111111] block">REAL HARDWARE</span>
              <span className="text-xs text-[#111111]/80 font-dmsans">Motors, chassis, sensors & microcontrollers</span>
            </div>
            <div className="p-3 bg-[#F7F4EC] border-2 border-[#111111]">
              <span className="font-barlow font-black text-xl text-[#0052FF] block">TEAMWORK & STEM</span>
              <span className="text-xs text-[#111111]/80 font-dmsans">Collaborative problem solving under time limits</span>
            </div>
            <div className="p-3 bg-[#F7F4EC] border-2 border-[#111111]">
              <span className="font-barlow font-black text-xl text-[#FF3B00] block">LIVE ARENA</span>
              <span className="text-xs text-[#111111]/80 font-dmsans">Head-to-head match scoring & audience energy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
