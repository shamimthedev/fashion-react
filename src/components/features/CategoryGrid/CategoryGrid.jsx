import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Container from '../../layout/Container/Container'
import Heading from '../../ui/Heading/Heading'
import { mockCategories } from '../../../lib/api-client'

const CategoryCard = ({ category }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[3/4] cursor-pointer"
        >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 transition-transform duration-500 group-hover:scale-110" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/80 mb-4">{category.count} items</p>
                    <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium mr-2">Shop Now</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const CategoryGrid = () => {
    return (
        <section className="py-16 bg-white">
            <Container className="max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Heading as="h2" className="mb-4">
                        Shop By Category
                    </Heading>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Explore our diverse collections tailored to your unique style and preferences.
                    </p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mockCategories.map((category, index) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default CategoryGrid