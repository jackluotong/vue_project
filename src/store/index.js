/*
 * @Description:
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-05-10 08:36:51
 * @LastEditors: william
 * @LastEditTime: 2021-09-14 00:33:34
 * @For What?:
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 16,
        nickName: 'jack ',
        lastName: 'william',
        age: 26,
    },
    getters: {
        //=computed
        realName(state) {
            return state.nickName + state.lastName
        },
    },
    mutations: {
        //=methods
        increment(state, payload) {
            // payload.number
            state.count += payload.number
        },
    },
    actions: {
        changeDataAsync(context) {
            let { commit } = context
            commit('increment')
        },
        testActions(context, args) {
            context.commit('increment', args)
        },
    },
    modules: {},
})
