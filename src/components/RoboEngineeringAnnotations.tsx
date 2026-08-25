import React from 'react';

export const TechnicalRegistrationCrosshair: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center justify-center w-6 h-6 border border-[#111111]/30 font-mono text-[10px] text-[#111111]/50 ${className}`}>
    ┼
  </div>
);

export const TechNoteBadge: React.FC<{
  label: string;
  value: string;
  color?: 'yellow' | 'blue' | 'red' | 'dark';
  className?: string;
}> = ({ label, value, color = 'dark', className = '' }) => {
  const bgStyles = {
    yellow: 'bg-[#FACC15] text-[#111111]',
    blue: 'bg-[#0052FF] text-white',
    red: 'bg-[#FF3B00] text-white',
    dark: 'bg-[#111111] text-[#FACC15]',
  }[color];

  return (
    <div className={`inline-flex items-center gap-1.5 border-1.5 border-[#111111] px-2 py-0.5 text-xs font-barlow font-bold shadow-[2px_2px_0px_#111111] select-none ${bgStyles} ${className}`}>
      <span className="opacity-75 uppercase tracking-wider">{label}:</span>
      <span className="font-extrabold uppercase">{value}</span>
    </div>
  );
};

export const TechnicalDiagramLines: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none opacity-40 ${className}`}>
    <svg width="100%" height="24" viewBox="0 0 200 24" fill="none">
      <path d="M0 12H180M180 12L190 4M180 12L190 20" stroke="#111111" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="20" cy="12" r="3" fill="#111111" />
      <circle cx="100" cy="12" r="3" fill="#111111" />
    </svg>
  </div>
);
