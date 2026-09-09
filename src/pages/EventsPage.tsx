import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, Calendar } from 'lucide-react';
import { UPCOMING_EVENTS, UpcomingEvent } from '../data/roboData';

interface EventsPageProps {
  onNavigateHome: () => void;
  onOpenRegister: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  onNavigateHome,
  onOpenRegister,
}) => {
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

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-slate-200 pb-12"
        >
          <span className="text-[10px] font-mono-code font-medium tracking-[0.2em] text-slate-500 uppercase block mb-3">
            VÄSTERÅS FUTURE INNOVATORS // 2026
          </span>

          <h1
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-stroke block">UPCOMING</span>
            <span className="text-[#0A1930] block">EVENTS</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-2xl leading-relaxed">
            A hands-on robotics competition on Friday, followed by open-ended innovation and real-world problem-solving on Saturday — two events, one Västerås weekend, each with its own identity.
          </p>
        </motion.div>

        {/* ── EVENT CARDS ── */}
        <div className="space-y-8">
          {UPCOMING_EVENTS.map((event: UpcomingEvent, idx: number) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-sm"
            >
              <div className="lg:col-span-3 space-y-2">
                <span className="inline-block text-[10px] font-mono-code font-bold text-[#0A1930] bg-[#FFCD00] px-3 py-1.5 rounded-full uppercase tracking-wide">
                  {event.day}
                </span>
                <div className="flex items-center gap-2 text-[#006AA7] pt-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-mono-code font-bold uppercase">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-mono-code uppercase">{event.location}</span>
                </div>
              </div>

              <div className="lg:col-span-9 space-y-3">
                <h2 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0A1930]">
                  {event.title}
                </h2>
                <p className="text-xs sm:text-sm font-mono-code font-bold text-slate-500 uppercase tracking-wide">
                  {event.subtitle}
                </p>
                <p className="text-sm text-slate-600 font-light leading-relaxed max-w-2xl">
                  {event.description}
                </p>

                {event.categories && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {event.categories.map((c) => (
                      <span
                        key={c}
                        className="text-[10px] font-mono-code font-bold text-[#0A1930] bg-white border border-slate-200 px-3 py-1.5 rounded-full uppercase tracking-wide"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}

                {event.curriculumNote && (
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 font-light leading-relaxed">
                    <span className="font-mono-code font-bold text-[#0A1930] uppercase tracking-wide block mb-1">
                      Curriculum Fit — Lgr22 &amp; Gy25
                    </span>
                    {event.curriculumNote}
                  </div>
                )}

                <div className="pt-4">
                  <button
                    onClick={onOpenRegister}
                    className="btn-pill-lime text-xs font-black py-3 px-6 flex items-center gap-2 shadow-md"
                  >
                    <span>{event.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── VENUE NOTE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-[#F2F6FA] border border-slate-200 text-xs sm:text-sm text-slate-600 font-light leading-relaxed"
        >
          The Young Innovators Hackathon is proposed at Mälardalen University (MDU), Västerås — creating an inspiring university environment where school students can meet university students, researchers, technology professionals, startups and industry mentors. Details are confirmed closer to the date.
        </motion.div>

      </div>
    </div>
  );
};
