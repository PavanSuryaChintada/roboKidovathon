import React from 'react';
import { BottomGadgetQuad } from './GadgetIllustrations';

export const InterfaceFriendsFooter: React.FC = () => {
  return (
    <footer className="w-full pt-12 pb-0 flex flex-col items-center justify-between text-center overflow-hidden">
      {/* Sponsorship Contact Line */}
      <div className="max-w-md mx-auto px-4 space-y-1 mb-8">
        <p className="text-xs sm:text-sm text-ink-black/80 font-sans font-medium">
          Interested in sponsoring the event or having a vendor booth?
        </p>
        <a
          href="mailto:dann@interfacefriends.com"
          className="text-xs sm:text-sm font-bold text-ink-black underline hover:text-[#E83F25] transition-colors inline-block"
        >
          dann@interfacefriends.com
        </a>
      </div>

      {/* Bottom Peeking Gadgets Row */}
      <div className="w-full mt-4">
        <BottomGadgetQuad />
      </div>
    </footer>
  );
};
