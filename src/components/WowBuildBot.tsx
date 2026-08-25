import React, { useState } from 'react';
import { HeroRobot } from './CompetitionRobots';

export const WowBuildBot: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'motor',
      title: '01. MOTOR & GEARBOX',
      subtitle: 'HIGH-TORQUE DRIVE',
      spec: '12V DC Metal Gearmotor (250 RPM)',
      detail: 'Precision differential drive motors capable of instant directional shifts and rapid acceleration in ball-passing arenas.',
      color: '#FACC15',
    },
    {
      id: 'sensor',
      title: '02. SENSOR ARRAY',
      subtitle: 'IR & ULTRASONIC',
      spec: '8-Channel IR Line & Barrier Array',
      detail: 'Detects court borders, ball puck locations, and cup stacking targets in real-time with sub-millisecond latency.',
      color: '#0052FF',
    },
    {
      id: 'code',
      title: '03. CODE LOGIC',
      subtitle: 'AUTONOMOUS SCRIPT',
      spec: 'MicroPython / C++ Logic Pipeline',
      detail: 'Students write autonomous tactical code for ball interception, obstacle avoidance, and cup stacking algorithms.',
      color: '#FF3B00',
    },
    {
      id: 'move',
      title: '04. ARENA MOVE',
      subtitle: 'MATCH EXECUTION',
      spec: 'Live Match Execution Mode',
      detail: 'Execute strategy under the 3-minute & 5-minute competition timer on the official Västerås stadium court.',
      color: '#059669',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* High-Contrast Dark Brutalist Container */}
      <div className="bg-[#111111] text-white border-2.5 border-[#111111] shadow-[8px_8px_0px_#FACC15] p-6 sm:p-12 relative overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute top-4 right-6 font-mono text-[10px] text-[#FACC15] tracking-widest uppercase opacity-75">
          [WOW MOMENT 01 // BOT ARCHITECTURE]
        </div>

        {/* Section Title */}
        <div className="max-w-xl mb-8 space-y-2">
          <span className="bg-[#FF3B00] text-white font-barlow font-black text-xs px-3 py-1 border border-white uppercase tracking-wider inline-block">
            BUILD PIPELINE ⚙️
          </span>
          <h2 className="text-5xl sm:text-7xl font-barlow font-black uppercase text-white leading-none">
            BUILD YOUR BOT.
          </h2>
          <p className="text-xs sm:text-sm font-dmsans text-white/80">
            Click through the engineering stages below to see how physical hardware, sensors, and code combine into a live match robot.
          </p>
        </div>

        {/* Interactive Pipeline Step Selector Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                style={{
                  borderColor: isActive ? step.color : 'rgba(255,255,255,0.2)',
                  backgroundColor: isActive ? step.color : 'rgba(255,255,255,0.05)',
                  color: isActive && step.color === '#FACC15' ? '#111111' : '#FFFFFF',
                }}
                className={`p-3 text-left border-2 font-barlow font-black transition-all ${
                  isActive ? 'shadow-[4px_4px_0px_#FFFFFF] translate-x-0.5 -translate-y-0.5' : 'hover:border-white/40'
                }`}
              >
                <div className="text-xs opacity-75">{step.subtitle}</div>
                <div className="text-base sm:text-lg uppercase leading-tight mt-1">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail & Robot Motion Feedback */}
        <div className="bg-white/5 border-2 border-white/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Detail Text */}
          <div className="flex-1 space-y-3">
            <div className="inline-block bg-[#FACC15] text-[#111111] font-barlow font-black text-xs px-3 py-1 border border-white uppercase">
              ACTIVE STAGE {activeStep + 1} OF 4
            </div>
            <h3 className="text-3xl sm:text-4xl font-barlow font-black uppercase text-white leading-tight">
              {steps[activeStep].title}
            </h3>
            <p className="text-sm font-mono text-[#FACC15] uppercase font-bold">
              SPECIFICATION: {steps[activeStep].spec}
            </p>
            <p className="text-xs sm:text-sm font-dmsans text-white/90 leading-relaxed pt-1">
              {steps[activeStep].detail}
            </p>
          </div>

          {/* Right Robot Position Feedback */}
          <div className="flex flex-col items-center justify-center relative">
            <div
              style={{
                transform: `translateX(${activeStep * 12}px) rotate(${activeStep * 2 - 2}deg)`,
              }}
              className="transition-transform duration-500"
            >
              <HeroRobot className="w-56 sm:w-64" />
            </div>

            {/* Position Arrow */}
            <div className="mt-3 font-mono text-xs text-[#FACC15] uppercase font-bold tracking-widest">
              [STATE: STAGE_{activeStep + 1}_READY] →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
