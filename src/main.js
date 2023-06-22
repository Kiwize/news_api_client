import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App).use(BootstrapVue3);

app.use(createPinia())
app.use(router)

app.mount('#app')
