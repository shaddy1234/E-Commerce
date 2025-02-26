import React from 'react'
import ProductCard from '../components/ProductCard'

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and premium leather comfort padding. Perfect for music enthusiasts and professionals alike.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    icon: "🎧"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your health and stay connected with our advanced smartwatch. Includes heart rate monitoring, sleep tracking, GPS, and seamless smartphone integration. Water-resistant up to 50m.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    icon: "⌚"
  },
  {
    id: 3,
    name: "Professional Laptop Backpack",
    description: "Keep your tech safe with our premium laptop backpack. Features water-resistant material, anti-theft design, USB charging port, and multiple compartments for optimal organization.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    icon: "🎒"
  },
  {
    id: 4,
    name: "4K Ultra HD Camera",
    description: "Capture life's moments in stunning detail with our professional-grade camera. Features 4K video recording, 45MP sensor, advanced autofocus, and weather-sealed body.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    icon: "📸"
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    description: "Dominate your games with our high-performance gaming mouse. Features 16000 DPI optical sensor, programmable buttons, and RGB lighting with 16.8M colors.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    icon: "🖱️"
  },
  {
    id: 6,
    name: "Portable Power Bank",
    description: "Never run out of power with our 20000mAh power bank. Features fast charging, multiple ports, and compact design. Perfect for travel and daily use.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1609592786331-b7f6f1cc2083?w=500",
    icon: "🔋"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    description: "Fill your space with rich, immersive sound. Features 360° audio, waterproof design, 24-hour battery life, and voice assistant integration.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    icon: "🔊"
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    description: "Enhance your typing experience with our premium mechanical keyboard. Features Cherry MX switches, customizable RGB lighting, and aircraft-grade aluminum construction.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    icon: "⌨️"
  },
  {
    id: 9,
    name: "Smart Home Hub",
    description: "Control your entire home from one device. Features voice control, automation support, and compatibility with major smart home brands.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500",
    icon: "🏠"
  },
  {
    id: 10,
    name: "Wireless Earbuds",
    description: "Experience true wireless freedom with our premium earbuds. Features active noise cancellation, touch controls, and wireless charging case.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    icon: "🎵"
  },
  {
    id: 11,
    name: "4K Monitor",
    description: "Elevate your viewing experience with our 32-inch 4K monitor. Features HDR support, 99% sRGB coverage, and ergonomic stand.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    icon: "🖥️"
  },
  {
    id: 12,
    name: "Gaming Console",
    description: "Enter the next generation of gaming. Features 4K gaming, ray tracing, fast loading times, and extensive game library.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500",
    icon: "🎮"
  },
  {
    id: 13,
    name: "Drone with 4K Camera",
    description: "Capture stunning aerial footage with our advanced drone. Features 4K camera, 30-minute flight time, and intelligent flight modes.",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500",
    icon: "🛸"
  },
  {
    id: 14,
    name: "Smart Security Camera",
    description: "Keep your home safe with our advanced security camera. Features 2K resolution, night vision, two-way audio, and cloud storage.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500",
    icon: "📹"
  },
  {
    id: 15,
    name: "Electric Scooter",
    description: "Navigate the city with ease using our electric scooter. Features 25km range, quick folding design, and regenerative braking system.",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?w=500",
    icon: "🛴"
  }
]

function Products() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products