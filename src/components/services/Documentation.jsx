const documents = [
  {
    category: 'Land Records',
    items: [
      {
        title: 'Land Ownership Certificate',
        description: 'Legal document proving ownership of agricultural land',
        required: true
      },
      {
        title: 'Land Survey Number',
        description: 'Unique identification number for your land parcel',
        required: true
      },
      {
        title: 'Tax Assessment',
        description: 'Latest land tax assessment and payment records',
        required: true
      }
    ]
  },
  {
    category: 'Farming Operations',
    items: [
      {
        title: 'Crop Planning Records',
        description: 'Documentation of crop rotation and planning',
        required: false
      },
      {
        title: 'Input Records',
        description: 'Records of seeds, fertilizers, and pesticides used',
        required: true
      },
      {
        title: 'Harvest Records',
        description: 'Documentation of crop yields and harvest dates',
        required: true
      }
    ]
  },
  {
    category: 'Financial Records',
    items: [
      {
        title: 'Bank Account Details',
        description: 'Active bank account for transactions',
        required: true
      },
      {
        title: 'Loan Documents',
        description: 'Agricultural loan documentation if applicable',
        required: false
      },
      {
        title: 'Insurance Papers',
        description: 'Crop insurance and other relevant insurance documents',
        required: true
      }
    ]
  },
  {
    category: 'Identity Documents',
    items: [
      {
        title: 'Farmer ID Card',
        description: 'Government-issued farmer identification',
        required: true
      },
      {
        title: 'Aadhaar Card',
        description: 'National identity card',
        required: true
      },
      {
        title: 'PAN Card',
        description: 'Permanent Account Number card',
        required: true
      }
    ]
  }
]

export default function Documentation() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">Agricultural Documentation</h1>

      {/* Introduction */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <p className="text-gray-700 text-lg">
          Proper documentation is crucial for modern farming. It helps in maintaining records,
          accessing government schemes, and ensuring compliance with regulations. Below is a
          comprehensive guide to essential farming documentation.
        </p>
      </div>

      {/* Document Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((category) => (
          <div key={category.category} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div key={item.title} className="border-b border-gray-200 pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {item.title}
                        {item.required && (
                          <span className="ml-2 text-sm text-red-500">*Required</span>
                        )}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                    <button className="text-primary hover:text-secondary">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Document Management Tips */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Document Management Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Keep both physical and digital copies of all documents</li>
          <li>Store documents in a safe, dry place</li>
          <li>Regularly update and review your documentation</li>
          <li>Make multiple copies of important documents</li>
          <li>Use digital tools for document organization</li>
        </ul>
      </div>

      {/* Help Section */}
      <div className="bg-primary text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Need Help with Documentation?</h2>
        <p className="mb-6">
          Our team can assist you with document preparation, verification, and management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
            Schedule Consultation
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10">
            Download Guide
          </button>
        </div>
      </div>

      {/* Important Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Always verify the latest documentation requirements with local agricultural offices
              as they may vary by region and change over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
