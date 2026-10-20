'use client';

import Link from 'next/link';

export default function CVFeature() {
  return (
    <section className="py-16 md:py-24 bg-[#F7FAFC] border-t border-slate-100">
      <div className="max-w-330 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: CV Feedback Card Mockup */}
          <div className="lg:col-span-6">
            <div className="bg-[#f8fafc] border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-5">
                
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#e6f7f5] text-[#00a896] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#0f172a] text-base leading-snug">
                        Your CV, with a clearer next step
                      </h3>
                      <p className="text-xs text-slate-400">
                        student_cv.pdf · Example document
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#e6f7f5] text-[#00a896] shrink-0">
                    Example feedback
                  </span>
                </div>

                {/* Feedback Block 1: Before & Try Adding Detail */}
                <div className="space-y-3">
                  <span className="text-[11px] font-extrabold text-[#00a896] uppercase tracking-wider block">
                    MAKE YOUR EXPERIENCE MORE SPECIFIC
                  </span>

                  {/* Before Box */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 space-y-1">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                      BEFORE
                    </span>
                    <p className="text-xs text-slate-600 italic">
                      &quot;Worked on a school project.&quot;
                    </p>
                  </div>

                  {/* Try Adding Detail Box */}
                  <div className="bg-[#e6f7f5]/80 border border-[#00a896]/20 rounded-xl p-3.5 space-y-1">
                    <span className="text-[10px] font-extrabold text-[#00a896] uppercase tracking-wider block">
                      TRY ADDING DETAIL
                    </span>
                    <p className="text-xs text-[#0f172a] font-medium">
                      &quot;Built a student attendance tracker using Python as part of a team course project.&quot;
                    </p>
                  </div>
                </div>

                {/* Feedback Block 2: Skill to explore */}
                <div className="pt-3 border-t border-slate-100 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0f172a]">
                    <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>A skill to explore: version control</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-6">
                    If a role asks for Git, practise creating a repository and documenting a small project.
                  </p>
                </div>

                {/* Micro Footer Note */}
                <p className="text-[10px] text-slate-400 font-normal leading-normal pt-2">
                  Illustrative product preview. Suggestions depend on your CV and the role. Only include experience that is true.
                </p>

              </div>
            </div>
          </div>

          {/* Right Column: Messaging */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow Tag */}
            <span className="text-[#00a896] font-bold text-xs uppercase tracking-wider block">
              A LITTLE GUIDANCE GOES A LONG WAY
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-[1.15]">
              You bring the ambition. Build a stronger application.
            </h2>

            {/* Body */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Basic AI support helps you see what to improve, not just what to apply for. Your experience and decisions stay at the centre.
            </p>

            {/* Feature Bullet 1 */}
            <div className="space-y-5 pt-2">
              <div className="flex items-start gap-3.5">
                <svg className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h3 className="font-extrabold text-[#0f172a] text-base">
                    Make your CV clearer
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Get practical feedback on structure, wording and how you present your experience.
                  </p>
                </div>
              </div>

              {/* Feature Bullet 2 */}
              <div className="flex items-start gap-3.5">
                <svg className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <div>
                  <h3 className="font-extrabold text-[#0f172a] text-base">
                    Understand your skill gaps
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Compare your skills with role requirements and choose what to learn next.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA & Microcopy */}
            <div className="pt-2 space-y-2">
              <Link
                href="/signup"
                className="inline-flex items-center text-sm font-bold text-[#00a896] hover:text-teal-700 transition-colors gap-1.5"
              >
                <span>Create an account to get started</span>
                <span className="text-base">→</span>
              </Link>
              <p className="text-xs text-slate-400 block">
                Guidance, not a hiring decision or a guarantee of placement.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}