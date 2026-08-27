import React from 'react';

interface RoboFinalCtaProps {
  onOpenRegister: () => void;
  onNavigate: (route: string) => void;
}

export const RoboFinalCta: React.FC<RoboFinalCtaProps> = ({
  onOpenRegister,
  onNavigate,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="card-event p-8 sm:p-16 text-center border-2 border-[#0F172A] bg-slate-900 text-white space-y-6">
        <span className="text-xs font-mono font-bold tracking-widest text-[#E2FF00] uppercase inline-block">
          SWEDEN CHAMPIONSHIP LEAGUE 2026
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold uppercase text-white leading-tight">
          READY TO COMPETE IN VÄSTERÅS?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-dmsans max-w-xl mx-auto">
          Join Sweden's official student robotics league. Register your school or student team today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenRegister}
            className="btn-event-blue text-sm md:text-base px-8 py-4 rounded-xl"
          >
            JOIN THE COMPETITION →
          </button>
          <button
            onClick={() => onNavigate('for-schools')}
            className="btn-event-secondary text-sm md:text-base px-8 py-4 rounded-xl"
          >
            FOR SCHOOLS →
          </button>
        </div>
      </div>
    </section>
  );
};
