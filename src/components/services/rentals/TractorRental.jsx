import { useState } from 'react'
import BookingForm from '../../common/BookingForm'

const tractorTypes = [
  {
    name: 'Mini Tractor',
    power: '20-25 HP',
    price: '800/hour',
    image: '/images/tractors/mini.jpg',
    features: [
      'Ideal for small farms',
      'Fuel efficient',
      'Easy to maneuver'
    ]
  },
  {
    name: 'Medium Tractor',
    power: '35-45 HP',
    price: '1200/hour',
    image: '/images/tractors/medium.jpg',
    features: [
      'Versatile usage',
      'Good for most farming operations',
      'Comfortable cabin'
    ]
  },
  {
    name: 'Heavy Duty Tractor',
    power: '50-60 HP',
    price: '1500/hour',
    image: '/images/tractors/heavy.jpg',
    features: [
      'Powerful engine',
      'Best for large farms',
      'Advanced features'
    ]
  }
]

export default function TractorRental() {
  const [selectedTractor, setSelectedTractor] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleBooking = (formData) => {
    // TODO: Implement booking logic
    console.log('Booking data:', { ...formData, tractorType: selectedTractor?.name })
    alert('Booking submitted successfully!')
    setShowForm(false)
    setSelectedTractor(null)
  }

  const extraFields = [
    {
      name: 'duration',
      label: 'Rental Duration (hours)',
      type: 'number',
      min: 1
    },
    {
      name: 'purpose',
      label: 'Purpose of Rental',
      type: 'select',
      options: [
        { value: 'ploughing', label: 'Ploughing' },
        { value: 'harvesting', label: 'Harvesting' },
        { value: 'transportation', label: 'Transportation' },
        { value: 'other', label: 'Other' }
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Tractor Rental Service</h1>
        <p className="text-gray-600">
          Choose from our range of well-maintained tractors for your farming needs
        </p>
      </div>

      {!showForm ? (
        <>
          {/* Tractor Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tractorTypes.map((tractor) => (
              <div key={tractor.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={tractor.image}
                  alt={tractor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tractor.name}</h3>
                  <p className="text-gray-600 mb-2">Power: {tractor.power}</p>
                  <p className="text-primary font-semibold mb-4">₹{tractor.price}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {tractor.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedTractor(tractor)
                      setShowForm(true)
                    }}
                    className="btn-primary w-full"
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Important Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>All tractors are regularly serviced and maintained</li>
              <li>Operator can be provided at additional cost</li>
              <li>Fuel cost is not included in the rental price</li>
              <li>Minimum booking duration is 4 hours</li>
              <li>Advance booking is recommended during peak farming seasons</li>
            </ul>
          </div>
        </>
      ) : (
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setShowForm(false)}
            className="mb-6 text-gray-600 hover:text-gray-900"
          >
            ← Back to Tractor Selection
          </button>
          <div className="bg-white rounded-lg shadow-md p-6">
            <BookingForm
              title={`Book ${selectedTractor.name}`}
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
