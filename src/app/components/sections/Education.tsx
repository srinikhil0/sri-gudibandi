export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science, Security",
      school: "Boston University, MA",
      period: "01/2023 - 05/2024",
      description: "Specialized in software development, security analysis and management",
      achievements: ["GPA: 3.54/4.0", "Teaching Assistant", "Course Facilitator"]
    },
    {
        degree: "Bachelor of Engineering in Computer Science and Engineering",
        school: "Sathyabama Institute of Science and Technology, India",
        period: "07/2016 - 05/2020",
        description: "Completed project and paper on Vocal based Parkinson's disease detection using machine learning Models",
        achievements: ["GPA: 7.59/10", "Cognizant Student Club Leader", "NSS Volunteer"]
      },
    // Add more education entries as needed
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-foreground to-foreground/70 text-transparent bg-clip-text">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-foreground/20 pl-6 relative">
              <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[7px] top-2" />
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-foreground/60 mb-2">{edu.school} • {edu.period}</p>
              <p className="mb-3">{edu.description}</p>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 