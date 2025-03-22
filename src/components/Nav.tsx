'use client';

import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-heading">
              Logo
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-paragraph hover:text-secondary">
              Home
            </Link>
            <Link href="/about" className="text-paragraph hover:text-secondary">
              About
            </Link>
            <Link href="/projects" className="text-paragraph hover:text-secondary">
              Projects
            </Link>
            <Link href="/contact" className="text-paragraph hover:text-secondary">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-paragraph hover:text-secondary hover:bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-paragraph hover:text-secondary hover:bg-[#f9f9f9] rounded-md">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-paragraph hover:text-secondary hover:bg-[#f9f9f9] rounded-md">
              About
            </Link>
            <Link href="/projects" className="block px-3 py-2 text-paragraph hover:text-secondary hover:bg-[#f9f9f9] rounded-md">
              Projects
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-paragraph hover:text-secondary hover:bg-[#f9f9f9] rounded-md">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav; 