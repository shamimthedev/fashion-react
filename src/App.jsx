import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Layout Components
import Header from "./components/layout/Header/Header"
import Footer from "./components/layout/Footer/Footer"

// Page Components
import HomePage from "./pages/HomePage/HomePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import ContactPage from "./pages/ContactPage/ContactPage"

// Feature Components
import ShoppingCart from "./components/features/ShoppingCart/ShoppingCart"
import ProductListingPage from './pages/ProductListingPage/ProductListingPage'

// Create a client
const queryClient = new QueryClient()

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-white">
          <Header onCartClick={() => setIsCartOpen(true)} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ProductListingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Add more routes as needed */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App