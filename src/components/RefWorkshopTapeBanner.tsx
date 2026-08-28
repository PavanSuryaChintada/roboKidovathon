import React from 'react';

export const RefWorkshopTapeBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#070709] text-white py-16 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Full-Width Visual Container with Graphic Tape Overlays */}
        <div className="relative rounded-3xl overflow-hidden h-[340px] sm:h-[480px] bg-[#121216] border border-white/15">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
            alt="Robotics workshop and hardware building"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />

          {/* ── Angled Yellow Graphic Caution Tape 01 ── */}
          <div className="absolute top-[35%] -left-8 right-1/3 -rotate-3 bg-[#FACC15] text-black py-2.5 px-8 shadow-2xl flex items-center justify-around font-headline font-black text-xs sm:text-sm tracking-widest uppercase overflow-hidden pointer-events-none">
            <span>OFFICIAL WORKSHOPS</span>
            <span className="hidden sm:inline">✦</span>
            <span>LIVE IN SCHOOLS</span>
            <span className="hidden sm:inline">✦</span>
            <span>VÄSTERÅS 2026</span>
          </div>

          {/* ── Angled Cyan Graphic Caution Tape 02 ── */}
          <div className="absolute bottom-[25%] left-1/3 -right-8 rotate-2 bg-[#06B6D4] text-black py-2.5 px-8 shadow-2xl flex items-center justify-around font-headline font-black text-xs sm:text-sm tracking-widest uppercase overflow-hidden pointer-events-none">
            <span>CERTIFIED STEM MENTORS</span>
            <span className="hidden sm:inline">✦</span>
            <span>100% HANDS-ON</span>
            <span className="hidden sm:inline">✦</span>
            <span>ZERO TOY BLOCKS</span>
          </div>

        </div>

      </div>
    </section>
  );
};
