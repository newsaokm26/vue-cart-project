import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/home/manage',
      children: [
        {
          path: '/home/manage',
          component: () => import('@/views/home/HomeManage.vue')
        },
        {
          path: '/category/manage',
          component: () => import('@/views/category/CategoryManage.vue')
        }
      ]
    }
  ]
})

export default router
