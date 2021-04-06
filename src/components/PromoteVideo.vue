<template>
  <div class="pv" @click="goToVideo">
    <div class="pv__thumbnail" v-if="video">
      <img
        :src="require('@/assets/' + video.thumbnail)"
        class="pv__thumbnail__img"
      />
    </div>
    <div class="pv__wrap" v-if="video">
      <div class="pv__details">
        <div
          :class="[
            titleColor
              ? 'pv__details__title pv__details__title--white'
              : 'pv__details__title'
          ]"
        >
          {{ video.title }}
        </div>
        <div
          :class="[
            channelColor
              ? 'pv__details__channel pv__details__channel--grey'
              : 'pv__details__channel'
          ]"
          @click.stop="goToChannel"
        >
          {{ video.profileName }}
        </div>
        <div
          :class="[
            infoColor
              ? 'pv__details__viewsAndDate pv__details__viewsAndDate--grey'
              : 'pv__details__viewsAndDate'
          ]"
        >
          {{ viewsCount() }} views &bullet; {{ video.profilePostDate }}
        </div>
        <div v-if="showCC" class="pv__details__cc">CC</div>
      </div>
      <div class="pv__option" @click.stop="showOptionSwitch">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      <div v-if="showOption" class="pv__optionMenu">
        <div class="pv__optionMenu__actions">
          <div class="pv__optionMenu__actions__addToQueue">
            <div class="pv__optionMenu__actions__addToQueue__icon">
              <i class="fas fa-list-ol"></i>
            </div>
            <div class="pv__optionMenu__actions__addToQueue__text">
              Add to queue
            </div>
          </div>
          <div class="pv__optionMenu__actions__watchLater">
            <div class="pv__optionMenu__actions__watchLater__icon">
              <i class="fas fa-clock"></i>
            </div>
            <div class="pv__optionMenu__actions__watchLater__text">
              Save to Watch Later
            </div>
          </div>
          <div class="pv__optionMenu__actions__saveToPlaylist">
            <div class="pv__optionMenu__actions__saveToPlaylist__icon">
              <i class="fas fa-list-ol"></i>
            </div>
            <div class="pv__optionMenu__actions__saveToPlaylist__text">
              Save to playlist
            </div>
          </div>
        </div>
        <div class="pv__optionMenu__reports">
          <div
            v-if="componentType == 'subscriptions'"
            class="pv__optionMenu__reports__hide"
          >
            <div class="pv__optionMenu__reports__hide__icon">
              <i class="fas fa-ban"></i>
            </div>
            <div class="pv__optionMenu__reports__hide__text">Hide</div>
          </div>
          <div
            v-if="componentType == 'library'"
            class="pv__optionMenu__reports__remove"
          >
            <div class="pv__optionMenu__reports__remove__icon">
              <i class="fas fa-trash"></i>
            </div>
            <div class="pv__optionMenu__reports__remove__text">
              Remove from Watch history
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "PromoteVideo",
  props: {
    titleColor: {
      type: Boolean,
      required: false
    },
    channelColor: {
      type: Boolean,
      required: false
    },
    infoColor: {
      type: Boolean,
      required: false
    },
    showCC: {
      type: Boolean,
      required: false
    },
    componentType: {
      type: String,
      required: false
    },
    video: {
      type: Object,
      required: false
    },
    userId: {
      type: Number,
      required: true
    },
    likedVideo: String
  },
  setup(props) {
    const state = reactive({
      showOption: false
    });

    const goToVideo = () => {
      window.location.href = "/watch/" + props.video.id;
    };
    const goToChannel = () => {
      window.location.href = "/channel/" + (props.userId ? props.userId : "1");
    };
    const showOptionSwitch = () => {
      state.showOption = !state.showOption;
    };
    const viewsCount = () => {
      if (props.video) {
        let views = props.video.viewscount.toString().split("");
        let newArrayView = [];
        let indexNum = 1;

        for (let i = views.length - 1; i >= 0; i--) {
          if (indexNum == 3) {
            newArrayView.unshift(views[i]);
            if (views[i - 1] != undefined) {
              newArrayView.unshift(",");
            }
            indexNum = 1;
          } else {
            newArrayView.unshift(views[i]);
            indexNum++;
          }
        }
        return newArrayView.join("");
      }
    };
    return {
      ...toRefs(state),
      viewsCount,
      goToVideo,
      goToChannel,
      showOptionSwitch
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.pv {
  width: 100%;
  height: 100%;
  text-align: left;
  font-family: Roboto, Arial, sans-serif;
  color: black;
  margin-right: 5px;
}

.pv:hover .pv__option {
  display: block;
}

.pv--white {
  color: white;
}
.pv:hover {
  cursor: pointer;
}
.pv__thumbnail {
  width: 100%;
  height: 110px;
  background-color: green;
}
.pv__thumbnail__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pv__wrap {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 120px;
  padding-bottom: 2px;
  position: relative;
}

.pv__details {
  width: 95%;
  height: 100%;
}
.pv__details__title {
  width: 100%;
  max-height: 33%;
  margin-top: 2%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.95rem;
  font-weight: 500;
}
.pv__details__title--white {
  color: white;
}
.pv__details__channel {
  width: 100%;
  height: 20%;
  margin-top: 2%;
  font-size: 0.85rem;
  line-height: 25px;
}
.pv__details__channel--grey {
  color: rgb(182, 181, 181);
  font-weight: 400;
}
.pv__details__viewsAndDate {
  width: 100%;
  height: 20%;
  font-size: 0.8rem;
  font-weight: 400;
}
.pv__details__viewsAndDate--grey {
  color: rgb(182, 181, 181);
}

.pv__details__cc {
  display: inline-block;
  background-color: lightgrey;
  padding: 0 2px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
}

.pv__option {
  width: 5%;
  height: 22%;
  text-align: center;
  display: none;
}
.pv__option .fa-ellipsis-v {
  font-size: 1.3rem;
}
.pv__optionMenu {
  position: absolute;
  width: 240px;
  min-height: 124px;
  background-color: white;
  box-shadow: 0 0 5px grey;
  right: -5px;
  top: 25px;
  z-index: 10;
}
.pv__optionMenu__actions {
  width: 100%;
  height: 100%;
  margin: 5px 0;
  border-bottom: 1px solid lightgrey;
}
.pv__optionMenu__actions__addToQueue,
.pv__optionMenu__actions__watchLater,
.pv__optionMenu__actions__saveToPlaylist {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
}
.pv__optionMenu__actions__addToQueue:hover,
.pv__optionMenu__actions__watchLater:hover,
.pv__optionMenu__actions__saveToPlaylist:hover {
  cursor: pointer;
  background-color: rgb(226, 226, 226);
}
.pv__optionMenu__actions__addToQueue__icon,
.pv__optionMenu__actions__watchLater__icon,
.pv__optionMenu__actions__saveToPlaylist__icon {
  width: 20%;
  text-align: center;
}
.pv__optionMenu__actions__addToQueue__icon .fas,
.pv__optionMenu__actions__watchLater__icon .fas,
.pv__optionMenu__actions__saveToPlaylist__icon .fas {
  line-height: 40px;
  font-size: 0.9rem;
}
.pv__optionMenu__actions__addToQueue__text,
.pv__optionMenu__actions__watchLater__text,
.pv__optionMenu__actions__saveToPlaylist__text {
  width: 80%;
  line-height: 40px;
  font-size: 0.9rem;
}

.pv__optionMenu__reports {
  width: 100%;
  height: 100%;
  margin: 5px 0;
}
.pv__optionMenu__reports__hide,
.pv__optionMenu__reports__remove {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
}
.pv__optionMenu__reports__hide:hover,
.pv__optionMenu__reports__remove:hover {
  cursor: pointer;
  background-color: rgb(226, 226, 226);
}
.pv__optionMenu__reports__hide__icon,
.pv__optionMenu__reports__remove__icon {
  width: 20%;
  text-align: center;
}
.pv__optionMenu__reports__hide__icon .fas,
.pv__optionMenu__reports__remove__icon .fas {
  line-height: 40px;
  font-size: 0.9rem;
}
.pv__optionMenu__reports__hide__text,
.pv__optionMenu__reports__remove__text {
  width: 80%;
  line-height: 40px;
  font-size: 0.9rem;
}
</style>
