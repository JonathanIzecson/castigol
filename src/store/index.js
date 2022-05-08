import { createStore } from 'vuex';
import router from '../router';

import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000'; 

export default createStore({
  state: {
    user: {},
    auth: false,
  },
  mutations: {
    SET_USER(state, user){
      state.user = user;
      state.auth = Boolean(user);
    }
  },
  actions: {
    async login({dispatch}, credentials){
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/login', credentials);
      dispatch('getUser');
      return router.push('/');
    },
    async logout({dispatch}){
        await axios.post('/logout');
        dispatch('getUser')
        return router.push('/login');
    },
    async getUser({commit}){
      await axios
        .get('/api/user')
        .then(({data}) => {
            commit('SET_USER', data);
        })
        .catch(resp => {
          commit('SET_USER', null);
        });
    }
  },
  modules: {
  }
})
