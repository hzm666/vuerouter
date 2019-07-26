// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入js和css以便使用iconfont阿里矢量库中的数据
import './assets/style/img/iconfont'
import './assets/style/img/icon.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // render: h => h(App)
  // render:h => h(App)等于 
  // render: function (createElement) {
  //   return createElement(App);
  // }

})
