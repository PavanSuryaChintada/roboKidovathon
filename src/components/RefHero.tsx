import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { ArrowRight } from 'lucide-react';

interface RefHeroProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const RefHero: React.FC<RefHeroProps> = ({
  onOpenRegister,
  onNavigate,
}) => {
  // Target: Västerås City Finals - March 21, 2026
  const countdown = useCountdown('2026-03-21T09:00:00Z');

  const collageItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Robotics electronics',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Student engineering team',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Workshop collaboration',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-2 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Hardware circuitry build',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Autonomous robot prototype',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Arena match action',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-2 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Microcontroller firmware',
    },
  ];

  return (
    <section className="relative w-full min-h-[95vh] flex items-center pt-28 pb-16 px-6 sm:px-10 bg-[#070709] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* ── LEFT COLUMN: HEADLINE, ACTIONS & LIVE COUNTDOWN TIMER ── */}
        <div className="lg:col-span-5 space-y-6">
          
          <h1
            className="font-headline font-black uppercase text-white leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(3.8rem, 8vw, 6.8rem)' }}
          >
            ROBOTICS<br />
            REDEFINED
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-md">
            Our on-site robotics tournament transforms young students into confident engineers, hardware creators, and tournament champions.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenRegister}
              className="btn-pill-lime text-xs sm:text-sm font-black py-3.5 px-7"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('for-schools')}
              className="btn-pill-outline text-xs sm:text-sm font-bold py-3.5 px-6"
            >
              <span>SCHOOLS & EDUCATORS</span>
            </button>
          </div>

          {/* ── LIVE TOURNAMENT COUNTDOWN TIMER ── */}
          <div className="pt-4 max-w-md">
            <div className="p-4 sm:p-5 rounded-3xl bg-[#121216] border border-white/15 space-y-3 shadow-xl">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  <span className="text-[10px] font-mono-code font-bold tracking-widest text-slate-300 uppercase">
                    FINALS COUNTDOWN
                  </span>
                </div>
                <span className="text-[10px] font-mono-code text-[#22C55E] font-bold uppercase">
                  MARCH 21, 2026
                </span>
              </div>

              {/* 4 Digit Boxes */}
              <div className="grid grid-cols-4 gap-2 pt-1">
                {[
                  { value: countdown.days, label: 'DAYS' },
                  { value: countdown.hours, label: 'HOURS' },
                  { value: countdown.minutes, label: 'MINUTES' },
                  { value: countdown.seconds, label: 'SECONDS', highlight: true },
                ].map((unit, i) => (
                  <div
                    key={i}
                    className="p-2.5 sm:p-3 rounded-2xl bg-[#070709] border border-white/10 text-center space-y-0.5"
                  >
                    <span
                      className={`font-headline font-black text-2xl sm:text-3xl leading-none block ${
                        unit.highlight ? 'text-[#22C55E]' : 'text-white'
                      }`}
                    >
                      {unit.value}
                    </span>
                    <span className="text-[9px] font-mono-code font-bold tracking-wider text-slate-400 block uppercase">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-[10px] font-mono-code text-slate-400 text-center uppercase tracking-wider pt-1">
                ABB ARENA · VÄSTERÅS · LIVE MATCH ARENAS
              </div>

            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN: STAGGERED PILL/CAPSULE PHOTO & VIDEO BENTO ── */}
        <div className="lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-4 auto-rows-[110px] sm:auto-rows-[140px] md:auto-rows-[160px]">
          {collageItems.map((item, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden ${item.span} ${item.rounded} border border-white/10 bg-[#121216] group`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
