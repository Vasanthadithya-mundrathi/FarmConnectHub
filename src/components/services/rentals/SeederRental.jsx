import { useState } from 'react'
import BookingForm from '../../common/BookingForm'
import ImageWithFallback from '../../common/ImageWithFallback'
import { imageUrls } from '../../../data/imageUrls'

const seederTypes = [
  {
    name: 'Manual Seed Drill',
    price: '₹600/day',
    image: imageUrls.seeders.manual,
    features: [
      'Suitable for small farms',
      'Easy to operate',
      'Low maintenance',
      'Multiple crop compatibility'
    ],
    specifications: {
      rows: '4-6 rows',
      spacing: '20-30 cm adjustable',
      capacity: '15-20 kg seeds',
      coverage: '1-2 acres/day'
    }
  },
  {
    name: 'Tractor-Mounted Seeder',
    price: '₹1,200/day',
    image: imageUrls.seeders.tractor,
    features: [
      'High efficiency',
      'Precise seed placement',
      'Depth control',
      'Fertilizer application option'
    ],
    specifications: {
      rows: '8-12 rows',
      spacing: '15-45 cm adjustable',
      capacity: '40-50 kg seeds',
      coverage: '5-7 acres/day'
    }
  },
  {
    name: 'Precision Planter',
    price: '₹1,800/day',
    image: imageUrls.seeders.precision,
    features: [
      'GPS-guided planting',
      'Variable rate seeding',
      'Real-time monitoring',
      'Advanced seed metering'
    ],
    specifications: {
      rows: '12-16 rows',
      spacing: '10-50 cm adjustable',
      capacity: '60-80 kg seeds',
      coverage: '8-10 acres/day'
    }
  }
]

export default function SeederRental() {
  const [selectedSeeder, setSelectedSeeder] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleBooking = (formData) => {
    // TODO: Implement booking logic
    console.log('Booking data:', { ...formData, seederType: selectedSeeder?.name })
    alert('Seeder booking submitted successfully!')
    setShowForm(false)
    setSelectedSeeder(null)
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
      name: 'seedSpacing',
      label: 'Required Seed Spacing (cm)',
      type: 'number',
      min: 10
    },
    {
      name: 'operatorRequired',
      label: 'Operator Required',
      type: 'select',
      options: [
        { value: 'yes', label: 'Yes (+₹500/day)' },
        { value: 'no', label: 'No' }
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Seeder & Planter Rental</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Advanced seeding equipment for precise and efficient planting.
          Choose from our range of modern seeders for optimal crop establishment.
        </p>
      </div>

      {!showForm ? (
        <>
          {/* Seeder Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seederTypes.map((seeder) => (
              <div key={seeder.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <ImageWithFallback
                  src={seeder.image}
                  alt={seeder.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{seeder.name}</h3>
                      <p className="text-gray-600">Coverage: {seeder.specifications.coverage}</p>
                    </div>
                    <span className="text-primary font-semibold">{seeder.price}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {seeder.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Specifications:</h4>
                    <dl className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(seeder.specifications).map(([key, value]) => (
                        <div key={key}>
                          <dt className="text-gray-600 capitalize">{key}:</dt>
                          <dd className="font-medium">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedSeeder(seeder)
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
              <h2 className="text-xl font-semibold mb-4">Benefits of Modern Seeders</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Precise seed placement and spacing</li>
                <li>Reduced seed wastage</li>
                <li>Better germination rates</li>
                <li>Time and labor savings</li>
                <li>Uniform crop establishment</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Rental Guidelines</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Minimum rental period: 1 day</li>
                <li>Security deposit required</li>
                <li>Training provided for operation</li>
                <li>Maintenance support included</li>
                <li>Transport available on request</li>
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
            ← Back to Seeder Selection
          </button>
          <div className="bg-white rounded-lg shadow-md p-6">
            <BookingForm
              title={`Rent ${selectedSeeder.name}`}
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
