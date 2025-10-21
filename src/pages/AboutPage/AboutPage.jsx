import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Heart, Target } from 'lucide-react'
import Container from '../../components/layout/Container/Container'
import Heading from '../../components/ui/Heading/Heading'

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To redefine luxury fashion by blending timeless elegance with sustainable practices and exceptional quality."
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every piece is meticulously crafted using premium materials and traditional techniques perfected over decades."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "We're committed to ethical production and reducing our environmental impact through responsible sourcing."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a global community of fashion enthusiasts who value quality, style, and conscious consumption."
    }
  ]

  const stats = [
    { number: "2010", label: "Year Established" },
    { number: "50K+", label: "Happy Customers" },
    { number: "100+", label: "Design Awards" },
    { number: "5★", label: "Average Rating" }
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
              Our Story
            </Heading>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Elevate was born from a passion for exceptional craftsmanship and timeless design. 
              For over a decade, we've been redefining luxury fashion by blending traditional 
              techniques with contemporary aesthetics.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <Container className="max-w-6xl">
          <div className="text-center mb-16">
            <Heading as="h2" className="mb-4">
              Our Values
            </Heading>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              These principles guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-50">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <Container className="max-w-6xl">
          <div className="text-center mb-16">
            <Heading as="h2" className="mb-4">
              Meet Our Founders
            </Heading>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The passionate individuals behind Elevate's vision and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-48 h-48 bg-neutral-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold mb-2">Sarah Chen</h3>
              <p className="text-primary-600 mb-4">Creative Director & Co-Founder</p>
              <p className="text-neutral-600 leading-relaxed">
                With over 15 years in fashion design, Sarah brings her expertise 
                from Paris and Milan to create collections that redefine modern elegance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-48 h-48 bg-neutral-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold mb-2">Marcus Rodriguez</h3>
              <p className="text-primary-600 mb-4">CEO & Co-Founder</p>
              <p className="text-neutral-600 leading-relaxed">
                Marcus combines business acumen with a passion for sustainable fashion, 
                ensuring Elevate leads in both style and social responsibility.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AboutPage