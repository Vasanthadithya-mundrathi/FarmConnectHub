import { useState } from 'react';
import { FaRobot, FaSpinner, FaSeedling, FaWater, FaMoneyBillWave, FaMapMarkerAlt, FaLeaf, FaExclamationTriangle, FaCalendarAlt, FaTools } from 'react-icons/fa';
import { GiSprout } from 'react-icons/gi';
import { getFarmingRecommendations } from '../services/geminiService';

const crops = [
  'Rice', 'Wheat', 'Maize', 'Cotton', 'Sugarcane', 'Sorghum', 'Pulses', 'Other'
];

const soilTypes = [
  'Clay', 'Loamy', 'Sandy', 'Silt', 'Peaty', 'Chalky', 'Black'
];

const InfoItem = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="font-medium">{label}:</span>
    <span className="text-gray-700">{value}</span>
  </div>
);

const getSectionIcon = (section) => {
  switch (section) {
    case 'farmingPractices':
      return FaTools;
    case 'resourceOptimization':
      return FaWater;
    case 'budgetAllocation':
      return FaMoneyBillWave;
    case 'riskAssessment':
      return FaExclamationTriangle;
    case 'timeline':
      return FaCalendarAlt;
    default:
      return FaLeaf;
  }
};

const formatSectionTitle = (section) => {
  switch (section) {
    case 'farmingPractices':
      return 'Farming Practices';
    case 'resourceOptimization':
      return 'Resource Optimization';
    case 'budgetAllocation':
      return 'Budget Allocation';
    case 'riskAssessment':
      return 'Risk Assessment & Mitigation';
    case 'timeline':
      return 'Seasonal Timeline';
    default:
      return 'Unknown Section';
  }
};

