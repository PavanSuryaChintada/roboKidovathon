import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';

interface RefFooterProps {
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
}

export const RefFooter: React.FC<RefFooterProps> = ({
  onNavigate,
  onOpenRegister,
}) => {
  return (
    <footer className="w-full bg-[#070709] text-white pt-16 pb-12 px-6 sm:px-10 border-t border-white/10 select-none">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-headline font-bold text-xl sm:text-2xl tracking-tight text-white uppercase">
                ROBO-KIDO-A-THON
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              Sweden's premier on-site student robotics championship. Designed to empower young creators with real mechanical, electrical, and autonomous coding mastery.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>VÄSTERÅS, SWEDEN</span>
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>LGR22 ALIGNED</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-headline font-bold text-xs uppercase tracking-widest text-white block">
              CHAMPIONSHIP
            </span>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li><button onClick={() => onNavigate('challenges')} className="hover:text-white transition-colors">Robo-Sprint (Junior)</button></li>
              <li><button onClick={() => onNavigate('challenges')} className="hover:text-white transition-colors">Robo-Precision (Senior)</button></li>
              <li><button onClick={() => onNavigate('challenges')} className="hover:text-white transition-colors">Technical Rulebook</button></li>
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">5-Stage Tournament Journey</button></li>
            </ul>
          </div>

          {/* For Schools */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-headline font-bold text-xs uppercase tracking-widest text-white block">
              FOR EDUCATORS
            </span>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li><button onClick={() => onNavigate('for-schools')} className="hover:text-white transition-colors">School Partnership Portal</button></li>
              <li><button onClick={() => onNavigate('for-schools')} className="hover:text-white transition-colors">100 SEK Fee Model</button></li>
              <li><button onClick={() => onNavigate('for-schools')} className="hover:text-white transition-colors">Curriculum Lgr22 Mapping</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">League Origins & Advisory</button></li>
            </ul>
          </div>

          {/* Cohort CTA */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-headline font-bold text-xs uppercase tracking-widest text-white block">
              ENROL COHORT
            </span>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Registration open for Västerås municipal schools.
            </p>
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenRegister}
              className="btn-pill-lime text-xs font-black py-2.5 px-6 flex items-center gap-2"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono-code text-slate-500">
          <span>© 2026 ROBO-KIDO-A-THON SVERIGE · ALL RIGHTS RESERVED</span>
          <span>12V DC SAFE HARDWARE · STRICT GDPR STUDENT PRIVACY</span>
        </div>

      </div>
    </footer>
  );
};
