import { createRouter, createWebHistory } from 'vue-router'
import OptionPage from '@/components/Option.vue'
import CompositionPage from '@/components/Composition.vue'
import ReactiveObject from '@/components/reactive.vue'
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
  },
  {
    path:'/reactive',
    name:'ReactiveObject',
    component: ReactiveObject
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
