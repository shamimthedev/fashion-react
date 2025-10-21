import React from 'react'

// Feature Components
import Hero from "../../components/features/HeroBanner/HeroBanner"
import CategoryGrid from "../../components/features/CategoryGrid/CategoryGrid"
import ProductGrid from "../../components/features/ProductGrid/ProductGrid"
import Testimonials from "../../components/features/Testimonials/Testimonials"

const HomePage = () => {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <Testimonials />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers worldwide and experience premium fashion like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
              Start Shopping Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-neutral-900 transition-all">
              Browse Collection
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage