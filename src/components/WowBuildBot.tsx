import React from 'react';

export const WowBuildBot: React.FC = () => {
  const annotations = [
    { label: 'MOTOR & GEARBOX', spec: '12V DC · 250 RPM', pos: 'top-[12%] left-[5%]', lineDir: 'right' },
    { label: 'IR SENSOR ARRAY', spec: '8-channel · Sub-ms', pos: 'top-[30%] left-[3%]', lineDir: 'right' },
    { label: 'MCU CORE', spec: 'MicroPython / C++', pos: 'top-[55%] left-[4%]', lineDir: 'right' },
    { label: 'CHASSIS FRAME', spec: '1.5ft × 1.5ft max', pos: 'top-[15%] right-[4%]', lineDir: 'left' },
    { label: 'AUTONOMOUS LOGIC', spec: 'Line-track & avoid', pos: 'top-[45%] right-[3%]', lineDir: 'left' },
    { label: 'DRIVE WHEELS', spec: 'Differential drive', pos: 'top-[72%] right-[4%]', lineDir: 'left' },
  ];

  return (
    <section className="w-full bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-20 md:py-28">
        {/* Section heading */}
        <div className="mb-14">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-white/40 uppercase block mb-4">
            03 / ENGINEERING ARCHITECTURE
          </span>
          <h2
            className="font-extrabold uppercase leading-none tracking-tighter text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 0.9 }}
          >
            Real Robots.<br />
            Real Hardware.<br />
            <span className="text-[#E2FF00]">Real Skills.</span>
          </h2>
        </div>

        {/* Main image with floating annotations */}
        <div className="relative w-full rounded-none overflow-hidden" style={{ aspectRatio: '16/7' }}>
          <img
            src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1600&q=85"
            alt="Robotics hardware engineering"
            className="w-full h-full object-cover opacity-80"
          />
          {/* Gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-transparent to-[#0A0A0A]/50 pointer-events-none" />

          {/* Annotation labels */}
          {annotations.map((ann, i) => (
            <div key={i} className={`absolute ${ann.pos} flex items-center gap-2 ${ann.lineDir === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={ann.lineDir === 'right' ? 'text-left' : 'text-right'}>
                <span className="block text-[9px] font-mono font-bold tracking-[0.2em] text-[#E2FF00] uppercase">
                  {ann.label}
                </span>
                <span className="block text-[9px] font-mono text-white/50">
                  {ann.spec}
                </span>
              </div>
              <div className="w-8 h-px bg-white/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#E2FF00] shrink-0" />
            </div>
          ))}

          {/* Center badge */}
          <div className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-white/40 uppercase">
              [ HARDWARE · SENSORS · SOFTWARE · COMPETITION ]
            </span>
          </div>
        </div>

        {/* Bottom spec row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-t border-white/10 pt-8">
          {[
            { num: '01', title: 'MOTOR DRIVE', spec: '12V DC Metal Gearmotors · 250 RPM differential' },
            { num: '02', title: 'SENSOR ARRAY', spec: '8-channel IR line tracker · Ultrasonic distance' },
            { num: '03', title: 'CONTROL LOGIC', spec: 'MicroPython / C++ autonomous algorithms' },
            { num: '04', title: 'LIVE ARENA', spec: '3–5 min matches · Official scoring referees' },
          ].map((item, i) => (
            <div key={i} className="px-5 first:pl-0 last:pr-0 py-2">
              <span className="block text-[9px] font-mono text-white/30 mb-1">{item.num}</span>
              <span className="block text-xs font-bold text-white uppercase tracking-wider mb-1">{item.title}</span>
              <span className="block text-[11px] text-white/45 font-light leading-relaxed">{item.spec}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
