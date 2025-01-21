const fertilizers = [
  {
    type: 'Nitrogen Fertilizers',
    examples: ['Urea', 'Ammonium Nitrate', 'Ammonium Sulfate'],
    usage: 'Essential for leaf growth and green vegetation',
    image: '/images/fertilizers/nitrogen.jpg',
    tips: [
      'Apply in small doses throughout growing season',
      'Best applied before irrigation',
      'Avoid application on wet leaves'
    ]
  },
  {
    type: 'Phosphorus Fertilizers',
    examples: ['Single Superphosphate', 'Triple Superphosphate', 'Rock Phosphate'],
    usage: 'Promotes root growth and flowering',
    image: '/images/fertilizers/phosphorus.jpg',
    tips: [
      'Apply before planting',
      'Mix well with soil',
      'Good for fruit and vegetable crops'
    ]
  },
  {
    type: 'Potassium Fertilizers',
    examples: ['Potassium Chloride', 'Potassium Sulfate', 'Potassium Nitrate'],
    usage: 'Improves overall plant health and disease resistance',
    image: '/images/fertilizers/potassium.jpg',
    tips: [
      'Essential for root crops',
      'Apply during flowering and fruiting',
      'Helps in drought resistance'
    ]
  }
]

const pesticides = [
  {
    type: 'Insecticides',
    examples: ['Pyrethroids', 'Organophosphates', 'Carbamates'],
    usage: 'Controls harmful insects',
    image: '/images/pesticides/insecticide.jpg',
    safety: [
      'Wear protective gear',
      'Apply in early morning or evening',
      'Keep away from water sources'
    ]
  },
  {
    type: 'Fungicides',
    examples: ['Copper-based', 'Sulfur-based', 'Systemic fungicides'],
    usage: 'Prevents fungal diseases',
    image: '/images/pesticides/fungicide.jpg',
    safety: [
      'Apply before disease outbreak',
      'Ensure good coverage',
      'Follow recommended dosage'
    ]
  },
  {
    type: 'Herbicides',
    examples: ['Glyphosate', 'Pre-emergent herbicides', 'Selective herbicides'],
    usage: 'Controls unwanted weeds',
    image: '/images/pesticides/herbicide.jpg',
    safety: [
      'Avoid windy conditions',
      'Protect desired plants',
      'Use appropriate nozzles'
    ]
  }
]

export default function FertilizerPesticides() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">Fertilizers and Pesticides Guide</h1>

      {/* Introduction */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <p className="text-gray-700 text-lg">
          Proper use of fertilizers and pesticides is crucial for successful farming. This guide
          provides essential information about different types, their uses, and safety measures.
        </p>
      </div>

      {/* Fertilizers Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Fertilizers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fertilizers.map((fertilizer) => (
            <div key={fertilizer.type} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={fertilizer.image}
                alt={fertilizer.type}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{fertilizer.type}</h3>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900">Common Examples:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {fertilizer.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700 mb-4">{fertilizer.usage}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Application Tips:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {fertilizer.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pesticides Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Pesticides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pesticides.map((pesticide) => (
            <div key={pesticide.type} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={pesticide.image}
                alt={pesticide.type}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pesticide.type}</h3>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900">Common Examples:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {pesticide.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700 mb-4">{pesticide.usage}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Safety Measures:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {pesticide.safety.map((measure) => (
                      <li key={measure}>{measure}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="bg-red-50 border-l-4 border-red-500 p-6">
        <h2 className="text-xl font-bold text-red-700 mb-4">Important Safety Guidelines</h2>
        <ul className="list-disc list-inside space-y-2 text-red-700">
          <li>Always read and follow label instructions carefully</li>
          <li>Use appropriate personal protective equipment (PPE)</li>
          <li>Store chemicals in original containers away from children and animals</li>
          <li>Never mix different chemicals unless specifically recommended</li>
          <li>Dispose of empty containers properly</li>
          <li>Keep records of all applications</li>
        </ul>
      </section>

      {/* Expert Consultation */}
      <section className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Expert Advice?</h2>
        <p className="mb-6">
          Our agricultural experts can help you create a customized fertilizer and pesticide
          plan for your crops.
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Schedule Consultation
        </button>
      </section>
    </div>
  )
}
