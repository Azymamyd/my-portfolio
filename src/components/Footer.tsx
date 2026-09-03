import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-zinc-200/80 py-10 px-6 bg-[#fafaf9]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="font-display font-bold text-base text-zinc-950 tracking-tight">
            AZYM Creative
          </p>
          <p className="text-xs text-zinc-500 mt-0.5">
            UI/UX Designer & Web Designer
          </p>
        </div>

        <p className="text-xs text-zinc-400 font-mono">
          © 2026 AZYM Creative
        </p>
      </div>
    </footer>
  );
};
