import { useState } from 'react'

const seasons = [
  {
    name: 'Kharif (Monsoon)',
    months: 'June to October',
    crops: [
      {
        name: 'Rice (Paddy)',
        description: 'Major staple food crop of India',
        image: '/images/crops/rice.jpg'
      },
      {
        name: 'Maize',
        description: 'Important cereal crop with multiple uses',
        image: '/images/crops/maize.jpg'
      },
      {
        name: 'Cotton',
        description: 'Major commercial crop',
        image: '/images/crops/cotton.jpg'
      },
      {
        name: 'Sugarcane',
        description: 'Important cash crop',
        image: '/images/crops/sugarcane.jpg'
      }
    ]
  },
  {
    name: 'Rabi (Winter)',
    months: 'October to March',
    crops: [
      {
        name: 'Wheat',
        description: 'Second most important staple food crop',
        image: '/images/crops/wheat.jpg'
      },
      {
        name: 'Mustard',
        description: 'Important oilseed crop',
        image: '/images/crops/mustard.jpg'
      },
      {
        name: 'Peas',
        description: 'Popular vegetable and pulse crop',
        image: '/images/crops/peas.jpg'
      },
      {
        name: 'Gram',
        description: 'Important pulse crop',
        image: '/images/crops/gram.jpg'
      }
    ]
  }
]

export default function SeasonalCrops() {
  const [activeSeason, setActiveSeason] = useState(seasons[0])

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Seasonal Crops Guide</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn about different crops suitable for each growing season and their characteristics.
        </p>
      </div>

      {/* Season Selection */}
      <div className="flex justify-center space-x-4">
        {seasons.map((season) => (
          <button
            key={season.name}
            onClick={() => setActiveSeason(season)}
            className={`px-6 py-3 rounded-lg transition-colors ${
              activeSeason.name === season.name
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {season.name}
            <span className="block text-sm opacity-75">{season.months}</span>
          </button>
        ))}
      </div>

      {/* Crops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activeSeason.crops.map((crop) => (
          <div key={crop.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48">
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{crop.name}</h3>
              <p className="text-gray-600">{crop.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Farming Tips for {activeSeason.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Soil Preparation</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Test soil pH and nutrient levels</li>
              <li>Add organic matter for better fertility</li>
              <li>Ensure proper drainage</li>
              <li>Deep ploughing for better root growth</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Weather Considerations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Monitor rainfall patterns</li>
              <li>Plan irrigation schedule</li>
              <li>Watch for extreme weather conditions</li>
              <li>Protect crops from frost (Rabi) or heavy rain (Kharif)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
