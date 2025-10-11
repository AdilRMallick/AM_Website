import React from 'react'

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
    return (
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="flex flex-col gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20"
            >
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white bg-opacity-20 backdrop-blur-lg px-5 py-3 rounded-full font-medium text-sm"
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