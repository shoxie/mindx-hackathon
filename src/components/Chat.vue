<template>
  <div class="relative h-full">
    <div v-for="(message, index) in messages" :key="index">
      <span v-bind:class="classObject">{{ message.message }}</span>
    </div>
    <div class="absolute bottom-0 w-full">
      <input
        class="w-10/12 rounded-lg pl-5"
        type="text"
        placeholder="Enter to chat"
        v-model="msg"
      />
      <button
        class="text-xl rounded-full px-2 py-1"
        style="background-color: #f1c40f"
        @click="send"
      >
        <i class="fad fa-location-arrow"></i>
      </button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Chat",
  computed: { ...mapState(["messages", "userid"]) },
  data() {
    return {
      msg: "",
      classObject: {
        float: null,
      },
    };
  },
  mounted() {},
  methods: {
    send() {
      console.log(this.$socket.id === this.userid);
      if (this.$socket.id === this.userid)
        this.$socket.emit("receiveMessage", {
          msg: this.msg,
          direction: "right",
        });
      else
        this.$socket.emit("receiveMessage", {
          msg: this.msg,
          direction: "left",
        });
    },
    check_direction(direction) {},
  },
};
</script>
