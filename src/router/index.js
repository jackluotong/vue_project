import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/another',
    name:'Another',
    component:()=>import('../views/Another.vue')
  },
  {
    path:'/interview',
    name:'Interview',
    component:()=>import('../views/Interview.vue')
  },
  {
    path:'/forVue',
    name:'ForVue',
    component:()=>import('../components/ForVue.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
