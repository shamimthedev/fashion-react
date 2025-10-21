import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Grid, List, ChevronDown, X } from 'lucide-react'
import Container from '../../components/layout/Container/Container'
import Heading from '../../components/ui/Heading/Heading'
import Button from '../../components/ui/Button/Button'
import { useProducts } from '../../hooks/useProducts'
import { mockCategories } from '../../lib/api-client'
import { cn } from '../../lib/utils'

// Product Card Component
const ProductCard = ({ product, layout = 'grid' }) => {
  const hasDiscount = product.discountPrice !== null

  if (layout === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex gap-6 p-6 bg-white rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group"
      >
        {/* Product Image */}
        <div className="w-48 h-48 bg-neutral-100 rounded-xl flex-shrink-0 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
            <div className="text-center text-neutral-500">
              <div className="w-12 h-12 bg-primary-500 rounded-full mx-auto mb-2"></div>
              <p className="text-xs">{product.name}</p>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">
                {product.name}
              </h3>
              <p className="text-neutral-600 line-clamp-2 mb-4">
                {product.description}
              </p>
            </div>
            {product.badge && (
              <span className={cn(
                "px-3 py-1 text-xs font-medium rounded-full",
                product.badge === "Bestseller" && "bg-accent-success text-white",
                product.badge === "New" && "bg-primary-600 text-white",
                product.badge === "Limited" && "bg-accent-error text-white"
              )}>
                {product.badge}
              </span>
            )}
          </div>

          {/* Rating and Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="flex text-accent-warning">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-neutral-300"
                      )}
                    >
                      ★
                    </div>
                  ))}
                </div>
                <span className="text-sm text-neutral-500">({product.reviewCount})</span>
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
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                {hasDiscount ? (
                  <>
                    <span className="text-2xl font-bold text-neutral-900">${product.discountPrice}</span>
                    <span className="text-lg text-neutral-500 line-through">${product.price}</span>
                    <span className="text-sm font-medium text-accent-error">
                      {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-neutral-900">${product.price}</span>
                )}
              </div>
              <Button className="group-hover:bg-primary-700">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Grid Layout (default)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group-hover:scale-[1.02] overflow-hidden">
        {/* Product Image */}
        <div className="relative overflow-hidden bg-neutral-100 aspect-[3/4]">
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

          {/* Quick Actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-2">
              <Button className="bg-white text-neutral-900 hover:bg-neutral-100">
                Quick View
              </Button>
              <Button className="bg-white text-neutral-900 hover:bg-neutral-100">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-neutral-900 line-clamp-1 group-hover:text-primary-600 transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {hasDiscount ? (
                  <>
                    <span className="text-lg font-bold text-neutral-900">${product.discountPrice}</span>
                    <span className="text-sm text-neutral-500 line-through">${product.price}</span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-neutral-900">${product.price}</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-sm text-neutral-500">
                <div className="flex text-accent-warning">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-3 h-3",
                        i < Math.floor(product.rating) ? "text-yellow-400" : "text-neutral-300"
                      )}
                    >
                      ★
                    </div>
                  ))}
                </div>
                <span>({product.reviewCount})</span>
              </div>
            </div>

            {/* Colors */}
            <div className="flex gap-1">
              {product.variants.slice(0, 4).map((variant, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-neutral-300"
                  style={{ backgroundColor: variant.color }}
                  title={variant.colorName}
                />
              ))}
              {product.variants.length > 4 && (
                <div className="w-4 h-4 rounded-full bg-neutral-200 flex items-center justify-center text-xs text-neutral-600">
                  +{product.variants.length - 4}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Filter Component
const FilterSection = ({ filters, onFilterChange, isMobileOpen, onMobileClose }) => {
  const categories = ['All', 'Sweaters', 'Pants', 'Outerwear', 'Dresses', 'Accessories']
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const colors = [
    { value: '#000000', name: 'Black' },
    { value: '#8B4513', name: 'Brown' },
    { value: '#8B0000', name: 'Burgundy' },
    { value: '#2F4F4F', name: 'Charcoal' },
    { value: '#FFFFFF', name: 'White' }
  ]
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: 'Over $200', min: 200, max: Infinity }
  ]

  const FilterContent = () => (
    <div className="p-6 h-full overflow-y-auto bg-white rounded-2xl shadow-soft">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 lg:hidden">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button onClick={onMobileClose} className="p-2 hover:bg-neutral-100 rounded-lg">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="font-semibold mb-4">Categories</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={(e) => {
                  const newCategories = e.target.checked
                    ? [...filters.categories, category]
                    : filters.categories.filter(c => c !== category)
                  onFilterChange('categories', newCategories)
                }}
                className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-3 text-sm text-neutral-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-semibold mb-4">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <label key={range.label} className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange?.min === range.min && filters.priceRange?.max === range.max}
                onChange={() => onFilterChange('priceRange', range)}
                className="border-neutral-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-3 text-sm text-neutral-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-8">
        <h4 className="font-semibold mb-4">Sizes</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => {
                const newSizes = filters.sizes.includes(size)
                  ? filters.sizes.filter(s => s !== size)
                  : [...filters.sizes, size]
                onFilterChange('sizes', newSizes)
              }}
              className={cn(
                "px-3 py-2 border rounded-lg text-sm font-medium transition-colors",
                filters.sizes.includes(size)
                  ? "bg-primary-600 text-white border-primary-600"
                  : "bg-white text-neutral-700 border-neutral-300 hover:border-primary-600"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="mb-8">
        <h4 className="font-semibold mb-4">Colors</h4>
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <button
              key={color.value}
              onClick={() => {
                const newColors = filters.colors.includes(color.value)
                  ? filters.colors.filter(c => c !== color.value)
                  : [...filters.colors, color.value]
                onFilterChange('colors', newColors)
              }}
              className={cn(
                "w-8 h-8 rounded-full border-2 transition-transform relative",
                filters.colors.includes(color.value)
                  ? "border-primary-600 scale-110"
                  : "border-neutral-300 hover:scale-110"
              )}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Active Filters */}
      {(filters.categories.length > 0 || filters.sizes.length > 0 || filters.colors.length > 0 || filters.priceRange) && (
        <div className="mb-6 p-4 bg-primary-50 rounded-lg">
          <h4 className="font-semibold mb-2 text-sm">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {filters.categories.map(cat => (
              <span key={cat} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                {cat} ×
              </span>
            ))}
            {filters.sizes.map(size => (
              <span key={size} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                {size} ×
              </span>
            ))}
            {filters.priceRange && (
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                {filters.priceRange.label} ×
              </span>
            )}
          </div>
        </div>
      )}

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => onFilterChange('clear')}
      >
        Clear All Filters
      </Button>
    </div>
  )

  return (
    <>
      {/* Mobile Filter Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={onMobileClose}
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30 }}
              className="fixed left-0 top-0 h-full w-80 bg-white z-50 shadow-2xl lg:hidden"
            >
              <FilterContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Filter Sidebar - ALWAYS VISIBLE */}
      <div className="hidden lg:block lg:w-80 flex-shrink-0">
        <FilterContent />
      </div>
    </>
  )
}

