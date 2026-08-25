import React from 'react';

/**
 * Top Left Character: Purple Gamepad Helmet with Orange Face
 */
export const PurpleGamepadHelmet: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-block transition-transform duration-300 hover:scale-105 ${className}`}>
    <svg width="240" height="200" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[4px_6px_0px_#111111]">
      {/* Outer Purple Bowl Helmet */}
      <path
        d="M30 110C30 50 70 20 120 20C170 20 210 50 210 110C210 145 185 175 145 180H95C55 175 30 145 30 110Z"
        fill="#3B3789"
        stroke="#111111"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      {/* Inner Orange Screen Face */}
      <ellipse cx="120" cy="110" rx="65" ry="45" fill="#F58220" stroke="#111111" strokeWidth="4" />
      {/* Gloss Highlight on Screen */}
      <path d="M75 95C85 80 110 75 135 76" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      
      {/* Cute Eyes & Smile */}
      {/* Left Eye */}
      <circle cx="100" cy="108" r="6" fill="#111111" />
      <circle cx="98" cy="105" r="2.5" fill="white" />
      {/* Right Eye */}
      <circle cx="140" cy="108" r="6" fill="#111111" />
      <circle cx="138" cy="105" r="2.5" fill="white" />
      {/* Rosy Cheeks */}
      <ellipse cx="88" cy="118" rx="6" ry="4" fill="#E83F25" opacity="0.8" />
      <ellipse cx="152" cy="118" rx="6" ry="4" fill="#E83F25" opacity="0.8" />
      {/* Cute Mouth */}
      <path d="M112 118C115 123 125 123 128 118" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Left Ear / Cyan Button Module */}
      <rect x="12" y="85" width="22" height="40" rx="8" fill="#00A896" stroke="#111111" strokeWidth="4" />
      <line x1="16" y1="95" x2="28" y2="95" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
      <line x1="16" y1="105" x2="28" y2="105" stroke="#111111" strokeWidth="3" strokeLinecap="round" />

      {/* Right Ear / Cyan Button Module */}
      <rect x="206" y="85" width="22" height="40" rx="8" fill="#00A896" stroke="#111111" strokeWidth="4" />
      <line x1="210" y1="95" x2="222" y2="95" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
      <line x1="210" y1="105" x2="222" y2="105" stroke="#111111" strokeWidth="3" strokeLinecap="round" />

      {/* Red D-Pad on Left Helmet Rim */}
      <path d="M50 142H64M57 135V149" stroke="#E83F25" strokeWidth="5" strokeLinecap="round" />

      {/* Blue Action Buttons on Right Rim */}
      <circle cx="178" cy="140" r="4" fill="#0284C7" stroke="#111111" strokeWidth="2" />
      <circle cx="188" cy="148" r="4" fill="#E83F25" stroke="#111111" strokeWidth="2" />
    </svg>
  </div>
);

/**
 * Top Center Character: Retro CRT Monitor with WINK >>> header banner
 */
export const CrtWinkMonitor: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-block transition-transform duration-300 hover:scale-105 ${className}`}>
    <svg width="250" height="230" viewBox="0 0 250 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[5px_7px_0px_#111111]">
      {/* Top Banner "WINK >>>" */}
      <g transform="translate(45, 10)">
        <rect x="0" y="0" width="110" height="26" rx="4" fill="#F58220" stroke="#111111" strokeWidth="3.5" />
        <text x="14" y="18" fontFamily="Anton, sans-serif" fontSize="15" fill="#111111" letterSpacing="1">
          WINK &gt;&gt;&gt;
        </text>
      </g>

      {/* Main CRT Body (Beige/Cyan Tint) */}
      <rect x="35" y="32" width="165" height="150" rx="20" fill="#E4ECEE" stroke="#111111" strokeWidth="4.5" />

      {/* Red Bezel Frame */}
      <rect x="52" y="48" width="110" height="105" rx="14" fill="#E83F25" stroke="#111111" strokeWidth="4" />

      {/* Orange Screen Face */}
      <rect x="62" y="58" width="90" height="85" rx="10" fill="#FFA726" stroke="#111111" strokeWidth="3" />

      {/* Winking Face */}
      {/* Left Winking Eye */}
      <path d="M78 90L92 98L78 106" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Right Open Eye */}
      <circle cx="126" cy="98" r="7" fill="#111111" />
      <circle cx="124" cy="95" r="2.5" fill="white" />
      {/* Rosy Cheek Right */}
      <ellipse cx="134" cy="110" rx="5" ry="3" fill="#E83F25" />
      {/* Cute Smile */}
      <path d="M96 118C102 125 114 125 120 118" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Right Knob & Dials */}
      <circle cx="182" cy="75" r="12" fill="#F58220" stroke="#111111" strokeWidth="3.5" />
      <circle cx="182" cy="75" r="4" fill="#111111" />
      
      {/* Lower Front Vent Grille Dots */}
      <circle cx="60" cy="166" r="3" fill="#111111" />
      <circle cx="72" cy="166" r="3" fill="#111111" />
      <circle cx="84" cy="166" r="3" fill="#111111" />

      {/* Monitor Feet */}
      <rect x="65" y="182" width="25" height="12" rx="4" fill="#CBD5E1" stroke="#111111" strokeWidth="3" />
      <rect x="145" y="182" width="25" height="12" rx="4" fill="#CBD5E1" stroke="#111111" strokeWidth="3" />
    </svg>
  </div>
);

