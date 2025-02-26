import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Home, Package } from 'lucide-react'
import { useCart } from '../store/cartStore'

function Navbar() {
  const cartItems = useCart(state => state.items)

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">ShopHub</Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800">
              <Home className="w-5 h-5 mr-1" />
              <span>Home</span>
            </Link>
            
            <Link to="/products" className="flex items-center text-gray-600 hover:text-gray-800">
              <Package className="w-5 h-5 mr-1" />
              <span>Products</span>
            </Link>
            
            <Link to="/cart" className="flex items-center text-gray-600 hover:text-gray-800">
              <ShoppingCart className="w-5 h-5 mr-1" />
              <span>Cart ({cartItems.length})</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar