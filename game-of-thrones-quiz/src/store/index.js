import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: "http://localhost:3000",
    loggedIn: false,
    characters: [],
    collections: [],
    user: {}
  },
  mutations: {
    // login
    COMMIT_LOGIN(state) {
      state.loggedIn = true
    },

    // logout
    COMMIT_LOGOUT(state) {
      state.loggedIn = false
    },

    // fill characters state
    COMMIT_CHARACTERS(state, payload) {
      state.characters = payload
    },

    // fill collections state
    COMMIT_COLLECTIONS(state, payload) {
      state.collections = payload
    },

    // fill user state
    COMMIT_USER(state, payload) {
      state.user = payload
    }
  },
  actions: {
    // Login
    async login(context, payload) {
      try {
        const response = await axios.post(`${context.state.url}/login`, {
          username: payload.username,
          password: payload.password
        })

        localStorage.access_token = response.data.access_token
        context.commit("COMMIT_LOGIN")
      } catch (err) {
        console.log(err.response.data)
      }
    },

    // Register
    async register(context, payload) {
      try {
        const response = await axios.post(`${context.state.url}/register`, {
          username: payload.username,
          email: payload.email,
          password: payload.password
        })

        console.log(`Username with email ${response.data.email} has registered`)
      } catch (err) {
        console.log(err.response.data)
      }
    },

    // Get Characters
    async getCharacters(context) {
      try {
        const response = await axios.get(`${context.state.url}/characters`, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        context.commit("COMMIT_CHARACTERS", response.data)
      } catch (err) {
        console.log(err.response.data)
      }
    },

    // Get Collections
    async getCollections(context) {
      try {
        const response = await axios.get(`${context.state.url}/collections`, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        context.commit("COMMIT_COLLECTIONS", response.data)
      } catch (err) {
        console.log(err.response.data)
      }
    },

    // Get User
    async getUser(context) {
      try {
        const response = await axios.get(`${context.state.url}/users`, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        context.commit("COMMIT_USER", response.data)
      } catch (err) {
        console.log(err.response.data)
      }
    }
  },
  modules: {
  }
})
