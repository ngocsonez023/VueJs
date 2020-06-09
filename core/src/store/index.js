import Vue from 'vue'
import Vuex from 'vuex'
import moduleCount from './module/count'
import account from './module/account'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    moduleCount,
    account
  }
})
