import React from 'react'

interface ExperienceItem {
    company: string
    role: string
    date: string
    achievements: string[]
  }
  
  const experiences: ExperienceItem[] = [
    {
      company: 'DTE Energy',
      role: 'Cloud and Infrastructure Intern',
      date: 'June 2025 – Present',
      achievements: [
        'Designed and implemented a chatbot for Microsoft Teams using Terraform, integrating APIs (e.g., ServiceNow) to retrieve and present data for 500+ enterprise users',
        'Utilized Microsoft Azure to provision resource groups and deploy APIs, ensuring scalable and reliable backend infrastructure reducing load times by 27%',
        'Collaborated in Agile sprints to develop backend systems supporting cloud and DevOps workflows in a fast-paced enterprise environment',
        'Integrated Power Automate front-end, increasing user efficiency by 50%',
      ],
    },
    {
      company: 'Alchemy Software',
      role: 'Software Engineer',
      date: 'Sep. 2024 – May 2025',
      achievements: [
        'Collaborated with a cross-functional team to design and implement a comprehensive task management application using React, Next.js, and Electron.js',
        'Developed Python automation scripts for email list management utilizing smtplib and pandas to streamline data processing by 33%',
        'Developed a serverless architecture on Cloudflare, integrating API gateway, CloudFormation, and CloudWatch to streamline backend processes, achieving a 33% reduction in loading times',
        'Built a responsive site for Half-Full Task Manager, improving memory efficiency by 46%',
      ],
    },
    {
      company: 'Huda Clinic',
      role: 'Software Engineering Intern',
      date: 'May 2024 – Aug. 2024',
      achievements: [
        'Refactored and streamlined patient onboarding processes by 40% through the integration of Athenahealth APIs, enabling automated data intake and reducing manual entry across healthcare workflows',
        'Designed and implemented a fully responsive, mobile-first UI using modern frameworks, significantly improving performance by 28% and increasing accessibility across multiple platforms',
      ],
    },
  ]
  
  export default function Experience() {
    return (
      <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Experience</h2>
        <div className="flex flex-col gap-6 sm:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white border-opacity-20 hover:transform hover:translate-x-2 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">{exp.company}</h3>
                  <p className="text-lg sm:text-xl opacity-90 font-medium">{exp.role}</p>
                </div>
                <p className="opacity-80 text-sm sm:text-base">{exp.date}</p>
              </div>
              <ul className="list-disc ml-4 sm:ml-6 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="opacity-90 text-sm sm:text-base">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }