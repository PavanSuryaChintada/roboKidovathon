import React, { useState } from 'react';
import type { FAQItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Who can participate in Robo-Kidovation Västerås 2026?',
      answer:
        'All students in Västerås aged up to 18 years can join. Participants are divided into two brackets: Junior (up to 15 years old) and Senior (15+ years / high school).',
      category: 'Registration',
    },
    {
      question: 'Do students need prior coding or robotics experience?',
      answer:
        'No prior experience is necessary. Every registered student attends a 2-hour hands-on school workshop where certified trainers guide them through building, wiring, and programming physical bots from scratch.',
      category: 'Hardware & Kits',
    },
    {
      question: 'Are robotics hardware kits provided on-site?',
      answer:
        'Yes. Complete mechanical and robotics hardware kits, motors, controllers, and arena mats are provided directly on-site for all workshops and competition rounds.',
      category: 'Hardware & Kits',
    },
    {
      question: 'How does the 125 SEK entry fee work?',
      answer:
        'The entry fee is 100 SEK + VAT (125 SEK total per student). This covers workshop participation, hardware kit usage, mentorship, arena competition entry, diplomas, and event media.',
      category: 'Registration',
    },
    {
      question: 'What is required from participating schools?',
      answer:
        'Zero financial cost for school administration. Schools simply provide an open working space for a 2-hour workshop in February 2026 and teacher volunteers (4 for school round, 1 for City Finals).',
      category: 'Schools & Teachers',
    },
    {
      question: 'When and where are the City Finals held?',
      answer:
        'The Västerås City Finals take place on Saturday, March 21, 2026, at the central ABB Venue in Västerås. Top Junior and Senior teams from each school compete before an expert tech panel.',
      category: 'Competition Rules',
    },
    {
      question: 'How do teams qualify for the Stockholm Grand Finale?',
      answer:
        'The top 2 winning school teams from the Västerås City Finals automatically qualify to represent Västerås at the Stockholm Showdown for the 25,000 SEK Grand Finale Nordic Cup.',
      category: 'Competition Rules',
    },
  ];

  return (
    <section className="w-full bg-white text-[#0B1020]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 border-b border-slate-200 pb-10">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#0052FF] uppercase block mb-3">
              09 / FREQUENTLY ASKED QUESTIONS
            </span>
            <h2
              className="font-extrabold uppercase leading-none tracking-tighter text-[#0B1020]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 0.95 }}
            >
              Got Questions?
            </h2>
          </div>
          <a
            href="mailto:contact@robokidoathon.se"
            className="self-start sm:self-end text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#64748B] border-b border-slate-300 pb-0.5 hover:text-[#0052FF] hover:border-[#0052FF] transition-colors whitespace-nowrap"
          >
            EMAIL COORDINATORS →
          </a>
        </div>

        {/* Editorial FAQ Rows */}
        <div>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-slate-200 last:border-b-0">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-6 sm:py-7 flex items-start justify-between gap-6 text-left group"
                >
                  <div className="flex items-start gap-5 sm:gap-8 flex-1">
                    {/* Row number */}
                    <span className="text-[11px] font-mono font-bold text-slate-300 shrink-0 mt-0.5 w-6">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {/* Question */}
                    <h3 className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? 'text-[#0052FF]' : 'text-[#0B1020] group-hover:text-[#0052FF]'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  {/* Toggle */}
                  <span className={`text-lg font-light shrink-0 mt-0.5 transition-colors ${isOpen ? 'text-[#0052FF]' : 'text-slate-400'}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-7 pl-11 sm:pl-14 pr-8">
                    <p className="text-sm text-[#64748B] font-light leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
