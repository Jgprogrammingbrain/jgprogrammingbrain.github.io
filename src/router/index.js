import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JavaScriptView from '@/views/JavaScriptView.vue'
import VueView from '@/views/VueView.vue'
import StyleView from '@/views/StyleView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    component: JavaScriptView
  },
  {
    path: '/vue',
    name: 'Vue',
    component: VueView
  },
  {
    path: '/css',
    name: 'Style',
    component: StyleView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
