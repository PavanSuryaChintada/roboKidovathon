import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2, Sparkles, User, Mail, School, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { registerStudent } from '../lib/supabase';
import type { RegistrationFormData } from '../types';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    studentName: '',
    parentEmail: '',
    parentPhone: '',
    ageCategory: 'junior',
    schoolName: '',
    city: 'Västerås',
    trackInterest: 'Robo-Sprint (Junior)',
    agreeToRules: true,
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ success: boolean; text: string } | null>(null);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const result = await registerStudent(formData);
    setLoading(false);
    setStatusMessage({ success: result.success, text: result.message });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0F19]/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="bg-[#0B0F19] border border-white/20 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl text-white relative my-8">
        
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Robo-Kidovation League Entry</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Register Student (125 SEK)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-inter">
            Västerås 2026 City Edition • March 21 City Finals at ABB Venue
          </p>
        </div>

        {/* Status Toast Banner */}
        {statusMessage && (
          <div
            className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-xs sm:text-sm border ${
              statusMessage.success
                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold'
                : 'bg-rose-950/80 border-rose-500 text-rose-200 font-bold'
            }`}
          >
            {statusMessage.success ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-bold">{statusMessage.success ? 'Success!' : 'Error'}</p>
              <p>{statusMessage.text}</p>
            </div>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm font-inter">
          
          {/* Student Name */}
          <div>
            <label className="block text-slate-300 font-bold mb-1">Student Full Name *</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                name="studentName"
                required
                value={formData.studentName}
                onChange={handleChange}
                placeholder="e.g., Astrid Lindgren"
                className="w-full bg-[#161E2E] border border-white/20 rounded-xl pl-9 pr-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#0052FF] transition-colors"
              />
            </div>
          </div>

          {/* Parent/Teacher Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-bold mb-1">Parent / Teacher Email *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  name="parentEmail"
                  required
                  value={formData.parentEmail}
                  onChange={handleChange}
                  placeholder="name@example.se"
                  className="w-full bg-[#161E2E] border border-white/20 rounded-xl pl-9 pr-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#0052FF] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">Phone Number (Optional)</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleChange}
                  placeholder="+46 70 123 4567"
                  className="w-full bg-[#161E2E] border border-white/20 rounded-xl pl-9 pr-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#0052FF] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Age Category & Track Interest */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-bold mb-1">Age Category *</label>
              <select
                name="ageCategory"
                value={formData.ageCategory}
                onChange={handleChange}
                className="w-full bg-[#161E2E] border border-white/20 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#0052FF] transition-colors"
              >
                <option value="junior">Junior (Up to 15 Years)</option>
                <option value="senior">Senior (15+ Years / High School)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">Track Interest</label>
              <select
                name="trackInterest"
                value={formData.trackInterest}
                onChange={handleChange}
                className="w-full bg-[#161E2E] border border-white/20 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#0052FF] transition-colors"
              >
                <option value="Robo-Sprint (Junior)">Robo-Sprint (Ball Showdown)</option>
                <option value="Robo-Precision (Senior)">Robo-Precision (Cup Stacking)</option>
                <option value="Both Tracks">Undecided / Both Tracks</option>
              </select>
            </div>
          </div>

          {/* School Name & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-bold mb-1">School Name *</label>
              <div className="relative">
                <School className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  name="schoolName"
                  required
                  value={formData.schoolName}
                  onChange={handleChange}
                  placeholder="e.g., Fryxellska Skolan"
                  className="w-full bg-[#161E2E] border border-white/20 rounded-xl pl-9 pr-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#0052FF] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">City *</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Västerås"
                  className="w-full bg-[#161E2E] border border-white/20 rounded-xl pl-9 pr-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#0052FF] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="pt-2 flex items-start gap-2">
            <input
              type="checkbox"
              id="agreeToRules"
              name="agreeToRules"
              checked={formData.agreeToRules}
              onChange={handleChange}
              className="mt-1 rounded bg-[#161E2E] border-white/20 text-[#0052FF] focus:ring-[#0052FF]"
            />
            <label htmlFor="agreeToRules" className="text-slate-300 text-xs font-normal leading-tight">
              I agree to the official competition guidelines, safety protocol, and GDPR privacy terms. (Entry fee: 125 SEK incl. VAT).
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="btn-event-primary w-full py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting to Supabase...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Complete Student Registration (125 SEK)</span>
                </>
              )}
            </button>
          </div>

        </form>

        <p className="text-[10px] text-center text-slate-400 font-medium mt-4">
          Data secured via Supabase encrypted backend • GDPR Compliant INIACO & IBK
        </p>

      </div>
    </div>
  );
};
