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
        getAllInfo() {},
    },
    modules: {},
})
