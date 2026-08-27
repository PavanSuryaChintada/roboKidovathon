import React from 'react';

export const RoboIntro: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="card-slush-glass rounded-3xl p-6 sm:p-12 relative overflow-hidden">
        {/* Background Neon Accent Badge */}
        <div className="absolute top-4 right-6 bg-[#FF0055]/15 text-[#FF0055] font-barlow font-black text-xs px-3.5 py-1.5 rounded-full border border-[#FF0055]/40 uppercase tracking-widest">
          HANDS-ON STEM ADVENTURE
        </div>

        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00F2FE]">
            01 // ABOUT THE LEAGUE
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black uppercase text-white leading-none">
            TURNING STEM INTO AN EXCITING <span className="bg-gradient-to-r from-[#FF0055] to-[#E2FF00] bg-clip-text text-transparent">HANDS-ON</span> ARENA.
          </h2>

          <p className="text-base sm:text-lg text-[#A1A1AA] font-dmsans leading-relaxed pt-2">
            Robo-Kidovation turns STEM learning into an exciting hands-on adventure. Students build real robots, program them, solve challenges, and compete in live stadium arenas. Suitable from elementary level through college, participants work with physical hardware, microcontrollers, and real mechanics rather than screen simulations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00F2FE]/50 transition-colors">
              <span className="font-barlow font-black text-xl text-white block">REAL HARDWARE</span>
              <span className="text-xs text-[#A1A1AA] font-dmsans mt-1 block">Motors, chassis, sensors & microcontrollers</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#E2FF00]/50 transition-colors">
              <span className="font-barlow font-black text-xl text-[#E2FF00] block">TEAMWORK & STEM</span>
              <span className="text-xs text-[#A1A1AA] font-dmsans mt-1 block">Collaborative problem solving under time limits</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FF0055]/50 transition-colors">
              <span className="font-barlow font-black text-xl text-[#FF0055] block">LIVE STADIUM</span>
              <span className="text-xs text-[#A1A1AA] font-dmsans mt-1 block">Head-to-head match scoring & audience energy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
