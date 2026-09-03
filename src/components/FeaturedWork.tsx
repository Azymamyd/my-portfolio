import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FolaMockup } from './FolaMockup';

export const FeaturedWork: React.FC = () => {
  const folaLiveUrl = 'https://fola-portfolio-site-gunvxs1c1-azym.vercel.app';

  return (
    <section id="work" className="w-full py-16 sm:py-24 px-6 border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 font-mono">
                Featured Website
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" aria-hidden="true" />
              <span className="text-xs font-medium text-zinc-600 bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-200/80">
                Real Estate Website
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
              Fola
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-1">
              A modern real estate website designed with a premium visual style, clear property presentation, and easy customer contact.
            </p>
          </div>

          {/* Prominent Button: View Live Website */}
          <div className="shrink-0">
            <a
              href={folaLiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
            >
              <span>View Live Website</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-200" />
            </a>
          </div>
        </div>

        {/* Large, Beautiful Fola Preview Mockup - The Main Visual Focus */}
        <div className="w-full">
          <FolaMockup liveUrl={folaLiveUrl} />
        </div>
      </div>
    </section>
  );
};
