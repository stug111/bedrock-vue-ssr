import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import NotFound from '../pages/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '*', name: '404', component: NotFound }
];

export const createRouter = () => new VueRouter({
    mode: 'history',
    base: '/',
    routes
})