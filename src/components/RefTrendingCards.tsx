import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface RefTrendingCardsProps {
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
}

export const RefTrendingCards: React.FC<RefTrendingCardsProps> = ({
  onNavigate,
}) => {
  const articles = [
    {
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      category: 'ARENA TECH',
      date: 'NOV 2026',
      title: 'Inside The Robo-Sprint Build: Gearboxes, Wired Control & Match Strategy',
      link: 'challenges',
    },
    {
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
      category: 'ORIGIN STORY',
      date: 'INDIA → SWEDEN',
      title: 'How Blix-A-Thon’s Techfest IIT Bombay Format Became RoboKidovation Västerås',
      link: 'about',
    },
    {
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=600&q=80',
      category: 'GRAND FINALE',
      date: 'NOV 10, 2026',
      title: 'RoboKidovation Västerås: Schools Ready For The Inter-School Showcase',
      link: 'about',
    },
  ];

  return (
    <section className="w-full bg-white text-[#0A1930] py-24 px-6 sm:px-10 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-12">

        {/* ── SECTION TITLE: WHAT'S (Solid) TRENDING (Outline) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-headline font-black uppercase tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <span className="text-[#0A1930] block">WHAT'S</span>
            <span className="text-stroke block">TRENDING</span>
          </h2>
        </motion.div>

        {/* ── 3-COLUMN UPDATE CARDS WITH MOTION ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl p-4 bg-[#F8FAFC] border border-slate-200 space-y-4 flex flex-col justify-between hover:border-[#006AA7]/30 transition-all group cursor-pointer shadow-sm"
            >
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl h-56 bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 text-[10px] font-mono-code font-bold text-[#006AA7] uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                <div className="px-2 space-y-2">
                  <span className="text-[10px] font-mono-code text-slate-500 uppercase">
                    {item.date}
                  </span>
                  <h3 className="font-headline font-bold text-xl uppercase tracking-wide text-[#0A1930] group-hover:text-[#006AA7] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="px-2 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span
                  onClick={() => onNavigate(item.link)}
                  className="font-headline font-bold text-xs uppercase tracking-wider text-slate-600 group-hover:text-[#0A1930] flex items-center gap-1 transition-colors"
                >
                  <span>READ STORY</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
