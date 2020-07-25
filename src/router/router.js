import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Index from '../pages/index.vue'
// import UserCenter from '../pages/userCenter.vue'
// import UserInfo from '../pages/userInfo.vue'
import Home from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import FirstPart from '@/components/HomeComponents/FirstPart'
import SecondPart from '@/components/HomeComponents/SecondPart'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: Index
    // }
    // {
    //   path: '/userCenter',
    //   name: 'userCenter',
    //   component: UserCenter,
    //   children: [{
    //     path: 'userInfo',
    //     name: 'userInfo',
    //     component: UserInfo
    //   }
    // ]
    // }
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
          path: '/',
          name: 'FirstPart',
          component: FirstPart
        },
        {
          path: 'SecondPart',
          name: 'SecondPart',
          component: SecondPart
        }
      ]
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})
