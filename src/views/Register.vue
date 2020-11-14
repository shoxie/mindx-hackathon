<template>
  <div class="">
    <div
      class="flex flex-col items-center justify-center bg-white p-10 rounded-lg"
    >
      <h1 class="login_hide">
        <span class="login_text text-3xl font-bold">Register an account </span>
      </h1>
      <div class="flex flex-col items-center gap-10 pt-4">
        <input
          class="border-b-2"
          type="email"
          placeholder="Email"
          v-model="email"
        />
        <input
          class="border-b-2"
          type="text"
          placeholder="Username"
          v-model="username"
        />
        <input
          class="border-b-2"
          type="text"
          placeholder="Password"
          v-model="password"
        />
        <input
          class="border-b-2"
          type="text"
          placeholder="Re-enter Password"
          v-model="repassword"
        />
        <div class="flex flex-row gap-5">
          <button
            class="px-5 py-2 rounded-lg"
            style="background-color: #9b59b6"
          >
            Sign Up
          </button>
          <button class="bg-gray-600 px-5 py-2 rounded-lg" @click="resetInput">
            Do over
          </button>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      repassword: "",
    };
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
