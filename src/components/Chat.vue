<template>
  <div>
    <div v-for="(message, index) in messages" :key="index">
      <span class="w-full">{{ message.message }}</span>
    </div>
    <div class="min-h-full flex items-end justify-center">
      <div class="absolute bottom-0 flex flex=row gap-2 w-full">
        <input
          class="rounded-lg px-5 py-2 w-full"
          type="text"
          placeholder="Text to message"
          v-model="msg"
        />
        <button
          class="bg-orange-300 rounded-lg flex flex-row items-center gap-2 px-5 py-2"
          @click="send"
        >
          Send<i class="fad fa-location-arrow"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Chat",
  data() {
    return {
      msg: "",
    };
  },
  computed: { ...mapState(["messages"]) },
  methods: {
    send() {
      this.$socket.emit("messageSent", this.msg);
    },
  },
};
</script>
