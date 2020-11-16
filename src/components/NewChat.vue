<template>
  <chat-window
    :currentUserId="currentUserId"
    :rooms="rooms"
    :messages="messages"
    :menuActions="menuActions"
    :showAddRoom="true"
    :theme="'light'"
  />
</template>

<script>
import ChatWindow from "vue-advanced-chat";
import "vue-advanced-chat/dist/vue-advanced-chat.css";

export default {
  components: {
    ChatWindow,
  },
  data() {
    return {
      rooms: [],
      messages: [],
      currentUserId: 1234,
      menuActions: [
        {
          name: "inviteUser",
          title: "Invite User",
        },
        {
          name: "removeUser",
          title: "Remove User",
        },
        {
          name: "deleteRoom",
          title: "Delete Room",
        },
      ],
      messageActions: [
        {
          name: "addMessageToFavorite",
          title: "Add To Favorite",
        },
        {
          name: "shareMessage",
          title: "Share Message",
        },
        {
          name: "replyMessage",
          title: "Reply",
        },
        {
          name: "editMessage",
          title: "Edit Message",
          onlyMe: true,
        },
        {
          name: "deleteMessage",
          title: "Delete Message",
          onlyMe: true,
        },
      ],
    };
  },
};
</script>
