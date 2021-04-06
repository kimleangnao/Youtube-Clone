<template>
  <div class="TW">
    <div
      :class="[
        myWidth == 7
          ? 'TW__wrap--95'
          : myWidth == 8
          ? 'TW__wrap--95'
          : 'TW__wrap'
      ]"
    >
      <div class="TW_wrap__filter">
        <div class="TW_wrap__filter__category" @click="filterToMusic">
          <svg
            :class="[
              currentMusic
                ? 'TW_wrap__filter__category__svg category--active'
                : 'TW_wrap__filter__category__svg'
            ]"
          >
            <path
              d="M35 35 L 60 25 L 60 30 L 35 40"
              class="TW_wrap__filter__category__svg__white"
            />
            <path
              d="M35 47 L 59 37 L 59 40 L 35 50"
              class="TW_wrap__filter__category__svg__white"
            />
            <path
              d="M61 25 L 61 55 L 57 55 L 57 28 "
              class="TW_wrap__filter__category__svg__white"
            />
            <path
              d="M35 35 L 35 65 L 39 65 L 39 35"
              class="TW_wrap__filter__category__svg__white"
            />
            <circle
              cx="34"
              cy="62"
              r="5"
              class="TW_wrap__filter__category__svg__white"
            />
            <circle
              cx="56"
              cy="54"
              r="5"
              class="TW_wrap__filter__category__svg__white"
            />
          </svg>
          <div class="TW_wrap__filter__category__text">Music</div>
        </div>
        <div class="TW_wrap__filter__category" @click="filterToGame">
          <svg
            :class="[
              currentGame
                ? 'TW_wrap__filter__category__svg category--active'
                : 'TW_wrap__filter__category__svg'
            ]"
          >
            <path
              d="M45 55 L 25 45 L 25 35 L 35 30 L 45 35 "
              class="TW_wrap__filter__category__svg__white"
            />
            <path
              d="M 45 35 L 55 30 L 65 35 L 65 45 L 45 55"
              class="TW_wrap__filter__category__svg__lightgrey"
            />
            <path
              d="M35 35 L 35 45"
              class="TW_wrap__filter__category__svg__black"
            />
            <path
              d="M30 40 L 40 40"
              class="TW_wrap__filter__category__svg__black"
            />
            <circle
              cx="52"
              cy="42"
              r="1"
              class="TW_wrap__filter__category__svg__black"
            />
            <circle
              cx="58"
              cy="39"
              r="1"
              class="TW_wrap__filter__category__svg__black"
            />
          </svg>
          <div class="TW_wrap__filter__category__text">Gaming</div>
        </div>
        <div class="TW_wrap__filter__category" @click="filterToNews">
          <svg
            :class="[
              currentNews
                ? 'TW_wrap__filter__category__svg category--active'
                : 'TW_wrap__filter__category__svg'
            ]"
          >
            <path
              d="M25 25 L 25 65 L 53 65 L 65 55 L 65 25 Q 60 30, 55 25 Q 50 30, 45 25 
              Q 40 30, 35 25 Q 30 30, 25 25"
              class="TW_wrap__filter__category__svg__white"
            />
            <path
              d="M28 34 L 62 34 L 62 39 L 28 39Z "
              class="TW_wrap__filter__category__svg__black"
            />
            <path
              d="M28 42 L 28 60 L 50 60 L 50 42 Z"
              class="TW_wrap__filter__category__svg__lightgrey"
            />
            <path
              d="M53 42 L 62 42"
              class="TW_wrap__filter__category__svg__black"
            />
            <path
              d="M53 46 L 62 46"
              class="TW_wrap__filter__category__svg__black"
            />
            <path
              d="M53 50 L 62 50"
              class="TW_wrap__filter__category__svg__black"
            />
            <path
              d="M53 65 L 53 55 L 65 55 Z"
              class="TW_wrap__filter__category__svg__lightgrey"
            />
          </svg>
          <div class="TW_wrap__filter__category__text">News</div>
        </div>
        <div class="TW_wrap__filter__category" @click="filterToMovies">
          <svg
            :class="[
              currentMovies
                ? 'TW_wrap__filter__category__svg category--active'
                : 'TW_wrap__filter__category__svg'
            ]"
          >
            <rect
              width="50"
              height="32"
              x="20"
              y="29"
              class="TW_wrap__filter__category__svg__white"
            />
            <rect
              width="10"
              height="30"
              x="20"
              y="30"
              class="TW_wrap__filter__category__svg__lightgrey"
            />
            <rect
              width="10"
              height="30"
              x="60"
              y="30"
              class="TW_wrap__filter__category__svg__lightgrey"
            />
            <rect
              width="1"
              height="3"
              x="24"
              y="33"
              class="TW_wrap__filter__category__svg__black"
            />
            <rect
              width="1"
              height="3"
              x="24"
              y="43"
              class="TW_wrap__filter__category__svg__black"
            />
            <rect
              width="1"
              height="3"
              x="24"
              y="53"
              class="TW_wrap__filter__category__svg__black"
            />
            <rect
              width="1"
              height="3"
              x="65"
              y="33"
              class="TW_wrap__filter__category__svg__black"
            />
            <rect
              width="1"
              height="3"
              x="65"
              y="43"
              class="TW_wrap__filter__category__svg__black"
            />
            <rect
              width="1"
              height="3"
              x="65"
              y="53"
              class="TW_wrap__filter__category__svg__black"
            />
          </svg>
          <div class="TW_wrap__filter__category__text">Movies</div>
        </div>
        <div
          class="TW_wrap__filter__category"
          @click="filterToFashionAndBeauty"
        >
          <svg
            :class="[
              currentFashionAndBeauty
                ? 'TW_wrap__filter__category__svg category--active'
                : 'TW_wrap__filter__category__svg'
            ]"
          >
            <path
              d="M25 50 L 65 50 L 45 38 Z"
              class="TW_wrap__filter__category__svg__white--nofill"
            />
            <rect
              width="4"
              height="4"
              x="43"
              y="34"
              class="TW_wrap__filter__category__svg__lightgrey"
            />
            <path
              d="M45 38 L 45 30 L 50 25 L 45 20 L 40 25"
              class="TW_wrap__filter__category__svg__white--nofill"
            />
            <path
              d="M35 50 L 50 50 L 50 65 L 35 65 Z"
              class="TW_wrap__filter__category__svg__white"
            />
            <path
              d="M50 49 L 50 62 L 55 62 L 55 49"
              class="TW_wrap__filter__category__svg__lightgrey"
            />
            <path
              d="M38 65 L 38 68 L 41 68 L 41 60"
              class="TW_wrap__filter__category__svg__white"
            />
            <path
              d="M45 65 L 45 68 L 48 68 L 48 60"
              class="TW_wrap__filter__category__svg__white"
            />
          </svg>
          <div class="TW_wrap__filter__category__text">Fashion & Beauty</div>
        </div>
      </div>
      <div class="TW_wrap__result" v-for="video in videos" :key="video.id">
        <template v-if="currentMusic == true && video.category == 'music'">
          <TrendingVideo :video="video" :myWidth="myWidth" />
        </template>
        <template v-if="currentGame == true && video.category == 'game'">
          <TrendingVideo :video="video" :myWidth="myWidth" />
        </template>
        <template v-if="currentNews == true && video.category == 'news'">
          <TrendingVideo :video="video" :myWidth="myWidth" />
        </template>
        <template v-if="currentMovies == true && video.category == 'movie'">
          <TrendingVideo :video="video" :myWidth="myWidth" />
        </template>
        <template
          v-if="currentFashionAndBeauty == true && video.category == 'event'"
        >
          <TrendingVideo :video="video" :myWidth="myWidth" />
        </template>
        <!--<PromoteChannel :myWidth="myWidth" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import TrendingVideo from "@/components/TrendingVideo.vue";
