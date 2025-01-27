import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="top-0 left-0 right-0 shadow-2xl p-6 z-50">
        <nav className="max-w-6xl mx-auto bg-secondaryColor text-white px-8 py-3 rounded-2xl flex justify-between items-center">
          <div className="logo">
            <a href="/" className="text-lg font-medium hover:text-gray-300">
              SAMRANK.com
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm">
            <a
              href="/#whyus"
              className="hover:scale-105 hover:text-gray-300 transition-transform duration-150"
            >
              Why us
            </a>
            <a
              href="/#services"
              className="hover:scale-105 hover:text-gray-300 transition-transform duration-150"
            >
              Services
            </a>
            <a
              href="/#contact"
              className="hover:scale-105 hover:text-gray-300 transition-transform duration-150"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none z-50"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-secondaryColor z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full text-white text-2xl space-y-8">
          <a
            href="/#whyus"
            className="hover:text-gray-300 transition-colors duration-150 text-center w-full py-4"
            onClick={handleLinkClick}
          >
            Why Us
          </a>
          <a
            href="/#services"
            className="hover:text-gray-300 transition-colors duration-150 text-center w-full py-4"
            onClick={handleLinkClick}
          >
            Services
          </a>
          <a
            href="/#contact"
            className="hover:text-gray-300 transition-colors duration-150 text-center w-full py-4"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;