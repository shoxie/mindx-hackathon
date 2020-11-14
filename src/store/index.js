import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: "",
    userid: "",
    users: "",
    courses: "",
    loggedIn: false,
  },
  mutations: {
    SOCKET_REFRESHDATA(state, payload) {
      state.messages = payload;
    },
    SOCKET_USERS(state, payload) {
      state.users = payload;
    },
    SOCKET_RECEIVE(state, payload) {
      state.messages = payload;
    },
    SOCKET_LOGIN(state, payload) {
      state.loggedIn = payload;
    },
    SOCKET_COURSES(state, payload) {
      state.coruses = payload;
    },
  },
  actions: {},
  modules: {},
});
