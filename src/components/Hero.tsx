import React from 'react';
import { CountdownTimer } from './CountdownTimer';
import { ArrowRight, FileText, Wrench, Globe, Award, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenRegisterModal: () => void;
  onOpenDeckModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegisterModal, onOpenDeckModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 bg-[#F8FAFC] text-slate-900 overflow-hidden border-b border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & Superpowers */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Origin & Edition Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 rounded-md text-xs sm:text-sm font-semibold shadow-xs text-slate-800">
              <span className="text-base">🇮🇳</span>
              <span>India Origin (Techfest IIT Bombay)</span>
              <span className="text-[#0062B8] font-bold">→</span>
              <span className="text-base">🇸🇪</span>
              <span className="text-[#0062B8] font-bold">Nordic Edition</span>
              <span className="text-slate-300">|</span>
              <span className="text-amber-800 font-bold">Västerås 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 leading-[1.15]">
              Build. Create. Compete.{' '}
              <span className="block mt-2 text-[#0062B8] bg-amber-50 px-3.5 py-1 rounded-md border border-amber-200/80 inline-block">
                STEAM Gives You Superpowers! ⚡
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              From <span className="text-[#0062B8] font-bold">Techfest IIT Bombay</span> (1,000+ student participants) to Sweden. Hands-on real physical robotics competition for young innovators aged up to 18.
            </p>

            {/* Superpower Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="bg-rose-50 text-rose-800 font-bold text-xs px-3 py-1 rounded-md border border-rose-200">
                🎨 I CAN CREATE
              </span>
              <span className="bg-amber-50 text-amber-900 font-bold text-xs px-3 py-1 rounded-md border border-amber-200">
                🧩 I CAN SOLVE PROBLEMS
              </span>
              <span className="bg-emerald-50 text-emerald-800 font-bold text-xs px-3 py-1 rounded-md border border-emerald-200">
                🤖 I CAN BUILD
              </span>
              <span className="bg-sky-50 text-sky-800 font-bold text-xs px-3 py-1 rounded-md border border-sky-200">
                💡 I CAN INNOVATE
              </span>
              <span className="bg-orange-50 text-orange-800 font-bold text-xs px-3 py-1 rounded-md border border-orange-200">
                🚀 I CAN IMAGINE
              </span>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-xs">
                <Wrench className="w-4 h-4 text-[#0062B8]" />
                <span>Real Hardware Kits</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-xs">
                <Globe className="w-4 h-4 text-sky-600" />
                <span>No Simulations</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-xs">
                <Award className="w-4 h-4 text-amber-600" />
                <span>SEK Cash Prizes</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>GDPR Safe</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onOpenRegisterModal}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-white bg-[#0062B8] hover:bg-[#00529B] rounded-md transition shadow-sm flex items-center justify-center gap-2 group"
              >
                <span>Register Student (125 SEK)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={onOpenDeckModal}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition shadow-xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Download Rules & Arena Guide</span>
              </button>
            </div>

          </div>

          {/* Right Column: Countdown Card */}
          <div className="lg:col-span-5 space-y-4">
            <CountdownTimer targetDate="2026-03-21T09:00:00" />
          </div>

        </div>

        {/* Ecosystem Partners Grid */}
        <div className="mt-16 pt-10 border-t border-slate-200/80">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
            Organized By & Official Ecosystem Partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-items-center">
            
            <div className="bg-white border border-slate-200 p-4 rounded-md text-center w-full shadow-xs">
              <span className="block font-bold text-sm text-slate-900">INIACO</span>
              <span className="block text-[11px] font-medium text-slate-500">Nordic-Baltic Cluster</span>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded-md text-center w-full shadow-xs">
              <span className="block font-bold text-sm text-[#0062B8]">Indisk BarnKlubb</span>
              <span className="block text-[11px] font-medium text-slate-500">IBK Västerås</span>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded-md text-center w-full shadow-xs">
              <span className="block font-bold text-sm text-slate-900">Blix-A-Thon</span>
              <span className="block text-[11px] font-medium text-slate-500">Technology Partner</span>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded-md text-center w-full shadow-xs">
              <span className="block font-bold text-sm text-[#0062B8]">ABB Venue</span>
              <span className="block text-[11px] font-medium text-slate-500">Västerås Host Venue</span>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded-md text-center w-full shadow-xs col-span-2 md:col-span-1">
              <span className="block font-bold text-xs text-slate-700">Title Sponsor</span>
              <span className="block text-[11px] font-medium text-amber-700">To Be Announced (TBA)</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
