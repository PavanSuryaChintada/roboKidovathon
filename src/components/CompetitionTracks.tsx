import React, { useState } from 'react';
import { Trophy, ShieldAlert, Timer, Maximize2, Zap, Layers, CheckCircle2, Sliders, BarChart3 } from 'lucide-react';

export const CompetitionTracks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'junior' | 'senior'>('junior');

  // Interactive Bot Weight/Speed Estimator widget state
  const [botMotors, setBotMotors] = useState<number>(2);
  const [gearRatio, setGearRatio] = useState<string>('Speed (1:3)');

  return (
    <section id="challenges" className="py-20 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider">
            Official Arenas & Game Mechanics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900">
            High-Stakes Robotics Challenge Tracks
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Participants build real Lego & Blix mechanical bots divided into Junior and Senior brackets.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-md border border-slate-200 shadow-xs inline-flex gap-1.5">
            <button
              onClick={() => setActiveTab('junior')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'junior'
                  ? 'bg-[#0062B8] text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Track 1: Robo-Sprint (Junior — Up to 15 Years)</span>
            </button>
            <button
              onClick={() => setActiveTab('senior')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'senior'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Track 2: Robo-Precision (Senior — 15+ Years)</span>
            </button>
          </div>
        </div>

        {/* Junior Category Content */}
        {activeTab === 'junior' && (
          <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-10 shadow-sm space-y-8 animate-fadeIn">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="bg-sky-50 text-sky-800 border border-sky-200 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    Junior Category (Ages Up to 15)
                  </span>
                  <span className="bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded text-xs font-bold">
                    3-Minute Match Duration
                  </span>
                </div>

                <h3 className="text-3xl font-bold font-display text-slate-900">
                  ROBO-SPRINT: Air-Hockey Ball Showdown
                </h3>

                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  Teams design and build a rapid-maneuver robot capable of sweeping and passing ping-pong balls into the opponent court through a central gate. High speed, motor torque, and strategic positioning are critical.
                </p>

                {/* Key Specs Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-md">
                    <div className="flex items-center gap-2 text-[#0062B8] font-bold text-xs uppercase mb-1">
                      <Maximize2 className="w-4 h-4" />
                      <span>Arena Mat Size</span>
                    </div>
                    <p className="text-xl font-extrabold text-slate-900 font-display">8 ft × 4 ft</p>
                    <p className="text-[11px] text-slate-500 font-medium">20-inch central gate partition</p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-md">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase mb-1">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Max Bot Size</span>
                    </div>
                    <p className="text-xl font-extrabold text-slate-900 font-display">1.5 ft × 1.5 ft</p>
                    <p className="text-[11px] text-slate-500 font-medium">Strict size check before match</p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-md">
                    <div className="flex items-center gap-2 text-slate-700 font-bold text-xs uppercase mb-1">
                      <Timer className="w-4 h-4" />
                      <span>Time & Tiebreaker</span>
                    </div>
                    <p className="text-xl font-extrabold text-slate-900 font-display">3 Mins</p>
                    <p className="text-[11px] text-slate-500 font-medium">2-min tiebreaker round if equal</p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-md">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase mb-1">
                      <Trophy className="w-4 h-4" />
                      <span>Win Condition</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">Fewest Balls in Court</p>
                    <p className="text-[11px] text-slate-500 font-medium">Each team starts with 5 balls</p>
                  </div>
                </div>

                {/* Match Rules List */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Official Game Rules
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0062B8] shrink-0 mt-0.5" />
                      <span>Each team starts with exactly 5 balls placed in their starting court.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0062B8] shrink-0 mt-0.5" />
                      <span>Bot arms, sweepers, and chassis must strictly fit within 1.5 ft × 1.5 ft limits.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0062B8] shrink-0 mt-0.5" />
                      <span>The team with the fewest balls remaining in their court when the 3-minute timer expires wins.</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Right Visual Arena Graphic */}
              <div className="lg:col-span-6">
                <div className="bg-white border border-slate-200 rounded-lg p-5 relative shadow-xs text-slate-900">
                  <div className="flex justify-between items-center mb-3 text-xs font-bold text-slate-600">
                    <span>Junior Arena Mat (Air-Hockey Style)</span>
                    <span className="text-[#0062B8] font-bold">8 ft × 4 ft Official Mat</span>
                  </div>

                  {/* SVG Floor Plan Graphic */}
                  <div className="w-full aspect-[2/1] bg-sky-50/70 border border-sky-200 rounded p-4 relative flex flex-col justify-between">
                    
                    {/* Central Gate Partition */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-[#0062B8] border-x border-dashed border-sky-200 flex flex-col items-center justify-around py-2">
                      <span className="text-[9px] text-white font-bold uppercase rotate-90">20" Gate</span>
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-[9px] text-white font-bold uppercase rotate-90">Gate</span>
                    </div>

                    {/* Team 1 Side */}
                    <div className="flex justify-between items-center z-10">
                      <div>
                        <span className="bg-emerald-700 text-white font-bold text-[10px] px-2.5 py-0.5 rounded">
                          TEAM 1 START
                        </span>
                        <p className="text-[10px] text-slate-600 mt-1 font-medium">Starting Balls: ⚪⚪⚪⚪⚪</p>
                      </div>

                      {/* Team 2 Side */}
                      <div className="text-right">
                        <span className="bg-[#0062B8] text-white font-bold text-[10px] px-2.5 py-0.5 rounded">
                          TEAM 2 START
                        </span>
                        <p className="text-[10px] text-slate-600 mt-1 font-medium">Starting Balls: ⚪⚪⚪⚪⚪</p>
                      </div>
                    </div>

                    <div className="flex justify-between text-[10px] text-slate-600 font-mono font-medium z-10 pt-8">
                      <span>Length: 8 Feet</span>
                      <span className="text-[#0062B8] font-bold">BLIX-A-THON ARENA</span>
                      <span>Width: 4 Feet</span>
                    </div>
                  </div>

                  <p className="text-center text-[11px] text-slate-500 font-medium mt-3">
                    Physical hardware mats supplied directly to schools on event day.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Senior Category Content */}
        {activeTab === 'senior' && (
          <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-10 shadow-sm space-y-8 animate-fadeIn">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="bg-slate-900 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    Senior Category (15+ Years / High School)
                  </span>
                  <span className="bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded text-xs font-bold">
                    5-Minute Precision Match
                  </span>
                </div>

                <h3 className="text-3xl font-bold font-display text-slate-900">
                  ROBO-PRECISION: 5-Tier Cup Tower Stacking
                </h3>

                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  Senior engineers design robotic gripper arms or elevator lifts capable of picking up, balancing, and stacking cups into towers up to 5 tiers high without manual touches. High mechanical accuracy required.
                </p>

                {/* Key Specs Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-md">
                    <div className="flex items-center gap-2 text-[#0062B8] font-bold text-xs uppercase mb-1">
                      <Maximize2 className="w-4 h-4" />
                      <span>Arena Mat Size</span>
                    </div>
                    <p className="text-xl font-extrabold text-slate-900 font-display">8 ft × 6 ft</p>
                    <p className="text-[11px] text-slate-500 font-medium">Dual-zone color mat</p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-md">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase mb-1">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Max Bot Size</span>
                    </div>
                    <p className="text-xl font-extrabold text-slate-900 font-display">2.5 ft × 2.5 ft</p>
                    <p className="text-[11px] text-slate-500 font-medium">Arm extension allowed</p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-md">
                    <div className="flex items-center gap-2 text-slate-700 font-bold text-xs uppercase mb-1">
                      <Timer className="w-4 h-4" />
                      <span>Match Duration</span>
                    </div>
                    <p className="text-xl font-extrabold text-slate-900 font-display">5 Mins</p>
                    <p className="text-[11px] text-slate-500 font-medium">Zero human touches permitted</p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-md">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase mb-1">
                      <Trophy className="w-4 h-4" />
                      <span>Win Condition</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">Tallest & Most Stable Tower</p>
                    <p className="text-[11px] text-slate-500 font-medium">Up to 5 tier stacking target</p>
                  </div>
                </div>

                {/* Match Rules List */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Senior Rules & Disqualification Limits
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                      <span>Only the robot may touch, lift, and stack cups. Manual operator assistance results in points penalty.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                      <span>Max bot footprint 2.5 ft × 2.5 ft at start. Elevating mechanisms permitted during match.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                      <span>Towers must remain standing independently for 5 seconds after time expires.</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Right Visual Arena Graphic */}
              <div className="lg:col-span-6">
                <div className="bg-white border border-slate-200 rounded-lg p-5 relative shadow-xs text-slate-900">
                  <div className="flex justify-between items-center mb-3 text-xs font-bold text-slate-600">
                    <span>Senior Arena Mat (Precision Stacking)</span>
                    <span className="text-slate-900 font-bold">8 ft × 6 ft Dual Zone</span>
                  </div>

                  {/* SVG Mat Graphic */}
                  <div className="w-full aspect-[4/3] bg-amber-50/60 border border-amber-200 rounded p-4 relative overflow-hidden flex flex-col justify-between">
                    
                    {/* Zone Partition Line */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-amber-300" />

                    <div className="grid grid-cols-2 gap-4 z-10">
                      <div className="bg-rose-50 p-3 rounded border border-rose-200">
                        <span className="bg-rose-700 text-white font-bold text-[10px] px-2 py-0.5 rounded">
                          RED ZONE (Team A)
                        </span>
                        <div className="mt-2 text-center">
                          <p className="text-[11px] text-rose-950 font-semibold">Cup Stacking Base</p>
                          <div className="inline-block mt-1 space-y-0.5">
                            <span className="block text-xs">🥛</span>
                            <span className="block text-xs">🥛 🥛</span>
                            <span className="block text-xs">🥛 🥛 🥛</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-sky-50 p-3 rounded border border-sky-200 text-right">
                        <span className="bg-[#0062B8] text-white font-bold text-[10px] px-2 py-0.5 rounded">
                          BLUE ZONE (Team B)
                        </span>
                        <div className="mt-2 text-center">
                          <p className="text-[11px] text-sky-950 font-semibold">Cup Stacking Base</p>
                          <div className="inline-block mt-1 space-y-0.5">
                            <span className="block text-xs">🥛</span>
                            <span className="block text-xs">🥛 🥛</span>
                            <span className="block text-xs">🥛 🥛 🥛</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between text-[10px] text-slate-600 font-mono font-medium z-10 pt-4">
                      <span>Length: 8 Feet</span>
                      <span className="text-[#0062B8] font-bold">5-TIER CUP TOWER ARENA</span>
                      <span>Width: 6 Feet</span>
                    </div>
                  </div>

                  <p className="text-center text-[11px] text-slate-500 font-medium mt-3">
                    Evaluation by Robotics & Technology Experts Panel on site.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Interactive Track Skills Widget */}
        <div className="mt-12 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
              <BarChart3 className="w-5 h-5 text-[#0062B8]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#0062B8] uppercase tracking-wider">Interactive STEAM Specs Widget</span>
              <h4 className="text-xl font-bold text-slate-900">Track Skill Matrix & Bot Setup Simulator</h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-5 rounded-md border border-slate-200">
              <h5 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#0062B8]" />
                <span>Simulate Bot Hardware Specs</span>
              </h5>

              <div className="space-y-4 text-xs font-medium text-slate-700">
                <div>
                  <label className="block mb-1 font-bold">Motor Count: {botMotors} DC Motors</label>
                  <input
                    type="range"
                    min="1"
                    max="4"
                    value={botMotors}
                    onChange={(e) => setBotMotors(Number(e.target.value))}
                    className="w-full accent-[#0062B8]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                    <span>1 Motor (Basic)</span>
                    <span>2 Motors (Standard)</span>
                    <span>4 Motors (High Torque)</span>
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-bold">Gear Train Ratio:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Speed (1:3)', 'Balanced (1:1)', 'Torque (3:1)'].map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => setGearRatio(ratio)}
                        className={`py-2 px-1 rounded border text-[11px] font-bold transition-all ${
                          gearRatio === ratio
                            ? 'bg-[#0062B8] text-white border-[#0062B8]'
                            : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-3 rounded border border-slate-200 text-[11px]">
                  <p className="font-bold text-slate-900">Estimated Bot Performance Profile:</p>
                  <p className="text-slate-600 font-normal mt-0.5">
                    {activeTab === 'junior'
                      ? `Ideal for Robo-Sprint! ${botMotors} Motors + ${gearRatio} provides swift court traversal to clear 5 balls.`
                      : `Ideal for Robo-Precision! ${botMotors} Motors + ${gearRatio} ensures smooth lifting for 5-tier cup towers.`}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-md border border-slate-200 flex flex-col justify-between">
              <div>
                <h5 className="font-bold text-sm text-slate-900 mb-3">Track Skill Matrix Comparison</h5>
                
                <div className="space-y-3 text-xs font-semibold">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Robotic Speed & Agility</span>
                      <span className="text-[#0062B8] font-bold">
                        {activeTab === 'junior' ? '95% (High)' : '60% (Moderate)'}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-200 rounded overflow-hidden">
                      <div
                        className="h-full bg-[#0062B8] transition-all duration-500"
                        style={{ width: activeTab === 'junior' ? '95%' : '60%' }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Mechanical Precision & Stacking</span>
                      <span className="text-sky-700 font-bold">
                        {activeTab === 'junior' ? '50% (Basic)' : '98% (Critical)'}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-200 rounded overflow-hidden">
                      <div
                        className="h-full bg-sky-600 transition-all duration-500"
                        style={{ width: activeTab === 'junior' ? '50%' : '98%' }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Team Tactical Strategy</span>
                      <span className="text-slate-900 font-bold">
                        {activeTab === 'junior' ? '85% (Ball Routing)' : '90% (Tier Balance)'}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-200 rounded overflow-hidden">
                      <div
                        className="h-full bg-slate-900 transition-all duration-500"
                        style={{ width: activeTab === 'junior' ? '85%' : '90%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-slate-500 font-medium mt-4">
                Both categories emphasize hands-on trial-and-error mechanics without virtual software simulations.
              </p>
            </div>

          </div>
        </div>

        {/* Extra Tracks Grid */}
        <div className="mt-14">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
            Additional Championship Tracks (Robo Kido-A-Thon Series)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 p-5 rounded-md shadow-xs">
              <span className="text-xs font-bold text-[#0062B8]">Challenge 03</span>
              <h4 className="text-lg font-bold text-slate-900 mt-1">Kido-Maze Quest</h4>
              <p className="text-xs text-slate-600 font-normal mt-2">
                Autonomous maze navigation utilizing line-following and ultrasonic obstacle detection.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-md shadow-xs">
              <span className="text-xs font-bold text-sky-700">Challenge 04</span>
              <h4 className="text-lg font-bold text-slate-900 mt-1">Code-Kido Quest</h4>
              <p className="text-xs text-slate-600 font-normal mt-2">
                AI and block-coding challenge testing algorithmic strategy and sensor calibration.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-md shadow-xs">
              <span className="text-xs font-bold text-amber-700">Challenge 05</span>
              <h4 className="text-lg font-bold text-slate-900 mt-1">Maker-Mission Sverige</h4>
              <p className="text-xs text-slate-600 font-normal mt-2">
                Open innovation build-and-innovate task addressing real-world Nordic sustainability tasks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
