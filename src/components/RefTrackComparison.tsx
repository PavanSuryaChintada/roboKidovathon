import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Bot, Cpu, HelpCircle } from 'lucide-react';
import {
  roboSprintMatFocus,
  roboPrecisionMatFocus,
  roboSprintKitPieces,
} from '../assets/images';

interface RefTrackComparisonProps {
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
}

export const RefTrackComparison: React.FC<RefTrackComparisonProps> = ({
  onNavigate,
  onOpenRegister,
}) => {
  const tracks = [
    {
      id: 'robo-sprint',
      badge: 'GRADES 3 – 6',
      badgeColor: 'bg-[#006AA7] text-white',
      title: 'ROBO SPRINT',
      division: 'Junior League · Grade 3 to 6',
      bgImage: roboSprintMatFocus,
      icon: Bot,
      mechanism: 'Wired Dual-Switch Remote Control',
      motorType: '6V DC Powertrain & Gearbox',
      matchFormat: '3-Minute Arena Match (1 vs 1)',
      objective: 'Air-hockey style ball transfer. Clear balls from your half into the opponent court across the central barrier.',
      skills: ['Mechanical assembly', 'Gear ratios & movement', 'Chassis stability', 'Teamwork & driving coordination'],
      highlight: 'Confidence & Mechanical Intuition',
      scoring: '5 points per ball successfully transferred into opponent half',
      borderAccent: 'border-slate-200 hover:border-[#006AA7]',
      accentColor: '#006AA7',
      tagline: 'Build a reliable moving robot, solve the obstacle challenge and score together.',
    },
    {
      id: 'robo-sprint-advanced',
      badge: 'GRADES 7 – 9',
      badgeColor: 'bg-[#FFCD00] text-[#0A1930]',
      title: 'ROBO SPRINT ADVANCED',
      division: 'Senior League · Grade 7 to 9',
      bgImage: roboPrecisionMatFocus,
      icon: Cpu,
      mechanism: 'Wired Multi-Channel Remote / Tactical Controller',
      motorType: 'High-Torque Reduction Powertrain',
      matchFormat: '3-Minute Arena Match (1 vs 1)',
      objective: 'Arena ball-transfer with steeper barrier navigation, speed agility, and precision deflection.',
      skills: ['Engineering design loops', 'Gear reduction & torque', 'Tactical match strategy', 'Technical documentation'],
      highlight: 'Speed, Optimization & Match Tactics',
      scoring: 'Match performance (60%), technical engineering (25%), documentation (15%)',
      borderAccent: 'border-slate-200 hover:border-[#006AA7]',
      accentColor: '#E65100',
      tagline: 'Engineer, measure, and optimize mechanical advantages under competition conditions.',
    },
    {
      id: 'robo-quiz',
      badge: 'ALL GRADES · STEM QUIZ',
      badgeColor: 'bg-[#0A1930] text-white border border-white/20',
      title: 'ROBO QUIZ',
      division: 'Inter-School STEM & Innovation Challenge',
      bgImage: roboSprintKitPieces,
      icon: HelpCircle,
      mechanism: 'Interactive Buzzer & Team Rounds',
      motorType: 'Mechanics, Circuits & Logic',
      matchFormat: 'Multi-Round Buzzer Face-Off',
      objective: 'Compete in buzzer and timed problem-solving rounds covering physics, mechanics, electronics, and future tech.',
      skills: ['Physics & mechanics reasoning', 'Circuit problem-solving', 'Logic & sensor concepts', 'Rapid collaborative thinking'],
      highlight: 'Knowledge, Quick Thinking & Teamwork',
      scoring: 'Round points + buzzer speed bonus + final face-off accuracy',
      borderAccent: 'border-slate-200 hover:border-[#0A1930]',
      accentColor: '#0A1930',
      tagline: 'Test your school cohort\'s STEM knowledge, scientific curiosity, and problem-solving agility.',
    },
  ];

  return (
    <section id="competition-tracks" className="w-full bg-[#F8FAFC] text-[#0A1930] py-14 sm:py-20 px-6 sm:px-10 border-t border-slate-200 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto space-y-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#006AA7] uppercase block">
              COMPETITION TRACKS // VÄSTERÅS 2026
            </span>
            <h2
              className="font-headline font-black uppercase tracking-tight text-[#0A1930] leading-[1.05]"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)' }}
            >
              CHOOSE YOUR <span className="text-[#006AA7]">DISCIPLINE.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Three age-appropriate competition disciplines mapped to Swedish school cohorts: Robo Sprint for elementary grades, Robo Sprint Advanced for upper grades, and the inter-school Robo Quiz knowledge challenge.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('challenges')}
              className="btn-pill-outline text-xs font-bold py-3 px-5 flex items-center gap-2"
            >
              <span>VIEW FULL RULEBOOK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3-Track Responsive Comparison Grid with Visual Background Treatment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {tracks.map((track, i) => {
            const Icon = track.icon;

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 bg-white border shadow-sm hover:shadow-lg flex flex-col justify-between transition-all duration-300 overflow-hidden group ${track.borderAccent}`}
              >
                {/* ── VISUAL BACKGROUND TREATMENT ── */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  {/* Subtle Robotics/Competition Backdrop Image */}
                  <img
                    src={track.bgImage}
                    alt=""
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* High-Contrast Scrim to Guarantee 100% Crisp Typography */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
                  {/* Subtle Top Accent Bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: track.accentColor }}
                  />
                </div>

                {/* ── CARD CONTENT (z-10) ── */}
                <div className="relative z-10 space-y-6">
                  {/* Header Tag + Title */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider ${track.badgeColor}`}>
                        {track.badge}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-[#0A1930] group-hover:bg-[#FFCD00] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-headline font-black text-xl sm:text-2xl text-[#0A1930] uppercase tracking-tight">
                      {track.title}
                    </h3>

                    <p className="text-xs font-mono-code text-[#006AA7] font-bold uppercase">
                      {track.division}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed pt-1">
                      {track.tagline}
                    </p>
                  </div>

                  {/* Structured Specs Table */}
                  <div className="space-y-3 py-4 border-y border-slate-200/80 text-xs">
                    <div className="flex flex-col space-y-0.5">
                      <span className="text-[10px] font-mono-code text-slate-500 uppercase font-bold">CONTROL METHOD</span>
                      <span className="font-mono-code font-semibold text-[#0A1930]">{track.mechanism}</span>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                      <span className="text-[10px] font-mono-code text-slate-500 uppercase font-bold">HARDWARE &amp; DRIVE</span>
                      <span className="font-mono-code font-semibold text-[#0A1930]">{track.motorType}</span>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                      <span className="text-[10px] font-mono-code text-slate-500 uppercase font-bold">MATCH LENGTH</span>
                      <span className="font-mono-code font-semibold text-[#006AA7]">{track.matchFormat}</span>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                      <span className="text-[10px] font-mono-code text-slate-500 uppercase font-bold">CHALLENGE OBJECTIVE</span>
                      <span className="text-slate-700 font-light">{track.objective}</span>
                    </div>
                  </div>

                  {/* Focus Skills */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono-code font-bold text-slate-500 uppercase block tracking-wider">
                      KEY SKILLS LEARNED:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-light">
                      {track.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#006AA7] shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="relative z-10 pt-5 mt-6 border-t border-slate-200/80 space-y-3">
                  <button
                    onClick={onOpenRegister}
                    className="w-full btn-pill-lime py-3 text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>REGISTER FOR {track.badge}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('challenges')}
                    className="w-full text-center text-[11px] font-mono-code font-bold text-[#006AA7] hover:text-[#0A1930] transition-colors py-1 block uppercase"
                  >
                    VIEW FULL CHALLENGE DETAILS →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
