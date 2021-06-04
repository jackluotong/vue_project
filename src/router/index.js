import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
        // beforeEnter: (to, from, next) => {
        //     // ...
        //     if(to.path=='/'){
        //         next()
        //     }else{
        //         alert('login in ..')
        //         next('/')
        //     }
        // }
    },
    {
        path: '/another',
        name: 'Another',
        component: () => import('../views/Another.vue'),
    },
    {
        path: '/interview',
        name: 'Interview',
        component: () => import('../views/Interview.vue'),
    },
    {
        path: '/forVue',
        name: 'ForVue',
        component: () => import('../components/ForVue.vue'),
    },
    {
        path: '/forRouter',
        // redirect: '/about',
        alias: 'heheda',
        name: 'ForRouter',
        component: () => import('../components/ForRouter.vue'),
    },
    {
        path: '/forVuex',
        name: 'ForVuex',
        component: () => import('../components/ForVuex.vue'),
    },
    {
        path: '/jsFundamental',
        name: 'JsFundamental',
        component: () => import('../components/JsFundamental.vue'),
    },
    {
        path: '/jsAdvanced',
        name: 'JsAdvanced',
        component: () => import('../components/JsAdvanced.vue'),
    },
    {
        path: '/decemberInterview',
        name: 'DecemberInterview',
        component: () => import('../components/DecemberInterview.vue'),
    },
    {
        path: '/January',
        name: 'January',
        component: () => import('../components/Interview/January.vue'),
    },
    {
        path: '/March',
        name: 'March',
        meta: {
            keepAlive: true,
        },
        component: () => import('../components/Interview/March.vue'),
    },
    {
        path: '/Protocol',
        name: 'Protocol',
        component: () => import('../components/Protocol/Index.vue'),
    },
    {
        path: '/Arithmetic',
        name: 'Arithmetic',
        component: () => import('../components/Arithmetic/Index.vue'),
    },
    {
        path: '/April',
        name: 'April',
        component: () => import('../components/Interview/April.vue'),
    },
    {
        path: '/Father',
        name: 'Father',
        component: () => import('../ComponentTest/Father.vue'),
    },
    {
        path: '/Son',
        name: 'Son',
        component: () => import('../ComponentTest/Child.vue'),
    },
    {
        path: '/May',
        name: 'May',
        component: () => import('../components/Interview/May/index.vue'),
    },
    {
        path: 'Advanced',
        name: 'Advanced',
        component: () => import('../components/Interview/May/Advanced.vue'),
    },
    {
        path: 'test',
        name: 'test',
        component: () => import('../components/Interview/May/test.vue'),
    },
    {
        path: 'CheckBox',
        name: 'CheckBox',
        component: () => import('../components/TestUse/CheckBox.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
