// src/data/mockData.js
export const mockProducts = [
  {
    id: 1,
    name: "Premium Cashmere Sweater",
    description: "Luxurious 100% cashmere sweater for ultimate comfort and style.",
    price: 299.99,
    discountPrice: 249.99,
    category: "sweaters",
    images: ["/api/placeholder/400/500"],
    variants: [
      { size: "S", color: "#8B4513", stock: 15 },
      { size: "M", color: "#8B4513", stock: 8 },
      { size: "L", color: "#8B4513", stock: 0 }
    ],
    rating: 4.8,
    reviewCount: 142,
    tags: ["premium", "cashmere", "winter"],
    featured: true
  },
  {
    id: 2,
    name: "Designer Slim Fit Jeans",
    description: "Modern slim fit jeans with premium stretch fabric.",
    price: 189.99,
    discountPrice: 159.99,
    category: "pants",
    images: ["/api/placeholder/400/500"],
    variants: [
      { size: "30", color: "#000000", stock: 22 },
      { size: "32", color: "#000000", stock: 18 }
    ],
    rating: 4.6,
    reviewCount: 89,
    tags: ["denim", "slim-fit", "designer"],
    featured: true
  }
]

export const mockCategories = [
  { id: 1, name: "New Arrivals", slug: "new-arrivals", count: 24 },
  { id: 2, name: "Bestsellers", slug: "bestsellers", count: 45 },
  { id: 3, name: "Summer Collection", slug: "summer", count: 32 }
]