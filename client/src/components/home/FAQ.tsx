'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQS = [
  {
    question: 'Who is SIWESync AI for?',
    answer:
      'Nigerian university and polytechnic students looking for SIWES or internship placements and practical support with their applications.',
  },
  {
    question: 'Do I need a complete profile to sign up?',
    answer:
      'No. Start with your name, email and password, or Google. Add your school, course, level, skills and interests during profile setup.',
  },
  {
    question: 'Does a Verified label guarantee a placement?',
    answer:
      'No. It means a listing was checked against a reliable company or source. Employers make hiring decisions; always review the requirements and application details.',
  },
  {
    question: 'How does the CV and skill-gap guidance work?',
    answer:
      'Upload your CV for basic AI feedback on clarity and structure. Skill-gap guidance highlights areas to explore against role requirements. Review suggestions and keep every claim accurate.',
  },
  {
    question: 'How do I apply for an opportunity?',
    answer:
      'Open the opportunity details and follow the stated application route. This may take you to the employer\'s site. Use your account to keep track of applications and next steps.',
  },
];

export default function FAQ() {
  // Set default state to allow opening/closing items while matching design layout
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4]);

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-16 md:py-24 bg-[#F7FAFC] border-t border-slate-100" id="faq">
      <div className="max-w-330 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Contact CTA */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[#00a896] font-extrabold text-xs uppercase tracking-wider block">
              A FEW THINGS TO KNOW
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-[1.15]">
              Questions before your next step?
            </h2>

            <p className="text-slate-500 text-sm sm:text-base">
              Here&apos;s the practical stuff, in plain language.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-bold text-[#00a896] hover:text-teal-700 transition-colors gap-1.5"
              >
                <span>Get in touch</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Word-for-Word Questions & Answers */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
            {FAQS.map((faq, index) => {
              const isOpen = openIndices.includes(index);
              return (
                <div key={faq.question} className="py-5">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-extrabold text-[#0f172a] text-base sm:text-lg tracking-tight group-hover:text-[#00a896] transition-colors">
                      {faq.question}
                    </span>
                    <span className="text-[#00a896] shrink-0 text-xl font-medium">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}