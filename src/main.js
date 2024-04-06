import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"

import HelloWorld from "./views/HelloWorld.vue"
import HelloWorld2 from "./views/HelloWorld2.vue"

// router setting
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect : "Home"},
        { path: '/home', name : 'Home' , component: HelloWorld, meta: { requiresAuth: false } },
        { path: '/home2', name : 'Home2' , component: HelloWorld2, meta: { requiresAuth: false } },
    ]
})
createApp(App)
    .use(router)
    .mount('#app')
