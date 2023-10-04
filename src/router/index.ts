import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/basic-component',
      name: 'basic',
      component: () => import('@/views/BasicComponentView.vue')
    }
  ]
})

export default router
