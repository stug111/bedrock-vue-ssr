import Vue from 'vue'
import App from './App.vue'

import './style.css'

export const createApp = () => {
    const app = new Vue({
        render: h => h(App),
    }) 

    return { app }
}