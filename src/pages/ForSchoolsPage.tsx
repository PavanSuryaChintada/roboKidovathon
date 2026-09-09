import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Boxes, Layers, CheckCircle2, ShieldCheck, Download, ArrowRight, ArrowLeft, ChevronDown, HelpCircle, Sparkles, BookOpen, Cpu, Users } from 'lucide-react';
import {
  roboSprintKitPieces,
  roboSprintMatFocus,
  roboPrecisionActionWide,
} from '../assets/images';

const WHY_ICONS = [Sparkles, Cpu, Users, BookOpen];

const WHY_SCHOOLS_PARTICIPATE = [
  {
    title: 'Zero Procurement',
    desc: 'All hardware, arena mats, and kits are delivered to your school — no lab budget needed.',
    detail: 'Schools receive the complete Robo-Sprint or Robo-Precision kit including gearboxes, control boards, and the official 8ft×4ft roll-out arena mat.',
  },
  {
    title: 'STEM Curriculum Fit',
    desc: 'Directly aligned to design-thinking and computational reasoning competencies.',
    detail: 'Each challenge requires students to apply engineering design loops: prototype, test, iterate — fitting seamlessly into technology and science classes.',
  },
  {
    title: 'Team Collaboration',
    desc: 'Students work in pairs to build, program, and compete — building communication skills.',
    detail: 'Each team of 2 shares the full build-and-compete cycle, reinforcing peer learning and accountability in a structured, fun context.',
  },
  {
    title: 'Competition Pathway',
    desc: 'School qualifiers feed directly into the November 2026 Västerås City Finals.',
    detail: 'Top-performing school teams are invited to the Grand Finale at a Västerås event venue on November 13, 2026, with prizes and certificates.',
  },
];

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Logistics',
    question: 'How does the in-school kit delivery work?',
    answer: 'Our team delivers all kits, arena mats, and materials directly to your school ahead of the qualifier dates. A trained mentor conducts a 120-minute hands-on session with your student cohort.',
  },
  {
    id: 'faq-2',
    category: 'Eligibility',
    question: 'Which grades can participate?',
    answer: 'Robo-Sprint Explorer is open to students in Grades 4–6. Robo-Sprint Advanced and Robo-Precision are open to students in Grades 7–9.',
  },
  {
    id: 'faq-3',
    category: 'Cost',
    question: 'Is there a cost for schools?',
    answer: 'Participation fees are kept minimal and sponsor-subsidised. Contact us via the registration form for the current fee structure for your district.',
  },
  {
    id: 'faq-4',
    category: 'Curriculum',
    question: 'Does participation count toward curriculum hours?',
    answer: 'Yes. The 20-hour STEM project arc is designed to map to Swedish Lgr22 technology subject goals. Documentation is provided for teacher portfolios.',
  },
  {
    id: 'faq-5',
    category: 'Data & Safety',
    question: 'How is student data handled?',
    answer: 'We collect only first name, age group, and school affiliation. No sensitive personal data is gathered. All handling is GDPR-compliant and data is deleted after the season.',
  },
];

interface ForSchoolsPageProps {
  onNavigateHome: () => void;
  onOpenRegister: () => void;
  onOpenDeckModal: () => void;
}

