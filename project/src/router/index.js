import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hoc-sinh',
      name: 'HocSinh',
      component: function (resolve) {
        require(['@/components/HocSinh.vue'], resolve)
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: function (resolve) {
        require(['@/components/Home.vue'], resolve)
      }
    }
  ]
})
