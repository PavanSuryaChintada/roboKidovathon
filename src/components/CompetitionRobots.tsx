import React from 'react';

/**
 * Hero Main Competition Robot (Engineered chassis, wheels, mechanical arms, sensors, graphic labels)
 */
export const HeroRobot: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-block ${className}`}>
    <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[8px_10px_0px_#111111]">
      {/* Top Antenna */}
      <path d="M170 45V15" stroke="#111111" strokeWidth="6" strokeLinecap="round" />
      <circle cx="170" cy="12" r="9" fill="#FF3B00" stroke="#111111" strokeWidth="4" />

      {/* Robot Head (Yellow Box with Metallic Bezel) */}
      <rect x="95" y="45" width="150" height="100" rx="14" fill="#FACC15" stroke="#111111" strokeWidth="5" />
      {/* Inner Screen Display (Dark Blue) */}
      <rect x="110" y="60" width="120" height="70" rx="8" fill="#111111" stroke="#111111" strokeWidth="3" />
      {/* LED Eyes (Cyan/Electric Blue Glowing Expression) */}
      <circle cx="142" cy="90" r="12" fill="#0052FF" stroke="white" strokeWidth="2.5" />
      <circle cx="140" cy="87" r="4" fill="white" />
      <circle cx="198" cy="90" r="12" fill="#0052FF" stroke="white" strokeWidth="2.5" />
      <circle cx="196" cy="87" r="4" fill="white" />
      {/* Friendly Digital Smile Grid */}
      <path d="M152 112H188" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" />

      {/* Neck Joint Springs */}
      <rect x="150" y="145" width="40" height="15" fill="#CBD5E1" stroke="#111111" strokeWidth="4" />

      {/* Main Body Chassis (Electric Blue Base with Motors) */}
      <rect x="75" y="160" width="190" height="110" rx="16" fill="#0052FF" stroke="#111111" strokeWidth="5" />

      {/* Chest Battery / Power Cell Indicator */}
      <rect x="105" y="180" width="130" height="50" rx="6" fill="#F7F4EC" stroke="#111111" strokeWidth="3.5" />
      <rect x="115" y="192" width="22" height="26" fill="#FF3B00" stroke="#111111" strokeWidth="2" />
      <rect x="143" y="192" width="22" height="26" fill="#FACC15" stroke="#111111" strokeWidth="2" />
      <rect x="171" y="192" width="22" height="26" fill="#059669" stroke="#111111" strokeWidth="2" />
      <rect x="199" y="192" width="22" height="26" fill="#0052FF" stroke="#111111" strokeWidth="2" />

      {/* Mechanical Arms (Left Claw & Right Sensor Tool) */}
      {/* Left Arm */}
      <path d="M75 190L35 200L20 230" stroke="#111111" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M12 225L32 235M12 235L32 225" stroke="#FF3B00" strokeWidth="5" strokeLinecap="round" />

      {/* Right Arm */}
      <path d="M265 190L305 200L320 225" stroke="#111111" strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="320" cy="225" r="10" fill="#FACC15" stroke="#111111" strokeWidth="3.5" />

      {/* Heavy Tank Treads / Wheels Base */}
      <rect x="50" y="270" width="240" height="45" rx="22" fill="#111111" stroke="#111111" strokeWidth="5" />
      {/* Tread Wheels */}
      <circle cx="80" cy="292.5" r="14" fill="#F7F4EC" stroke="#111111" strokeWidth="3" />
      <circle cx="125" cy="292.5" r="14" fill="#F7F4EC" stroke="#111111" strokeWidth="3" />
      <circle cx="170" cy="292.5" r="14" fill="#F7F4EC" stroke="#111111" strokeWidth="3" />
      <circle cx="215" cy="292.5" r="14" fill="#F7F4EC" stroke="#111111" strokeWidth="3" />
      <circle cx="260" cy="292.5" r="14" fill="#F7F4EC" stroke="#111111" strokeWidth="3" />
    </svg>
  </div>
);

/**
 * Robo-Sprint Ball-Passing Competition Bot (Junior Category)
 */
export const RoboSprintBot: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-block ${className}`}>
    <div className="absolute -top-4 -right-4 z-10 bg-[#FACC15] text-[#111111] font-barlow font-black text-xs px-2.5 py-0.5 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] rotate-3">
      3 MIN SPRINT ⚡
    </div>

    <svg width="260" height="240" viewBox="0 0 260 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[6px_7px_0px_#111111]">
      {/* Yellow Fast Shooter Body */}
      <rect x="40" y="40" width="180" height="120" rx="18" fill="#FACC15" stroke="#111111" strokeWidth="5" />
      
      {/* Face Screen */}
      <rect x="60" y="55" width="140" height="60" rx="8" fill="#111111" />
      <circle cx="95" cy="85" r="8" fill="#FF3B00" />
      <circle cx="165" cy="85" r="8" fill="#FF3B00" />
      <path d="M115 95H145" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" />

      {/* Ball Shooter Barrel Front */}
      <rect x="100" y="125" width="60" height="25" fill="#FF3B00" stroke="#111111" strokeWidth="4" />
      {/* Ball Puck */}
      <circle cx="130" cy="165" r="16" fill="#0052FF" stroke="#111111" strokeWidth="4" />

      {/* Quick Rolling Wheels */}
      <circle cx="65" cy="180" r="22" fill="#111111" stroke="#111111" strokeWidth="4" />
      <circle cx="65" cy="180" r="8" fill="#F7F4EC" />
      <circle cx="195" cy="180" r="22" fill="#111111" stroke="#111111" strokeWidth="4" />
      <circle cx="195" cy="180" r="8" fill="#F7F4EC" />
    </svg>
  </div>
);