export const ForSchoolsPage: React.FC<ForSchoolsPageProps> = ({
  onNavigateHome,
  onOpenRegister,
  onOpenDeckModal,
}) => {
  const [openReason, setOpenReason] = useState<string | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen bg-white text-[#0A1930] pt-28 pb-24 px-6 sm:px-10 select-none">
      <div className="max-w-[1440px] mx-auto space-y-16">

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono-code font-bold tracking-wider text-[#006AA7] uppercase hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </motion.button>

        {/* ── HEADER: FOR (Outline) SCHOOLS (Solid) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-slate-200 pb-12"
        >
          <span className="text-[10px] font-mono-code font-medium tracking-[0.2em] text-slate-500 uppercase block mb-3">
            PRINCIPALS & EDUCATORS // VÄSTERÅS 2026
          </span>

          <h1
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">FOR</span>
            <span className="text-[#0A1930] block">SCHOOLS</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-2xl leading-relaxed">
            A turnkey robotics tournament model created to eliminate administrative overhead and bring all physical hardware directly into your classroom.
          </p>
        </motion.div>

        {/* ── WHY SCHOOLS PARTICIPATE ── */}
        <div className="space-y-6">
          <h2 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0A1930]">
            Why Schools Participate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {WHY_SCHOOLS_PARTICIPATE.map((reason, idx) => {
              const Icon = WHY_ICONS[idx] ?? Sparkles;
              const isOpen = openReason === reason.title;
              return (
                <motion.button
                  key={reason.title}
                  type="button"
                  onClick={() => setOpenReason(isOpen ? null : reason.title)}
                  aria-expanded={isOpen}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`text-left w-full p-6 rounded-2xl bg-[#F8FAFC] border space-y-3 transition-colors ${
                    isOpen ? 'border-[#006AA7]/40' : 'border-slate-200 hover:border-[#006AA7]/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-[#006AA7]/10 border border-[#006AA7]/20 flex items-center justify-center text-[#006AA7]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    </motion.div>
                  </div>
                  <h3 className="font-headline font-bold text-sm uppercase tracking-wide text-[#0A1930]">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {reason.desc}
                  </p>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-[11px] text-slate-500 font-light leading-relaxed pt-2 border-t border-slate-200">
                          {reason.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── 3 CORE VALUE PROPOSITIONS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: All-Inclusive Kit Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-5 shadow-sm flex flex-col justify-between group hover:border-[#006AA7]/40 transition-all"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#006AA7]/10 border border-[#006AA7]/20 flex items-center justify-center text-[#006AA7]">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-bold text-2xl text-[#0A1930] uppercase">
                ALL-INCLUSIVE KIT DELIVERY
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                No lab budget or equipment purchases needed. The official Robo-Sprint kit, arena mat, and mentor-led workshop are brought directly to your school.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2">
              <img
                src={roboSprintKitPieces}
                alt="Robo-Sprint Official Kit Pieces"
                className="w-full h-36 object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <span className="block text-[9px] font-mono-code text-center text-slate-400 mt-1 uppercase">
                Official Kit Bill of Materials Included
              </span>
            </div>
          </motion.div>

          {/* Card 2: 2-Hour On-Site Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-5 shadow-sm flex flex-col justify-between group hover:border-[#006AA7]/40 transition-all"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#006AA7]/10 border border-[#006AA7]/20 flex items-center justify-center text-[#006AA7]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-bold text-2xl text-[#0A1930] uppercase">
                120-MIN IN-SCHOOL DELIVERY
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                We bring the kits, gearboxes, and arena mats directly into your classroom ahead of the October 2026 qualifiers. Zero disruption to normal timetables.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2">
              <img
                src={roboSprintMatFocus}
                alt="8ft x 4ft Portable Arena Mat"
                className="w-full h-36 object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <span className="block text-[9px] font-mono-code text-center text-slate-400 mt-1 uppercase">
                8 ft × 4 ft Roll-Out Classroom Arena
              </span>
            </div>
          </motion.div>

          {/* Card 3: Lgr22-Aligned Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-5 shadow-sm flex flex-col justify-between group hover:border-[#006AA7]/40 transition-all"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#006AA7]/10 border border-[#006AA7]/20 flex items-center justify-center text-[#006AA7]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-bold text-2xl text-[#0A1930] uppercase">
                INDIA-PROVEN FORMAT
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Adapted from Blix-A-Thon, a competition proven at Techfest, IIT Bombay with 2,000+ student participants in recent editions.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#0A1930] relative h-36">
              <img
                src={roboPrecisionActionWide}
                alt="Techfest IIT Bombay Competition Heats"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-3 right-3 text-[9px] font-mono-code text-white uppercase truncate">
                2,000+ Students · Techfest IIT Bombay
              </span>
            </div>
          </motion.div>

        </div>

        {/* ── SAFETY & REGULATIONS BLOCK ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-6"
        >
          <div className="flex items-center gap-3 text-[#006AA7]">
            <ShieldCheck className="w-6 h-6" />
            <span className="font-headline font-bold text-xl uppercase tracking-wider text-[#0A1930]">
              SAFETY & PRIVACY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            <p>
              All hardware runs on safe 6V DC low-voltage battery power. Soldering and high-temperature equipment are not used during student workshops.
            </p>
            <p>
              GDPR-compliant handling of student data: no biometric, academic, or sensitive personal information is gathered or shared.
            </p>
          </div>
        </motion.div>

        {/* ── FAQ ── */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-6">
            <h2 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0A1930]">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
              Tap a question to expand it.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item: FAQItem) => {
              const isOpen = openFaqId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-2xl border bg-[#F8FAFC] overflow-hidden transition-colors ${
                    isOpen ? 'border-[#006AA7]/40' : 'border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-100/60 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-4 h-4 text-[#006AA7] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] font-mono-code font-bold tracking-widest text-[#006AA7] uppercase block mb-1">
                          {item.category}
                        </span>
                        <span className="font-headline font-bold text-sm sm:text-base text-[#0A1930]">
                          {item.question}
                        </span>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pl-12 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── ENROL COHORT ACTION BANNER ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#FFCD00] text-[#0A1930] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-md"
        >
          <div className="lg:col-span-8 space-y-2">
            <span className="text-[10px] font-mono-code font-bold uppercase tracking-widest bg-black/10 px-3 py-1 rounded-full inline-block">
              RESERVE WORKSHOP DATES FOR OCTOBER 2026
            </span>
            <h3 className="font-headline font-black text-3xl sm:text-4xl text-[#0A1930] uppercase">
              ENROL YOUR SCHOOL COHORT
            </h3>
            <p className="text-xs sm:text-sm text-[#0A1930]/80 font-medium max-w-lg">
              School intake across the Västerås municipal district is open for the 2026 season. Registrations close ahead of the November 13, 2026 Robo-Sprint City Final.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={onOpenRegister}
              className="btn-pill-white text-xs font-bold py-3.5 px-6 shadow-md"
            >
              <span>REGISTER SCHOOL NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDeckModal}
              className="px-6 py-3.5 rounded-full border border-black/30 hover:border-black text-xs font-mono-code text-[#0A1930] uppercase tracking-wider transition-colors flex items-center justify-center gap-2 font-bold"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD DECK (PDF)</span>
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
