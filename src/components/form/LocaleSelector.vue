<script setup>
import { ref } from 'vue'
import { Configuration } from '../../script/Config'
import axios from 'axios'

const localeFilter = ref(Configuration.DEFAULT_LOCALE)

function onChange() {
  emit('localeFilter', localeFilter)
}

const emit = defineEmits(['localeFilter'])
</script>
<template>
  <label class="form-label lead">Langue</label>
  <select class="form-select mx-2" @change="onChange()" v-model="localeFilter">
    <option v-for="locale in this.availableLocales">{{ locale }}</option>
  </select>
</template>
<script>
export default {
  data() {
    return {
      localeFilter: 'fr',
      availableLocales: []
    }
  },
  methods: {
    getAvailableLocale() {
      axios.get(Configuration.URL + '/api/articles/locales').then((res) => {
        let arrayResult = Object.values(res.data)
        arrayResult = arrayResult.filter((locale) => locale.length <= 2)
        this.availableLocales = arrayResult.filter(function (item, pos, self) {
          return self.indexOf(item) == pos
        })
      })
    }
  },
  mounted() {
    this.getAvailableLocale()
  }
}
</script>
