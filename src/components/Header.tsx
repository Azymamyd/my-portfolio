import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-zinc-200/80 bg-[#fcfcfc]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-6 h-18 flex items-center justify-between">
        <a 
          href="#" 
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-sm"
          aria-label="AZYM Creative Home"
        >
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-zinc-950 group-hover:text-zinc-700 transition-colors">
            AZYM Creative
          </span>
        </a>

        <nav aria-label="Main Navigation" className="flex items-center gap-3 sm:gap-4 text-sm font-medium">
          <a
            href="#work"
            className="text-zinc-600 hover:text-zinc-950 transition-colors py-1 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-sm"
          >
            Work
          </a>
          <span className="text-zinc-300 select-none" aria-hidden="true">|</span>
          <a
            href="#contact"
            className="text-zinc-600 hover:text-zinc-950 transition-colors py-1 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-sm"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
