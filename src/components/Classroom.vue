<template>
  <div
    class="w-full h-full bg-green-600 flex flex-col items-center justify-center gap-5"
  >
    <div class="flex flex-row gap-10">
      <button
        class="button is-primary bg-blue-600 p-5 rounded-full"
        v-if="!room"
        @click="createRoom"
      >
        Tạo Meeting
      </button>

      <button
        class="button is-info bg-gray-600 p-5 rounded-full"
        v-if="!room"
        @click="joinWithId"
      >
        Join Meeting
      </button>

      <button class="button is-info" v-if="room" @click="publish(true)">
        Share Desktop
      </button>
    </div>
    <div id="videos"></div>
    <div v-if="roomId" class="info flex flex-col items-center">
      <p>
        Bạn đang ở trong room <strong>{{ roomId }}</strong
        >.
      </p>
      <p>
        Gửi link này cho bạn bè cùng join room nhé
        <a v-bind:href="roomUrl" target="_blank">{{ roomUrl }}</a
        >.
      </p>
      <p>
        Hoặc bạn cũng có thể copy <code>{{ roomId }}</code> để share.
      </p>
    </div>
  </div>
</template>

<script>
import api from "../../public/js/api.js";
import $ from "jquery";
import { StringeeClient } from "stringee-chat-js-sdk";
// const videoContainer = document.getElementById("videos");
export default {
  name: "Classroom",
  data() {
    return {
      userToken: "",
      roomId: "",
      roomToken: "",
      room: undefined,
      callClient: undefined,
    };
  },
  computed: {
    roomUrl: function() {
      return `https://${location.hostname}?room=${this.roomId}`;
    },
  },
  async mounted() {
    api.setRestToken();

    const urlParams = new URLSearchParams(location.search);
    const roomId = urlParams.get("room");
    if (roomId) {
      this.roomId = roomId;

      await this.join();
    }
  },
  methods: {
    authen: async function() {
      return new Promise(async (resolve) => {
        const userId = `${(Math.random() * 100000).toFixed(6)}`;
        const userToken = await api.getUserToken(userId);
        this.userToken = userToken;

        if (!this.callClient) {
          const client = new StringeeClient();

          client.on("authen", function(res) {
            console.log(res);
            resolve(res);
          });
          this.callClient = client;
        }
        this.callClient.connect(userToken);
      });
    },
    publish: async function(screenSharing = false) {
      const localTrack = await window.StringeeVideo.createLocalVideoTrack(
        this.callClient,
        {
          audio: true,
          video: true,
          screen: screenSharing,
          videoDimensions: { width: 640, height: 320 },
        }
      );

      const videoElement = localTrack.attach();
      this.addVideo(videoElement);

      const roomData = await window.StringeeVideo.joinRoom(
        this.callClient,
        this.roomToken
      );
      const room = roomData.room;

      if (!this.room) {
        this.room = room;
        room.clearAllOnMethos();
        room.on("addtrack", (e) => {
          const track = e.info.track;

          console.log("addtrack", track);
          if (track.serverId === localTrack.serverId) {
            return;
          }
          this.subscribe(track);
        });
        room.on("removetrack", (e) => {
          const track = e.track;
          if (!track) {
            return;
          }

          const mediaElements = track.detach();
          mediaElements.forEach((element) => element.remove());
        });

        // Join existing tracks
        roomData.listTracksInfo.forEach((info) => this.subscribe(info));
      }

      await room.publish(localTrack);
    },
    createRoom: async function() {
      const room = await api.createRoom();
      const { roomId } = room;
      const roomToken = await api.getRoomToken(roomId);

      this.roomId = roomId;
      this.roomToken = roomToken;

      await this.authen();
      await this.publish();
    },
    join: async function() {
      const roomToken = await api.getRoomToken(this.roomId);

      this.roomToken = roomToken;

      await this.authen();
      await this.publish();
    },
    joinWithId: async function() {
      const roomId = prompt("Dán Room ID vào đây nhé!");
      if (roomId) {
        this.roomId = roomId;
        await this.join();
      }
    },
    subscribe: async function(trackInfo) {
      const track = await this.room.subscribe(trackInfo.serverId);
      track.on("ready", () => {
        const videoElement = track.attach();
        this.addVideo(videoElement);
      });
    },
    addVideo: function(video) {
      console.log(video);
      console.log("adding video");
      video.setAttribute("controls", "true");
      video.setAttribute("playsinline", "true");
      // video.addClass("rounded-full");
      // videoContainer.appendChild(video);
      $("#videos").append(video);
    },
  },
};
</script>
