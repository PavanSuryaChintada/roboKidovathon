import React from 'react';
import { RoboHowItWorks } from '../components/RoboHowItWorks';
import { RoboJourney } from '../components/RoboJourney';

interface HowItWorksPageProps {
  onOpenRegister: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onOpenRegister }) => {
  return (
    <div className="w-full space-y-12 py-6 text-white">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="card-event p-8 sm:p-12 text-center border-t-4 border-t-[#0052FF] border border-white/15">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-2">
            LEAGUE BLUEPRINT 🛠️
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase text-white leading-none">
            HOW ROBO-KIDO WORKS
          </h1>
          <p className="text-sm sm:text-base font-inter text-slate-300 max-w-2xl mx-auto mt-3">
            A structured hands-on robotics progression that takes students from zero experience to competing on stage at the City Finals in Västerås.
          </p>
        </div>
      </div>

      <RoboHowItWorks />
      <RoboJourney />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center pb-8">
        <button
          onClick={onOpenRegister}
          className="btn-event-primary text-base px-8 py-4 rounded-xl"
        >
          START YOUR SCHOOL JOURNEY NOW →
        </button>
      </div>
    </div>
  );
};
