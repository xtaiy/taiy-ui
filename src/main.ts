import './lib/taiy.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import './index.scss'
import SwitchDemo from './components/SwitchDemo.vue'
import { router } from './router'



const app=createApp(App)
app.use(router).mount('#app')
