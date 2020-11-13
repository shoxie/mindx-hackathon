import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueSocketIO from "vue-socket.io";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "localhost:8679",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");