import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/srinikhil0',
      icon: SiGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sri-gudibandi/',
      icon: SiLinkedin
    }
  ]

  return (
    <footer className="py-12 px-4 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Let&apos;s Connect</h3>
            <p className="text-foreground/70 mb-6">
              Feel free to reach out on LinkedIn for collaborations or just a friendly hello!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-foreground/60 hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-foreground/70 hover:text-foreground transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-foreground/70 hover:text-foreground transition-colors">
                    Skills
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-foreground/10 text-center text-foreground/60">
          <p>&copy; {currentYear} Sri Gudibandi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 