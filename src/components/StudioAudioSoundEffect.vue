<template>
  <div class="studioAudioSoundEffect">
    <div class="studioAudioSoundEffect__head">
      <div class="studioAudioSoundEffect__head__title">
        <div class="studioAudioSoundEffect__head__title__text">
          Sound effect
        </div>
      </div>
      <div class="studioAudioSoundEffect__head__duration">
        <div class="studioAudioSoundEffect__head__duration__text">Duration</div>
      </div>
      <div class="studioAudioSoundEffect__head__category">
        <div class="studioAudioSoundEffect__head__category__text">Categroy</div>
      </div>
      <div class="studioAudioSoundEffect__head__added" @click="switchAddedSort">
        <div class="studioAudioSoundEffect__head__added__text">
          Added
          <i v-if="addedSort == 'down'" class="fas fa-long-arrow-alt-down"> </i>
          <i v-else-if="addedSort == 'up'" class="fas fa-long-arrow-alt-up"></i>
        </div>
      </div>
    </div>
    <div class="studioAudioSoundEffect__component">
      <StudioAudioSoundEffectLists />
    </div>
  </div>
</template>

<script>
import StudioAudioSoundEffectLists from "@/components/StudioAudioSoundEffectLists.vue";
import { reactive, toRefs } from "vue";

export default {
  name: "StudioAudioSoundEffect",
  components: {
    StudioAudioSoundEffectLists
  },
  setup() {
    const state = reactive({
      addedSort: "down"
    });
    const switchAddedSort = () => {
      if (state.addedSort == "down") {
        state.addedSort = "up";
      } else {
        state.addedSort = "down";
      }
    };
    return { ...toRefs(state), switchAddedSort };
  }
};
</script>

<style scoped>
.studioAudioSoundEffect {
  width: 100%;
  height: 100%;
}
.studioAudioSoundEffect__head {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  text-align: left;
  line-height: 40px;
  font-size: 0.8rem;
  font-weight: 500;
  color: grey;
}
.studioAudioSoundEffect__head__title {
  width: 55%;
  height: 100%;
}
.studioAudioSoundEffect__head__title__text {
  text-indent: 70px;
}
.studioAudioSoundEffect__head__duration {
  width: 10%;
  height: 100%;
}
.studioAudioSoundEffect__head__category {
  width: 25%;
  height: 100%;
}
.studioAudioSoundEffect__head__added {
  width: 10%;
  height: 100%;
  font-weight: 500;
}
.studioAudioSoundEffect__head__added:hover {
  cursor: pointer;
}
.studioAudioSoundEffect__head__added__text .fas {
  line-height: 40px;
}
.studioAudioSoundEffect__component {
  width: 100%;
  height: 100%;
}
</style>
