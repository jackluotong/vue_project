import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10,
  },
  mutations: {
    increment(state){
      state.count++
    }
  },
  actions: {
      changeDataAsync(context, ) {
        let {
          commit
        } = context
        commit('increment')
      }
    //计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform
  },
  modules: {
  }
})
