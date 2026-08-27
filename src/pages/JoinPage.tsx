import React, { useState } from 'react';

export const JoinPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [category, setCategory] = useState<'junior' | 'senior'>('junior');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 text-white">
      {/* Header */}
      <div className="card-event-dark p-8 text-center space-y-2 border border-white/15">
        <span className="bg-[#0052FF] text-white font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-wider inline-block">
          OFFICIAL REGISTRATION PORTAL 📝
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase text-white leading-none">
          JOIN THE COMPETITION
        </h1>
        <p className="text-xs sm:text-sm font-inter text-slate-300 max-w-md mx-auto">
          Register your student team or enroll your school in the Sweden Robo-Kido-A-Thon League.
        </p>
      </div>

      {/* Form Container */}
      <div className="card-event p-6 sm:p-10 border border-white/15">
        {submitted ? (
          <div className="p-8 bg-[#0052FF]/20 border border-[#0052FF] rounded-2xl text-center space-y-3">
            <h2 className="font-extrabold text-2xl uppercase text-white">
              🎉 REGISTRATION SUBMITTED!
            </h2>
            <p className="font-inter text-sm text-slate-200">
              Thank you for registering! Our Västerås coordinator will contact your team/school with the official event pack and kit details.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 btn-event-primary px-6 py-2.5 text-xs text-white rounded-xl"
            >
              Submit Another Registration
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 font-inter text-sm text-white">
            {/* Role Switcher */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase transition-all ${
                  role === 'student'
                    ? 'bg-[#0052FF] text-white shadow-md'
                    : 'bg-white/10 text-slate-300 border border-white/15 hover:bg-white/15'
                }`}
              >
                STUDENT TEAM REGISTRATION
              </button>

              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase transition-all ${
                  role === 'teacher'
                    ? 'bg-[#0052FF] text-white shadow-md'
                    : 'bg-white/10 text-slate-300 border border-white/15 hover:bg-white/15'
                }`}
              >
                SCHOOL / TEACHER REGISTRATION
              </button>
            </div>

            {/* Category Select */}
            <div>
              <label className="font-bold text-xs uppercase block mb-2 text-slate-300">
                SELECT COMPETITION DIVISION:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCategory('junior')}
                  className={`p-3.5 rounded-xl border text-left font-bold text-xs uppercase transition-all ${
                    category === 'junior'
                      ? 'bg-[#0052FF]/20 border-[#0052FF] text-[#E2FF00]'
                      : 'bg-white/5 border-white/15 text-slate-300'
                  }`}
                >
                  JUNIOR (ROBO-SPRINT • UP TO AGE 15)
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('senior')}
                  className={`p-3.5 rounded-xl border text-left font-bold text-xs uppercase transition-all ${
                    category === 'senior'
                      ? 'bg-[#0052FF]/20 border-[#0052FF] text-[#E2FF00]'
                      : 'bg-white/5 border-white/15 text-slate-300'
                  }`}
                >
                  SENIOR (ROBO-PRECISION • AGE 15+)
                </button>
              </div>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-xs uppercase block mb-1 text-slate-300">
                  FULL NAME / TEAM LEADER:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Lindqvist"
                  className="w-full bg-[#0B0F19] border border-white/20 rounded-xl px-4 py-2.5 font-inter text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0052FF]"
                />
              </div>

              <div>
                <label className="font-bold text-xs uppercase block mb-1 text-slate-300">
                  EMAIL ADDRESS:
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@school.se"
                  className="w-full bg-[#0B0F19] border border-white/20 rounded-xl px-4 py-2.5 font-inter text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0052FF]"
                />
              </div>

              <div>
                <label className="font-bold text-xs uppercase block mb-1 text-slate-300">
                  SCHOOL NAME / CITY:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Västerås Skola"
                  className="w-full bg-[#0B0F19] border border-white/20 rounded-xl px-4 py-2.5 font-inter text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0052FF]"
                />
              </div>

              <div>
                <label className="font-bold text-xs uppercase block mb-1 text-slate-300">
                  PHONE NUMBER:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+46 70 123 45 67"
                  className="w-full bg-[#0B0F19] border border-white/20 rounded-xl px-4 py-2.5 font-inter text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0052FF]"
                />
              </div>
            </div>

            {/* Fee Note */}
            <div className="p-3.5 bg-[#0B0F19] border border-white/15 rounded-xl text-xs font-inter text-slate-300">
              <strong className="text-white">Participation Fee:</strong> 100 SEK + VAT (125 SEK total per student). No cost for school admin.
            </div>

            <button
              type="submit"
              className="w-full btn-event-primary py-3.5 text-sm rounded-xl text-center"
            >
              SUBMIT LEAGUE REGISTRATION →
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
