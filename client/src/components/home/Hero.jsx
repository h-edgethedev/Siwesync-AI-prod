import Image from "next/image"
import Link from "next/link"
import heroStudents from '../../../public/hero_students.png';

export default function HeroSection(){
    return(
        <section className="w-full pt-10 pb-16 md:pt-14 md:pb-20 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Messaging & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              For Students Seeking Placements
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Your next opportunity.{' '}
              <span className="text-teal-600 block sm:inline">
                A clearer way to get there.
              </span>
            </h1>

            {/* Sub-headline */}
            <div className="text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed space-y-1">
              <p className="font-semibold text-gray-900">Guiding Students into Placements.</p>
              <p>
                Discover relevant SIWES, teaching practice, and internship placements, 
                and take total control of your career journey from one central platform.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3.5 rounded-full shadow-sm transition-all duration-200 gap-2 text-sm sm:text-base"
              >
                <span>Find an internship</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3.5 rounded-full transition-colors text-sm sm:text-base"
              >
                Explore features
              </Link>
            </div>

            {/* Trust Micro-text */}
            <p className="text-xs text-gray-500 pt-1">
              No hidden processes. Transparent application routes built for students.
            </p>
          </div>

          {/* Right Column: Visual Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
              
              {/* Student Image */}
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={heroStudents} // Add your image in public/hero-students.jpg
                  alt="Students working together"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Floating Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-teal-600 tracking-wider uppercase block">
                      AI MATCHING ENGINE
                    </span>
                    <p className="text-sm font-bold text-gray-900 leading-tight">
                      Find work worth preparing for
                    </p>
                  </div>
                </div>

                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    )
}