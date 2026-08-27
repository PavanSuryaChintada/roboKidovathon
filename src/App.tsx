import { useState } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TracksGrid } from './components/TracksGrid';
import { PrizePool } from './components/PrizePool';
import { Timeline } from './components/Timeline';
import { EvaluationCriteria } from './components/EvaluationCriteria';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { TrackItem } from './data/hackathonData';

export function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedTrackId, setSelectedTrackId] = useState<string | undefined>();

  const handleTrackSelect = (track: TrackItem) => {
    setSelectedTrackId(track.id);
    setIsRegisterOpen(true);
  };

  const handleOpenRegister = () => {
    setSelectedTrackId(undefined);
    setIsRegisterOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-black text-[#F8FAFC] font-sans selection:bg-indigo-500/40 selection:text-white overflow-x-hidden">
      {/* 1. Dynamic Cursor-Reactive Particle Web Background */}
      <ParticleCanvas />

      {/* 2. Fixed Luxury Glassmorphic Navigation */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* 3. Main Landing Blueprint */}
      <main className="relative z-10 w-full">
        {/* Immersive Viewport & Live Countdown Hero */}
        <Hero onOpenRegister={handleOpenRegister} />

        {/* Interactive Bento Grid of Frontier Tracks */}
        <TracksGrid onSelectTrack={handleTrackSelect} />

        {/* Multi-Tiered $1.25M Prize Pool & Specialty Grants */}
        <PrizePool onOpenRegister={handleOpenRegister} />

        {/* Neon Vertical Milestone Roadmap */}
        <Timeline />

        {/* Official Jury Evaluation Rubric & Developer Perks */}
        <EvaluationCriteria />
      </main>

      {/* 4. Minimalist Obsidian Footer */}
      <Footer onOpenRegister={handleOpenRegister} />

      {/* 5. Interactive Animated Registration Modal */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        initialTrack={selectedTrackId}
      />
    </div>
  );
}

export default App;
