import Vue from 'vue'
import Vuex from 'vuex'
import rest from '@/store/wpRest'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageContent: [],
    pageLoading: true
  },
  mutations: {
    addContent(state, fetch) {
      state.pageContent = fetch;
    },
    loadingStatus(state, status) {
      state.pageLoading = status;
    }
  },
  actions: {
    async getContentBlock({ commit }) {
      commit('loadingStatus', true);
      // Fetch | Page Data
      try {
        const data = await rest().get('/wp/v2/pages');
        commit('addContent', data.data);
        commit('loadingStatus', false);
      } catch (error) {
        alert(error);
        console.log(error); 
      }
    },
  },
  getters: {
    loadingStatus(state){
      return state.pageLoading;
    }
  }
})
