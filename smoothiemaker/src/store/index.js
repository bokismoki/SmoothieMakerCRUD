import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    smoothies: [],
    editableSmoothie: {},
    isLoading: false
  },
  getters: {
    smoothies: state => state.smoothies,
    editableSmoothie: state => state.editableSmoothie,
    isLoading: state => state.isLoading
  },
  mutations: {
    GET_SMOOTHIES: (state, payload) => {
      state.smoothies = payload;
    },
    ADD_SMOOTHIE: (state, payload) => {
      state.smoothies.push(payload);
    },
    DELETE_SMOOTHIE: (state, payload) => {
      state.smoothies.splice(payload, 1);
    },
    SET_EDITABLE_SMOOTHIE: (state, payload) => {
      state.editableSmoothie = payload
    },
    SET_IS_LOADING: (state, payload) => {
      state.isLoading = payload;
    }
  },
  actions: {
    getSmoothies: context => {
      axios.get('http://localhost:3000')
        .then(smoothies => {
          context.commit('GET_SMOOTHIES', smoothies.data);
        }).catch(err => {
          console.error(err);
        });
    },
    addSmoothie: (context, payload) => {
      axios.post('http://localhost:3000/addSmoothie', payload, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(newSmoothie => {
        context.commit('ADD_SMOOTHIE', newSmoothie.data);
      }).catch(err => {
        console.error(err);
      });
    },
    deleteSmoothie: (context, payload) => {
      axios.delete('http://localhost:3000/deleteSmoothie/?id=' + payload.id)
        .then(() => {
          context.commit('DELETE_SMOOTHIE', payload.index);
        }).catch(err => {
          console.error(err);
        });
    },
    getSmoothieById: (context, payload) => {
      context.dispatch('setIsLoading', true);
      axios.get('http://localhost:3000/editSmoothie/?id=' + payload)
        .then(smoothie => {
          context.commit('SET_EDITABLE_SMOOTHIE', smoothie.data);
        }).catch(err => {
          console.error(err);
        });
    },
    updateSmoothie: (context, payload) => {
      context.dispatch('setIsLoading', true);
      axios.put('http://localhost:3000/updateSmoothie/?id=' + payload.id, payload.smoothie, {
        headers: {
          'content-type': 'application/json'
        }
      }).catch(err => {
          console.error(err);
        });
    },
    setIsLoading: (context, payload) => {
      context.commit('SET_IS_LOADING', payload);
    }
  }
})
