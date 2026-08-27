import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onOpenRegister?: () => void;
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
}) => {
  return (
    <div className="w-full bg-white text-[#07111F] pt-28 pb-20 select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono-code font-bold tracking-wider text-[#0052FF] uppercase mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>

        <div className="border-b border-[#07111F]/10 pb-12">
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#0052FF] uppercase block mb-3">
            LEAGUE ORIGINS & PHILOSOPHY
          </span>
          <h1
            className="font-display font-black uppercase leading-none tracking-tight text-[#07111F]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            About The<br />
            <span className="text-[#0052FF]">League.</span>
          </h1>
          <p className="mt-4 text-base text-[#4A5568] font-light max-w-2xl leading-relaxed">
            Evolving the world-renowned Techfest IIT Bombay robotics competition framework into a Scandinavian student engineering championship.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-black uppercase text-2xl sm:text-3xl text-[#07111F] tracking-tight">
              Evolved from Global Engineering Benchmarks
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568] font-light leading-relaxed">
              Techfest IIT Bombay is Asia's largest annual science and technology festival, engaging over 175,000 students worldwide. The Robo-Kidovation model takes this exact hands-on, high-intensity robotics tournament format and adapts it specifically for Swedish school cohorts.
            </p>
            <p className="text-sm sm:text-base text-[#4A5568] font-light leading-relaxed">
              Rather than theoretical coding exercises on screens, we place real motors, sensors, microcontrollers, and screwdrivers directly in students' hands. They build, wire, program, iterate, and compete in refereed match arenas.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono-code font-bold text-[#07111F]">
              <span className="p-3 bg-[#F8F9FA] border border-[#07111F]/10 rounded-[2px]">
                ✓ INCLUSIVE GENDER PARITY FOCUS
              </span>
              <span className="p-3 bg-[#F8F9FA] border border-[#07111F]/10 rounded-[2px]">
                ✓ SWEDISH CURRICULUM LGR22 MAPPED
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative overflow-hidden rounded-[2px] border border-[#07111F]/15 bg-[#07111F]" style={{ minHeight: '380px' }}>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85"
              alt="Engineering students working together"
              className="absolute inset-0 w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono-code font-bold text-[#E2FF00] uppercase block mb-1">
                VÄSTERÅS PILOT 2026
              </span>
              <span className="text-xs font-display font-bold text-white uppercase">
                15 Schools · 600+ Students · 45+ Certified Educators
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
