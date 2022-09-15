import { createStore } from 'vuex'
import axios from 'axios';

//Public API
const LOGIN_URL = 'http://localhost:8000/api/login';
const LOGOUT_URL = 'http://localhost:8000/api/logout';

export default createStore({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },

  mutations: {
    auth_request (state) {
      state.status = 'inProgress'
    },
    auth_success (state, token) {
      state.status = 'success'
      state.token = token
      state.user = JSON.parse(localStorage.getItem('user'))
    },
    auth_error (state) {
      state.status = 'failed'
    },
    logout (state) {
      state.status = ''
      state.token = ''
      state.user = {}
    }

  },
  actions: {
    // REGISTER API
    register ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://localhost:8000/users',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            const token = "Bearer " + resp.data.token
            const user = resp.data.user
            
            console.log(user);
            localStorage.setItem('token', token)
            axios.defaults.headers.common['authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },

    // LOGIN API (Fixed 16-09-2022)
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ 
          url: LOGIN_URL, data: user, method: 'POST' })
          .then(resp => {
            const token = "Bearer " + resp.data.token;
            const user = JSON.stringify(resp.data.user);
            console.log(user);
            localStorage.setItem('token', token)
            localStorage.setItem('user', user)
            axios.defaults.headers.common['authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },

    // LOGOUT API (Fixed 16-09-2022)
    logout ({ commit }) {
      return new Promise((resolve) => { 
        axios({url: LOGOUT_URL, method: 'POST', headers: {authorization: localStorage.getItem('token')}});
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['authorization']
        resolve()
      })
    }
  },
  modules: {
  }
})
