<script setup>
import { Configuration } from '../script/Config'
import { Bootstrap5Pagination as pagination } from 'laravel-vue-pagination'
import LoadingScreen from '../components/LoadingScreen.vue'
import ResultsPerPageSelector from '../components/form/ResultsPerPageSelector.vue'
import LocaleSelector from '../components/form/LocaleSelector.vue'
import TableData from '../components/TableData.vue'
import axios from 'axios'
</script>

<template>
  <LoadingScreen :isShown="isShown" />
  <main>
    <h2 class="h2 text-center mt-3">Les dernières parutions</h2>
    <div>
      <pagination
        class="d-flex flex-rox justify-content-center"
        :data="currentData"
        @pagination-change-page="getResults($event)"
      ></pagination>
    </div>
    <div class="container w-75 d-flex flex-row justify-content-center">
      <LocaleSelector @locale-filter="onLocaleFilterChange" />
      <ResultsPerPageSelector @results-per-page="onResultsPerPageChange" />
    </div>
    <div class="container">
      <TableData :current-data="currentData" />
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      isShown: false,
      localeFilter: 'fr',
      currentPage: 1,
      resultsPerPage: 20,
      currentData: {}
    }
  },
  methods: {
    getResults(currentPage) {
      const page = currentPage ? currentPage : 1
      this.currentPage = page
      const url =
        Configuration.URL +
        `/api/articles?page=${page}&localeFilter=${this.localeFilter}&results=${this.resultsPerPage}`
      axios.get(url).then((res) => {
        this.currentData = res.data
      })
    },
    onLocaleFilterChange(locale) {
      this.localeFilter = locale.value
      this.getResults(this.currentPage)
    },
    onResultsPerPageChange(resultsPerPage) {
      this.resultsPerPage = resultsPerPage.value
      this.getResults(this.currentPage)
    }
  },
  mounted() {
    this.getResults()
  }
}
</script>
