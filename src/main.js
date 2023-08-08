import { createApp } from 'vue'
import App from './App.vue'

import RootNav from './components/RootNav.vue'

createApp(App).component('RootNav', RootNav).mount('#app')
