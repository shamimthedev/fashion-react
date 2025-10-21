import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Container from '../Container/Container'
import Flex from '../../ui/Flex/Flex'
import Button from '../../ui/Button/Button'
import { cn } from '../../../lib/utils'

const Header = ({ onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Collections', href: '/collections' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/60">
      <Container className="max-w-7xl">
        <Flex className="items-center justify-between py-4">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg"></div>
              <span className="font-display text-xl font-bold text-neutral-900">ELEVATE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-x-8 lg:flex-1 lg:justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  isActive(item.href)
                    ? "text-primary-600"
                    : "text-neutral-700 hover:text-primary-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <Flex className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <button className="p-2 text-neutral-600 hover:text-primary-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-neutral-600 hover:text-primary-600 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={onCartClick}
              className="p-2 text-neutral-600 hover:text-primary-600 transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-600 text-xs font-medium text-white">
                3
              </span>
            </button>
          </Flex>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2 text-neutral-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </Flex>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-neutral-200"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "block py-2 text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "text-primary-600"
                        : "text-neutral-700 hover:text-primary-600"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Flex className="gap-x-4 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                  <Button size="sm" className="flex-1">
                    Sign Up
                  </Button>
                </Flex>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}

export default Header