/**
 * Top Right Character: Yellow Foldable GamePad / Gadget
 */
export const YellowFoldableGameboy: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-block transition-transform duration-300 hover:scale-105 ${className}`}>
    <svg width="220" height="230" viewBox="0 0 220 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[5px_7px_0px_#111111]">
      {/* Upper Flip Screen (Angled) */}
      <g transform="translate(45, 15) rotate(12)">
        <rect x="0" y="0" width="115" height="100" rx="14" fill="#FFA726" stroke="#111111" strokeWidth="4.5" />
        {/* Screen */}
        <rect x="15" y="15" width="85" height="70" rx="8" fill="#00A896" stroke="#111111" strokeWidth="3.5" />
        {/* Happy Face */}
        <path d="M35 48C38 42 46 42 49 48" stroke="#111111" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M66 48C69 42 77 42 80 48" stroke="#111111" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M50 62C55 68 62 68 67 62" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Speaker Slits */}
        <line x1="8" y1="20" x2="8" y2="40" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
        <line x1="8" y1="50" x2="8" y2="70" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Lower Controls Deck */}
      <g transform="translate(40, 115)">
        <rect x="0" y="0" width="125" height="95" rx="14" fill="#FFA726" stroke="#111111" strokeWidth="4.5" />
        {/* Red Buttons Grid */}
        <rect x="55" y="18" width="18" height="16" rx="4" fill="#E83F25" stroke="#111111" strokeWidth="2.5" />
        <rect x="78" y="18" width="18" height="16" rx="4" fill="#E83F25" stroke="#111111" strokeWidth="2.5" />
        <rect x="101" y="18" width="18" height="16" rx="4" fill="#E83F25" stroke="#111111" strokeWidth="2.5" />
        <rect x="55" y="39" width="18" height="16" rx="4" fill="#E83F25" stroke="#111111" strokeWidth="2.5" />
        <rect x="78" y="39" width="18" height="16" rx="4" fill="#E83F25" stroke="#111111" strokeWidth="2.5" />
        <rect x="101" y="39" width="18" height="16" rx="4" fill="#E83F25" stroke="#111111" strokeWidth="2.5" />
        {/* Joystick on Left */}
        <circle cx="28" cy="62" r="14" fill="#E83F25" stroke="#111111" strokeWidth="3.5" />
        <rect x="25" y="32" width="6" height="18" rx="2" fill="#111111" />
      </g>
    </svg>
  </div>
);

/**
 * Middle Left Character: Red Retro Laptop with Cute Face & USB Tail Key
 */
export const RedRetroLaptop: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-block transition-transform duration-300 hover:scale-105 ${className}`}>
    <svg width="320" height="260" viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[6px_8px_0px_#111111]">
      {/* Screen Lid (Top Half) */}
      <rect x="40" y="20" width="210" height="150" rx="16" fill="#F23827" stroke="#111111" strokeWidth="4.5" />
      
      {/* Screen Display (Teal Fill) */}
      <rect x="56" y="34" width="178" height="122" rx="10" fill="#00C4CC" stroke="#111111" strokeWidth="3.5" />

      {/* Cute Eyes & Smile on Screen */}
      <circle cx="115" cy="85" r="8" fill="#111111" />
      <circle cx="112" cy="82" r="3" fill="white" />
      <circle cx="175" cy="85" r="8" fill="#111111" />
      <circle cx="172" cy="82" r="3" fill="white" />
      {/* Smile */}
      <path d="M135 102C140 110 150 110 155 102" stroke="#111111" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Cute Cheeks */}
      <ellipse cx="98" cy="98" rx="7" ry="4" fill="#F58220" />
      <ellipse cx="192" cy="98" rx="7" ry="4" fill="#F58220" />

      {/* Keyboard Base Deck (Bottom Half - Angled 3D feel) */}
      <path d="M20 170H270L240 240H50L20 170Z" fill="#F23827" stroke="#111111" strokeWidth="4.5" strokeLinejoin="round" />

      {/* Yellow Keyboard Grid */}
      <path d="M45 178H245L228 215H62L45 178Z" fill="#FFA726" stroke="#111111" strokeWidth="3" />
      {/* Keys lines */}
      <line x1="75" y1="178" x2="88" y2="215" stroke="#111111" strokeWidth="2.5" />
      <line x1="110" y1="178" x2="120" y2="215" stroke="#111111" strokeWidth="2.5" />
      <line x1="145" y1="178" x2="152" y2="215" stroke="#111111" strokeWidth="2.5" />
      <line x1="180" y1="178" x2="182" y2="215" stroke="#111111" strokeWidth="2.5" />
      <line x1="215" y1="178" x2="210" y2="215" stroke="#111111" strokeWidth="2.5" />

      {/* Trackpad */}
      <rect x="110" y="219" width="70" height="16" rx="3" fill="#B91C1C" stroke="#111111" strokeWidth="2.5" />

      {/* Yellow USB Key Stick plugged into Right Side */}
      <g transform="translate(265, 200)">
        <rect x="0" y="0" width="26" height="16" rx="4" fill="#FFA726" stroke="#111111" strokeWidth="3" />
        <rect x="-8" y="4" width="8" height="8" fill="#CBD5E1" stroke="#111111" strokeWidth="2" />
      </g>
    </svg>
  </div>
);

