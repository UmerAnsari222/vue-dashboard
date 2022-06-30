import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state: {
    status: false,
  },
  getters: {
    modelOpen(state) {
      return state.status;
    },
  },
  mutations: {
    changeStatus(state, payload) {
      state.status = payload;
    },
  },
});

export default store;
