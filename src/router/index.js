import { createRouter, createWebHashHistory } from 'vue-router'

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

router.onError((error, to) => {
  if (error.message.includes('Failed to fetch dynamically imported module')) {
    window.location = to.href
  }
})

export default router
