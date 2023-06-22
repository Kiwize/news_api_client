<script setup>
import { Configuration } from '../script/Config'
import { Bootstrap5Pagination as pagination } from 'laravel-vue-pagination'
import LoadingScreen from '../components/LoadingScreen.vue'
import axios from 'axios'

</script>

<template>
  <LoadingScreen :isShown="isShown" />
  <main>
    <h2 class="h2 text-center mt-3">Les dernières parutions</h2>
    <div>
      <pagination class="d-flex flex-rox justify-content-center" :data="currentData" @pagination-change-page="getResults($event)"></pagination>
    </div>
    <div class="container">
      <table class="table table-responsive-md table-striped">
        <thead>
          <th scope="col">Titre</th>
          <th scope="col">Langue</th>
          <th scope="col">Date de publication</th>
          <th scope="col"></th>
        </thead>
        <tbody>
          <tr v-for="article in currentData.data">
            <th scope="row" class="lead">{{ article.title }}</th>
            <td class="lead">{{ article.summary_detail.language }}</td>
            <td>{{ article.author_detail.published }}</td>
            <td><img id="author_logo" v-bind:src="article.author" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      isShown: false,
      currentData: {}
    }
  },
  methods: {
    getResults(currentPage) {
      const page = currentPage ? currentPage : 1
      const url = Configuration.URL + `/api/articles?page=${page}`
      axios.get(url).then((res) => {
        this.currentData = res.data
      })
    }
  },
  mounted() {
    this.getResults()
  }
}
</script>
