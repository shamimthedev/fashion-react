import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Container from '../../layout/Container/Container'
import Heading from '../../ui/Heading/Heading'
import { cn } from '../../../lib/utils'

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Fashion Influencer",
    content: "The quality of these pieces is exceptional. I've never felt more confident in my clothing choices. Elevate truly understands modern luxury.",
    rating: 5,
    avatar: "/api/placeholder/100/100"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Business Executive",
    content: "From casual wear to formal attire, every piece I've purchased has exceeded expectations. The attention to detail is remarkable.",
    rating: 5,
    avatar: "/api/placeholder/100/100"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Interior Designer",
    content: "The fabrics are luxurious and the fits are perfect. I've recommended Elevate to all my fashion-conscious friends.",
    rating: 5,
    avatar: "/api/placeholder/100/100"
  }
]

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300"
    >
      <Quote className="w-8 h-8 text-primary-600 mb-4" />
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-5 h-5",
              i < testimonial.rating ? "text-accent-warning fill-current" : "text-neutral-300"
            )}
          />
        ))}
      </div>
      
      <p className="text-neutral-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-neutral-200 rounded-full mr-4"></div>
        <div>
          <div className="font-semibold text-neutral-900">{testimonial.name}</div>
          <div className="text-sm text-neutral-500">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <Container className="max-w-7xl">
        <div className="text-center mb-12">
          <Heading as="h2" className="mb-4">
            Loved by Fashion Enthusiasts
          </Heading>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover why thousands of customers trust Elevate for their premium fashion needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-8 border-t border-neutral-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-neutral-900 mb-2">10K+</div>
            <div className="text-neutral-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neutral-900 mb-2">4.9/5</div>
            <div className="text-neutral-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neutral-900 mb-2">24/7</div>
            <div className="text-neutral-600">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neutral-900 mb-2">100%</div>
            <div className="text-neutral-600">Quality Guarantee</div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials