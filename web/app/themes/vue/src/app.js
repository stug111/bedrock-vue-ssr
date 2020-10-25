import Vue from 'vue';
import router from './router'
import store from './store'
import App from './App.vue';

import './style.css'

export default new Vue({
    router,
    store,
    render: h => h(App),
})

