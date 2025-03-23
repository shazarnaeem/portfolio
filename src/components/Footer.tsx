import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-textSecondary">
            © {new Date().getFullYear()} Shazar Naeem. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 