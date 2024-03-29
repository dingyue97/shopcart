import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo.vue'
import echarts from '@/components/echarts.vue'
import time from '@/components/time.vue'
import shoppingTime from '@/components/shoppingTime.vue'
import fatherSon from '@/components/fatherSon.vue'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/demo', component: demo,

        }, {
          path: '/echarts', component: echarts,
        }, {
          path: '/time', component: time,
        }, {
          path: '/shoppingTime', component: shoppingTime,
        }, {
          path: '/fatherSon', component: fatherSon,
        }
      ]
    }

  ]
})
