import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
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
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/another',
    name: 'Another',
    component: () => import('../views/Another.vue')
  },
  {
    path: '/interview',
    name: 'Interview',
    component: () => import('../views/Interview.vue')
  },
  {
    path: '/forVue',
    name: 'ForVue',
    component: () => import('../components/ForVue.vue')
  },
  {
    path: '/forRouter',
    // redirect: '/about',
    alias: 'heheda',
    name: 'ForRouter',
    component: () => import('../components/ForRouter.vue')
  },
  {
    path: '/forVuex',
    name: 'ForVuex',
    component: () => import('../components/ForVuex.vue')
  }, {
    path: '/jsFundamental',
    name: 'JsFundamental',
    component: () => import('../components/JsFundamental.vue')
  },
  {
    path: '/jsAdvanced',
    name: 'JsAdvanced',
    component: () => import('../components/JsAdvanced.vue')
  },
  {
    path: '/decemberInterview',
    name: 'DecemberInterview',
    component: () => import('../components/DecemberInterview.vue')
  },
  {
    path: '/January',
    name: 'January',
    component: () => import('../components/Interview/January.vue')
  },
  {
    path: '/March',
    name: 'March',
    meta: {
      keepAlive: true
    },
    component: () => import('../components/Interview/March.vue')
  },
  {
    path: '/Protocol',
    name: 'Protocol',
    component: () => import('../components/Protocol/Index.vue')
  },
  {
    path: '/Arithmetic',
    name: 'Arithmetic',
    component: () => import('../components/Arithmetic/Index.vue')
  }, 
  {
    path: '/April',
    name: 'April',
    component: () => import('../components/Interview/April.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router