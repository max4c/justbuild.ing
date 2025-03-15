import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'News', href: '/news' },
    { label: 'Announcements', href: '/announcements' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => router.pathname === path

return (
    <nav className="bg-dark-light py-4 shadow-md">
        <div className="max-w-3xl mx-auto px-4 flex justify-between items-center">
            <Link href="/" legacyBehavior>
                <a className="font-logo text-3xl text-white">{'{'}&nbsp;jb&nbsp;{'}'}</a>
            </Link>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <Link href={item.href} key={item.href} legacyBehavior>
                        <a className={`${
                            isActive(item.href) ? 'text-primary' : 'text-white'
                        } hover:text-primary transition-colors`}>
                            {item.label}
                        </a>
                    </Link>
                ))}
            </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <div className="md:hidden px-4 py-2 bg-dark-lighter">
                <div className="flex flex-col space-y-3">
                    {navItems.map((item) => (
                        <Link href={item.href} key={item.href} legacyBehavior>
                            <a 
                                className={`${
                                    isActive(item.href) ? 'text-primary' : 'text-white'
                                } hover:text-primary transition-colors py-1`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        )}
    </nav>
)
}
