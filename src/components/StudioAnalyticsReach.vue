<template>
  <div class="studioAnalyticsReach">
    <div class="studioAnalyticsReach__graph">
      <div class="studioAnalyticsReach__graph__head">
        <div
          @click="switchToImpression"
          :class="[
            impression
              ? 'studioAnalyticsReach__graph__head__list head--active'
              : 'studioAnalyticsReach__graph__head__list'
          ]"
        >
          <div class="studioAnalyticsReach__graph__head__text">Impressions</div>
          <div class="studioAnalyticsReach__graph__head__amount">
            X
          </div>
        </div>
        <div
          @click="switchToClickThrough"
          :class="[
            clickThrough
              ? 'studioAnalyticsReach__graph__head__list head--active border'
              : 'studioAnalyticsReach__graph__head__list border'
          ]"
        >
          <div class="studioAnalyticsReach__graph__head__text">
            Impressions click-through rate
          </div>
          <div class="studioAnalyticsReach__graph__head__amount">
            X
          </div>
        </div>
        <div
          @click="switchToViews"
          :class="[
            views
              ? 'studioAnalyticsReach__graph__head__list head--active border--right'
              : 'studioAnalyticsReach__graph__head__list border--right'
          ]"
        >
          <div class="studioAnalyticsReach__graph__head__text">Views</div>
          <div class="studioAnalyticsReach__graph__head__amount">
            X
          </div>
        </div>
        <div
          @click="switchToUniqueViewers"
          :class="[
            uniqueViewers
              ? 'studioAnalyticsReach__graph__head__list head--active'
              : 'studioAnalyticsReach__graph__head__list'
          ]"
        >
          <div class="studioAnalyticsReach__graph__head__text">
            Unique viewers
          </div>
          <div class="studioAnalyticsReach__graph__head__amount">
            X
          </div>
        </div>
      </div>
      <div class="studioAnalyticsReach__graph__details"></div>
      <div class="studioAnalyticsReach__graph__more">SEE MORE</div>
    </div>
    <div class="studioAnalyticsReach__traffic">
      <div class="studioAnalyticsReach__traffic__source">
        <div class="studioAnalyticsReach__traffic__x__title">
          Traffic source types
        </div>
        <div class="studioAnalyticsReach__traffic__x__subText">
          Views &bullet; Last 7 days
        </div>
        <div class="studioAnalyticsReach__traffic__x__details">
          Not enough traffic data to show this report
        </div>
        <div class="studioAnalyticsReach__traffic__x__more">
          SEE MORE
        </div>
      </div>
      <div class="studioAnalyticsReach__traffic__impression">
        <div class="studioAnalyticsReach__traffic__x__title">
          Impressions and how they led to watch time
        </div>
        <div class="studioAnalyticsReach__traffic__x__subText">
          Data available Feb 26 - Mar 4, 2021 (7 days)
        </div>
        <div class="studioAnalyticsReach__traffic__x__details">
          Not enough impressions data to show this report
        </div>
      </div>
      <div class="studioAnalyticsReach__traffic__sourceExternal">
        <div class="studioAnalyticsReach__traffic__x__title">
          Traffic source: External
        </div>
        <div class="studioAnalyticsReach__traffic__x__subText">
          Views &bullet; Last 7 days
        </div>
        <div class="studioAnalyticsReach__traffic__x__details">
          Not enough traffic data to show this report
        </div>
        <div class="studioAnalyticsReach__traffic__x__more">
          SEE MORE
        </div>
      </div>
      <div class="studioAnalyticsReach__traffic__playlist">
        <div class="studioAnalyticsReach__traffic__x__title">
          Traffic source: Playlists
        </div>
        <div class="studioAnalyticsReach__traffic__x__subText">
          Views &bullet; Last 7 days
        </div>
        <div class="studioAnalyticsReach__traffic__x__details">
          Not enough traffic data to show this report
        </div>
        <div class="studioAnalyticsReach__traffic__x__more">
          SEE MORE
        </div>
      </div>
      <div class="studioAnalyticsReach__traffic__sourceSuggestion">
        <div class="studioAnalyticsReach__traffic__x__title">
          Traffic source: Suggested videos
        </div>
        <div class="studioAnalyticsReach__traffic__x__subText">
          Views &bullet; Last 7 days
        </div>
        <div class="studioAnalyticsReach__traffic__x__details">
          Not enough traffic data to show this report
        </div>
        <div class="studioAnalyticsReach__traffic__x__more">
          SEE MORE
        </div>
      </div>
      <div class="studioAnalyticsReach__traffic__youtubeSearch">
        <div class="studioAnalyticsReach__traffic__x__title">
          Traffic source: YouTube search
        </div>
        <div class="studioAnalyticsReach__traffic__x__subText">
          Views &bullet; Last 7 days
        </div>
        <div class="studioAnalyticsReach__traffic__x__details">
          Not enough traffic data to show this report
        </div>
        <div class="studioAnalyticsReach__traffic__x__more">
          SEE MORE
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "StudioAnalyticsReach",
  setup() {
    const state = reactive({
      impression: true,
      clickThrough: false,
      views: false,
      uniqueViewers: false
    });

    const switchToImpression = () => {
      state.impression = true;
      state.clickThrough = false;
      state.views = false;
      state.uniqueViewers = false;
    };
    const switchToClickThrough = () => {
      state.impression = false;
      state.clickThrough = true;
      state.views = false;
      state.uniqueViewers = false;
    };
    const switchToViews = () => {
      state.impression = false;
      state.clickThrough = false;
      state.views = true;
      state.uniqueViewers = false;
    };
    const switchToUniqueViewers = () => {
      state.impression = false;
      state.clickThrough = false;
      state.views = false;
      state.uniqueViewers = true;
    };

    return {
      ...toRefs(state),
      switchToImpression,
      switchToClickThrough,
      switchToViews,
      switchToUniqueViewers
    };
  }
};
</script>

