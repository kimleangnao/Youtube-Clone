<template>
  <div class="studioCustomization">
    <div class="studioCustomization__title">Channel customization</div>
    <div class="studioCustomization__head">
      <div class="studioCustomization__head__wrapLeft">
        <div
          :class="[
            layout
              ? 'studioCustomization__head__wrapLeft__list head--active'
              : 'studioCustomization__head__wrapLeft__list '
          ]"
          @click="switchToLayout"
        >
          Layout
        </div>
        <div
          :class="[
            branding
              ? 'studioCustomization__head__wrapLeft__list head--active'
              : 'studioCustomization__head__wrapLeft__list '
          ]"
          @click="switchToBranding"
        >
          Branding
        </div>
        <div
          :class="[
            basicInfo
              ? 'studioCustomization__head__wrapLeft__list head--active'
              : 'studioCustomization__head__wrapLeft__list '
          ]"
          @click="switchToBasicInfo"
        >
          Basic info
        </div>
      </div>
      <div class="studioCustomization__head__wrapRight">
        <div class="studioCustomization__head__wrapRight__right">
          VIEW CHANNEL
        </div>
        <div
          class="studioCustomization__head__wrapRight__right studioCustomization__head__wrapRight__right--cancel"
        >
          CANCEL
        </div>
        <div
          class="studioCustomization__head__wrapRight__right studioCustomization__head__wrapRight__right--publish"
        >
          PUBLISH
        </div>
      </div>
    </div>
    <div class="studioCustomization__component">
      <StudioCustomizationLayout v-if="layout" />
      <StudioCustomizationBranding v-if="branding" />
      <StudioCustomizationBasic v-if="basicInfo" />
    </div>
  </div>
</template>

<script>
import StudioCustomizationLayout from "@/components/StudioCustomizationLayout.vue";
import StudioCustomizationBranding from "@/components/StudioCustomizationBranding.vue";
import StudioCustomizationBasic from "@/components/StudioCustomizationBasic.vue";

import { reactive, toRefs } from "vue";

export default {
  name: "StudioCustomization",
  components: {
    StudioCustomizationLayout,
    StudioCustomizationBranding,
    StudioCustomizationBasic
  },
  setup() {
    const state = reactive({
      layout: true,
      branding: false,
      basicInfo: false
    });

    const switchToLayout = () => {
      state.layout = true;
      state.branding = false;
      state.basicInfo = false;
    };

    const switchToBranding = () => {
      state.layout = false;
      state.branding = true;
      state.basicInfo = false;
    };

    const switchToBasicInfo = () => {
      state.layout = false;
      state.branding = false;
      state.basicInfo = true;
    };

    return {
      ...toRefs(state),
      switchToLayout,
      switchToBranding,
      switchToBasicInfo
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioCustomization {
  width: 100%;
  height: 100%;
  font-family: Roboto, Arial, sans-serif;
}
.studioCustomization__title {
  width: 100%;
  height: 70px;
  line-height: 90px;
  font-size: 1.5rem;
  text-align: left;
  text-indent: 25px;
  font-weight: 500;
}
.studioCustomization__head {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.studioCustomization__head__wrapLeft {
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.studioCustomization__head__wrapRight {
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
}
.studioCustomization__head__wrapLeft__list {
  margin: 0 25px;
  font-size: 0.9rem;
  font-weight: 500;
}
.studioCustomization__head__wrapLeft__list:hover {
  cursor: pointer;
  color: dodgerblue;
  border-bottom: 2px solid dodgerblue;
}
.head--active {
  color: dodgerblue;
  border-bottom: 3px solid dodgerblue;
}
.studioCustomization__head__wrapRight__right {
  margin: 0 25px;
  font-size: 0.9rem;
  font-weight: 500;
  color: dodgerblue;
}
.studioCustomization__head__wrapRight__right--cancel {
  color: grey;
}
.studioCustomization__head__wrapRight__right--publish {
  background-color: lightgrey;
  padding: 0 20px;
  height: 70%;
  line-height: 35px;
  border-radius: 2px;
  color: white;
}
</style>
