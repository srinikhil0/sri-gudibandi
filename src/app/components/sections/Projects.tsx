'use client'

import Image from 'next/image'
import { useState } from 'react'
import { getImagePath } from '@/utils/imagePath'

interface Project {
  title: string
  description: string
  tech: string[]
  url: string
  image: string
  github: string
  categories: string[]
}

const projects: Project[] = [
  {
    title: "PawsitiveId",
    description: "A web application designed to estimate dog breeds from user-uploaded photos. Uses machine learning to approximate breed makeup based on physical characteristics, providing a quick alternative to genetic tests.",
    tech: ["Angular", "Machine Learning", "Firebase", "Web Development"],
    url: "https://pawsitiveid-10f0e.web.app/home",
    image: getImagePath('/projects/pawsitive_id.webp'),
    github: "https://github.com/srinikhil0/pawsitive_id_Angular",
    categories: ["Full Stack", "Machine Learning", "Web Development"]
  },
  {
    title: "Vocal Based Parkinson's Disease Detection",
    description: "A research study analyzing algorithm accuracy for Parkinson's disease prediction using vocal data. XGBoost achieved 96% accuracy in classification, demonstrating superior performance.",
    tech: ["Python", "Machine Learning", "Research", "Healthcare"],
    url: "",
    image: getImagePath('/projects/parkinson.webp'),
    github: "https://github.com/srinikhil0/Vocal-based-parkinson-disease-detection-using-machine-learning-algorithms",
    categories: ["Machine Learning", "Research", "Healthcare"]
  },
  {
    title: "PiviWatch",
    description: "An innovative project designed to revolutionize video surveillance through advanced motion detection and encryption technology. Enhances privacy by selectively encrypting areas within video frames where motion is detected.",
    tech: ["Python", "Machine Learning", "Encryption", "OpenCV"],
    url: "",
    image: getImagePath('/projects/piviwatch.png'),
    github: "https://github.com/srinikhil0/PiviWatch",
    categories: ["Machine Learning", "Computer Vision", "Cybersecurity"]
  }
]

const PROJECTS_PER_PAGE = 6
const CATEGORIES = ["All", "Cybersecurity", "Machine Learning", "Full Stack", "Research", "Healthcare", "Web Development"]

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" ? true : project.categories.includes(selectedCategory)
  )

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  )

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-start/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 text-transparent bg-clip-text">
          Featured Projects
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-foreground/5 hover:bg-foreground/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-background border border-foreground/10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  priority={index === 0 && currentPage === 1}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-foreground/60 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition flex items-center gap-2"
                      title="Visit Live Site"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition flex items-center gap-2"
                    title="View Source Code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full transition-all ${
                  currentPage === i + 1
                    ? 'bg-foreground text-background'
                    : 'bg-foreground/5 hover:bg-foreground/10'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}