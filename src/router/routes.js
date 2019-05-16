export default [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/payment/:id',
    name: '支付',
    component: () => import('@/views/payment/Payment.vue')
  },
  {
    path: '/not-found',
    name: '找不到页面',
    component: () => import('@/views/PageNotFound.vue')
  },
  {
    path: '*',
    redirect: '/not-found'
  }
]
