import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className='bg-white w-full border-b border-gray-100'>
      <div>
        <div>
          {/* Logo section */}
          <Link href="/">
            <Image src={}/>
          </Link>
        </div>
      </div>
    </header>
  );
}