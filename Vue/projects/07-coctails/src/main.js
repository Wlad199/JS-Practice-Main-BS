import { createApp } from 'vue'
import App from './App.vue'

import './scss/null.scss'
import './scss/style.scss'
import store from './stores/store'

const app = createApp(App)
app.use(store)
app.mount('#app')