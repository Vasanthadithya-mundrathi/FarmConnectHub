import farmingSteps from '../../data/farmingSteps'

const farmingImages = {
  ploughing: [
    '/images/farming/ploughing/tractor_ploughing.jpg',
    '/images/farming/ploughing/traditional_ploughing.jpg'
  ],
  sowing: [
    '/images/farming/sowing/machine_sowing.jpg',
    '/images/farming/sowing/manual_sowing.jpg'
  ],
  nutrients: [
    '/images/farming/nutrients/fertilizer_application.jpg',
    '/images/farming/nutrients/organic_manure.jpg'
  ],
  irrigation: [
    '/images/farming/irrigation/drip_irrigation.jpg',
    '/images/farming/irrigation/sprinkler_system.jpg'
  ],
  protection: [
    '/images/farming/protection/pesticide_spraying.jpg',
    '/images/farming/protection/natural_protection.jpg'
  ],
  harvesting: [
    '/images/farming/harvesting/combine_harvester.jpg',
    '/images/farming/harvesting/manual_harvesting.jpg'
  ],
  storage: [
    '/images/farming/storage/modern_storage.jpg',
    '/images/farming/storage/traditional_storage.jpg'
  ]
}

export default function FarmingInstructions() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Instructions about Farming</h1>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">There are 7 steps in farming:</h2>
        <ol className="list-decimal list-inside space-y-2 mb-8">
          {farmingSteps.map(step => (
            <li key={step} className="text-lg">{step}</li>
          ))}
        </ol>
      </div>

      {/* Ploughing Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-4">1. Ploughing</h3>
        <p className="text-gray-700 mb-4">
          Ploughing or tilling is the process of breaking and loosening the soil. This essential step:
          • Removes weeds and crop residues
          • Adds humus and fertilizers to the soil
          • Brings nutrient-rich lower soil to the surface
          • Aerates the soil for better root development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {farmingImages.ploughing.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Ploughing method ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {index === 0 ? 'Modern Tractor Ploughing' : 'Traditional Ploughing'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sowing Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-4">2. Sowing</h3>
        <p className="text-gray-700 mb-4">
          Sowing is the careful process of planting seeds. Key considerations include:
          • Proper seed spacing and depth
          • Soil temperature and moisture
          • Seed quality and treatment
          • Timing based on season
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {farmingImages.sowing.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Sowing method ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {index === 0 ? 'Machine Sowing' : 'Traditional Hand Sowing'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Adding Nutrients Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-4">3. Adding Nutrients</h3>
        <p className="text-gray-700 mb-4">
          Proper nutrient management is crucial for crop growth:
          • Balanced NPK (Nitrogen, Phosphorus, Potassium)
          • Organic vs. chemical fertilizers
          • Timing of application
          • Soil testing and monitoring
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {farmingImages.nutrients.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Nutrient application ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {index === 0 ? 'Chemical Fertilizer Application' : 'Organic Manure Application'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Irrigation Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-4">4. Irrigation</h3>
        <p className="text-gray-700 mb-4">
          Efficient water management through irrigation:
          • Modern drip and sprinkler systems
          • Water conservation techniques
          • Timing and frequency
          • Water quality monitoring
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {farmingImages.irrigation.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Irrigation method ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {index === 0 ? 'Drip Irrigation System' : 'Sprinkler Irrigation'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Protection Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-4">5. Protecting the Crop</h3>
        <p className="text-gray-700 mb-4">
          Crop protection strategies include:
          • Pest and disease management
          • Integrated Pest Management (IPM)
          • Natural and chemical controls
          • Regular monitoring and prevention
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {farmingImages.protection.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Crop protection method ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {index === 0 ? 'Chemical Pest Control' : 'Natural Pest Management'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Harvesting Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-4">6. Harvesting</h3>
        <p className="text-gray-700 mb-4">
          Proper harvesting techniques ensure maximum yield:
          • Timing of harvest
          • Modern harvesting equipment
          • Post-harvest handling
          • Quality assessment
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {farmingImages.harvesting.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Harvesting method ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {index === 0 ? 'Combine Harvester' : 'Traditional Harvesting'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Storage Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-4">7. Storage</h3>
        <p className="text-gray-700 mb-4">
          Proper storage ensures crop quality:
          • Modern storage facilities
          • Temperature and humidity control
          • Pest prevention
          • Inventory management
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {farmingImages.storage.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Storage facility ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {index === 0 ? 'Modern Storage Facility' : 'Traditional Storage Methods'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
