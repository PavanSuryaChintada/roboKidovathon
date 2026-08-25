import React, { useState } from 'react';
import { Calendar, School, Trophy, Flag, CheckCircle2, ArrowRight } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(1);

  const stages = [
    {
      number: 'Stage 01',
      title: 'School Workshops & Qualifiers',
      date: 'Feb 2026 – Early March 2026',
      location: 'Participating Schools (Västerås)',
      icon: School,
      badge: 'Qualifying Round',
      badgeBg: 'bg-blue-50 text-[#0062B8] border-blue-200',
      description:
        '2-hour hands-on workshop led by certified STEM trainers. Teams receive robotics hardware kits, build their bots, and compete in school-level qualifiers.',
      points: [
        'Hardware kits, arena mats, and mentors provided on-site',
        'Top Junior team and Top Senior team from each school qualify for City Finals',
        'Zero administrative burden for school staff',
      ],
    },
    {
      number: 'Stage 02',
      title: 'Västerås City Finals',
      date: 'Saturday, 21 March 2026',
      location: 'ABB Venue, Västerås',
      icon: Trophy,
      badge: 'City Championship',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200',
      description:
        'All qualified school teams assemble at the central ABB Venue in Västerås to compete across Robo-Sprint and Robo-Precision arenas evaluated by an expert robotics panel.',
      points: [
        'Evaluated by Robotics & Technology Experts Panel',
        'Structured SEK Cash Prizes awarded to 1st, 2nd, and 3rd place teams',
        'Medals, diplomas, and starter hardware kits for all participants',
      ],
    },
    {
      number: 'Stage 03',
      title: 'Nordic Cup Grand Finale',
      date: 'June – August 2026',
      location: 'Stockholm Showdown',
      icon: Flag,
      badge: '25,000 SEK Prize Pool',
      badgeBg: 'bg-sky-50 text-sky-900 border-sky-200',
      description:
        'Top 2 finalist teams from Västerås advance to the national showdown in Stockholm, competing against top robotics teams across Sweden, Denmark, Finland, and Norway.',
      points: [
        '2 finalist teams per school represent Västerås in Stockholm',
        '25,000 SEK Grand Finale prize purse',
        'Media coverage by DI Digital, NyTeknik, and Embassy of India in Sweden',
      ],
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
            Road to the Championship
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Multi-Stage Road to the Finals
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            From hands-on classroom workshops in February to the City Finals at ABB Venue in March and the Stockholm Grand Finale.
          </p>
        </div>

        {/* Stage Buttons */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 p-1 rounded-md border border-slate-200 shadow-xs inline-flex gap-1.5">
            {stages.map((stg, i) => (
              <button
                key={i}
                onClick={() => setSelectedStage(i)}
                className={`px-5 py-2.5 rounded font-bold text-xs sm:text-sm transition-all ${
                  selectedStage === i
                    ? 'bg-[#0062B8] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                {stg.number}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {stages.map((stage, idx) => {
            const IconComp = stage.icon;
            const isSelected = selectedStage === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedStage(idx)}
                className={`bg-white border rounded-lg p-8 cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected ? 'border-[#0062B8] shadow-md ring-1 ring-[#0062B8]/30' : 'border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold font-display uppercase tracking-wider text-slate-400">
                      {stage.number}
                    </span>
                    <span className={`text-[11px] font-bold uppercase px-2.5 py-0.5 rounded border ${stage.badgeBg}`}>
                      {stage.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-md bg-blue-50 border border-blue-200 text-[#0062B8]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-slate-900">
                        {stage.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-[#0062B8]" />
                        <span>{stage.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 font-bold mb-4 bg-slate-50 p-2.5 rounded border border-slate-200">
                    📍 Location: {stage.location}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal mb-6 leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 border-t border-slate-100 pt-4">
                    {stage.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0062B8] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Step 0{idx + 1} of 03</span>
                  {idx < 2 && <ArrowRight className="w-4 h-4 text-[#0062B8] hidden md:block" />}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
