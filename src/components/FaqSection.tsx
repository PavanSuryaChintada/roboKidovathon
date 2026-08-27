import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import type { FAQItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Who can participate in Robo-Kidovation Västerås 2026?',
      answer:
        'All students in Västerås aged up to 18 years can join! Participants are divided into two brackets: Junior (up to 15 years old) and Senior (15+ years / high school).',
      category: 'Registration',
    },
    {
      question: 'Do students need prior coding or robotics experience?',
      answer:
        'No prior experience is necessary! Every registered student attends a 2-hour hands-on school workshop where certified trainers guide them through building, wiring, and programming physical bots from scratch.',
      category: 'Hardware & Kits',
    },
    {
      question: 'Are robotics hardware kits provided on-site?',
      answer:
        'Yes! Complete mechanical and robotics hardware kits, motors, controllers, and arena mats are provided directly on-site for all workshops and competition rounds.',
      category: 'Hardware & Kits',
    },
    {
      question: 'How does the 125 SEK entry fee work?',
      answer:
        'The entry fee is 100 SEK + VAT (125 SEK total per student). This covers workshop participation, hardware kit usage, mentorship, arena competition entry at ABB Venue, diplomas, and event media.',
      category: 'Registration',
    },
    {
      question: 'What is required from participating schools?',
      answer:
        'Zero financial cost for school administration! Schools simply provide an open working space for a 2-hour workshop in February 2026 and teacher volunteers (4 for school round, 1 for City Finals).',
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

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-[#0B0F19] text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/20 border border-[#0052FF]/40 text-xs font-mono font-bold text-[#E2FF00] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#E2FF00]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-inter text-balance">
            Everything parents, students, and teachers need to know about the Robo-Kidovation League.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#161E2E] border border-white/15 rounded-xl overflow-hidden shadow-lg transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono font-bold text-[#E2FF00] bg-white/10 px-2.5 py-0.5 rounded border border-white/15 shrink-0 uppercase">
                      {faq.category}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-white font-inter">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0052FF]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-300 font-inter leading-relaxed border-t border-white/10">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Box */}
        <div className="mt-12 text-center bg-[#161E2E] border border-white/15 rounded-xl p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-[#0052FF]" />
            <span className="text-slate-200">Have a specific question not answered here?</span>
          </div>
          <a
            href="mailto:contact@robokidoathon.se"
            className="btn-event-secondary px-4 py-2.5 rounded-lg whitespace-nowrap"
          >
            Email Event Coordinators →
          </a>
        </div>

      </div>
    </section>
  );
};
