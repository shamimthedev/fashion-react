import React from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, ShoppingBag } from 'lucide-react'
import Container from '../../layout/Container/Container'
import Heading from '../../ui/Heading/Heading'
import { Card, CardContent } from '../../ui/Card/Card'
import { useFeaturedProducts } from '../../../hooks/useProducts'
import { cn } from '../../../lib/utils'

const ProductCard = ({ product }) => {
    const hasDiscount = product.discountPrice !== null

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group"
        >
            <Card className="overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 group-hover:scale-[1.02]">
                {/* Product Image */}
                <div className="relative overflow-hidden bg-neutral-100 aspect-[3/4]">
                    {/* Image placeholder */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
                        <div className="text-center text-neutral-500">
                            <div className="w-16 h-16 bg-primary-500 rounded-full mx-auto mb-4"></div>
                            <p className="text-sm">{product.name}</p>
                        </div>
                    </div>

                    {/* Badge */}
                    {product.badge && (
                        <div className="absolute top-4 left-4">
                            <span className={cn(
                                "px-3 py-1 text-xs font-medium rounded-full",
                                product.badge === "Bestseller" && "bg-accent-success text-white",
                                product.badge === "New" && "bg-primary-600 text-white",
                                product.badge === "Limited" && "bg-accent-error text-white"
                            )}>
                                {product.badge}
                            </span>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                            <Heart className="w-4 h-4 text-neutral-600" />
                        </button>
                        <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                            <ShoppingBag className="w-4 h-4 text-neutral-600" />
                        </button>
                    </div>

                    {/* Quick View */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="px-6 py-2 bg-white text-neutral-900 text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200">
                            Quick View
                        </button>
                    </div>
                </div>

                {/* Product Info */}
                <CardContent className="p-4">
                    <div className="space-y-2">
                        {/* Rating */}
                        <div className="flex items-center gap-1">
                            <div className="flex text-accent-warning">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={cn(
                                            "w-4 h-4",
                                            i < Math.floor(product.rating) ? "fill-current" : "fill-none"
                                        )}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-neutral-500">({product.reviewCount})</span>
                        </div>

                        {/* Product Name */}
                        <h3 className="font-semibold text-neutral-900 line-clamp-1 group-hover:text-primary-600 transition-colors">
                            {product.name}
                        </h3>

                        {/* Price */}
                        <div className="flex items-center gap-2">
                            {hasDiscount ? (
                                <>
                                    <span className="text-lg font-bold text-neutral-900">${product.discountPrice}</span>
                                    <span className="text-sm text-neutral-500 line-through">${product.price}</span>
                                    <span className="text-xs font-medium text-accent-error">
                                        {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                                    </span>
                                </>
                            ) : (
                                <span className="text-lg font-bold text-neutral-900">${product.price}</span>
                            )}
                        </div>

                        {/* Colors */}
                        <div className="flex gap-1">
                            {product.variants.slice(0, 3).map((variant, index) => (
                                <div
                                    key={index}
                                    className="w-4 h-4 rounded-full border border-neutral-300"
                                    style={{ backgroundColor: variant.color }}
                                    title={variant.colorName}
                                />
                            ))}
                            {product.variants.length > 3 && (
                                <div className="w-4 h-4 rounded-full bg-neutral-200 flex items-center justify-center text-xs text-neutral-600">
                                    +{product.variants.length - 3}
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

const ProductGrid = () => {
    const { data: products, isLoading, error } = useFeaturedProducts()

    if (isLoading) {
        return (
            <Container className="max-w-7xl py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                            <div className="bg-neutral-200 aspect-[3/4] rounded-2xl mb-4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-neutral-200 rounded"></div>
                                <div className="h-6 bg-neutral-200 rounded w-3/4"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        )
    }

    if (error) {
        return (
            <Container className="max-w-7xl py-16 text-center">
                <div className="text-accent-error">Failed to load products</div>
            </Container>
        )
    }

    return (
        <section className="py-16 bg-neutral-50">
            <Container className="max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Heading as="h2" className="mb-4">
                        Featured Collection
                    </Heading>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Discover our carefully curated selection of premium fashion pieces that combine style, quality, and comfort.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 border-2 border-neutral-900 text-neutral-900 font-semibold rounded-lg hover:bg-neutral-900 hover:text-white transition-all duration-200">
                        View All Products
                    </button>
                </div>
            </Container>
        </section>
    )
}

export default ProductGrid