<script setup>
import { ref } from 'vue'
import { Configuration } from '../../script/Config'

const results = ref(Configuration.RESULTS)

function onChange() {
  emit('results', results)
}

const emit = defineEmits(['results'])
</script>
<template>
  <div class="container d-flex flex-column">
    <label class="form-label lead">Résultats</label>
    <select class="form-select mx-2" @change="onChange()" v-model="results">
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="200">200</option>
      <option value="">Tout</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      results: Configuration.RESULTS
    }
  }
}
</script>
