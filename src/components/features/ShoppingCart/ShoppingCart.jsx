import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../../hooks/useCart'
import { cn } from '../../../lib/utils'
import Button from '../../ui/Button/Button'

const ShoppingCart = ({ isOpen, onClose }) => {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          
          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-6 h-6" />
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-sm">
                  {items.length} items
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                  <p className="text-neutral-500 mb-4">Your cart is empty</p>
                  <Button onClick={onClose}>Continue Shopping</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex gap-4 p-4 bg-neutral-50 rounded-lg"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-neutral-200 rounded-lg flex-shrink-0" />
                      
                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-neutral-900 truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-neutral-500">
                          {item.variant.size} • {item.variant.colorName}
                        </p>
                        <p className="font-semibold text-neutral-900">
                          ${(item.product.discountPrice || item.product.price).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end space-y-2">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-neutral-200 rounded transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-neutral-200 rounded transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-neutral-200 rounded transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-neutral-200 p-6 space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ShoppingCart