<template> </template>

<script>
var stringeeClient;
export default {
  name: "video",
  data() {
    return {
      accessToken:
        "eyJjdHkiOiJzdHJpbmdlZS1hcGk7dj0xIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJTS3pFVXdZa0tRamdDQjV3NlJzOXdhVHJ0MllKUXlVOC0xNjA1MjgzMjE2IiwiaXNzIjoiU0t6RVV3WWtLUWpnQ0I1dzZSczl3YVRydDJZSlF5VTgiLCJleHAiOjE2MDc4NzUyMTYsInJlc3RfYXBpIjp0cnVlfQ.shR4p9dcbiX7GyGrK0I7JUzUuCzuy3fPJzoEECQdLfg",
    };
  },
  methods: {
    login() {
      stringeeClient = new StringeeClient();

      settingClientEvents(stringeeClient);

      stringeeClient.connect(accessToken);
    },
    clientEvent(client) {
      client.on("connect", function() {
        console.log("client connected to stringgee");
      });
      client.on("authen", function(res) {
        console.log("authen", res);
      });
      client.on("disconnect", function() {
        console.log("clinet disconnected from stringee");
      });
    },
  },
};
</script>
