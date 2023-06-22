<script setup>
import axios from 'axios';
import { Configuration } from '../script/Config';

const props = defineProps(['currentData'])
</script>
<template>
  <table class="table table-responsive-md table-striped">
    <thead>
      <th scope="col">Nom</th>
      <th scope="col">Langue</th>
      <th scope="col">Lien</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </thead>
    <tbody>
      <tr v-for="article in currentData.data">
        <th scope="row" class="lead">{{ article.name }}</th>
        <td class="lead">{{ article.locale }}</td>
        <td><a :href="article.link" target="_blank">{{ article.link }}</a></td>
        <td><img id="author_logo" :src="article.author_logo"/></td>
        <td><button @click="deleteFeed(article.id)" class="btn btn-danger">Supprimer</button></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    deleteFeed(id) {
      axios.delete(Configuration.URL + '/api/feeds/delete', {
        data: {
          "feedID": id
        }
      }).then(res => {
        
      }) 
    }
  }
}
</script>
<style>
#author_logo {
  width: 60px;
}

</style>
