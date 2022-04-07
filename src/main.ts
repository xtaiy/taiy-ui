import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import './index.scss'

const routes=[{path:'/',component:Home},
{path:'/doc',component:Doc}]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

const app=createApp(App)
app.use(router).mount('#app')
