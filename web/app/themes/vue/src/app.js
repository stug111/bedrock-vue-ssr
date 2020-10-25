import Vue from 'vue'
import { createRouter } from './router'
import App from './App.vue'

import './style.css'

export const createApp = () => {
    const router = createRouter()
    const app = new Vue({
        router,
        render: h => h(App),
    }) 

    return { app, router }
}