import React, { useState } from 'react';
import { X, Sparkles, User, Building, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPETITION_CATEGORIES, CompetitionCategory } from '../data/roboData';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'student' | 'school'>('student');
  const [selectedCategory, setSelectedCategory] = useState<string>('robo-sprint');
  const [teamName, setTeamName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [studentCount, setStudentCount] = useState('3');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const code = `RBK-2026-${Math.floor(1000 + Math.random() * 9000)}-${activeTab === 'student' ? 'ST' : 'SC'}`;
      setConfirmationCode(code);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setTeamName('');
    setSchoolName('');
    setContactName('');
    setEmail('');
    setPhone('');
    setStudentCount('3');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none">
      {/* Dark Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md -z-10"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#121216] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-10 my-8 text-white">
        {/* Close Button */}
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
              <div className="inline-flex items-center gap-2 text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#FACC15] uppercase mb-2">
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
                className={`py-2 px-5 text-xs font-headline font-black uppercase tracking-wider rounded-full transition-all flex items-center gap-2 ${
                  activeTab === 'student'
                    ? 'bg-[#FACC15] text-black shadow-md'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>STUDENT / TEAM</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('school')}
                className={`py-2 px-5 text-xs font-headline font-black uppercase tracking-wider rounded-full transition-all flex items-center gap-2 ${
                  activeTab === 'school'
                    ? 'bg-[#FACC15] text-black shadow-md'
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
                    className="w-full px-4 py-3 rounded-2xl bg-[#0A0A0E] border border-white/15 focus:border-[#FACC15] focus:outline-none text-xs sm:text-sm text-white transition-colors"
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
                    className="w-full px-4 py-3 rounded-2xl bg-[#0A0A0E] border border-white/15 focus:border-[#FACC15] focus:outline-none text-xs sm:text-sm text-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono-code font-bold tracking-wider text-slate-400 uppercase mb-1">
                    OFFICIAL EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mentor@skola.se"
                    className="w-full px-4 py-3 rounded-2xl bg-[#0A0A0E] border border-white/15 focus:border-[#FACC15] focus:outline-none text-xs sm:text-sm text-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono-code font-bold tracking-wider text-slate-400 uppercase mb-1">
                    PHONE NUMBER (SWEDEN +46) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+46 70 123 4567"
                    className="w-full px-4 py-3 rounded-2xl bg-[#0A0A0E] border border-white/15 focus:border-[#FACC15] focus:outline-none text-xs sm:text-sm text-white transition-colors"
                  />
                </div>
              </div>

              {/* Tournament Category Choice */}
              <div>
                <label className="block text-[10px] font-mono-code font-bold tracking-wider text-slate-400 uppercase mb-2">
                  CHOOSE COMPETITION TRACK *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COMPETITION_CATEGORIES.map((cat: CompetitionCategory) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        selectedCategory === cat.id
                          ? 'border-[#FACC15] bg-[#FACC15]/10 text-white'
                          : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className="font-headline font-bold text-sm text-white">
                        {cat.title}
                      </div>
                      <div className="text-[11px] font-mono-code text-slate-400 mt-0.5">
                        {cat.ageRange} · {cat.division}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Student Capacity Selector */}
              <div>
                <label className="block text-[10px] font-mono-code font-bold tracking-wider text-slate-400 uppercase mb-1">
                  ESTIMATED PARTICIPANT COHORT
                </label>
                <div className="flex gap-2">
                  {['3', '5', '15', '30', '60+'].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setStudentCount(num)}
                      className={`flex-1 py-2 rounded-xl text-xs font-mono-code font-bold border transition-all ${
                        studentCount === num
                          ? 'bg-[#FACC15] text-black border-[#FACC15]'
                          : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {num} {num === '60+' ? 'Students' : 'Max'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between text-xs font-mono-code">
                <span className="text-slate-400">OFFICIAL ENTRY FEE:</span>
                <span className="font-bold text-[#FACC15]">100 SEK + VAT (125 SEK TOTAL / STUDENT)</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-pill-lime py-4 text-xs font-black tracking-wider uppercase mt-2 flex items-center justify-center gap-2 shadow-xl"
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
            <div className="w-16 h-16 rounded-full bg-[#FACC15]/15 border border-[#FACC15]/40 flex items-center justify-center text-[#FACC15] mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-[#FACC15] uppercase mb-2 block">
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
              <span className="font-mono-code font-bold text-lg text-[#FACC15] tracking-wider">
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
