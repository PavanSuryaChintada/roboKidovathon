import React from 'react';
import { X, Download, FileText, CheckCircle2, Building, Layers, Award } from 'lucide-react';

interface EventDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EventDeckModal: React.FC<EventDeckModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-lg max-w-2xl w-full p-6 sm:p-8 shadow-lg text-slate-900 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-md hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 text-[#0062B8] border border-blue-200 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Event Prospectus</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
            Blix-A-Thon Västerås 2026 Event Deck
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Complete rulebook, school admin guide, and technical specs for parents and educators.
          </p>
        </div>

        {/* Deck Contents Overview */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 mb-8 font-medium">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-50 p-3.5 rounded-md border border-slate-200">
              <Layers className="w-5 h-5 text-[#0062B8] mb-1.5" />
              <h4 className="font-bold text-slate-900">Arena Rulebooks</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Junior Robo-Sprint & Senior Robo-Precision mats</p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-md border border-slate-200">
              <Building className="w-5 h-5 text-amber-600 mb-1.5" />
              <h4 className="font-bold text-slate-900">School Admin Guide</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Zero financial cost & mentor onboarding details</p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-md border border-slate-200">
              <Award className="w-5 h-5 text-emerald-600 mb-1.5" />
              <h4 className="font-bold text-slate-900">Prize Breakdown</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Västerås SEK pool & Stockholm Grand Finale</p>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Prospectus Table of Contents
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062B8]" />
                <span>1. Event Mission & Techfest IIT Bombay Roots</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062B8]" />
                <span>2. Junior Track: Air-Hockey Arena Specs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062B8]" />
                <span>3. Senior Track: 5-Tier Cup Stacking Rules</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062B8]" />
                <span>4. GDPR Data Privacy & Nordic Compliance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062B8]" />
                <span>5. 125 SEK Registration & Invoicing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0062B8]" />
                <span>6. Stockholm Grand Finale Pathway</span>
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
            className="w-full sm:w-auto px-6 py-3 bg-[#0062B8] hover:bg-[#00529B] text-white font-bold rounded-md transition shadow-xs flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Official Event Deck (PDF)</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-md transition"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
