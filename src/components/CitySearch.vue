<template>
  <div class="container d-flex justify-content-center">
    <div class="row w-100 justify-content-center">
      <div class="col-lg-10 col-md-12">
        <div class="input-group mb-3">
          <input
            v-model="city"
            @keyup.enter="searchWeather"
            class="form-control"
            placeholder="Nom de la ville"
            aria-label="Nom de la ville"
            aria-describedby="button-addon2"
          />
          <button
            @click="searchWeather"
            class="btn btn-primary"
            type="button"
            id="button-addon2"
          >
            Rechercher
          </button>
        </div>
        <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
        <Loader v-if="isLoading" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Loader from './Loader.vue'; 
import { getWeather } from '../services/WeatherService';
import type { Weather } from '../models/Weather';

export default defineComponent({
  components: { Loader },
  setup(_, { emit }) {
    const city = ref('');
    const errorMessage = ref('');
    const isLoading = ref(false); 

    const searchWeather = async () => {
      if (!city.value) return;

      isLoading.value = true; 
      try {
        errorMessage.value = '';
        const weather = await getWeather(city.value);
        console.log('Données météo:', weather);
        emit('weather-updated', weather);
      } catch (error) {
        errorMessage.value = 'Erreur lors de la récupération des données météo. Veuillez réessayer.';
        console.error('Erreur lors de la recherche météo:', error);
      } finally {
        isLoading.value = false; 
      }
    };

    return { city, searchWeather, errorMessage, isLoading };
  },
});
</script>

<style scoped>
.container {
  padding: 0;
}

.input-group {
  width: 100%; 
}

.form-control {
  flex: 1;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
  border-width: 0.3em;
}
</style>
