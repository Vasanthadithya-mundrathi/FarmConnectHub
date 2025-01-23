import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTemperatureHigh, FaWind, FaCloud, FaSeedling, FaThermometerHalf, FaCompass, FaTint } from 'react-icons/fa';
import { WiHumidity, WiBarometer, WiSunrise, WiSunset, WiStrongWind, WiCloudy } from 'react-icons/wi';

const WeatherReport = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fixed coordinates for Hyderabad
  const HYDERABAD_LAT = 17.3850;
  const HYDERABAD_LON = 78.4867;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${HYDERABAD_LAT}&lon=${HYDERABAD_LON}&appid=e7b2bfec460b0427b84577aa07f3d63e&units=metric`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching weather:', err);
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeather();
    // Refresh weather data every 5 minutes
    const interval = setInterval(fetchWeather, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getWeatherIcon = (weatherCode) => {
    return `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
  };

  const getWindDirection = (degrees) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(((degrees %= 360) < 0 ? degrees + 360 : degrees) / 22.5) % 16;
    return directions[index];
  };

  const getWeatherAdvice = (weatherData) => {
    if (!weatherData) return [];

    const { temp, humidity } = weatherData.main;
    const windSpeed = weatherData.wind.speed;
    const weather = weatherData.weather[0].main.toLowerCase();
    let advice = [];

    // Temperature based advice
    if (temp > 35) {
      advice.push({
        type: 'warning',
        text: 'Extreme heat conditions - Take precautions for heat stress'
      });
    } else if (temp > 30) {
      advice.push({
        type: 'caution',
        text: 'High temperature - Stay hydrated and avoid peak sun hours'
      });
    }

    // Humidity based advice
    if (humidity > 80) {
      advice.push({
        type: 'warning',
        text: 'High humidity - Risk of fungal diseases in crops'
      });
    } else if (humidity < 30) {
      advice.push({
        type: 'caution',
        text: 'Low humidity - Increase watering frequency'
      });
    }

    // Weather specific advice
    if (weather.includes('rain')) {
      advice.push({
        type: 'info',
        text: 'Rainfall expected - Plan indoor activities'
      });
    } else if (weather.includes('clear')) {
      advice.push({
        type: 'success',
        text: 'Clear weather - Good conditions for outdoor work'
      });
    }

    return advice;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading weather information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-red-50 p-6 rounded-lg text-red-800 max-w-md text-center">
          <p className="font-semibold mb-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  const weatherAdvice = getWeatherAdvice(weather);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Weather Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Weather Report</h1>
          <p className="text-xl text-gray-600">Hyderabad, Telangana</p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>

        {/* Main Weather Display */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={getWeatherIcon(weather.weather[0].icon)}
              alt={weather.weather[0].description}
              className="w-24 h-24"
            />
            <div className="ml-6">
              <h2 className="text-5xl font-bold text-gray-900">
                {Math.round(weather.main.temp)}°C
              </h2>
              <p className="text-xl text-gray-600 capitalize mt-2">
                {weather.weather[0].description}
              </p>
            </div>
          </div>

          {/* Weather Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Feels Like */}
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center text-orange-600 mb-2">
                <FaThermometerHalf className="text-xl mr-2" />
                <span className="font-semibold">Feels Like</span>
              </div>
              <p className="text-2xl font-bold text-orange-700">
                {Math.round(weather.main.feels_like)}°C
              </p>
            </div>

            {/* Humidity */}
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center text-blue-600 mb-2">
                <WiHumidity className="text-2xl mr-2" />
                <span className="font-semibold">Humidity</span>
              </div>
              <p className="text-2xl font-bold text-blue-700">
                {weather.main.humidity}%
              </p>
            </div>

            {/* Wind */}
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center text-green-600 mb-2">
                <FaWind className="text-xl mr-2" />
                <span className="font-semibold">Wind</span>
              </div>
              <p className="text-2xl font-bold text-green-700">
                {Math.round(weather.wind.speed * 3.6)} km/h
              </p>
              <p className="text-sm text-green-600">
                Direction: {getWindDirection(weather.wind.deg)}
              </p>
            </div>

            {/* Pressure */}
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center text-purple-600 mb-2">
                <WiBarometer className="text-2xl mr-2" />
                <span className="font-semibold">Pressure</span>
              </div>
              <p className="text-2xl font-bold text-purple-700">
                {weather.main.pressure} hPa
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Sun Schedule */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sun Schedule</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-yellow-600">
                  <WiSunrise className="text-3xl mr-2" />
                  <span>Sunrise</span>
                </div>
                <span className="text-lg font-semibold">
                  {formatTime(weather.sys.sunrise)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-orange-600">
                  <WiSunset className="text-3xl mr-2" />
                  <span>Sunset</span>
                </div>
                <span className="text-lg font-semibold">
                  {formatTime(weather.sys.sunset)}
                </span>
              </div>
            </div>
          </div>

          {/* Visibility and Clouds */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Atmospheric Conditions</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-600">
                  <FaTint className="text-xl mr-2" />
                  <span>Visibility</span>
                </div>
                <span className="text-lg font-semibold">
                  {(weather.visibility / 1000).toFixed(1)} km
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-600">
                  <WiCloudy className="text-3xl mr-2" />
                  <span>Cloud Cover</span>
                </div>
                <span className="text-lg font-semibold">
                  {weather.clouds.all}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Weather Advice */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <FaSeedling className="text-green-500 mr-2" />
            Weather Insights
          </h3>
          <div className="space-y-3">
            {weatherAdvice.map((advice, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg ${
                  advice.type === 'warning' ? 'bg-red-50 text-red-700' :
                  advice.type === 'caution' ? 'bg-yellow-50 text-yellow-700' :
                  advice.type === 'success' ? 'bg-green-50 text-green-700' :
                  'bg-blue-50 text-blue-700'
                }`}
              >
                <p>{advice.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Temperature Range */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-blue-600">
              <FaTemperatureHigh className="text-xl mr-2" />
              <span>Temperature Range</span>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Min / Max</p>
              <p className="text-lg font-bold">
                {Math.round(weather.main.temp_min)}°C / {Math.round(weather.main.temp_max)}°C
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;
