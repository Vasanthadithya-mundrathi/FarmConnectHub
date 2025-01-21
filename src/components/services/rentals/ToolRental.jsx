import { useState } from 'react'
import BookingForm from '../../common/BookingForm'

const tools = [
  {
    category: 'Land Preparation',
    items: [
      {
        name: 'Power Tiller',
        price: '500/day',
        image: '/images/tools/power-tiller.jpg',
        description: 'Efficient for soil preparation and ploughing'
      },
      {
        name: 'Rotavator',
        price: '600/day',
        image: '/images/tools/rotavator.jpg',
        description: 'Perfect for seedbed preparation'
      }
    ]
  },
  {
    category: 'Planting & Seeding',
    items: [
      {
        name: 'Seed Drill',
        price: '400/day',
        image: '/images/tools/seed-drill.jpg',
        description: 'Uniform seed placement and spacing'
      },
      {
        name: 'Transplanter',
        price: '450/day',
        image: '/images/tools/transplanter.jpg',
        description: 'Quick and efficient transplanting'
      }
    ]
  },
  {
    category: 'Crop Maintenance',
    items: [
      {
        name: 'Power Sprayer',
        price: '300/day',
        image: '/images/tools/power-sprayer.jpg',
        description: 'For pesticide and fertilizer application'
      },
      {
        name: 'Weeder',
        price: '250/day',
        image: '/images/tools/weeder.jpg',
        description: 'Effective weed control'
      }
    ]
  }
]

export default function ToolRental() {
  const [selectedTool, setSelectedTool] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleBooking = (formData) => {
    // TODO: Implement booking logic
    console.log('Booking data:', { ...formData, toolName: selectedTool?.name })
    alert('Booking submitted successfully!')
    setShowForm(false)
    setSelectedTool(null)
  }

  const extraFields = [
    {
      name: 'rentalDays',
      label: 'Number of Days',
      type: 'number',
      min: 1
    },
    {
      name: 'quantity',
      label: 'Quantity Required',
      type: 'number',
      min: 1
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Agricultural Tools Rental</h1>
        <p className="text-gray-600">
          Quality farming tools available for rent at competitive prices
        </p>
      </div>

      {!showForm ? (
        <>
          {/* Tools Categories */}
          {tools.map((category) => (
            <div key={category.category} className="space-y-4">
              <h2 className="text-2xl font-semibold">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((tool) => (
                  <div key={tool.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0">
                        <img
                          src={tool.image}
                          alt={tool.name}
                          className="h-48 w-full md:w-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                        <p className="text-gray-600 mb-4">{tool.description}</p>
                        <p className="text-primary font-semibold mb-4">₹{tool.price}</p>
                        <button
                          onClick={() => {
                            setSelectedTool(tool)
                            setShowForm(true)
                          }}
                          className="btn-primary"
                        >
                          Rent Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Rental Terms */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Rental Terms & Conditions</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Security deposit required for all tools</li>
              <li>Tools must be returned in good condition</li>
              <li>Damage or loss will be charged accordingly</li>
              <li>Training provided for complex equipment</li>
              <li>24-hour support available</li>
            </ul>
          </div>
        </>
      ) : (
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setShowForm(false)}
            className="mb-6 text-gray-600 hover:text-gray-900"
          >
            ← Back to Tools Selection
          </button>
          <div className="bg-white rounded-lg shadow-md p-6">
            <BookingForm
              title={`Rent ${selectedTool.name}`}
              onSubmit={handleBooking}
              extraFields={extraFields}
              submitButtonText="Confirm Rental"
            />
          </div>
        </div>
      )}
    </div>
  )
}
