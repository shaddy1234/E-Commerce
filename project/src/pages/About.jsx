import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, HeadphonesIcon, RefreshCw } from 'lucide-react'

function About() {
  return (
    <div className='container mx-auto text-center p-6'>
        <h1 className='text-3xl font-bold mb-4'>About Our Store</h1>
         <p className='text-lg text-gray-600'>
           Welcome to ShopHub E-Commerce! We bring you high-quality products with
           seamless shopping experience. Browse through our latest collections and
           enjoy fast shipping and secure payments.
        </p>
    </div>
  )
}
export default About
