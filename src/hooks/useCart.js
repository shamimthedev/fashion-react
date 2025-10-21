import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      itemCount: 0,
      
      addItem: (product, variant) => {
        const items = get().items
        const existingItem = items.find(
          item => item.id === product.id && item.variant.size === variant.size
        )
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id && item.variant.size === variant.size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({
            items: [...items, {
              id: `${product.id}-${variant.size}`,
              product,
              variant,
              quantity: 1
            }]
          })
        }
        get().calculateTotals()
      },
      
      removeItem: (itemId) => {
        set({ items: get().items.filter(item => item.id !== itemId) })
        get().calculateTotals()
      },
      
      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId)
          return
        }
        
        set({
          items: get().items.map(item =>
            item.id === itemId ? { ...item, quantity } : item
          )
        })
        get().calculateTotals()
      },
      
      clearCart: () => {
        set({ items: [], total: 0, itemCount: 0 })
      },
      
      calculateTotals: () => {
        const items = get().items
        const total = items.reduce((sum, item) => {
          const price = item.product.discountPrice || item.product.price
          return sum + (price * item.quantity)
        }, 0)
        const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
        
        set({ total, itemCount })
      }
    }),
    {
      name: 'cart-storage',
    }
  )
)