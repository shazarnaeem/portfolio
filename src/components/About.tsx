import { motion } from 'framer-motion'

const skills = [
  "HTML & CSS",
  "JavaScript",
  "Bootstrap",
  "Java",
  "Flutter (Dart)",
  "MySQL",
  "Firebase",
  "Node.js",
  "Git"
]

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-full max-w-md rounded-lg shadow-lg object-cover mx-auto"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            <div className="absolute inset-0 bg-secondary/20 rounded-lg -z-10 translate-x-4 translate-y-4"></div>
          </div>
          <div>
            <h2 className="heading">About Me</h2>
            <p className="text-textSecondary mb-6">
              I'm a passionate full-stack developer with expertise in both frontend and backend development. 
              My experience spans across creating responsive web applications and cross-platform mobile apps. 
              I specialize in building user-friendly interfaces and implementing robust backend solutions using modern technologies.
            </p>
            <p className="text-textSecondary mb-8">
              With a strong foundation in web development and mobile app creation, I focus on delivering 
              high-quality, scalable solutions that meet client needs. My expertise includes developing 
              responsive web applications, creating cross-platform mobile apps with Flutter, and implementing 
              secure backend solutions.
            </p>
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 