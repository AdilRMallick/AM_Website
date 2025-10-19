'use client'

import React, { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface SkillCategory {
    title: string
    skills: string[]
  }
  
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'HTML/CSS', 'C++', 'Terraform', 'SQL'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        'Node.js',
        'React.js',
        'Next.js',
        'Flask',
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Arduino',
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        'Microsoft Azure',
        'AWS',
        'Git',
        'IntelliJ IDEA',
        'PyCharm',
        'Visual Studio',
        'NumPy',
        'Pandas',
        'Bootstrap',
        'VMWare',
      ],
    },
    {
      title: 'Certifications',
      skills: ['CompTIA A+ Cyber Security', 'Cisco IT Essentials'],
    },
  ]
  
  export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null)
    const isVisible = useIntersectionObserver(sectionRef)

    return (
      <section
        id="skills"
        ref={sectionRef}
        className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto transition-opacity duration-1000 ${
          isVisible ? 'opacity-100 fade-in-up' : 'opacity-0'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Technical Skills</h2>
        <div className="flex flex-col gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white border-opacity-20 hover:transform hover:translate-x-2 transition-all"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white bg-opacity-20 backdrop-blur-lg px-3 sm:px-5 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }