import React from 'react'
import Image from 'next/image'

export default function Hero() {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-4 sm:px-8 fade-in-up"
      >
        <div className="max-w-4xl">
          {/* Profile Picture */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative">
              <Image
                src="/profile-picture.jpg"
                alt="Adil R. Mallick"
                width={200}
                height={200}
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Adil R. Mallick
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 opacity-95 font-medium">
            Software Engineer & Cloud Infrastructure Developer
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-85 px-4">
            Computer Science @ Michigan State University | Specializing in
            Full-Stack Development & Cloud Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-transparent text-white border-2 border-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:bg-opacity-20 transition-all text-sm sm:text-base"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download="Adil_Mallick_Resume.pdf"
              className="w-full sm:w-auto bg-transparent text-white border-2 border-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:bg-opacity-20 transition-all text-sm sm:text-base"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/AdilRMallick"
              target="_blank"
              className="w-full sm:w-auto bg-transparent text-white border-2 border-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:bg-opacity-20 transition-all text-sm sm:text-base"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    )
  }