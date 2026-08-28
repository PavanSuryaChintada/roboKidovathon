import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface RefManifestoProps {
  onNavigate: (route: string) => void;
}

export const RefManifesto: React.FC<RefManifestoProps> = ({ onNavigate }) => {
  const logos = [
    { name: 'ABB ROBOTICS', sub: 'VENUE PARTNER' },
    { name: 'TECHFEST IIT BOMBAY', sub: 'GLOBAL LEAGUE' },
    { name: 'MÄLARDALEN UNIVERSITY', sub: 'ACADEMIC ADVISORY' },
    { name: 'VÄSTERÅS KOMMUN', sub: 'MUNICIPAL CLUSTER' },
    { name: 'SWEDISH STEM ACADEMY', sub: 'CURRICULUM LGR22' },
  ];

  const pillReel = [
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
  ];

  return (
    <section className="w-full bg-[#070709] text-white py-28 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto text-center space-y-12">
        
        {/* Floating Circular Photo Avatar Head with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-block relative"
        >
          <div className="flex items-center justify-center -space-x-2 mb-6">
            <motion.img
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Participant avatar"
              className="w-12 h-12 rounded-full border-2 border-[#070709] object-cover shadow-lg"
            />
            <motion.img
              animate={{ y: [3, -3, 3] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Participant avatar"
              className="w-12 h-12 rounded-full border-2 border-[#070709] object-cover shadow-lg"
            />
          </div>

          <h2
            className="font-headline font-black uppercase tracking-tight text-white leading-[1.18] flex flex-wrap items-center justify-center gap-3 sm:gap-5"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)' }}
          >
            <span>MAKE</span>
            <motion.img
              whileHover={{ scale: 1.15, rotate: 6 }}
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=140&h=140&q=80"
              alt="Participant"
              className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-2 border-white/30 object-cover inline-block cursor-pointer shadow-xl"
            />
            <span>ROBOTICS</span>
            <span className="w-full block h-2 sm:h-4" />
            <span>THE</span>
            <motion.img
              whileHover={{ scale: 1.15, rotate: -6 }}
              animate={{ y: [4, -4, 4] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=140&h=140&q=80"
              alt="Participant"
              className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-2 border-white/30 object-cover inline-block cursor-pointer shadow-xl"
            />
            <span>EXPERIENCE</span>
          </h2>
        </motion.div>

        {/* Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed pt-2"
        >
          Robo-Kido-A-Thon is a hands-on, live-arena tournament model created to turn abstract STEM concepts into high-intensity physical robotics creations, fostering genuine teamwork and technological ambition across schools.
        </motion.p>

        {/* Pill Button with Orbiting Circle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('about')}
            className="btn-pill-white text-xs sm:text-sm font-black py-3.5 px-8 flex items-center gap-2 shadow-xl"
          >
            <span>LEARN MORE</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          
          <motion.img
            animate={{ y: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&h=100&q=80"
            alt="Student"
            className="w-10 h-10 rounded-full border border-white/20 object-cover hidden sm:inline-block shadow-lg"
          />
        </motion.div>

        {/* ── Partner & Institutional Marquee ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-20 border-t border-white/10"
        >
          <span className="block text-[10px] font-mono-code font-bold tracking-[0.25em] text-slate-500 uppercase mb-8">
            OFFICIAL ADVISORY & INSTITUTIONAL PARTNERS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {logos.map((logo) => (
              <motion.div
                key={logo.name}
                whileHover={{ scale: 1.08, opacity: 1 }}
                className="flex flex-col items-center cursor-pointer transition-all"
              >
                <span className="font-headline font-bold text-sm sm:text-base tracking-wider text-slate-300">
                  {logo.name}
                </span>
                <span className="text-[9px] font-mono-code text-slate-500 uppercase mt-0.5">
                  {logo.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Horizontal Rounded Capsule Image Strip with Staggered Motion ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-12 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4"
        >
          {pillReel.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -6, borderColor: 'rgba(34, 197, 94, 0.4)' }}
              className="relative overflow-hidden rounded-3xl h-44 sm:h-56 border border-white/10 bg-[#121216] group cursor-pointer shadow-xl transition-all"
            >
              <img
                src={img}
                alt="Championship moment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
