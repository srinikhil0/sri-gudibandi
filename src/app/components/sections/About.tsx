import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-foreground to-foreground/70 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-start">
          <div className="space-y-6 order-2 md:order-1">
            <p className="text-lg text-foreground/80">
              I&apos;m a passionate Software Engineer with expertise in building modern web applications. 
              My journey in software development has equipped me with strong problem-solving skills and 
              a deep understanding of web technologies.
            </p>
            <p className="text-lg text-foreground/80">
              I specialize in full-stack development, with a particular focus on 
              React, Node.js, and cloud technologies. I&apos;m always eager to learn 
              new technologies and tackle challenging problems.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="grid grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-foreground/70 rounded-full" />
                  Computer Science Graduate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-foreground/70 rounded-full" />
                  Full-Stack Developer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-foreground/70 rounded-full" />
                  Software Developer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-foreground/70 rounded-full" />
                  Cyber Security Analyst
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-foreground/70 rounded-full" />
                  Continuous Learner
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-foreground/70 rounded-full" />
                  Team Player
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="aspect-square relative rounded-2xl overflow-hidden border-2 border-foreground/10">
              <Image
                src="/profile.jpg"
                alt="Sri Gudibandi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}