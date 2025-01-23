// Initialize the Gemini API
export const GEMINI_API_KEY = 'YOUR_API_KEY';

export const geminiConfig = {
  baseURL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
  maxTokens: 8192,
  temperature: 0.7,
};

export const generateWeatherPrompt = (location) => {
  return `As a farming and weather expert, provide detailed weather information and agricultural recommendations for ${location}. Format your response as a valid JSON object exactly like this example:
{
  "weather": {
    "temperature": {
      "value": "25°C",
      "description": "Warm and comfortable",
      "range": {"min": "20°C", "max": "28°C"}
    },
    "humidity": {
      "value": "60%",
      "description": "Moderate humidity",
      "impact": "Good for most crops"
    },
    "windSpeed": {
      "value": "10 km/h",
      "description": "Light breeze",
      "direction": "NE"
    },
    "condition": {
      "main": "Clear",
      "description": "Clear sky with good visibility",
      "precipitation": "0%"
    },
    "soil": {
      "moisture": "Medium",
      "temperature": "22°C",
      "condition": "Well-drained",
      "suitability": "Good for planting"
    }
  },
  "farming": {
    "recommendations": {
      "suitable_crops": [
        "Wheat",
        "Corn",
        "Soybeans"
      ],
      "unsuitable_crops": [
        "Rice",
        "Water-intensive crops"
      ],
      "activities": [
        "Ideal for field preparation",
        "Good time for sowing wheat",
        "Consider irrigation in the evening"
      ],
      "warnings": [
        "Watch for pest activity due to warm weather",
        "Monitor soil moisture levels"
      ]
    },
    "soil_management": {
      "tips": [
        "Maintain organic mulch",
        "Monitor pH levels",
        "Consider light tillage"
      ],
      "fertilizer": {
        "recommended": true,
        "type": "NPK balanced",
        "timing": "Early morning or evening"
      }
    }
  }
}
IMPORTANT: Ensure the response is a valid JSON object that can be parsed. Do not include any additional text, markdown, or explanations outside the JSON structure.`;
};
