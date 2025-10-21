import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Container from '../../components/layout/Container/Container'
import Heading from '../../components/ui/Heading/Heading'
import Button from '../../components/ui/Button/Button'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@elevate-fashion.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Fashion Avenue",
      description: "New York, NY 10001"
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: "Mon-Sat: 10AM-8PM",
      description: "Sunday: 12PM-6PM"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-primary-50 py-20">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Heading as="h1" className="mb-6">
              Get In Touch
            </Heading>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Whether you have questions about our products, 
              need styling advice, or just want to say hello, we're here to help.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading as="h2" className="mb-8">
                Contact Information
              </Heading>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="text-neutral-900 font-medium">{info.details}</p>
                      <p className="text-neutral-600 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-neutral-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Fashion Avenue, New York</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading as="h2" className="mb-8">
                Send us a Message
              </Heading>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="What's this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <Container className="max-w-4xl">
          <div className="text-center mb-16">
            <Heading as="h2" className="mb-4">
              Frequently Asked Questions
            </Heading>
            <p className="text-lg text-neutral-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is your return policy?",
                answer: "We offer a 30-day return policy for all unworn items with original tags. Returns are free and easy."
              },
              {
                question: "How long does shipping take?",
                answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days."
              },
              {
                question: "Do you offer international shipping?",
                answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and times vary by location."
              },
              {
                question: "Can I modify or cancel my order?",
                answer: "You can modify or cancel your order within 1 hour of placement. Contact us immediately for assistance."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-soft"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ContactPage