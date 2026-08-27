import React from 'react';

interface ForSchoolsPageProps {
  onOpenRegister: () => void;
  onOpenDeckModal: () => void;
}

export const ForSchoolsPage: React.FC<ForSchoolsPageProps> = ({
  onOpenRegister,
  onOpenDeckModal,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Educator Header */}
      <div className="card-event-dark p-8 sm:p-12">
        <div className="max-w-3xl space-y-4">
          <span className="bg-[#0052FF] text-white font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-wider inline-block">
            EDUCATOR PORTAL & PROSPECTUS
          </span>
          <h1 className="text-4xl sm:text-6xl font-syne font-extrabold uppercase text-white leading-tight">
            Bring Robo-Kido to Your School
          </h1>
          <p className="text-base sm:text-lg font-jakarta text-slate-300">
            A turn-key STEM robotics competition designed specifically to align with Nordic school culture, early technology education, and equality.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onOpenRegister}
              className="btn-event-blue text-sm px-6 py-3.5 rounded-xl"
            >
              REGISTER YOUR SCHOOL NOW →
            </button>
            <button
              onClick={onOpenDeckModal}
              className="btn-event-secondary text-sm px-6 py-3.5 rounded-xl"
            >
              DOWNLOAD OFFICIAL PROSPECTUS (PDF) 📄
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Package Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Deliverables */}
        <div className="card-event p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-[#0052FF] border-b border-slate-200 pb-3">
            WHAT ROBO-KIDOVATION PROVIDES
          </h2>
          <div className="space-y-3 font-jakarta text-xs sm:text-sm text-slate-700">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <strong className="font-bold block text-[#0F172A]">1. HARDWARE & ROBOTICS KITS:</strong>
              Official robotics chassis, gearboxes, motors, sensors, microcontrollers & wheels.
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <strong className="font-bold block text-[#0F172A]">2. TRAINERS & STEM MENTORS:</strong>
              Certified robotics instructors conduct the in-school workshops and guide student teams.
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <strong className="font-bold block text-[#0F172A]">3. CERTIFICATES & RECOGNITION:</strong>
              Participation certificates for every student, plus trophy awards for school champions.
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <strong className="font-bold block text-[#0F172A]">4. ARENA LOGISTICS & SCORING:</strong>
              Official competition scoring, referees, match timing equipment & city finals coordination.
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="card-event p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-[#0F172A] border-b border-slate-200 pb-3">
            WHAT WE NEED FROM SCHOOLS
          </h2>
          <div className="space-y-3 font-jakarta text-xs sm:text-sm text-slate-700">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <strong className="font-bold block text-[#0F172A]">1. SCHOOL VENUE:</strong>
              A classroom or hall space for holding the intro workshop and school-level qualifier matches.
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <strong className="font-bold block text-[#0F172A]">2. TEACHER VOLUNTEERS:</strong>
              4 teacher volunteers during the school-level competition event.
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <strong className="font-bold block text-[#0F172A]">3. CITY FINALS REPRESENTATIVE:</strong>
              1 teacher volunteer to accompany the qualified Junior & Senior teams to the Västerås City Finals.
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <strong className="font-bold block text-[#0F172A]">4. GDPR & PARENT PERMISSION:</strong>
              Standard photo/media participation consent coordination.
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Card Banner */}
      <div className="card-event p-8 sm:p-12 text-center space-y-4 bg-slate-900 text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          TRANSPARENT PARTICIPATION FEE
        </h2>
        <div className="max-w-md mx-auto bg-slate-800 border border-slate-700 p-6 rounded-2xl">
          <span className="text-5xl font-extrabold text-[#E2FF00] block leading-none">
            100 SEK
          </span>
          <span className="text-xs font-mono font-bold text-slate-300 block mt-1 uppercase">
            + VAT (125 SEK TOTAL PER STUDENT)
          </span>
          <p className="text-xs font-jakarta text-slate-300 mt-3 pt-2 border-t border-slate-700">
            Zero administrative cost for school administration. Complete turnkey event execution included.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onOpenRegister}
            className="btn-event-blue text-sm px-8 py-3.5 rounded-xl"
          >
            BRING ROBO-KIDO TO YOUR SCHOOL NOW →
          </button>
        </div>
      </div>
    </div>
  );
};
