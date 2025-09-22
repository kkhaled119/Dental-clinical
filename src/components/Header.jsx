import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-dental-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🦷</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Dental Care</h1>
              <p className="text-sm text-gray-600">City Dental Center</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 ${
                location.pathname === "/"
                  ? "text-primary-600 font-semibold"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-200 ${
                location.pathname === "/about"
                  ? "text-primary-600 font-semibold"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`transition-colors duration-200 ${
                location.pathname === "/services"
                  ? "text-primary-600 font-semibold"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-200 ${
                location.pathname === "/contact"
                  ? "text-primary-600 font-semibold"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* WhatsApp Button - Hidden on mobile */}
          <a
            href="https://wa.me/201014547230"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full items-center space-x-2 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <span className="text-xl">📱</span>
            <span className="font-medium">Book Appointment</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
                  location.pathname === "/"
                    ? "bg-primary-50 text-primary-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
                  location.pathname === "/about"
                    ? "bg-primary-50 text-primary-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
                  location.pathname === "/services"
                    ? "bg-primary-50 text-primary-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
                  location.pathname === "/contact"
                    ? "bg-primary-50 text-primary-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile WhatsApp Button */}
              <a
                href="https://wa.me/201014547230"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-xl">📱</span>
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
