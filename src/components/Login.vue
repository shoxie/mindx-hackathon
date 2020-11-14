<template>
  <div class="flex items-center justify-center min-h-full">
    <div
      class="flex flex-col items-center justify-center bg-white p-10 rounded-lg"
    >
      <h1 class="login_hide">
        <span class="login_text text-3xl font-bold"
          >Enter your name to start chatting</span
        >
      </h1>
      <div class="flex flex-row gap-5 pt-10">
        <input
          class="rounded-lg border-b-2 px-5 py-2"
          placeholder="Enter your name"
          v-model="username"
        />
        <button
          @click="setName"
          class="bg-orange-300 rounded-lg flex flex-row items-center gap-2 px-5 py-2"
        >
          Send<i class="fad fa-location-arrow"></i>
        </button>
      </div>
      <h1 class="login_hide pt-10">
        <span class="login_text text-3xl font-bold">OR you can sign in</span>
      </h1>
      <div class="flex flex-col items-center gap-10 pt-4">
        <input
          class="border-b-2"
          type="text"
          placeholder="Username"
          v-model="username"
        />
        <input
          class="border-b-2"
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <div class="flex flex-row gap-5">
          <button
            @click="login"
            class="px-5 py-2 rounded-lg"
            style="background-color: #9b59b6"
          >
            Send
          </button>
          <button class="bg-gray-600 px-5 py-2 rounded-lg" @click="resetInput">
            Do over
          </button>
        </div>
        <div class="flex flex-row gap-5 items-center w-full">
          <h1 class="login_hide">
            <span class="login_text text-3xl font-bold"
              >OR you can register
            </span>
          </h1>
          <button
            @click="() => $router.push('register')"
            class="bg-orange-300 rounded-lg flex flex-row items-center gap-2 px-5 py-2 font-bold"
          >
            Here
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { mapState } from "vuex";

export default {
  name: "Login",
  computed: { ...mapState(["loggedIn"]) },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  watch: {
    loggedIn(oldVal, newVal) {
      console.log("change");
      if (newVal === true) this.$emit("loginOff");
    },
  },
  methods: {
    setName() {
      this.$socket.emit("setName", this.username);
    },
    resetInput() {
      this.username = "";
      this.password = "";
    },
    login() {
      this.$socket.emit("login", {
        username: this.username,
        password: this.password,
      });
    },
  },
  mounted() {
    gsap.to(".login_text", {
      scrollTrigger: {
        trigger: ".login_text",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: "0%",
      ease: "power1.out",
    });
  },
};
</script>
<style scoped>
.login_hide {
  background: transparent;
  overflow: hidden;
}
.login_hide span {
  display: inline-block;
  transform: translateY(100%);
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
}
</style>
