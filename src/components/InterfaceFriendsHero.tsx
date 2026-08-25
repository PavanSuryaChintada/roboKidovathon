import React from 'react';
import { PurpleGamepadHelmet, CrtWinkMonitor, YellowFoldableGameboy } from './GadgetIllustrations';
import { TickerTape } from './TickerTape';

interface InterfaceFriendsHeroProps {
  onOpenNotify: () => void;
  titleText?: string;
  subText?: string;
}

export const InterfaceFriendsHero: React.FC<InterfaceFriendsHeroProps> = ({
  onOpenNotify,
  titleText = 'INTERFACE FRIENDS',
}) => {
  return (
    <header className="relative w-full pt-4 pb-12 px-4 md:px-8 max-w-6xl mx-auto flex flex-col items-center">
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between py-2 mb-6">
        {/* Left Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border-2 border-ink-black px-3 py-1 rounded-full text-xs font-semibold text-ink-black shadow-brutal-sm hover:scale-105 transition-transform cursor-pointer">
          <span className="w-4 h-4 rounded-full bg-[#0284C7] flex items-center justify-center text-[10px] text-white font-bold">W</span>
          <span>Website made in @Webflow</span>
        </div>

        {/* Right Get Notified Button */}
        <button
          onClick={onOpenNotify}
          className="bg-white border-2 border-ink-black text-ink-black px-5 py-1.5 rounded-md text-xs font-extrabold uppercase tracking-wider shadow-brutal hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all active:translate-y-0 active:shadow-brutal-sm"
        >
          GET NOTIFIED
        </button>
      </div>

      {/* Date & Location Line */}
      <div className="w-full flex items-center justify-between text-xs md:text-sm font-semibold tracking-wider text-ink-black/80 uppercase px-2 mb-1">
        <span>June 25 2024</span>
        <span>San Francisco, CA</span>
      </div>

      {/* Giant Main Display Title */}
      <div className="relative w-full text-center my-2 select-none">
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-anton tracking-normal leading-none uppercase text-ink-black drop-shadow-sm">
          {titleText}
        </h1>

        {/* Angled Ticker Tape overlayed across title */}
        <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[110%] z-20 pointer-events-none">
          <TickerTape />
        </div>
      </div>

      {/* 3 Floating Retro Gadget Characters Row */}
      <div className="relative z-10 w-full flex items-center justify-center gap-4 sm:gap-8 md:gap-16 my-8 py-4">
        {/* Left: Purple Helmet */}
        <div className="animate-float-slow transform -rotate-3 hover:rotate-0 transition-transform">
          <PurpleGamepadHelmet className="w-36 sm:w-48 md:w-56" />
        </div>

        {/* Center: WINK CRT Monitor */}
        <div className="animate-float-delay z-10 hover:scale-110 transition-transform">
          <CrtWinkMonitor className="w-40 sm:w-52 md:w-64" />
        </div>

        {/* Right: Yellow Foldable GamePad */}
        <div className="animate-float-slow transform rotate-3 hover:rotate-0 transition-transform">
          <YellowFoldableGameboy className="w-36 sm:w-48 md:w-56" />
        </div>
      </div>

      {/* Description Copy Block */}
      <div className="max-w-2xl text-center mt-6 space-y-4 px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-extrabold text-ink-black tracking-tight">
          Come make new <span className="underline decoration-wavy decoration-[#F58220]">*IFFs.</span>
        </h2>
        <p className="text-[11px] font-mono text-ink-black/60 -mt-2 uppercase tracking-wide">
          *Interface Friends Forever
        </p>

        {/* Subheader */}
        <h3 className="text-xl sm:text-2xl font-anton tracking-wide uppercase text-ink-black pt-2">
          Experience CONFIG together and more.
        </h3>

        {/* Body Paragraphs */}
        <div className="text-xs sm:text-sm text-ink-black/85 leading-relaxed font-sans space-y-3 pt-2 text-justify md:text-center">
          <p>
            On Tuesday June 25, 2024, Interface Friends will have a venue right next to the Moscone Center that allows you to connect together in San Francisco one day before Figma's Config conference begins with 200-300 other designers.
          </p>
          <p>
            You'll get to hang out, meet new friends, listen and participate in design career related talks by special guests, and other fun activities that provide opportunities to network with others.
          </p>
          <p className="font-medium text-ink-black">
            Our goal is to get you connected so you can experience the rest of the week at Config together, with friends. <span className="font-bold underline">Long lasting friends.</span>
          </p>
        </div>

        {/* Hosted By Avatars */}
        <div className="pt-6 flex flex-col items-center gap-2">
          <span className="text-xs font-semibold uppercase text-ink-black/60 tracking-wider">Hosted by:</span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Host 1 */}
            <div className="inline-flex items-center gap-2 bg-white border-2 border-ink-black rounded-full px-3 py-1 text-xs font-bold text-ink-black shadow-brutal-sm">
              <div className="w-5 h-5 rounded-full bg-[#E83F25] flex items-center justify-center text-[10px] text-white">DP</div>
              <span>Dann Petty</span>
              <span className="text-ink-black/40">•</span>
            </div>

            {/* Host 2 */}
            <div className="inline-flex items-center gap-2 bg-white border-2 border-ink-black rounded-full px-3 py-1 text-xs font-bold text-ink-black shadow-brutal-sm">
              <div className="w-5 h-5 rounded-full bg-[#0284C7] flex items-center justify-center text-[10px] text-white">W</div>
              <span>Webflow</span>
              <span className="text-ink-black/40">•</span>
            </div>

            {/* Host 3 */}
            <div className="inline-flex items-center gap-2 bg-[#CBD5E1] border-2 border-ink-black rounded-full px-3 py-1 text-xs font-bold text-ink-black shadow-brutal-sm">
              <div className="w-5 h-5 rounded-full bg-slate-500 flex items-center justify-center text-[10px] text-white">?</div>
              <span>You (Sponsor)</span>
            </div>
          </div>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full max-w-lg mx-auto h-[1.5px] bg-ink-black/20 my-10" />
      </div>
    </header>
  );
};
