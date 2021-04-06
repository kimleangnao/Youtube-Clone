<template>
  <div class="cv">
    <div class="cv__header">
      <div class="cv__header__left">
        <div class="cv__header__left__text">
          Uploads
          <i class="fas fa-caret-down"></i>
        </div>
        <div class="cv__header__left__playall">
          PLAY ALL
        </div>
      </div>
      <div class="cv__header__right">
        <svg class="cv__header__right__svg">
          <path d="M0 5 L 25 5 L 25 6 L 0 6 Z" class="svg__grey" />
          <path d="M0 10 L 15 10 L 15 11 L 0 11 Z" class="svg__grey" />
          <path d="M0 15 L 5 15 L 5 16 L 0 16 Z" class="svg__grey" />
        </svg>
        <div class="cv__header__right__text">SORT BY</div>
      </div>
    </div>
    <div
      :class="[
        myWidth == 7
          ? 'cv__wrap--7'
          : myWidth == 8
          ? 'cv__wrap--8'
          : myWidth == 9
          ? 'cv__wrap--9'
          : 'cv__wrap'
      ]"
      v-if="user"
    >
      <template v-for="video in user.videos" :key="video.id">
        <PromoteVideo :video="video" :userId="user.id" />
      </template>
    </div>
  </div>
</template>

<script>
import PromoteVideo from "@/components/PromoteVideo.vue";

export default {
  name: "ChannelVideos",
  components: {
    PromoteVideo
  },
  props: {
    myWidth: {
      type: Number,
      required: false
    },
    user: {
      type: Object,
      required: true
    }
  },

  setup() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
.cv {
  width: 100%;
}
.cv__header {
  width: 100%;
  height: 70px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-family: "Roboto", Arial, sans-serif;
}
.cv__header__left {
  width: 200px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.cv__header__left__text {
  width: 50%;
  height: 100%;
  line-height: 70px;
  font-size: 1.2rem;
}
.cv__header__left__text:hover {
  cursor: pointer;
}
.cv__header__left__text .fas {
  line-height: 70px;
  font-size: 1.2rem;
}
.cv__header__left__playall {
  width: 50%;
  height: 100%;
  line-height: 70px;
  font-size: 0.95rem;
  font-weight: 500;
}
.cv__header__left__playall:hover {
  cursor: pointer;
}
.cv__header__right {
  width: 100px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}
.cv__header__right:hover {
  cursor: pointer;
}
.cv__header__right__svg {
  width: 25px;
  height: 25px;
}
.svg__grey {
  fill: rgb(53, 53, 53);
  stroke: rgb(53, 53, 53);
}
.cv__header__right__text {
  width: 70%;
  height: 100%;
  line-height: 70px;
  font-weight: 500;
}

.cv__wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 5px;
}
.cv__wrap--7 {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
}
.cv__wrap--8 {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
}
.cv__wrap--9 {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
}
</style>
