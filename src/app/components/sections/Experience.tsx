export default function Experience() {
  const experiences = [
    {
      title: "Course Facilitator",
      company: "Boston University, MA",
      period: "01/2025 - Present",
      description: "Facilitating the Software Engineering course, focusing on Software Quality, Testing, and Security Management. Guiding 2 student teams in online course format for term projects to develop real-world software projects using agile methodologies.",
      technologies: ["Software Engineering", "Testing", "Security Management", "Agile"]
    },
    {
        title: "Security and Product Development Engineer Intern",
        company: "Stiisk LLC, MA",
        period: "07/2024 - 12/2024",

        description: "Leading development of web application using HTML5, CSS3, JavaScript, and Three.js. Integrating with Firebase and Google Cloud Platform, and building AI Agents to assist users in creating 3D models. Implementing secure authentication and authorization mechanisms.",
        technologies: ["Three.js", "Firebase", "Google Cloud Platform", "AI Agents", "Security"]
    },
    {
        title: "Teaching Assistant",
        company: "Boston University, MA",
        period: ["09/2023 - 12/2023 | ", "09/2024 - 12/2024"],
        description: "Assisting in teaching Software Engineering courses, focusing on Software Quality, Testing, and Security Management. Guiding 24 student teams in semester-long projects to develop real-world software projects using agile methodologies.",
        technologies: ["Software Engineering", "Testing", "Security Management", "Agile"]
    },
    {
      title: "Software Engineer",
      company: "Capgemini, India",
      period: "01/2021 - 07/2022",
      description: "Led development of data pipelines and ETL processes using Python and Informatica PowerCenter. Automated server monitoring and maintenance tasks, reducing manual intervention by 40%. Implemented data quality checks and validation procedures.",
      technologies: ["Python", "MySQL", "Shell Scripting", "Informatica", "ETL", "Data Warehousing"]
    },
    {
        title: "Core Team Member",
        company: "Global Child Prodigy Awards, India",
        period: "01/2017 - 12/2020",
        description: "Developed and maintained the organization's web platform using React and Node.js. Implemented secure user authentication and data management systems. Collaborated with cross-functional teams to enhance platform features and user experience.",
        technologies: ["React", "Node.js", "Firebase", "TypeScript"]
      },
    // Add more experiences as needed
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-foreground to-foreground/70 text-transparent bg-clip-text">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-foreground/20 pl-6 relative">
              <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[7px] top-2" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-foreground/60 mb-2">{exp.company} • {exp.period}</p>
              <p className="mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 