import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from '@/router';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    defaultColor: null,
    defaultWheels: null,
    position: -1,
    carAngle: 1,
    step: 0,
  },
  mutations: {
    addData(state, payload) {
      state.data = payload;
      // Get the array position of selected car and default options.
      for (let position = 0; position < payload.length; position++) {
        if (payload[position].model === router.currentRoute.params.name) {
          state.position = position;
          state.defaultColor = payload[position].exterior.colors.solid[0].number;
          state.defaultWheels = payload[position].exterior.wheels[0].number;
        }
      }
    },
    changePosition(state, payload) {
      state.position = payload;
    },
    previousAngle(state) {
      if (state.carAngle > 1) {
        state.carAngle--;
      }
    },
    nextAngle(state) {
      if (state.carAngle < 7) {
        state.carAngle++;
      }
    },
    changeStep(state, payload) {
      state.step = payload;
    },
    changeColor(state, payload) {
      state.defaultColor = payload;
    },
    changeWheels(state, payload) {
      state.defaultWheels = payload;
    },
  },
  actions: {
    getData(state) {
      Vue.axios.get('http://localhost:8080/json/data.json').then((response) => {
        state.commit('addData', response.data);
      });
    },
  },
  modules: {},
});
