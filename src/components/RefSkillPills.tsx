import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RefSkillPillsProps {
  onNavigate: (route: string) => void;
  onOpenRegister?: () => void;
}

export const RefSkillPills: React.FC<RefSkillPillsProps> = ({
  onNavigate,
}) => {
  const skillPills = [
    { label: 'MicroPython Core', bg: 'bg-[#06B6D4] text-black', border: 'border-[#06B6D4]' },
    { label: 'IR Optical Matrix', bg: 'bg-[#FF3366] text-white', border: 'border-[#FF3366]' },
    { label: '12V DC Powertrain', bg: 'bg-[#FACC15] text-black', border: 'border-[#FACC15]' },
    { label: 'Laser Cut Chassis', bg: 'bg-[#A855F7] text-white', border: 'border-[#A855F7]' },
    { label: 'Autonomous Firmware', bg: 'bg-[#FB7185] text-black', border: 'border-[#FB7185]' },
    { label: 'Differential Drive', bg: 'bg-[#0052FF] text-white', border: 'border-[#0052FF]' },
    { label: 'Tactical Servo Arm', bg: 'bg-[#F97316] text-black', border: 'border-[#F97316]' },
    { label: 'Live Arena Heats', bg: 'bg-[#22C55E] text-black', border: 'border-[#22C55E]' },
  ];

  return (
    <section className="w-full bg-[#070709] text-white py-24 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ── LEFT COLUMN: HEADLINE & DESCRIPTION ── */}
        <div className="lg:col-span-6 space-y-6">
          <h2
            className="font-headline font-black uppercase text-white leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}
          >
            CHAMPIONSHIP<br />
            SKILLS & TRACKS
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-lg">
            No simulations. Students construct genuine physical robots from circuit boards to mechanical gearboxes, gaining invaluable hardware engineering intuition and algorithmic mastery.
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('challenges')}
              className="btn-pill-white text-xs sm:text-sm font-bold py-3.5 px-8 flex items-center gap-2"
            >
              <span>EXPLORE ALL DISCIPLINES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── RIGHT COLUMN: VIBRANT NEON CAPSULE PILL CLOUD ── */}
        <div className="lg:col-span-6 flex flex-wrap items-center justify-start lg:justify-end gap-3 sm:gap-4 max-w-xl ml-auto">
          {skillPills.map((pill, i) => (
            <div
              key={i}
              className={`px-6 py-3.5 rounded-full font-headline font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-1 cursor-default ${pill.bg}`}
            >
              {pill.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
