import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Trophy, ArrowRight, ArrowDown, Calendar, Target } from 'lucide-react';

interface RefCompetitionFlowProps {
  onOpenRegister?: () => void;
  onNavigate?: (route: string) => void;
}

export const RefCompetitionFlow: React.FC<RefCompetitionFlowProps> = ({
  onOpenRegister,
  onNavigate,
}) => {
  const steps = [
    {
      stepNumber: '01',
      badge: 'STAGE 01',
      title: 'Workshop',
      subtitle: 'In-School STEM & Robotics Build',
      icon: Wrench,
      accentColor: '#006AA7',
      accentBg: 'bg-[#006AA7]/10 text-[#006AA7] border-[#006AA7]/30',
      timing: 'OCTOBER · IN-SCHOOL',
      features: [
        '10 sessions (20h) in classroom',
        'Hardware kits & test mats provided',
        'Every student builds a working robot',
      ],
      description: 'Hands-on curriculum delivered directly into school classrooms. Students master gear ratios, chassis stability, motor circuits, and driving teamwork.',
    },
    {
      stepNumber: '02',
      badge: 'STAGE 02',
      title: 'Inter-School Competition',
      subtitle: 'School Qualifiers & Arena Heats',
      icon: Target,
      accentColor: '#E65100',
      accentBg: 'bg-[#E65100]/10 text-[#E65100] border-[#E65100]/30',
      timing: 'OCTOBER / NOVEMBER · QUALIFIERS',
      features: [
        'Official 244 × 122 cm arena matches',
        '3-minute head-to-head match heats',
        'Top school teams qualify for Finals',
      ],
      description: 'Student teams put their built machines to the test in fast-paced arena matches. Winning teams advance directly to represent their school in the Grand Finale.',
    },
    {
      stepNumber: '03',
      badge: 'STAGE 03 · FINALS',
      title: 'Inter-School Competition Finals',
      subtitle: 'Grand Finale Championship Showcase',
      icon: Trophy,
      accentColor: '#FFCD00',
      accentBg: 'bg-[#FFCD00]/20 text-[#0A1930] border-[#FFCD00]/50 font-bold',
      timing: 'DECEMBER 4 & 5, 2026',
      features: [
        'Live municipal championship arena',
        'SEK 3,000 prize pool, trophies & medals',
        'Community, educator & peer showcase',
      ],
      description: 'The premier championship stage. Qualifying school finalists compete live for the city title, awards, and technical excellence before a live audience.',
    },
  ];

  return (
    <section id="competition-flow" className="w-full bg-[#F8FAFC] text-[#0A1930] py-12 sm:py-16 px-6 sm:px-10 border-b border-slate-200 scroll-mt-24 select-none">
      <div className="max-w-[1440px] mx-auto space-y-10">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006AA7]/10 text-[#006AA7] text-[10px] font-mono-code font-bold uppercase tracking-widest">
              <span>PATHWAY // CLASSROOM TO ARENA</span>
            </div>
            <h2 className="font-headline font-black text-2xl sm:text-3xl md:text-4xl text-[#0A1930] uppercase tracking-tight">
              COMPETITION <span className="text-[#006AA7]">FLOW</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xl">
              From hands-on classroom building to school qualifiers and the live December 4 &amp; 5 championship finals.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {onOpenRegister && (
              <button
                onClick={onOpenRegister}
                className="btn-pill-lime text-[11px] font-bold py-2 px-4 shadow-xs"
              >
                JOIN THE LEAGUE
              </button>
            )}
            {onNavigate && (
              <button
                onClick={() => onNavigate('how-it-works')}
                className="btn-pill-outline text-[11px] font-bold py-2 px-3 hidden sm:inline-flex items-center gap-1.5"
              >
                <span>HOW IT WORKS</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Flowchart Progression Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 relative items-stretch">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <React.Fragment key={step.stepNumber}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 border shadow-sm hover:shadow-md ${
                    isLast
                      ? 'bg-gradient-to-b from-[#0A1930] to-[#012544] text-white border-[#0A1930]'
                      : 'bg-white text-[#0A1930] border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Top Step Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                            isLast ? 'bg-[#FFCD00] text-[#0A1930]' : 'bg-[#F1F5F9] text-[#006AA7]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-mono-code font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${
                          isLast ? 'bg-white/10 text-[#FFCD00] border-[#FFCD00]/40' : step.accentBg
                        }`}>
                          {step.badge}
                        </span>
                      </div>

                      <span className={`font-mono-code font-extrabold text-2xl tracking-tight opacity-30 ${
                        isLast ? 'text-white' : 'text-[#0A1930]'
                      }`}>
                        {step.stepNumber}
                      </span>
                    </div>

                    <div>
                      <h3 className={`font-headline font-black text-xl sm:text-2xl uppercase tracking-tight leading-tight ${
                        isLast ? 'text-white' : 'text-[#0A1930]'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-xs font-mono-code font-medium mt-1 tracking-wide ${
                        isLast ? 'text-[#FFCD00]' : 'text-[#006AA7]'
                      }`}>
                        {step.subtitle}
                      </p>
                    </div>

                    <p className={`text-xs sm:text-sm font-light leading-relaxed ${
                      isLast ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className={`p-4 rounded-2xl space-y-2 border text-xs font-mono-code ${
                    isLast ? 'bg-white/5 border-white/10 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    {step.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <span className={`text-xs mt-0.5 ${isLast ? 'text-[#FFCD00]' : 'text-[#006AA7]'}`}>▸</span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Timing & Connector */}
                  <div className={`pt-3 border-t flex items-center justify-between text-xs font-mono-code font-bold ${
                    isLast ? 'border-white/10 text-[#FFCD00]' : 'border-slate-100 text-slate-500'
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 opacity-80" />
                      <span className="text-[11px] tracking-wide">{step.timing}</span>
                    </div>

                    {!isLast && (
                      <span className="hidden lg:inline-flex items-center text-[#006AA7] text-[11px] gap-1 font-bold">
                        <span>NEXT</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </motion.div>

                {/* Mobile/Tablet Down Indicator */}
                {!isLast && (
                  <div className="lg:hidden flex items-center justify-center -my-2 text-slate-400">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                      <ArrowDown className="w-4 h-4 text-[#006AA7]" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
};
