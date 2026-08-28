import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

interface EventDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EventDeckModal: React.FC<EventDeckModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none">
      <div onClick={onClose} className="fixed inset-0 bg-black/85 backdrop-blur-md -z-10" />

      <div className="relative w-full max-w-lg bg-[#121216] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-10 my-8 text-white">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!downloaded ? (
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#22C55E] uppercase mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>OFFICIAL PROSPECTUS & GUIDE</span>
            </div>
            <h2 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              Download Event Deck.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light mt-2 leading-relaxed">
              Complete tournament prospectus for school principals, educators, and curriculum directors. Includes workshop syllabus, safety guidelines, and schedule.
            </p>

            <form onSubmit={handleDownload} className="mt-6 space-y-4">
              <div>
                <label className="block text-[10px] font-mono-code font-bold tracking-wider text-slate-400 uppercase mb-1">
                  WORK / INSTITUTIONAL EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="principal@skola.se"
                  className="w-full px-4 py-3 rounded-2xl bg-[#0A0A0E] border border-white/15 focus:border-[#22C55E] focus:outline-none text-xs sm:text-sm text-white transition-colors"
                />
              </div>

              <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-mono-code text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                  <span>DOCUMENT DETAILS</span>
                </div>
                <div>Format: PDF (12 Pages) · Version: 2026.1 Official</div>
                <div>Includes: Lgr22 Curriculum Mapping & Risk Assessment</div>
              </div>

              <button
                type="submit"
                className="w-full btn-pill-lime py-4 text-xs font-headline font-black tracking-[0.14em] flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>ACCESS OFFICIAL PROSPECTUS</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-headline font-black text-xl text-white uppercase tracking-tight">
              Event Deck Dispatched.
            </h3>
            <p className="text-xs text-slate-300 mt-2 max-w-xs leading-relaxed font-light">
              The official prospectus PDF link has been transmitted to <strong className="text-white">{email}</strong>.
            </p>
            <button
              onClick={() => {
                setDownloaded(false);
                onClose();
              }}
              className="btn-pill-white mt-6 px-6 py-2.5 text-xs"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
