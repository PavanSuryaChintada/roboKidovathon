import React from 'react';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface RefFooterProps {
  onNavigate: (route: string) => void;
  onOpenRegister: () => void;
}

export const RefFooter: React.FC<RefFooterProps> = ({
  onNavigate,
  onOpenRegister,
}) => {
  return (
    <footer className="w-full bg-[#050507] text-white border-t border-white/10 pt-16 pb-12 px-6 sm:px-10">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand (Span 2 on lg - No Green Dot) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <span className="font-headline font-black text-2xl tracking-tight text-white uppercase">
                ROBO-KIDO-A-THON
              </span>
            </div>

            <p className="text-xs text-slate-400 font-light max-w-sm leading-relaxed">
              Sweden’s premier on-site student robotics championship. Designed to empower young creators with real mechanical, electrical, and autonomous coding mastery.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>VÄSTERÅS, SWEDEN</span>
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>LGR22 ALIGNED</span>
              </span>
            </div>
          </div>

          {/* Column 2: Tournament Tracks */}
          <div className="space-y-3">
            <span className="text-xs font-headline font-bold uppercase tracking-wider text-white block">
              CHAMPIONSHIP
            </span>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => onNavigate('challenges')} className="hover:text-white transition-colors">
                  Robo-Sprint (Junior)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('challenges')} className="hover:text-white transition-colors">
                  Robo-Precision (Senior)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('challenges')} className="hover:text-white transition-colors">
                  Technical Rulebook
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">
                  5-Stage Tournament Journey
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Schools & Institutions */}
          <div className="space-y-3">
            <span className="text-xs font-headline font-bold uppercase tracking-wider text-white block">
              FOR EDUCATORS
            </span>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => onNavigate('for-schools')} className="hover:text-white transition-colors">
                  School Partnership Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('for-schools')} className="hover:text-white transition-colors">
                  100 SEK Fee Model
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('for-schools')} className="hover:text-white transition-colors">
                  Curriculum Lgr22 Mapping
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  League Origins & Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Registration CTA */}
          <div className="space-y-4">
            <span className="text-xs font-headline font-bold uppercase tracking-wider text-white block">
              ENROL COHORT
            </span>
            
            <p className="text-xs text-slate-400 font-light">
              Registration open for Västerås municipal schools.
            </p>

            <button
              onClick={onOpenRegister}
              className="w-full btn-pill-lime text-xs font-bold py-3 flex items-center justify-center gap-2"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono-code text-slate-500 uppercase tracking-widest">
          <span>© 2026 ROBO-KIDO-A-THON SVERIGE · ALL RIGHTS RESERVED</span>
          <span>12V DC SAFE HARDWARE · STRICT GDPR STUDENT PRIVACY</span>
        </div>

      </div>
    </footer>
  );
};
