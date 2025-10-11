import React from 'react'

export default function Contact() {
    return (
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Let's Connect</h2>
        <p className="text-xl mb-6">
          Feel free to reach out for collaborations or opportunities!
        </p>
        <p className="text-xl mb-8">
          <a
            href="mailto:mallick9@msu.edu"
            className="border-b-2 border-white hover:opacity-70 transition-opacity"
          >
            mallick9@msu.edu
          </a>
          {' | '}
          <a
            href="tel:7349997794"
            className="border-b-2 border-white hover:opacity-70 transition-opacity"
          >
            (734) 999-7794
          </a>
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href="https://github.com/AdilRMallick"
            target="_blank"
            className="border-2 border-white border-opacity-50 px-6 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-20 hover:border-white transition-all"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/adil-mallick"
            target="_blank"
            className="border-2 border-white border-opacity-50 px-6 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-20 hover:border-white transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mallick9@msu.edu"
            className="border-2 border-white border-opacity-50 px-6 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-20 hover:border-white transition-all"
          >
            Email
          </a>
        </div>
      </section>
    )
  }