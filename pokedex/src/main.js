import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
require('@/assets/main.scss');

createApp(App).use(router).use(store).mount('#app')
