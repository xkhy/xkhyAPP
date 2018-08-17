// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from "vue-router";
import foot from '@/components/Foot.vue'


import '../../modules/iconfont/iconfont.css'
import '../../modules/css/style.css'
// import axios from 'axios'
// import url from '../../modules/js/api.js'
Vue.use(Router)

// import { InfiniteScroll } from 'mint-ui';


// Vue.use(InfiniteScroll)

// import footer from '../../components/Footer.vue'



//使用mint-ui
// import Mint from 'mint-ui';
// Vue.use(Mint);
// import 'mint-ui/lib/style.css';

//按需引入 mint-ui
// import Button from 'mint-ui/lib/button';
// Vue.component(Button.name, Button);
//
// import { Swipe, SwipeItem } from 'mint-ui';   //按需引入部分组件
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);


Vue.config.productionTip = false





let routes = [
  {
    path: '/',
    component: require('./components/privatesea.vue'),
    children: [
      // {
      //   path:'',
      //   // component:require('./components/all.vue'),
      //   //也可以进行重定向
      //   redirect:'all',
      // },
      {
        path:'privateseaclass',
        name:'privateseaclass',
        component:require('./components/privateseaclass.vue'),
      },
      {
        path:'privateseadata',
        name:'privateseadata',
        component:require('./components/privateseadata.vue'),
      },
      {
        path:'privateseavoice',
        name:'privateseavoice',
        component:require('./components/privateseavoice.vue'),
      }
    ]
  },
]

// 创建router实例
let router = new Router({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#vue-el',
  router,
  components: {
    foot,
  },

})
