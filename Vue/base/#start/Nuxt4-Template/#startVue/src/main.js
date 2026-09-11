import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { createPinia } from "pinia";

import './scss/null.scss'
import './scss/style.scss'

const app = createApp(App)

//app.use(router)
//app.use(createPinia())

app.mount('#app')