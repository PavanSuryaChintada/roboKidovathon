import React from 'react';

export const RoboForSchoolsSection: React.FC<{
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
}> = ({ onNavigate, onOpenRegister }) => {
  return (
    <section className="w-full bg-[#07111F] text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Top label strip */}
        <div className="border-b border-white/8 py-5 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-white/30 uppercase">
            INSTITUTIONAL PARTNERSHIP PROGRAMME
          </span>
          <button
            onClick={() => onNavigate('for-schools')}
            className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/25 border-b border-white/15 pb-0.5 hover:text-white hover:border-white transition-colors whitespace-nowrap hidden sm:block"
          >
            PARTNER PORTAL →
          </button>
        </div>

        <div className="py-16 md:py-20">
          {/* Heading */}
          <div className="mb-14">
            <h2
              className="font-extrabold uppercase leading-none tracking-tighter text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 0.88 }}
            >
              Partner With<br />
              Robo-Kidovation.
            </h2>
            <p className="mt-4 text-sm text-white/40 max-w-md leading-relaxed" style={{ fontWeight: 300 }}>
              We manage the complete event infrastructure. Your institution provides the venue and coordination. Zero financial burden on school administration.
            </p>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {/* Col 1 */}
            <div className="pr-0 md:pr-10 pb-10 md:pb-0">
              <h3 className="text-[10px] font-mono font-bold tracking-[0.3em] text-white/25 uppercase pb-5 border-b border-white/8 mb-6">
                WHAT WE DELIVER
              </h3>
              <div className="space-y-4">
                {[
                  ['HW', 'Certified robotics kits & electronic components'],
                  ['MT', 'Qualified STEM trainers & competition mentors'],
                  ['CR', 'Official certificates for all participants'],
                  ['AR', 'Arena infrastructure, referees & live scoring'],
                  ['MD', 'Event media documentation & photography'],
                ].map(([code, text]) => (
                  <div key={code} className="flex items-start gap-3">
                    <span className="text-[9px] font-mono font-bold text-[#0052FF] border border-[#0052FF]/25 px-1.5 py-0.5 shrink-0 mt-0.5">{code}</span>
                    <span className="text-sm text-white/55 leading-relaxed" style={{ fontWeight: 300 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2 */}
            <div className="px-0 md:px-10 py-10 md:py-0">
              <h3 className="text-[10px] font-mono font-bold tracking-[0.3em] text-white/25 uppercase pb-5 border-b border-white/8 mb-6">
                INSTITUTION REQUIREMENTS
              </h3>
              <div className="space-y-4">
                {[
                  'Open venue space for 2-hour engineering workshop',
                  '4 teacher coordinators during school qualifying rounds',
                  '1 teacher coordinator at City Finals (Västerås)',
                  'Student cohort registration coordination',
                  'No financial contribution required from institution',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-white/20 font-bold mt-1 shrink-0 text-sm">—</span>
                    <span className="text-sm text-white/55 leading-relaxed" style={{ fontWeight: 300 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3 — Cost */}
            <div className="pl-0 md:pl-10 pt-10 md:pt-0 flex flex-col">
              <h3 className="text-[10px] font-mono font-bold tracking-[0.3em] text-white/25 uppercase pb-5 border-b border-white/8 mb-6">
                PARTICIPATION FEE
              </h3>

              {/* Oversized price */}
              <div className="flex-1">
                <span
                  className="font-extrabold text-[#E2FF00] leading-none tracking-tighter block"
                  style={{ fontSize: 'clamp(5rem, 11vw, 9rem)', lineHeight: 1 }}
                >
                  100
                </span>
                <span className="text-xl font-extrabold text-white/30 uppercase tracking-[0.2em] mt-1 block">SEK</span>
                <span className="block text-[10px] font-mono text-white/20 mt-2 uppercase tracking-widest">
                  EXCL. VAT · 125 SEK INCL. VAT PER STUDENT
                </span>

                <div className="mt-6 space-y-2 text-[11px] font-mono text-white/30 uppercase">
                  {['Workshop entry & hardware kit usage', 'Mentorship & competition access', 'Official diploma & event media'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-3 h-px bg-white/15 inline-block shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenRegister}
                className="mt-8 w-full py-4 bg-white text-[#07111F] font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#E2FF00] transition-colors"
              >
                REGISTER YOUR INSTITUTION →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