export default function SuggestionBot() {
  const [formData, setFormData] = useState({
    crop: '',
    landArea: '',
    soilType: '',
    waterAvailability: '',
    budget: '',
    location: '',
    preferences: {
      organic: false,
      fastGrowing: false,
      highProfit: false
    }
  });
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRecommendations(null);  // Clear previous recommendations

    try {
      console.log('Submitting form with data:', formData);
      const result = await getFarmingRecommendations(formData);
      console.log('Received recommendations:', result);
      if (!result || !result.summary) {
        throw new Error('Invalid response from API');
      }
      setRecommendations(result);
    } catch (err) {
      console.error('Error getting recommendations:', err);
      setError(err.message || 'Failed to get recommendations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
      <Icon className="text-primary" />
      {title}
    </h3>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <FaRobot className="text-3xl" />
            Smart Farming Assistant
          </h1>
          <p className="text-lg opacity-90">
            Get personalized crop recommendations and detailed farming advice based on your specific conditions.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Crop Selection */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Desired Crop</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.crop}
                onChange={(e) => setFormData({...formData, crop: e.target.value})}
                required
              >
                <option value="">Select a crop</option>
                {crops.map(crop => (
                  <option key={crop} value={crop}>{crop}</option>
                ))}
              </select>
            </div>

            {/* Land Area */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                <FaSeedling className="inline mr-2" />
                Land Area (acres)
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.landArea}
                onChange={(e) => setFormData({...formData, landArea: e.target.value})}
                required
                min="0"
                step="0.1"
              />
            </div>

            {/* Soil Type */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Soil Type</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.soilType}
                onChange={(e) => setFormData({...formData, soilType: e.target.value})}
                required
              >
                <option value="">Select soil type</option>
                {soilTypes.map(soil => (
                  <option key={soil} value={soil}>{soil}</option>
                ))}
              </select>
            </div>

            {/* Water Availability */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                <FaWater className="inline mr-2" />
                Water Availability
              </label>
              <div className="flex gap-4">
                {['High', 'Medium', 'Low'].map(level => (
                  <label key={level} className="flex items-center">
                    <input
                      type="radio"
                      name="waterAvailability"
                      value={level}
                      checked={formData.waterAvailability === level}
                      onChange={(e) => setFormData({...formData, waterAvailability: e.target.value})}
                      className="mr-2"
                    />
                    {level}
                  </label>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                <FaMoneyBillWave className="inline mr-2" />
                Budget (₹)
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                required
                min="0"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                <FaMapMarkerAlt className="inline mr-2" />
                Location
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="Enter your location"
                required
              />
            </div>
          </div>

          {/* Preferences */}
          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-2">Preferences</label>
            <div className="flex flex-wrap gap-4">
              {Object.entries({
                organic: 'Organic Farming',
                fastGrowing: 'Fast Growing Crops',
                highProfit: 'High Profit Crops'
              }).map(([key, label]) => (
                <label key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.preferences[key]}
                    onChange={(e) => setFormData({
                      ...formData,
                      preferences: {...formData.preferences, [key]: e.target.checked}
                    })}
                    className="mr-2"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Processing...
              </>
            ) : (
              'Get Recommendations'
            )}
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8">
            {error}
          </div>
        )}

        {/* Recommendations Section */}
        {recommendations && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-primary">Your Personalized Farming Plan</h2>

            {/* Summary Section */}
            <div className="mb-8 bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Analysis Summary</h3>
              <p className="text-gray-700 whitespace-pre-line">{recommendations.summary}</p>
            </div>

            {/* Primary Crop Recommendations */}
            <div className="mb-8">
              <SectionHeader icon={FaSeedling} title="Primary Crop Recommendations" />
              {recommendations.primaryCrops.map((crop, index) => (
                <div key={index} className="space-y-6">
                  {/* Main Crop Info */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">{crop.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InfoItem label="Expected Yield" value={crop.yield} />
                      <InfoItem label="Market Price" value={crop.marketPrice} />
                      <InfoItem label="Cultivation Period" value={crop.cultivationPeriod} />
                      <InfoItem label="Water Requirements" value={crop.waterRequirements} />
                      <InfoItem label="Fertilizer Requirements" value={crop.fertilizerRequirements} />
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Why This Is Your Best Option</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {crop.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-700">{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Economics */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Economic Details</h4>
                    <div className="space-y-3">
                      <InfoItem label="Expected Revenue" value={crop.economics.revenue} />
                      <InfoItem label="Estimated Costs" value={crop.economics.costs} />
                      <InfoItem label="Potential Profit" value={crop.economics.profit} />
                      <InfoItem label="ROI" value={crop.economics.roi} />
                    </div>
                  </div>

                  {/* Challenges */}
                  {crop.challenges.length > 0 && (
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-yellow-800 mb-3">Potential Challenges</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {crop.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-gray-700">{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Alternative Crops */}
            <div className="mb-8">
              <SectionHeader icon={GiSprout} title="Alternative Crops" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations.alternativeCrops.map((crop, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">{crop.name}</h3>
                    
                    {/* Economics */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-800 mb-3">Economic Details</h4>
                      <div className="grid grid-cols-1 gap-3">
                        <InfoItem label="Expected Yield" value={crop.economics.yield} />
                        <InfoItem label="Market Price" value={crop.economics.price} />
                      </div>
                    </div>

                    {/* Advantages */}
                    {crop.advantages.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-green-800 mb-3">Advantages</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {crop.advantages.map((advantage, idx) => (
                            <li key={idx} className="text-gray-700">{advantage}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Disadvantages */}
                    {crop.disadvantages.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-red-800 mb-3">Disadvantages</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {crop.disadvantages.map((disadvantage, idx) => (
                            <li key={idx} className="text-gray-700">{disadvantage}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Other Sections */}
            {['farmingPractices', 'resourceOptimization', 'budgetAllocation', 'riskAssessment', 'timeline'].map(
              (section, index) => (
                <div key={section} className="mb-8">
                  <SectionHeader
                    icon={getSectionIcon(section)}
                    title={formatSectionTitle(section)}
                  />
                  <div className="space-y-6">
                    {recommendations[section].map((item, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold text-green-800 mb-4">{item.title}</h3>
                        
                        {/* Main points */}
                        {item.points.length > 0 && (
                          <ul className="list-disc list-inside space-y-2 mb-6">
                            {item.points.map((point, pointIdx) => (
                              <li key={pointIdx} className="text-gray-700">{point}</li>
                            ))}
                          </ul>
                        )}
                        
                        {/* Subsections */}
                        {item.subsections && item.subsections.length > 0 && (
                          <div className="space-y-6">
                            {item.subsections.map((subsection, subIdx) => (
                              <div key={subIdx} className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                                  {subsection.title}
                                </h4>
                                <ul className="list-disc list-inside space-y-2">
                                  {subsection.points.map((point, pointIdx) => (
                                    <li key={pointIdx} className="text-gray-700 ml-4">
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100 py-8 px-4 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
          <p className="text-gray-600">
            Have more questions? Contact our experts or explore our farming tutorials.
          </p>
          <div className="mt-4 space-x-4">
            <a href="/contact" className="text-primary hover:text-secondary">Contact Experts</a>
            <a href="/services" className="text-primary hover:text-secondary">Explore Tutorials</a>
          </div>
        </div>
      </div>
    </div>
  );
}
