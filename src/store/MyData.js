import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []

  },
  getters: {
    ledger: (state) => state.data,
  },
  mutations: {
    async fetch(state, {res}){
      state.data = res.data
    },
    add(state, {payload}){
      state.data.push(payload)
    }
  },
  actions: {
    async fetchData ( {commit} ) {
      let res = await Axios.get("data.json")
      commit("fetch", {res})
    },

    addData ({commit}, payload) {
      commit("add", {payload})
    },

    
  },
  modules: {},
})
