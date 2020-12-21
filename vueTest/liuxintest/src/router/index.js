import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import MyComOne from '@/components/MyComOne'
import MyComTwo from '@/components/MyComTwo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/MyComOne',
      name: 'MyComOne',
      component: MyComOne
    },
    {
      path: '/MyComTwo',
      name: 'MyComTwo',
      component: MyComTwo
    },
  ]
})