/**
 * Robo-Precision Cup-Stacking Crane Bot (Senior Category)
 */
export const RoboPrecisionBot: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-block ${className}`}>
    <div className="absolute -top-4 -left-4 z-10 bg-[#0052FF] text-white font-barlow font-black text-xs px-2.5 py-0.5 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] -rotate-3">
      5 MIN TOWER 🏆
    </div>

    <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[6px_7px_0px_#111111]">
      {/* Crane Arm Extended Upwards */}
      <path d="M170 120L195 40L230 30" stroke="#111111" strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* Cup Grabber Claw */}
      <path d="M220 20L240 35L225 50" stroke="#FF3B00" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* Stacked Cup Target (Red Cup) */}
      <path d="M210 60L245 60L238 95L217 95Z" fill="#FF3B00" stroke="#111111" strokeWidth="3.5" />

      {/* Main Heavy Body (Electric Blue) */}
      <rect x="40" y="110" width="160" height="95" rx="14" fill="#0052FF" stroke="#111111" strokeWidth="5" />
      
      {/* Screen */}
      <rect x="55" y="125" width="130" height="45" rx="6" fill="#111111" />
      <circle cx="85" cy="147" r="7" fill="#FACC15" />
      <circle cx="155" cy="147" r="7" fill="#FACC15" />
      <path d="M105 152H135" stroke="#0052FF" strokeWidth="3" strokeLinecap="round" />

      {/* Heavy Base Support */}
      <rect x="30" y="205" width="180" height="30" rx="8" fill="#111111" />
      <circle cx="60" cy="220" r="10" fill="#F7F4EC" />
      <circle cx="120" cy="220" r="10" fill="#F7F4EC" />
      <circle cx="180" cy="220" r="10" fill="#F7F4EC" />
    </svg>
  </div>
);

/**
 * Victorious Champion Robot (Final CTA Section)
 */
export const VictoryRobot: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-block ${className}`}>
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 bg-[#FF3B00] text-white font-barlow font-black text-xs md:text-sm px-3 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] rotate-2">
      WINNER PODIUM 🥇
    </div>

    <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[7px_9px_0px_#111111]">
      {/* Trophy Held High */}
      <path d="M140 20L165 55H115L140 20Z" fill="#FACC15" stroke="#111111" strokeWidth="4" />
      <rect x="132" y="55" width="16" height="20" fill="#111111" />
      <rect x="120" y="75" width="40" height="15" fill="#FACC15" stroke="#111111" strokeWidth="3" />

      {/* Robot Arms Up */}
      <path d="M70 140L100 80L125 75" stroke="#111111" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M210 140L180 80L155 75" stroke="#111111" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* Main Body Chassis (Yellow & Blue) */}
      <rect x="65" y="130" width="150" height="100" rx="16" fill="#FACC15" stroke="#111111" strokeWidth="5" />
      
      {/* Cheerful Screen Face */}
      <rect x="85" y="145" width="110" height="55" rx="8" fill="#111111" />
      <circle cx="110" cy="170" r="8" fill="#0052FF" />
      <circle cx="170" cy="170" r="8" fill="#0052FF" />
      <path d="M125 185C132 192 148 192 155 185" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Base Wheels */}
      <rect x="50" y="230" width="180" height="30" rx="15" fill="#111111" stroke="#111111" strokeWidth="4" />
      <circle cx="85" cy="245" r="9" fill="#F7F4EC" />
      <circle cx="140" cy="245" r="9" fill="#F7F4EC" />
      <circle cx="195" cy="245" r="9" fill="#F7F4EC" />
    </svg>
  </div>
);
