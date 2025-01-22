import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaRobot, FaUsers } from 'react-icons/fa'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Chatbot', path: '/suggestionbot', icon: <FaRobot className="inline-block" /> },
    { name: 'Price Calculator', path: '/price-calculator' },
    { name: 'Creators Team', path: '/team', icon: <FaUsers className="inline-block" /> },
    { name: 'Contact', path: '/contact' }
  ]

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.svg" alt="FarmConnectHub" className="h-8 w-8" />
            <span className="text-xl font-bold text-primary">FarmConnectHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 hover:text-primary'
                } transition-colors duration-200 flex items-center gap-1`}
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </div>

          {/* Authentication Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? 'text-primary font-semibold'
                      : 'text-gray-600 hover:text-primary'
                  } transition-colors duration-200 px-4 py-2 flex items-center gap-1`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon} {item.name}
                </Link>
              ))}
              <hr className="my-2 border-gray-200" />
              <Link
                to="/login"
                className="text-gray-600 hover:text-primary transition-colors duration-200 px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200 mx-4"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
