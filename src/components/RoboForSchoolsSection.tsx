import React from 'react';

interface RoboForSchoolsSectionProps {
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
}

export const RoboForSchoolsSection: React.FC<RoboForSchoolsSectionProps> = ({
  onNavigate,
  onOpenRegister,
}) => {
  return (
    <section className="w-full bg-[#0B1120] text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-10">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-white/40 uppercase block mb-4">
              07 / EDUCATORS & PRINCIPALS PORTAL
            </span>
            <h2
              className="font-extrabold uppercase leading-none tracking-tighter text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 0.9 }}
            >
              Bring Robotics<br />
              Into Your<br />
              School.
            </h2>
          </div>
          <button
            onClick={() => onNavigate('for-schools')}
            className="self-start lg:self-end text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/50 border-b border-white/20 pb-0.5 hover:text-white hover:border-white transition-colors whitespace-nowrap"
          >
            SCHOOLS PORTAL →
          </button>
        </div>

        {/* 3-column thin-bordered information grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Col 1 — What we provide */}
          <div className="pr-0 md:pr-10 pb-10 md:pb-0 space-y-5">
            <h3 className="text-[10px] font-mono font-bold tracking-[0.3em] text-white/40 uppercase pb-4 border-b border-white/10">
              WHAT WE PROVIDE
            </h3>
            {[
              'Official robotics kits & electronic drivers',
              'Dedicated STEM trainers & mentors',
              'Certificates for all participants',
              'Full arena logistics, referees & live scoring',
              'Event photography & media coverage',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#E2FF00] font-bold mt-0.5 shrink-0">↗</span>
                <span className="text-sm text-white/70 font-light leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* Col 2 — School Requirements */}
          <div className="px-0 md:px-10 py-10 md:py-0 space-y-5">
            <h3 className="text-[10px] font-mono font-bold tracking-[0.3em] text-white/40 uppercase pb-4 border-b border-white/10">
              SCHOOL REQUIREMENTS
            </h3>
            {[
              'Open school venue for 2-hr workshop & qualifiers',
              '4 teacher volunteers during school-level event',
              '1 teacher volunteer during City Finals',
              'Student participant coordination',
              'Zero financial cost to school administration',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-white/30 font-bold mt-0.5 shrink-0">—</span>
                <span className="text-sm text-white/70 font-light leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* Col 3 — Cost Model */}
          <div className="pl-0 md:pl-10 pt-10 md:pt-0 space-y-5">
            <h3 className="text-[10px] font-mono font-bold tracking-[0.3em] text-white/40 uppercase pb-4 border-b border-white/10">
              TRANSPARENT COST MODEL
            </h3>
            {/* Oversized price */}
            <div className="py-4">
              <span
                className="font-extrabold text-[#E2FF00] leading-none tracking-tighter block"
                style={{ fontSize: 'clamp(5rem, 12vw, 10rem)', lineHeight: 1 }}
              >
                100
              </span>
              <span className="text-2xl font-extrabold text-white/60 uppercase tracking-widest">SEK</span>
              <span className="block text-[10px] font-mono text-white/30 mt-2 uppercase tracking-widest">
                + VAT · 125 SEK TOTAL PER STUDENT
              </span>
            </div>
            <p className="text-sm text-white/50 font-light leading-relaxed">
              Complete turnkey event execution. Zero administrative overhead for school management.
            </p>
            <button
              onClick={onOpenRegister}
              className="mt-4 w-full py-4 bg-[#0052FF] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-blue-600 transition-colors"
            >
              REGISTER YOUR SCHOOL NOW →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
