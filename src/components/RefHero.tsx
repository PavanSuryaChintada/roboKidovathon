import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface RefHeroProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const RefHero: React.FC<RefHeroProps> = ({
  onOpenRegister,
  onNavigate,
}) => {
  const collageItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Robotics electronics',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Student engineering team',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Workshop collaboration',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-2 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Hardware circuitry build',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Autonomous robot prototype',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Arena match action',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-2 row-span-1',
      rounded: 'rounded-3xl',
      alt: 'Microcontroller firmware',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center pt-28 pb-12 px-6 sm:px-10 bg-[#070709] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* ── LEFT COLUMN: HEADLINE & ACTIONS ── */}
        <div className="lg:col-span-5 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1
              className="font-headline font-black uppercase text-white leading-[1.02] tracking-tight"
              style={{ fontSize: 'clamp(3.6rem, 7.5vw, 6.4rem)' }}
            >
              ROBOTICS<br />
              REDEFINED
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-md pt-1"
          >
            Our on-site robotics tournament transforms young students into confident engineers, hardware creators, and tournament champions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenRegister}
              className="btn-pill-lime text-xs sm:text-sm font-black py-3.5 px-7"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('for-schools')}
              className="btn-pill-outline text-xs sm:text-sm font-bold py-3.5 px-6"
            >
              <span>SCHOOLS & EDUCATORS</span>
            </motion.button>
          </motion.div>

        </div>

        {/* ── RIGHT COLUMN: STAGGERED PILL/CAPSULE PHOTO & VIDEO BENTO ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-4 auto-rows-[110px] sm:auto-rows-[140px] md:auto-rows-[160px]"
        >
          {collageItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4, borderColor: 'rgba(255, 255, 255, 0.3)' }}
              className={`relative overflow-hidden ${item.span} ${item.rounded} border border-white/10 bg-[#121216] group cursor-pointer shadow-lg`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
