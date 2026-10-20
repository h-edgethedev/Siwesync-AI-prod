'use client';

import Link from 'next/link';
import Image from 'next/image';
import siwesyncLogo from '../../../public/siwesync_logo.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 text-slate-600">
      <div className="max-w-330 mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info (Left 5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <Image
                src= {siwesyncLogo}
                alt= "Siwesync AI Logo"
                width={240}
                height={160}
                className="object-contain"
              />
            </Link>

            <div className="space-y-1">
              <p className="font-extrabold text-[#0f172a] text-sm">
                Syncing Students with Opportunity.
              </p>
              <p className="text-xs text-slate-400 font-normal max-w-sm leading-relaxed">
                A clearer path to SIWES and internships for Nigerian students.
              </p>
            </div>
          </div>

          {/* Navigation Links (Right 7 Cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            
            {/* Column 1: Explore */}
            <div className="space-y-3">
              <h3 className="font-extrabold text-[#0f172a] uppercase tracking-wider text-[11px]">
                Explore
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/opportunities" className="hover:text-[#00a896] transition-colors">
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-[#00a896] transition-colors">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-[#00a896] transition-colors">
                    Student resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Your journey */}
            <div className="space-y-3">
              <h3 className="font-extrabold text-[#0f172a] uppercase tracking-wider text-[11px]">
                Your journey
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/signup" className="hover:text-[#00a896] transition-colors">
                    Create account
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-[#00a896] transition-colors">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link href="/cv-guidance" className="hover:text-[#00a896] transition-colors">
                    CV guidance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Help & policies */}
            <div className="space-y-3">
              <h3 className="font-extrabold text-[#0f172a] uppercase tracking-wider text-[11px]">
                Help &amp; policies
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/contact" className="hover:text-[#00a896] transition-colors">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#00a896] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#00a896] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>&copy; 2026 SIWESync AI. All rights reserved.</p>
          <p>Opportunity and product previews are illustrative, not live listings.</p>
        </div>

      </div>
    </footer>
  );
}