import React, { useState } from 'react';
import { Mail, Check, Copy } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'whatsapp' | 'email' | null>(null);

  const whatsappNumber = '07037129905';
  const whatsappUrl = 'https://wa.me/2347037129905';
  const emailAddress = 'azymamyd@gmail.com';
  const emailUrl = 'mailto:azymamyd@gmail.com';

  const copyToClipboard = (text: string, type: 'whatsapp' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-24 px-6 border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
            Let's work together.
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed mt-4">
            Have a real estate business that needs a better website? Let's talk.
          </p>
        </div>

        {/* Contact Methods Cards & Direct CTAs */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {/* WhatsApp Card */}
          <div className="p-6 bg-white rounded-2xl border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                  WhatsApp
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(whatsappNumber, 'whatsapp')}
                  className="text-zinc-400 hover:text-zinc-700 transition-colors p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                  title="Copy WhatsApp number"
                  aria-label="Copy WhatsApp number"
                >
                  {copiedType === 'whatsapp' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <p className="text-xl sm:text-2xl font-bold font-display text-zinc-950 mt-2 tracking-tight">
                {whatsappNumber}
              </p>
            </div>

            <div className="pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-xl transition-all shadow-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              >
                {/* Official WhatsApp Logo SVG */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.67 20.16 9.32 19.8 8.14 19.11L7.85 18.94L4.72 19.76L5.55 16.71L5.36 16.41C4.6 15.2 4.19 13.58 4.19 11.92C4.19 7.37 7.89 3.67 12.04 3.67ZM8.63 7.33C8.42 7.33 8.21 7.34 8.03 7.63C7.82 7.92 7.23 8.47 7.23 9.6C7.23 10.73 8.05 11.82 8.17 11.97C8.28 12.13 9.77 14.43 12.07 15.42C12.62 15.65 13.04 15.79 13.38 15.9C13.93 16.08 14.43 16.05 14.83 15.99C15.28 15.92 16.2 15.43 16.39 14.9C16.58 14.37 16.58 13.92 16.52 13.82C16.46 13.72 16.31 13.66 16.08 13.55C15.85 13.43 14.73 12.88 14.52 12.81C14.31 12.73 14.16 12.69 14.01 12.92C13.86 13.15 13.43 13.66 13.3 13.81C13.17 13.96 13.04 13.98 12.81 13.87C12.58 13.75 11.64 13.44 10.53 12.45C9.66 11.67 9.07 10.71 8.95 10.49C8.83 10.26 8.94 10.14 9.05 10.03C9.16 9.92 9.29 9.74 9.41 9.6C9.53 9.45 9.57 9.35 9.65 9.18C9.72 9.01 9.68 8.87 9.63 8.76C9.57 8.64 9.12 7.54 8.93 7.08C8.75 6.64 8.56 6.7 8.42 6.69L8.63 7.33Z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 bg-white rounded-2xl border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                  Email
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(emailAddress, 'email')}
                  className="text-zinc-400 hover:text-zinc-700 transition-colors p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <a
                href={emailUrl}
                className="block text-xl sm:text-2xl font-bold font-display text-zinc-950 hover:text-zinc-700 transition-colors mt-2 tracking-tight truncate"
              >
                {emailAddress}
              </a>
            </div>

            <div className="pt-6">
              <a
                href={emailUrl}
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-sm rounded-xl transition-all shadow-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
              >
                <Mail className="w-4 h-4 text-zinc-300" />
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
