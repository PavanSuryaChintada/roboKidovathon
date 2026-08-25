import React, { useState } from 'react';
import { Trophy, Award, Gift, Sparkles, Star } from 'lucide-react';

export const PrizeSection: React.FC = () => {
  const [activeBracketView, setActiveBracketView] = useState<'total' | 'junior' | 'senior'>('total');

  const prizeTiers = [
    {
      place: '1st',
      title: 'City Champions',
      totalSek: 2000,
      juniorShare: 1000,
      seniorShare: 1000,
      cardBg: 'bg-white border-slate-200',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
      trophyColor: 'text-amber-600',
      perks: [
        '🥇 Gold Medals & Champion Trophy',
        '📜 Certified Winner Diplomas',
        '🤖 Advanced Robotics Starter Kits',
        '✈️ Direct Qualification to Stockholm Grand Finale',
      ],
      highlight: true,
    },
    {
      place: '2nd',
      title: 'Runners-Up',
      totalSek: 1400,
      juniorShare: 700,
      seniorShare: 700,
      cardBg: 'bg-white border-slate-200',
      badgeBg: 'bg-slate-100 text-slate-800 border-slate-200',
      trophyColor: 'text-slate-500',
      perks: [
        '🥈 Silver Medals & Team Trophy',
        '📜 Certified Runner-Up Diplomas',
        '⚙️ Hardware Expansion Accessories',
        '✈️ Direct Qualification to Stockholm Grand Finale',
      ],
      highlight: false,
    },
    {
      place: '3rd',
      title: 'Bronze Finalists',
      totalSek: 1000,
      juniorShare: 500,
      seniorShare: 500,
      cardBg: 'bg-white border-slate-200',
      badgeBg: 'bg-orange-50 text-orange-900 border-orange-200',
      trophyColor: 'text-orange-700',
      perks: [
        '🥉 Bronze Medals',
        '📜 Certified Finalist Diplomas',
        '🛠️ Robotics Toolsets & Badges',
        '📰 Honorable Mention in Regional Media',
      ],
      highlight: false,
    },
  ];

  return (
    <section id="prizes" className="py-20 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 uppercase tracking-wider">
            Rewards & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900">
            Västerås City Prize Pool & Accolades
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Structured cash prize tiers awarded directly to winning teams across both Junior and Senior brackets.
          </p>
        </div>

        {/* Bracket Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-md border border-slate-200 shadow-xs inline-flex gap-1.5 text-xs font-bold">
            <button
              onClick={() => setActiveBracketView('total')}
              className={`px-4 py-2 rounded transition-all ${
                activeBracketView === 'total'
                  ? 'bg-[#0062B8] text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              🏆 Total SEK Pool View
            </button>
            <button
              onClick={() => setActiveBracketView('junior')}
              className={`px-4 py-2 rounded transition-all ${
                activeBracketView === 'junior'
                  ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              ⚡ Junior Bracket (Up to 15 Years)
            </button>
            <button
              onClick={() => setActiveBracketView('senior')}
              className={`px-4 py-2 rounded transition-all ${
                activeBracketView === 'senior'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              🚀 Senior Bracket (15+ Years)
            </button>
          </div>
        </div>

        {/* Podium Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {prizeTiers.map((tier, idx) => {
            const displayedSek =
              activeBracketView === 'junior'
                ? tier.juniorShare
                : activeBracketView === 'senior'
                ? tier.seniorShare
                : tier.totalSek;

            return (
              <div
                key={idx}
                className={`${tier.cardBg} rounded-lg p-8 border shadow-xs transition-all hover:shadow-md hover:border-slate-300 flex flex-col justify-between relative`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0062B8] text-white font-bold text-[11px] uppercase px-3 py-0.5 rounded shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-white text-white" />
                    <span>Grand City Champions</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-sm font-bold font-display px-3 py-1 rounded border ${tier.badgeBg}`}>
                      {tier.place} Place
                    </span>
                    <Trophy className={`w-8 h-8 ${tier.trophyColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
                    {tier.title}
                  </h3>

                  <div className="bg-slate-50 border border-slate-200 rounded-md p-4 my-4 text-center">
                    <span className="block text-4xl font-extrabold text-[#0062B8] font-display">
                      {displayedSek.toLocaleString()} SEK
                    </span>
                    <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      {activeBracketView === 'total' ? 'Combined Total Cash' : `${activeBracketView.toUpperCase()} Category Prize`}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs font-semibold text-slate-800 bg-slate-50/70 p-3 rounded border border-slate-200 mb-6">
                    <p className="flex justify-between">
                      <span className="text-slate-500">Junior Winner:</span>
                      <span className="font-bold text-slate-900">{tier.juniorShare} SEK</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-500">Senior Winner:</span>
                      <span className="font-bold text-slate-900">{tier.seniorShare} SEK</span>
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    {tier.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-[#0062B8] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 text-center text-xs font-bold text-slate-500">
                  Official Diploma & Trophy Included
                </div>
              </div>
            );
          })}
        </div>

        {/* Stockholm Grand Finale Banner */}
        <div className="bg-slate-900 text-white rounded-lg p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Next Stop: Stockholm National Cup</span>
              </div>
              <h3 className="text-3xl font-extrabold font-display text-white">
                25,000 SEK Grand Finale National Prize Pool
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                City Winners from Västerås qualify to represent the region at the Stockholm Showdown. Compete against top young roboticists across Sweden with a grand prize purse of 25,000 SEK!
              </p>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <div className="inline-block bg-slate-800 border border-slate-700 text-white p-6 rounded-lg shadow-sm">
                <span className="block text-4xl font-extrabold text-amber-400 font-display">25,000 SEK</span>
                <span className="text-xs text-slate-400 font-semibold">Stockholm Grand Finale Purse</span>
                <div className="mt-3 flex items-center justify-center gap-1 text-[11px] text-slate-900 font-bold bg-amber-400 py-1 rounded">
                  <Gift className="w-4 h-4 text-slate-900" />
                  <span>Hardware + Scholarships</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
