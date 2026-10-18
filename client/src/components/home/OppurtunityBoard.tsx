'use client';

import { useState } from 'react';
import Link from 'next/link';

const PREVIEW_CARDS = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    company: 'Example technology company',
    location: 'Lagos',
    workType: 'Hybrid',
    program: 'SIWES / Internship',
    verified: true,
    tags: ['Computer science', 'Web development'],
    iconType: 'code',
  },
  {
    id: '2',
    title: 'Mechanical Engineering Trainee',
    company: 'Example manufacturing company',
    location: 'Ibadan',
    workType: 'On-site',
    program: 'SIWES / Internship',
    verified: false,
    tags: ['Engineering', 'Technical drawing'],
    iconType: 'gear',
  },
  {
    id: '3',
    title: 'Finance & Accounts Intern',
    company: 'Example professional services firm',
    location: 'Abuja',
    workType: 'On-site',
    program: 'SIWES / Internship',
    verified: true,
    tags: ['Accounting', 'Spreadsheets'],
    iconType: 'chart',
  },
];

export default function OpportunityBoard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('');

  return (
    <section className="w-full py-10 md:py-14 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Tag */}
        <span className="text-[#00a896] font-bold text-xs uppercase tracking-wider block mb-2">
          DISCOVER YOUR NEXT STEP
        </span>

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Less searching. More possibility.
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base font-normal">
              Explore opportunities by what you study, where you want to work and what you want to learn.
            </p>
          </div>

          <Link
            href="/opportunities"
            className="inline-flex items-center text-sm font-semibold text-[#00a896] hover:text-teal-700 transition-colors shrink-0 gap-1.5"
          >
            <span>Browse all opportunities</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#f3f5f8] border border-slate-200/60 rounded-[24px] p-2.5 sm:p-3 mb-3">
          <form className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center" onSubmit={(e) => e.preventDefault()}>
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Role, skill or keyword"
                className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border-0 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00c2a8] transition-all"
              />
            </div>

            {/* Location Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 bg-white rounded-2xl border-0 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00c2a8] transition-all cursor-pointer"
              >
                <option value="">All locations</option>
                <option value="Lagos">Lagos</option>
                <option value="Ibadan">Ibadan</option>
                <option value="Abuja">Abuja</option>
              </select>
            </div>

            {/* Disciplines Dropdown */}
            <div className="md:col-span-2">
              <select
                value={selectedDiscipline}
                onChange={(e) => setSelectedDiscipline(e.target.value)}
                className="w-full px-4 py-3 bg-white rounded-2xl border-0 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00c2a8] transition-all cursor-pointer"
              >
                <option value="">All disciplines</option>
                <option value="Engineering">Engineering</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            {/* Find Opportunities Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#00c2a8] hover:bg-[#00ab94] text-white font-semibold py-3 px-4 rounded-2xl text-sm transition-colors shadow-sm flex items-center justify-center"
              >
                Find opportunities
              </button>
            </div>

          </form>
        </div>

        {/* Opportunity Board Preview Note */}
        <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-6">
          OPPORTUNITY BOARD PREVIEW · Sample roles and status labels below illustrate the experience. They are not open vacancies.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PREVIEW_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[24px] border border-slate-200/80 p-6 flex flex-col justify-between hover:border-slate-300 transition-all duration-200 shadow-sm/50"
            >
              <div>
                {/* Top Row: Category Icon & Verification Label */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f7f5] text-[#00a896] flex items-center justify-center font-bold text-sm">
                    {card.iconType === 'code' && (
                      <span className="font-mono text-sm font-bold">&lt;/&gt;</span>
                    )}
                    {card.iconType === 'gear' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {card.iconType === 'chart' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                  </div>

                  {card.verified ? (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#e6f7f5] text-[#00a896]">
                      Verified · example
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#fef3c7] text-[#b45309]">
                      Unverified · example
                    </span>
                  )}
                </div>

                {/* Job Title & Company */}
                <h3 className="font-extrabold text-[#0f172a] text-xl tracking-tight mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3">{card.company}</p>

                {/* Location Pin & Program Details */}
                <div className="flex items-center text-xs text-slate-500 gap-1.5 mb-5">
                  <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{card.location} · {card.workType} · {card.program}</span>
                </div>

                {/* Skill/Discipline Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[#f1f5f9] text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Illustration only · Not a live vacancy</span>
                <span className="text-[#00a896] font-bold text-base">↗</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}