import { createRouter, createWebHistory } from 'vue-router'

const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: import('../views/home.vue') },
  { path: '/game', component: import('../views/game.vue') },
  { path: '/solve/:id', component: import('../views/solve.vue') },
  { path: '/about', component: About }
]

export default createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes // `routes: routes` 的缩写
})
