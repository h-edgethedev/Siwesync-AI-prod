'use client';

import Image from 'next/image';
import Link from 'next/link';
import blogStudentWriting from '../../../public/blog-student-writing.png';
import blogLaptopDesk from '../../../public/blog-laptop-desk.png';
import StudentsStudying from '../../../public/Students-studying.png';

const ARTICLES = [
  {
    id: '1',
    category: 'SIWES ESSENTIALS',
    readTime: '5 MIN READ',
    title: 'Your SIWES search, without the overwhelm',
    description: 'A practical checklist for finding roles, checking requirements and preparing your documents.',
    imageSrc: blogStudentWriting, // Place your image in public/
    imageAlt: 'Student writing in notebook next to laptop',
    link: '/resources/siwes-search-checklist',
  },
  {
    id: '2',
    category: 'CV & APPLICATIONS',
    readTime: '6 MIN READ',
    title: 'A first CV that tells your story',
    description: 'Turn coursework, projects and volunteering into clear, honest evidence of your potential.',
    imageSrc: blogLaptopDesk,
    imageAlt: 'Laptop open on desk with notebook',
    link: '/resources/first-cv-guide',
  },
  {
    id: '3',
    category: 'PLACEMENT PREPARATION',
    readTime: '4 MIN READ',
    title: 'What to ask before accepting a placement',
    description: 'Understand your responsibilities, supervision and the practical details before you commit.',
    imageSrc: StudentsStudying,
    imageAlt: 'Two female students studying together in library',
    link: '/resources/what-to-ask-placement',
  },
];

export default function AdviceBlog() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-330 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Tag */}
        <span className="text-[#00a896] font-extrabold text-xs uppercase tracking-wider block mb-2">
          THE STUDENT TOOLKIT
        </span>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            Good advice for the steps ahead.
          </h2>

          <Link
            href="/resources"
            className="inline-flex items-center text-sm font-bold text-[#00a896] hover:text-teal-700 transition-colors shrink-0 gap-1.5"
          >
            <span>Explore resources</span>
            <span className="text-base">→</span>
          </Link>
        </div>

        {/* Articles 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article key={article.id} className="flex flex-col group">
              
              {/* Image Container */}
              <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100 border border-slate-200/60">
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Tag & Read Time */}
              <div className="text-[11px] font-extrabold text-[#00a896] uppercase tracking-wider mb-2">
                {article.category} · {article.readTime}
              </div>

              {/* Article Title */}
              <h3 className="font-extrabold text-[#0f172a] text-xl tracking-tight mb-2.5 group-hover:text-[#00a896] transition-colors leading-snug">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
                {article.description}
              </p>

              {/* Read Guide Link */}
              <Link
                href={article.link}
                className="inline-flex items-center text-xs font-bold text-[#00a896] hover:text-teal-700 transition-colors gap-1 mt-auto"
              >
                <span>Read guide</span>
                <span className="text-sm">→</span>
              </Link>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}