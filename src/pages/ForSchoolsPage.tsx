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
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Educator Header */}
      <div className="bg-[#111111] text-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#FACC15] p-8 sm:p-12">
        <div className="max-w-3xl space-y-4">
          <span className="bg-[#FACC15] text-[#111111] font-barlow font-black text-xs px-3 py-1 border border-white uppercase tracking-wider inline-block">
            EDUCATOR PORTAL & PROSPECTUS
          </span>
          <h1 className="text-5xl sm:text-7xl font-barlow font-black uppercase text-white leading-none">
            BRING ROBO-KIDO TO YOUR SCHOOL
          </h1>
          <p className="text-base sm:text-lg font-dmsans text-white/90">
            A turn-key STEM robotics competition designed specifically to align with Nordic school culture, early technology education, and equality.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onOpenRegister}
              className="btn-brutal-yellow text-sm px-6 py-3 text-[#111111]"
            >
              REGISTER YOUR SCHOOL NOW →
            </button>
            <button
              onClick={onOpenDeckModal}
              className="btn-brutal text-sm px-6 py-3 bg-white text-[#111111]"
            >
              DOWNLOAD OFFICIAL PROSPECTUS (PDF) 📄
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Package Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Deliverables */}
        <div className="bg-white border-2.5 border-[#111111] shadow-[6px_6px_0px_#111111] p-6 sm:p-8 space-y-4">
          <h2 className="text-3xl font-barlow font-black uppercase text-[#0052FF] border-b-2 border-[#111111] pb-2">
            WHAT ROBO-KIDOVATION PROVIDES
          </h2>
          <div className="space-y-3 font-dmsans text-sm text-[#111111]">
            <div className="p-3 bg-[#F7F4EC] border border-[#111111]">
              <strong className="font-barlow font-black text-base block text-[#111111]">1. HARDWARE & ROBOTICS KITS:</strong>
              Official Blix-A-Thon robotics chassis, gearboxes, motors, sensors, microcontrollers & wheels.
            </div>
            <div className="p-3 bg-[#F7F4EC] border border-[#111111]">
              <strong className="font-barlow font-black text-base block text-[#111111]">2. TRAINERS & STEM MENTORS:</strong>
              Certified robotics instructors conduct the in-school workshops and guide student teams.
            </div>
            <div className="p-3 bg-[#F7F4EC] border border-[#111111]">
              <strong className="font-barlow font-black text-base block text-[#111111]">3. CERTIFICATES & RECOGNITION:</strong>
              Participation certificates for every student, plus trophy awards for school champions.
            </div>
            <div className="p-3 bg-[#F7F4EC] border border-[#111111]">
              <strong className="font-barlow font-black text-base block text-[#111111]">4. ARENA LOGISTICS & SCORING:</strong>
              Official competition scoring, referees, match timing equipment & city finals coordination.
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white border-2.5 border-[#111111] shadow-[6px_6px_0px_#111111] p-6 sm:p-8 space-y-4">
          <h2 className="text-3xl font-barlow font-black uppercase text-[#FF3B00] border-b-2 border-[#111111] pb-2">
            WHAT WE NEED FROM SCHOOLS
          </h2>
          <div className="space-y-3 font-dmsans text-sm text-[#111111]">
            <div className="p-3 bg-[#F7F4EC] border border-[#111111]">
              <strong className="font-barlow font-black text-base block text-[#111111]">1. SCHOOL VENUE:</strong>
              A classroom or hall space for holding the intro workshop and school-level qualifier matches.
            </div>
            <div className="p-3 bg-[#F7F4EC] border border-[#111111]">
              <strong className="font-barlow font-black text-base block text-[#111111]">2. TEACHER VOLUNTEERS:</strong>
              4 teacher volunteers during the school-level competition event.
            </div>
            <div className="p-3 bg-[#F7F4EC] border border-[#111111]">
              <strong className="font-barlow font-black text-base block text-[#111111]">3. CITY FINALS REPRESENTATIVE:</strong>
              1 teacher volunteer to accompany the qualified Junior & Senior teams to the Västerås City Finals.
            </div>
            <div className="p-3 bg-[#F7F4EC] border border-[#111111]">
              <strong className="font-barlow font-black text-base block text-[#111111]">4. GDPR & PARENT PERMISSION:</strong>
              Standard photo/media participation consent coordination.
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Card Banner */}
      <div className="bg-[#FACC15] border-2.5 border-[#111111] shadow-[8px_8px_0px_#111111] p-8 text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-barlow font-black uppercase text-[#111111]">
          TRANSPARENT PARTICIPATION FEE
        </h2>
        <div className="max-w-md mx-auto bg-white border-2 border-[#111111] p-6 shadow-[4px_4px_0px_#111111]">
          <span className="text-6xl font-barlow font-black text-[#111111] block leading-none">
            100 SEK
          </span>
          <span className="text-xs font-mono font-bold text-[#111111]/80 block mt-1 uppercase">
            + VAT (125 SEK TOTAL PER STUDENT)
          </span>
          <p className="text-xs font-dmsans text-[#111111]/85 mt-3 pt-2 border-t border-[#111111]">
            Zero administrative cost for school administration. Complete turnkey event execution included.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onOpenRegister}
            className="btn-brutal text-base px-8 py-3.5 bg-[#111111] text-white"
          >
            BRING ROBO-KIDO TO YOUR SCHOOL NOW →
          </button>
        </div>
      </div>
    </div>
  );
};
