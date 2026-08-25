import React, { useState } from 'react';
import { GreenFlipPhone } from './GadgetIllustrations';

export const InterfaceFriendsNotificationBox: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="get-notified" className="w-full max-w-4xl mx-auto px-4 py-10 flex flex-col items-center">
      {/* Wrapper container for Card + Hanging Flip Phone */}
      <div className="relative w-full max-w-xl">
        {/* Main White Notification Card */}
        <div className="bg-white border-2.5 border-ink-black rounded-none p-6 sm:p-10 shadow-brutal relative z-10">
          <div className="text-center space-y-3">
            <span className="text-[11px] font-semibold tracking-wider text-ink-black/60 uppercase">
              Limited Spots Available
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton uppercase text-ink-black tracking-wide leading-none">
              GET A FRIENDLY NOTIFICATION
            </h2>

            <p className="text-xs sm:text-sm text-ink-black/80 font-sans max-w-md mx-auto leading-relaxed pt-1">
              Want to be the first to know when we share more details and launch tickets? Sign up for the email notification.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="mt-8 p-4 bg-[#00A896]/15 border-2 border-ink-black text-center rounded-sm">
              <p className="font-anton text-lg text-ink-black uppercase tracking-wide">
                🎉 YOU'RE ON THE LIST!
              </p>
              <p className="text-xs text-ink-black/80 font-sans mt-1">
                We'll send updates to <span className="font-bold">{email}</span> as soon as tickets launch.
              </p>
              <button
                onClick={() => { setSubmitted(false); setName(''); setEmail(''); }}
                className="mt-3 text-xs font-bold underline text-ink-black hover:opacity-80"
              >
                Sign up another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-md mx-auto">
              <div>
                <input
                  type="text"
                  required
                  placeholder="NAME"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border-2 border-ink-black px-4 py-3 text-xs md:text-sm font-bold placeholder:text-ink-black/40 text-ink-black tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-ink-black shadow-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border-2 border-ink-black px-4 py-3 text-xs md:text-sm font-bold placeholder:text-ink-black/40 text-ink-black tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-ink-black shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ink-black text-white font-anton text-base tracking-widest uppercase py-3.5 border-2 border-ink-black shadow-brutal hover:bg-ink-black/90 active:translate-y-0.5 transition-all"
              >
                NOTIFY ME
              </button>
            </form>
          )}
        </div>

        {/* Green Flip Phone Character Hanging on the Right Edge */}
        <div className="hidden sm:block absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 z-20 pointer-events-none transform rotate-6">
          <GreenFlipPhone className="w-36 md:w-44" />
        </div>
      </div>
    </section>
  );
};
