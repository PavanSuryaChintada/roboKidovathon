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
    <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="bg-[#111111] text-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#FACC15] p-8 text-center">
        <span className="bg-[#FACC15] text-[#111111] font-barlow font-black text-xs px-3 py-1 border border-white uppercase tracking-wider inline-block mb-2">
          OFFICIAL REGISTRATION PORTAL 📝
        </span>
        <h1 className="text-4xl sm:text-6xl font-barlow font-black uppercase text-white leading-none">
          JOIN THE COMPETITION
        </h1>
        <p className="text-xs sm:text-sm font-dmsans text-white/80 max-w-md mx-auto mt-2">
          Register your student team or enroll your school in the Sweden Robo-Kido-A-Thon League.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white border-2.5 border-[#111111] shadow-[8px_8px_0px_#111111] p-6 sm:p-10">
        {submitted ? (
          <div className="p-8 bg-[#FACC15] border-2 border-[#111111] text-center space-y-3">
            <h2 className="font-barlow font-black text-3xl uppercase text-[#111111]">
              🎉 REGISTRATION SUBMITTED!
            </h2>
            <p className="font-dmsans text-sm text-[#111111]">
              Thank you for registering! Our Västerås coordinator will contact your team/school with the official event pack and kit details.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 btn-brutal px-6 py-2.5 text-xs text-white"
            >
              Submit Another Registration
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 font-dmsans text-sm text-[#111111]">
            {/* Role Switcher */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 py-3 border-2 border-[#111111] font-barlow font-black text-base uppercase transition-all ${
                  role === 'student'
                    ? 'bg-[#0052FF] text-white shadow-[3px_3px_0px_#111111]'
                    : 'bg-[#F7F4EC] text-[#111111]'
                }`}
              >
                STUDENT TEAM REGISTRATION
              </button>

              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`flex-1 py-3 border-2 border-[#111111] font-barlow font-black text-base uppercase transition-all ${
                  role === 'teacher'
                    ? 'bg-[#FF3B00] text-white shadow-[3px_3px_0px_#111111]'
                    : 'bg-[#F7F4EC] text-[#111111]'
                }`}
              >
                SCHOOL / TEACHER REGISTRATION
              </button>
            </div>

            {/* Category Select */}
            <div>
              <label className="font-barlow font-black text-base uppercase block mb-2">
                SELECT COMPETITION DIVISION:
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setCategory('junior')}
                  className={`p-3 border-2 border-[#111111] text-left font-barlow font-black uppercase text-sm ${
                    category === 'junior'
                      ? 'bg-[#FACC15] text-[#111111] shadow-[3px_3px_0px_#111111]'
                      : 'bg-white text-[#111111]'
                  }`}
                >
                  JUNIOR (ROBO-SPRINT • UP TO AGE 15)
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('senior')}
                  className={`p-3 border-2 border-[#111111] text-left font-barlow font-black uppercase text-sm ${
                    category === 'senior'
                      ? 'bg-[#0052FF] text-white shadow-[3px_3px_0px_#111111]'
                      : 'bg-white text-[#111111]'
                  }`}
                >
                  SENIOR (ROBO-PRECISION • AGE 15+)
                </button>
              </div>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-barlow font-bold text-xs uppercase block mb-1">
                  FULL NAME / TEAM LEADER:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Lindqvist"
                  className="w-full bg-[#F7F4EC] border-2 border-[#111111] px-4 py-2.5 font-dmsans focus:outline-none focus:ring-2 focus:ring-[#111111]"
                />
              </div>

              <div>
                <label className="font-barlow font-bold text-xs uppercase block mb-1">
                  EMAIL ADDRESS:
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@school.se"
                  className="w-full bg-[#F7F4EC] border-2 border-[#111111] px-4 py-2.5 font-dmsans focus:outline-none focus:ring-2 focus:ring-[#111111]"
                />
              </div>

              <div>
                <label className="font-barlow font-bold text-xs uppercase block mb-1">
                  SCHOOL NAME / CITY:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Västerås Skola"
                  className="w-full bg-[#F7F4EC] border-2 border-[#111111] px-4 py-2.5 font-dmsans focus:outline-none focus:ring-2 focus:ring-[#111111]"
                />
              </div>

              <div>
                <label className="font-barlow font-bold text-xs uppercase block mb-1">
                  PHONE NUMBER:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+46 70 123 45 67"
                  className="w-full bg-[#F7F4EC] border-2 border-[#111111] px-4 py-2.5 font-dmsans focus:outline-none focus:ring-2 focus:ring-[#111111]"
                />
              </div>
            </div>

            {/* Fee Note */}
            <div className="p-3 bg-[#FACC15]/30 border border-[#111111] text-xs font-dmsans">
              <strong>Participation Fee:</strong> 100 SEK + VAT (125 SEK total per student). No cost for school admin.
            </div>

            <button
              type="submit"
              className="w-full btn-brutal py-3.5 text-base text-center bg-[#111111] text-white"
            >
              SUBMIT LEAGUE REGISTRATION →
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
