import React from 'react';
import { Wrench, Brain, Users, ShieldCheck, School, UserCheck, BookOpen, Award } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const benefits = [
    {
      icon: Wrench,
      title: 'Real Bot Engineering',
      subtitle: 'No Virtual Simulations',
      description:
        'Students construct and program physical mechanical robots using authentic structural kits, motors, and controllers. Hands-on learning that bridges theoretical physics with real-world mechanics.',
      badgeColor: 'bg-blue-50 text-[#0062B8] border-blue-200',
      iconBg: 'bg-blue-50 text-[#0062B8] border-blue-200',
    },
    {
      icon: Brain,
      title: 'Hands-on Logic & Strategy',
      subtitle: 'Tactical Problem Solving',
      description:
        'From high-speed ball passing strategy in Robo-Sprint to precise weight distribution in cup-stacking tower challenges, participants cultivate objective critical thinking.',
      badgeColor: 'bg-[#F0F9FF] text-[#0284C7] border-sky-200',
      iconBg: 'bg-[#F0F9FF] text-[#0284C7] border-sky-200',
    },
    {
      icon: Users,
      title: 'Inclusive Nordic School Culture',
      subtitle: 'Equality & Teamwork',
      description:
        'Designed specifically to align with Swedish and Nordic curriculum goals, fostering collaborative team dynamics, gender equality, and early STEM enthusiasm.',
      badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
      iconBg: 'bg-amber-50 text-amber-800 border-amber-200',
    },
    {
      icon: ShieldCheck,
      title: 'GDPR & Safety Compliance',
      subtitle: 'Student Protection First',
      description:
        'Full compliance with European Union GDPR privacy guidelines. Non-destructive kit design ensures a completely safe arena environment supervised by trained facilitators.',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
  ];

  const stats = [
    { icon: School, number: '15+', label: 'Target Schools in Västerås' },
    { icon: UserCheck, number: '600+', label: 'Students Directly Engaged' },
    { icon: BookOpen, number: '45+', label: 'STEM Teachers Involved' },
    { icon: Award, number: '600+', label: 'Parents Reached' },
  ];

  return (
    <section id="about" className="py-20 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
            Why Robo-Kidovation?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Empowering Young Minds Through Real STEAM Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Building on proven success at Techfest IIT Bombay (1,000+ participants), Robo-Kidovation turns STEM into an interactive hands-on adventure for young innovators.
          </p>
        </div>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-md border ${item.iconBg}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-bold uppercase px-2.5 py-0.5 rounded border ${item.badgeColor}`}>
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-[#0062B8]">Read specs →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Stats Clean Slate Banner */}
        <div className="mt-16 bg-slate-900 text-white rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className={`p-4 ${idx > 0 ? 'pt-6 md:pt-4' : ''}`}>
                  <StatIcon className="w-6 h-6 mx-auto mb-2 text-amber-400" />
                  <span className="block text-3xl sm:text-4xl font-extrabold font-display text-white mb-1">
                    {stat.number}
                  </span>
                  <span className="text-xs text-slate-300 font-medium tracking-wide">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
