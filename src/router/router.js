import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../pages/index.vue'
import UserCenter from '../pages/userCenter.vue'
import UserInfo from '../pages/userInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: UserCenter,
      children: [{
        path: 'userInfo',
        name: 'userInfo',
        component: UserInfo
      }]
    }
  ]
})
