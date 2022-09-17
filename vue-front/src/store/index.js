import { createStore } from 'vuex'
import axios from 'axios';
import Cookies from 'js-cookie';

//Public API
const LOGIN_URL = 'http://localhost:8000/api/login';
const LOGOUT_URL = 'http://localhost:8000/api/logout';

export default createStore({
  state: {
    status: '',
    token:  Cookies.getItem('token') || '',
    user: JSON.parse(Cookies.getItem('user')) || {},
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },

  mutations: {
    auth_request (state) {
      state.status = 'inProgress'
    },

    auth_user(state, user) {
      state.user = user
    },
    auth_success (state, token) {
      state.status = 'success'
      state.token = token
      
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
    /*register ({ commit }, user) {
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
            Cookies.remove('token')
            reject(err)
          })
      })
    },*/

    // LOGIN API (Fixed 16-09-2022)
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ 
          url: LOGIN_URL, data: user, method: 'POST' })
          .then(resp => {
            const token = "Bearer " + resp.data.token;
            const user = resp.data.user;
            //Passo un oggetto nel caso in cui mi serva più di un valore da salvare da server
            commit('auth_user', user, Object)
            // Set Secure: true in cookies only when in production mode.
            Cookies.setItem('token', token, { expires: 1 /* Days */, secure: false });
            Cookies.setItem('user', JSON.stringify(user), { expires: 1 /* Days */, secure: false });
            axios.defaults.headers.common['authorization'] = token
            commit('auth_success', token)
            
            //Commit user to state as object
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            Cookies.removeItem('token')
            Cookies.removeItem('user')
            reject(err)
          })
      })
    },

    // LOGOUT API (Fixed 16-09-2022)
    logout ({ commit }) {
      return new Promise((resolve) => { 
        axios({url: LOGOUT_URL, method: 'POST', headers: {authorization: Cookies.getItem('token')}});
        commit('logout')
        Cookies.removeItem('token')
        Cookies.removeItem('user')
        delete axios.defaults.headers.common['authorization']
        resolve()
      })
    }
  },
  modules: {
  }
})
