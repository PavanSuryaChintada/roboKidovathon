import React from 'react';
import { RedRetroLaptop } from './GadgetIllustrations';

export const InterfaceFriendsFeatures: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8 flex flex-col items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Red Laptop Character */}
        <div className="flex justify-center md:justify-end animate-float-slow">
          <RedRetroLaptop className="w-64 sm:w-80 md:w-[22rem]" />
        </div>

        {/* Right Side: Features List */}
        <div className="flex flex-col items-center text-center space-y-3 md:items-center">
          <span className="text-xs font-semibold tracking-wider text-ink-black/60 uppercase">
            Included with your ticket:
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton uppercase tracking-wide text-ink-black hover:scale-105 transition-transform cursor-default">
            Meet New Friends
          </h2>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton uppercase tracking-wide text-ink-black hover:scale-105 transition-transform cursor-default">
            Games & Activities
          </h2>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton uppercase tracking-wide text-ink-black hover:scale-105 transition-transform cursor-default">
            Light Dinner + Refreshments
          </h2>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton uppercase tracking-wide text-ink-black hover:scale-105 transition-transform cursor-default">
            Interactive Discussions
          </h2>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton uppercase tracking-wide text-ink-black hover:scale-105 transition-transform cursor-default">
            Config with Friends
          </h2>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton uppercase tracking-wide text-ink-black hover:scale-105 transition-transform cursor-default">
            & More!
          </h2>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-lg h-[1.5px] bg-ink-black/20 my-12" />
    </section>
  );
};
