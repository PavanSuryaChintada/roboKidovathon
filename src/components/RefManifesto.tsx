import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RefManifestoProps {
  onNavigate: (route: string) => void;
}

export const RefManifesto: React.FC<RefManifestoProps> = ({ onNavigate }) => {
  const logos = [
    { name: 'ABB ROBOTICS', sub: 'VENUE PARTNER' },
    { name: 'TECHFEST IIT BOMBAY', sub: 'GLOBAL LEAGUE' },
    { name: 'MÄLARDALEN UNIVERSITY', sub: 'ACADEMIC ADVISORY' },
    { name: 'VÄSTERÅS KOMMUN', sub: 'MUNICIPAL CLUSTER' },
    { name: 'SWEDISH STEM ACADEMY', sub: 'CURRICULUM LGR22' },
  ];

  const pillReel = [
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
  ];

  return (
    <section className="w-full bg-[#070709] text-white py-24 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto text-center space-y-10">
        
        {/* Floating Circular Photo Avatar Head */}
        <div className="inline-block relative">
          <div className="flex items-center justify-center -space-x-2 mb-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Participant avatar"
              className="w-12 h-12 rounded-full border-2 border-[#070709] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Participant avatar"
              className="w-12 h-12 rounded-full border-2 border-[#070709] object-cover"
            />
          </div>

          <h2
            className="font-headline font-black uppercase tracking-tight text-white leading-[0.9] flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)' }}
          >
            <span>MAKE</span>
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=140&h=140&q=80"
              alt="Participant"
              className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-2 border-white/30 object-cover inline-block"
            />
            <span>ROBOTICS</span>
            <br />
            <span>THE</span>
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=140&h=140&q=80"
              alt="Participant"
              className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-2 border-white/30 object-cover inline-block"
            />
            <span>EXPERIENCE</span>
          </h2>
        </div>

        {/* Narrative */}
        <p className="text-sm sm:text-base text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
          Robo-Kido-A-Thon is a hands-on, live-arena tournament model created to turn abstract STEM concepts into high-intensity physical robotics creations, fostering genuine teamwork and technological ambition across schools.
        </p>

        {/* Pill Button with Orbiting Circle */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('about')}
            className="btn-pill-white text-xs sm:text-sm font-black py-3.5 px-8 flex items-center gap-2"
          >
            <span>LEARN MORE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&h=100&q=80"
            alt="Student"
            className="w-10 h-10 rounded-full border border-white/20 object-cover hidden sm:inline-block"
          />
        </div>

        {/* ── Partner & Institutional Marquee ── */}
        <div className="pt-16 border-t border-white/10">
          <span className="block text-[10px] font-mono-code font-bold tracking-[0.25em] text-slate-500 uppercase mb-8">
            OFFICIAL ADVISORY & INSTITUTIONAL PARTNERS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70">
            {logos.map((logo) => (
              <div key={logo.name} className="flex flex-col items-center">
                <span className="font-headline font-bold text-sm sm:text-base tracking-wider text-slate-300">
                  {logo.name}
                </span>
                <span className="text-[9px] font-mono-code text-slate-500 uppercase mt-0.5">
                  {logo.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Horizontal Rounded Capsule Image Strip ── */}
        <div className="pt-10 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          {pillReel.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-3xl h-44 sm:h-56 border border-white/10 bg-[#121216]"
            >
              <img
                src={img}
                alt="Championship moment"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
