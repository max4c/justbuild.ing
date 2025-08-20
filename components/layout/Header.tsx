'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-bridge-500' : 'text-gray-700 hover:text-bridge-500';
  };

  return (
    <>
      {/* Mobile Navigation - Single bar */}
      <div className="md:hidden absolute top-6 left-4 right-4 z-50 bg-white/95 backdrop-blur-lg rounded-xl px-4 py-3 shadow-lg">
        <nav className="flex justify-between items-center h-12">
          <Link href="/" className="flex items-center mb-1">
            <Image 
              src="/assets/logo.png" 
              alt="JustBuild logo" 
              width={32} 
              height={32}
              className="h-8 w-auto object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className={`font-medium transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link href="/events" className={`font-medium transition-colors ${isActive('/events')}`}>
              Events
            </Link>
            <Link href="/contact" className={`font-medium transition-colors ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>
          <a 
            href="https://tinyurl.com/jb-slackinvite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-bridge-500 text-white px-2 py-1 rounded font-bold text-xs hover:bg-bridge-600 transition-colors"
          >
            Join
          </a>
        </nav>
      </div>

      {/* Desktop Navigation - Split layout */}
      <div className="hidden md:block">
        {/* Left Navigation with Stats */}
        <div className="absolute top-6 left-8 z-50 bg-white/95 backdrop-blur-lg rounded-xl px-6 py-3 shadow-lg">
          <nav className="flex items-center gap-6 h-14">
            <Link href="/" className="flex items-center mb-1">
              <Image 
                src="/assets/wordmark.png" 
                alt="JustBuild wordmark" 
                width={120} 
                height={32}
                className="h-8 w-auto object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className={`font-medium transition-colors ${isActive('/')}`}>
                Home
              </Link>
              <Link href="/events" className={`font-medium transition-colors ${isActive('/events')}`}>
                Events
              </Link>
              <Link href="/contact" className={`font-medium transition-colors ${isActive('/contact')}`}>
                Contact
              </Link>
            </div>
            <div className="w-px h-6 bg-gray-300 ml-4"></div>
            <div className="flex items-center gap-4 ml-4 text-gray-500">
              <div className="text-center">
                <span className="block text-sm font-semibold">250+</span>
                <span className="text-xs uppercase tracking-wider">builders</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="text-center">
                <span className="block text-sm font-semibold">$100K+</span>
                <span className="text-xs uppercase tracking-wider">in prizes</span>
              </div>
            </div>
          </nav>
        </div>

        {/* Right Navigation */}
        <div className="absolute top-6 right-8 z-50 bg-white/95 backdrop-blur-lg rounded-xl px-6 py-3 shadow-lg">
          <nav className="flex items-center h-14">
            <a 
              href="https://tinyurl.com/jb-slackinvite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-bridge-500 text-white px-4 py-2 rounded font-bold text-sm hover:bg-bridge-600 transition-colors"
            >
              Join Slack
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}