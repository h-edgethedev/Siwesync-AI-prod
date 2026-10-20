const STEPS = [
  {
    stepNumber: '01',
    title: 'Create your profile',
    description: 'Tell us your field of study, skills, and location preferences to unlock matched options.',
    icon: (
      <svg className="w-5 h-5 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    stepNumber: '02',
    title: 'Recommended roles',
    description: 'Browse verified SIWES and internship openings ranked specifically for your academic background.',
    icon: (
      <svg className="w-5 h-5 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    stepNumber: '03',
    title: 'Improve your CV',
    description: 'Run your CV through our analyzer to fix formatting, highlight key strengths, and address skill gaps.',
    icon: (
      <svg className="w-5 h-5 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    stepNumber: '04',
    title: 'Apply with confidence',
    description: 'Submit your application directly with verified status labels so you always know where you stand.',
    icon: (
      <svg className="w-5 h-5 text-[#00a896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100" id="how-it-works">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Tag */}
        <span className="text-[#00a896] font-bold text-xs uppercase tracking-wider block mb-2">
          HOW IT WORKS
        </span>

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            From &lsquo;where do I start?&rsquo; to your next step.
          </h2>
        </div>

        {/* 4-Column Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div key={step.stepNumber} className="flex flex-col">
              
              {/* Top Row: Light Icon Box & Step Number */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#e6f7f5] flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-xs font-semibold text-slate-300">
                  {step.stepNumber}
                </span>
              </div>

              {/* Title & Body */}
              <h3 className="font-extrabold text-[#0f172a] text-lg tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}