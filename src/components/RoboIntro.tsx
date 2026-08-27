import React from 'react';

export const RoboIntro: React.FC = () => {
  return (
    <section className="w-full bg-white text-[#07111F]">
      {/* ── 60/40 Asymmetric Split ── */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT — Editorial typography */}
        <div className="lg:col-span-7 px-6 sm:px-10 py-20 md:py-28 flex flex-col justify-center">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#0052FF] uppercase block mb-6">
            02 / THE MISSION
          </span>
          <h2
            className="font-extrabold uppercase leading-none tracking-tighter text-[#07111F]"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 6.5rem)', lineHeight: 0.9 }}
          >
            The Future of<br />
            <span className="text-[#0052FF]">STEM</span> Starts<br />
            Here.
          </h2>
          <div className="mt-10 max-w-lg space-y-4">
            <p className="text-base text-[#1A2535] font-light leading-relaxed">
              Robo-Kidovation turns STEM learning into an exciting hands-on championship. Students build real physical robots, program microcontroller logic, solve arena challenges, and compete live in front of judges.
            </p>
            <p className="text-sm text-[#4A5568] font-light leading-relaxed">
              Evolved from the Techfest IIT Bombay model and adapted for Nordic school standards — participants work with physical hardware, microcontrollers, and real mechanics.
            </p>
          </div>

          {/* 4-column editorial spec strip */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#07111F]/10 border-t border-b border-[#07111F]/10 py-5">
            {[
              { label: 'HARDWARE', detail: 'Real physical kits' },
              { label: 'TEAMWORK', detail: 'Collaborative strategy' },
              { label: 'LOGIC', detail: 'Autonomous code' },
              { label: 'ARENA', detail: 'Live competition' },
            ].map((item, i) => (
              <div key={i} className="px-4 first:pl-0 last:pr-0">
                <span className="block text-[9px] font-mono font-bold tracking-[0.2em] text-[#0052FF] uppercase mb-1">
                  {String(i + 1).padStart(2, '0')} / {item.label}
                </span>
                <span className="block text-xs text-[#4A5568] font-light">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Full-height real robotics photography */}
        <div className="lg:col-span-5 relative overflow-hidden min-h-[400px] lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85"
            alt="Students working on robotics hardware"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/70 uppercase">
              [ HANDS-ON WORKSHOP · VÄSTERÅS · 2026 ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
