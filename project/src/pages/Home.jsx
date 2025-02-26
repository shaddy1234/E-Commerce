import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to ShopHub</h1>
        <p className="mt-4 text-xl text-gray-600">Discover amazing products at great prices</p>
        <Link 
          to="/products" 
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Shop Now
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Free Shipping</h2>
          <p className="mt-2 text-gray-600">On orders over $50</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">24/7 Support</h2>
          <p className="mt-2 text-gray-600">Here to help anytime</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Easy Returns</h2>
          <p className="mt-2 text-gray-600">30-day return policy</p>
        </div>
      </section>
    </div>
  )
}

export default Home