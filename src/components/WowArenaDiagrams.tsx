import React, { useState } from 'react';

export const WowArenaDiagrams: React.FC = () => {
  const [activeDiagram, setActiveDiagram] = useState<'sprint' | 'precision'>('sprint');

  return (
    <section className="w-full bg-white text-[#0B1020] py-20 md:py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="card-editorial p-6 sm:p-10 border border-slate-200">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-5 mb-8 gap-3">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-1">
                07 // ARENA BLUEPRINTS 📐
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0B1020] text-balance">
                Technical Arena Diagrams
              </h2>
            </div>

            {/* Toggle Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveDiagram('sprint')}
                className={`px-4 py-2 font-semibold text-xs uppercase rounded-md border transition-all ${
                  activeDiagram === 'sprint'
                    ? 'bg-[#0052FF] text-white border-[#0052FF]'
                    : 'bg-white text-[#334155] border-slate-300 hover:border-slate-400'
                }`}
              >
                ROBO-SPRINT COURT
              </button>

              <button
                onClick={() => setActiveDiagram('precision')}
                className={`px-4 py-2 font-semibold text-xs uppercase rounded-md border transition-all ${
                  activeDiagram === 'precision'
                    ? 'bg-[#0052FF] text-white border-[#0052FF]'
                    : 'bg-white text-[#334155] border-slate-300 hover:border-slate-400'
                }`}
              >
                ROBO-PRECISION TOWER
              </button>
            </div>
          </div>

          {/* Diagram Display Box */}
          {activeDiagram === 'sprint' ? (
            <div className="bg-[#F8FAFC] border border-slate-200 p-6 rounded-md space-y-4">
              <div className="flex justify-between text-xs font-mono font-bold text-[#334155]">
                <span>[ROBO-SPRINT // AIR HOCKEY COURT SPECIFICATION]</span>
                <span>DIMENSIONS: 8 FT × 4 FT</span>
              </div>

              {/* Air Hockey Court SVG Diagram */}
              <div className="relative w-full overflow-hidden bg-white border border-slate-200 rounded-md p-4 flex justify-center">
                <svg width="600" height="240" viewBox="0 0 600 240" fill="none" className="w-full h-auto max-w-2xl">
                  <rect x="20" y="20" width="560" height="200" rx="4" fill="#F8FAFC" stroke="#0052FF" strokeWidth="2" />
                  <line x1="300" y1="20" x2="300" y2="220" stroke="#FF3B00" strokeWidth="3" strokeDasharray="6 6" />
                  <circle cx="300" cy="120" r="30" stroke="#FF3B00" strokeWidth="2" fill="none" />

                  <text x="70" y="50" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="bold" fill="#0052FF">
                    TEAM A COURT (5 BALLS START)
                  </text>
                  <circle cx="80" cy="100" r="10" fill="#0052FF" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="110" cy="120" r="10" fill="#0052FF" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="80" cy="140" r="10" fill="#0052FF" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="140" cy="90" r="10" fill="#0052FF" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="140" cy="150" r="10" fill="#0052FF" stroke="#FFFFFF" strokeWidth="2" />

                  <path d="M120 180L270 140" stroke="#0052FF" strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />
                  <polygon points="275,138 260,132 265,145" fill="#0052FF" />

                  <text x="350" y="50" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="bold" fill="#FF3B00">
                    TEAM B COURT (5 BALLS START)
                  </text>
                  <circle cx="520" cy="100" r="10" fill="#FF3B00" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="490" cy="120" r="10" fill="#FF3B00" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="520" cy="140" r="10" fill="#FF3B00" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="460" cy="90" r="10" fill="#FF3B00" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="460" cy="150" r="10" fill="#FF3B00" stroke="#FFFFFF" strokeWidth="2" />

                  <path d="M480 180L330 140" stroke="#FF3B00" strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />
                  <polygon points="325,138 340,132 335,145" fill="#FF3B00" />
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-inter text-[#334155] font-normal">
                <div className="p-3 bg-white border border-slate-200 rounded-md">
                  <strong className="text-[#0B1020]">BALL CAPACITY:</strong> 10 total match balls (5 per side).
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-md">
                  <strong className="text-[#0B1020]">ARENA BARRIER:</strong> Low center ridge for puck passing.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-md">
                  <strong className="text-[#0B1020]">WIN CONDITION:</strong> Fewest balls in your court at 03:00.
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#F8FAFC] border border-slate-200 p-6 rounded-md space-y-4">
              <div className="flex justify-between text-xs font-mono font-bold text-[#334155]">
                <span>[ROBO-PRECISION // 5-LEVEL TOWER STACKING GRID]</span>
                <span>TARGET HEIGHT: 5 LEVELS</span>
              </div>

              <div className="relative w-full overflow-hidden bg-white border border-slate-200 rounded-md p-4 flex justify-center">
                <svg width="400" height="260" viewBox="0 0 400 260" fill="none" className="w-full h-auto max-w-md">
                  <line x1="40" y1="210" x2="360" y2="210" stroke="#0B1020" strokeWidth="3" />
                  <line x1="40" y1="170" x2="360" y2="170" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                  <line x1="40" y1="130" x2="360" y2="130" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                  <line x1="40" y1="90" x2="360" y2="90" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                  <line x1="40" y1="50" x2="360" y2="50" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />

                  <text x="50" y="200" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="bold" fill="#0052FF">LEVEL 1</text>
                  <text x="50" y="160" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="bold" fill="#0052FF">LEVEL 2</text>
                  <text x="50" y="120" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="bold" fill="#0052FF">LEVEL 3</text>
                  <text x="50" y="80" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="bold" fill="#0052FF">LEVEL 4</text>
                  <text x="50" y="40" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="bold" fill="#FF3B00">LEVEL 5 (TOP)</text>

                  <polygon points="150,210 180,210 172,175 158,175" fill="#FF3B00" stroke="#0B1020" strokeWidth="2" />
                  <polygon points="190,210 220,210 212,175 198,175" fill="#FF3B00" stroke="#0B1020" strokeWidth="2" />
                  <polygon points="230,210 260,210 252,175 238,175" fill="#FF3B00" stroke="#0B1020" strokeWidth="2" />

                  <polygon points="170,170 200,170 192,135 178,135" fill="#0052FF" stroke="#0B1020" strokeWidth="2" />
                  <polygon points="210,170 240,170 232,135 218,135" fill="#0052FF" stroke="#0B1020" strokeWidth="2" />

                  <polygon points="190,130 220,130 212,95 198,95" fill="#0052FF" stroke="#0B1020" strokeWidth="2" />

                  <path d="M290 40L230 85" stroke="#FF3B00" strokeWidth="3" strokeDasharray="4 4" />
                  <circle cx="290" cy="40" r="5" fill="#FF3B00" />
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-inter text-[#334155] font-normal">
                <div className="p-3 bg-white border border-slate-200 rounded-md">
                  <strong className="text-[#0B1020]">STACK TARGET:</strong> Up to 5 vertical levels.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-md">
                  <strong className="text-[#0B1020]">TOUCH RULE:</strong> Zero manual assistance allowed.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-md">
                  <strong className="text-[#0B1020]">STABILITY EVALUATION:</strong> Tallest stable tower at 05:00.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
