import { Routes, Route, Link } from 'react-router-dom'
import FarmingInstructions from '../components/services/FarmingInstructions'
import SeasonalCrops from '../components/services/SeasonalCrops'
import TechAwareness from '../components/services/TechAwareness'
import Documentation from '../components/services/Documentation'
import FertilizerPesticides from '../components/services/FertilizerPesticides'
import Rentals from '../components/services/Rentals'

const serviceLinks = [
  {
    title: 'Instruction about farming',
    path: '/services/instructions',
    component: FarmingInstructions
  },
  {
    title: 'Seasoning crops',
    path: '/services/crops',
    component: SeasonalCrops
  },
  {
    title: 'Awareness of technology in agriculture',
    path: '/services/technology',
    component: TechAwareness
  },
  {
    title: 'Documentation',
    path: '/services/documentation',
    component: Documentation
  },
  {
    title: 'Fertilizer and Pesticides',
    path: '/services/fertilizer',
    component: FertilizerPesticides
  }
]

const rentalServices = [
  { title: 'Agriculture tools rental', path: '/services/rentals/tools' },
  { title: 'Tractor rentals', path: '/services/rentals/tractor' },
  { title: 'Harvester rentals', path: '/services/rentals/harvester' },
  { title: 'Slot booking for soil health check', path: '/services/rentals/soil-check' },
  { title: 'Fertilizer sprinkler booking', path: '/services/rentals/sprinkler' },
  { title: 'Cold storage', path: '/services/rentals/storage' },
  { title: 'Drum seeder rentals', path: '/services/rentals/seeder' }
]

export default function Services() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-6">List of Services</h2>
        <nav className="space-y-2">
          {serviceLinks.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white rounded-lg transition-colors"
            >
              {service.title}
            </Link>
          ))}

          {/* Rentals Dropdown */}
          <div className="relative group">
            <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-primary hover:text-white rounded-lg transition-colors">
              Rentals
            </button>
            <div className="hidden group-hover:block absolute left-full top-0 ml-2 w-64 bg-white shadow-lg rounded-lg p-2">
              {rentalServices.map((rental) => (
                <Link
                  key={rental.path}
                  to={rental.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white rounded-lg transition-colors"
                >
                  {rental.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-8">
        <div id="google_translate_element" className="mb-6"></div>
        <Routes>
          <Route path="instructions" element={<FarmingInstructions />} />
          <Route path="crops" element={<SeasonalCrops />} />
          <Route path="technology" element={<TechAwareness />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="fertilizer" element={<FertilizerPesticides />} />
          <Route path="rentals/*" element={<Rentals />} />
        </Routes>
      </div>
    </div>
  )
}
