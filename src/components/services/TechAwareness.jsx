const technologies = [
  {
    title: 'Precision Agriculture',
    description: 'Using GPS, sensors, and data analytics to optimize farming operations',
    image: '/images/tech/precision_farming.jpg',
    benefits: [
      'Reduced input costs',
      'Improved crop yields',
      'Better resource management',
      'Environmental sustainability'
    ]
  },
  {
    title: 'Smart Irrigation Systems',
    description: 'Automated irrigation systems with soil moisture sensors and weather data integration',
    image: '/images/tech/smart_irrigation.jpg',
    benefits: [
      'Water conservation',
      'Optimal plant growth',
      'Reduced labor costs',
      'Prevention of over/under watering'
    ]
  },
  {
    title: 'Drone Technology',
    description: 'Using drones for crop monitoring, spraying, and mapping',
    image: '/images/tech/drone_farming.jpg',
    benefits: [
      'Efficient crop monitoring',
      'Precise pesticide application',
      'Quick field mapping',
      'Early problem detection'
    ]
  },
  {
    title: 'IoT Sensors',
    description: 'Network of sensors to monitor soil, weather, and crop conditions',
    image: '/images/tech/iot_sensors.jpg',
    benefits: [
      'Real-time monitoring',
      'Data-driven decisions',
      'Automated alerts',
      'Better crop management'
    ]
  },
  {
    title: 'Farm Management Software',
    description: 'Digital platforms for managing farm operations and data',
    image: '/images/tech/farm_software.jpg',
    benefits: [
      'Streamlined operations',
      'Better record keeping',
      'Financial management',
      'Improved planning'
    ]
  }
]

export default function TechAwareness() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">Agricultural Technology Awareness</h1>
      
      {/* Introduction */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <p className="text-gray-700 text-lg">
          Modern agriculture is being transformed by technology, making farming more efficient,
          sustainable, and productive. Understanding and adopting these technologies can
          significantly improve your farming operations.
        </p>
      </div>

      {/* Technologies */}
      <div className="space-y-6">
        {technologies.map((tech) => (
          <div key={tech.title} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full md:w-64 object-cover"
                  src={tech.image}
                  alt={tech.title}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                  Modern Farming Technology
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-900">
                  {tech.title}
                </h2>
                <p className="mt-2 text-gray-600">
                  {tech.description}
                </p>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">Key Benefits:</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    {tech.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Modernize Your Farm?</h2>
        <p className="text-lg mb-6">
          Our experts can help you choose and implement the right technologies for your farm.
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Contact Our Tech Experts
        </button>
      </div>

      {/* Resources */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            <a href="#" className="text-primary hover:underline">
              📚 Free E-book: Getting Started with Agricultural Technology
            </a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">
              🎥 Video Series: Modern Farming Techniques
            </a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">
              👨‍🌾 Farmer Success Stories
            </a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">
              💡 Technology Implementation Guide
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
