import axios from 'axios'

const state = {
  count: 0
}

const getters = {
  getCount: state => {
    return state.count
  }
}

const mutations = {
  increament (state) {
    state.count++
  },
  decreament (state) {
    state.count--
  }
}
const actions = {
  asyncDecreament: ({commit}) => {
    setTimeout(() => {
      commit('decreament')
    }, 1000)
  },
  getCategory () {
    const options = {
      method: 'POST',
      // eslint-disable-next-line standard/object-curly-even-spacing
      headers: { 'Ccontent-type': 'application/json', 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user'))},
      url: 'http://localhost/sideprojectlaravel/public/api/category',
      data: {
        isParam: 'this is param'
      }
    }
    return axios(options)
      .then(response => {
        this.posts = response.data
        console.log(this.posts)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }

}

export default {state, getters, mutations, actions}
