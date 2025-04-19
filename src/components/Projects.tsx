import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
  }
]

const moreProjects = [
  {
    title: "Weather Forecast – Real-Time Weather App",
    description: "A modern weather application that provides real-time weather updates using the OpenWeather API. Users can search by city or use their current location to get detailed weather data including temperature, humidity, pressure, and a 5-day forecast.",
    technologies: ["HTML5", "CSS3", "JavaScript", "OpenWeather API"],
    image: "/images/weather.jpg",
    github: "https://github.com/shazarnaeem/weatherwebsite",
    liveDemo: "https://myforcast.netlify.app",
    features: [
      "Search by City or Use Geolocation",
      "Real-Time Weather Data & 5-Day Forecast",
      "Temperature Toggle (°C / °F)",
      "Dynamic Icons Based on Weather",
      "Responsive Design with Smooth Animations",
      "Error Handling for Location & API Issues"
    ],
    challenges: [
      "Integrating OpenWeather API for both current weather and forecast",
      "Handling geolocation permissions and fallbacks",
      "Creating smooth animations and dynamic UI effects"
    ],
    outcome: "This app delivers real-time weather updates in a clean, responsive UI with both city-based and location-based functionality. It enhances user engagement through interactive elements and clear weather data visualization."
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

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Featured Project</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Here's a showcase of my most recent project, demonstrating my skills in mobile app development and user experience design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-4">{project.title}</h3>
                <p className="text-textSecondary mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    View on GitHub →
                  </a>
                  <Link
                    to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">More Projects</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Explore more of my work showcasing various technologies and development approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moreProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">{project.title}</h3>
                <p className="text-textSecondary mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 transition-colors text-sm"
                  >
                    GitHub →
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-secondary/80 transition-colors text-sm"
                    >
                      Live Demo →
                    </a>
                  )}
                  <Link
                    to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-secondary hover:text-secondary/80 transition-colors text-sm"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 