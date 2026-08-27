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
    <section className="w-full bg-[#0C1222] text-white py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="card-editorial-dark p-8 sm:p-14 text-center border border-slate-800 bg-[#0C1222] text-white space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E2FF00] uppercase inline-block">
            SWEDEN CHAMPIONSHIP LEAGUE 2026
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight text-balance tracking-tight">
            Ready to Compete in Västerås?
          </h2>

          <p className="text-base sm:text-lg text-[#E2E8F0] font-inter font-normal max-w-lg mx-auto text-balance leading-relaxed">
            Join Sweden's official student robotics league. Register your school or student team today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto btn-event-primary text-sm px-8 py-3.5 rounded-md whitespace-nowrap"
            >
              JOIN THE COMPETITION →
            </button>
            <button
              onClick={() => onNavigate('for-schools')}
              className="w-full sm:w-auto btn-event-secondary-dark text-sm px-8 py-3.5 rounded-md whitespace-nowrap"
            >
              FOR SCHOOLS →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
