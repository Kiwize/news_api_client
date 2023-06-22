<script setup>
import { ref } from 'vue'
import { Configuration } from '../../script/Config'

const resultsPerPage = ref(Configuration.RESULTS_PER_PAGE)

function onChange() {
  emit('resultsPerPage', resultsPerPage)
}

const emit = defineEmits(['resultsPerPage'])
</script>
<template>
  <div class=" container d-flex flex-column">
    <label class="form-label lead">Résultats par page</label>
    <select class="form-select mx-2" @change="onChange()" v-model="resultsPerPage">
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resultsPerPage: Configuration.RESULTS_PER_PAGE
    }
  }
}
</script>
