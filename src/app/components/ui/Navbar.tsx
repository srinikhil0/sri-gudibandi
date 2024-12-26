'use client'

import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            SG
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-gray-400 transition">About</Link>
            <Link href="#experience" className="hover:text-gray-400 transition">Experience</Link>
            <Link href="#projects" className="hover:text-gray-400 transition">Projects</Link>
            <Link href="#education" className="hover:text-gray-400 transition">Education</Link>
            <Link href="#contact" className="hover:text-gray-400 transition">Contact</Link>
            <ThemeToggle />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
            <Link href="#about" className="block px-3 py-2 hover:text-gray-400 transition">About</Link>
            <Link href="#experience" className="block px-3 py-2 hover:text-gray-400 transition">Experience</Link>
            <Link href="#projects" className="block px-3 py-2 hover:text-gray-400 transition">Projects</Link>
            <Link href="#education" className="block px-3 py-2 hover:text-gray-400 transition">Education</Link>
            <Link href="#contact" className="block px-3 py-2 hover:text-gray-400 transition">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}