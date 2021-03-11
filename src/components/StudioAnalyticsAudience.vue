<template>
  <div class="studioAnalyticsAudience">
    <div class="studioAnalyticsAudience__graph">
      <div class="studioAnalyticsAudience__graph__head">
        <div
          @click="switchToReturn"
          :class="[
            returnViewers
              ? 'studioAnalyticsAudience__graph__head__list head--active'
              : 'studioAnalyticsAudience__graph__head__list'
          ]"
        >
          <div class="studioAnalyticsAudience__graph__head__list__title">
            Returning Viewers
          </div>
          <div class="studioAnalyticsAudience__graph__head__list__amount">
            X
          </div>
        </div>
        <div
          @click="switchToUnique"
          :class="[
            uniqueViewers
              ? 'studioAnalyticsAudience__graph__head__list head--active'
              : 'studioAnalyticsAudience__graph__head__list'
          ]"
        >
          <div class="studioAnalyticsAudience__graph__head__list__title">
            Unique Viewers
          </div>
          <div class="studioAnalyticsAudience__graph__head__list__amount">
            X
          </div>
        </div>
        <div
          @click="switchToSubscriber"
          :class="[
            subscriber
              ? 'studioAnalyticsAudience__graph__head__list head--active'
              : 'studioAnalyticsAudience__graph__head__list'
          ]"
        >
          <div class="studioAnalyticsAudience__graph__head__list__title">
            Subscribers
          </div>
          <div class="studioAnalyticsAudience__graph__head__list__amount">
            X
          </div>
        </div>
      </div>
      <div class="studioAnalyticsAudience__graph__detail"></div>
      <div class="studioAnalyticsAudience__graph__more">SEE MORE</div>
    </div>
    <div class="studioAnalyticsAudience__more">
      <div class="studioAnalyticsAudience__more__wrap">
        <div class="studioAnalyticsAudience__more__wrap__title">
          When your viewers are on YouTube
        </div>
        <div class="studioAnalyticsAudience__more__wrap__subText">
          Your local time (GMT -0800) &bullet; Last 28 days
        </div>
        <div class="studioAnalyticsAudience__more__wrap__details">
          Not enough viewer data to show this report
        </div>
      </div>
      <div class="studioAnalyticsAudience__more__wrap">
        <div class="studioAnalyticsAudience__more__wrap__title">
          Other channels your audience watches
        </div>
        <div class="studioAnalyticsAudience__more__wrap__subText">
          Last 28 days
        </div>
        <div class="studioAnalyticsAudience__more__wrap__details">
          Not enough eligible audience data to show this report.
          <span class="link">Learn more</span>
        </div>
      </div>
      <div class="studioAnalyticsAudience__more__wrap">
        <div class="studioAnalyticsAudience__more__wrap__title">
          Watch time from subscribers
        </div>
        <div class="studioAnalyticsAudience__more__wrap__subText">
          Watch time &bullet; Last 28 days
        </div>
        <div class="studioAnalyticsAudience__more__wrap__details">
          Nothing to show for these dates
        </div>
        <div class="studioAnalyticsAudience__more__wrap__more">SEE MORE</div>
      </div>
      <div class="studioAnalyticsAudience__more__wrap">
        <div class="studioAnalyticsAudience__more__wrap__title">
          Other videos your audience watched
        </div>
        <div class="studioAnalyticsAudience__more__wrap__subText">
          Last 28 days
        </div>
        <div class="studioAnalyticsAudience__more__wrap__details">
          Not enough eligible audience data to show this report.
          <span class="link">Learn more</span>
        </div>
      </div>
      <div class="studioAnalyticsAudience__more__wrap">
        <div class="studioAnalyticsAudience__more__wrap__title">
          Age and gender
        </div>
        <div class="studioAnalyticsAudience__more__wrap__subText">
          Views &bullet; Last 28 days
        </div>
        <div class="studioAnalyticsAudience__more__wrap__details">
          Not enough demographic data to show this report
        </div>
        <div class="studioAnalyticsAudience__more__wrap__more">SEE MORE</div>
      </div>
      <div class="studioAnalyticsAudience__more__wrap">
        <div class="studioAnalyticsAudience__more__wrap__title">
          Top geographies
        </div>
        <div class="studioAnalyticsAudience__more__wrap__subText">
          Viewse &bullet; Last 28 days
        </div>
        <div class="studioAnalyticsAudience__more__wrap__details">
          Not enough geography data to show this report
        </div>
        <div class="studioAnalyticsAudience__more__wrap__more">SEE MORE</div>
      </div>
      <div class="studioAnalyticsAudience__more__wrap">
        <div class="studioAnalyticsAudience__more__wrap__title">
          Top subtitle/CC languages
        </div>
        <div class="studioAnalyticsAudience__more__wrap__subText">
          Viewse &bullet; Last 28 days
        </div>
        <div class="studioAnalyticsAudience__more__wrap__details">
          Nothing to show for these dates
        </div>
        <div class="studioAnalyticsAudience__more__wrap__more">SEE MORE</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "StudioAnalyticsAudience",
  setup() {
    const state = reactive({
      returnViewers: true,
      uniqueViewers: false,
      subscriber: false
    });

    const switchToReturn = () => {
      state.returnViewers = true;
      state.uniqueViewers = false;
      state.subscriber = false;
    };
    const switchToUnique = () => {
      state.returnViewers = false;
      state.uniqueViewers = true;
      state.subscriber = false;
    };
    const switchToSubscriber = () => {
      state.returnViewers = false;
      state.uniqueViewers = false;
      state.subscriber = true;
    };

    return {
      ...toRefs(state),
      switchToReturn,
      switchToUnique,
      switchToSubscriber
    };
  }
};
</script>

