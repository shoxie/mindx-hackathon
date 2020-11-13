<template>
  <div class="relative">
    <div class="absolute">
      <input type="text" placeholder="Enter to chat" />
      <button
        class="text-xl rounded-full px-2 py-1"
        style="background-color: #f1c40f"
      >
        <i class="fad fa-location-arrow"></i>
      </button>
    </div>
  </div>
</template>
<script>
import { StringeeClient, StringeeChat } from "stringee-chat-js-sdk";

var stringeeChat;
var userIds = ["user1", "user2"];
stringeeChat = new StringeeChat(stringeeClient);
stringeeChat.createConversation(
  userIds,
  options,
  (status, code, message, conv) => {
    console.log(
      "status:" +
        status +
        " code:" +
        code +
        "
  }
); message:" +
        message +
        " conv:" +
        JSON.stringify(conv)
    );
var options = {
  name: "Your conversation name",
  isDistinct: false / true,
  isGroup: false,
};

export default {
  name: "Chat",
  data () {
    return{ 
  
    }
  }
};
</script>
