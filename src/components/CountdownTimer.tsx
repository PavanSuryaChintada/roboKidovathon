import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';

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
    <div className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 text-slate-900 shadow-sm relative">
      
      {/* Header Banner */}
      <div className="flex items-center justify-center gap-2 mb-5 bg-amber-50 text-amber-900 font-bold text-xs sm:text-sm py-2 px-3.5 rounded-md border border-amber-200/80">
        <Clock className="w-4 h-4 text-amber-700" />
        <span>Countdown to Västerås City Finals</span>
      </div>

      {/* 4 Clean Digital Tiles */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 text-center mb-5">
        
        {/* Days Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-md p-3">
          <span className="block text-3xl sm:text-4xl font-extrabold text-[#0062B8] font-display">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs text-slate-500 font-bold tracking-wider uppercase">DAYS</span>
        </div>

        {/* Hours Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-md p-3">
          <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs text-slate-500 font-bold tracking-wider uppercase">HOURS</span>
        </div>

        {/* Mins Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-md p-3">
          <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs text-slate-500 font-bold tracking-wider uppercase">MINS</span>
        </div>

        {/* Secs Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-md p-3">
          <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs text-slate-500 font-bold tracking-wider uppercase">SECS</span>
        </div>

      </div>

      {/* Bottom Event Badge Pill */}
      <div className="bg-slate-50 text-slate-900 rounded-md p-3 border border-slate-200 flex items-center justify-between text-xs font-bold">
        <div className="flex items-center gap-2 text-slate-700">
          <MapPin className="w-4 h-4 text-[#0062B8]" />
          <span>ABB Venue, Västerås</span>
          <span className="text-slate-300">|</span>
          <Calendar className="w-4 h-4 text-slate-500" />
          <span>21 March 2026</span>
        </div>
        <span className="bg-[#0062B8] text-white px-2.5 py-0.5 rounded font-bold text-[11px]">
          125 SEK
        </span>
      </div>

    </div>
  );
};
