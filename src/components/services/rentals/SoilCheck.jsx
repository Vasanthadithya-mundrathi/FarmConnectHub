import { useState } from 'react'
import BookingForm from '../../common/BookingForm'
import ImageWithFallback from '../../common/ImageWithFallback'
import { imageUrls } from '../../../data/imageUrls'

const soilTestTypes = [
  {
    name: 'Basic Soil Test',
    price: '₹1,200',
    image: imageUrls.soil.basic,
    parameters: [
      'pH Level',
      'Organic Matter',
      'NPK Content',
      'Texture Analysis'
    ],
    turnaround: '3-4 days',
    description: 'Essential soil test covering basic parameters for crop planning'
  },
  {
    name: 'Advanced Soil Analysis',
    price: '₹2,500',
    image: imageUrls.soil.advanced,
    parameters: [
      'All Basic Test Parameters',
      'Micronutrients',
      'Heavy Metals',
      'Soil Biology',
      'Water Retention'
    ],
    turnaround: '5-7 days',
    description: 'Comprehensive analysis for detailed soil health assessment'
  },
  {
    name: 'Specialized Crop Test',
    price: '₹3,000',
    image: imageUrls.soil.specialized,
    parameters: [
      'Crop-Specific Analysis',
      'Nutrient Recommendations',
      'Pest Risk Assessment',
      'Yield Potential Analysis'
    ],
    turnaround: '7-10 days',
    description: 'Tailored analysis based on specific crop requirements'
  }
]

export default function SoilCheck() {
  const [selectedTest, setSelectedTest] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleBooking = (formData) => {
    // TODO: Implement booking logic
    console.log('Booking data:', { ...formData, testType: selectedTest?.name })
    alert('Soil test booking submitted successfully!')
    setShowForm(false)
    setSelectedTest(null)
  }

  const extraFields = [
    {
      name: 'landSize',
      label: 'Land Size (acres)',
      type: 'number',
      min: 0.1
    },
    {
      name: 'cropType',
      label: 'Current/Planned Crop',
      type: 'text'
    },
    {
      name: 'sampleCollection',
      label: 'Sample Collection',
      type: 'select',
      options: [
        { value: 'self', label: 'Self Collection' },
        { value: 'team', label: 'Team Collection (+₹500)' }
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Soil Testing Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional soil analysis to help you make informed decisions about crop selection,
          fertilization, and soil management practices.
        </p>
      </div>

      {!showForm ? (
        <>
          {/* Test Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {soilTestTypes.map((test) => (
              <div key={test.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <ImageWithFallback
                  src={test.image}
                  alt={test.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{test.name}</h3>
                    <span className="text-primary font-semibold">{test.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{test.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Parameters Tested:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {test.parameters.map((param) => (
                        <li key={param}>{param}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Turnaround Time: {test.turnaround}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedTest(test)
                      setShowForm(true)
                    }}
                    className="btn-primary w-full"
                  >
                    Book Test
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Sample Collection Guidelines</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Collect samples from 5-10 different locations in your field</li>
                <li>Take samples from 6-8 inches depth</li>
                <li>Avoid sampling immediately after fertilizer application</li>
                <li>Store samples in clean, labeled plastic bags</li>
                <li>Keep samples cool and dry until delivery</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Why Soil Testing?</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Optimize fertilizer usage and reduce costs</li>
                <li>Improve crop yield and quality</li>
                <li>Identify potential soil problems early</li>
                <li>Make informed decisions about crop selection</li>
                <li>Monitor soil health over time</li>
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
            ← Back to Test Selection
          </button>
          <div className="bg-white rounded-lg shadow-md p-6">
            <BookingForm
              title={`Book ${selectedTest.name}`}
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
