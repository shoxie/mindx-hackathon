import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: "",
    userid: "",
  },
  mutations: {
    SOCKET_REFRESHDATA(state, payload) {
      state.messages = payload;
    },
    SOCKET_USERID(state, payload) {
      state.userid = payload;
    },
  },
  actions: {},
  modules: {},
});
