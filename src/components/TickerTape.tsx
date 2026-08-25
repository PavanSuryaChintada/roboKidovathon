import React from 'react';

interface TickerTapeProps {
  items?: string[];
  className?: string;
}

export const TickerTape: React.FC<TickerTapeProps> = ({
  items = [
    'DETAILS COMING SOON',
    'REGISTER TO GET NOTIFIED',
    'DETAILS COMING SOON',
    'REGISTER TO GET NOTIFIED',
    'JUNE 25 2024',
    'SAN FRANCISCO, CA',
  ],
  className = '',
}) => {
  const repeatedText = Array(8).fill(items).flat();

  return (
    <div className={`relative w-full overflow-hidden z-20 my-4 py-1.5 bg-white border-y-2 border-ink-black -rotate-1 md:-rotate-2 transform scale-105 shadow-sm ${className}`}>
      <div className="animate-marquee whitespace-nowrap flex items-center gap-6">
        {repeatedText.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 text-xs md:text-sm font-bold tracking-widest text-ink-black font-sans uppercase">
            <span>{item}</span>
            <span className="inline-block w-2 h-2 rounded-full fill-ink-black bg-ink-black opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
};
