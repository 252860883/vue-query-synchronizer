import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import { query } from '@oarepo/vue-query-synchronizer'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        props: query(
            [
                'search',
                { name: 'search2', debounce: 1000 }
            ],
            {
                another: 'property passed directly to the component'
            }),
        component: Home
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router