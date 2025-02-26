import React from 'react'
import { useCart } from '../store/cartStore'
import { ShoppingCart } from 'lucide-react'

function ProductCard({ product }) {
  const addToCart = useCart(state => state.addItem)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 text-2xl">{product.icon}</span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2 text-sm line-clamp-3">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard