import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { makeServer } from './server/server'

const app = createApp(App)
makeServer()

app.use(router)

app.mount('#app')
