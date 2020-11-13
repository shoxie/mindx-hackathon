import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: "",
    userid: "",
    users: "",
  },
  mutations: {
    SOCKET_REFRESHDATA(state, payload) {
      state.messages = payload;
    },
    SOCKET_USERS(state, payload) {
      state.users = payload;
    },
  },
  actions: {},
  modules: {},
});