<style scoped>
.studioAnalyticsAudience {
  width: 100%;
  height: 100%;
}
.studioAnalyticsAudience__graph {
  width: 1254px;
  height: 350px;
  border: 1px solid lightgrey;
  margin-left: 25px;
  margin-top: 25px;
  border-radius: 5px;
}
.studioAnalyticsAudience__graph__head {
  width: 100%;
  height: 120px;
  display: flex;
  flex-flow: row nowrap;
}
.studioAnalyticsAudience__graph__head__list {
  width: 33.33%;
  height: 100%;
  background-color: rgb(228, 228, 228);
}
.studioAnalyticsAudience__graph__head__list:hover {
  cursor: pointer;
}
.head--active {
  background-color: white;
}
.mid {
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
}
.studioAnalyticsAudience__graph__head__list__title {
  margin-top: 25px;
  font-size: 0.9rem;
  font-weight: 500;
}
.studioAnalyticsAudience__graph__head__list__amount {
  font-size: 0.8rem;
}

.studioAnalyticsAudience__graph__detail {
  width: 95%;
  height: 130px;
  margin-top: 25px;
  margin-left: 25px;
}
.studioAnalyticsAudience__graph__more {
  margin-top: 25px;
  font-size: 0.9rem;
  color: dodgerblue;
  text-align: left;
  margin-left: 25px;
  font-weight: 500;
}
.studioAnalyticsAudience__more {
  width: 1256px;
  height: 100%;
  margin-left: 25px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.studioAnalyticsAudience__more__wrap {
  width: 48%;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-top: 25px;
}
.studioAnalyticsAudience__more__wrap__title {
  text-align: left;
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 25px;
  margin-top: 25px;
}
.studioAnalyticsAudience__more__wrap__subText {
  text-align: left;
  font-size: 0.8rem;
  margin-left: 25px;
  margin-top: 5px;
  color: grey;
}
.studioAnalyticsAudience__more__wrap__details {
  text-align: left;
  font-size: 1rem;
  margin-left: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.studioAnalyticsAudience__more__wrap__more {
  margin-left: 25px;
  text-align: left;
  margin-bottom: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  color: dodgerblue;
}
.studioAnalyticsAudience__more__wrap__more:hover {
  cursor: pointer;
}
.link {
  color: dodgerblue;
}
.link:hover {
  cursor: pointer;
}
</style>