/**
 * Form Right Character: Green Flip Phone hanging on Notification Card
 */
export const GreenFlipPhone: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-block transition-transform duration-300 hover:scale-105 ${className}`}>
    <svg width="180" height="260" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[5px_7px_0px_#111111]">
      {/* Antenna */}
      <path d="M70 25V5" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="70" cy="5" r="7" fill="#FFA726" stroke="#111111" strokeWidth="3" />

      {/* Main Green Phone Body */}
      <rect x="40" y="25" width="90" height="200" rx="18" fill="#005F4B" stroke="#111111" strokeWidth="4.5" />

      {/* Attached Red Side Module (Right Side) */}
      <rect x="125" y="45" width="30" height="80" rx="10" fill="#F23827" stroke="#111111" strokeWidth="4" />
      <circle cx="140" cy="65" r="6" fill="#FFA726" stroke="#111111" strokeWidth="2.5" />
      <circle cx="140" cy="85" r="6" fill="#00A896" stroke="#111111" strokeWidth="2.5" />

      {/* Teal Screen Display */}
      <rect x="52" y="45" width="66" height="70" rx="10" fill="#00C4CC" stroke="#111111" strokeWidth="3.5" />

      {/* Cute Eyes looking Left */}
      <circle cx="70" cy="75" r="6" fill="#111111" />
      <circle cx="68" cy="73" r="2" fill="white" />
      <circle cx="94" cy="75" r="6" fill="#111111" />
      <circle cx="92" cy="73" r="2" fill="white" />
      <path d="M76 90C80 94 86 94 90 90" stroke="#111111" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Yellow Button Keypad Matrix */}
      <rect x="52" y="130" width="18" height="16" rx="4" fill="#FFA726" stroke="#111111" strokeWidth="2.5" />
      <rect x="76" y="130" width="18" height="16" rx="4" fill="#FFA726" stroke="#111111" strokeWidth="2.5" />
      <rect x="100" y="130" width="18" height="16" rx="4" fill="#FFA726" stroke="#111111" strokeWidth="2.5" />

      <rect x="52" y="152" width="18" height="16" rx="4" fill="#FFA726" stroke="#111111" strokeWidth="2.5" />
      <rect x="76" y="152" width="18" height="16" rx="4" fill="#F23827" stroke="#111111" strokeWidth="2.5" />
      <rect x="100" y="152" width="18" height="16" rx="4" fill="#FFA726" stroke="#111111" strokeWidth="2.5" />

      <rect x="52" y="174" width="18" height="16" rx="4" fill="#FFA726" stroke="#111111" strokeWidth="2.5" />
      <rect x="76" y="174" width="18" height="16" rx="4" fill="#FFA726" stroke="#111111" strokeWidth="2.5" />
      <rect x="100" y="174" width="18" height="16" rx="4" fill="#FFA726" stroke="#111111" strokeWidth="2.5" />

      {/* Bottom Joystick Lever */}
      <path d="M50 205L30 220" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
      <circle cx="28" cy="222" r="6" fill="#F23827" stroke="#111111" strokeWidth="2.5" />
    </svg>
  </div>
);

/**
 * Bottom Row Characters Quad (Peeking from bottom)
 */
export const BottomGadgetQuad: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-end justify-center gap-4 md:gap-10 overflow-hidden pt-6 ${className}`}>
    {/* Gadget 1: Purple Helmet Small */}
    <div className="transform translate-y-6 transition-transform duration-300 hover:translate-y-2">
      <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
        <path d="M15 60C15 25 38 10 60 10C82 10 105 25 105 60V90H15V60Z" fill="#3B3789" stroke="#111111" strokeWidth="3.5" />
        <ellipse cx="60" cy="55" rx="32" ry="22" fill="#FFA726" stroke="#111111" strokeWidth="2.5" />
        <circle cx="50" cy="52" r="3.5" fill="#111111" />
        <circle cx="70" cy="52" r="3.5" fill="#111111" />
        <path d="M56 60C58 63 62 63 64 60" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>

    {/* Gadget 2: Cyan Phone */}
    <div className="transform translate-y-4 transition-transform duration-300 hover:translate-y-0">
      <svg width="110" height="120" viewBox="0 0 110 120" fill="none">
        <rect x="15" y="15" width="80" height="100" rx="14" fill="#0284C7" stroke="#111111" strokeWidth="3.5" />
        <rect x="25" y="25" width="60" height="50" rx="8" fill="#FFA726" stroke="#111111" strokeWidth="2.5" />
        <circle cx="43" cy="48" r="4" fill="#111111" />
        <circle cx="67" cy="48" r="4" fill="#111111" />
        <path d="M50 58C55 64 60 64 65 58" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Ears */}
        <circle cx="10" cy="15" r="6" fill="#F23827" stroke="#111111" strokeWidth="2.5" />
        <circle cx="100" cy="15" r="6" fill="#F23827" stroke="#111111" strokeWidth="2.5" />
      </svg>
    </div>

    {/* Gadget 3: Yellow Watch */}
    <div className="transform translate-y-5 transition-transform duration-300 hover:translate-y-1">
      <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
        <rect x="20" y="20" width="70" height="70" rx="16" fill="#FFA726" stroke="#111111" strokeWidth="3.5" />
        <rect x="30" y="30" width="50" height="50" rx="10" fill="#00A896" stroke="#111111" strokeWidth="2.5" />
        <circle cx="45" cy="52" r="3.5" fill="#111111" />
        <circle cx="65" cy="52" r="3.5" fill="#111111" />
        <path d="M51 60C54 64 58 64 61 60" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Antenna */}
        <path d="M55 20V8" stroke="#111111" strokeWidth="3" />
        <circle cx="55" cy="6" r="4" fill="#F23827" stroke="#111111" strokeWidth="2" />
      </svg>
    </div>

    {/* Gadget 4: Green Console / Camera */}
    <div className="transform translate-y-6 transition-transform duration-300 hover:translate-y-2">
      <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
        <rect x="15" y="15" width="90" height="80" rx="14" fill="#059669" stroke="#111111" strokeWidth="3.5" />
        <rect x="28" y="25" width="64" height="45" rx="8" fill="#FFA726" stroke="#111111" strokeWidth="2.5" />
        <circle cx="46" cy="46" r="4" fill="#111111" />
        <circle cx="74" cy="46" r="4" fill="#111111" />
        <path d="M54 55C58 60 62 60 66 55" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Stylus on right */}
        <line x1="108" y1="20" x2="98" y2="40" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  </div>
);
