/* eslint-disable */
<template>
  <div class="bg-green-600 min-h-screen">
    <div class="grid-stack">
      <div
        class="grid-stack-item"
        data-gs-x="0"
        data-gs-y="0"
        data-gs-width="8"
        data-gs-height="4"
        data-gs-no-move="yes"
      >
        <div class="grid-stack-item-content"><Classroom /></div>
      </div>
      <div
        class="grid-stack-item"
        data-gs-x="8"
        data-gs-y="0"
        data-gs-width="4"
        data-gs-height="4"
        data-gs-no-move="yes"
      >
        <transition name="fade">
          <div class="grid-stack-item-content">
            <CourseSelector v-if="loggedIn" />
            <Login v-if="!loggedIn" @loginpff="loginoff" />
          </div>
        </transition>
      </div>
      <div
        class="grid-stack-item z-0"
        data-gs-x="0"
        data-gs-y="10"
        data-gs-width="12"
        data-gs-height="2"
        data-gs-no-move="yes"
      >
        <div class="grid-stack-item-content">
          <!-- <Chat v-if="loggedIn" />  -->
          <NewChat />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Classroom from "./components/Classroom.vue";
import Login from "./components/Login.vue";
import NewChat from "./components/NewChat.vue";
import CourseSelector from "./components/CourseSelector.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  computed: { ...mapState(["loggedIn"]) },
  data() {
    return {
      register: false,
      chat: false,
    };
  },
  components: { Classroom, NewChat, CourseSelector, Login },
  methods: {
    loginoff() {
      this.login = false;
      this.chat = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
/* eslint-disable */
