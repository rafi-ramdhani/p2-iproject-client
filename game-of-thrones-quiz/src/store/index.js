import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

Vue.use(Vuex)

Vue.use(VueSocketIOExt, socket);

export default new Vuex.Store({
  state: {
    url: "http://localhost:3000",
    loggedIn: false,
    characters: [],
    collections: [],
    user: {},
    quizes: [],
    quiz: false,
    number: 0,
    chats: [],
  },
  mutations: {
    SOCKET_CHAT(state, payload) {
      state.chats = payload
    },

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

    // empty characters state
    COMMIT_EMPTY_CHARACTERS(state) {
      state.characters = []
    },

    // fill collections state
    COMMIT_COLLECTIONS(state, payload) {
      state.collections = payload
    },

    // empty collections state
    COMMIT_EMPTY_COLLECTIONS(state) {
      state.collections = []
    },

    // fill user state
    COMMIT_USER(state, payload) {
      state.user = payload
    },

    // empty user state
    COMMIT_EMPTY_USER(state) {
      state.user = {}
    },

    // fill quizes state
    COMMIT_QUIZES(state, payload) {
      state.quizes = payload
    },

    // empty quizes state
    COMMIT_EMPTY_QUIZES(state) {
      state.quizes = []
    },

    // change quiz state to true
    COMMIT_QUIZ(state) {
      state.quiz = true
    },

    // change quiz state to false
    COMMIT_QUIZ_FALSE(state) {
      state.quiz = false
    },

    // increment number state
    COMMIT_NUMBER(state) {
      state.number++
    },

    // reset number state
    COMMIT_RESET_NUMBER(state) {
      state.number = 0
    },
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
        return err.response.data.message
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
        return err.response.data.message
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
    },

    // Get quizes
    async getQuizes(context, payload) {
      try {
        const response = await axios.get(`${context.state.url}/quizes`, {
          headers: {
            access_token: localStorage.access_token
          },
          params: {
            difficulty: payload
          }
        })

        context.commit("COMMIT_QUIZES", response.data)
      } catch (err) {
        console.log(err.response.data)
      }
    },

    // User earn points
    async earnPoints(context, payload) {
      try {
        await axios.patch(`${context.state.url}/users-earned`, {
          earnedPoints: payload
        }, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        context.dispatch("getUser")
      } catch (err) {
        console.log(err.response.data)
      }
    },

    // Buy character
    async buyCharacter(context, payload) {
      try {
        await axios.post(`${context.state.url}/collections/${payload}`, {}, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        context.dispatch("getUser")
      } catch (err) {
        console.log(err.response.data)
      }
    },

    // Listen Connect
    socket_connect() {
      console.log("connected", this._vm.$socket)
    },

    // Listen Disconnect
    socket_disconnect() {
      console.log("disconnect", this._vm.$socket)
    },

    sendChat(context, payload) {
      this._vm.$socket.client.emit("sendChat", {
        username: context.state.user.username,
        message: payload.trim()
      })
    },
  },
  modules: {
  }
})
