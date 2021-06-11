import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    sizeNumber: {
      min: 2,
      max: 5,
      value: 0
    },
    timeToShow: {
      value: 0,
      min: 0.2,
      max: 2
    },
    randomNumber: 0,
    userNumber: 0
  },
  getters: {
    getSizeNumber(state) {
      return state.sizeNumber.value;
    },
    getTimeToShow(state) {
      return state.timeToShow.value;
    },
    getUserNumber(state) {
      return state.userNumber;
    },
    getMinSizeNumber(state) {
      return state.sizeNumber.min;
    },
    getRandomNumber(state) {
      return state.randomNumber;
    }
  },
  mutations: {
    setSizeNumber(state, size) {
      state.sizeNumber.value = size
    },
    setTimeToShow(state, sec) {
      state.timeToShow.value = sec;
    },
    setUserNumber(state, number) {
      state.userNumber = number;
    },
    setNumber(state, number) {
      state.randomNumber = number;
    }
  },
  actions: {
    setRandomNumber(context) {
      const min = +( "1" + "0".repeat(context.state.sizeNumber.value - 1));
      const max = +"9".repeat(context.state.sizeNumber.value);
      const number = Math.floor(Math.random() * (max-min) + min);
      context.commit('setNumber', number);
    },
    checkUserNumber(context) {
      if (context.state.userNumber === context.state.randomNumber) {
        context.commit('setUserNumber', 0);
        return true;
      }
      context.commit('setUserNumber', 0)
      return false;
    }
  }
})

export default store;