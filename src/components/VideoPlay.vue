<template>
  <div class="videoPlay">
    <figure class="videoPlay__container">
      <video class="videoPlay__video">
        <template v-if="link">
          <source :src="require('@/assets/' + link)" type="video/mp4" />
          You browser does not support the video tag
        </template>
      </video>
    </figure>

    <div class="videoPlay__functions">
      <template v-if="video">
        <progress
          class="videoPlay__functions__progressBar--progress"
          :max="100"
          :value="videoProgress"
          @click.stop="skipAhead"
        >
        </progress>
      </template>
      <div class="videoPlay__functions__tools">
        <div class="videoPlay__functions__tools__left">
          <div class="videoPlay__functions__tools__play" @click="playVideo">
            <svg class="videoPlay__svg" v-if="videoPlay">
              <path d="M10 15 L 10 35 L 30 25" class="videoPlay__svg__white" />
            </svg>
            <div v-else class="videoPlay__pause">
              <i class="fas fa-pause"></i>
            </div>
          </div>
          <div class="videoPlay__functions__tools__next">
            <svg class="videoPlay__svg">
              <path d="M10 18 L 10 32 L 25 25" class="videoPlay__svg__white" />
              <path
                d="M26 17 L 26 32 L 27 32 L 27 17"
                class="videoPlay__svg__white"
              />
            </svg>
          </div>
          <div class="videoPlay__functions__tools__volume">
            <svg class="videoPlay__functions__tools__volume__svg">
              <path
                d="M5 23 L 10 23 L 22 15 L 22 35 L 10 27 L 5 27 Z"
                class="videoPlay__svg__white"
              />
              <path d="M24 22 Q 28 25, 24 28 " class="videoPlay__svg__white" />
            </svg>
            <div class="videoPlay__functions__tools__volume__bar">
              <input
                min="0"
                max="1"
                step="0.1"
                class="videoPlay__functions__tools__volume__bar__input"
                type="range"
                @change="volumeChange"
              />
            </div>
          </div>
          <div class="videoPlay__functions__tools__time">
            0:{{ videoCurrentTime ? videoCurrentTime : "0" }} /
            {{ video ? "0:" + Math.floor(video.duration) : "0:0" }}
          </div>
        </div>
        <div class="videoPlay__functions__tools__right">
          <div class="videoPlay__functions__tools__right__cc">
            <div
              :class="[
                ccActive
                  ? 'videoPlay__functions__tools__right__cc__box '
                  : 'videoPlay__functions__tools__right__cc__box videoPlay__functions__tools__right__cc__box--active--black'
              ]"
              @click="ccSwitch"
            >
              cc
            </div>
          </div>
          <div class="videoPlay__functions__tools__right__config">
            <i class="fas fa-cog" @click="switchVideoSetting"></i>
            <div
              class="videoPlay__functions__tools__right__config__absolute"
              v-if="videoSetting"
            >
              <div
                class="videoPlay__functions__tools__right__config__absolute__list"
              >
                <div
                  class="videoPlay__functions__tools__right__config__absolute__list__left"
                >
                  Annotations
                </div>
                <div
                  class="videoPlay__functions__tools__right__config__absolute__list__right"
                >
                  <div
                    class="videoPlay__functions__tools__right__config__absolute__list__right__text"
                    @click="switchAnnotations"
                  >
                    <NSA :agree="annotation" :Annotataion="true" />
                  </div>
                </div>
              </div>
              <div
                class="videoPlay__functions__tools__right__config__absolute__list"
              >
                <div
                  class="videoPlay__functions__tools__right__config__absolute__list__left"
                >
                  Playback speed
                </div>
                <div
                  class="videoPlay__functions__tools__right__config__absolute__list__right"
                >
                  <div
                    class="videoPlay__functions__tools__right__config__absolute__list__right__text"
                  >
                    Normal
                  </div>
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
              <div
                class="videoPlay__functions__tools__right__config__absolute__list"
              >
                <div
                  class="videoPlay__functions__tools__right__config__absolute__list__left"
                >
                  Subtitles/CC
                </div>
                <div
                  class="videoPlay__functions__tools__right__config__absolute__list__right"
                >
                  <div
                    class="videoPlay__functions__tools__right__config__absolute__list__right__text"
                  >
                    Off
                  </div>
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
              <div
                class="videoPlay__functions__tools__right__config__absolute__list"
              >
                <div
                  class="videoPlay__functions__tools__right__config__absolute__list__left"
                >
                  Quality
                </div>
                <div
                  class="videoPlay__functions__tools__right__config__absolute__list__right"
                >
                  <div
                    class="videoPlay__functions__tools__right__config__absolute__list__right__text"
                  >
                    1080p
                  </div>
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="videoPlay__functions__tools__right__theater">
            <svg class="videoPlay__svg">
              <path
                d="M8 15 L 48 15 L 48 40 L 8 40 Z"
                class="videoPlay__svg__white__transparent--4px"
              />
            </svg>
          </div>
          <div class="videoPlay__functions__tools__right__fullscreen">
            <svg class="videoPlay__svg">
              <path
                d="M15 23 L 15 15 L 23 15 "
                class="videoPlay__svg__white__transparent--3px"
              />
              <path
                d="M32 15 L 40 15 L 40 23"
                class="videoPlay__svg__white__transparent--3px"
              />
              <path
                d="M40 32 L 40 40 L 32 40"
                class="videoPlay__svg__white__transparent--3px"
              />
              <path
                d="M23 40 L 15 40 L 15 32 "
                class="videoPlay__svg__white__transparent--3px"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sunset from "@/assets/Sunset.mp4";
