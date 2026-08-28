import { useState, useEffect } from 'react';

interface TimeRemaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isExpired: boolean;
}

export const useCountdown = (targetDate?: Date | string): TimeRemaining => {
  // If targetDate is provided, use it; otherwise or if in past, default to a robust future tournament target
  const getTargetTimestamp = (): number => {
    if (targetDate) {
      const parsed = new Date(targetDate).getTime();
      if (parsed > Date.now()) return parsed;
    }
    // Default fallback: 45 days, 8 hours from now
    return Date.now() + (45 * 24 * 60 * 60 * 1000) + (8 * 60 * 60 * 1000);
  };

  const [targetTimestamp] = useState<number>(getTargetTimestamp);

  const calculateTime = (): TimeRemaining => {
    const now = Date.now();
    const diff = targetTimestamp - now;

    if (diff <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00', isExpired: true };
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    return {
      days: d.toString().padStart(2, '0'),
      hours: h.toString().padStart(2, '0'),
      minutes: m.toString().padStart(2, '0'),
      seconds: s.toString().padStart(2, '0'),
      isExpired: false,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTimestamp]);

  return timeRemaining;
};
