import React from 'react';
import { X, Download, FileText, CheckCircle2, Building, Layers, Award } from 'lucide-react';

interface EventDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EventDeckModal: React.FC<EventDeckModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0F19]/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="bg-[#0B0F19] border border-white/20 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl text-white relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0052FF]/20 text-[#E2FF00] border border-[#0052FF]/40 text-xs font-mono font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Event Prospectus</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Blix-A-Thon Västerås 2026 Event Deck
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-inter">
            Complete rulebook, school admin guide, and technical specs for parents and educators.
          </p>
        </div>

        {/* Deck Contents Overview */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 mb-8 font-inter">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-[#161E2E] p-3.5 rounded-xl border border-white/15">
              <Layers className="w-5 h-5 text-[#0052FF] mb-1.5" />
              <h4 className="font-bold text-white">Arena Rulebooks</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Junior Robo-Sprint & Senior Robo-Precision mats</p>
            </div>

            <div className="bg-[#161E2E] p-3.5 rounded-xl border border-white/15">
              <Building className="w-5 h-5 text-[#E2FF00] mb-1.5" />
              <h4 className="font-bold text-white">School Admin Guide</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Zero financial cost & mentor onboarding details</p>
            </div>

            <div className="bg-[#161E2E] p-3.5 rounded-xl border border-white/15">
              <Award className="w-5 h-5 text-emerald-400 mb-1.5" />
              <h4 className="font-bold text-white">Prize Breakdown</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Västerås SEK pool & Stockholm Grand Finale</p>
            </div>
          </div>

          <div className="bg-[#161E2E] p-4 rounded-xl border border-white/15 space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Prospectus Table of Contents
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-inter">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                <span className="text-slate-200">1. Event Mission & Techfest IIT Bombay Roots</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                <span className="text-slate-200">2. Junior Track: Air-Hockey Arena Specs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                <span className="text-slate-200">3. Senior Track: 5-Tier Cup Stacking Rules</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                <span className="text-slate-200">4. GDPR Data Privacy & Nordic Compliance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                <span className="text-slate-200">5. 125 SEK Registration & Invoicing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                <span className="text-slate-200">6. Stockholm Grand Finale Pathway</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Download Trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <a
            href="/rulebook.pdf"
            download="Blix-A-Thon_Vasteras_2026_Event_Deck.pdf"
            onClick={() => {
              alert('Downloading official Blix-A-Thon Västerås 2026 Event Prospectus (PDF)...');
            }}
            className="w-full sm:w-auto btn-event-primary px-6 py-3.5 rounded-xl flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Official Event Deck (PDF)</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto btn-event-secondary px-5 py-3.5 rounded-xl"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
