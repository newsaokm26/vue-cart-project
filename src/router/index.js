import { createRouter, createWebHistory } from 'vue-router'

// createWebHistory createWebHashHistory
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
          path: '/login',
          component: () => import('@/views/login/LoginPage.vue')
        },
        {
          path: '/category/manage/:id',
          component: () => import('@/views/category/CategoryManage.vue')
        },
        {
          path: '/detail/manage/:id',
          component: () => import('@/views/detail/DetailManage.vue')
        },
        {
          path: '/cartlist/manage',
          component: () => import('@/views/cartlist/CartListManage.vue')
        }
      ]
    }
  ]
})

export default router
