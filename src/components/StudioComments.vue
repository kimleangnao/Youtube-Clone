<template>
  <div class="studioComments">
    <div class="studioComments__title">Channel comments</div>
    <div class="studioComments__head">
      <div
        :class="[
          published
            ? 'studioComments__head__list head--active'
            : 'studioComments__head__list'
        ]"
        @click="switchToPublished"
      >
        Published
      </div>
      <div
        :class="[
          heldReview
            ? 'studioComments__head__list head--active'
            : 'studioComments__head__list'
        ]"
        @click="switchToHeldReivew"
      >
        Held for review
      </div>
    </div>
    <div v-if="warning" class="studioComments__warning">
      <div class="studioComments__warning__left">
        <div class="studioComments__warning__icon">
          <i class="fas fa-exclamation-circle"></i>
        </div>
        <div class="studioComments__warning__text">
          Comments here are removed after 60 days
        </div>
      </div>
      <div class="studioComments__warning__more">LEARN MORE</div>
    </div>
    <div class="studioComments__filter" @click="swtchFilterOptions">
      <div class="studioComments__filter__icon">
        <i class="fas fa-sliders-h"></i>
      </div>
      <input
        type="text"
        class="studioComments__filter__input"
        placeholder="Filter"
      />
      <div v-if="filterOptions" class="studioComments__filter__option">
        <div class="studioComments__filter__option__list">Search</div>
        <div class="studioComments__filter__option__list">
          Contains questions
        </div>
        <hr />
        <div class="studioComments__filter__option__list">
          Public subscribers
        </div>
        <div class="studioComments__filter__option__list">
          Channel member status
        </div>
        <div class="studioComments__filter__option__list">Subscriber count</div>
        <hr />
        <div class="studioComments__filter__option__list">Response status</div>
        <hr />
        <div class="studioComments__filter__option__list">
          Set no filters as default
        </div>
      </div>
    </div>
    <div class="studioComments__component">
      <StudioCommentsPublished v-if="published" />
      <StudioCommentsHeldForReview v-if="heldReview" />
    </div>
  </div>
</template>

<script>
import StudioCommentsPublished from "@/components/StudioCommentsPublished.vue";
import StudioCommentsHeldForReview from "@/components/StudioCommentsHeldForReview.vue";

import { toRefs, reactive } from "vue";
export default {
  name: "StudioComments",
  components: { StudioCommentsPublished, StudioCommentsHeldForReview },
  setup() {
    const state = reactive({
      warning: false,
      filterOptions: false,
      published: true,
      heldReview: false
    });
    const swtchFilterOptions = () => {
      state.filterOptions = !state.filterOptions;
    };
    const switchToPublished = () => {
      state.published = true;
      state.heldReview = false;
      state.warning = false;
    };
    const switchToHeldReivew = () => {
      state.published = false;
      state.heldReview = true;
      state.warning = true;
    };
    return {
      ...toRefs(state),
      swtchFilterOptions,
      switchToPublished,
      switchToHeldReivew
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioComments {
  width: 100%;
  height: 100%;
  font-family: Roboto, Arial, sans-serif;
}
.studioComments__title {
  width: 100%;
  height: 70px;
  text-align: left;
  line-height: 90px;
  text-indent: 25px;
  font-size: 1.5rem;
  font-weight: 500;
}
.studioComments__head {
  width: 100%;
  height: 70px;
  display: flex;
  line-height: 90px;
  border-bottom: 1px solid lightgrey;
}
.studioComments__head__list {
  margin: 0 25px;
  font-size: 0.9rem;
  font-weight: 500;
}
.head--active {
  color: dodgerblue;
  border-bottom: 3px solid dodgerblue;
}
.studioComments__head__list:hover {
  cursor: pointer;
  border-bottom: 3px solid dodgerblue;
}
.studioComments__warning {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  background-color: rgb(212, 212, 212);
}
.studioComments__warning__left {
  width: 50%;
  display: flex;
  flex-flow: row nowrap;
}
.studioComments__warning__icon .fas {
  line-height: 50px;
  margin-left: 15px;
}
.studioComments__warning__text {
  line-height: 50px;
  font-size: 0.9rem;
  margin-left: 25px;
}
.studioComments__warning__more {
  line-height: 50px;
  margin-right: 25px;
  font-size: 0.9rem;
  font-weight: 500;
}
.studioComments__warning__more:hover {
  cursor: pointer;
}
.studioComments__filter {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: relative;
}
.studioComments__filter__icon {
  margin: 0 25px;
}
.studioComments__filter__icon:hover {
  cursor: pointer;
}
.studioComments__filter__icon .fas {
  line-height: 50px;
}
.studioComments__filter__input {
  width: 50%;
  height: 50%;
  border: unset;
}
.studioComments__filter__input:focus {
  outline: unset;
}
.studioComments__filter__option {
  position: absolute;
  width: 210px;
  background-color: white;
  box-shadow: 0 0 5px grey;
  top: 52px;
  left: 70px;
}
.studioComments__filter__option__list {
  width: 100%;
  height: 40px;
  text-align: left;
  line-height: 40px;
  text-indent: 20px;
}
.studioComments__filter__option__list:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.studioComments__component {
  width: 100%;
}
</style>
