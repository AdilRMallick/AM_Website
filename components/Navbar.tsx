'use client'

import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-50' : 'bg-black bg-opacity-30'
      } backdrop-blur-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="text-lg sm:text-xl font-bold tracking-wider">ADIL MALLICK</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8">
          <li>
            <a
              href="#home"
              className="hover:opacity-70 transition-opacity font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:opacity-70 transition-opacity font-medium"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:opacity-70 transition-opacity font-medium"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:opacity-70 transition-opacity font-medium"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:opacity-70 transition-opacity font-medium"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg border-t border-white border-opacity-20">
          <ul className="flex flex-col py-4">
            <li>
              <a
                href="#home"
                className="block px-6 py-3 hover:bg-white hover:bg-opacity-10 transition-colors font-medium"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block px-6 py-3 hover:bg-white hover:bg-opacity-10 transition-colors font-medium"
                onClick={closeMenu}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block px-6 py-3 hover:bg-white hover:bg-opacity-10 transition-colors font-medium"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block px-6 py-3 hover:bg-white hover:bg-opacity-10 transition-colors font-medium"
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-6 py-3 hover:bg-white hover:bg-opacity-10 transition-colors font-medium"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}