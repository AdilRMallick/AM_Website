import React from 'react'
import Image from 'next/image'

export default function Hero() {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-8 fade-in-up"
      >
        <div className="max-w-4xl">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Image
                src="/profile-picture.jpg"
                alt="Adil R. Mallick"
                width={200}
                height={200}
                className="rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
            Adil R. Mallick
          </h1>
          <p className="text-3xl mb-2 opacity-95 font-medium">
            Software Engineer & Cloud Infrastructure Developer
          </p>
          <p className="text-xl mb-8 opacity-85">
            Computer Science @ Michigan State University | Specializing in
            Full-Stack Development & Cloud Solutions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold shadow-xl hover:transform hover:-translate-y-1 transition-all"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/AdilRMallick"
              target="_blank"
              className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:bg-opacity-20 transition-all"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    )
  }