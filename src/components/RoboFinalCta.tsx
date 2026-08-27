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
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="card-event p-8 sm:p-14 text-center border border-slate-900 bg-slate-900 text-white space-y-5">
        <span className="text-xs font-mono font-bold tracking-widest text-[#E2FF00] uppercase inline-block">
          SWEDEN CHAMPIONSHIP LEAGUE 2026
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          Ready to Compete in Västerås?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 font-jakarta max-w-lg mx-auto">
          Join Sweden's official student robotics league. Register your school or student team today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <button
            onClick={onOpenRegister}
            className="btn-event-blue text-sm px-7 py-3.5 rounded-xl"
          >
            JOIN THE COMPETITION →
          </button>
          <button
            onClick={() => onNavigate('for-schools')}
            className="btn-event-secondary text-sm px-7 py-3.5 rounded-xl"
          >
            FOR SCHOOLS →
          </button>
        </div>
      </div>
    </section>
  );
};
