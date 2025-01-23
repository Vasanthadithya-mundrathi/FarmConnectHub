import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaRobot, FaUsers, FaFileAlt, FaStore } from 'react-icons/fa'
import { Dialog, Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Chatbot', path: '/suggestionbot', icon: <FaRobot className="inline-block" /> },
    { name: 'Price Calculator', path: '/price-calculator' },
  ]

  const moreMenuItems = [
    { name: 'Community', path: '/community' },
    { name: 'Weather Report', path: '/weather' },
    { name: 'Store', path: '/store', icon: <FaStore className="inline-block" /> },
    { name: 'Agri-Policies', path: '/agri-policies', icon: <FaFileAlt className="inline-block" /> },
    { name: 'Creators Team', path: '/team', icon: <FaUsers className="inline-block" /> },
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
            {/* More Menu */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-green-600 focus:outline-none">
                    More
                    <ChevronDownIcon
                      className={`ml-2 h-4 w-4 transition-transform ${
                        open ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Popover.Panel className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {moreMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.icon} {item.name}
                      </Link>
                    ))}
                  </Popover.Panel>
                </>
              )}
            </Popover>
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
              {moreMenuItems.map((item) => (
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
