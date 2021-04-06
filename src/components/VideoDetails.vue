<template>
  <div class="video__details">
    <div class="video__details__profile">
      <img
        :src="require('@/assets/' + video.profileImage)"
        class="video__details__profile__image"
        @click="goToChannel"
      />
    </div>
    <div class="video__details__wrapper" @click="goToVideo">
      <div class="video__details__wrapper__title">{{ video.title }}</div>
      <div
        class="video__details__wrapper__channelname"
        @click.stop="goToChannel(video.userId)"
      >
        {{ video.profileName }}
      </div>
      <div class="video__details__wrapper__viewsandtime">
        {{ viewsCount }} views &bullet; {{ convertDate() }}
      </div>
    </div>
    <div class="video__details__option" @click.stop="switchShowOption">
      <i class="fas fa-ellipsis-v"></i>
    </div>
    <div v-if="showOption" class="video__details__moreOption">
      <div class="video__details__moreOption__actions">
        <div class="video__details__moreOption__actions__addToQueue">
          <div class="video__details__moreOption__actions__addToQueue__icon">
            <i class="fas fa-list-ol"></i>
          </div>
          <div class="video__details__moreOption__actions__addToQueue__text">
            Add to queue
          </div>
        </div>
        <div class="video__details__moreOption__actions__watchLater">
          <div class="video__details__moreOption__actions__watchLater__icon">
            <i class="fas fa-clock"></i>
          </div>
          <div class="video__details__moreOption__actions__watchLater__text">
            Save to Watch Later
          </div>
        </div>
        <div class="video__details__moreOption__actions__saveToPlaylist">
          <div
            class="video__details__moreOption__actions__saveToPlaylist__icon"
          >
            <i class="fas fa-list-ol"></i>
          </div>
          <div
            class="video__details__moreOption__actions__saveToPlaylist__text"
          >
            Save to playlist
          </div>
        </div>
      </div>
      <div class="video__details__moreOption__reports">
        <div class="video__details__moreOption__reports__notInterested">
          <div class="video__details__moreOption__reports__notInterested__icon">
            <i class="fas fa-ban"></i>
          </div>
          <div class="video__details__moreOption__reports__notInterested__text">
            Not interested
          </div>
        </div>
        <div class="video__details__moreOption__reports__dontRecommend">
          <div class="video__details__moreOption__reports__dontRecommend__icon">
            <i class="fas fa-minus-circle"></i>
          </div>
          <div class="video__details__moreOption__reports__dontRecommend__text">
            Don't recommend channel
          </div>
        </div>
        <div class="video__details__moreOption__reports__report">
          <div class="video__details__moreOption__reports__report__icon">
            <i class="fas fa-flag"></i>
          </div>
          <div class="video__details__moreOption__reports__report__text">
            Report
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";

export default {
  name: "VideoDetails",
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      showOption: false
    });

    const goToVideo = () => {
      window.location.href = "/watch/" + props.video.id;
    };
    const goToChannel = userId => {
      window.location.href = "/channel/" + userId;
    };

    const viewsCount = computed(() => {
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
        return views.join("");
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

    const switchShowOption = () => {
      state.showOption = !state.showOption;
    };

    return {
      ...toRefs(state),
      viewsCount,
      convertDate,
      switchShowOption,
      goToVideo,
      goToChannel
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
.video__details {
  width: 100%;
  max-height: 100%;
  text-align: left;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.video__details:hover {
  cursor: pointer;
}
.video__details:hover .video__details__option .fa-ellipsis-v {
  display: block;
}
.video__details__profile {
  width: 18.5%;
}
.video__details__profile__image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.video__details__wrapper {
  width: 76%;
  height: 100%;
  font-family: Roboto, Arial, sans-serif;
}
.video__details__wrapper__title {
  overflow: hidden;
  width: 100%;
  max-height: 41%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.1rem;
  line-height: 20px;
  color: black;
  font-weight: 500;
}
.video__details__wrapper__title:hover {
  cursor: pointer;
}
.video__details__wrapper__channelname {
  width: 100%;
  height: 25%;
  line-height: 33px;
  color: rgb(71, 71, 71);
  font-size: 1rem;
}
.video__details__wrapper__channelname:hover {
  cursor: pointer;
}
.video__details__wrapper__viewsandtime {
  width: 100%;
  height: 25%;
  display: flex;
  flex-flow: row nowrap;
  line-height: 25px;
  color: rgb(71, 71, 71);
}

.video__details__option {
  width: 10px;
  height: 100%;
  text-align: center;
}
.video__details__option .fa-ellipsis-v {
  font-size: 1.2rem;
  display: none;
}

.video__details__moreOption {
  width: 244px;
  min-height: 200px;
  position: absolute;
  right: 0px;
  top: 30px;
  z-index: 99;
  background-color: white;
  box-shadow: 0 0 2px grey;
  color: black;
}
.video__details__moreOption__actions {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid lightgrey;
  margin: 5px 0;
}
.video__details__moreOption__actions__addToQueue,
.video__details__moreOption__actions__watchLater,
.video__details__moreOption__actions__saveToPlaylist {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 30px;
}
.video__details__moreOption__actions__addToQueue:hover,
.video__details__moreOption__actions__watchLater:hover,
.video__details__moreOption__actions__saveToPlaylist:hover {
  cursor: pointer;
  background-color: rgb(226, 226, 226);
}

.video__details__moreOption__actions__addToQueue__icon,
.video__details__moreOption__actions__watchLater__icon,
.video__details__moreOption__actions__saveToPlaylist__icon {
  width: 20%;
  text-align: center;
}
.video__details__moreOption__actions__addToQueue__icon .fas,
.video__details__moreOption__actions__watchLater__icon .fas,
.video__details__moreOption__actions__saveToPlaylist__icon .fas {
  line-height: 30px;
}
.video__details__moreOption__actions__addToQueue__text,
.video__details__moreOption__actions__watchLater__text,
.video__details__moreOption__actions__saveToPlaylist__text {
  width: 80%;
  line-height: 30px;
}

.video__details__moreOption__reports {
  width: 100%;
  height: 100%;
}
.video__details__moreOption__reports__notInterested,
.video__details__moreOption__reports__dontRecommend,
.video__details__moreOption__reports__report {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 30px;
}

.video__details__moreOption__reports__notInterested:hover,
.video__details__moreOption__reports__dontRecommend:hover,
.video__details__moreOption__reports__report:hover {
  cursor: pointer;
  background-color: rgb(226, 226, 226);
}

.video__details__moreOption__reports__notInterested__icon,
.video__details__moreOption__reports__dontRecommend__icon,
.video__details__moreOption__reports__report__icon {
  width: 20%;
  text-align: center;
}
.video__details__moreOption__reports__notInterested__icon .fas,
.video__details__moreOption__reports__dontRecommend__icon .fas,
.video__details__moreOption__reports__report__icon .fas {
  line-height: 30px;
}
.video__details__moreOption__reports__notInterested__text,
.video__details__moreOption__reports__dontRecommend__text,
.video__details__moreOption__reports__report__text {
  width: 80%;
  line-height: 30px;
}
</style>
