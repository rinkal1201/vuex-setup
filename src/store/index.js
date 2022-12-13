import Vue from 'vue'
import Vuex from 'vuex'
import UsersModule from '../store/user/user-data'
import TestsModule from '../store/test/test-data'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    UsersModule,
    TestsModule,
  }
})