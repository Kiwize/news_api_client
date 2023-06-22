<script setup>
import { Configuration } from '../script/Config'
import { Bootstrap5Pagination as pagination } from 'laravel-vue-pagination'
import LoadingScreen from '../components/LoadingScreen.vue'
import LocaleSelector from '../components/form/LocaleSelector.vue'
import FeedTableData from '../components/FeedTableData.vue'
import axios from 'axios'
</script>

<template>
  <LoadingScreen :isShown="isShown" />
  <main>
    <h2 class="h2 text-center mt-3">Gestion des sources</h2>
    <div>
      <pagination
        class="d-flex flex-rox justify-content-center"
        :data="currentData"
        @pagination-change-page="getResults($event)"
      ></pagination>
    </div>
    <div class="container w-75 d-flex flex-row justify-content-center">
      <LocaleSelector @locale-filter="onLocaleFilterChange" />
    </div>
    <div class="container">
      <FeedTableData :current-data="currentData" />
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
      currentData: {}
    }
  }, methods: {
    getResults(currentPage) {
      const page = currentPage ? currentPage : 1
      this.currentPage = page
      const url =
        Configuration.URL +
        `/api/feeds?localeFilter=${this.localeFilter}`
      axios.get(url).then((res) => {
        this.currentData = res.data.result
        console.log(this.currentData)
      })
    },onLocaleFilterChange(locale) {
      this.localeFilter = locale.value
      this.getResults(this.currentPage)
    }
  }, mounted() {
    this.getResults()
  }
}
</script>
