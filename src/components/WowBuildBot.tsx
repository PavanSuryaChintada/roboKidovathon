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
    },
    {
      id: 'sensor',
      title: '02. SENSOR ARRAY',
      subtitle: 'IR & ULTRASONIC',
      spec: '8-Channel IR Line & Barrier Array',
      detail: 'Detects court borders, ball puck locations, and cup stacking targets in real-time with sub-millisecond latency.',
    },
    {
      id: 'code',
      title: '03. CODE LOGIC',
      subtitle: 'AUTONOMOUS SCRIPT',
      spec: 'MicroPython / C++ Logic Pipeline',
      detail: 'Students write autonomous tactical code for ball interception, obstacle avoidance, and cup stacking algorithms.',
    },
    {
      id: 'move',
      title: '04. ARENA MOVE',
      subtitle: 'MATCH EXECUTION',
      spec: 'Live Match Execution Mode',
      detail: 'Execute strategy under the 3-minute & 5-minute competition timer on the official Västerås stadium court.',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Clean Dark Event Container */}
      <div className="card-event-dark p-6 sm:p-12 relative overflow-hidden">
        {/* Section Title */}
        <div className="max-w-xl mb-8 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block">
            BUILD PIPELINE ⚙️
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Build Your Robot
          </h2>
          <p className="text-xs sm:text-sm font-jakarta text-slate-400">
            Click through the engineering stages below to see how physical hardware, sensors, and code combine into a live match robot.
          </p>
        </div>

        {/* Pipeline Step Selector Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 text-left rounded-xl border transition-all ${
                  isActive
                    ? 'bg-[#0052FF] text-white border-[#0052FF] shadow-lg'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                <div className="text-[11px] font-mono font-bold opacity-80">{step.subtitle}</div>
                <div className="text-sm sm:text-base font-bold uppercase mt-1">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail */}
        <div className="bg-slate-800/60 border border-slate-700 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Detail Text */}
          <div className="flex-1 space-y-2">
            <span className="inline-block bg-slate-700 text-white font-mono font-bold text-xs px-3 py-1 rounded-md uppercase">
              STAGE {activeStep + 1} OF 4
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {steps[activeStep].title}
            </h3>
            <p className="text-xs font-mono text-[#E2FF00] uppercase font-bold">
              SPECIFICATION: {steps[activeStep].spec}
            </p>
            <p className="text-xs sm:text-sm font-jakarta text-slate-300 leading-relaxed pt-1">
              {steps[activeStep].detail}
            </p>
          </div>

          {/* Right Robot Position Feedback */}
          <div className="flex flex-col items-center justify-center relative">
            <div
              style={{
                transform: `translateX(${activeStep * 8}px)`,
              }}
              className="transition-transform duration-500"
            >
              <HeroRobot className="w-48 sm:w-56" />
            </div>

            <div className="mt-3 font-mono text-xs text-slate-400 uppercase font-bold tracking-wider">
              [STATE: STAGE_{activeStep + 1}_READY]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
