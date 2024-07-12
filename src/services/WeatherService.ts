import axios from 'axios';
import type { Weather } from '../models/Weather';

const API_KEY = 'bcf2856fbe131e2dd9cef9930df0de0a';
const BASE_URL = 'http://api.weatherstack.com/current';

export const getWeather = async (city: string): Promise<Weather> => {
  try {
    const response = await axios.get(`${BASE_URL}?access_key=${API_KEY}&query=${city}`);
    const data = response.data;
    console.log('Weather data:', data);

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
