import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { TRACKS_DATA } from '../data/hackathonData';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrack?: string;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  initialTrack
}) => {
  const [teamName, setTeamName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [githubHandle, setGithubHandle] = useState('');
  const [selectedTrack, setSelectedTrack] = useState(initialTrack || 'quantum-ai');
  const [teamSize, setTeamSize] = useState<number>(3);
  const [institution, setInstitution] = useState('');
  const [pitch, setPitch] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedInviteCode, setGeneratedInviteCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !leadEmail || !githubHandle) return;

    setIsSubmitting(true);

    // Simulate API registration delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setGeneratedInviteCode(`APEX-${Math.random().toString(36).substring(2, 7).toUpperCase()}-2026`);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setTeamName('');
    setLeadEmail('');
    setGithubHandle('');
    setPitch('');
    setInstitution('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl -z-10"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-gradient-to-b from-[#14141E] via-[#0E0E14] to-[#08080C] border border-white/[0.12] rounded-2xl shadow-2xl p-6 sm:p-10 my-8 overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono-code font-bold tracking-[0.25em] text-indigo-400 uppercase mb-2">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>COHORT APPLICATION // VETTING GATE</span>
                  </div>
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white">
                    Deploy Team Application.
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mt-2 leading-relaxed">
                    Submit your team credentials for algorithmic code vetting and immediate allocation of $5,000 in cloud sandbox compute.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Team Name */}
                    <div>
                      <label className="block text-[10px] font-mono-code font-bold tracking-[0.15em] text-slate-300 uppercase mb-1.5">
                        TEAM CALLSIGN / NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        placeholder="e.g. CipherForge AI"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/[0.1] focus:border-indigo-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    {/* Lead Email */}
                    <div>
                      <label className="block text-[10px] font-mono-code font-bold tracking-[0.15em] text-slate-300 uppercase mb-1.5">
                        LEAD ENGINEER EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        placeholder="lead@lab.engineering"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/[0.1] focus:border-indigo-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* GitHub Handle */}
                    <div>
                      <label className="block text-[10px] font-mono-code font-bold tracking-[0.15em] text-slate-300 uppercase mb-1.5">
                        GITHUB / REPO HANDLE *
                      </label>
                      <input
                        type="text"
                        required
                        value={githubHandle}
                        onChange={(e) => setGithubHandle(e.target.value)}
                        placeholder="github.com/team-callsign"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/[0.1] focus:border-indigo-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    {/* Institution / Company */}
                    <div>
                      <label className="block text-[10px] font-mono-code font-bold tracking-[0.15em] text-slate-300 uppercase mb-1.5">
                        INSTITUTION / ENTERPRISE
                      </label>
                      <input
                        type="text"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        placeholder="e.g. MIT CSAIL / DeepMind"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/[0.1] focus:border-indigo-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Track Selection */}
                  <div>
                    <label className="block text-[10px] font-mono-code font-bold tracking-[0.15em] text-slate-300 uppercase mb-1.5">
                      PRIMARY FRONTIER TRACK *
                    </label>
                    <select
                      value={selectedTrack}
                      onChange={(e) => setSelectedTrack(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B10] border border-white/[0.1] focus:border-indigo-500 focus:outline-none text-white text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      {TRACKS_DATA.map((t) => (
                        <option key={t.id} value={t.id} className="bg-[#0B0B10] text-white">
                          {t.title} ({t.poolShare})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Team Size Selector */}
                  <div>
                    <label className="block text-[10px] font-mono-code font-bold tracking-[0.15em] text-slate-300 uppercase mb-2">
                      TEAM COHORT SIZE ({teamSize} ENGINEERS)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setTeamSize(num)}
                          className={`py-2.5 rounded-lg text-xs font-mono-code font-bold transition-all ${
                            teamSize === num
                              ? 'bg-indigo-600 text-white border border-indigo-400 shadow-md shadow-indigo-600/30'
                              : 'bg-white/[0.04] text-slate-400 border border-white/[0.07] hover:bg-white/[0.08]'
                          }`}
                        >
                          {num} {num === 1 ? 'SOLO' : 'ENGINEERS'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Concept Pitch */}
                  <div>
                    <label className="block text-[10px] font-mono-code font-bold tracking-[0.15em] text-slate-300 uppercase mb-1.5">
                      BRIEF ARCHITECTURAL RFC / CONCEPT PITCH
                    </label>
                    <textarea
                      rows={3}
                      value={pitch}
                      onChange={(e) => setPitch(e.target.value)}
                      placeholder="Outline the core technical thesis, model architecture, or hardware deployment plan (2-3 sentences)..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/[0.1] focus:border-indigo-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-xs sm:text-sm font-display font-bold tracking-[0.15em] uppercase text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/40 shadow-xl shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>PROCESSING COHORT VETTING...</span>
                      </span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>TRANSMIT APPLICATION</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-emerald-400 uppercase mb-2">
                  APPLICATION PROVISIONED // STATUS: VERIFIED
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Team {teamName} Enrolled.
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 font-light max-w-md leading-relaxed">
                  Confirmation dispatch sent to <strong className="text-white">{leadEmail}</strong>. Your sandbox credentials and GPU API keys are generated.
                </p>

                {/* Team Invite Code Box */}
                <div className="my-6 p-4 rounded-xl bg-black/60 border border-white/[0.1] w-full max-w-md">
                  <span className="text-[10px] font-mono-code text-slate-400 uppercase block mb-1">
                    TEAM INVITE & REPOSITORY DISPATCH KEY:
                  </span>
                  <span className="font-mono-code font-bold text-lg text-cyan-300 tracking-wider">
                    {generatedInviteCode}
                  </span>
                </div>

                <button
                  onClick={handleReset}
                  className="px-8 py-3 rounded-xl text-xs font-display font-bold tracking-[0.15em] uppercase text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/30 transition-all"
                >
                  ENTER COHORT PORTAL →
                </button>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
