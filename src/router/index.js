import { createRouter, createWebHistory } from 'vue-router'
import OptionPage from '@/components/Option.vue'
import CompositionPage from '@/components/Composition.vue'

const routes = [
  {
    path: '/',
    name: 'OptionPage',
    component: OptionPage
  },
  {
    path:'/composition',
    name: 'CompositionPage',
    component: CompositionPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
