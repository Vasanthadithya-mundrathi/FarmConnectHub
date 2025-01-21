import { useState } from 'react'
import BookingForm from '../../common/BookingForm'

const harvesters = [
  {
    name: 'Combine Harvester',
    type: 'Multi-Crop',
    price: '2500/hour',
    image: '/images/harvesters/combine.jpg',
    features: [
      'Suitable for wheat, rice, and other grains',
      'High capacity',
      'Minimal grain loss',
      'GPS tracking enabled'
    ],
    specifications: {
      engine: '175 HP',
      capacity: '25-30 acres/day',
      grainTank: '6000 liters',
      cutting: '20-24 feet'
    }
  },
  {
    name: 'Mini Combine Harvester',
    type: 'Compact',
    price: '1800/hour',
    image: '/images/harvesters/mini-combine.jpg',
    features: [
      'Perfect for small to medium farms',
      'Easy maneuverability',
      'Fuel efficient',
      'Low maintenance'
    ],
    specifications: {
      engine: '90 HP',
      capacity: '15-20 acres/day',
      grainTank: '3000 liters',
      cutting: '14-16 feet'
    }
  },
  {
    name: 'Sugarcane Harvester',
    type: 'Specialized',
    price: '3000/hour',
    image: '/images/harvesters/sugarcane.jpg',
    features: [
      'Specifically designed for sugarcane',
      'Advanced cutting mechanism',
      'Minimal field damage',
      'High efficiency'
    ],
    specifications: {
      engine: '200 HP',
      capacity: '20-25 acres/day',
      type: 'Self-propelled',
      cutting: 'Single row'
    }
  }
]

export default function HarvesterRental() {
  const [selectedHarvester, setSelectedHarvester] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleBooking = (formData) => {
    // TODO: Implement booking logic
    console.log('Booking data:', { ...formData, harvesterType: selectedHarvester?.name })
    alert('Booking submitted successfully!')
    setShowForm(false)
    setSelectedHarvester(null)
  }

  const extraFields = [
    {
      name: 'cropType',
      label: 'Crop Type',
      type: 'select',
      options: [
        { value: 'wheat', label: 'Wheat' },
        { value: 'rice', label: 'Rice' },
        { value: 'sugarcane', label: 'Sugarcane' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      name: 'area',
      label: 'Area to Harvest (acres)',
      type: 'number',
      min: 1
    },
    {
      name: 'operatorRequired',
      label: 'Operator Required',
      type: 'select',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Harvester Rental Service</h1>
        <p className="text-gray-600">
          Professional harvesting equipment for efficient crop collection
        </p>
      </div>

      {!showForm ? (
        <>
          {/* Harvester Options */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {harvesters.map((harvester) => (
              <div key={harvester.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={harvester.image}
                  alt={harvester.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{harvester.name}</h3>
                      <p className="text-gray-600">{harvester.type}</p>
                    </div>
                    <p className="text-primary font-semibold">₹{harvester.price}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {harvester.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Specifications:</h4>
                    <dl className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(harvester.specifications).map(([key, value]) => (
                        <div key={key}>
                          <dt className="text-gray-600 capitalize">{key}:</dt>
                          <dd className="font-medium">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedHarvester(harvester)
                      setShowForm(true)
                    }}
                    className="btn-primary w-full"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Booking Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Advance booking required during peak season</li>
                <li>Minimum booking duration is 4 hours</li>
                <li>Fuel cost included in rental price</li>
                <li>Transportation charges extra based on location</li>
                <li>24/7 technical support available</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Safety Guidelines</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Follow all safety instructions provided</li>
                <li>Only trained operators allowed to operate</li>
                <li>Regular maintenance checks performed</li>
                <li>Emergency support available on-site</li>
                <li>Insurance coverage included</li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setShowForm(false)}
            className="mb-6 text-gray-600 hover:text-gray-900"
          >
            ← Back to Harvester Selection
          </button>
          <div className="bg-white rounded-lg shadow-md p-6">
            <BookingForm
              title={`Book ${selectedHarvester.name}`}
              onSubmit={handleBooking}
              extraFields={extraFields}
              submitButtonText="Confirm Booking"
            />
          </div>
        </div>
      )}
    </div>
  )
}
