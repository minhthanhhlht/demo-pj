import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App).use(router)
app.use(VueAxios, { $request: axios })
// app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')
