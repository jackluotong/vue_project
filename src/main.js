/*
 * @Description:
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-06-23 22:12:35
 * @LastEditors: william
 * @LastEditTime: 2021-08-14 17:41:20
 * @For What?:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import VueResource from 'vue-resource'
// import iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.prototype.axios = axios
Vue.use(Antd)
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
console.log(process.env)
