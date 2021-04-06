<template>
  <div class="video__wrapper">
    <p class="video__h1">{{ title }}</p>
    <div
      :class="[
        viewport == 10
          ? 'video__wrapper__inner'
          : viewport == 9
          ? 'video__wrapper__inner--4'
          : viewport == 8
          ? 'video__wrapper__inner--3'
          : viewport == 7
          ? 'video__wrapper__inner--2'
          : 'video__wrapper__inner'
      ]"
    >
      <template v-for="video in videos" :key="video.id">
        <VideoBox :video="video" />
      </template>
    </div>
  </div>
</template>

<script>
import VideoBox from "@/components/VideoBox.vue";
import { reactive, toRefs } from "vue";
//import imageLogo from "@/assets/profile.png";

export default {
  name: "VideoWrapper",
  props: {
    title: {
      type: String,
      required: true
    },
    viewport: {
      type: Number,
      required: true
    },
    videos: Array
  },
  components: {
    VideoBox
  },
  setup() {
    const state = reactive({});

    return {
      ...toRefs(state)
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.video__wrapper {
  width: 100%;
  margin: 30px auto;
}
.video__wrapper:first-child {
  margin: 80px auto 0;
}
.video__h1 {
  text-align: left;
  margin-left: 10px;
  font-size: 1.5rem;
  font-family: Roboto, Arial, sans-serif;
}
.video__wrapper__inner {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.video__wrapper__inner--4 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.video__wrapper__inner--3 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.video__wrapper__inner--2 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
