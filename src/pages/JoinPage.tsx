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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      {/* Header */}
      <div className="card-event-dark p-8 text-center space-y-2">
        <span className="bg-[#0052FF] text-white font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-wider inline-block">
          OFFICIAL REGISTRATION PORTAL 📝
        </span>
        <h1 className="text-3xl sm:text-5xl font-syne font-extrabold uppercase text-white leading-none">
          JOIN THE COMPETITION
        </h1>
        <p className="text-xs sm:text-sm font-jakarta text-slate-300 max-w-md mx-auto">
          Register your student team or enroll your school in the Sweden Robo-Kido-A-Thon League.
        </p>
      </div>

      {/* Form Container */}
      <div className="card-event p-6 sm:p-10">
        {submitted ? (
          <div className="p-8 bg-blue-50 border border-blue-200 rounded-2xl text-center space-y-3">
            <h2 className="font-syne font-extrabold text-2xl uppercase text-[#0F172A]">
              🎉 REGISTRATION SUBMITTED!
            </h2>
            <p className="font-jakarta text-sm text-slate-600">
              Thank you for registering! Our Västerås coordinator will contact your team/school with the official event pack and kit details.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 btn-event-primary px-6 py-2.5 text-xs text-white rounded-lg"
            >
              Submit Another Registration
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 font-jakarta text-sm text-[#0F172A]">
            {/* Role Switcher */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase transition-all ${
                  role === 'student'
                    ? 'bg-[#0052FF] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                STUDENT TEAM REGISTRATION
              </button>

              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase transition-all ${
                  role === 'teacher'
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                SCHOOL / TEACHER REGISTRATION
              </button>
            </div>

            {/* Category Select */}
            <div>
              <label className="font-bold text-xs uppercase block mb-2 text-slate-700">
                SELECT COMPETITION DIVISION:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCategory('junior')}
                  className={`p-3.5 rounded-xl border text-left font-bold text-xs uppercase transition-all ${
                    category === 'junior'
                      ? 'bg-blue-50 border-[#0052FF] text-[#0052FF]'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  JUNIOR (ROBO-SPRINT • UP TO AGE 15)
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('senior')}
                  className={`p-3.5 rounded-xl border text-left font-bold text-xs uppercase transition-all ${
                    category === 'senior'
                      ? 'bg-slate-900 border-slate-900 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  SENIOR (ROBO-PRECISION • AGE 15+)
                </button>
              </div>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-xs uppercase block mb-1 text-slate-700">
                  FULL NAME / TEAM LEADER:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Lindqvist"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 font-jakarta text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                />
              </div>

              <div>
                <label className="font-bold text-xs uppercase block mb-1 text-slate-700">
                  EMAIL ADDRESS:
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@school.se"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 font-jakarta text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                />
              </div>

              <div>
                <label className="font-bold text-xs uppercase block mb-1 text-slate-700">
                  SCHOOL NAME / CITY:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Västerås Skola"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 font-jakarta text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                />
              </div>

              <div>
                <label className="font-bold text-xs uppercase block mb-1 text-slate-700">
                  PHONE NUMBER:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+46 70 123 45 67"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 font-jakarta text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                />
              </div>
            </div>

            {/* Fee Note */}
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs font-jakarta text-slate-700">
              <strong>Participation Fee:</strong> 100 SEK + VAT (125 SEK total per student). No cost for school admin.
            </div>

            <button
              type="submit"
              className="w-full btn-event-blue py-3.5 text-sm rounded-xl text-center"
            >
              SUBMIT LEAGUE REGISTRATION →
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
