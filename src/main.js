import { createApp } from 'vue'
import log from "loglevel"
import "./my-bulma-project.scss"

import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"

import ModifyMyStore from "./views/ModifyMyStore.vue"
import UserProfile from "./views/UserProfile.vue"
import AuthCallback from "./views/AuthCallback.vue"

// icon import
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPenToSquare, faBookmark, faTrashCan} from '@fortawesome/free-regular-svg-icons'
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

// icon setting
library.add([faPenToSquare, faBookmark, faTrashCan, faSpinner])
config.autoAddCss = false

// router setting
const router = createRouter({
    history: createWebHistory("modify-my-store"),
    routes: [
//        { path: '/', redirect : { name: 'ModifyMyStore'} },
        { path: '/', name : 'ModifyMyStore' , component: ModifyMyStore, meta: { requiresAuth: true } },
        { path: '/s/:slug', name : 'ModifyMyStoreBySlug' , sensitive: true, component: ModifyMyStore, meta: { requiresAuth: true } },
        { path: '/i/:id', name : 'ModifyMyStoreById' , sensitive: true, component: ModifyMyStore, meta: { requiresAuth: true } },
        { path: '/callback/', name : 'AuthCallback' , component: AuthCallback, meta: { requiresAuth: false } },
        { path: '/my-profile/', name : 'MyProfile' , component: UserProfile, meta: { requiresAuth: true } },
    ]
})

// auth import
import { createAuth0 } from '@auth0/auth0-vue'
import authRedirect from "./store/authRedirect.js"
const auth = createAuth0({
    domain: import.meta.env.VITE_AUTH_DOMAIN,
    clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
    authorizationParams: {
        redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
        audience: import.meta.env.VITE_AUTH_AUDIENCE
    }
})

router.beforeEach((to, from, next) => {
    log.debug("before each:" + to.name)
    log.debug("from:%o",from)
    log.debug("to:%o",to)
    let isNext
    if(to.name === "AuthCallback") {
        const isAuth = auth.isAuthenticated.value
        const key = authRedirect.value.key
        const url = authRedirect.value.url
        log.debug("target: auth=" + isAuth + " key=" + key + " value=" + url)

        if (isAuth) {
            authRedirect.value.key = null
            authRedirect.value.url = null
            if (key && url && to.query.r) {
                if (key === decodeURIComponent(to.query.r)) {
                    next({ "path": url })
                    isNext = true
                }
            }
            if (!isNext) {
                next({ "path": "/modify-my-store" })
                isNext = true
            }
        }
    }
    if (to.meta.requiresAuth && !auth.isAuthenticated.value) {
        const d = new Date();
        authRedirect.value.key=d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate() + "_"
            + d.getHours() + "_" + d.getMinutes() + "_" + d.getSeconds() + "_" + d.getTime().toString(16)
        authRedirect.value.url=to.path
        auth.loginWithRedirect({
            appState: {
                target: "?r="+ encodeURIComponent(authRedirect.value.key)
            }
        })
        log.debug("target: key=" + authRedirect.value.key + " url=" + to.path)
        isNext = true
    }
    if (!isNext) {
        next()
    }
})

createApp(App)
    .use(router)
    .use(auth)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
