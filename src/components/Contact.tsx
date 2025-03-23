import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const form = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      if (!form.current) return

      const result = await emailjs.sendForm(
        'service_jizrr0l',
        'template_6oaio4s',
        form.current,
        '7ersueRjNmMM1_pUY'
      )

      if (result.text === 'OK') {
        setStatus('success')
        setMessage('Thank you for your message! I will get back to you soon.')
        form.current.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setMessage('Sorry, there was an error sending your message. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-background/50 transition-colors">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <EnvelopeIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:shazarnaeem027@gmail.com"
                    className="text-textSecondary hover:text-secondary transition-colors"
                  >
                    shazarnaeem027@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-background/50 transition-colors">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <PhoneIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+923480752767"
                    className="text-textSecondary hover:text-secondary transition-colors"
                  >
                    +923480752767
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-background/50 transition-colors">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <MapPinIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p className="text-textSecondary">
                    Lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Send a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="title"
                  required
                  placeholder="Message subject"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
                ></textarea>
              </div>

              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status === 'success' ? 'bg-green-100 text-green-700 border border-green-200' :
                    status === 'error' ? 'bg-red-100 text-red-700 border border-red-200' : ''
                  }`}
                >
                  {message}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full bg-secondary text-white py-3 px-6 rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center space-x-2 ${
                  status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/shazarnaeem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-textSecondary hover:text-secondary transition-colors"
            >
              <FaGithub className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shazar-naeem-53ba27292/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-textSecondary hover:text-secondary transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 