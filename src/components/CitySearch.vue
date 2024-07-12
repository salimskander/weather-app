<template>
  <div class="mb-3">
    <input v-model="city" @keyup.enter="searchWeather" class="form-control" placeholder="Enter city name" />
    <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getWeather } from '../services/WeatherService';
import type { Weather } from '../models/Weather';

export default defineComponent({
  setup(_, { emit }) {
    const city = ref('');
    const errorMessage = ref('');

    const searchWeather = async () => {
      try {
        errorMessage.value = '';
        const weather = await getWeather(city.value);
        emit('weather-updated', weather);
      } catch (error) {
        errorMessage.value = 'Error fetching weather data. Please try again.';
        console.error('Error searching weather:', error);
      }
    };

    return { city, searchWeather, errorMessage };
  },
});
</script>
