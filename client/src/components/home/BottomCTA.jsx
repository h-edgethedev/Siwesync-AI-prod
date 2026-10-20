'use client';

import Link from 'next/link';

export default function BottomCTA() {
  return (
    <section className="bg-[#091325] text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Background Right Curve Accent */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-[#122443]/60 rounded-full blur-2xl pointer-events-none translate-x-1/3" 
        aria-hidden="true" 
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline & Subtext */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[#00c2a8] font-extrabold text-xs uppercase tracking-wider block">
              YOUR NEXT CHAPTER IS WORTH STARTING
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] max-w-2xl">
              You don&rsquo;t need it all figured out. Just take the next step.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl">
              Create your account, explore your options and build towards your placement.
            </p>
          </div>

          {/* Right Column: CTA Actions */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4 pt-4 lg:pt-0">
            <Link
              href="/signup"
              className="bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#091325] font-extrabold px-7 py-3.5 rounded-full text-sm transition-all duration-200 inline-flex items-center gap-2 shadow-lg"
            >
              <span>Create your student account</span>
              <span className="text-base">→</span>
            </Link>

            <Link
              href="/opportunities"
              className="text-white hover:text-[#2dd4bf] text-xs font-semibold transition-colors inline-flex items-center gap-1.5 pr-2"
            >
              <span>Or browse opportunities first</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}