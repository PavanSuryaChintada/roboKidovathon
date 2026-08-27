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
        className="fixed inset-0 bg-[#07111F]/85 backdrop-blur-md -z-10"
      />

      <div className="relative w-full max-w-2xl bg-white border border-[#07111F]/15 rounded-[2px] shadow-2xl p-6 sm:p-10 my-8 overflow-hidden text-[#07111F]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-[2px] text-slate-400 hover:text-[#07111F] hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#0052FF] uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFFICIAL REGISTRATION GATE // VÄSTERÅS 2026</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#07111F]">
                Join The Competition.
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5568] font-light mt-1.5 leading-relaxed">
                Register a student engineering team or enrol your school cohort for the 2-hour workshops in February 2026.
              </p>
            </div>

            <div className="flex border-b border-[#07111F]/10 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('student')}
                className={`py-3 px-6 text-xs font-display font-bold tracking-wider uppercase border-b-2 transition-all flex items-center gap-2 ${
                  activeTab === 'student'
                    ? 'border-[#0052FF] text-[#0052FF]'
                    : 'border-transparent text-slate-400 hover:text-[#07111F]'
                }`}
              >
                <User className="w-4 h-4" />
                <span>STUDENT / TEAM ENROLMENT</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('school')}
                className={`py-3 px-6 text-xs font-display font-bold tracking-wider uppercase border-b-2 transition-all flex items-center gap-2 ${
                  activeTab === 'school'
                    ? 'border-[#0052FF] text-[#0052FF]'
                    : 'border-transparent text-slate-400 hover:text-[#07111F]'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>SCHOOL / INSTITUTION INTAKE</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono-code font-bold tracking-wider text-[#07111F] uppercase mb-1">
                    {activeTab === 'student' ? 'TEAM NAME *' : 'SCHOOL NAME *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={activeTab === 'student' ? teamName : schoolName}
                    onChange={(e) => activeTab === 'student' ? setTeamName(e.target.value) : setSchoolName(e.target.value)}
                    placeholder={activeTab === 'student' ? 'e.g. Aros Tech Titans' : 'e.g. Västerås Gymnasium'}
                    className="w-full px-4 py-3 rounded-[2px] bg-[#F8F9FA] border border-[#07111F]/15 focus:border-[#0052FF] focus:outline-none text-xs sm:text-sm text-[#07111F] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono-code font-bold tracking-wider text-[#07111F] uppercase mb-1">
                    {activeTab === 'student' ? 'PARENT / MENTOR NAME *' : 'COORDINATOR / TEACHER NAME *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Karin Lindqvist"
                    className="w-full px-4 py-3 rounded-[2px] bg-[#F8F9FA] border border-[#07111F]/15 focus:border-[#0052FF] focus:outline-none text-xs sm:text-sm text-[#07111F] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono-code font-bold tracking-wider text-[#07111F] uppercase mb-1">
                    CONTACT EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="karin@skola.se"
                    className="w-full px-4 py-3 rounded-[2px] bg-[#F8F9FA] border border-[#07111F]/15 focus:border-[#0052FF] focus:outline-none text-xs sm:text-sm text-[#07111F] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono-code font-bold tracking-wider text-[#07111F] uppercase mb-1">
                    {activeTab === 'student' ? 'ATTENDING SCHOOL IN VÄSTERÅS *' : 'PHONE NUMBER *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={activeTab === 'student' ? schoolName : phone}
                    onChange={(e) => activeTab === 'student' ? setSchoolName(e.target.value) : setPhone(e.target.value)}
                    placeholder={activeTab === 'student' ? 'e.g. Carlforsska Gymnasiet' : '+46 70 123 4567'}
                    className="w-full px-4 py-3 rounded-[2px] bg-[#F8F9FA] border border-[#07111F]/15 focus:border-[#0052FF] focus:outline-none text-xs sm:text-sm text-[#07111F] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono-code font-bold tracking-wider text-[#07111F] uppercase mb-1.5">
                  TOURNAMENT CATEGORY *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('robo-sprint')}
                    className={`p-3.5 rounded-[2px] border text-left transition-all ${
                      selectedCategory === 'robo-sprint'
                        ? 'border-[#0052FF] bg-[#0052FF]/5 shadow-sm'
                        : 'border-[#07111F]/15 hover:border-[#07111F]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-display font-bold text-[#0052FF] uppercase">
                        ROBO-SPRINT
                      </span>
                      <span className="text-[9px] font-mono-code bg-[#0052FF] text-white px-1.5 py-0.2 rounded-[2px]">
                        ≤ 15 YRS
                      </span>
                    </div>
                    <span className="text-[11px] text-[#4A5568] block">
                      Junior Category · Ball Passing Arena
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedCategory('robo-precision')}
                    className={`p-3.5 rounded-[2px] border text-left transition-all ${
                      selectedCategory === 'robo-precision'
                        ? 'border-[#07111F] bg-[#07111F]/5 shadow-sm'
                        : 'border-[#07111F]/15 hover:border-[#07111F]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-display font-bold text-[#07111F] uppercase">
                        ROBO-PRECISION
                      </span>
                      <span className="text-[9px] font-mono-code bg-[#07111F] text-white px-1.5 py-0.2 rounded-[2px]">
                        15+ YRS
                      </span>
                    </div>
                    <span className="text-[11px] text-[#4A5568] block">
                      Senior Category · Tower Stacking
                    </span>
                  </button>
                </div>
              </div>

              <div className="p-3 bg-[#F8F9FA] border border-[#07111F]/10 rounded-[2px] flex items-center justify-between text-xs font-mono-code">
                <span className="text-slate-500">OFFICIAL ENTRY FEE:</span>
                <span className="font-bold text-[#07111F]">100 SEK + VAT (125 SEK TOTAL / STUDENT)</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-electric-primary py-4 text-xs font-display font-bold tracking-[0.14em] mt-2"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-emerald-600 uppercase mb-2 block">
              REGISTRATION CONFIRMED // VÄSTERÅS 2026
            </span>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#07111F] uppercase tracking-tight">
              Enrolment Verified.
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#4A5568] font-light max-w-md leading-relaxed">
              Confirmation and workshop preparation schedule dispatched to <strong className="text-[#07111F]">{email}</strong>.
            </p>

            <div className="my-6 p-4 rounded-[2px] bg-[#F8F9FA] border border-[#07111F]/15 w-full max-w-md">
              <span className="text-[10px] font-mono-code text-slate-500 uppercase block mb-1">
                OFFICIAL REGISTRATION TOKEN:
              </span>
              <span className="font-mono-code font-bold text-lg text-[#0052FF] tracking-wider">
                {confirmationCode}
              </span>
            </div>

            <button
              onClick={handleReset}
              className="btn-editorial-dark px-8 py-3 text-xs"
            >
              RETURN TO TOURNAMENT PORTAL
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
