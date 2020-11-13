<template>
  <div class="">
    <div
      class="flex flex-col items-center justify-center bg-white p-10 rounded-lg"
    >
      <h1 class="login_hide">
        <span class="login_text text-3xl font-bold">Sign in to continue</span>
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
          type="text"
          placeholder="Password"
          v-model="password"
        />
        <div class="flex flex-row gap-5">
          <button
            class="px-5 py-2 rounded-lg"
            style="background-color: #9b59b6"
          >
            Send
          </button>
          <button class="bg-gray-600 px-5 py-2 rounded-lg" @click="resetInput">
            Do over
          </button>
        </div>
        <div></div>
      </div>
    </div>
    <!-- <div class="bg-purple-600 h-screen flex ">
    <div class="bg-white mt-16  items-center rounded-3xl flex-col p-16 ml-64" >
     
        <form action="" method="POST" class="flex-col flex items-center h-full">
          <h1 class="uppercase text-center font-extrabold text-3xl "> Sign in to bla bla</h1>
          <div class="uppercase text-center font-bold mt-8 text-lg">Username</div> <br>
          <input name="username" placeholder=" hihi " id="username" type="text" class="font-normal border-b w-5/6 h-12 hover:border-b"><br>
          <label  class="text-lg text-center font-bold uppercase">password</label> <br>
          <input name="password" id="password" placeholder="haha" type="text" class="font-normal focus:font-bold border-b w-5/6 h-12"><br>
          <button class="bg-pink-500 w-64  rounded-2xl mt-8 text-lg font-semibold text-gray-600 " style="height: 50px;"> LOGIN </button>
          <label for="" class="text-xl font-semibold">Do you have an account? </label>
          <a href="" class=" hover:text-blue-600 text-lg">Sign Up</a>
      </form>
    </div>
  </div> -->
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
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
