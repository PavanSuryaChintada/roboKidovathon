import React, { useState } from 'react';

export const WowArenaDiagrams: React.FC = () => {
  const [activeDiagram, setActiveDiagram] = useState<'sprint' | 'precision'>('sprint');

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white border-2.5 border-[#111111] shadow-[7px_7px_0px_#111111] p-6 sm:p-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#111111] pb-4 mb-6 gap-3">
          <div>
            <span className="bg-[#0052FF] text-white font-barlow font-black text-xs px-3 py-1 border border-[#111111] uppercase tracking-wider inline-block mb-1">
              ARENA BLUEPRINTS 📐
            </span>
            <h2 className="text-3xl sm:text-5xl font-barlow font-black uppercase text-[#111111] leading-none">
              TECHNICAL ARENA DIAGRAMS
            </h2>
          </div>

          {/* Diagram Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveDiagram('sprint')}
              className={`px-4 py-1.5 font-barlow font-black text-xs uppercase border-2 ${
                activeDiagram === 'sprint'
                  ? 'bg-[#FACC15] text-[#111111] border-[#111111] shadow-[2px_2px_0px_#111111]'
                  : 'bg-transparent text-[#111111] border-transparent hover:border-[#111111]'
              }`}
            >
              ROBO-SPRINT COURT
            </button>

            <button
              onClick={() => setActiveDiagram('precision')}
              className={`px-4 py-1.5 font-barlow font-black text-xs uppercase border-2 ${
                activeDiagram === 'precision'
                  ? 'bg-[#0052FF] text-white border-[#111111] shadow-[2px_2px_0px_#111111]'
                  : 'bg-transparent text-[#111111] border-transparent hover:border-[#111111]'
              }`}
            >
              ROBO-PRECISION TOWER
            </button>
          </div>
        </div>

        {/* Diagram Display Box */}
        {activeDiagram === 'sprint' ? (
          <div className="bg-[#F7F4EC] border-2 border-[#111111] p-6 space-y-4">
            <div className="flex justify-between text-xs font-mono font-bold text-[#111111]/70">
              <span>[ROBO-SPRINT // AIR HOCKEY COURT SPECIFICATION]</span>
              <span>DIMENSIONS: 8 FT × 4 FT</span>
            </div>

            {/* Stylized Air Hockey Court SVG Diagram */}
            <div className="relative w-full overflow-hidden bg-white border-2 border-[#111111] p-4 flex justify-center">
              <svg width="600" height="240" viewBox="0 0 600 240" fill="none" className="w-full h-auto max-w-2xl">
                {/* Court Boundary */}
                <rect x="20" y="20" width="560" height="200" rx="12" fill="#F7F4EC" stroke="#111111" strokeWidth="4" />
                
                {/* Center Divider Line */}
                <line x1="300" y1="20" x2="300" y2="220" stroke="#FF3B00" strokeWidth="4" strokeDasharray="6 6" />
                <circle cx="300" cy="120" r="30" stroke="#FF3B00" strokeWidth="3" fill="none" />

                {/* Team A Court Left */}
                <text x="70" y="50" fontFamily="Barlow Condensed, sans-serif" fontSize="16" fontWeight="bold" fill="#0052FF">
                  TEAM A COURT (5 BALLS START)
                </text>
                <circle cx="80" cy="100" r="10" fill="#0052FF" stroke="#111111" strokeWidth="2" />
                <circle cx="110" cy="120" r="10" fill="#0052FF" stroke="#111111" strokeWidth="2" />
                <circle cx="80" cy="140" r="10" fill="#0052FF" stroke="#111111" strokeWidth="2" />
                <circle cx="140" cy="90" r="10" fill="#0052FF" stroke="#111111" strokeWidth="2" />
                <circle cx="140" cy="150" r="10" fill="#0052FF" stroke="#111111" strokeWidth="2" />

                {/* Robot Trajectory Vectors */}
                <path d="M120 180L270 140" stroke="#0052FF" strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />
                <polygon points="275,138 260,132 265,145" fill="#0052FF" />

                {/* Team B Court Right */}
                <text x="350" y="50" fontFamily="Barlow Condensed, sans-serif" fontSize="16" fontWeight="bold" fill="#FF3B00">
                  TEAM B COURT (5 BALLS START)
                </text>
                <circle cx="520" cy="100" r="10" fill="#FF3B00" stroke="#111111" strokeWidth="2" />
                <circle cx="490" cy="120" r="10" fill="#FF3B00" stroke="#111111" strokeWidth="2" />
                <circle cx="520" cy="140" r="10" fill="#FF3B00" stroke="#111111" strokeWidth="2" />
                <circle cx="460" cy="90" r="10" fill="#FF3B00" stroke="#111111" strokeWidth="2" />
                <circle cx="460" cy="150" r="10" fill="#FF3B00" stroke="#111111" strokeWidth="2" />

                {/* Vector Back */}
                <path d="M480 180L330 140" stroke="#FF3B00" strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />
                <polygon points="325,138 340,132 335,145" fill="#FF3B00" />
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-dmsans text-[#111111]">
              <div className="p-2.5 bg-white border border-[#111111]">
                <strong>BALL CAPACITY:</strong> 10 total match balls (5 per side).
              </div>
              <div className="p-2.5 bg-white border border-[#111111]">
                <strong>ARENA BARRIER:</strong> Low center ridge for puck passing.
              </div>
              <div className="p-2.5 bg-white border border-[#111111]">
                <strong>WIN CONDITION:</strong> Fewest balls in your court at 03:00.
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#F7F4EC] border-2 border-[#111111] p-6 space-y-4">
            <div className="flex justify-between text-xs font-mono font-bold text-[#111111]/70">
              <span>[ROBO-PRECISION // 5-LEVEL TOWER STACKING GRID]</span>
              <span>TARGET HEIGHT: 5 LEVELS</span>
            </div>

            {/* Stylized Cup Stacking Tower SVG Diagram */}
            <div className="relative w-full overflow-hidden bg-white border-2 border-[#111111] p-4 flex justify-center">
              <svg width="400" height="260" viewBox="0 0 400 260" fill="none" className="w-full h-auto max-w-md">
                {/* Level Grid Lines */}
                <line x1="40" y1="210" x2="360" y2="210" stroke="#111111" strokeWidth="4" />
                <line x1="40" y1="170" x2="360" y2="170" stroke="#111111" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="40" y1="130" x2="360" y2="130" stroke="#111111" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="40" y1="90" x2="360" y2="90" stroke="#111111" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="40" y1="50" x2="360" y2="50" stroke="#111111" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Level Labels */}
                <text x="50" y="200" fontFamily="Barlow Condensed, sans-serif" fontSize="12" fontWeight="bold" fill="#0052FF">LEVEL 1</text>
                <text x="50" y="160" fontFamily="Barlow Condensed, sans-serif" fontSize="12" fontWeight="bold" fill="#0052FF">LEVEL 2</text>
                <text x="50" y="120" fontFamily="Barlow Condensed, sans-serif" fontSize="12" fontWeight="bold" fill="#0052FF">LEVEL 3</text>
                <text x="50" y="80" fontFamily="Barlow Condensed, sans-serif" fontSize="12" fontWeight="bold" fill="#0052FF">LEVEL 4</text>
                <text x="50" y="40" fontFamily="Barlow Condensed, sans-serif" fontSize="12" fontWeight="bold" fill="#FF3B00">LEVEL 5 (TOP)</text>

                {/* Stacked Cup Pyramids */}
                {/* Level 1 Base (3 Cups) */}
                <polygon points="150,210 180,210 172,175 158,175" fill="#FF3B00" stroke="#111111" strokeWidth="2" />
                <polygon points="190,210 220,210 212,175 198,175" fill="#FF3B00" stroke="#111111" strokeWidth="2" />
                <polygon points="230,210 260,210 252,175 238,175" fill="#FF3B00" stroke="#111111" strokeWidth="2" />

                {/* Level 2 (2 Cups) */}
                <polygon points="170,170 200,170 192,135 178,135" fill="#FACC15" stroke="#111111" strokeWidth="2" />
                <polygon points="210,170 240,170 232,135 218,135" fill="#FACC15" stroke="#111111" strokeWidth="2" />

                {/* Level 3 (1 Cup) */}
                <polygon points="190,130 220,130 212,95 198,95" fill="#0052FF" stroke="#111111" strokeWidth="2" />

                {/* Crane Arm Target Vector */}
                <path d="M290 40L230 85" stroke="#FF3B00" strokeWidth="3" strokeDasharray="4 4" />
                <circle cx="290" cy="40" r="5" fill="#FF3B00" />
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-dmsans text-[#111111]">
              <div className="p-2.5 bg-white border border-[#111111]">
                <strong>STACK TARGET:</strong> Up to 5 vertical levels.
              </div>
              <div className="p-2.5 bg-white border border-[#111111]">
                <strong>TOUCH RULE:</strong> Zero manual assistance allowed.
              </div>
              <div className="p-2.5 bg-white border border-[#111111]">
                <strong>STABILITY EVALUATION:</strong> Tallest stable tower at 05:00.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
