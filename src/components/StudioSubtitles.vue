<template>
  <div class="studioSubtitles">
    <div class="studioSubtitles__title">Channel subtitles</div>
    <div class="studioSubtitles__head">
      <div
        :class="[
          all
            ? 'studioSubtitles__head__list head--active'
            : 'studioSubtitles__head__list'
        ]"
      >
        All
      </div>
      <div class="studioSubtitles__head__list">Drafts</div>
      <div class="studioSubtitles__head__list">Published</div>
    </div>
    <div class="studioSubtitles__videoHeader">
      <div class="studioSubtitles__videoHeader__video">Video</div>
      <div class="studioSubtitles__videoHeader__languages">Languages</div>
      <div class="studioSubtitles__videoHeader__modified">Modified on</div>
      <div class="studioSubtitles__videoHeader__titleDescription">
        Title & description
      </div>
      <div class="studioSubtitles__videoHeader__subtitles">Subtitles</div>
    </div>
    <div class="studioSubtitles__component">
      <StudioSubtitlesAll v-if="all" />
    </div>
  </div>
</template>

<script>
import StudioSubtitlesAll from "@/components/StudioSubtitlesAll.vue";
import { reactive, toRefs } from "vue";
export default {
  name: "StudioSubtitles",
  components: { StudioSubtitlesAll },
  setup() {
    const state = reactive({
      all: true
    });
    return { ...toRefs(state) };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioSubtitles {
  width: 100%;
  height: 100%;
  font-family: Roboto, Arial, sans-serif;
}
.studioSubtitles__title {
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  width: 100%;
  height: 70px;
  line-height: 90px;
  text-indent: 25px;
}
.studioSubtitles__head {
  width: 100%;
  height: 70px;
  line-height: 90px;
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid lightgrey;
}
.studioSubtitles__head__list {
  margin: 0 25px;
  font-size: 0.9rem;
  font-weight: 500;
}
.head--active {
  color: dodgerblue;
  border-bottom: 3px solid dodgerblue;
}
.studioSubtitles__head__list:first-child {
  padding: 0 15px;
}
.studioSubtitles__head__list:hover {
  cursor: pointer;
  border-bottom: 3px solid dodgerblue;
}

.studioSubtitles__videoHeader {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  line-height: 50px;
  text-align: left;
  font-size: 0.85rem;
}
.studioSubtitles__videoHeader__video {
  width: 40%;
  text-indent: 25px;
}
.studioSubtitles__videoHeader__languages {
  width: 10%;
}
.studioSubtitles__videoHeader__modified {
  width: 15%;
}
.studioSubtitles__videoHeader__titleDescription {
  width: 15%;
  text-align: left;
}
.studioSubtitles__videoHeader__subtitles {
  width: 20%;
}

.studioSubtitles__component {
  width: 100%;
  height: 100%;
}
</style>
