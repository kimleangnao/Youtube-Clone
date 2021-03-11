<template>
  <div class="audioLibrary">
    <div class="audioLibrary__title">Audio library</div>
    <div class="audioLibrary__term">
      <div class="audioLibrary__term__left">
        <div class="audioLibrary__term__left__icon">
          <i class="fas fa-exclamation-circle"></i>
        </div>
        <div class="audioLibrary__term__left__text">
          By using this audio library, you agree with the YouTube Audio Library
          terms and conditions.
        </div>
      </div>
      <div class="audioLibrary__term__right">
        <div class="audioLibrary__term__right__text">LEARN MORE</div>
        <div class="audioLibrary__term__right__text">GOT IT</div>
      </div>
    </div>
    <div class="audioLibrary__head">
      <div
        :class="[
          freeMusic
            ? 'audioLibrary__head__list list--active'
            : 'audioLibrary__head__list'
        ]"
        @click="switchToFreeMusic"
      >
        Free music
      </div>
      <div
        :class="[
          soundEffect
            ? 'audioLibrary__head__list list--active'
            : 'audioLibrary__head__list'
        ]"
        @click="switchToSoundEffect"
      >
        Sound effects
      </div>
      <div
        :class="[
          starred
            ? 'audioLibrary__head__list list--active'
            : 'audioLibrary__head__list'
        ]"
        @click="switchToStarred"
      >
        Starred
      </div>
    </div>
    <div class="audioLibrary__filter" @click="switchOptionMenu">
      <div class="audioLibrary__filter__icon">
        <i class="fas fa-sliders-h"></i>
      </div>
      <input
        type="text"
        class="audioLibrary__filter__text"
        placeholder="Search or filter library"
      />
      <div class="audioLibrary__optionMenu" v-if="optionMenu">
        <div class="audioLibrary__optionMenu__list">Search</div>
        <hr />
        <div class="audioLibrary__optionMenu__list ">Track title</div>
        <div class="audioLibrary__optionMenu__list">Genre</div>
        <div class="audioLibrary__optionMenu__list">Mood</div>
        <div class="audioLibrary__optionMenu__list">Artist name</div>
        <div class="audioLibrary__optionMenu__list">Duration</div>
        <hr />
        <div class="audioLibrary__optionMenu__list">
          Attribution not required
        </div>
        <div class="audioLibrary__optionMenu__list">
          Attribution required
        </div>
      </div>
    </div>
    <div class="audioLibrary__component">
      <StudioAudioFreeMusic v-if="freeMusic" />
      <StudioAudioSoundEffect v-if="soundEffect" />
      <StudioAudioFreeMusicStarred v-if="starred" />
    </div>
  </div>
</template>

<script>
import StudioAudioFreeMusic from "@/components/StudioAudioFreeMusic.vue";
import StudioAudioFreeMusicStarred from "@/components/StudioAudioFreeMusicStarred.vue";
import StudioAudioSoundEffect from "@/components/StudioAudioSoundEffect.vue";

import { reactive, toRefs } from "vue";
export default {
  name: "AudioLibrary",
  components: {
    StudioAudioFreeMusic,
    StudioAudioFreeMusicStarred,
    StudioAudioSoundEffect
  },
  setup() {
    const state = reactive({
      optionMenu: false,
      freeMusic: false,
      soundEffect: true,
      starred: false
    });
    const switchOptionMenu = () => {
      state.optionMenu = !state.optionMenu;
    };

    const switchToFreeMusic = () => {
      state.freeMusic = true;
      state.soundEffect = false;
      state.starred = false;
    };
    const switchToSoundEffect = () => {
      state.freeMusic = false;
      state.soundEffect = true;
      state.starred = false;
    };
    const switchToStarred = () => {
      state.freeMusic = false;
      state.soundEffect = false;
      state.starred = true;
    };

    return {
      ...toRefs(state),
      switchOptionMenu,
      switchToFreeMusic,
      switchToSoundEffect,
      switchToStarred
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.audioLibrary {
  width: 100%;
  height: 100%;
  font-family: Roboto, Arial, sans-serif;
}
.audioLibrary__title {
  width: 100%;
  height: 70px;
  text-align: left;
  text-indent: 25px;
  line-height: 90px;
  font-size: 1.5rem;
  font-weight: 500;
}
.audioLibrary__term {
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: lightgrey;
}
.audioLibrary__term__left {
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
.audioLibrary__term__left__icon .fas {
  margin: 0 20px;
}
.audioLibrary__term__left__text {
  font-size: 0.9rem;
}
.audioLibrary__term__right {
  width: 50%;
  height: 100%;
}
.audioLibrary__term__right {
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
}
.audioLibrary__term__right__text {
  margin: 0 25px;
  font-size: 0.9rem;
  font-weight: 500;
}
.audioLibrary__term__right__text:hover {
  cursor: pointer;
}

.audioLibrary__head {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.audioLibrary__head__list {
  margin: 0 25px;
  line-height: 70px;
  font-size: 0.9rem;
  font-weight: 500;
}
.audioLibrary__head__list:hover {
  color: dodgerblue;
  border-bottom: 3px solid dodgerblue;
  cursor: pointer;
}
.list--active {
  color: dodgerblue;
  border-bottom: 3px solid dodgerblue;
}

.audioLibrary__filter {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: relative;
}
.audioLibrary__filter:hover {
  cursor: pointer;
}
.audioLibrary__filter__icon .fas {
  margin: 0 25px;
}
.audioLibrary__filter__text {
  width: 50%;
  height: 50%;
  border: unset;
}
.audioLibrary__filter__text:focus {
  outline: unset;
}
.audioLibrary__optionMenu {
  width: 215px;
  position: absolute;
  background-color: white;
  box-shadow: 0 0 5px grey;
  left: 70px;
  top: 50px;
}
.audioLibrary__optionMenu__list {
  text-align: left;
  text-indent: 20px;
  padding: 5px 0;
}
.audioLibrary__optionMenu__list:hover {
  background-color: lightgrey;
  cursor: pointer;
}
.audioLibrary__component {
  width: 100%;
  height: 100%;
}
</style>
