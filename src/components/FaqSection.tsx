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
        'Yes! Complete Blix mechanical and robotics hardware kits, motors, controllers, and arena mats are provided directly on-site for all workshops and competition rounds.',
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
    <section id="faq" className="py-20 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-bold text-[#0062B8] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#0062B8]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
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
                className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:border-slate-300 transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-[#0062B8] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 font-display">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0062B8]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Box */}
        <div className="mt-12 text-center bg-white border border-slate-200 rounded-lg p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-[#0062B8]" />
            <span className="text-slate-700">Have a specific question not answered here?</span>
          </div>
          <a
            href="mailto:contact@robokidoathon.se"
            className="bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold px-4 py-2.5 rounded-md border border-slate-200 transition-colors"
          >
            Email Event Coordinators →
          </a>
        </div>

      </div>
    </section>
  );
};
