import React from 'react'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck,
  Heart
} from 'lucide-react'
import Container from '../../layout/Container/Container'
import Heading from '../../ui/Heading/Heading'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'New Arrivals', href: '#' },
        { name: 'Best Sellers', href: '#' },
        { name: 'Women\'s Collection', href: '#' },
        { name: 'Men\'s Collection', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Sale', href: '#' }
      ]
    },
    {
      title: 'Help',
      links: [
        { name: 'Customer Service', href: '#' },
        { name: 'Size Guide', href: '#' },
        { name: 'Shipping Info', href: '#' },
        { name: 'Returns & Exchanges', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'FAQ', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Affiliates', href: '#' },
        { name: 'Student Discount', href: '#' }
      ]
    }
  ]

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $200'
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: '100% protected payments'
    },
    {
      icon: Shield,
      title: '2-Year Warranty',
      description: 'Quality guarantee'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Dedicated support'
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ]

  const paymentMethods = [
    'Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Features Bar */}
      <section className="border-b border-neutral-800">
        <Container className="max-w-7xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-600 rounded-xl">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-neutral-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Footer Content */}
      <Container className="max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-xl"></div>
              <span className="font-display text-2xl font-bold">ELEVATE</span>
            </div>
            
            <p className="text-neutral-400 mb-6 max-w-md leading-relaxed">
              Elevating everyday style with premium fashion collections. 
              We believe in quality, sustainability, and making you look exceptional.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-neutral-400">
                <Mail className="w-4 h-4" />
                <span>hello@elevate-fashion.com</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-400">
                <MapPin className="w-4 h-4" />
                <span>123 Fashion Ave, New York, NY</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors duration-200 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (sectionIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <Heading 
                as="h3" 
                className="text-lg font-semibold mb-6 text-white"
              >
                {section.title}
              </Heading>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Newsletter Section */}
      <section className="border-t border-b border-neutral-800">
        <Container className="max-w-7xl py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Heading as="h3" className="text-2xl mb-2 text-white">
                Stay in Style
              </Heading>
              <p className="text-neutral-400 max-w-md">
                Get exclusive access to new collections, special offers, and style tips.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-neutral-500 w-full lg:w-80"
              />
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium whitespace-nowrap">
                Subscribe
              </button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Bottom Bar */}
      <Container className="max-w-7xl py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-neutral-400 text-sm"
          >
            <span>© {currentYear} Elevate Fashion. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for style lovers everywhere.</span>
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <span className="text-neutral-400 text-sm mr-2">We accept:</span>
            <div className="flex space-x-2">
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  className="px-3 py-1 bg-neutral-800 rounded-md text-neutral-300 text-xs font-medium"
                >
                  {method}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex space-x-6 text-sm"
          >
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              Cookies
            </a>
          </motion.div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer