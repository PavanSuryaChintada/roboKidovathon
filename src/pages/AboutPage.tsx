import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* About Header */}
      <div className="bg-[#111111] text-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#FF3B00] p-8 sm:p-12">
        <div className="max-w-3xl space-y-3">
          <span className="bg-[#FF3B00] text-white font-barlow font-black text-xs px-3 py-1 border border-white uppercase tracking-wider inline-block">
            LEAGUE ORIGIN & NORDIC VISION
          </span>
          <h1 className="text-5xl sm:text-7xl font-barlow font-black uppercase text-white leading-none">
            ABOUT ROBO-KIDOVATION
          </h1>
          <p className="text-base sm:text-lg font-dmsans text-white/90">
            Adapting a proven hands-on robotics competition model into the Nordic educational context starting in Västerås, Sweden.
          </p>
        </div>
      </div>

      {/* Origin & Expansion Story */}
      <div className="bg-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#111111] p-6 sm:p-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-barlow font-black uppercase text-[#111111] border-b-2 border-[#111111] pb-3">
          PROVEN MODEL × NORDIC ADAPTATION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-dmsans text-[#111111] leading-relaxed">
          <div className="space-y-3">
            <h3 className="font-barlow font-black text-xl text-[#0052FF]">
              1. PROVEN SUCCESS MODEL
            </h3>
            <p>
              The Robo-Kido-A-Thon competition framework originated as a highly successful student robotics initiative in India (engaging over 1,000+ student participants in recent editions). It proved that physical robot construction and live arena challenges build unmatched confidence and STEM interest.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-barlow font-black text-xl text-[#FF3B00]">
              2. NORDIC / SWEDISH PILOT (VÄSTERÅS)
            </h3>
            <p>
              We are expanding this hands-on model globally, commencing with a targeted school cluster pilot in Västerås, Sweden. The event is tailored specifically for Swedish school curriculum goals, fostering early tech literacy, teamwork, and equality.
            </p>
          </div>
        </div>
      </div>

      {/* Nordic Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#F7F4EC] border-2 border-[#111111] p-5 shadow-[4px_4px_0px_#111111] space-y-2">
          <span className="font-barlow font-black text-2xl text-[#0052FF] block">EARLY STEM EDUCATION</span>
          <p className="text-xs text-[#111111]/85 font-dmsans">
            Introducing mechanics, electronics, and coding to students early in a supportive hands-on environment.
          </p>
        </div>

        <div className="bg-[#F7F4EC] border-2 border-[#111111] p-5 shadow-[4px_4px_0px_#111111] space-y-2">
          <span className="font-barlow font-black text-2xl text-[#FF3B00] block">EQUALITY & INCLUSION</span>
          <p className="text-xs text-[#111111]/85 font-dmsans">
            Equal access for all gender identities and backgrounds. Team-based design ensures every student contributes.
          </p>
        </div>

        <div className="bg-[#F7F4EC] border-2 border-[#111111] p-5 shadow-[4px_4px_0px_#111111] space-y-2">
          <span className="font-barlow font-black text-2xl text-[#059669] block">SAFETY & GDPR COMPLIANCE</span>
          <p className="text-xs text-[#111111]/85 font-dmsans">
            Strict adherence to Swedish student data protection, safety standards, and school coordination policies.
          </p>
        </div>
      </div>
    </div>
  );
};
