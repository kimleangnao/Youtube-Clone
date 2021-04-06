<template>
  <div :class="[space == true ? 'recommend--space' : 'recommend']">
    <div class="recommend__video" v-if="video.thumbnail">
      <img
        :src="require('@/assets/' + video.thumbnail)"
        class="recommend__video__thumbnail"
        alt="thumbnail"
        @click="goToVideo"
      />
      <div class="recommend__video__play" @click="goToVideo">
        <svg class="recommend__video__play__svg">
          <path
            d="M10 5 L 10 35 L 35 20"
            class="recommend__video__play__svg__white"
          />
        </svg>
      </div>
      <div class="recommend__video__time">{{ video.videoLength }}</div>
      <div class="recommend__video__redbar">
        <div class="recommend__video__redbar__progress"></div>
      </div>
    </div>
    <div v-if="video" class="recommend__details" @click="goToVideo">
      <div class="recommend__details__title">
        {{ video.title }}
      </div>
      <div class="recommend__details__channel" @click.stop="goToChannel">
        {{ video.channelName ? video.channelName : video.profileName }}
      </div>
      <div class="recommend__details__viewsAndDate">
        {{ viewsCount }} views &bullet; {{ convertDate() }}
      </div>
      <div class="recommend__details__live">
        <div class="recommend__details__live__box">LIVE NOW</div>
      </div>
      <!--
      <div v-if="showOption" class="recommend__optionMenu"></div>
       -->
    </div>
    <div class="recommend__options">
      <svg class="recommend__options__svg" @click.stop="showOptionSwitch">
        <circle cx="6" cy="5" r="3" class="recommend__options__svg__circle" />
        <circle cx="6" cy="15" r="3" class="recommend__options__svg__circle" />
        <circle cx="6" cy="25" r="3" class="recommend__options__svg__circle" />
      </svg>
    </div>
  </div>
</template>

<script>
import imageLogo from "@/assets/profile.png";
import { reactive, toRefs, computed } from "vue";
export default {
  name: "RecommendVideo",
  props: {
    space: {
      type: Boolean,
      required: true
    },
    video: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      thumbnail: imageLogo,
      showOption: false
    });

    const showOptionSwitch = () => {
      state.showOption = !state.showOption;
    };

    const goToVideo = () => {
      window.location.href = "/watch/" + props.video.id;
    };
    const goToChannel = () => {
      window.location.href = "/channel/dfdf";
    };

    const viewsCount = computed(() => {
      if (props.video) {
        let views = props.video.viewscount.toString().split("");

        if (views.length == 5) {
          return views[0] + views[1] + "K";
        } else if (views.length == 6) {
          return views[0] + views[1] + views[2] + "K";
        } else if (views.length == 7) {
          return views[0] + "M";
        } else if (views.length == 8) {
          return views[0] + views[1] + "M";
        } else if (views.length == 9) {
          return views[0] + views[1] + views[2] + "M";
        } else if (views.length == 10) {
          return views[0] + "B";
        } else {
          return "unknown";
        }
      } else {
        return "unknown";
      }
    });

    let convertTime = function convertMs(ms) {
      let seconds = (ms / 1000).toFixed(0);
      let minutes = Math.floor(seconds / 60);
      let hours = "";
      let days = "";
      let months = "";
      let years = "";
      if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        if (hours > 23) {
          days = Math.floor(hours / 24);
          if (days > 30) {
            months = Math.floor(days / 30);
            if (months > 12) {
              years = Math.floor(months / 12);
            }
          }
        }
        minutes = Math.floor(minutes % 60);
        minutes = minutes >= 10 ? minutes : "0" + minutes;
      }

      seconds = Math.floor(seconds % 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      return [years, months, days, hours, minutes, seconds];
    };

    const convertDate = () => {
      let startDate = new Date(props.video.profilePostDate);
      let now = Date.now();

      let result = convertTime(now - startDate.getTime());
      let [years, months, days, hours, minutes, seconds] = result;
      //console.log("year", years, months, days, hours, minutes, seconds);
      if (years >= 1) {
        return years + " year ago";
      } else if (months >= 1) {
        return months + " months ago";
      } else if (days >= 1) {
        return days + " days ago";
      } else if (hours >= 1) {
        return hours + " hours ago";
      } else if (minutes >= 1) {
        return minutes + " minutes ago";
      } else if (seconds >= 1) {
        return seconds + " seconds ago";
      } else {
        return "unknown ago";
      }
    };

    return {
      ...toRefs(state),
      viewsCount,
      convertDate,
      goToVideo,
      showOptionSwitch,
      goToChannel
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
.recommend {
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  font-family: "Roboto", Arial, sans-serif;
}
.recommend:hover {
  cursor: pointer;
}
.recommend:hover .recommend__options {
  display: block;
}
.recommend--space {
  width: 100%;
  height: 100px;
  margin: 10px 0;
  display: flex;
  flex-flow: row nowrap;
}
.recommend--space:hover {
  cursor: pointer;
}
.recommend--space:hover .recommend__options {
  display: block;
}

.recommend__video {
  width: 164px;
  height: 100%;
  background-color: grey;
  position: relative;
}
.recommend__video:hover .recommend__video__play {
  display: block;
}
.recommend__video__thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.recommend__video__play {
  position: absolute;
  width: 40px;
  height: 40px;
  margin-top: -45%;
  margin-left: 50%;
  left: -20px;
  display: none;
}
.recommend__video__play__svg {
  width: 100%;
  height: 100%;
}
.recommend__video__play__svg__white {
  fill: white;
  stroke: white;
}
.recommend__video__time {
  font-family: "Roboto", Arial, sans-serif;
  position: absolute;
  background-color: black;
  color: white;
  font-weight: 500;
  font-size: 0.8rem;
  right: 6px;
  margin-top: -26px;
}
.recommend__video__redbar {
  position: absolute;
  width: 100%;
  height: 5px;
  margin-top: -9px;
}
.recommend__video__redbar__progress {
  width: 100%;
  height: 100%;
  background-color: red;
  display: none;
}
.recommend__details {
  width: 56%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  position: relative;
}
.recommend__details__title {
  font-family: "Roboto", Arial, sans-serif;
  width: 98%;
  max-height: 40%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 5px;
}
.recommend__details__channel {
  width: 98%;
  height: 20%;
  font-size: 0.85rem;
  margin: 5px 0 0 5px;
}
.recommend__details__viewsAndDate {
  width: 98%;
  height: 20%;
  margin-left: 5px;
  font-size: 0.8rem;
}
.recommend__details__live {
  width: 98%;
  height: 20%;
  margin-left: 5px;
  display: none;
}
.recommend__details__live__box {
  display: inline-block;
  border: 1px solid red;
  font-size: 0.9rem;
  font-weight: 500;
  color: red;
  padding: 0 5px;
}

.recommend__options {
  width: 3%;
  display: none;
}
.recommend__options__svg {
  height: 30%;
  width: 100%;
}
.recommend__options__svg__circle {
  fill: grey;
  stroke: grey;
}

.recommend__options__svg:hover {
  cursor: pointer;
}

.recommend__optionMenu {
  position: absolute;
  width: 213px;
  height: 212px;
  background-color: white;
  right: -25px;
  top: 30px;
  z-index: 10;
  box-shadow: 0 0px 5px grey;
}
</style>
