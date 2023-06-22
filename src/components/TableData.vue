<script setup>

const props = defineProps(['currentData'])

</script>
<template>
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
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
