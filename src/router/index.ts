import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  { path: '/home', component: () => import('../views/home.vue') },
  { path: '/game', component: () => import('../views/game.vue') },
  { path: '/solve/:id', component: () => import('../views/solve.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
