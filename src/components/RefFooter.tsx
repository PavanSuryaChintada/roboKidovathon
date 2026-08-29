import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { PARTNER_LOGOS } from '../data/roboData';

interface RefFooterProps {
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
}

export const RefFooter: React.FC<RefFooterProps> = ({
  onNavigate,
  onOpenRegister,
}) => {
  return (
    <footer className="w-full bg-[#013A63] text-white pt-16 pb-12 px-6 sm:px-10 border-t border-white/10 select-none">
      <div className="max-w-[1440px] mx-auto space-y-12">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">

          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-headline font-bold text-xl sm:text-2xl tracking-tight text-white uppercase">
                ROBOKIDOVATION VÄSTERÅS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm">
              A youth robotics and innovation initiative bringing schools together through robotics — hosted by IBK Västerås, INIAC, SkillSkolan &amp; BLIX.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono-code text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FFCD00]" />
                <span>VÄSTERÅS, SWEDEN</span>
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFCD00]" />
                <span>AGES UP TO 15</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-headline font-bold text-xs uppercase tracking-widest text-white block">
              CHAMPIONSHIP
            </span>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              <li><button onClick={() => onNavigate('challenges')} className="hover:text-[#FFCD00] transition-colors">Robo-Sprint (Junior)</button></li>
              <li><button onClick={() => onNavigate('challenges')} className="hover:text-[#FFCD00] transition-colors">Robo-Sprint (Senior)</button></li>
              <li><button onClick={() => onNavigate('challenges')} className="hover:text-[#FFCD00] transition-colors">Technical Rulebook</button></li>
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-[#FFCD00] transition-colors">The RoboKidovation Journey</button></li>
            </ul>
          </div>

          {/* For Schools */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-headline font-bold text-xs uppercase tracking-widest text-white block">
              FOR EDUCATORS
            </span>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              <li><button onClick={() => onNavigate('for-schools')} className="hover:text-[#FFCD00] transition-colors">School Partnership Portal</button></li>
              <li><button onClick={() => onNavigate('for-schools')} className="hover:text-[#FFCD00] transition-colors">Workshop & Kit Delivery</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#FFCD00] transition-colors">Special Advisory & Origins</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#FFCD00] transition-colors">League Origins & Advisory</button></li>
            </ul>
          </div>

          {/* Cohort CTA */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-headline font-bold text-xs uppercase tracking-widest text-white block">
              ENROL COHORT
            </span>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Registration for Västerås schools closes November 11, 2026.
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

        {/* Partner Logos Row */}
        <div className="pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {PARTNER_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="bg-white rounded-xl px-4 py-2.5 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
            >
              <img
                src={logo.file}
                alt={logo.name}
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono-code text-slate-400">
          <span>© 2026 ROBOKIDOVATION VÄSTERÅS · ALL RIGHTS RESERVED</span>
          <span>LOW-VOLTAGE SAFE HARDWARE · GDPR-COMPLIANT STUDENT PRIVACY</span>
        </div>

      </div>
    </footer>
  );
};