import { reactive, toRefs } from "vue";
//import PromoteChannel from "@/components/PromoteChannel.vue";

export default {
  name: "TrendingWrapper",
  components: {
    TrendingVideo
    //PromoteChannel
  },
  props: {
    myWidth: {
      type: Number,
      required: true
    },
    videos: Array
  },
  setup() {
    const state = reactive({
      currentMusic: true,
      currentGame: false,
      currentNews: false,
      currentMovies: false,
      currentFashionAndBeauty: false
    });
    const filterToMusic = () => {
      state.currentMusic = true;
      state.currentGame = false;
      state.currentNews = false;
      state.currentMovies = false;
      state.currentFashionAndBeauty = false;
    };
    const filterToGame = () => {
      state.currentMusic = false;
      state.currentGame = true;
      state.currentNews = false;
      state.currentMovies = false;
      state.currentFashionAndBeauty = false;
    };
    const filterToNews = () => {
      state.currentMusic = false;
      state.currentGame = false;
      state.currentNews = true;
      state.currentMovies = false;
      state.currentFashionAndBeauty = false;
    };
    const filterToMovies = () => {
      state.currentMusic = false;
      state.currentGame = false;
      state.currentNews = false;
      state.currentMovies = true;
      state.currentFashionAndBeauty = false;
    };
    const filterToFashionAndBeauty = () => {
      state.currentMusic = false;
      state.currentGame = false;
      state.currentNews = false;
      state.currentMovies = false;
      state.currentFashionAndBeauty = true;
    };

    return {
      ...toRefs(state),
      filterToMusic,
      filterToGame,
      filterToNews,
      filterToMovies,
      filterToFashionAndBeauty
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.TW {
  width: 100%;
  height: 100%;
  margin-top: 60px;
}
.TW__wrap {
  width: 70%;
  padding-bottom: 30px;
  margin: 0 auto;
}
.TW__wrap--95 {
  width: 95%;
  padding-bottom: 30px;
  margin: 0 auto;
}
.TW_wrap__filter {
  width: 100%;
  height: 145px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.TW_wrap__filter__category {
  width: 112px;
  height: 100%;
  margin-right: 1px;
}
.TW_wrap__filter__category__svg {
  width: 90px;
  height: 90px;
  background-color: rgb(34, 34, 34);
  border-radius: 50%;
  margin-top: 10px;
}
.category--active {
  background-color: rgb(117, 212, 176);
}
.TW_wrap__filter__category__svg:hover {
  cursor: pointer;
}
.TW_wrap__filter__category__svg__white {
  fill: white;
  stroke: white;
}

.TW_wrap__filter__category__svg__white--nofill {
  fill: transparent;
  stroke: white;
  stroke-width: 3px;
}
.TW_wrap__filter__category__svg__white--nofill--1px {
  fill: transparent;
  stroke: white;
  stroke-width: 1px;
}

.TW_wrap__filter__category__svg__lightgrey {
  fill: lightgrey;
  stroke: lightgrey;
}
.TW_wrap__filter__category__svg__black {
  fill: black;
  stroke: black;
  stroke-width: 2px;
}
.TW_wrap__filter__category__text {
  font-family: Roboto, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
}
</style>
