import React from 'react'

export default function Education() {
    return (
      <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
          <h3 className="text-3xl font-bold mb-2">Michigan State University</h3>
          <p className="text-xl opacity-90 mb-2">
            B.S. in Computer Science, Minor in Business
          </p>
          <p className="opacity-80 mb-4">Expected Graduation: May 2027 | Lansing, MI</p>
          <p className="opacity-90">
            Coursework: Data Structures & Algorithms, Modern C++ Programming,
            Discrete Mathematics, Multivariable Calculus, Computer Systems &
            Architecture, Linear Algebra & Matrix Computations
          </p>
        </div>
      </section>
    )
  }