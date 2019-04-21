import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyCart from './views/MyCart.vue'
import TopUp from './views/TopUp.vue'
import Order from './views/Order.vue'
import ToPayOrder from './views/ToPayOrder.vue'
import ToSendOrder from './views/ToSendOrder.vue'
import SentOrder from './views/SentOrder.vue'
import DeliveredOrder from './views/DeliveredOrder.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mycart',
      name: 'mycart',
      component: MyCart
    },
    {
      path: '/topup',
      name: 'topup',
      component: TopUp
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'topay',
          name: 'topay',
          component: ToPayOrder
        },
        {
          path: 'tosend',
          name: 'tosend',
          component: ToSendOrder
        },
        {
          path: 'sent',
          name: 'sent',
          component: SentOrder
        },
        {
          path: 'delivered',
          name: 'delivered',
          component: DeliveredOrder
        }
      ]
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
