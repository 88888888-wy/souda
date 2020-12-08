import Vue from 'vue'
import VueRouter from 'vue-router'
import Takeout from '../views/Takeout.vue'
import Order from '../views/Order.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/Takeout',
    name: 'Takeout',
    component: Takeout
  },
  {
    path: '/Takeout',
    name: 'Takeout',
    component: Takeout
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
  {
    path: '/User',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  routes
})

export default router
