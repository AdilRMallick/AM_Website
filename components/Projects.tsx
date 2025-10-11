import React from 'react'

interface Project {
    title: string
    tech: string
    description: string[]
    link: string
  }
  
  const projects: Project[] = [
    {
      title: 'ZenTube',
      tech: 'Next.js, React, Node.js, Tailwind CSS, YouTube Data API v3',
      description: [
        'Engineered dynamic routing system using Next.js file-based architecture and [param] folders, enabling SEO-optimized URLs across 3+ core pages and improving user navigation by 30%',
        'Designed 3 custom serverless API endpoints to efficiently proxy YouTube Data API calls, reducing frontend load time by 40% through asynchronous data fetching',
      ],
      link: 'https://github.com/AdilRMallick',
    },
    {
      title: 'Movie Recommender System',
      tech: 'Python, Scikit-learn, Pandas, NumPy, Streamlit',
      description: [
        'Built a hybrid recommendation engine combining collaborative filtering (NMF) and content-based filtering (TF-IDF + cosine similarity), achieving 23% higher accuracy over baseline models',
        'Implemented an end-to-end ranking pipeline (recall, first-stage, final scoring) with sparse matrix optimizations, reducing query latency by 35% and enabling real-time recommendations via an interactive Streamlit dashboard',
      ],
      link: 'https://github.com/AdilRMallick',
    },
  ]
  
  export default function Projects() {
    return (
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:transform hover:-translate-y-2 transition-all"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm opacity-80 italic mb-4">{project.tech}</p>
              {project.description.map((desc, i) => (
                <p key={i} className="opacity-90 mb-3 text-sm">
                  {desc}
                </p>
              ))}
              <a
                href={project.link}
                target="_blank"
                className="inline-block text-white font-semibold border-b-2 border-white pb-1 hover:opacity-70 transition-opacity"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>
    )
  }