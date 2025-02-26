import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, HeadphonesIcon, RefreshCw } from 'lucide-react'

function Home() {
  return (
    <div className="space-y-8">
      <section 
        className="text-center py-20 bg-cover bg-center relative rounded-lg shadow-md overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1600")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to ShopHub</h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our curated collection of premium electronics, accessories, and lifestyle products. 
            Experience quality, innovation, and style all in one place.
          </p>
          <Link 
            to="/products" 
            className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <Truck className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold">Free Shipping</h2>
          <p className="mt-2 text-gray-600">Enjoy free shipping on all orders over $50. We deliver to your doorstep with care and precision.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <HeadphonesIcon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold">24/7 Support</h2>
          <p className="mt-2 text-gray-600">Our dedicated support team is available round the clock to assist you with any queries or concerns.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <RefreshCw className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold">Easy Returns</h2>
          <p className="mt-2 text-gray-600">Not satisfied? Return your products within 30 days for a full refund. No questions asked.</p>
        </div>
      </section>
    </div>
  )
}
export default Home