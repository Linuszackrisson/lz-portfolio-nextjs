'use client';

import { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200/90 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <a href="#hem" className="text-xl font-bold text-heading hover:text-secondary">
              Linus Zackrisson
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 font-semibold">
            <a href="#om-mig" className="text-base md:text-lg text-heading hover:text-secondary">
              Om mig
            </a>
            <a href="#projekt" className="text-base md:text-lg text-heading hover:text-secondary">
              Projekt
            </a>
            <a href="#kontakt" className="text-base md:text-lg text-heading hover:text-secondary">
              Kontakt
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-paragraph hover:text-secondary hover:bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
            >
              <span className="sr-only">Öppna meny</span>
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
            <a href="#om-mig" className="block px-3 py-2 text-heading hover:text-secondary hover:bg-[#f9f9f9] rounded-md">
              Om mig
            </a>
            <a href="#projekt" className="block px-3 py-2 text-heading hover:text-secondary hover:bg-[#f9f9f9] rounded-md">
              Projekt
            </a>
            <a href="#kontakt" className="block px-3 py-2 text-heading hover:text-secondary hover:bg-[#f9f9f9] rounded-md">
              Kontakt
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav; 