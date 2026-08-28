import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, ArrowRight, Building, User } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: 'robo-sprint' | 'robo-precision';
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  initialCategory
}) => {
  const [activeTab, setActiveTab] = useState<'student' | 'school'>('student');
  const [teamName, setTeamName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'robo-sprint' | 'robo-precision'>(
    initialCategory || 'robo-sprint'
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !contactName || !schoolName) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setConfirmationCode(`RKT-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setTeamName('');
    setContactName('');
    setEmail('');
    setPhone('');
    setSchoolName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md -z-10"
      />

      <div className="relative w-full max-w-2xl bg-[#121216] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-10 my-8 overflow-hidden text-white">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#22C55E] uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFFICIAL REGISTRATION GATE // VÄSTERÅS 2026</span>
              </div>
              <h2 className="font-headline font-black text-2xl sm:text-4xl uppercase tracking-tight text-white">
                Join The Competition.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-light mt-1.5 leading-relaxed">
                Register a student engineering team or enrol your school cohort for the 2-hour workshops in February 2026.
              </p>
            </div>

            <div className="flex gap-2 border-b border-white/10 pb-4 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('student')}
                className={`py-2 px-5 text-xs font-headline font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 ${
                  activeTab === 'student'
                    ? 'bg-[#22C55E] text-black shadow-md'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>STUDENT / TEAM</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('school')}
                className={`py-2 px-5 text-xs font-headline font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 ${
                  activeTab === 'school'
                    ? 'bg-[#22C55E] text-black shadow-md'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>SCHOOL INTAKE</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono-code font-bold tracking-wider text-slate-400 uppercase mb-1">
                    {activeTab === 'student' ? 'TEAM NAME *' : 'SCHOOL NAME *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={activeTab === 'student' ? teamName : schoolName}
                    onChange={(e) => activeTab === 'student' ? setTeamName(e.target.value) : setSchoolName(e.target.value)}
                    placeholder={activeTab === 'student' ? 'e.g. Aros Tech Titans' : 'e.g. Västerås Gymnasium'}
                    className="w-full px-4 py-3 rounded-2xl bg-[#0A0A0E] border border-white/15 focus:border-[#22C55E] focus:outline-none text-xs sm:text-sm text-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono-code font-bold tracking-wider text-slate-400 uppercase mb-1">
                    {activeTab === 'student' ? 'PARENT / MENTOR NAME *' : 'COORDINATOR NAME *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Karin Lindqvist"
                    className="w-full px-4 py-3 rounded-2xl bg-[#0A0A0E] border border-white/15 focus:border-[#22C55E] focus:outline-none text-xs sm:text-sm text-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono-code font-bold tracking-wider text-slate-400 uppercase mb-1">
                    CONTACT EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="karin@skola.se"
                    className="w-full px-4 py-3 rounded-2xl bg-[#0A0A0E] border border-white/15 focus:border-[#22C55E] focus:outline-none text-xs sm:text-sm text-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono-code font-bold tracking-wider text-slate-400 uppercase mb-1">
                    {activeTab === 'student' ? 'ATTENDING SCHOOL IN VÄSTERÅS *' : 'PHONE NUMBER *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={activeTab === 'student' ? schoolName : phone}
                    onChange={(e) => activeTab === 'student' ? setSchoolName(e.target.value) : setPhone(e.target.value)}
                    placeholder={activeTab === 'student' ? 'e.g. Carlforsska Gymnasiet' : '+46 70 123 4567'}
                    className="w-full px-4 py-3 rounded-2xl bg-[#0A0A0E] border border-white/15 focus:border-[#22C55E] focus:outline-none text-xs sm:text-sm text-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono-code font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                  TOURNAMENT CATEGORY *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('robo-sprint')}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selectedCategory === 'robo-sprint'
                        ? 'border-[#0052FF] bg-[#0052FF]/15 shadow-sm'
                        : 'border-white/10 hover:border-white/25 bg-black/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-headline font-bold text-[#0052FF] uppercase">
                        ROBO-SPRINT
                      </span>
                      <span className="text-[9px] font-mono-code bg-[#0052FF] text-white px-2 py-0.5 rounded-full">
                        ≤ 15 YRS
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                      Junior Category · Ball Passing Arena
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedCategory('robo-precision')}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selectedCategory === 'robo-precision'
                        ? 'border-[#FF3366] bg-[#FF3366]/15 shadow-sm'
                        : 'border-white/10 hover:border-white/25 bg-black/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-headline font-bold text-[#FF3366] uppercase">
                        ROBO-PRECISION
                      </span>
                      <span className="text-[9px] font-mono-code bg-[#FF3366] text-white px-2 py-0.5 rounded-full">
                        15+ YRS
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                      Senior Category · Tower Stacking
                    </span>
                  </button>
                </div>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between text-xs font-mono-code">
                <span className="text-slate-400">OFFICIAL ENTRY FEE:</span>
                <span className="font-bold text-[#22C55E]">100 SEK + VAT (125 SEK TOTAL / STUDENT)</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-pill-lime py-4 text-xs font-black tracking-wider uppercase mt-2 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>TRANSMITTING REGISTRATION...</span>
                  </span>
                ) : (
                  <>
                    <span>SUBMIT REGISTRATION ENROLMENT</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#22C55E] uppercase mb-2 block">
              REGISTRATION CONFIRMED // VÄSTERÅS 2026
            </span>

            <h3 className="font-headline font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
              Enrolment Verified.
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-light max-w-md leading-relaxed">
              Confirmation and workshop preparation schedule dispatched to <strong className="text-white">{email}</strong>.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-black/50 border border-white/15 w-full max-w-md">
              <span className="text-[10px] font-mono-code text-slate-400 uppercase block mb-1">
                OFFICIAL REGISTRATION TOKEN:
              </span>
              <span className="font-mono-code font-bold text-lg text-[#22C55E] tracking-wider">
                {confirmationCode}
              </span>
            </div>

            <button
              onClick={handleReset}
              className="btn-pill-white px-8 py-3 text-xs"
            >
              RETURN TO TOURNAMENT PORTAL
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
