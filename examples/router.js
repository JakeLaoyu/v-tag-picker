import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/test'
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/pages/test')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/pages/demo')
    }
  ]
})

export default router
