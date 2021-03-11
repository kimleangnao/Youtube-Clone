<template>
  <div class="studioAnalyticsEngagement">
    <div class="studioAnalyticsEngagement__graph">
      <div class="studioAnalyticsEngagement__graph__head">
        <div
          @click="switchToWatchTime"
          :class="[
            watchTime
              ? 'studioAnalyticsEngagement__graph__head__list head--active'
              : 'studioAnalyticsEngagement__graph__head__list'
          ]"
        >
          <div class="studioAnalyticsEngagement__graph__head__list__title">
            Watch time (hours)
          </div>
          <div class="studioAnalyticsEngagement__graph__head__list__amount">
            x
          </div>
        </div>
        <div
          @click="switchToAverageViewDuration"
          :class="[
            averageViewDuration
              ? 'studioAnalyticsEngagement__graph__head__list head--active'
              : 'studioAnalyticsEngagement__graph__head__list'
          ]"
        >
          <div class="studioAnalyticsEngagement__graph__head__list__title">
            Average view duration
          </div>
          <div class="studioAnalyticsEngagement__graph__head__list__amount">
            x
          </div>
        </div>
      </div>
      <div class="studioAnalyticsEngagement__graph__detail"></div>
      <div class="studioAnalyticsEngagement__graph__more">SEE MORE</div>
    </div>
    <div class="studioAnalyticsEngagement__more">
      <div class="studioAnalyticsEngagement__more__top">
        <div class="studioAnalyticsEngagement__more__top__title">
          Top Videos
        </div>
        <div class="studioAnalyticsEngagement__more__top__subText">
          Watch time (hours) &bullet; Last 7 days
        </div>
        <div class="studioAnalyticsEngagement__more__top__details">
          Nothing to show for these dates
        </div>
        <div class="studioAnalyticsEngagement__more__top__more">
          SEE MORE
        </div>
      </div>
      <div class="studioAnalyticsEngagement__more__top">
        <div class="studioAnalyticsEngagement__more__top__title">
          Top Videos by end screen
        </div>
        <div class="studioAnalyticsEngagement__more__top__subText">
          End screen element clicks &bullet; Last 7 days
        </div>
        <div class="studioAnalyticsEngagement__more__top__details">
          Nothing to show for these dates
        </div>
        <div class="studioAnalyticsEngagement__more__top__more">
          SEE MORE
        </div>
      </div>
      <div class="studioAnalyticsEngagement__more__top">
        <div class="studioAnalyticsEngagement__more__top__title">
          Top playlists
        </div>
        <div class="studioAnalyticsEngagement__more__top__subText">
          Watch time &bullet; Last 7 days
        </div>
        <div class="studioAnalyticsEngagement__more__top__details">
          Nothing to show for these dates
        </div>
        <div class="studioAnalyticsEngagement__more__top__more">
          SEE MORE
        </div>
      </div>
      <div class="studioAnalyticsEngagement__more__top">
        <div class="studioAnalyticsEngagement__more__top__title">
          Top end screen element types
        </div>
        <div class="studioAnalyticsEngagement__more__top__subText">
          Clicks per end screen element shown &bullet; Last 7 days
        </div>
        <div class="studioAnalyticsEngagement__more__top__details">
          Nothing to show for these dates
        </div>
        <div class="studioAnalyticsEngagement__more__top__more">
          SEE MORE
        </div>
      </div>
      <div class="studioAnalyticsEngagement__more__top">
        <div class="studioAnalyticsEngagement__more__top__title">
          Top cards
        </div>
        <div class="studioAnalyticsEngagement__more__top__subText">
          Card clicks &bullet; Last 7 days
        </div>
        <div class="studioAnalyticsEngagement__more__top__details">
          Nothing to show for these dates
        </div>
        <div class="studioAnalyticsEngagement__more__top__more">
          SEE MORE
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "StudioAnalyticsEngagement",
  setup() {
    const state = reactive({
      watchTime: true,
      averageViewDuration: false
    });

    const switchToWatchTime = () => {
      state.watchTime = true;
      state.averageViewDuration = false;
    };
    const switchToAverageViewDuration = () => {
      state.watchTime = false;
      state.averageViewDuration = true;
    };
    return { ...toRefs(state), switchToWatchTime, switchToAverageViewDuration };
  }
};
</script>

<style scoped>
.studioAnalyticsEngagement {
  width: 100%;
  height: 100%;
}
.studioAnalyticsEngagement__graph {
  width: 1254px;
  height: 350px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-left: 25px;
  margin-top: 25px;
}
.studioAnalyticsEngagement__graph__head {
  width: 100%;
  height: 130px;
  display: flex;
  flex-flow: row nowrap;
}
.studioAnalyticsEngagement__graph__head__list {
  width: 50%;
  height: 100%;
  background-color: rgb(238, 236, 236);
}
.studioAnalyticsEngagement__graph__head__list:hover {
  cursor: pointer;
}
.studioAnalyticsEngagement__graph__head__list:first-child {
  border-right: 1px solid lightgrey;
}
.studioAnalyticsEngagement__graph__head__list__title {
  margin-top: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.head--active {
  background-color: white;
}

.studioAnalyticsEngagement__graph__detail {
  width: 95%;
  height: 150px;
  margin: 20px auto;
}
.studioAnalyticsEngagement__graph__more {
  text-align: left;
  margin-left: 25px;
  font-size: 0.9rem;
  color: dodgerblue;
  font-weight: 500;
}
.studioAnalyticsEngagement__graph__more:hover {
  cursor: pointer;
}

.studioAnalyticsEngagement__more {
  width: 1256px;
  height: 100%;
  margin-left: 25px;
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-bottom: 50px;
}
.studioAnalyticsEngagement__more__top {
  width: 48%;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-top: 20px;
}
.studioAnalyticsEngagement__more__top__title {
  text-align: left;
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 25px;
  margin-top: 25px;
}
.studioAnalyticsEngagement__more__top__subText {
  text-align: left;
  font-size: 0.8rem;
  color: grey;
  margin-left: 25px;
  margin-top: 0px;
}
.studioAnalyticsEngagement__more__top__details {
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  margin-left: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.studioAnalyticsEngagement__more__top__more {
  text-align: left;
  font-size: 0.9rem;
  font-weight: 500;
  color: dodgerblue;
  margin-left: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.studioAnalyticsEngagement__more__top__more:hover {
  cursor: pointer;
}
</style>
