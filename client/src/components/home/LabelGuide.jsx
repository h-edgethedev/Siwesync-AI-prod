'use client';

export default function FeatureBannerDark() {
  return (
    <section className="bg-[#091325] py-16 md:py-24 text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision & Transparency Messaging */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow & Icon */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00c2a8]/10 border border-[#00c2a8]/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#00c2a8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-[#00c2a8] font-bold text-xs uppercase tracking-wider">
                TRANSPARENCY & CLARITY
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Clear labels, Better-Informed decisions.
            </h2>

            {/* Explanatory Body */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
              <p>
                Every role listed on SIWESync AI comes with explicit status labels — so you never waste time guessing whether an opportunity is directly verified or an open market lead.
              </p>
              <p>
                Verified listings indicate direct employer partnership or institution validation, while unverified roles provide useful leads for proactive outreach.
              </p>
            </div>

          </div>

          {/* Right Column: Status Label Guide Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
              
              <h3 className="font-extrabold text-slate-900 text-lg mb-6">
                What each label means:
              </h3>

              <div className="space-y-5">
                
                {/* Verified Item */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#e6f7f5] text-[#00a896] shrink-0 mt-0.5">
                    Verified
                  </span>
                  <p className="text-xs text-slate-600 leading-snug">
                    Active employer contact or institution support verified on platform.
                  </p>
                </div>

                {/* Under Review Item */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#fef3c7] text-[#b45309] shrink-0 mt-0.5">
                    Under review
                  </span>
                  <p className="text-xs text-slate-600 leading-snug">
                    Submitted role currently undergoing verification.
                  </p>
                </div>

                {/* Unverified Item */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 shrink-0 mt-0.5">
                    Unverified
                  </span>
                  <p className="text-xs text-slate-600 leading-snug">
                    Aggregated lead or user-submitted signal for direct student application[cite: 6].
                  </p>
                </div>

              </div>

              {/* Card Bottom Callout */}
              <div className="mt-6 p-3 bg-[#e6f7f5]/80 border border-[#00a896]/20 rounded-2xl flex items-center gap-2.5 text-xs text-[#00a896] font-semibold">
                <svg className="w-4 h-4 shrink-0 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Clear status tracking keeps your search focused on credible paths[cite: 6].</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}