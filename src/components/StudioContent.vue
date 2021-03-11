<template>
  <div class="studioContent">
    <div class="studioContent__title">
      Channel content
    </div>
    <div class="studioContent__nav">
      <div
        :class="[
          uploads
            ? 'studioContent__nav__list border-bottom'
            : 'studioContent__nav__list'
        ]"
        @click="switchToUploads"
      >
        Uploads
      </div>
      <div
        :class="[
          live
            ? 'studioContent__nav__list border-bottom'
            : 'studioContent__nav__list'
        ]"
        @click="switchToLive"
      >
        Live
      </div>
    </div>
    <div class="studioContent__filter" @click="switchOptionMenu">
      <div class="studioContent__filter__icon">
        <i class="fas fa-sliders-h"></i>
      </div>
      <input
        type="text"
        placeholder="Filters"
        class="studioContent__filter__input"
      />
      <div class="studioContent__filter__options" v-if="optionMenu">
        <div class="studioContent__filter__options__list">Age restriction</div>
        <div class="studioContent__filter__options__list">Copyright claims</div>
        <div class="studioContent__filter__options__list">Description</div>
        <div class="studioContent__filter__options__list">Made for kids</div>
        <div class="studioContent__filter__options__list">Title</div>
        <div class="studioContent__filter__options__list">Views</div>
        <div class="studioContent__filter__options__list">Visibility</div>
      </div>
    </div>
    <div class="studioContent__component">
      <StudioContentUploads v-if="uploads" />
      <StudioContentLive v-if="live" />
    </div>
  </div>
</template>

<script>
import StudioContentUploads from "@/components/StudioContentUploads.vue";
import StudioContentLive from "@/components/StudioContentLive.vue";

import { reactive, toRefs } from "vue";
export default {
  name: "StudioContent",
  components: {
    StudioContentUploads,
    StudioContentLive
  },
  setup() {
    const state = reactive({
      optionMenu: false,
      uploads: false,
      live: true
    });
    const switchOptionMenu = () => {
      state.optionMenu = !state.optionMenu;
    };
    const switchToUploads = () => {
      state.uploads = true;
      state.live = false;
    };
    const switchToLive = () => {
      state.uploads = false;
      state.live = true;
    };
    return {
      ...toRefs(state),
      switchOptionMenu,
      switchToUploads,
      switchToLive
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioContent {
  width: 100%;
  height: 100%;
  font-family: Roboto, Arial, sans-serif;
}
.studioContent__title {
  width: 100%;
  height: 50px;
  line-height: 70px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  text-indent: 25px;
}
.studioContent__nav {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid lightgrey;
  text-align: left;
}

.studioContent__nav__list {
  display: inline-block;
  padding: 40px 10px 12px;
  margin: 0 25px;
  font-weight: 500;
  font-size: 0.85rem;
}
.studioContent__nav__list:first-child {
  padding: 40px 0px 12px;
  margin: 0 25px;
}
.studioContent__nav__list:hover {
  cursor: pointer;
  border-bottom: 3px solid rgb(19, 106, 192);
}
.border-bottom {
  border-bottom: 3px solid rgb(19, 106, 192);
}

.studioContent__filter {
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  position: relative;
}
.studioContent__filter__icon {
  margin: 0 25px;
}
.studioContent__filter__icon:hover {
  cursor: pointer;
}
.studioContent__filter__input {
  width: 50%;
  height: 50%;
  background-color: transparent;
  border: unset;
  font-size: 0.9rem;
}
.studioContent__filter__input:focus {
  outline: unset;
}
.studioContent__filter__options {
  position: absolute;
  width: 150px;
  background-color: rgb(243, 243, 243);
  margin-left: 65px;
  margin-top: 318px;
}
.studioContent__filter__options__list {
  width: 100%;
  padding: 10px 0;
  text-align: left;
  text-indent: 10px;
  font-size: 0.9rem;
}
.studioContent__filter__options__list:hover {
  background-color: lightgrey;
  cursor: pointer;
}

.studioContent__component {
  width: 100%;
  min-height: 500px;
  border-bottom: 1px solid lightgrey;
}
</style>
