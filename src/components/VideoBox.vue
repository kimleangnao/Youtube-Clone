<template>
  <div class="video__box">
    <div class="video__box__thumbnail" @click="goToVideo">
      <img
        :src="video.thumbnail"
        alt="thumbnail"
        class="video__box__thumbnail__image"
      />
      <div class="video__box__thumbnail__timelength">
        {{ video.videoLength }}
      </div>
    </div>
    <div class="video__box__details">
      <VideoDetails :video="video" />
    </div>
  </div>
</template>

<script>
//import { reactive } from "@vue/composition-api";
import VideoDetails from "@/components/VideoDetails.vue";

export default {
  name: "VideoBox",
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  components: {
    VideoDetails
  },
  setup() {
    const goToVideo = () => {
      window.location.href = "/watch";
    };
    return { goToVideo };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.video__box {
  height: 289px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin-bottom: 30px;
}
.video__box:hover {
  cursor: pointer;
}
.video__box__thumbnail {
  width: 100%;
  height: 60%;
  background-color: mediumseagreen;
  position: relative;
}
.video__box__thumbnail__timelength {
  position: absolute;
  background-color: black;
  color: white;
  right: 0.5rem;
  bottom: 0.5rem;
  font-size: 0.9em;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 500;
}
.video__box__thumbnail__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video__box__details {
  width: 100%;
  height: 35%;
}
</style>
