import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    login: {
      user: '',
      password: '',
      nickName: ''
    },
    headerTitle: '任务'
  },
  mutations: {
    updateUser (state, value) {
      state.login.user = value
    },
    updatePassword (state, value) {
      state.login.password = value
    },
    updateHeaderTitle (state, value) {
      state.headerTitle = value
    }
  }
})
