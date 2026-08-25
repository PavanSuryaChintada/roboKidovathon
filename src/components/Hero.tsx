import React from 'react';
import { CountdownTimer } from './CountdownTimer';
import { ArrowRight, FileText, Wrench, Globe, Award, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenRegisterModal: () => void;
  onOpenDeckModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegisterModal, onOpenDeckModal }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Editorial Header Mark */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold text-blue-900 shadow-2xs">
              <span>🇮🇳 Techfest IIT Bombay Origin</span>
              <span className="text-blue-400">•</span>
              <span className="text-[#0062B8] font-bold">🇸🇪 Nordic Edition · Västerås 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Build. Create. Compete.{' '}
              <span className="block mt-2 text-[#0062B8]">
                The National STEM Robotics League.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              From <strong className="text-slate-900 font-bold">Techfest IIT Bombay</strong> (1,000+ student participants) to Sweden. Real physical robotics competition for young innovators aged 6–18.
            </p>

            {/* Key Specs Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2 rounded border border-slate-200 bg-slate-50 p-2.5">
                <Wrench className="w-4 h-4 text-[#0062B8] shrink-0" />
                <span>Real Kits Only</span>
              </div>
              <div className="flex items-center gap-2 rounded border border-slate-200 bg-slate-50 p-2.5">
                <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No Simulations</span>
              </div>
              <div className="flex items-center gap-2 rounded border border-slate-200 bg-slate-50 p-2.5">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Cash Prizes</span>
              </div>
              <div className="flex items-center gap-2 rounded border border-slate-200 bg-slate-50 p-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>GDPR Aligned</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <button
                onClick={onOpenRegisterModal}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-white bg-[#0062B8] hover:bg-[#00529B] rounded-md transition shadow-sm flex items-center justify-center gap-2 group"
              >
                <span>Register Student (125 SEK)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenDeckModal}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-md transition shadow-2xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Rules &amp; Arena Guide</span>
              </button>
            </div>

          </div>

          {/* Right Column: Telemetry Countdown Card */}
          <div className="lg:col-span-5 space-y-4">
            <CountdownTimer targetDate="2026-03-21T09:00:00" />
          </div>

        </div>

        {/* Ecosystem Partners Grid */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Organized By &amp; Official Ecosystem Partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-items-center">
            
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-md text-center w-full shadow-2xs">
              <span className="block font-bold text-xs text-slate-900">INIACO</span>
              <span className="block text-[10px] font-semibold text-slate-500">Nordic-Baltic Cluster</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-md text-center w-full shadow-2xs">
              <span className="block font-bold text-xs text-[#0062B8]">Indisk BarnKlubb</span>
              <span className="block text-[10px] font-semibold text-slate-500">IBK Västerås</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-md text-center w-full shadow-2xs">
              <span className="block font-bold text-xs text-slate-900">Blix-A-Thon</span>
              <span className="block text-[10px] font-semibold text-slate-500">Technology Partner</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-md text-center w-full shadow-2xs">
              <span className="block font-bold text-xs text-[#0062B8]">ABB Venue</span>
              <span className="block text-[10px] font-semibold text-slate-500">Västerås Host Venue</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-md text-center w-full shadow-2xs col-span-2 md:col-span-1">
              <span className="block font-bold text-xs text-slate-700">Title Sponsor</span>
              <span className="block text-[10px] font-semibold text-amber-600">To Be Announced (TBA)</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
