<template>
  <div class="studioAnalyticsOverview">
    <div class="studioAnalyticsOverview__overview">
      <div class="studioAnalyticsOverview__overview__title">
        Your channel got x views in the last 7 days
      </div>
      <div class="studioAnalyticsOverview__overview__graph">
        <div class="studioAnalyticsOverview__overview__graph__header">
          <div
            :class="[
              views
                ? 'studioAnalyticsOverview__overview__graph__header__sub studioAnalyticsOverview__overview__graph__header__sub--active'
                : 'studioAnalyticsOverview__overview__graph__header__sub'
            ]"
            @click="switchToViews"
          >
            <div
              class="studioAnalyticsOverview__overview__graph__header__sub__text"
            >
              Views
            </div>
            <div
              class="studioAnalyticsOverview__overview__graph__header__sub__amount"
            >
              X
            </div>
          </div>
          <div
            :class="[
              watchTime
                ? 'studioAnalyticsOverview__overview__graph__header__sub studioAnalyticsOverview__overview__graph__header__sub--active studioAnalyticsOverview__overview__graph__header__subMid'
                : 'studioAnalyticsOverview__overview__graph__header__sub studioAnalyticsOverview__overview__graph__header__subMid'
            ]"
            @click="switchToWatchTime"
          >
            <div
              class="studioAnalyticsOverview__overview__graph__header__sub__text"
            >
              Watch time (hours)
            </div>
            <div
              class="studioAnalyticsOverview__overview__graph__header__sub__amount"
            >
              X
            </div>
          </div>
          <div
            :class="[
              subscriber
                ? 'studioAnalyticsOverview__overview__graph__header__sub studioAnalyticsOverview__overview__graph__header__sub--active'
                : 'studioAnalyticsOverview__overview__graph__header__sub'
            ]"
            @click="switchToSubscriber"
          >
            <div
              class="studioAnalyticsOverview__overview__graph__header__sub__text"
            >
              Subscribers
            </div>
            <div
              class="studioAnalyticsOverview__overview__graph__header__sub__amount"
            >
              X
            </div>
          </div>
        </div>
        <div class="studioAnalyticsOverview__overview__graph__stats"></div>
        <div class="studioAnalyticsOverview__overview__graph__more">
          SEE MORE
        </div>
      </div>
    </div>
    <div class="studioAnalyticsOverview__realtime">
      <div class="studioAnalyticsOverview__realtime__update">
        <div class="studioAnalyticsOverview__realtime__update__title">
          Realtime
        </div>
        <div class="studioAnalyticsOverview__realtime__update__updating">
          <div
            class="studioAnalyticsOverview__realtime__update__updating__circle"
          >
            <div
              class="studioAnalyticsOverview__realtime__update__updating__circle__dot"
            ></div>
          </div>
          <div
            class="studioAnalyticsOverview__realtime__update__updating__text"
          >
            Updating live
          </div>
        </div>
        <div class="studioAnalyticsOverview__realtime__update__subscriber">
          <div
            class="studioAnalyticsOverview__realtime__update__subscriber__amount"
          >
            1
          </div>
          <div
            class="studioAnalyticsOverview__realtime__update__subscriber__text"
          >
            Subscribers
          </div>
        </div>
        <div class="studioAnalyticsOverview__realtime__update__view">
          <div class="studioAnalyticsOverview__realtime__update__view__amount">
            0
          </div>
          <div class="studioAnalyticsOverview__realtime__update__view__text">
            Views &bullet; Last 48 hours
          </div>
        </div>
        <div class="studioAnalyticsOverview__realtime__update__time">
          <div class="studioAnalyticsOverview__realtime__update__time__amount">
            -48h
          </div>
          <div class="studioAnalyticsOverview__realtime__update__time__text">
            Now
          </div>
        </div>
        <div class="studioAnalyticsOverview__realtime__update__more">
          SEE MORE
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "StudioAnalyticsOverview",
  setup() {
    const state = reactive({
      views: true,
      watchTime: false,
      subscriber: false
    });
    const switchToViews = () => {
      state.views = true;
      state.watchTime = false;
      state.subscriber = false;
    };
    const switchToWatchTime = () => {
      state.views = false;
      state.watchTime = true;
      state.subscriber = false;
    };
    const switchToSubscriber = () => {
      state.views = false;
      state.watchTime = false;
      state.subscriber = true;
    };
    return {
      ...toRefs(state),
      switchToViews,
      switchToWatchTime,
      switchToSubscriber
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioAnalyticsOverview {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.studioAnalyticsOverview__overview {
  width: 73%;
}
.studioAnalyticsOverview__overview__title {
  font-size: 1.8rem;
  font-family: Roboto, Arial, sans-serif;
  margin: 30px auto;
  color: rgb(26, 25, 25);
  font-weight: 500;
}
.studioAnalyticsOverview__overview__graph {
  width: 95%;
  height: 400px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 0 auto;
}
.studioAnalyticsOverview__overview__graph__header {
  width: 100%;
  height: 120px;
  display: flex;
  flex-flow: row nowrap;
}
.studioAnalyticsOverview__overview__graph__header__sub {
  width: 33.33%;
}
.studioAnalyticsOverview__overview__graph__header__sub--active {
  background-color: lightgrey;
}

.studioAnalyticsOverview__overview__graph__header__sub:hover {
  cursor: pointer;
  background-color: lightgrey;
}

.studioAnalyticsOverview__overview__graph__header__subMid {
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
}
.studioAnalyticsOverview__overview__graph__header__sub__text {
  margin-top: 30px;
  font-size: 0.9rem;
  font-weight: 500;
}
.studioAnalyticsOverview__overview__graph__header__sub__amount {
  margin-top: 10px;
  font-size: 0.9rem;
  font-weight: 500;
}
.studioAnalyticsOverview__overview__graph__stats {
  width: 95%;
  height: 200px;

  margin: 20px auto;
}
.studioAnalyticsOverview__overview__graph__more {
  text-align: left;
  margin-left: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  color: dodgerblue;
}
.studioAnalyticsOverview__overview__graph__more:hover {
  cursor: pointer;
}

.studioAnalyticsOverview__realtime {
  width: 27%;
  min-height: 79.3vh;
  background-color: #f4f4f4;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.studioAnalyticsOverview__realtime__update {
  width: 95%;
  height: 330px;
  border: 1px solid #f4f4f4;
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
}
.studioAnalyticsOverview__realtime__update__title {
  text-align: left;
  margin: 10px 15px;
  font-size: 1.2rem;
  font-weight: 500;
}
.studioAnalyticsOverview__realtime__update__updating {
  width: 90%;
  margin-left: 15px;
  text-align: left;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.studioAnalyticsOverview__realtime__update__updating__circle {
  width: 20px;
  height: 20px;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
.studioAnalyticsOverview__realtime__update__updating__circle__dot {
  border: 50%;
  height: 50%;
  width: 50%;
  background-color: rgb(73, 176, 236);
  border-radius: 50%;
  position: absolute;
}
.studioAnalyticsOverview__realtime__update__updating__text {
  margin-left: 5px;
}

.studioAnalyticsOverview__realtime__update__subscriber {
  width: 90%;
  height: 70px;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  margin: 20px auto;
}
.studioAnalyticsOverview__realtime__update__subscriber__amount {
  text-align: left;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 500;
}
.studioAnalyticsOverview__realtime__update__subscriber__text {
  text-align: left;
  font-size: 0.9rem;
  color: grey;
}
.studioAnalyticsOverview__realtime__update__view {
  width: 90%;
  height: 70px;
  margin: 20px auto 0;
  border-bottom: 1px solid lightgrey;
}
.studioAnalyticsOverview__realtime__update__view__amount {
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
}
.studioAnalyticsOverview__realtime__update__view__text {
  text-align: left;
  font-size: 0.9rem;
  color: grey;
}
.studioAnalyticsOverview__realtime__update__time {
  width: 90%;
  margin: 5px auto;
  color: grey;
  font-size: 0.9rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.studioAnalyticsOverview__realtime__update__more {
  text-align: left;
  margin-left: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: dodgerblue;
  margin-top: 20px;
}
.studioAnalyticsOverview__realtime__update__more:hover {
  cursor: pointer;
}
</style>