<style scoped>
.studioAnalyticsReach {
  width: 100%;
  height: 100%;
}
.studioAnalyticsReach__graph {
  width: 1254px;
  height: 400px;
  border: 1px solid lightgrey;
  margin-left: 25px;
  margin-top: 30px;
  border-radius: 5px;
}
.studioAnalyticsReach__graph__head {
  width: 100%;
  height: 130px;
  display: flex;
  flex-flow: row nowrap;
  background-color: rgb(240, 240, 240);
}
.studioAnalyticsReach__graph__head__list {
  width: 25%;
  height: 130px;
  text-align: center;
}
.studioAnalyticsReach__graph__head__list:hover {
  cursor: pointer;
}
.head--active {
  background-color: white;
}
.studioAnalyticsReach__graph__head__text {
  margin-top: 30px;
  font-size: 0.9rem;
  font-weight: 500;
}

.studioAnalyticsReach__graph__head__amount {
  margin-top: 10px;
  font-size: 0.9rem;
  font-weight: 500;
}

.border {
  border-right: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
}
.border--right {
  border-right: 1px solid lightgrey;
}

.studioAnalyticsReach__graph__details {
  width: 95%;
  height: 180px;
  margin: 25px auto;
}

.studioAnalyticsReach__graph__more {
  text-align: left;
  margin-left: 25px;
  font-size: 0.9rem;
  color: dodgerblue;
  font-weight: 500;
}
.studioAnalyticsReach__graph__more:hover {
  cursor: pointer;
}

.studioAnalyticsReach__traffic {
  width: 1256px;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-left: 25px;
  margin-top: 30px;
  padding-bottom: 40px;
}
.studioAnalyticsReach__traffic__source {
  width: 48%;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
}
.studioAnalyticsReach__traffic__x__title {
  text-align: left;
  margin-left: 25px;
  margin-top: 25px;
  font-size: 1.2rem;
  font-weight: 500;
}
.studioAnalyticsReach__traffic__x__subText {
  text-align: left;
  margin-left: 25px;
  margin-top: 2px;
  font-size: 0.8rem;
  color: grey;
}
.studioAnalyticsReach__traffic__x__details {
  text-align: left;
  margin-left: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 1rem;
}
.studioAnalyticsReach__traffic__x__more {
  text-align: left;
  margin-left: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 0.9rem;
  color: dodgerblue;
  font-weight: 500;
}
.studioAnalyticsReach__traffic__x__more:hover {
  cursor: pointer;
}

.studioAnalyticsReach__traffic__impression {
  width: 48%;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
}
.studioAnalyticsReach__traffic__sourceExternal {
  width: 48%;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-top: 30px;
}
.studioAnalyticsReach__traffic__playlist {
  width: 48%;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-top: -20px;
}
.studioAnalyticsReach__traffic__sourceSuggestion {
  width: 48%;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-top: 30px;
}
.studioAnalyticsReach__traffic__youtubeSearch {
  width: 48%;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-top: -20px;
}
</style>
