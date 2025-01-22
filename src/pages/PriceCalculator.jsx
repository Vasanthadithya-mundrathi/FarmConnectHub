import React, { useState } from 'react';
import { getCropPriceDetails } from '../services/priceCalculatorService';
import { crops, states } from '../data/locationData';

const PriceCalculator = () => {
  const [formData, setFormData] = useState({
    crop: '',
    state: '',
    district: ''
  });

  const [priceData, setPriceData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset district when state changes
      ...(name === 'state' && { district: '' })
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const data = await getCropPriceDetails(formData);
      console.log('Received data:', data); // Debug log
      setPriceData(data);
    } catch (err) {
      console.error('Error fetching price details:', err);
      setError('Failed to fetch price details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderPriceSection = () => {
    if (!priceData?.currentMarketPrice) return null;
    const { priceRange, priceTrend, monthComparison, yearComparison } = priceData.currentMarketPrice;

    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow">
        <div className="p-4 bg-gray-50 rounded">
          <h4 className="text-sm text-gray-600">Price Range</h4>
          <p className="text-lg font-semibold">{priceRange || 'N/A'}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded">
          <h4 className="text-sm text-gray-600">Price Trend</h4>
          <p className="text-lg font-semibold">{priceTrend || 'N/A'}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded">
          <h4 className="text-sm text-gray-600">Monthly Change</h4>
          <p className="text-lg font-semibold">{monthComparison || 'N/A'}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded">
          <h4 className="text-sm text-gray-600">Yearly Change</h4>
          <p className="text-lg font-semibold">{yearComparison || 'N/A'}</p>
        </div>
      </div>
    );
  };

  const renderLocationSection = () => {
    if (!priceData?.bestSellingLocations) return null;
    const { localMarkets, tradingHubs } = priceData.bestSellingLocations;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 rounded-lg shadow mt-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Local Markets</h3>
          <div className="space-y-4">
            {localMarkets.map((market, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded">
                <h4 className="font-medium">{market.name}</h4>
                {market.details.map((detail, i) => (
                  <p key={i} className="text-sm text-gray-600">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Trading Hubs</h3>
          <div className="space-y-4">
            {tradingHubs.map((hub, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded">
                <h4 className="font-medium">{hub.name}</h4>
                {hub.details.map((detail, i) => (
                  <p key={i} className="text-sm text-gray-600">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderForecastSection = () => {
    if (!priceData?.priceForecast) return null;
    const { nextMonthTrend, seasonalVariations, factors, risks } = priceData.priceForecast;

    return (
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <span className="mr-2">📈</span> Price Forecast
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Trends</h3>
            <div className="p-4 bg-gray-50 rounded">
              <h4 className="text-sm text-gray-600">Next Month Trend</h4>
              <p className="font-medium">{nextMonthTrend || 'N/A'}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h4 className="text-sm text-gray-600">Seasonal Variations</h4>
              <p className="font-medium">{seasonalVariations || 'N/A'}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Factors & Risks</h3>
            <div className="p-4 bg-gray-50 rounded">
              <h4 className="text-sm text-gray-600">Price Factors</h4>
              <ul className="list-disc list-inside space-y-1">
                {factors?.map((factor, index) => (
                  <li key={index} className="text-sm">{factor}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h4 className="text-sm text-gray-600">Risk Factors</h4>
              <ul className="list-disc list-inside space-y-1">
                {risks?.map((risk, index) => (
                  <li key={index} className="text-sm">{risk}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Price Calculator</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Crop
            </label>
            <select
              name="crop"
              value={formData.crop}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Crop</option>
              {crops.map(crop => (
                <option key={crop} value={crop}>{crop}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select State</option>
              {Object.keys(states).map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              District
            </label>
            <select
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              required
              disabled={!formData.state}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select District</option>
              {formData.state && states[formData.state].map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? 'Calculating...' : 'Calculate Price'}
          </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {priceData && (
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-2">💰</span> Current Market Price
            </h2>
            {renderPriceSection()}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-2">📍</span> Best Selling Locations
            </h2>
            {renderLocationSection()}
          </div>

          {renderForecastSection()}
        </div>
      )}
    </div>
  );
};

export default PriceCalculator;
