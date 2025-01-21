import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Hero section images
const heroImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
]

const services = [
  {
    title: 'Farming Instructions',
    description: 'Step-by-step guides for modern farming techniques',
    icon: '🌱',
    link: '/services/instructions'
  },
  {
    title: 'Equipment Rental',
    description: 'Rent farming equipment at competitive prices',
    icon: '🚜',
    link: '/services/rentals'
  },
  {
    title: 'Seasonal Crops',
    description: 'Information about seasonal crops and cultivation',
    icon: '🌾',
    link: '/services/crops'
  },
  {
    title: 'Tech Solutions',
    description: 'Modern agricultural technology solutions',
    icon: '💻',
    link: '/services/technology'
  },
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden rounded-xl">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Modern Solutions for Modern Farming
            </h1>
            <p className="text-xl text-white mb-8">
              Connect with the latest agricultural technologies and services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary text-lg">
                Explore Services
              </Link>
              <Link to="/contact" className="btn-secondary text-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-gray-600">
                Get expert advice from agricultural professionals and experienced farmers
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Modern Equipment</h3>
              <p className="text-gray-600">
                Access to the latest farming equipment and technology
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-600">
                Join a community of farmers and agricultural experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join FarmConnectHub today and transform your farming practices
        </p>
        <Link to="/register" className="btn-primary text-lg">
          Sign Up Now
        </Link>
      </section>
    </div>
  )
}
