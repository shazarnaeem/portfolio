import { motion } from 'framer-motion'

interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "internee.pk",
    period: "June 2024 - August 2024",
    description: "Developed and maintained responsive web applications using modern web technologies. Collaborated with the team to create user-friendly interfaces and implement new features.",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading">Where I've Worked</h2>
          <div className="space-y-12 mt-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-secondary"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-secondary rounded-full"></div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-secondary">
                    {experience.title}
                  </h3>
                  <p className="text-textSecondary">
                    {experience.company} • {experience.period}
                  </p>
                </div>
                <p className="text-textSecondary mb-4">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificate Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary mb-8">Certificates</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-secondary"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-secondary rounded-full"></div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-secondary">
                  Frontend Development Internship
                </h3>
                <p className="text-textSecondary">
                  internee.pk • June 2024 - August 2024
                </p>
              </div>
              <a
                href="/certificates/certificate.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-secondary hover:text-secondary/80 transition-colors"
              >
                <span className="mr-2">View Certificate</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 