import React from 'react';

export const RoboIntro: React.FC = () => {
  return (
    <section className="w-full bg-white text-[#07111F]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT — Editorial typography */}
        <div className="lg:col-span-7 px-6 sm:px-10 py-20 md:py-28 flex flex-col justify-center border-r border-[#07111F]/8">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#0052FF] uppercase block mb-6">
            THE INITIATIVE
          </span>
          <h2
            className="font-extrabold uppercase leading-none tracking-tighter text-[#07111F]"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 6.5rem)', lineHeight: 0.88 }}
          >
            The Next<br />
            Generation of<br />
            <span className="text-[#0052FF]">Innovation</span><br />
            Starts Here.
          </h2>

          <div className="mt-10 max-w-lg space-y-5 border-t border-[#07111F]/8 pt-8">
            <p className="text-base text-[#1A2535] leading-relaxed" style={{ fontWeight: 300 }}>
              Robo-Kidovation is an institutionally backed, structured robotics championship that transforms STEM education into high-stakes engineering competition. Participants build, programme, and deploy real autonomous robotics systems under live arena match conditions.
            </p>
            <p className="text-sm text-[#4A5568] leading-relaxed" style={{ fontWeight: 300 }}>
              Modelled on global engineering hackathon standards and adapted for Nordic school institutions — producing measurable outcomes in technical literacy, collaborative engineering, and competitive problem-solving.
            </p>
          </div>

          {/* Technical spec strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 border-t border-[#07111F]/8 pt-6 gap-y-4">
            {[
              { code: 'HW', label: 'HARDWARE', detail: 'Physical kit & electronics' },
              { code: 'SW', label: 'SOFTWARE', detail: 'Autonomous control logic' },
              { code: 'TM', label: 'TEAMWORK', detail: 'Collaborative engineering' },
              { code: 'LV', label: 'LIVE ARENA', detail: 'Competitive match format' },
            ].map((item) => (
              <div key={item.code}>
                <span className="block text-[9px] font-mono font-bold tracking-[0.25em] text-[#0052FF] uppercase mb-1">
                  [{item.code}] {item.label}
                </span>
                <span className="block text-xs text-[#4A5568]" style={{ fontWeight: 300 }}>
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Photography */}
        <div className="lg:col-span-5 relative overflow-hidden min-h-[420px] lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85"
            alt="Engineering hardware and robotics components"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/60 via-transparent to-transparent pointer-events-none" />
          {/* Technical overlay caption */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-12 bg-gradient-to-t from-[#07111F]/80 to-transparent">
            <span className="block text-[10px] font-mono font-bold tracking-[0.25em] text-white/50 uppercase mb-1">
              ENGINEERING WORKSHOP · VÄSTERÅS · 2026
            </span>
            <span className="block text-sm font-bold text-white uppercase tracking-wide">
              Hardware Integration Phase
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
