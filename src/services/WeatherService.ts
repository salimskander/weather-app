import axios from 'axios';
import type { Weather } from '../models/Weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;; 
const BASE_URL = '/api/current'; 

export const getWeather = async (city: string): Promise<Weather> => {
  try {
    const response = await axios.get(`${BASE_URL}?access_key=${API_KEY}&query=${city}`);
    console.log('API Response:', response.data); 

    const data = response.data;

    if (!data || !data.location || !data.current) {
      throw new Error('Invalid response structure');
    }

    return {
      cityName: data.location.name,
      country: data.location.country,
      region: data.location.region,
      localTime: data.location.localtime,
      temperature: data.current.temperature,
      description: data.current.weather_descriptions[0],
      iconUrl: data.current.weather_icons[0],
      windSpeed: data.current.wind_speed,
      pressure: data.current.pressure,
      humidity: data.current.humidity,
      visibility: data.current.visibility,
      feelsLike: data.current.feelslike,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
