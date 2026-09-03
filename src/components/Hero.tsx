import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="w-full pt-16 pb-16 sm:pt-24 sm:pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-950 leading-[1.08]">
            Modern websites for real estate businesses.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl">
            I design clean, premium websites that help real estate brands present their properties and business professionally online.
          </p>

          <div className="pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 text-zinc-300 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
