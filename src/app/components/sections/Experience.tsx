export default function Experience() {
  const experiences = [
    {
        title: "Security and Product Development Engineer Intern",
        company: "Stiisk LLC, MA",
        period: "08/2024 - 12/2024",
        description: "Led development of web application using HTML5, CSS3, JavaScript, and Three.js by integrating with firebase and Google Cloud Platform and building AI Agents to assist the user in creating 3D models",
        technologies: ["Three.js", "Firebase", "Google Cloud Platform", "AI Agents"]
    },
    {
        title: "Teaching Assistant",
        company: "Boston University, MA",
        period: ["09/2023 - 12/2023", " | 09/2024 - 12/2024"],
        description: "Assisted in teaching courses in Software quality, Testing and Security management by guiding 24 student teams in two semester-long group projects to design and develop real-world software systems using various software engineering techniques taught in the class.",
        technologies: ["Software Quality", "Testing", "Security Management"]
    },
    {
      title: "Software Engineer",
      company: "Capgemini, India",
      period: "01/2021 - 07/2022",
      description: "Managed production servers, overseeing complex data flows from upstream systems through Informatica workflows, and upheld data integrity by proactively managing job executions and preventing data corruption.",
      technologies: ["Python", "MySQL", "Bash Scripting", "Informatica", "Data Warehousing"]
    },
    {
        title: "Core Team Member",
        company: "Global Child Prodigy Awards, India",
        period: "01/2017 - 12/2020",
        description: "Managed production servers, overseeing complex data flows from upstream systems through Informatica workflows, and upheld data integrity by proactively managing job executions and preventing data corruption.",
        technologies: ["React", "Node.js", "AWS", "TypeScript"]
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