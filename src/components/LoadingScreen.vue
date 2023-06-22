<script setup>

defineProps({
  isShown:{
    type: Boolean,
    required: true
  } 
})
</script>
<template>
  <div id="loading-screen" v-if="isShown == true">
    <div class="loading-content">
      <div class="spinner-border text-primary" role="status"></div>
      <p>Chargement en cours...</p>
    </div>
  </div>
</template>
