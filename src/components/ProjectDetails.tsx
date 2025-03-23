import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  github: string
  liveDemo?: string
  features: string[]
  challenges: string[]
  outcome: string
}

const projects: Project[] = [
  {
    title: "CarAid – On-Demand Car Service Booking App",
    description: "A Flutter-based mobile application that allows customers to book vehicle maintenance services at their preferred date, time, and location. The app ensures a seamless experience by dispatching professional mechanics with the necessary equipment directly to the customer's home.",
    technologies: ["Flutter", "Dart", "Firebase", "Firestore"],
    image: "/images/caraid.jpg",
    github: "https://github.com/shazarnaeem",
    features: [
      "Service Booking – Customers can schedule car repairs and maintenance easily",
      "Location-Based Assistance – Mechanics are assigned based on the user's location",
      "Real-Time Scheduling – Users select their preferred date and time for service",
      "Mechanic Dispatch System – Assigns professionals with the right tools based on service type",
      "Service Tracking – Customers receive updates on mechanic arrival and service progress",
      "Customer Reviews & Ratings – Ensures high-quality service with feedback from customers"
    ],
    challenges: [
      "Real-Time Booking System – Implemented Firestore to manage instant booking updates",
      "Efficient Mechanic Dispatching – Used location-based logic to assign the nearest available professional",
      "User-Friendly Interface – Designed a simple and intuitive UI for easy navigation and scheduling"
    ],
    outcome: "CarAid streamlines car maintenance by offering on-demand, doorstep servicing with trusted mechanics. The app enhances customer convenience, reduces waiting time, and ensures high-quality repairs with verified professionals."
  },
  {
    title: "Cryptophy - Cryptography Tools Website",
    description: "A comprehensive website featuring various cryptography tools and utilities for encryption, decryption, and secure data handling. Built with vanilla HTML, CSS, and JavaScript, the platform provides a user-friendly interface for common cryptographic operations.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/images/cryptophy.jpg",
    github: "https://github.com/shazarnaeem/cryptophy-",
    liveDemo: "https://cryptophy.netlify.app/",
    features: [
      "Multiple Encryption Algorithms",
      "Text & File Encryption/Decryption",
      "Hash Generation",
      "Password Strength Checker",
      "Secure Key Generation",
      "Interactive UI with Real-time Results"
    ],
    challenges: [
      "Implementing Secure Encryption Methods",
      "Handling Large File Operations",
      "Creating Intuitive User Interface",
      "Ensuring Cross-browser Compatibility"
    ],
    outcome: "Developed a comprehensive cryptography platform that makes complex cryptographic operations accessible to users while maintaining security and performance."
  }
]

const ProjectDetails = () => {
  const { projectId } = useParams()
  const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === projectId)

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-secondary mb-4">Project not found</h1>
        <Link to="/" className="text-secondary hover:text-secondary/80 transition-colors">
          Back to Portfolio
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <Link to="/" className="text-secondary hover:text-secondary/80 transition-colors mb-8 inline-block">
        ← Back to Portfolio
      </Link>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary mb-6">{project.title}</h1>
        
        <div className="relative mb-8">
          <div className="w-full max-w-3xl mx-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg object-contain"
              style={{ maxHeight: '600px', objectPosition: 'center' }}
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-textSecondary mb-8">{project.description}</p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary/10 text-secondary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-textSecondary space-y-2">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Challenges & Solutions</h2>
            <ul className="list-disc list-inside text-textSecondary space-y-2">
              {project.challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Outcome</h2>
            <p className="text-textSecondary">{project.outcome}</p>
          </div>

          <div className="flex gap-6 mt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-colors"
            >
              View on GitHub →
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors"
              >
                View Live Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDetails 