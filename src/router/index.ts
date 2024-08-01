import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    { path: '/index', component: () => import('../views/index.vue') },
    { path: '/self', component: () => import('../views/self.vue') },
    // { path: '/home', component: () => import('../views/home.vue') },
    // { path: '/game', component: () => import('../views/game.vue') },
    { path: '/solve/:id', component: () => import('../views/solve.vue') }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
