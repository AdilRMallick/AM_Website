import React from 'react'

export default function Contact() {
    return (
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Let's Connect</h2>
        <p className="text-lg sm:text-xl mb-4 sm:mb-6">
          Feel free to reach out for collaborations or opportunities!
        </p>
        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">
          <a
            href="mailto:mallick9@msu.edu"
            className="border-b-2 border-white hover:opacity-70 transition-opacity"
          >
            mallick9@msu.edu
          </a>
          <span className="hidden sm:inline">{' | '}</span>
          <br className="sm:hidden" />
          <a
            href="tel:7349997794"
            className="border-b-2 border-white hover:opacity-70 transition-opacity"
          >
            (734) 999-7794
          </a>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a
            href="https://github.com/AdilRMallick"
            target="_blank"
            className="w-full sm:w-auto border-2 border-white border-opacity-50 px-6 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-20 hover:border-white transition-all"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adil-mallick-5332662a7"
            target="_blank"
            className="w-full sm:w-auto border-2 border-white border-opacity-50 px-6 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-20 hover:border-white transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mallick9@msu.edu"
            className="w-full sm:w-auto border-2 border-white border-opacity-50 px-6 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-20 hover:border-white transition-all"
          >
            Email
          </a>
        </div>
      </section>
    )
  }