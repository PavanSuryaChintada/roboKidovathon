import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
      id: 'robo-sprint-explorer',
      badge: 'GRADES 4 – 6',
      badgeColor: 'bg-[#006AA7] text-white',
      title: 'ROBO-SPRINT EXPLORER',
      division: 'Junior League · Grundskola 4–6',
      mechanism: 'Wired Dual-Switch Remote Control',
      motorType: '6V DC Powertrain & Gearbox',
      matchFormat: '3-Minute Arena Match (1 vs 1)',
      objective: 'Air-hockey style ball transfer. Clear balls from your half into the opponent court across the central barrier.',
      skills: ['Mechanical assembly', 'Gear ratios & movement', 'Chassis stability', 'Teamwork & driving coordination'],
      highlight: 'Confidence & Mechanical Intuition',
      scoring: '5 points per ball successfully transferred into opponent half',
      borderAccent: 'border-slate-200 hover:border-[#006AA7]/40',
      tagline: 'Build a reliable moving robot, solve the obstacle challenge and score together.',
    },
    {
      id: 'robo-sprint-advanced',
      badge: 'GRADES 7 – 9',
      badgeColor: 'bg-[#FFCD00] text-[#0A1930]',
      title: 'ROBO-SPRINT ADVANCED',
      division: 'Senior League · Grundskola 7–9',
      mechanism: 'Wired Multi-Channel Remote / Tactical Controller',
      motorType: 'High-Torque Reduction Powertrain',
      matchFormat: '3-Minute Arena Match (1 vs 1)',
      objective: 'Arena ball-transfer with steeper barrier navigation, speed agility, and precision deflection.',
      skills: ['Engineering design loops', 'Gear reduction & torque', 'Tactical match strategy', 'Technical documentation'],
      highlight: 'Speed, Optimization & Match Tactics',
      scoring: 'Match performance (60%), technical engineering (25%), documentation (15%)',
      borderAccent: 'border-[#006AA7]/30 hover:border-[#006AA7]',
      tagline: 'Engineer, measure, and optimize mechanical advantages under competition conditions.',
    },
    {
      id: 'robo-precision',
      badge: 'GYMNASIUM · 15+',
      badgeColor: 'bg-[#0A1930] text-white border border-white/20',
      title: 'ROBO-PRECISION',
      division: 'Gymnasium & Gy25 Track',
      mechanism: 'Autonomous Sequence / Coded Kinematics',
      motorType: 'Servos & Stepper/DC Mechanical Lift',
      matchFormat: '5-Minute Autonomous Build Match',
      objective: 'Zero human touch once the match starts. Autonomous robotic arm lifts and stacks scoring cups into stable towers.',
      skills: ['Programming logic & autonomy', 'Crane & servo kinematics', 'Sensor feedback loops', 'Engineering documentation'],
      highlight: 'Autonomy, Kinematics & Code',
      scoring: 'Tower height & stability (60%), autonomy design (30%), code & documentation (10%)',
      borderAccent: 'border-slate-200 hover:border-[#0A1930]',
      tagline: 'Program a fully autonomous machine — direct practical alignment with Gy25 programming curricula.',
    },
  ];

  return (
    <section id="competition-tracks" className="w-full bg-[#F8FAFC] text-[#0A1930] py-24 sm:py-28 px-6 sm:px-10 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-16">

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
              Three age-appropriate competition categories mapped to Swedish school cohorts. Explorer and Advanced focus on hands-on mechanical construction and live arena matches; Robo-Precision introduces code and autonomy for older students.
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

        {/* 3-Track Responsive Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {tracks.map((track, i) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`rounded-3xl p-6 sm:p-8 bg-white border shadow-sm flex flex-col justify-between transition-all ${track.borderAccent}`}
            >
              <div className="space-y-6">
                {/* Header Tag + Title */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider ${track.badgeColor}`}>
                      {track.badge}
                    </span>
                    <span className="text-[10px] font-mono-code font-bold text-slate-400 uppercase">
                      CAT 0{i + 1}
                    </span>
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
                <div className="space-y-3 py-4 border-y border-slate-100 text-xs">
                  <div className="flex flex-col space-y-0.5">
                    <span className="text-[10px] font-mono-code text-slate-400 uppercase">CONTROL METHOD</span>
                    <span className="font-mono-code font-semibold text-[#0A1930]">{track.mechanism}</span>
                  </div>
                  <div className="flex flex-col space-y-0.5">
                    <span className="text-[10px] font-mono-code text-slate-400 uppercase">HARDWARE & DRIVE</span>
                    <span className="font-mono-code font-semibold text-[#0A1930]">{track.motorType}</span>
                  </div>
                  <div className="flex flex-col space-y-0.5">
                    <span className="text-[10px] font-mono-code text-slate-400 uppercase">MATCH LENGTH</span>
                    <span className="font-mono-code font-semibold text-[#006AA7]">{track.matchFormat}</span>
                  </div>
                  <div className="flex flex-col space-y-0.5">
                    <span className="text-[10px] font-mono-code text-slate-400 uppercase">ARENA OBJECTIVE</span>
                    <span className="text-slate-600 font-light">{track.objective}</span>
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
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                <button
                  onClick={onOpenRegister}
                  className="w-full btn-pill-lime py-3 text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2"
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
          ))}
        </div>

      </div>
    </section>
  );
};
