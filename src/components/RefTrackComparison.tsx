import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  Settings,
  HelpCircle,
  Radio,
  Cpu,
  Clock,
  Target,
} from 'lucide-react';
import {
  mascotRobotHeader,
  bannerRoboSprint,
  bannerRoboSprintAdvanced,
  bannerRoboQuiz,
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
      title: 'ROBO SPRINT',
      division: 'JUNIOR LEAGUE • GRADE 3 TO 6',
      description: 'Build a reliable moving robot, solve the obstacle challenge and score together.',
      bannerImage: bannerRoboSprint,
      subtitleColor: 'text-[#38BDF8]',
      checkColor: 'text-[#0284C7]',
      borderColor: 'border-[#38BDF8]/50 hover:border-[#0284C7]',
      cornerIcon: Gamepad2,
      cornerBg: 'bg-white text-[#0A1930]',
      controlMethod: 'Wired Dual-Switch Remote Control',
      hardwareDrive: '6V DC Powertrain & Gearbox',
      matchLength: '3-Minute Arena Match (1 vs 1)',
      challengeObjective: 'Air-hockey style ball transfer. Clear balls from your half into the opponent court across the central barrier.',
      skills: [
        'Mechanical assembly',
        'Gear ratios & movement',
        'Chassis stability',
        'Teamwork & driving coordination',
      ],
      registerLabel: 'REGISTER FOR GRADES 3 – 6 →',
    },
    {
      id: 'robo-sprint-advanced',
      badge: 'GRADES 7 – 9',
      title: 'ROBO SPRINT ADVANCED',
      division: 'SENIOR LEAGUE • GRADE 7 TO 9',
      description: 'Engineer, measure, and optimize mechanical advantages under competition conditions.',
      bannerImage: bannerRoboSprintAdvanced,
      subtitleColor: 'text-[#FB923C]',
      checkColor: 'text-[#EA580C]',
      borderColor: 'border-[#FB923C]/50 hover:border-[#EA580C]',
      cornerIcon: Settings,
      cornerBg: 'bg-[#FFCD00] text-[#0A1930]',
      controlMethod: 'Wired Multi-Channel Remote / Tactical Controller',
      hardwareDrive: 'High-Torque Reduction Powertrain',
      matchLength: '3-Minute Arena Match (1 vs 1)',
      challengeObjective: 'Arena ball-transfer with steeper barrier navigation, speed agility, and precision deflection.',
      skills: [
        'Engineering design loops',
        'Gear reduction & torque',
        'Tactical match strategy',
        'Technical documentation',
      ],
      registerLabel: 'REGISTER FOR GRADES 7 – 9 →',
    },
    {
      id: 'robo-quiz',
      badge: 'ALL GRADES • STEM QUIZ',
      title: 'ROBO QUIZ',
      division: 'INTER-SCHOOL STEM & INNOVATION CHALLENGE',
      description: 'Test your school cohort\'s STEM knowledge, scientific curiosity, and problem-solving agility.',
      bannerImage: bannerRoboQuiz,
      subtitleColor: 'text-[#C084FC]',
      checkColor: 'text-[#9333EA]',
      borderColor: 'border-[#C084FC]/50 hover:border-[#9333EA]',
      cornerIcon: HelpCircle,
      cornerBg: 'bg-white text-[#0A1930]',
      controlMethod: 'Interactive Buzzer & Team Rounds',
      hardwareDrive: 'Mechanics, Circuits & Logic',
      matchLength: 'Multi-Round Buzzer Face-Off',
      challengeObjective: 'Compete in buzzer and timed problem-solving rounds covering physics, mechanics, electronics, and future tech.',
      skills: [
        'Physics & mechanics reasoning',
        'Circuit problem-solving',
        'Logic & sensor concepts',
        'Rapid collaborative thinking',
      ],
      registerLabel: 'REGISTER FOR ALL GRADES • STEM QUIZ →',
    },
  ];

  return (
    <section id="competition-tracks" className="w-full bg-[#F4F7FB] text-[#0A1930] py-14 sm:py-20 px-4 sm:px-8 lg:px-12 select-none relative overflow-hidden">
      
      {/* Background Dot Matrix Pattern */}
      <div className="absolute top-12 left-6 pointer-events-none opacity-40">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#006AA7]" />
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto space-y-10 relative z-10">

        {/* ── SECTION HEADER MATCHING REFERENCE DESIGN ── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-4">
          
          {/* Left Column: Heading, Subtitle, Description */}
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono-code font-bold tracking-[0.25em] text-[#006AA7] uppercase block">
              COMPETITION TRACKS // VÄSTERÅS 2026
            </span>

            <div className="relative inline-block">
              <h2
                className="font-headline font-black uppercase tracking-tight text-[#0A1930] leading-[1.02]"
                style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)' }}
              >
                CHOOSE YOUR{' '}
                <span className="text-[#006AA7] relative inline-block">
                  DISCIPLINE.
                  {/* Hand-drawn Orange Sparkle */}
                  <span className="absolute -top-3 -right-6 text-[#F97316] text-xl font-bold">✦</span>
                  {/* Hand-drawn Blue Underline */}
                  <svg
                    className="absolute left-0 -bottom-3 w-full h-3.5 text-[#006AA7]"
                    viewBox="0 0 240 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8 C 65 13, 175 3, 237 7"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed pt-3 max-w-xl">
              Three age-appropriate competition disciplines mapped to Swedish school cohorts: Robo Sprint for elementary grades, Robo Sprint Advanced for upper grades, and the inter-school Robo Quiz knowledge challenge.
            </p>
          </div>

          {/* Right Column: Handwritten Annotations + Free-Floating Robot Mascot + CTA */}
          <div className="flex items-center gap-6 self-start lg:self-center">
            
            {/* Playful Handwritten Doodles */}
            <div className="hidden sm:flex flex-col items-end text-right space-y-3">
              <div className="font-handwriting text-lg text-slate-700 leading-snug font-bold">
                <span>Build</span><br />
                <span className="text-[#006AA7]">Compete</span><br />
                <span>Learn</span><br />
                <span className="text-[#F97316]">Grow</span>
              </div>
              
              <div className="relative">
                <span className="font-handwriting text-2xl font-bold text-[#006AA7] -rotate-6 inline-block">
                  More Than Robots
                </span>
                <svg className="w-28 h-2 text-[#006AA7] mt-0.5" viewBox="0 0 100 8" fill="none">
                  <path d="M2 3 C 30 7, 70 2, 98 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 6 C 35 9, 65 4, 94 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Mascot Robot + Speech Bubble + Rulebook CTA */}
            <div className="flex flex-col items-center">
              {/* Speech Bubble */}
              <div className="relative bg-white border border-slate-300 rounded-full px-4 py-1.5 shadow-sm text-center -mb-2 z-20">
                <span className="text-[10px] font-mono-code font-black text-[#0A1930] tracking-wider uppercase whitespace-nowrap">
                  SAME CURIOSITY. BIGGER POSSIBILITIES.
                </span>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-slate-300 rotate-45" />
              </div>

              {/* 3D Robot Mascot (Seamless floating) */}
              <div className="w-28 h-32 sm:w-32 sm:h-36 relative flex items-center justify-center">
                <img
                  src={mascotRobotHeader}
                  alt="Västerås Future Innovators Robot Mascot"
                  className="w-full h-full object-contain mix-blend-multiply drop-shadow-lg"
                />
              </div>

              {/* View Full Rulebook Button */}
              <button
                onClick={() => onNavigate('challenges')}
                className="mt-1 bg-white hover:bg-slate-50 text-[#0A1930] border border-slate-300 text-xs font-bold py-2.5 px-5 rounded-full shadow-xs flex items-center gap-2 transition-transform hover:scale-105"
              >
                <span>VIEW FULL RULEBOOK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* ── 3 VIBRANT DISCIPLINE CARDS WITH OFFICIAL USER BANNERS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {tracks.map((track) => {
            const CornerIcon = track.cornerIcon;

            return (
              <div
                key={track.id}
                className={`rounded-[32px] overflow-hidden bg-white border-2 shadow-xl hover:shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group ${track.borderColor}`}
              >
                
                {/* ════ TOP HALF: USER-PROVIDED OFFICIAL BANNER ARTWORK ════ */}
                <div className="relative h-[250px] sm:h-[280px] w-full overflow-hidden select-none bg-slate-900">
                  <img
                    src={track.bannerImage}
                    alt={track.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle gradient vignette at bottom for subtitle/desc readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 pointer-events-none" />

                  {/* Top Row: Pill Badge + Corner Action Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="bg-white text-[#0A1930] text-[11px] font-mono-code font-black px-4 py-1.5 rounded-full shadow-md tracking-wider uppercase">
                      {track.badge}
                    </span>

                    <div className={`w-9 h-9 rounded-full ${track.cornerBg} flex items-center justify-center shadow-md`}>
                      <CornerIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom of Banner: Division Subtitle + Description */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                    <p className={`text-[11px] font-mono-code font-bold uppercase tracking-wider ${track.subtitleColor}`}>
                      {track.division}
                    </p>

                    <p className="text-xs text-white/95 font-medium leading-snug line-clamp-2 drop-shadow-sm">
                      {track.description}
                    </p>
                  </div>

                </div>

                {/* ════ BOTTOM HALF: CLEAN WHITE DETAILS ════ */}
                <div className="bg-white p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
                  
                  {/* 2-Column Content Grid: Left Specs & Right Key Skills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    
                    {/* Left Column: 4 Technical Specs */}
                    <div className="space-y-3.5 pr-1">
                      
                      {/* 1. Control Method */}
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-[9px] font-mono-code font-bold text-slate-400 uppercase tracking-wider">
                          <Radio className="w-3 h-3 text-slate-400" />
                          <span>CONTROL METHOD</span>
                        </div>
                        <p className="font-mono-code font-bold text-[11px] text-[#0A1930] leading-snug">
                          {track.controlMethod}
                        </p>
                      </div>

                      {/* 2. Hardware & Drive */}
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-[9px] font-mono-code font-bold text-slate-400 uppercase tracking-wider">
                          <Cpu className="w-3 h-3 text-slate-400" />
                          <span>HARDWARE &amp; DRIVE</span>
                        </div>
                        <p className="font-mono-code font-bold text-[11px] text-[#0A1930] leading-snug">
                          {track.hardwareDrive}
                        </p>
                      </div>

                      {/* 3. Match Length */}
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-[9px] font-mono-code font-bold text-slate-400 uppercase tracking-wider">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>MATCH LENGTH</span>
                        </div>
                        <p className="font-mono-code font-bold text-[11px] text-[#006AA7] leading-snug">
                          {track.matchLength}
                        </p>
                      </div>

                      {/* 4. Challenge Objective */}
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-[9px] font-mono-code font-bold text-slate-400 uppercase tracking-wider">
                          <Target className="w-3 h-3 text-slate-400" />
                          <span>CHALLENGE OBJECTIVE</span>
                        </div>
                        <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                          {track.challengeObjective}
                        </p>
                      </div>

                    </div>

                    {/* Right Column: Key Skills */}
                    <div className="space-y-3 sm:border-l sm:border-slate-100 sm:pl-4">
                      <span className="text-[10px] font-mono-code font-bold text-slate-400 uppercase tracking-wider block">
                        KEY SKILLS:
                      </span>
                      
                      <ul className="space-y-2.5">
                        {track.skills.map((skill, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-800 font-semibold leading-snug">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${track.checkColor}`} />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Actions: Yellow Primary Button + Secondary Challenge Details Link */}
                  <div className="pt-2 space-y-3">
                    <button
                      onClick={onOpenRegister}
                      className="w-full bg-[#FFCD00] hover:bg-[#FACC15] text-[#0A1930] font-black text-xs sm:text-sm py-4 px-6 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider"
                    >
                      <span>{track.registerLabel}</span>
                    </button>

                    <button
                      onClick={() => onNavigate('challenges')}
                      className="w-full text-center text-[11px] font-mono-code font-bold text-slate-700 hover:text-[#006AA7] transition-colors py-1 block uppercase tracking-wider"
                    >
                      VIEW FULL CHALLENGE DETAILS →
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* ── SECTION FOOTER RIBBON ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 text-[11px] font-mono-code text-slate-500 font-bold uppercase tracking-widest">
          <span>VÄSTERÅS FUTURE INNOVATORS 2026</span>
          <span className="hidden sm:inline">STUDENTS  ×  ROBOTS  ×  BRIGHTER TOMORROWS</span>
        </div>

      </div>
    </section>
  );
};
