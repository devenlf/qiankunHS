import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, setDefaultMountApp} from 'qiankun';
import {subMap} from './config/map-sub-app'

registerMicroApps(subMap)
setDefaultMountApp('/sub-vue')
createApp(App).mount('#app')
