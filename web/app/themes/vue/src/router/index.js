import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../pages/Home';
import Single from '../pages/Single'
// import paths from './paths'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/single',
        component: Single,
        name: 'Single',
    },
]

export default new VueRouter({
    mode: 'history',
    base: '/',
    routes: routes
})
