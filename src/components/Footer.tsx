import React from 'react';
import { Cpu, ShieldCheck, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenRegisterModal: () => void;
  onOpenDeckModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegisterModal, onOpenDeckModal }) => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#0062B8] text-white flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Blix<span className="text-sky-400">-A-Thon</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-medium leading-relaxed">
              Robo-Kidovation League (Västerås Edition 2026). Hands-on STEM robotics competition empowering young minds from elementary to high school through real physical bot engineering.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1.5 rounded w-fit font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full GDPR Data Privacy & Nordic School Compliance</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">About League</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Competition Tracks</a></li>
              <li><a href="#rules" className="hover:text-white transition-colors">Arena Rules</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">Road to Finals</a></li>
              <li><a href="#prizes" className="hover:text-white transition-colors">SEK Prize Pool</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Parent & School FAQ</a></li>
            </ul>
          </div>

          {/* Contact & Organizers */}
          <div className="lg:col-span-4 space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-xs">Organizers & Venue</h4>
            <div className="space-y-2 text-slate-400 font-medium">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>ABB Venue, Central City Campus, Västerås, Sweden</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>contact@robokidoathon.se</span>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenRegisterModal}
                className="bg-[#0062B8] hover:bg-[#00529B] text-white text-xs font-bold px-4 py-2 rounded transition"
              >
                Register (125 SEK)
              </button>
              <button
                onClick={onOpenDeckModal}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-4 py-2 rounded border border-slate-700 transition"
              >
                Event Deck
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 Robo-Kidovation League Sweden (Blix-A-Thon Västerås). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Organized by INIACO & IBK Västerås</span>
            <span>•</span>
            <span>Tech Partner: Blix-A-Thon</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
