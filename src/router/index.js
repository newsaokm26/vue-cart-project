import { createRouter, createWebHashHistory } from 'vue-router'
import CartListManage from '../views/cartlist/CartListManage.vue'
import LoginPage from '../views/login/LoginPage.vue'
// createWebHistory createWebHashHistory
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
          component: LoginPage
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
          component: CartListManage
        }
      ]
    }
  ]
})

export default router
