<template>
    <div v-if="weather" class="card">
      <div class="card-body">
        <h5 class="card-title">{{ weather.cityName }}, {{ weather.country }}</h5>
        <p class="card-text">{{ weather.region }}</p>
        <p class="card-text">Local Time: {{ weather.localTime }}</p>
        <p class="card-text">Temperature: {{ weather.temperature }}°C</p>
        <p class="card-text">Description: {{ weather.description }}</p>
        <img :src="weather.iconUrl" alt="weather icon" />
        <p class="card-text">Wind Speed: {{ weather.windSpeed }} km/h</p>
        <p class="card-text">Pressure: {{ weather.pressure }} hPa</p>
        <p class="card-text">Humidity: {{ weather.humidity }}%</p>
        <p class="card-text">Visibility: {{ weather.visibility }} km</p>
        <p class="card-text">Feels Like: {{ weather.feelsLike }}°C</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import type { Weather } from '../models/Weather';
  
  export default defineComponent({
    props: {
      weather: {
        type: Object as PropType<Weather>,
        required: false,
      },
    },
  });
  </script>
  