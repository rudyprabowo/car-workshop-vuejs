import { Commit, createStore } from 'vuex'

export default createStore({
  state: {
    authenticated:false,
    token:''
  },
  getters: {
  },
  mutations: {
    SET_AUTH:(state:{authenticated:boolean}, auth:boolean)=>state.authenticated = auth,
    SET_TOKEN:(state:{token:string}, token:string)=>state.token = token,
  },
  actions: {
    setAuth:({commit}:{commit:Commit},auth:boolean)=>commit('SET_AUTH',auth),
    setToken:({commit}:{commit:Commit},token:string)=>commit('SET_TOKEN',token)
  },
  modules: {
  }
})
