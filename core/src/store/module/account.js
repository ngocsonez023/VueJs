/* eslint-disable no-sequences */
import { accountService } from '../../services/account'
import router from '../../router'

const user = JSON.parse(localStorage.getItem('user'))
const state = {
  signInUp: true,
  isLogin: false,
  user: user
}

const getters = {
  getPage: state => {
    return state.signInUp
  }
}

const mutations = {
  changeSignInUp (state) {
    state.signInUp = !state.signInUp
  },
  loginSuccess (state, user) {
    // eslint-disable-next-line no-unused-expressions
    state.isLogin = true,
    state.user = user
  },
  loginFailure (state) {
    // eslint-disable-next-line no-unused-expressions
    state.isLogin = false,
    state.user = {}
  }
}
const actions = {
  login ({dispatch, commit}, {email, password}) {
    accountService.login(email, password)
      .then(
        user => {
          commit('loginSuccess', user)
          router.push('/')
        },
        error => {
          commit('loginFailure', error)
          // dispatch('alert/error', error, { root: true })
        }
      )
  }
}

export default {state, getters, mutations, actions}
