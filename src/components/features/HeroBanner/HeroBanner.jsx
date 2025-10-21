import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import Container from '../../layout/Container/Container'
import Flex from '../../ui/Flex/Flex'
import Heading from '../../ui/Heading/Heading'
import Button from '../../ui/Button/Button'

const HeroBanner = () => {
    return (
        <section className="relative bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent" />

            <Container className="relative max-w-7xl py-20 lg:py-32">
                <Flex className="items-center justify-between gap-12 lg:gap-20">
                    {/* Content */}
                    <motion.div
                        className="flex-1 max-w-2xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            New Summer Collection
                        </div>

                        <Heading as="h1" className="mb-6 leading-tight">
                            Elevate Your Style with{' '}
                            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                                Premium Fashion
                            </span>
                        </Heading>

                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-lg">
                            Discover curated collections that blend timeless elegance with contemporary design.
                            Experience luxury fashion crafted for the modern individual.
                        </p>

                        <Flex className="flex-col sm:flex-row gap-4">
                            <Button size="lg" className="group">
                                Shop Collection
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" size="lg">
                                Explore Lookbook
                            </Button>
                        </Flex>

                        {/* Stats */}
                        <Flex className="mt-12 gap-8 text-center">
                            <div>
                                <div className="text-2xl font-display font-bold text-neutral-900">10K+</div>
                                <div className="text-sm text-neutral-600">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-2xl font-display font-bold text-neutral-900">500+</div>
                                <div className="text-sm text-neutral-600">Premium Products</div>
                            </div>
                            <div>
                                <div className="text-2xl font-display font-bold text-neutral-900">5★</div>
                                <div className="text-sm text-neutral-600">Average Rating</div>
                            </div>
                        </Flex>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        className="flex-1 hidden lg:block"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl transform rotate-3"></div>
                            <div className="relative bg-neutral-100 rounded-3xl aspect-[4/5] shadow-2xl overflow-hidden">
                                {/* Placeholder for heroBanner image */}
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
                                    <div className="text-center text-neutral-500">
                                        <div className="w-16 h-16 bg-primary-500 rounded-full mx-auto mb-4"></div>
                                        <p className="text-sm">Premium Fashion Visual</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Flex>
            </Container>
        </section>
    )
}

export default HeroBanner