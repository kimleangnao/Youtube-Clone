<template>
  <div class="movies">
    <div class="movies__title">
      <img :src="sunset" class="movies__title__image" alt="movie logo" />

      <div class="movies__title__text">
        <div class="movies__title__text__title">Movies & Shows</div>
        <div class="movies__title__text__subTitle">
          Watch the lastest and greatest hits
        </div>
      </div>
    </div>
    <ul class="movies__navigator">
      <li
        :class="[
          browse
            ? 'movies__navigator__list movies__navigator__list--border__bottom'
            : 'movies__navigator__list'
        ]"
        @click="switchToBrowse"
      >
        BROWSE
      </li>
      <li
        :class="[
          purchased
            ? 'movies__navigator__list movies__navigator__list--border__bottom'
            : 'movies__navigator__list'
        ]"
        @click="switchToPurchased"
      >
        PURCHASED
      </li>
    </ul>
    <div class="movies__components">
      <MovieBrowse :myWidth="viewportWidth" v-if="browse" />
      <Purchased :myWidth="viewportWidth" v-if="purchased" />
    </div>
  </div>
</template>

<script>
import MovieBrowse from "@/components/MovieBrowse.vue";
import Purchased from "@/components/Purchased.vue";
import sunset from "@/assets/sunset.jpg";
import { onMounted, reactive, toRefs } from "vue";

export default {
  name: "Movies",
  components: { MovieBrowse, Purchased },

  setup() {
    const state = reactive({
      browse: true,
      purchased: false,
      viewportWidth: 10
    });

    const switchToBrowse = () => {
      state.browse = true;
      state.purchased = false;
    };

    const switchToPurchased = () => {
      state.browse = false;
      state.purchased = true;
    };

    onMounted(() => {
      let viewWidth = document.documentElement.clientWidth;
      if (viewWidth >= 1824) {
        state.viewportWidth = 10;
      } else if (viewWidth >= 1224) {
        state.viewportWidth = 9;
      } else if (viewWidth >= 768) {
        state.viewportWidth = 8;
      } else if (viewWidth >= 321) {
        state.viewportWidth = 7;
      }
    });
    const checkViewport = () => {
      //
      window.addEventListener("resize", function() {
        let viewWidth = document.documentElement.clientWidth;
        if (viewWidth >= 1824) {
          state.viewportWidth = 10;
        } else if (viewWidth >= 1224) {
          state.viewportWidth = 9;
        } else if (viewWidth >= 768) {
          state.viewportWidth = 8;
        } else if (viewWidth >= 321) {
          state.viewportWidth = 7;
        }
      });
    };
    checkViewport();

    return { ...toRefs(state), switchToBrowse, switchToPurchased, sunset };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.movies {
  width: 68%;
  margin: 0 auto;
  margin-top: 60px;
  color: black;
}
.movies__title {
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.movies__title__image {
  width: 80px;
  height: 80px;
  background-color: rgb(48, 47, 47);
  border-radius: 50%;
  object-fit: cover;
}
.movies__title__text {
  width: 80%;
  height: 100%;
  text-align: left;
  font-family: "Roboto", Arial, sans-serif;
}
.movies__title__text__title {
  width: 100%;
  height: 50%;
  line-height: 70px;
  font-size: 1.5rem;
  margin-left: 20px;
}
.movies__title__text__subTitle {
  width: 100%;
  height: 30%;
  font-size: 0.9rem;
  margin-left: 20px;
}

.movies__navigator {
  width: 100%;
  height: 50px;
  list-style: none;
  text-align: left;
  padding-left: 0;
  line-height: 50px;
  font-family: "Roboto", Arial, sans-serif;
}
.movies__navigator__list {
  display: inline-block;
  font-size: 0.9rem;
  padding: 0 35px;
  font-weight: 500;
  color: grey;
}
.movies__navigator__list--border__bottom {
  border-bottom: 2px solid black;
  color: black;
}
.movies__navigator__list:hover {
  cursor: pointer;
  border-bottom: 2px solid black;
  color: black;
}
.movies__components {
  width: 100%;
}
</style>
