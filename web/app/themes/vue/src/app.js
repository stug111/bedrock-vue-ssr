import Vue from 'vue'
import { createRouter } from './router'
import { createStore } from './store'
import { apolloProvider } from './apollo'
import App from './App.vue'

import './style.css'

export const createApp = () => {
    const router = createRouter()
    const store = createStore()

    const app = new Vue({
        router,
        store,
        apolloProvider,
        render: h => h(App),
    })

    return { app, router, store }
}
