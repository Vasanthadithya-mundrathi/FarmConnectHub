// Weather API Configuration
export const OPENWEATHER_API_KEY = 'bd8d9c973f8fbd51fe56e85b9c15a88d';
export const OPENCAGE_API_KEY = '6f4a2d4a4b1b4b6b4b6b4b6b4b6b4b6b';

export const weatherConfig = {
  openWeatherMap: {
    baseURL: 'https://api.openweathermap.org/data/2.5',
    units: 'metric'
  },
  openCage: {
    baseURL: 'https://api.opencagedata.com/geocode/v1'
  }
};

// Farming recommendations based on weather conditions
export const getFarmingRecommendations = (weatherData) => {
  const { temp, humidity, wind_speed, rain } = weatherData.main;
  
  const recommendations = {
    suitable_crops: [],
    unsuitable_crops: [],
    activities: [],
    warnings: []
  };

  // Temperature-based recommendations
  if (temp >= 20 && temp <= 30) {
    recommendations.suitable_crops.push('Wheat', 'Corn', 'Soybeans');
    recommendations.activities.push('Ideal temperature for most farming activities');
  } else if (temp > 30) {
    recommendations.unsuitable_crops.push('Lettuce', 'Peas');
    recommendations.warnings.push('High temperature may stress crops');
    recommendations.activities.push('Water crops during early morning or evening');
  } else {
    recommendations.unsuitable_crops.push('Tomatoes', 'Peppers');
    recommendations.warnings.push('Low temperature may affect crop growth');
  }

  // Humidity-based recommendations
  if (humidity > 80) {
    recommendations.warnings.push('High humidity may increase disease risk');
    recommendations.activities.push('Monitor for fungal diseases');
  } else if (humidity < 30) {
    recommendations.warnings.push('Low humidity may cause water stress');
    recommendations.activities.push('Consider irrigation');
  }

  // Wind-based recommendations
  if (wind_speed > 20) {
    recommendations.warnings.push('Strong winds may damage crops');
    recommendations.activities.push('Check crop support structures');
  }

  // Rain-based recommendations
  if (rain && rain['1h'] > 10) {
    recommendations.warnings.push('Heavy rain may cause waterlogging');
    recommendations.activities.push('Check field drainage');
  }

  return recommendations;
};

// Soil management recommendations based on weather
export const getSoilManagement = (weatherData) => {
  const { temp, humidity } = weatherData.main;
  const recommendations = {
    tips: [],
    fertilizer: {
      recommended: false,
      type: '',
      timing: ''
    }
  };

  // Temperature-based soil management
  if (temp > 25) {
    recommendations.tips.push(
      'Apply mulch to retain soil moisture',
      'Monitor soil moisture levels regularly'
    );
  } else if (temp < 15) {
    recommendations.tips.push(
      'Consider using row covers',
      'Protect soil from temperature fluctuations'
    );
  }

  // Humidity-based soil management
  if (humidity > 70) {
    recommendations.tips.push(
      'Improve soil drainage if needed',
      'Monitor for soil-borne diseases'
    );
    recommendations.fertilizer = {
      recommended: false,
      type: 'Avoid fertilizer application',
      timing: 'Wait for drier conditions'
    };
  } else {
    recommendations.fertilizer = {
      recommended: true,
      type: 'Balanced NPK fertilizer',
      timing: 'Early morning application recommended'
    };
  }

  return recommendations;
};
