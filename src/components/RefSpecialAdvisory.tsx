import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowRight, Calendar, Trophy, Package, Globe2, Eye, Maximize2, X, Layers } from 'lucide-react';
import { PARTNER_LOGOS, KIT_PIECES, CHAMPIONSHIP_STAGES } from '../data/roboData';
import {
  roboSprintKitPieces,
  roboPrecisionKitPieces,
  roboSprintMatFocus,
  roboPrecisionMatFocus,
} from '../assets/images';

const FRAMEWORK_STEPS = [
  'Indian Innovation Experience',
  'Adapted for Swedish Schools',
  'Local School Challenges',
  'RoboKidovation Västerås',
];

export const RefSpecialAdvisory: React.FC = () => {
  const [selectedKit, setSelectedKit] = useState<'sprint' | 'precision'>('sprint');
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="advisory-section" className="w-full bg-[#F2F6FA] text-[#0A1930] py-28 px-6 sm:px-10 border-t border-slate-200 overflow-hidden scroll-mt-24">
      <div className="max-w-[1280px] mx-auto space-y-16">

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#006AA7] uppercase block">
            OFFICIAL LAUNCH & ADVISORY
          </span>
          <h2
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
          >
            <span className="text-stroke block">SPECIAL</span>
            <span className="text-[#0A1930] block">ADVISORY</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-xl mx-auto">
            RoboKidovation Västerås is developed by Indisk BarnKlubb (IBK) Västerås alongside INIAC, SkillSkolan, and BLIX — a youth-focused bridge between innovation experiences in India and Sweden.
          </p>
        </div>

        {/* ── PARTNER LOGOS ── */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {PARTNER_LOGOS.map((logo) => (
            <motion.div
              key={logo.name}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center gap-2"
            >
              <img
                src={logo.file}
                alt={logo.name}
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <span className="text-[9px] font-mono-code text-slate-500 uppercase tracking-wide">
                {logo.role}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── AMBASSADOR LAUNCH CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="w-16 h-16 rounded-2xl bg-[#FFCD00]/20 border border-[#FFCD00]/50 flex items-center justify-center text-[#0A1930]">
              <Award className="w-8 h-8" />
            </div>
          </div>
          <div className="lg:col-span-10 space-y-2 text-center lg:text-left">
            <span className="text-[10px] font-mono-code font-bold tracking-[0.2em] text-[#006AA7] uppercase block">
              OFFICIAL LAUNCH
            </span>
            <h3 className="font-headline font-black text-xl sm:text-2xl uppercase tracking-tight text-[#0A1930]">
              H.E. Ambassador Anurag Bhushan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Ambassador of India to Sweden &amp; Latvia — formally launching RoboKidovation Västerås and addressing participating students, educators, and community representatives.
            </p>
            <span className="inline-block mt-1 text-[11px] font-mono-code font-bold text-[#0A1930] bg-[#FFCD00]/25 border border-[#FFCD00]/60 px-3 py-1 rounded-full uppercase tracking-wide">
              Theme: Bringing Schools Together Through Robotics
            </span>
          </div>
        </motion.div>

        {/* ── FRAMEWORK FLOW ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 justify-center text-[#006AA7]">
            <Globe2 className="w-4 h-4" />
            <span className="text-[10px] font-mono-code font-bold tracking-[0.2em] uppercase">
              India Origin → Nordic Adaptation
            </span>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-3 lg:gap-2">
            {FRAMEWORK_STEPS.map((step, i) => (
              <React.Fragment key={step}>
                <div className="flex-1 rounded-2xl bg-white border border-slate-200 shadow-sm px-5 py-4 text-center">
                  <span className="font-syne font-bold text-xs sm:text-sm text-[#0A1930] uppercase tracking-wide">
                    {step}
                  </span>
                </div>
                {i < FRAMEWORK_STEPS.length - 1 && (
                  <div className="flex items-center justify-center text-[#006AA7] shrink-0 rotate-90 lg:rotate-0">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-2xl mx-auto text-center">
            Blix-A-Thon India is a multi-edition robotics competition hosted at Techfest, IIT Bombay — one of India's largest science &amp; technology festivals — with 2,000+ student participants in recent editions. RoboKidovation Västerås is its first expansion beyond India, starting in Sweden.
          </p>
        </motion.div>

        {/* ── COMPETITION STRUCTURE ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHAMPIONSHIP_STAGES.map((stage) => (
            <motion.div
              key={stage.stageNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 space-y-3"
            >
              <div className="flex items-center gap-2 text-[#006AA7]">
                <Calendar className="w-4 h-4" />
                <span className="text-[10px] font-mono-code font-bold tracking-[0.2em] uppercase">
                  {stage.stageCode} · {stage.date}
                </span>
              </div>
              <h3 className="font-headline font-black text-lg sm:text-xl uppercase tracking-tight text-[#0A1930]">
                {stage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                {stage.description}
              </p>
              <div className="pt-3 border-t border-slate-200 text-[11px] font-mono-code font-bold text-[#0A1930] uppercase tracking-wide">
                {stage.advancement}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── PRIZE + OFFICIAL HARDWARE KIT & ARENA BLUEPRINT ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#006AA7]/10 border border-[#006AA7]/20 flex items-center justify-center text-[#006AA7]">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-black text-lg uppercase tracking-tight text-[#0A1930]">
                  SEK 3,000 Prize Pool
                </h3>
                <p className="text-xs text-slate-500 font-light">
                  SEK 1,200 Junior + SEK 1,800 Senior · Cash + Trophy + Certificates
                </p>
              </div>
            </div>

            {/* Division Switcher */}
            <div className="flex items-center gap-2 bg-[#F8FAFC] p-1.5 rounded-2xl border border-slate-200">
              <button
                onClick={() => setSelectedKit('sprint')}
                className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold uppercase transition-all ${
                  selectedKit === 'sprint'
                    ? 'bg-[#006AA7] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0A1930]'
                }`}
              >
                Robo-Sprint Kit &amp; Arena
              </button>
              <button
                onClick={() => setSelectedKit('precision')}
                className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold uppercase transition-all ${
                  selectedKit === 'precision'
                    ? 'bg-[#0A1930] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0A1930]'
                }`}
              >
                Robo-Precision Kit &amp; Arena
              </button>
            </div>
          </div>

          {/* Blueprint & Piece List Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Official Kit Piece List Infographic */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#006AA7]">
                  <Package className="w-4 h-4" />
                  <span className="text-[10px] font-mono-code font-bold tracking-wider uppercase">
                    OFFICIAL HARDWARE SPECIFICATION // BILL OF MATERIALS
                  </span>
                </div>
                <button
                  onClick={() =>
                    setZoomImage({
                      src: selectedKit === 'sprint' ? roboSprintKitPieces : roboPrecisionKitPieces,
                      title:
                        selectedKit === 'sprint'
                          ? 'Competition Kit Piece List: Robo-Sprint'
                          : 'Competition Kit Piece List: Robo-Precision',
                    })
                  }
                  className="flex items-center gap-1.5 text-[10px] font-mono-code font-bold text-[#006AA7] hover:underline"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>CLICK TO EXPAND SPEC</span>
                </button>
              </div>

              {/* Clickable Image Preview */}
              <div
                onClick={() =>
                  setZoomImage({
                    src: selectedKit === 'sprint' ? roboSprintKitPieces : roboPrecisionKitPieces,
                    title:
                      selectedKit === 'sprint'
                        ? 'Competition Kit Piece List: Robo-Sprint'
                        : 'Competition Kit Piece List: Robo-Precision',
                  })
                }
                className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-2 group cursor-pointer hover:border-[#006AA7]/40 transition-all"
              >
                <img
                  src={selectedKit === 'sprint' ? roboSprintKitPieces : roboPrecisionKitPieces}
                  alt={
                    selectedKit === 'sprint'
                      ? 'Official Robo-Sprint Kit Piece List'
                      : 'Official Robo-Precision Kit Piece List'
                  }
                  className="w-full h-auto max-h-[360px] object-contain mx-auto group-hover:scale-[1.02] transition-transform"
                />
                <div className="absolute inset-0 bg-[#006AA7]/0 group-hover:bg-[#006AA7]/5 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white text-[11px] font-mono-code px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View High-Res Piece Breakdown</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-[11px] font-mono-code text-slate-500 pt-2 border-t border-slate-200">
                <span>
                  {selectedKit === 'sprint' ? '41+ Unique Part Types' : '44+ Unique Part Types'}
                </span>
                <span className="text-[#0A1930] font-bold">
                  Includes 6V DC Gearbox, Remote Transmitter, Beams &amp; Chassis
                </span>
              </div>
            </div>

            {/* Right: Official 3D Arena Mat Blueprint */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#006AA7]">
                  <Layers className="w-4 h-4" />
                  <span className="text-[10px] font-mono-code font-bold tracking-wider uppercase">
                    3D ARENA MAT SPECIFICATION
                  </span>
                </div>
                <button
                  onClick={() =>
                    setZoomImage({
                      src: selectedKit === 'sprint' ? roboSprintMatFocus : roboPrecisionMatFocus,
                      title:
                        selectedKit === 'sprint'
                          ? 'Robo-Sprint 3D Arena Mat Blueprint'
                          : 'Robo-Precision 3D Arena Mat Blueprint',
                    })
                  }
                  className="flex items-center gap-1.5 text-[10px] font-mono-code font-bold text-[#006AA7] hover:underline"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>CLICK TO EXPAND SPEC</span>
                </button>
              </div>

              {/* Arena Mat 3D Render Image */}
              <div
                onClick={() =>
                  setZoomImage({
                    src: selectedKit === 'sprint' ? roboSprintMatFocus : roboPrecisionMatFocus,
                    title:
                      selectedKit === 'sprint'
                        ? 'Robo-Sprint 3D Arena Mat Blueprint'
                        : 'Robo-Precision 3D Arena Mat Blueprint',
                  })
                }
                className="relative rounded-xl overflow-hidden bg-white border border-slate-200 p-2 group cursor-pointer hover:border-[#006AA7]/40 transition-all flex items-center justify-center min-h-[260px]"
              >
                <img
                  src={selectedKit === 'sprint' ? roboSprintMatFocus : roboPrecisionMatFocus}
                  alt={
                    selectedKit === 'sprint'
                      ? 'Robo-Sprint Arena Mat CAD Model'
                      : 'Robo-Precision Arena Mat CAD Model'
                  }
                  className="w-full h-auto max-h-[300px] object-contain mx-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#006AA7]/0 group-hover:bg-[#006AA7]/5 transition-colors flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white text-[11px] font-mono-code px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View 3D Arena Layout</span>
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                <div className="flex justify-between font-mono-code text-[11px] text-slate-500">
                  <span>DIMENSIONS:</span>
                  <span className="text-[#0A1930] font-bold">
                    {selectedKit === 'sprint' ? '8 ft × 4 ft Divided' : '8 ft × 4 ft Multi-Zone'}
                  </span>
                </div>
                <div className="flex justify-between font-mono-code text-[11px] text-slate-500">
                  <span>CENTRAL OBSTACLE:</span>
                  <span className="text-[#006AA7] font-bold">
                    {selectedKit === 'sprint' ? 'Zigzag Barrier & Arches' : 'Hazard Line & Podiums'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 font-light leading-relaxed pt-1">
                  {selectedKit === 'sprint'
                    ? 'Teal low-friction competition surface with dual start boxes and central hurdle bridge.'
                    : 'Split red/blue dual zone with elevated step platforms for scored cup stacking.'}
                </p>
              </div>
            </div>
          </div>

          {/* Hardware Pieces Pills */}
          <div className="space-y-3 pt-2">
            <span className="block text-[10px] font-mono-code font-bold text-slate-400 uppercase tracking-wider">
              {selectedKit === 'sprint' ? 'ROBO-SPRINT HARDWARE INVENTORY' : 'ROBO-PRECISION HARDWARE INVENTORY'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {KIT_PIECES.map((piece) => (
                <div
                  key={piece.label}
                  className="px-3 py-2 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center hover:border-[#006AA7]/40 transition-colors"
                >
                  <span className="block text-[10px] font-mono-code font-bold text-[#0A1930] uppercase truncate">
                    {piece.label}
                  </span>
                  <span className="block text-[9px] font-mono-code text-slate-500">
                    {piece.qty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── HIGH RES LIGHTBOX MODAL ── */}
        <AnimatePresence>
          {zoomImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 select-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setZoomImage(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
              >
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 bg-slate-50">
                  <h3 className="font-syne font-bold text-lg text-[#0A1930] uppercase">
                    {zoomImage.title}
                  </h3>
                  <button
                    onClick={() => setZoomImage(null)}
                    className="p-2 rounded-full text-slate-500 hover:text-[#0A1930] hover:bg-slate-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4 flex-1 overflow-auto flex items-center justify-center bg-white max-h-[70vh]">
                  <img
                    src={zoomImage.src}
                    alt={zoomImage.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-4 border-t border-slate-200 text-right bg-slate-50">
                  <button
                    onClick={() => setZoomImage(null)}
                    className="px-5 py-2 rounded-full bg-[#0A1930] text-white font-mono-code text-xs uppercase"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
