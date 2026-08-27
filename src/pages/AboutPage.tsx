import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* About Header */}
      <div className="card-event-dark p-8 sm:p-12">
        <div className="max-w-3xl space-y-3">
          <span className="bg-[#0052FF] text-white font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-wider inline-block">
            LEAGUE ORIGIN & NORDIC VISION
          </span>
          <h1 className="text-4xl sm:text-6xl font-syne font-extrabold uppercase text-white leading-none">
            ABOUT ROBO-KIDOVATION
          </h1>
          <p className="text-base sm:text-lg font-jakarta text-slate-300">
            Adapting a proven hands-on robotics competition model into the Nordic educational context starting in Västerås, Sweden.
          </p>
        </div>
      </div>

      {/* Origin & Expansion Story */}
      <div className="card-event p-6 sm:p-10 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] border-b border-slate-200 pb-3">
          PROVEN MODEL × NORDIC ADAPTATION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-jakarta text-slate-700 leading-relaxed">
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-[#0052FF]">
              1. PROVEN SUCCESS MODEL
            </h3>
            <p>
              The Robo-Kido-A-Thon competition framework originated as a highly successful student robotics initiative in India (engaging over 1,000+ student participants in recent editions). It proved that physical robot construction and live arena challenges build unmatched confidence and STEM interest.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-lg text-[#0F172A]">
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
        <div className="card-event p-5 space-y-2">
          <span className="font-bold text-lg text-[#0052FF] block">EARLY STEM EDUCATION</span>
          <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
            Introducing mechanics, electronics, and coding to students early in a supportive hands-on environment.
          </p>
        </div>

        <div className="card-event p-5 space-y-2">
          <span className="font-bold text-lg text-[#0F172A] block">EQUALITY & INCLUSION</span>
          <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
            Equal access for all gender identities and backgrounds. Team-based design ensures every student contributes.
          </p>
        </div>

        <div className="card-event p-5 space-y-2">
          <span className="font-bold text-lg text-emerald-700 block">SAFETY & GDPR COMPLIANCE</span>
          <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
            Strict adherence to Swedish student data protection, safety standards, and school coordination policies.
          </p>
        </div>
      </div>
    </div>
  );
};
