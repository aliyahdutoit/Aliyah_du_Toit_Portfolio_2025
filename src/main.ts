import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router you just made

const app = createApp(App)
app.use(router) // Tell Vue to use it
app.mount('#app')