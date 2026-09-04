import React, { useState } from 'react';
import { ExternalLink, Lock, ArrowUpRight } from 'lucide-react';

interface FolaMockupProps {
  liveUrl: string;
}

export const FolaMockup: React.FC<FolaMockupProps> = ({ liveUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group w-full">
      {/* Outer Browser Window Frame */}
      <div 
        className="w-full bg-white rounded-xl sm:rounded-2xl border border-zinc-200/90 shadow-2xl shadow-zinc-950/5 overflow-hidden transition-all duration-300 group-hover:border-zinc-300 group-hover:shadow-zinc-950/10"
      >
        {/* Browser Chrome Header */}
        <div className="px-4 py-3 bg-zinc-100/90 border-b border-zinc-200 flex items-center justify-between gap-3 text-xs">
          {/* Window dots */}
          <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          </div>

          {/* URL Bar */}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-md mx-auto flex items-center justify-center gap-1.5 py-1 px-3 bg-white rounded-md border border-zinc-200/80 text-zinc-600 hover:text-zinc-900 transition-colors truncate"
            title="Open fola-portfolio-site.vercel.app"
          >
            <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
            <span className="text-[11px] sm:text-xs font-mono truncate">
              fola-portfolio-site.vercel.app
            </span>
          </a>

          {/* Quick open icon */}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-950 transition-colors text-xs font-medium shrink-0"
            aria-label="Open in new tab"
          >
            <span>Open</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Browser Viewport Content: Interactive Fola Real Estate Website Rendering */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="block relative cursor-pointer bg-zinc-950 text-white select-none overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-zinc-900"
          aria-label="Open Fola Real Estate live website in a new browser tab"
        >
          {/* Fola Website Navigation */}
          <div className="w-full px-4 sm:px-8 py-3.5 sm:py-4 bg-zinc-950/95 border-b border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base sm:text-xl tracking-tight text-white">
                FOLA
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-zinc-400 pl-2 border-l border-zinc-800">
                Real Estate
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6 text-xs text-zinc-300 font-medium">
              <span className="hover:text-white transition-colors">Properties</span>
              <span className="hover:text-white transition-colors">Developments</span>
              <span className="hover:text-white transition-colors">About</span>
              <span className="hover:text-white transition-colors">Contact</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 transition-colors">
                Inquire Now
              </span>
            </div>
          </div>

          {/* Fola Website Hero Banner */}
          <div className="relative min-h-[300px] sm:min-h-[440px] md:min-h-[480px] flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden">
            {/* High Resolution Architectural Image Background */}
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
              alt="Fola Real Estate Modern Architecture Villa Showcase"
              loading="eager"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 brightness-[0.72]"
            />

            {/* Subtle Gradient Overlays for High Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-transparent pointer-events-none" />

            {/* Fola Hero Content */}
            <div className="relative z-10 max-w-xl mt-4 sm:mt-8 space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-medium text-zinc-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Featured Exclusive Property
              </div>
              <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Modern Architectural Homes.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-md hidden sm:block">
                Curating prime luxury residences, penthouses, and bespoke developments with high-yield capital growth.
              </p>
            </div>

            {/* Fola Search / Filter Bar Component Preview */}
            <div className="relative z-10 mt-6 sm:mt-10">
              <div className="p-2 sm:p-3 bg-zinc-900/90 backdrop-blur-md rounded-xl border border-white/15 max-w-2xl shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 text-left">
                <div className="flex-1 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-zinc-700/60">
                  <span className="block text-[10px] uppercase font-semibold text-zinc-400">Location</span>
                  <span className="text-xs font-medium text-white truncate">Prime Real Estate</span>
                </div>
                <div className="flex-1 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-zinc-700/60">
                  <span className="block text-[10px] uppercase font-semibold text-zinc-400">Property Type</span>
                  <span className="text-xs font-medium text-white truncate">Villas & Penthouses</span>
                </div>
                <div className="px-3 py-1.5 flex items-center justify-center">
                  <span className="w-full sm:w-auto px-4 py-2 bg-white text-zinc-950 font-medium text-xs rounded-lg hover:bg-zinc-100 transition-colors text-center">
                    Browse Properties
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Fola Property Showcase Section Preview */}
          <div className="bg-zinc-900 border-t border-zinc-800 p-4 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  Curated Portfolio
                </span>
                <h4 className="text-sm sm:text-base font-display font-semibold text-white">
                  Featured Developments
                </h4>
              </div>
              <span className="text-xs text-zinc-400 hover:text-white transition-colors hidden sm:inline-flex items-center gap-1">
                View All Listings ↗
              </span>
            </div>

            {/* 3 Real Estate Property Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* Card 1 */}
              <div className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800/80">
                <div className="relative h-28 sm:h-32">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                    alt="The Glass Pavilion"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-medium px-2 py-0.5 rounded bg-zinc-950/80 text-white backdrop-blur-sm">
                    Ikoyi
                  </span>
                </div>
                <div className="p-3">
                  <h5 className="text-xs font-semibold text-white truncate">The Glass Pavilion</h5>
                  <p className="text-[11px] text-zinc-400 mt-0.5">5 Bed · 6 Bath · 680 sqm</p>
                  <p className="text-xs font-semibold text-zinc-200 mt-2">₦1,850,000,000</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800/80">
                <div className="relative h-28 sm:h-32">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                    alt="Azure Horizon Penthouse"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-medium px-2 py-0.5 rounded bg-zinc-950/80 text-white backdrop-blur-sm">
                    Waterfront
                  </span>
                </div>
                <div className="p-3">
                  <h5 className="text-xs font-semibold text-white truncate">Azure Penthouse</h5>
                  <p className="text-[11px] text-zinc-400 mt-0.5">4 Bed · 4.5 Bath · 520 sqm</p>
                  <p className="text-xs font-semibold text-zinc-200 mt-2">₦1,200,000,000</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800/80 hidden sm:block">
                <div className="relative h-28 sm:h-32">
                  <img
                    src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80"
                    alt="Horizon Terrace Residence"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-medium px-2 py-0.5 rounded bg-zinc-950/80 text-white backdrop-blur-sm">
                    Banana Island
                  </span>
                </div>
                <div className="p-3">
                  <h5 className="text-xs font-semibold text-white truncate">Horizon Residence</h5>
                  <p className="text-[11px] text-zinc-400 mt-0.5">6 Bed · 7 Bath · 950 sqm</p>
                  <p className="text-xs font-semibold text-zinc-200 mt-2">₦2,400,000,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Hover Badge for Quick Navigation */}
          <div 
            className={`absolute inset-0 bg-zinc-950/30 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-200 pointer-events-none ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="px-5 py-2.5 bg-white text-zinc-950 rounded-full font-medium text-xs sm:text-sm flex items-center gap-2 shadow-2xl transform scale-100 group-hover:scale-105 transition-transform">
              <span>View Live Website</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-950" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
