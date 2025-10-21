import { useQuery } from '@tanstack/react-query'
import { productsAPI, mockProducts } from '../lib/api-client'

export const useProducts = (options = {}) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // In real app: return productsAPI.getAll()
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockProducts), 500)
      })
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  })
}

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ['products', 'featured'],
    queryFn: async () => {
      // In real app: return productsAPI.getFeatured()
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockProducts.filter(p => p.featured)), 500)
      })
    },
  })
}