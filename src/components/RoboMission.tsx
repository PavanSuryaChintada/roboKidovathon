import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface RoboMissionProps {
  onNavigate: (route: string) => void;
}

export const RoboMission: React.FC<RoboMissionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full bg-white text-[#07111F] border-b border-[#07111F]/10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        
        {/* LEFT — Bold Editorial Typography */}
        <div className="lg:col-span-7 px-6 sm:px-10 py-20 md:py-28 flex flex-col justify-center border-r border-[#07111F]/8">
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#0052FF] uppercase block mb-4">
            02 / THE MISSION
          </span>

          <h2
            className="font-display font-black uppercase leading-[0.88] tracking-tight text-[#07111F]"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.8rem)' }}
          >
            Building<br />
            The Next<br />
            <span className="text-[#0052FF]">Generation</span><br />
            of Innovators.
          </h2>

          <div className="mt-8 max-w-xl space-y-4 border-t border-[#07111F]/10 pt-6">
            <p className="text-base text-[#1E293B] leading-relaxed font-normal">
              Robo-Kido-A-Thon is a structured, institutionally backed robotics championship transforming STEM education into high-stakes engineering tournaments. Students assemble physical hardware, program autonomous control logic, and compete under live arena match pressure.
            </p>
            <p className="text-sm text-[#4A5568] leading-relaxed font-light">
              Originating from the proven Techfest IIT Bombay robotics competition model and adapted specifically for Nordic school curriculum frameworks — prioritizing technical depth, gender inclusion, and zero administrative friction.
            </p>
          </div>

          {/* 4-Column Technical Spec Strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 border-t border-[#07111F]/10 pt-6 gap-4">
            {[
              { code: 'HW', label: 'HARDWARE', detail: '100% Real Physical Kits' },
              { code: 'SW', label: 'SOFTWARE', detail: 'Autonomous Microcontroller' },
              { code: 'TM', label: 'TEAMWORK', detail: 'Collaborative Engineering' },
              { code: 'LV', label: 'LIVE ARENA', detail: 'Official Refereed Matches' },
            ].map((item) => (
              <div key={item.code} className="space-y-1">
                <span className="block text-[9px] font-mono-code font-bold tracking-[0.2em] text-[#0052FF] uppercase">
                  [{item.code}] {item.label}
                </span>
                <span className="block text-xs text-[#4A5568] font-normal leading-snug">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4">
            <button
              onClick={() => onNavigate('about')}
              className="text-xs font-display font-bold tracking-[0.14em] uppercase text-[#0052FF] hover:text-[#0043D6] inline-flex items-center gap-1.5 border-b border-[#0052FF]/30 pb-0.5 hover:border-[#0052FF] transition-all"
            >
              <span>LEARN ABOUT THE LEAGUE VISION</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* RIGHT — High Quality Cinematic Photography */}
        <div className="lg:col-span-5 relative overflow-hidden min-h-[420px] lg:min-h-0 bg-[#07111F]">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85"
            alt="Students building physical robotics hardware"
            className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/90 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Photo Annotation Tag */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[2px] bg-black/75 backdrop-blur-md border border-white/10">
            <span className="block text-[9px] font-mono-code font-bold tracking-[0.2em] text-[#E2FF00] uppercase mb-1">
              [ WORKSHOP ENVIRONMENT · VÄSTERÅS · 2026 ]
            </span>
            <span className="block text-xs font-display font-bold text-white uppercase tracking-wider">
              Component-Level Assembly & Autonomous Firmware Validation
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
