import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allList:[],
    copyList:[]
  },
  mutations: {
    setList(state,payload){
      state.allList=payload
    },
    tab(state,payload){
      state.copyList=state.allList.filter(v=>v.meg===payload.index)
    }
  },
  actions: {
    getList(context){
      axios.get('/list').then((res)=>{
        context.commit('setList',res.data)
      })
    }

  },
  modules: {
  }
})
