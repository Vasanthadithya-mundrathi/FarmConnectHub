import { useState } from 'react'
import BookingForm from '../../common/BookingForm'
import ImageWithFallback from '../../common/ImageWithFallback'
import { imageUrls } from '../../../data/imageUrls'

const sprinklerSystems = [
  {
    name: 'Portable Sprinkler Set',
    price: '₹800/day',
    image: imageUrls.sprinklers.portable,
    coverage: '1-2 acres',
    features: [
      'Easy to set up and move',
      'Adjustable spray patterns',
      'Uniform water distribution',
      'Low maintenance'
    ],
    specifications: {
      pressure: '2-4 bar',
      flow: '5-10 GPM',
      radius: '30-50 feet'
    }
  },
  {
    name: 'Drip Irrigation System',
    price: '₹1,200/day',
    image: imageUrls.sprinklers.drip,
    coverage: '2-3 acres',
    features: [
      'Water-efficient system',
      'Perfect for row crops',
      'Reduces weed growth',
      'Precise water delivery'
    ],
    specifications: {
      pressure: '1-2 bar',
      flow: '2-4 GPM',
      spacing: '12-18 inches'
    }
  },
  {
    name: 'Rain Gun System',
    price: '₹1,500/day',
    image: imageUrls.sprinklers.rainGun,
    coverage: '3-5 acres',
    features: [
      'High coverage area',
      'Powerful spray',
      'Suitable for all crops',
      'Quick coverage'
    ],
    specifications: {
      pressure: '4-6 bar',
      flow: '20-30 GPM',
      throw: '100-150 feet'
    }
  }
]

export default function SprinklerRental() {
  const [selectedSystem, setSelectedSystem] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleBooking = (formData) => {
    // TODO: Implement booking logic
    console.log('Booking data:', { ...formData, systemType: selectedSystem?.name })
    alert('Sprinkler system booking submitted successfully!')
    setShowForm(false)
    setSelectedSystem(null)
  }

  const extraFields = [
    {
      name: 'duration',
      label: 'Rental Duration (days)',
      type: 'number',
      min: 1
    },
    {
      name: 'landSize',
      label: 'Land Size (acres)',
      type: 'number',
      min: 0.5
    },
    {
      name: 'cropType',
      label: 'Crop Type',
      type: 'text'
    },
    {
      name: 'installationService',
      label: 'Installation Service',
      type: 'select',
      options: [
        { value: 'yes', label: 'Yes (+₹500)' },
        { value: 'no', label: 'No' }
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Sprinkler System Rental</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Efficient irrigation solutions for your farm. Choose from our range of
          modern sprinkler systems for optimal water distribution.
        </p>
      </div>

      {!showForm ? (
        <>
          {/* Sprinkler Systems */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sprinklerSystems.map((system) => (
              <div key={system.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <ImageWithFallback
                  src={system.image}
                  alt={system.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{system.name}</h3>
                      <p className="text-gray-600">Coverage: {system.coverage}</p>
                    </div>
                    <span className="text-primary font-semibold">{system.price}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {system.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Specifications:</h4>
                    <dl className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(system.specifications).map(([key, value]) => (
                        <div key={key}>
                          <dt className="text-gray-600 capitalize">{key}:</dt>
                          <dd className="font-medium">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedSystem(system)
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Benefits of Sprinkler Irrigation</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Uniform water distribution</li>
                <li>Reduced water wastage</li>
                <li>Labor cost savings</li>
                <li>Better crop yield</li>
                <li>Suitable for various soil types</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Rental Terms</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Security deposit required</li>
                <li>Regular maintenance included</li>
                <li>Technical support available</li>
                <li>Flexible rental duration</li>
                <li>Installation service available</li>
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
            ← Back to System Selection
          </button>
          <div className="bg-white rounded-lg shadow-md p-6">
            <BookingForm
              title={`Rent ${selectedSystem.name}`}
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
