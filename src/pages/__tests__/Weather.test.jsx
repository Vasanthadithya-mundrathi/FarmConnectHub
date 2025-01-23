import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import WeatherReport from '../Weather';

// Mock axios
jest.mock('axios');

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

// Mock geolocation
const mockGeolocation = {
  getCurrentPosition: jest.fn()
};
global.navigator.geolocation = mockGeolocation;

describe('WeatherReport Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  const mockWeatherData = {
    name: 'Test City',
    main: {
      temp: 25,
      feels_like: 26,
      temp_min: 23,
      temp_max: 28,
      humidity: 65,
      pressure: 1012
    },
    weather: [
      {
        main: 'Clear',
        description: 'clear sky'
      }
    ],
    wind: {
      speed: 3.5,
      deg: 180
    }
  };

  test('renders loading state initially', () => {
    render(<WeatherReport />);
    expect(screen.getByText(/Loading weather information/i)).toBeInTheDocument();
  });

  test('loads cached weather data if available', async () => {
    const cachedData = {
      data: mockWeatherData,
      timestamp: Date.now()
    };
    localStorage.getItem.mockReturnValue(JSON.stringify(cachedData));

    render(<WeatherReport />);

    await waitFor(() => {
      expect(screen.getByText('Test City')).toBeInTheDocument();
      expect(screen.getByText('25°C')).toBeInTheDocument();
    });
  });

  test('fetches new weather data when cache is expired', async () => {
    const oldCache = {
      data: mockWeatherData,
      timestamp: Date.now() - 6 * 60 * 1000 // 6 minutes old (expired)
    };
    localStorage.getItem.mockReturnValue(JSON.stringify(oldCache));
    
    mockGeolocation.getCurrentPosition.mockImplementation((success) => 
      success({ coords: { latitude: 40.7128, longitude: -74.0060 } })
    );

    axios.get.mockResolvedValue({ data: mockWeatherData });

    render(<WeatherReport />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
      expect(screen.getByText('Test City')).toBeInTheDocument();
    });
  });

  test('handles geolocation error', async () => {
    mockGeolocation.getCurrentPosition.mockImplementation((success, error) => 
      error(new Error('Geolocation error'))
    );

    render(<WeatherReport />);

    await waitFor(() => {
      expect(screen.getByText(/Unable to get your location/i)).toBeInTheDocument();
    });
  });

  test('handles API error', async () => {
    mockGeolocation.getCurrentPosition.mockImplementation((success) => 
      success({ coords: { latitude: 40.7128, longitude: -74.0060 } })
    );

    axios.get.mockRejectedValue(new Error('API Error'));

    render(<WeatherReport />);

    await waitFor(() => {
      expect(screen.getByText(/Failed to fetch weather data/i)).toBeInTheDocument();
    });
  });

  test('refresh button triggers new weather data fetch', async () => {
    mockGeolocation.getCurrentPosition.mockImplementation((success) => 
      success({ coords: { latitude: 40.7128, longitude: -74.0060 } })
    );

    axios.get.mockResolvedValue({ data: mockWeatherData });

    render(<WeatherReport />);

    await waitFor(() => {
      expect(screen.getByText('Refresh Weather Data')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Refresh Weather Data'));

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(2);
      expect(screen.getByText('Test City')).toBeInTheDocument();
    });
  });

  test('displays farming recommendations based on weather', async () => {
    axios.get.mockResolvedValue({ data: mockWeatherData });

    mockGeolocation.getCurrentPosition.mockImplementation((success) => 
      success({ coords: { latitude: 40.7128, longitude: -74.0060 } })
    );

    render(<WeatherReport />);

    await waitFor(() => {
      expect(screen.getByText(/Crop Recommendations/i)).toBeInTheDocument();
      expect(screen.getByText(/Daily Farming Guide/i)).toBeInTheDocument();
    });
  });
});
