'use client' // Make sure this is at the top

import React, { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver' // 1. Import the hook

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null) // 2. Create a ref for the section
  const isVisible = useIntersectionObserver(sectionRef) // 3. Use the hook

  return (
    <section
      id="education"
      ref={sectionRef} // 4. Attach the ref to the section element
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto transition-opacity duration-1000 ${
        // 5. Conditionally apply the animation class
        isVisible ? 'opacity-100 fade-in-up' : 'opacity-0'
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Education</h2>
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white border-opacity-20 hover:transform hover:translate-x-2 transition-all">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Michigan State University</h3>
        <p className="text-lg sm:text-xl opacity-90 mb-2">
          B.S. in Computer Science, Minor in Business
        </p>
        <p className="opacity-80 mb-4 text-sm sm:text-base">Expected Graduation: May 2027 | Lansing, MI</p>
        <p className="opacity-90 text-sm sm:text-base">
          Coursework: Data Structures & Algorithms, Modern C++ Programming,
          Discrete Mathematics, Multivariable Calculus, Computer Systems &
          Architecture, Linear Algebra & Matrix Computations
        </p>
      </div>
    </section>
  )
}