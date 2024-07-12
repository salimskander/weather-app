<template>
    <div v-if="weather" class="card mt-4 mx-auto" style="max-width: 1000px;">
      <div class="card-body">
        <h5 class="card-title text-center mb-4">{{ weather.cityName }}, {{ weather.country }}</h5>
        <div class="row mb-3">
          <div class="col-md-6 text-center">
            <img :src="weather.iconUrl" alt="Icône météo" class="img-fluid" style="max-width: 250px;" />
            <p class="card-text mt-2">Description: {{ weather.description }}</p>
          </div>
          <div class="col-md-6">
            <p class="card-text"><strong>Température:</strong> {{ weather.temperature }}°C</p>
            <p class="card-text"><strong>Ressenti:</strong> {{ weather.feelsLike }}°C</p>
            <p class="card-text"><strong>Vitesse du vent:</strong> {{ weather.windSpeed }}km/h</p>
            <p class="card-text"><strong>Pression:</strong> {{ weather.pressure }} hPa</p>
            <p class="card-text"><strong>Humidité:</strong> {{ weather.humidity }}%</p>
            <p class="card-text"><strong>Visibilité:</strong> {{ weather.visibility }} km</p>
          </div>
        </div>
        <p class="card-text text-center">{{ formatDate(weather.localTime) }}</p>
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
    methods: {
      formatDate(dateTime: string) {
        const [date, time] = dateTime.split(' ');
        const [year, month, day] = date.split('-');
        const [hours, minutes] = time.split(':');
  
        return `${day}/${month}/${year} à ${hours}h${minutes}`;
      }
    }
  });
  </script>
  
  <style scoped>
  .card {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    max-width: 1000px;
    background-color: rgb(240, 240, 240);
  }
  
  .card-body {
    padding: 2rem;
  }
  
  .img-fluid {
    max-width: 100%; 
    height: auto; 
  }
  
  .card-text {
    margin-bottom: 1rem; 
  }
  </style>
  