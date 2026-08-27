import React, { useState } from 'react';

export const WowBuildBot: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'motor',
      num: '01',
      title: 'MOTOR & GEARBOX',
      subtitle: 'HIGH-TORQUE DRIVE SYSTEM',
      spec: '12V DC Metal Gearmotors (250 RPM)',
      badgeClass: 'badge-pastel-blue',
      pastelBg: 'bg-pastel-blue border-l-4 border-l-[#0284C7]',
      colorAccent: '#0284C7',
      detail: 'Precision differential drive motors engineered for instant directional response, high torque output, and rapid acceleration on stadium courts.',
    },
    {
      id: 'sensor',
      num: '02',
      title: 'SENSOR ARRAY',
      subtitle: 'IR & ULTRASONIC ARRAY',
      spec: '8-Channel IR Line & Distance Array',
      badgeClass: 'badge-pastel-lilac',
      pastelBg: 'bg-pastel-lilac border-l-4 border-l-[#9333EA]',
      colorAccent: '#9333EA',
      detail: 'Detects arena border boundaries, opponent positions, and cup stacking alignments in real-time with sub-millisecond microcontroller feedback.',
    },
    {
      id: 'code',
      num: '03',
      title: 'CODE LOGIC',
      subtitle: 'AUTONOMOUS CONTROL PIPELINE',
      spec: 'MicroPython / C++ Autonomous Logic',
      badgeClass: 'badge-pastel-mint',
      pastelBg: 'bg-pastel-mint border-l-4 border-l-[#16A34A]',
      colorAccent: '#16A34A',
      detail: 'Students write custom autonomous tactical algorithms for line-tracking, obstacle avoidance, puck passing, and cup stacking operations.',
    },
    {
      id: 'move',
      num: '04',
      title: 'ARENA EXECUTION',
      subtitle: 'MATCH PERFORMANCE MODE',
      spec: 'Live 3-Min / 5-Min Match Mode',
      badgeClass: 'badge-pastel-lemon',
      pastelBg: 'bg-pastel-lemon border-l-4 border-l-[#CA8A04]',
      colorAccent: '#CA8A04',
      detail: 'Executes programmed tactical strategy live under official match conditions at the central Västerås stadium venue.',
    },
  ];

  return (
    <section className="w-full bg-white text-[#0B1020] py-20 md:py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-2">
              05 // ENGINEERING ARCHITECTURE ⚙️
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1020] tracking-tight text-balance">
              Build Your Robot
            </h2>
          </div>
          <p className="text-sm sm:text-base font-inter text-[#334155] font-normal max-w-md leading-relaxed">
            Explore the engineering stages below to see how physical hardware, sensors, microcontrollers, and code combine into an arena bot.
          </p>
        </div>

        {/* 4 Horizontal Pipeline Step Selector Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-5 text-left rounded-md border transition-all ${
                  isActive
                    ? 'bg-[#0052FF] text-white border-[#0052FF] shadow-md font-semibold'
                    : 'bg-[#F8FAFC] text-[#334155] border-slate-200 hover:border-slate-400 font-normal'
                }`}
              >
                <div className="text-[11px] font-mono font-bold uppercase opacity-90 mb-1">
                  {step.num} // {step.subtitle}
                </div>
                <div className="text-sm sm:text-base font-bold uppercase">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage CAD Technical Schematic Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F8FAFC] border border-slate-200 p-6 sm:p-10 rounded-md">
          {/* Left Detail Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-mono font-bold px-3 py-1 rounded-sm uppercase ${steps[activeStep].badgeClass}`}>
                STAGE {activeStep + 1} OF 4
              </span>
              <span className="text-xs font-mono font-bold text-[#334155] uppercase">
                {steps[activeStep].subtitle}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1020]">
              {steps[activeStep].title}
            </h3>

            <div className="p-3.5 bg-white border border-slate-200 rounded-md">
              <span className="text-xs font-mono font-bold text-[#334155] uppercase block">
                HARDWARE SPECIFICATION:
              </span>
              <span className="text-sm font-mono font-bold text-[#0052FF]">
                {steps[activeStep].spec}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-inter text-[#334155] leading-relaxed font-normal">
              {steps[activeStep].detail}
            </p>
          </div>

          {/* Right Vector CAD Engineering Blueprint Vector Schematic */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-md relative overflow-hidden">
            <div className="text-xs font-mono font-bold text-[#334155] uppercase mb-4 w-full flex justify-between">
              <span>[CAD VECTOR DIAGRAM // ARCHITECTURE]</span>
              <span className="text-[#0052FF]">[STAGE_0{activeStep + 1}_ACTIVE]</span>
            </div>

            <svg width="420" height="260" viewBox="0 0 420 260" fill="none" className="w-full h-auto max-w-md">
              {/* Outer Frame Grid Lines */}
              <rect x="10" y="10" width="400" height="240" rx="4" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Main Chassis Frame Structure */}
              <rect x="70" y="50" width="280" height="160" rx="8" fill="#FFFFFF" stroke="#0B1020" strokeWidth="2.5" />
              <line x1="70" y1="130" x2="350" y2="130" stroke="#E2E8F0" strokeWidth="1.5" />

              {/* Component 1: Drive Wheels & Motors */}
              <rect
                x="45" y="70" width="22" height="45" rx="3"
                fill={activeStep === 0 ? '#0284C7' : '#94A3B8'}
                stroke="#0B1020" strokeWidth="2"
              />
              <rect
                x="45" y="145" width="22" height="45" rx="3"
                fill={activeStep === 0 ? '#0284C7' : '#94A3B8'}
                stroke="#0B1020" strokeWidth="2"
              />
              <rect
                x="353" y="70" width="22" height="45" rx="3"
                fill={activeStep === 0 ? '#0284C7' : '#94A3B8'}
                stroke="#0B1020" strokeWidth="2"
              />
              <rect
                x="353" y="145" width="22" height="45" rx="3"
                fill={activeStep === 0 ? '#0284C7' : '#94A3B8'}
                stroke="#0B1020" strokeWidth="2"
              />

              {/* Component 2: IR & Ultrasonic Sensor Arrays */}
              <circle
                cx="140" cy="30" r="14"
                fill={activeStep === 1 ? '#9333EA' : '#CBD5E1'}
                stroke="#0B1020" strokeWidth="2"
              />
              <circle
                cx="280" cy="30" r="14"
                fill={activeStep === 1 ? '#9333EA' : '#CBD5E1'}
                stroke="#0B1020" strokeWidth="2"
              />
              <line x1="140" y1="44" x2="140" y2="50" stroke="#0B1020" strokeWidth="2" />
              <line x1="280" y1="44" x2="280" y2="50" stroke="#0B1020" strokeWidth="2" />

              {/* Component 3: Microcontroller Logic Board */}
              <rect
                x="140" y="80" width="140" height="100" rx="4"
                fill={activeStep === 2 ? '#16A34A' : '#F1F5F9'}
                stroke="#0B1020" strokeWidth="2"
              />
              <text x="165" y="135" fontFamily="monospace" fontSize="12" fontWeight="bold" fill={activeStep === 2 ? '#FFFFFF' : '#334155'}>
                MCU CORE
              </text>

              {/* Component 4: Match Telemetry Overlay */}
              <circle
                cx="210" cy="225" r="12"
                fill={activeStep === 3 ? '#CA8A04' : '#CBD5E1'}
                stroke="#0B1020" strokeWidth="2"
              />
              <line x1="210" y1="210" x2="210" y2="213" stroke="#0B1020" strokeWidth="2" />
            </svg>

            <div className="mt-4 text-[11px] font-mono text-[#334155] uppercase font-bold tracking-wider">
              STATUS: {steps[activeStep].title} TELEMETRY VERIFIED ✓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
