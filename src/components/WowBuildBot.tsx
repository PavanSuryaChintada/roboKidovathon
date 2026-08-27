import React from 'react';

export const WowBuildBot: React.FC = () => {
  const specs = [
    { code: 'M-01', title: 'DRIVE SYSTEM',      detail: '12V DC Metal Gearmotors · 250 RPM · Differential configuration' },
    { code: 'S-02', title: 'SENSOR ARRAY',      detail: '8-Channel IR Line Tracker · HC-SR04 Ultrasonic Distance Module' },
    { code: 'C-03', title: 'CONTROL UNIT',      detail: 'Microcontroller · MicroPython / C++ · Autonomous event loop' },
    { code: 'A-04', title: 'MATCH EXECUTION',   detail: '3–5 min live arena rounds · Official scoring · Referee oversight' },
  ];

  const annotations = [
    { label: 'DRIVE MOTORS', spec: '12V / 250 RPM', pos: 'top-[10%] left-[4%]', dir: 'right' },
    { label: 'IR SENSORS',   spec: '8-CH Array',    pos: 'top-[32%] left-[3%]', dir: 'right' },
    { label: 'MCU BOARD',    spec: 'μC Control',     pos: 'top-[58%] left-[4%]', dir: 'right' },
    { label: 'CHASSIS',      spec: 'Max 1.5ft²',    pos: 'top-[12%] right-[4%]', dir: 'left' },
    { label: 'LOGIC CORE',   spec: 'Autonomous',    pos: 'top-[42%] right-[3%]', dir: 'left' },
    { label: 'WHEEL DRIVE',  spec: 'Differential',  pos: 'top-[68%] right-[4%]', dir: 'left' },
  ];

  return (
    <section className="w-full bg-[#07111F] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 pb-10 border-b border-white/8">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-white/30 uppercase block mb-4">
              ENGINEERING SPECIFICATION
            </span>
            <h2
              className="font-extrabold uppercase leading-none tracking-tighter text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 0.88 }}
            >
              Real Robots.<br />
              Real Engineering.<br />
              <span className="text-[#E2FF00]">Real Competition.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-sm text-white/45 leading-relaxed" style={{ fontWeight: 300 }}>
              Every participant engineers and deploys an autonomous robotics system from component level. No simulations. No toy kits. Real hardware, real code, real arena competition.
            </p>
          </div>
        </div>

        {/* Annotated image */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/7' }}>
          <img
            src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1600&q=85"
            alt="Robotics engineering hardware"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/70 via-transparent to-[#07111F]/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/25 via-transparent to-[#07111F]/60 pointer-events-none" />

          {annotations.map((ann, i) => (
            <div key={i} className={`absolute ${ann.pos} flex items-center gap-2 ${ann.dir === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={ann.dir === 'right' ? 'text-left' : 'text-right'}>
                <span className="block text-[9px] font-mono font-bold tracking-[0.2em] text-[#0052FF] uppercase">{ann.label}</span>
                <span className="block text-[9px] font-mono text-white/35">{ann.spec}</span>
              </div>
              <div className="w-6 h-px bg-white/20" />
              <div className="w-1 h-1 rounded-full bg-[#E2FF00] shrink-0" />
            </div>
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <span className="text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase">
              HARDWARE · FIRMWARE · ARENA SYSTEMS
            </span>
          </div>
        </div>

        {/* Bottom spec table */}
        <div className="mt-0 border-t border-white/8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/8">
            {specs.map((s) => (
              <div key={s.code} className="px-0 lg:px-8 first:lg:pl-0 last:lg:pr-0 py-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] font-mono font-bold text-[#0052FF] border border-[#0052FF]/30 px-1.5 py-0.5">{s.code}</span>
                  <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">{s.title}</span>
                </div>
                <span className="text-[11px] text-white/35 leading-relaxed block" style={{ fontWeight: 300 }}>{s.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
