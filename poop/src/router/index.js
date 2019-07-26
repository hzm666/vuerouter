import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 在routes中指定了根路径所以对应导入的路径会亮
import home from '../components/home'
import tool from '../components/tool'
import userinfo from '../components/userinfo'

Vue.use(Router)

export default new Router({
  // 去掉路由地址的# 路由地址都是以"#"形式展示，但是有些时候，
  // 我们又希望路由地址中不出现"#"，那怎么办呢？
  // vue给我们提供了一个属性mode="history"
  mode: 'history',
  
  routes: [
    {
      // 默认进入路由[写在第一个]
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/tool',
      name: 'tool',
      component: tool
    },
    // {
    // 登陆页面路由
    //   path: '/login',
    //   name: 'login',
    //   component: LoginPage
    // },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo,
      children: [
        { path: '/HelloWord', name: 'helloword', component: HelloWorld }
      ]
    }
    //   {
    //     // 错误路由[写在最后一个]
    //     path:'**',
    //     //  //重定向
    //     redirect:'home'
    //   }
    // ]

  ]
})
