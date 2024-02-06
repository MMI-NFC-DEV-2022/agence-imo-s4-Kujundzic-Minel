import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import { plugin, defaultConfig } from "@formkit/vue";

const app = createApp(App)

app.use(
    createRouter({
      history: createWebHistory(),
      routes
    })
  )

app.use(plugin, defaultConfig);

app.mount('#app')
