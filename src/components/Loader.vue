<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Chargement...</span>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Loader',
  });
  </script>
  
  <style scoped>
  .spinner-border {
    width: 3rem;
    height: 3rem;
    border-width: 0.3em;
  }
  </style>
  