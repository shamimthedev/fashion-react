import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Products API
export const productsAPI = {
  getAll: () => apiClient.get('/products'),
  getById: (id) => apiClient.get(`/products/${id}`),
  getByCategory: (category) => apiClient.get(`/products?category=${category}`),
  getFeatured: () => apiClient.get('/products?featured=true'),
}

// Categories API
export const categoriesAPI = {
  getAll: () => apiClient.get('/categories'),
}

// Mock data for development
export const mockProducts = [
  {
    id: 1,
    name: "Luxury Cashmere Sweater",
    description: "Experience ultimate comfort with our premium 100% cashmere sweater. Handcrafted for exceptional softness and durability.",
    price: 299.99,
    discountPrice: 249.99,
    category: "sweaters",
    images: ["/api/placeholder/400/500"],
    variants: [
      { size: "S", color: "#8B4513", colorName: "Chestnut", stock: 15 },
      { size: "M", color: "#8B4513", colorName: "Chestnut", stock: 8 },
      { size: "L", color: "#8B4513", colorName: "Chestnut", stock: 0 }
    ],
    rating: 4.8,
    reviewCount: 142,
    tags: ["premium", "cashmere", "winter", "bestseller"],
    featured: true,
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Designer Slim Fit Jeans",
    description: "Modern slim fit jeans crafted from premium stretch denim for comfort and style that lasts all day.",
    price: 189.99,
    discountPrice: 159.99,
    category: "pants",
    images: ["/api/placeholder/400/500"],
    variants: [
      { size: "30", color: "#000000", colorName: "Black", stock: 22 },
      { size: "32", color: "#000000", colorName: "Black", stock: 18 }
    ],
    rating: 4.6,
    reviewCount: 89,
    tags: ["denim", "slim-fit", "designer"],
    featured: true,
    badge: "New"
  },
  {
    id: 3,
    name: "Premium Leather Jacket",
    description: "Handcrafted genuine leather jacket that improves with age. Timeless style meets modern craftsmanship.",
    price: 499.99,
    discountPrice: null,
    category: "outerwear",
    images: ["/api/placeholder/400/500"],
    variants: [
      { size: "M", color: "#2F4F4F", colorName: "Charcoal", stock: 5 },
      { size: "L", color: "#2F4F4F", colorName: "Charcoal", stock: 3 }
    ],
    rating: 4.9,
    reviewCount: 67,
    tags: ["leather", "premium", "timeless"],
    featured: true
  },
  {
    id: 4,
    name: "Silk Evening Dress",
    description: "Elegant silk dress perfect for special occasions. Flowing fabric that moves beautifully with you.",
    price: 349.99,
    discountPrice: 299.99,
    category: "dresses",
    images: ["/api/placeholder/400/500"],
    variants: [
      { size: "XS", color: "#8B0000", colorName: "Burgundy", stock: 12 },
      { size: "S", color: "#8B0000", colorName: "Burgundy", stock: 8 }
    ],
    rating: 4.7,
    reviewCount: 94,
    tags: ["silk", "evening", "elegant"],
    featured: true,
    badge: "Limited"
  }
]

export const mockCategories = [
  { id: 1, name: "New Arrivals", slug: "new-arrivals", count: 24, image: "/api/placeholder/300/400" },
  { id: 2, name: "Bestsellers", slug: "bestsellers", count: 45, image: "/api/placeholder/300/400" },
  { id: 3, name: "Summer Collection", slug: "summer", count: 32, image: "/api/placeholder/300/400" },
  { id: 4, name: "Winter Essentials", slug: "winter", count: 28, image: "/api/placeholder/300/400" }
]