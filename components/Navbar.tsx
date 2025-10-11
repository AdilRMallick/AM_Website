'use client'

import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-50' : 'bg-black bg-opacity-30'
      } backdrop-blur-lg`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider">ADIL MALLICK</div>
        <ul className="flex gap-8">
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
      </div>
    </nav>
  )
}