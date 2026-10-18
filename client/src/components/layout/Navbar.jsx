import Link from 'next/link';
import Image from 'next/image';
import siwesyncLogo from '../../../public/siwesync_logo.png';

export default function Navbar() {
  return (
    <header className='bg-white w-full border-b border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo section */}
          <Link href="/" className='flex items-center gap-2.5 group'>
            <Image
              src={siwesyncLogo}
              alt='Siwesync AI logo'
              width={200}
              height={140}
              priority
              className='object-contain'
            />
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/students" className="text-gray-600 hover:text-teal-600 font-medium text-sm transition-colors">
              For students
            </Link>
            <Link href="/employers" className="text-gray-600 hover:text-teal-600 font-medium text-sm transition-colors">
              For Employers
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-teal-600 font-medium text-sm transition-colors">
              Resources
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <Link href="/login" className="hidden md:block text-gray-600 hover:text-gray-900 font-medium text-sm">
              Sign In
            </Link>
            <Link href={"/signup"} 
            className='bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-md font-medium text-sm transition-colors'>
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}