const ProductListingPage = () => {
  const [layout, setLayout] = useState('grid') // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('featured')
const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    categories: [],
    sizes: [],
    colors: [],
    priceRange: null
  })

  const { data: products, isLoading } = useProducts()

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    if (!products) return []

    let filtered = products

    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes('All')) {
      filtered = filtered.filter(product => 
        filters.categories.some(category => 
          product.category.toLowerCase().includes(category.toLowerCase())
        )
      )
    }

    // Price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(product => {
        const price = product.discountPrice || product.price
        return price >= filters.priceRange.min && price <= filters.priceRange.max
      })
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price))
        break
      case 'price-high':
        filtered.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price))
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => b.id - a.id)
        break
      default: // featured
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return filtered
  }, [products, filters, sortBy])

  const handleFilterChange = (key, value) => {
    if (key === 'clear') {
      setFilters({
        categories: [],
        sizes: [],
        colors: [],
        priceRange: null
      })
    } else {
      setFilters(prev => ({ ...prev, [key]: value }))
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-50 py-8">
        <Container className="max-w-7xl">
          <div className="animate-pulse">
            <div className="h-8 bg-neutral-200 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-32 bg-neutral-200 rounded"></div>
                ))}
              </div>
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-neutral-200 aspect-[3/4] rounded-2xl"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-16">
        <Container className="max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Heading as="h1" className="mb-4 text-white">
              Shop Collection
            </Heading>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Discover our complete range of premium fashion pieces curated for the modern individual.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container className="max-w-7xl py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - NOW VISIBLE ON DESKTOP */}
          <FilterSection
            filters={filters}
            onFilterChange={handleFilterChange}
            isMobileOpen={mobileFiltersOpen}
            onMobileClose={() => setMobileFiltersOpen(false)}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-neutral-300 rounded-lg hover:border-primary-600 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
                <p className="text-neutral-600">
                  Showing {filteredProducts.length} products
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* Layout Toggle */}
                <div className="flex bg-white border border-neutral-300 rounded-lg p-1">
                  <button
                    onClick={() => setLayout('grid')}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      layout === 'grid' ? "bg-primary-100 text-primary-600" : "text-neutral-600 hover:text-primary-600"
                    )}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setLayout('list')}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      layout === 'list' ? "bg-primary-100 text-primary-600" : "text-neutral-600 hover:text-primary-600"
                    )}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-neutral-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-neutral-500" />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={cn(
              "gap-6",
              layout === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "space-y-6"
            )}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  layout={layout}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-neutral-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-neutral-600 mb-6">Try adjusting your filters to see more results.</p>
                <Button onClick={() => handleFilterChange('clear')}>
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductListingPage