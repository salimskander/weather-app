<template>
  <div>
    <CitySearch @weather-updated="updateWeather" />
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
