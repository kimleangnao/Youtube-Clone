<template>
  <div class="studioAnalytics">
    <div class="studioAnalytics__title">
      <div class="studioAnalytics__title__text">Channel analytics</div>
      <div class="studioAnalytics__title__mode" @click="switchToAdvance">
        ADVANCED MODE
      </div>
    </div>
    <div class="studioAnalytics__header">
      <div class="studioAnalytics__header__lists">
        <div
          :class="[
            overview
              ? 'studioAnalytics__header__lists__overview highlight'
              : 'studioAnalytics__header__lists__overview'
          ]"
          @click="switchToOverview"
        >
          Overview
        </div>
        <div
          :class="[
            reach
              ? 'studioAnalytics__header__lists__reach highlight'
              : 'studioAnalytics__header__lists__reach'
          ]"
          @click="switchToReach"
        >
          Reach
        </div>
        <div
          :class="[
            engagement
              ? 'studioAnalytics__header__lists__engagement highlight'
              : 'studioAnalytics__header__lists__engagement'
          ]"
          @click="switchToEngagement"
        >
          Engagement
        </div>
        <div
          :class="[
            audience
              ? 'studioAnalytics__header__lists__audience highlight'
              : 'studioAnalytics__header__lists__audience'
          ]"
          @click="switchToAudience"
        >
          Audience
        </div>
      </div>
      <div class="studioAnalytics__header__date">
        <div class="studioAnalytics__header__date__text">Last 7 days</div>
        <select
          class="studioAnalytics__header__date__select"
          name="date"
          id="date"
        >
          <option value="Last 7 days">Last 7 days</option>
          <option value="Last 28 days">Last 28 days</option>
          <option value="Last 90 days">Last 90 days</option>
          <option value="Last 365 days">Last 365 days</option>
          <option value="Lifetime">Lifetime</option>
        </select>
      </div>
    </div>
    <div class="studioAnalytics__component">
      <StudioAnalyticsOverview v-if="overview" />
      <StudioAnalyticsReach v-if="reach" />
      <StudioAnalyticsEngagement v-if="engagement" />
      <StudioAnalyticsAudience v-if="audience" />
    </div>
  </div>
</template>

<script>
import StudioAnalyticsOverview from "@/components/StudioAnalyticsOverview.vue";
import StudioAnalyticsReach from "@/components/StudioAnalyticsReach.vue";
import StudioAnalyticsEngagement from "@/components/StudioAnalyticsEngagement.vue";
import StudioAnalyticsAudience from "@/components/StudioAnalyticsAudience.vue";

import { reactive, toRefs } from "vue";

export default {
  name: "StudioAnalytics",
  components: {
    StudioAnalyticsOverview,
    StudioAnalyticsReach,
    StudioAnalyticsEngagement,
    StudioAnalyticsAudience
  },
  props: {
    switchToAdvance: {
      type: Function,
      required: true
    }
  },
  setup() {
    const state = reactive({
      overview: false,
      reach: false,
      engagement: false,
      audience: true
    });
    const switchToOverview = () => {
      state.overview = true;
      state.reach = false;
      state.engagement = false;
      state.audience = false;
    };
    const switchToReach = () => {
      state.overview = false;
      state.reach = true;
      state.engagement = false;
      state.audience = false;
    };
    const switchToEngagement = () => {
      state.overview = false;
      state.reach = false;
      state.engagement = true;
      state.audience = false;
    };
    const switchToAudience = () => {
      state.overview = false;
      state.reach = false;
      state.engagement = false;
      state.audience = true;
    };

    return {
      ...toRefs(state),
      switchToOverview,
      switchToReach,
      switchToEngagement,
      switchToAudience
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioAnalytics {
  width: 100%;
  font-family: Roboto, Arial, sans-serif;
}
.studioAnalytics__title {
  width: 1281px;
  height: 70px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.studioAnalytics__title__text {
  margin-left: 25px;
  line-height: 70px;
  font-size: 1.4rem;
}
.studioAnalytics__title__mode {
  margin-right: 25px;
  line-height: 70px;
  color: dodgerblue;
  font-weight: 500;
  font-size: 0.9rem;
}
.studioAnalytics__title__mode:hover {
  cursor: pointer;
}

.studioAnalytics__header {
  width: 1281px;
  height: 70px;
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid lightgrey;
}
.studioAnalytics__header__lists {
  width: 80%;
  display: flex;
  flex-flow: row nowrap;
  color: grey;
  font-size: 0.9rem;
}
.studioAnalytics__header__lists__overview {
  line-height: 90px;
  margin-left: 25px;
  font-weight: 500;
}
.studioAnalytics__header__lists__overview:hover {
  cursor: pointer;
  border-bottom: 2px solid dodgerblue;
}
.studioAnalytics__header__lists__reach {
  line-height: 90px;
  margin-left: 25px;
  font-weight: 500;
}
.studioAnalytics__header__lists__reach:hover {
  cursor: pointer;
  border-bottom: 2px solid dodgerblue;
}
.studioAnalytics__header__lists__engagement {
  line-height: 90px;
  margin-left: 25px;
  font-weight: 500;
}
.studioAnalytics__header__lists__engagement:hover {
  cursor: pointer;
  border-bottom: 2px solid dodgerblue;
}
.studioAnalytics__header__lists__audience {
  line-height: 90px;
  margin-left: 25px;
  font-weight: 500;
}
.studioAnalytics__header__lists__audience:hover {
  cursor: pointer;
  border-bottom: 2px solid dodgerblue;
}
.studioAnalytics__header__date {
  width: 20%;
}
.studioAnalytics__header__date__text {
  text-align: left;
  margin-left: 3px;
  font-size: 0.8rem;
  margin-top: 15px;
}
.studioAnalytics__header__date__select {
  width: 100%;
  height: 30%;
  font-size: 0.9rem;

  border: unset;
  background-color: transparent;
}
.studioAnalytics__header__date__select:focus {
  outline: unset;
}
.highlight {
  color: dodgerblue;
  border-bottom: 2px solid dodgerblue;
}
.studioAnalytics__component {
  width: 1281px;
}
</style>
