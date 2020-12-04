import Vue from 'vue';
import Vuex from 'vuex';
import { Flight } from '../interface/Data/DataInterfaces';
import { getAllFlights } from '../data/DataHandlers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flights: Array<Flight>()
  },
  mutations: {
    addFligts(state, flights: Flight[]) {
      state.flights.push(...flights);
    }
  },
  actions: {
    getFlights(context) {
      const res = getAllFlights();
      console.log(res);
      context.commit('addFligts', res);
    }
  },
  modules: {}
});
