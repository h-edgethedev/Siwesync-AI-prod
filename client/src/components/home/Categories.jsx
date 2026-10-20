'use client';

import Link from 'next/link';

const CATEGORIES = [
  {
    id: '1',
    title: 'Engineering & Technology',
    description: 'Software, Electrical, Mechanical, Civil & IT',
    slug: 'engineering-technology',
    icon: (
      <svg className="w-5 h-5 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'Life Sciences',
    description: 'Biochemistry, Microbiology, TP & Health',
    slug: 'life-sciences',
    icon: (
      <svg className="w-5 h-5 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'Business & Finance',
    description: 'Accounting, Banking, Admin & Strategy',
    slug: 'business-finance',
    icon: (
      <svg className="w-5 h-5 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: '4',
    title: 'Sciences & Laboratory',
    description: 'Chemistry, Physics, Lab Tech & Research',
    slug: 'sciences-laboratory',
    icon: (
      <svg className="w-5 h-5 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: '5',
    title: 'Media & Communications',
    description: 'Journalism, PR, Content & Marketing',
    slug: 'media-communications',
    icon: (
      <svg className="w-5 h-5 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A2.5 2.5 0 013 11.2 2.5 2.5 0 015.436 8.717" />
      </svg>
    ),
  },
  {
    id: '6',
    title: 'Environmental Sciences',
    description: 'Architecture, Urban Planning & Surveying',
    slug: 'environmental-sciences',
    icon: (
      <svg className="w-5 h-5 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4" />
      </svg>
    ),
  },
];

export default function Categories() {
  return (
    <section className="py-12 md:py-16 bg-[#F7FAFC] border-slate-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Tag */}
        <span className="text-[#00a896] font-bold text-xs uppercase tracking-wider block mb-2">
          EXPLORE BY FIELD
        </span>

        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Different courses. Shared ambition.
          </h2>
        </div>

        {/* Categories Grid (2 Columns on Tablet, 3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/opportunities?category=${category.slug}`}
              className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 flex items-center justify-between hover:border-[#00a896]/50 hover:shadow-sm transition-all duration-200 group"
            >
              <div className="flex items-center gap-3.5">
                {/* Icon Container */}
                <div className="w-11 h-11 rounded-xl bg-[#e6f7f5] flex items-center justify-center shrink-0">
                  {category.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-bold text-[#0f172a] text-base group-hover:text-[#00a896] transition-colors leading-snug">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Trailing Checkmark / Chevron Badge */}
              <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#e6f7f5] transition-colors">
                <svg
                  className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00a896] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}