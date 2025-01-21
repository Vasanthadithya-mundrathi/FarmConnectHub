import { useState } from 'react'
import BookingForm from '../../common/BookingForm'
import ImageWithFallback from '../../common/ImageWithFallback'
import { imageUrls } from '../../../data/imageUrls'

const storageOptions = [
  {
    name: 'Basic Storage Unit',
    price: '₹40/kg/month',
    image: imageUrls.storage.basic,
    features: [
      'Temperature: 2-8°C',
      'Basic monitoring',
      'Standard security',
      'Weekly reports'
    ],
    suitableFor: [
      'Vegetables',
      'Fruits',
      'Short-term storage',
      'Small quantities'
    ],
    capacity: 'Up to 1000 kg'
  },
  {
    name: 'Premium Cold Storage',
    price: '₹60/kg/month',
    image: imageUrls.storage.premium,
    features: [
      'Temperature: -2 to 10°C (Adjustable)',
      'Advanced climate control',
      '24/7 monitoring',
      'Daily reports'
    ],
    suitableFor: [
      'Exotic fruits',
      'Temperature-sensitive produce',
      'Medium to long-term storage',
      'Bulk quantities'
    ],
    capacity: 'Up to 5000 kg'
  },
  {
    name: 'Commercial Deep Freeze',
    price: '₹80/kg/month',
    image: imageUrls.storage.commercial,
    features: [
      'Temperature: -18°C and below',
      'Advanced freezing technology',
      'Real-time monitoring',
      'Detailed analytics'
    ],
    suitableFor: [
      'Long-term preservation',
      'Frozen products',
      'High-value produce',
      'Large quantities'
    ],
    capacity: 'Up to 10000 kg'
  }
]

export default function ColdStorage() {
  const [selectedStorage, setSelectedStorage] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleBooking = (formData) => {
    // TODO: Implement booking logic
    console.log('Booking data:', { ...formData, storageType: selectedStorage?.name })
    alert('Cold storage booking submitted successfully!')
    setShowForm(false)
    setSelectedStorage(null)
  }

  const extraFields = [
    {
      name: 'produceType',
      label: 'Type of Produce',
      type: 'text'
    },
    {
      name: 'quantity',
      label: 'Quantity (kg)',
      type: 'number',
      min: 100
    },
    {
      name: 'duration',
      label: 'Storage Duration (months)',
      type: 'number',
      min: 1
    },
    {
      name: 'temperature',
      label: 'Required Temperature (°C)',
      type: 'number'
    },
    {
      name: 'transportService',
      label: 'Transport Service Required',
      type: 'select',
      options: [
        { value: 'yes', label: 'Yes (+₹2000)' },
        { value: 'no', label: 'No' }
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Cold Storage Facilities</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          State-of-the-art cold storage solutions for preserving your agricultural produce.
          Choose from our range of temperature-controlled storage options.
        </p>
      </div>

      {!showForm ? (
        <>
          {/* Storage Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {storageOptions.map((storage) => (
              <div key={storage.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <ImageWithFallback
                  src={storage.image}
                  alt={storage.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{storage.name}</h3>
                      <p className="text-gray-600">Capacity: {storage.capacity}</p>
                    </div>
                    <span className="text-primary font-semibold">{storage.price}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {storage.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Suitable For:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {storage.suitableFor.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedStorage(storage)
                      setShowForm(true)
                    }}
                    className="btn-primary w-full"
                  >
                    Book Storage
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Storage Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Extend produce shelf life</li>
                <li>Maintain product quality</li>
                <li>Reduce post-harvest losses</li>
                <li>Better market timing</li>
                <li>Professional handling</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Storage Guidelines</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Clean and sort produce before storage</li>
                <li>Proper packaging required</li>
                <li>Regular quality checks conducted</li>
                <li>Insurance available</li>
                <li>24/7 access with prior notice</li>
              </ul>
            </div>
          </div>

          {/* Value-Added Services */}
          <div className="bg-primary/5 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Value-Added Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Quality Monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Transport Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Regular Reports</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setShowForm(false)}
            className="mb-6 text-gray-600 hover:text-gray-900"
          >
            ← Back to Storage Selection
          </button>
          <div className="bg-white rounded-lg shadow-md p-6">
            <BookingForm
              title={`Book ${selectedStorage.name}`}
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
