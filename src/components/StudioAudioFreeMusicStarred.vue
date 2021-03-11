<template>
  <div class="studioAudioFreeMusicStarred">
    <div class="studioAudioFreeMusic__head">
      <div class="studioAudioFreeMusic__head__list">Track title</div>
      <div class="studioAudioFreeMusic__head__list">Genre</div>
      <div class="studioAudioFreeMusic__head__list">Mood</div>
      <div class="studioAudioFreeMusic__head__list">Artist</div>
      <div class="studioAudioFreeMusic__head__list">Duration</div>
      <div class="studioAudioFreeMusic__head__list">License type</div>
      <div class="studioAudioFreeMusic__head__list" @click="switchAddedSort">
        Added
        <i v-if="addedSort == 'down'" class="fas fa-long-arrow-alt-down"> </i>
        <i v-else-if="addedSort == 'up'" class="fas fa-long-arrow-alt-up"></i>
      </div>
    </div>

    <div class="studioAudioFreeMusic__lists">
      <StudioAudioFreeMusicLists :sort="false" />
    </div>
  </div>
</template>

<script>
import StudioAudioFreeMusicLists from "@/components/StudioAudioFreeMusicLists.vue";
export default {
  name: "StudioAudioFreeMusicStarred",
  components: { StudioAudioFreeMusicLists },
  setup() {
    return {};
  }
};
</script>

<style scoped>
.studioAudioFreeMusicStarred {
  width: 100%;
  height: 100%;
}

.studioAudioFreeMusic__head {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  line-height: 40px;
}
.studioAudioFreeMusic__head__list {
  width: 11.2%;
  height: 100%;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 500;
  color: grey;
}

.studioAudioFreeMusic__head__list:first-child {
  width: 32%;
  height: 100%;
  text-align: left;
  text-indent: 142px;
}
.studioAudioFreeMusic__head__list:last-child {
  cursor: pointer;
  font-weight: 500;
}
.studioAudioFreeMusic__head__list .fa-long-arrow-alt-down {
  line-height: 40px;
}
.studioAudioFreeMusic__head__list .fa-long-arrow-alt-up {
  line-height: 40px;
}
.studioAudioFreeMusic__lists {
  width: 100%;
  height: 100%;
}
</style>
