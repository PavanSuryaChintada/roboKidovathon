import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Calendar, Sparkles } from 'lucide-react';

interface CountdownTimerProps {
  targetDate?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate = '2026-03-21T09:00:00',
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-5 sm:p-6 text-white shadow-xl relative overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header Banner */}
      <div className="flex items-center justify-between gap-2 mb-5 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Västerås City Finals Countdown
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded">
          <Sparkles className="w-3 h-3" />
          Live Telemetry
        </span>
      </div>

      {/* 4 Dark Stat Columns */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3 text-center mb-5">
        
        {/* Days */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-md p-3">
          <span className="block text-2xl sm:text-3xl font-black text-white">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">DAYS</span>
        </div>

        {/* Hours */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-md p-3">
          <span className="block text-2xl sm:text-3xl font-black text-amber-400">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">HOURS</span>
        </div>

        {/* Mins */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-md p-3">
          <span className="block text-2xl sm:text-3xl font-black text-sky-400">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">MINS</span>
        </div>

        {/* Secs */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-md p-3">
          <span className="block text-2xl sm:text-3xl font-black text-emerald-400">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">SECS</span>
        </div>

      </div>

      {/* Bottom Event Info Strip */}
      <div className="bg-slate-950/90 text-slate-300 rounded-md p-3 border border-slate-800 flex flex-wrap items-center justify-between text-xs font-semibold gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1 text-slate-200">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            ABB Venue, Västerås
          </span>
          <span className="text-slate-700">•</span>
          <span className="flex items-center gap-1 text-slate-200">
            <Calendar className="w-3.5 h-3.5 text-sky-400" />
            21 March 2026
          </span>
        </div>
        <span className="bg-blue-600/20 text-sky-300 border border-blue-500/30 px-2.5 py-0.5 rounded font-bold text-[11px]">
          125 SEK / Student
        </span>
      </div>

    </div>
  );
};
