import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ShieldCheck, MapPin } from 'lucide-react';

interface RefWorkshopTapeBannerProps {
  onOpenRegister?: () => void;
  onOpenDeckModal?: () => void;
  onNavigate?: (route: string) => void;
}

export const RefWorkshopTapeBanner: React.FC<RefWorkshopTapeBannerProps> = ({
  onOpenRegister,
  onOpenDeckModal,
}) => {
  return (
    <section className="w-full bg-[#070709] text-white py-24 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Clean, High-Impact Pre-Footer CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-14 md:p-16 bg-[#121216] border border-white/15 shadow-2xl text-center flex flex-col items-center justify-center space-y-8"
        >
          {/* Main Headline */}
          <div className="relative space-y-3 max-w-3xl">
            <h2
              className="font-headline font-black uppercase text-white tracking-tight leading-[1.05]"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}
            >
              READY TO FIELD YOUR<br />
              <span className="text-white">SCHOOL TEAM?</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl mx-auto pt-2">
              Turnkey 2-hour on-site workshops in February 2026. Certified STEM mentors arrive directly at your school with all physical hardware, sensors, and competition arena mats.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="relative flex flex-wrap items-center justify-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenRegister}
              className="btn-pill-lime text-xs sm:text-sm font-black py-4 px-8 flex items-center gap-2 shadow-xl"
            >
              <span>REGISTER SCHOOL COHORT</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenDeckModal}
              className="btn-pill-outline text-xs sm:text-sm font-bold py-4 px-7 flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>DOWNLOAD EVENT PROSPECTUS</span>
            </motion.button>
          </div>

          {/* Key Facts Ribbon */}
          <div className="relative pt-6 border-t border-white/10 w-full max-w-3xl flex flex-wrap items-center justify-around gap-4 text-[11px] font-mono-code text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>ABB ARENA, VÄSTERÅS</span>
            </span>
            <span>•</span>
            <span className="text-white font-semibold">100 SEK (+VAT) / STUDENT</span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>SWEDISH LGR22 COMPLIANT</span>
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
