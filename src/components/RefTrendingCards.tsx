import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface RefTrendingCardsProps {
  onNavigate: (route: string) => void;
  onOpenRegister?: () => void;
}

export const RefTrendingCards: React.FC<RefTrendingCardsProps> = ({
  onNavigate,
}) => {
  const articles = [
    {
      category: 'EVENT ANNOUNCEMENT',
      date: 'MARCH 2026',
      title: 'ABB Robotics Venue Confirmed for Västerås City Finals',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      action: 'challenges',
    },
    {
      category: 'PEDAGOGY & SYLLABUS',
      date: 'FEBRUARY 2026',
      title: 'How On-Site Workshops Map into Swedish Curriculum Lgr22',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
      action: 'how-it-works',
    },
    {
      category: 'CHAMPIONSHIP BERTH',
      date: 'APRIL 2026',
      title: 'Stockholm Grand Finale: National Berth for Top Teams',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=600&q=80',
      action: 'for-schools',
    },
  ];

  return (
    <section id="prizes-section" className="w-full bg-[#070709] text-white py-24 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
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
            <span className="text-white block">WHAT'S</span>
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
              whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(34, 197, 94, 0.4)' }}
              className="rounded-3xl p-4 bg-[#121216] border border-white/10 space-y-4 flex flex-col justify-between hover:border-white/25 transition-all group cursor-pointer shadow-xl"
            >
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl h-56 bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono-code font-bold text-[#22C55E] uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                <div className="px-2 space-y-2">
                  <span className="text-[10px] font-mono-code text-slate-400 uppercase">
                    {item.date}
                  </span>
                  <h3 className="font-headline font-bold text-xl uppercase tracking-wide text-white group-hover:text-[#22C55E] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="px-2 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate(item.action)}
                  className="btn-pill-white text-xs font-bold py-2.5 px-6 w-full flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
