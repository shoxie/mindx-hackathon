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
        <div class="grid-stack-item-content"><Chat /></div>
      </div>
      <div
        class="grid-stack-item bg-white"
        data-gs-x="0"
        data-gs-y="10"
        data-gs-width="12"
        data-gs-height="2"
        data-gs-no-move="yes"
      >
        <div class="grid-stack-item-content">my 3rd widget</div>
      </div>
    </div>
  </div>
</template>

<script>
import Classroom from "./components/Classroom.vue";
// import Login from "./components/Login.vue";
import Chat from "./components/Chat.vue";
export default {
  name: "App",
  components: { Classroom, Chat },
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
