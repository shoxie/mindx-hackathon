<template> </template>

<script>
import { CometChat } from "@cometchat-pro/chat";

export default {
  name: "UserVideoBar",
  data() {
    return {};
  },
  created() {
    this.initializeApp();
  },
  methods: {
    initializeApp() {
      var appID = process.env.VUE_APP_COMMETCHAT_APP_ID;
      CometChat.init(appID).then(
        () => {
          console.log("Initialization completed successfully");
        },
        (error) => {
          console.log("Initialization failed with error:", error);
        }
      );
    },
  },
};
</script>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#auth {
  width: 600px;
  margin: 0 auto;
}

#callScreen {
  width: 500px;
  height: 500px;
}

.home {
  width: 600px;
  margin: 0 auto;
}
</style>
