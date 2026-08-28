import React from 'react';

interface RefTapeBannerProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const RefTapeBanner: React.FC<RefTapeBannerProps> = ({
  onOpenRegister,
  onNavigate,
}) => {
  return (
    <section className="w-full bg-[#070709] text-white py-16 px-6 sm:px-10 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Graphic Banner Box */}
        <div className="rounded-3xl p-8 sm:p-14 bg-[#121216] border border-white/15 space-y-6 text-center lg:text-left">
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <span
              className="font-headline font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white"
            >
              SCANDINAVIAN
            </span>
            
            {/* Yellow Caution Tape Pill */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FACC15] text-black font-headline font-black text-xs sm:text-sm tracking-wider uppercase shadow-md">
              <span>★★★★★</span>
              <span>ON-SITE</span>
            </div>

            <span
              className="font-headline font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white"
            >
              ROBOTICS LEAGUE
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/10">
            <span className="font-headline font-black text-xl sm:text-2xl tracking-wider text-slate-400 uppercase">
              VÄSTERÅS CITY FINALS · MARCH 21, 2026
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenRegister}
                className="btn-pill-lime text-xs font-bold py-3 px-6"
              >
                <span>GET STARTED →</span>
              </button>

              <button
                onClick={() => onNavigate('for-schools')}
                className="btn-pill-outline text-xs font-bold py-3 px-6"
              >
                <span>FOR SCHOOLS →</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
