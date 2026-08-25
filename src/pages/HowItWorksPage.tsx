import React from 'react';
import { RoboHowItWorks } from '../components/RoboHowItWorks';
import { RoboJourney } from '../components/RoboJourney';

interface HowItWorksPageProps {
  onOpenRegister: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onOpenRegister }) => {
  return (
    <div className="w-full space-y-12">
      {/* Hero Header */}
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <div className="bg-[#111111] text-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#0052FF] p-8 sm:p-12 text-center">
          <span className="bg-[#0052FF] text-white font-barlow font-black text-xs px-3 py-1 border border-white uppercase tracking-wider inline-block mb-3">
            LEAGUE BLUEPRINT 🛠️
          </span>
          <h1 className="text-5xl sm:text-7xl font-barlow font-black uppercase text-white leading-none">
            HOW ROBO-KIDO WORKS
          </h1>
          <p className="text-sm sm:text-base font-dmsans text-white/80 max-w-2xl mx-auto mt-3">
            A structured hands-on robotics progression that takes students from zero experience to competing on stage at the City Finals in Västerås.
          </p>
        </div>
      </div>

      <RoboHowItWorks />
      <RoboJourney />

      <div className="max-w-6xl mx-auto px-4 text-center pb-8">
        <button
          onClick={onOpenRegister}
          className="btn-brutal text-base px-8 py-4 bg-[#111111] text-white"
        >
          START YOUR SCHOOL JOURNEY NOW →
        </button>
      </div>
    </div>
  );
};