import { onMounted, reactive, toRefs, watch } from "vue";
import NSA from "@/components/NotificationSlideAnimation.vue";
export default {
  name: "VideoPlay",
  components: { NSA },
  props: {
    videoLink: {
      type: String,
      required: true
    },
    checkIfVideoEnded: Function,
    currentIndex: Number,
    playlistAutoplay: Boolean,
    addToHistory: Function
  },
  setup(props) {
    const state = reactive({
      playThis: "Ocean",
      video: null,
      videoPlay: true,
      videoCurrentTime: 0,
      volumeRange: 5,
      ccActive: false,
      annotation: false,
      videoSetting: false,
      videoProgress: 0,
      link: ""
    });

    watch(
      () => props.videoLink,
      (cv, ov) => {
        //
        if (cv) {
          state.link = cv;
        } else {
          state.link = ov;
        }
      }
    );

    watch(
      () => props.playlistAutoplay,
      cv => {
        if (cv) {
          if (props.playlistAutoplay) {
            //you don't need this if you click on any video before
            //but need if you never click on video before
            //because of no autoplay policy on browser, if autoplay sound must be muted
            state.video.muted = true;
            playVideo();
          }
        }
      }
    );

    onMounted(() => {
      let video = document.querySelector(".videoPlay__video");
      state.video = video;

      let volume = document.querySelector(
        ".videoPlay__functions__tools__volume__bar__input"
      );
      state.volumeRange = volume;
      //check if video ended
      const intervalCheckingVideoEnd = setInterval(function() {
        if (state.video.ended) {
          props.checkIfVideoEnded(true, props.currentIndex);
          clearInterval(intervalCheckingVideoEnd);
        }
      }, 1000);
    });

    const switchVideoSetting = () => {
      state.videoSetting = !state.videoSetting;
    };

    const switchAnnotations = () => {
      state.annotation = !state.annotation;
    };

    const ccSwitch = () => {
      state.ccActive = !state.ccActive;
    };

    const playVideo = () => {
      if (state.video.ended) {
        state.video.play();
        state.videoPlay = false;
        state.videoCurrentTime = 0;
        resetTimer();
      } else if (state.video.paused) {
        resetTimer();
        state.video.play();
        setTimeout(function() {
          //after 3 second add it to history
          props.addToHistory();
        }, 3000);
        state.videoPlay = false;
      } else {
        state.video.pause();
        state.videoPlay = true;
      }
    };
    const volumeChange = () => {
      console.log(state.volumeRange.value);
      console.log("what is the video volume:", state.video.volume);
      state.video.volume = state.volumeRange.value;
    };

    const resetTimer = () => {
      const videoTimerInterval = setInterval(function() {
        checkVideoCurrentTime();
        if (state.video) {
          if (state.video.currentTime == state.video.duration) {
            state.videoPlay = true;
            clearInterval(videoTimerInterval);
          }
        }
      }, 1000);
    };

    const checkVideoCurrentTime = () => {
      if (state.video) {
        state.videoCurrentTime = Math.floor(state.video.currentTime);
        state.videoProgress =
          (state.video.currentTime / state.video.duration) * 100;
      }
    };

    const skipAhead = e => {
      let thisElement = document.querySelector("progress");
      let videoElement = document.querySelector(".videoPlay");

      let currentTime = Math.floor(
        ((e.pageX - thisElement.offsetLeft - videoElement.offsetLeft) /
          thisElement.offsetWidth) *
          state.video.duration
      );
      state.video.currentTime = currentTime;
      state.videoCurrentTime = currentTime;
      state.videoProgress = (currentTime / state.video.duration) * 100;
    };

    return {
      ...toRefs(state),
      playVideo,
      volumeChange,
      ccSwitch,
      switchAnnotations,
      switchVideoSetting,
      Sunset,
      skipAhead
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Squada+One&display=swap");

.videoPlay {
  width: 100%;
  height: 100%;
  position: relative;
}
.videoPlay__container {
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-left: 0;
}
.videoPlay__video {
  width: 100%;
}
.videoPlay:hover .videoPlay__functions {
  display: block;
}
.videoPlay__functions {
  position: absolute;
  width: 100%;
  height: 75px;
  bottom: 5px;
  display: none;
}

.videoPlay__functions__progressBar--progress {
  width: 97%;
  height: 7px;
  border-radius: 0;
  margin-bottom: 0px;
  background-color: red;
}
.videoPlay__functions__progressBar--progress:hover {
  cursor: pointer;
}
.videoPlay__functions__progressBar--progress::-webkit-progress-value {
  background-color: red;
}
.videoPlay__functions__progressBar--progress::-moz-progress-bar {
  background-color: red;
}
.videoPlay__functions__tools {
  width: 97%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
}
.videoPlay__functions__tools__left {
  width: 52%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
}
.videoPlay__functions__tools__right {
  width: 48%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
}
.videoPlay__functions__tools__play {
  width: 40px;
  height: 50px;
}
.videoPlay__functions__tools__play:hover {
  cursor: pointer;
}
.videoPlay__functions__tools__next {
  width: 40px;
  height: 50px;
  margin-left: 5px;
}
.videoPlay__functions__tools__volume {
  width: 100px;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  margin-left: 5px;
}

.videoPlay__functions__tools__time {
  height: 50px;
  line-height: 50px;
  font-size: 0.85rem;
  color: white;
  margin-left: 5px;
}

.videoPlay__functions__tools__right__autoplay {
  width: 55px;
  height: 50px;
}
.videoPlay__functions__tools__right__cc {
  width: 55px;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.videoPlay__functions__tools__right__cc__box {
  width: 50%;
  height: 50%;
  background-color: white;
  margin: 0 auto;
  line-height: 25px;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Squada One", cursive;
  border-radius: 3px;
  user-select: none;
}
.videoPlay__functions__tools__right__cc__box:hover {
  cursor: pointer;
}
.videoPlay__functions__tools__right__cc__box--active--black {
  background-color: rgb(70, 70, 70);
}

.videoPlay__functions__tools__right__config {
  width: 55px;
  height: 50px;
}
.videoPlay__functions__tools__right__config:hover {
  cursor: pointer;
}
.fa-cog {
  color: white;
  line-height: 50px;
  font-size: 1.8rem;
}

.videoPlay__functions__tools__right__config__absolute {
  position: absolute;
  width: 300px;
  min-height: 110px;
  background-color: rgba(39, 39, 39, 0.9);
  margin-bottom: 70px;
  right: 20px;
  bottom: 0;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  border-radius: 2px;
}
.videoPlay__functions__tools__right__config__absolute__list {
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.videoPlay__functions__tools__right__config__absolute__list:hover {
  background-color: rgb(102, 102, 102);
}

.videoPlay__functions__tools__right__config__absolute__list__left {
  margin-left: 20px;
}
.videoPlay__functions__tools__right__config__absolute__list__right {
  margin-right: 20px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.videoPlay__functions__tools__right__config__absolute__list__right__text {
  margin-right: 5px;
  width: 60px;
  height: 30px;
  line-height: 30px;
}
.videoPlay__functions__tools__right__config__absolute__list__right
  .fa-chevron-right {
  color: white;
}
.videoPlay__functions__tools__right__theater {
  width: 55px;
  height: 55px;
}
.videoPlay__functions__tools__right__fullscreen {
  width: 55px;
  height: 55px;
}

.videoPlay__svg {
  width: 100%;
  height: 100%;
}
.videoPlay__svg__white {
  stroke: white;
  fill: white;
}
.videoPlay__svg__white__transparent--4px {
  fill: transparent;
  stroke: white;
  stroke-width: 4px;
}
.videoPlay__svg__white__transparent--3px {
  fill: transparent;
  stroke: white;
  stroke-width: 3px;
}
.videoPlay__svg__red__transparent--3px {
  fill: transparent;
  stroke: rgb(34, 32, 32);
  stroke-width: 3px;
}
.videoPlay__functions__tools__volume__svg {
  width: 40%;
  height: 100%;
}
.videoPlay__pause {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.videoPlay__pause .fa-pause {
  color: white;
  margin-top: 3px;
}

.videoPlay__functions__tools__volume__bar {
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.videoPlay__functions__tools__volume__bar__input {
  background-color: #c2c3c5;
  width: 90%;
  height: 4px;
  margin-top: -2px;
  outline: none;
}
</style>
