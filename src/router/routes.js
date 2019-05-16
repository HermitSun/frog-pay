export default [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Index.vue'),
    meta: {
      title: '欢迎来到xxx公司'
    }
  },
  {
    path: '/payment/:id',
    name: '支付',
    component: () => import('@/views/payment/Payment.vue'),
    meta: {
      title: '支付'
    }
  },
  {
    path: '/not-found',
    name: '找不到页面',
    component: () => import('@/views/PageNotFound.vue'),
    meta: {
      title: '找不到页面'
    }
  },
  {
    path: '*',
    redirect: '/not-found'
  }
]
