import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/index')
    },
    {
      path: '/moveUpList',
      name: 'moveUpList',
      component: () => import('@/views/moveUpList'),
    },
    {
      path: '/dragUpList',
      name: 'dragUpList',
      component: () => import('@/views/dragUpList'),
    },
  ]
})
