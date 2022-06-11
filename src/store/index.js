import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import buku from '@/store/buku'
Vue.use(Vuex)
const createPersistedState = persistedState(
  {
    key:"buku"
  }
)
export default new Vuex.Store({
  plugins:[createPersistedState],
  modules: {
    buku:{
      ...buku,
    }
  }
})
