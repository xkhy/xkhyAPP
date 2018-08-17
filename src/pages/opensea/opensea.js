import 'css/style.css'
import Vue from 'vue'
import Router from 'vue-router'
import foot from '@/components/Foot.vue'

import '../../modules/iconfont/iconfont.css'
import '../../modules/css/style.css'


Vue.use(Router)

let routes = [
  {
    path: '/',
    component: require('./components/opensea.vue'),
    children: [
      // {
      //   path:'',
      //   // component:require('./components/all.vue'),
      //   //也可以进行重定向
      //   redirect:'all',
      // },
      {
        path:'openseaadd',
        name:'openseaadd',
        component:require('./components/openseaadd.vue'),
      },
    ]
  },
]
// 创建router实例
let router = new Router({
  routes
})

new Vue({
  el: '#opensea',
  router,
  components: { foot },
})
