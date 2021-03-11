<template>
  <div class="videoPlay">
    <video class="videoPlay__video" autoplay>
      <source :src="playThis" type="video/mp4" />
      You browser does not support the video tag
    </video>
    <div class="videoPlay__functions">
      <div class="videoPlay__functions__progressBar"></div>
      <div class="videoPlay__functions__tools">
        <div class="videoPlay__functions__tools__left">
          <div class="videoPlay__functions__tools__play">
            <svg class="videoPlay__svg">
              <path d="M10 15 L 10 35 L 30 25" class="videoPlay__svg__white" />
            </svg>
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
                max="100"
                step="1"
                class="videoPlay__functions__tools__volume__bar__input"
                type="range"
              />
            </div>
          </div>
          <div class="videoPlay__functions__tools__time">
            00:01/50:00
          </div>
        </div>
        <div class="videoPlay__functions__tools__right">
          <div class="videoPlay__functions__tools__right__cc">
            <div class="videoPlay__functions__tools__right__cc__box">cc</div>
          </div>
          <div class="videoPlay__functions__tools__right__config">
            <i class="fas fa-cog"></i>
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
//import Ocean from "@/assets/Ocean.mp4";
import { reactive, toRefs } from "vue";

export default {
  name: "VideoPlay",
  setup() {
    const state = reactive({
      playThis: "Ocean"
    });
    return { ...toRefs(state) };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Squada+One&display=swap");

.videoPlay {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.videoPlay__video {
  width: 100%;
  height: 100%;
}
.videoPlay:hover .videoPlay__functions {
  display: block;
}
.videoPlay__functions {
  position: absolute;
  width: 100%;
  height: 60px;
  margin-top: -60px;
  display: none;
}
.videoPlay__functions__progressBar {
  width: 97%;
  height: 5px;
  background-color: lightgrey;
  margin: 0 auto;
}
.videoPlay__functions__tools {
  width: 97%;
  height: 55px;
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
}
.videoPlay__functions__tools__left {
  width: 52%;
  height: 55px;
  display: flex;
  flex-flow: row nowrap;
}
.videoPlay__functions__tools__right {
  width: 48%;
  height: 55px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
}
.videoPlay__functions__tools__play {
  width: 40px;
  height: 55px;
}
.videoPlay__functions__tools__next {
  width: 40px;
  height: 55px;
  margin-left: 5px;
}
.videoPlay__functions__tools__volume {
  width: 100px;
  height: 55px;
  display: flex;
  flex-flow: row nowrap;
  margin-left: 5px;
}

.videoPlay__functions__tools__time {
  height: 55px;
  line-height: 55px;
  font-size: 0.85rem;
  color: white;
  margin-left: 5px;
}

.videoPlay__functions__tools__right__autoplay {
  width: 55px;
  height: 55px;
}
.videoPlay__functions__tools__right__cc {
  width: 55px;
  height: 55px;
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
}

.videoPlay__functions__tools__right__config {
  width: 55px;
  height: 55px;
}
.fa-cog {
  color: white;
  line-height: 55px;
  font-size: 1.8rem;
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
