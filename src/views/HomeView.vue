<template>
  <div class="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100">
    <h1 class="text-center mb-4">Application Météo</h1>
    <div class="w-100">
      <CitySearch @weather-updated="updateWeather" />
    </div>
    <WeatherDisplay :weather="weather" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CitySearch from '../components/CitySearch.vue';
import WeatherDisplay from '../components/WeatherDisplay.vue';
import type { Weather } from '../models/Weather';

export default defineComponent({
  components: { CitySearch, WeatherDisplay },
  setup() {
    const weather = ref<Weather | null>(null);

    const updateWeather = (newWeather: Weather) => {
      weather.value = newWeather;
    };

    return { weather, updateWeather };
  },
});
</script>

<style scoped>
.container-fluid {
  padding: 0;
  margin: 0;
}
</style>
