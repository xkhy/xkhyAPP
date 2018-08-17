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
    component: require('./components/skill.vue'),
  },
]
// 创建router实例
let router = new Router({
  routes
})

new Vue({
  el: '#skill',
  router,
  components: { foot },
})
