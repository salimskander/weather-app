<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container-fluid {
  max-width: 100%;
  padding: 0;
}
</style>
