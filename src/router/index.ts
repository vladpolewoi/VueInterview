import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/basic-component',
      name: 'basic',
      component: () => import('@/views/BasicComponentView.vue')
    },
    {
      path: '/dynamic-style',
      name: 'style',
      component: () => import('@/views/DynamicStyleView.vue')
    },
    {
      path: '/state',
      name: 'state',
      component: () => import('@/views/StateManagement.vue')
    },
    {
      path: '/routing',
      name: 'routing',
      component: () => import('@/views/RoutingView.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/AboutView.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/ContactView.vue')
        }
      ]
    }
  ]
})

export default router
