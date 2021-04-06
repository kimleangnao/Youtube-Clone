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
      <MovieBrowse
        :recommendActiveIndex="recommendActiveIndex"
        :recommendMovies="recommendMovies"
        :activeRecommendMovies="activeRecommendMovies"
        :prevRecommendMovies="prevRecommendMovies"
        :nextRecommendMovies="nextRecommendMovies"
        :freeMovies="freeMovies"
        :freeMoviesActiveSlider="freeMoviesActiveSlider"
        :freeMovieDivide="freeMovieDivide"
        :freeMoviesActiveIndex="freeMoviesActiveIndex"
        :sellMovieDivide="sellMovieDivide"
        :sellMovieActiveIndex="sellMovieActiveIndex"
        :sellMovieActiveSlider="sellMovieActiveSlider"
        :myWidth="viewportWidth"
        :switchViewAll="switchViewAll"
        :viewAll="viewAll"
        v-if="browse"
      />
      <Purchased :myWidth="viewportWidth" v-if="purchased" />
    </div>
  </div>
</template>

<script>
import MovieBrowse from "@/components/MovieBrowse.vue";
import Purchased from "@/components/Purchased.vue";
import sunset from "@/assets/sunset.jpg";
import EventService from "@/services/EventService.js";

import { onMounted, reactive, toRefs } from "vue";

export default {
  name: "Movies",
  components: { MovieBrowse, Purchased },

  setup() {
    const state = reactive({
      browse: true,
      purchased: false,
      viewportWidth: 10,
      movies: [],
      activeRecommendMovies: [],
      recommendMovies: [],
      recommendActiveIndex: 0,
      freeMovies: [],
      freeMoviesActiveSlider: [],
      freeMovieDivide: [],
      freeMoviesActiveIndex: 0,
      viewAll: false,
      sellMovies: [],
      sellMovieDivide: [],
      sellMovieActiveIndex: 0,
      sellMovieActiveSlider: []
    });

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

    EventService.getMovies().then(response => {
      //we got the movies
      state.movies = response.data;
      console.log(response.data);
      divideUpRecommendMovie();
      //get the one that is only free, price = 0
      let freeMovies = [];
      for (let i = 0; i < response.data.length; i++) {
        //
        if (response.data[i].price == 0) {
          freeMovies.push(response.data[i]);
        }
      }
      state.freeMovies = freeMovies;

      console.log("free Movies:", state.freeMovies);
      divideupFreeMovies();

      let sellMovies = [];
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].price > 0) {
          sellMovies.push(response.data[i]);
        }
      }

      //sort
      let sortedSellMovies = mergeSort(sellMovies);
      console.log("sortedSellMovies:", sortedSellMovies);

      state.sellMovies = sortedSellMovies;
      console.log("sell Movies:", state.sellMovies);
      divideupSellMovies();
    });

    function mergeSort(giveArray) {
      //if our array is less than 2, then there is nothing to sort, just return that
      if (giveArray.length < 2) {
        return giveArray;
      }

      //sort in here
      //find mid point
      let midIndex = Math.floor(giveArray.length / 2);

      let left = giveArray.slice(0, midIndex);
      let right = giveArray.slice(midIndex);

      const sortedLeft = mergeSort(left);
      const sortedRight = mergeSort(right);

      const mergeSortedArray = [];
      let sortedLeftIndex = 0;
      let sortedRightIndex = 0;

      while (mergeSortedArray.length < left.length + right.length) {
        //we merge in here
        //now we need to detect if the left or the right side run out of index

        //if the leftIndex is less than sortedLeft.length
        //if the right side is run out
        //or if the sortedLeft[index] < sortedRight[index]
        if (
          sortedLeftIndex < sortedLeft.length &&
          (sortedRight.length == sortedRightIndex ||
            sortedLeft[sortedLeftIndex].viewscount >
              sortedRight[sortedRightIndex].viewscount)
        ) {
          //left[index] < right[index]
          //add that number to mergeSortedArray
          mergeSortedArray.push(sortedLeft[sortedLeftIndex]);
          //and +1 to sortedLeftIndex
          //bcause we have one less number in the left index
          sortedLeftIndex += 1;
        } else {
          //that mean the left[index] > right[index]
          mergeSortedArray.push(sortedRight[sortedRightIndex]);
          //+1 to right
          sortedRightIndex += 1;
        }
      }

      return mergeSortedArray;
    }

    //we have to be awre of the viewport
    //make sure that what we display in gropu in recommendMovie is base of the viewport

    const divideUpRecommendMovie = () => {
      //
      if (state.viewportWidth == 10) {
        //10 = 6 at a time
        //so each array have 6 movies
        let count = 0;
        let currentMoviesArray = [];

        for (let i = 0; i < state.movies.length; i++) {
          //
          if (count < 5) {
            //
            currentMoviesArray.push(state.movies[i]);
            count++;
          } else if (count == 5) {
            currentMoviesArray.push(state.movies[i]);
            state.recommendMovies.push(currentMoviesArray);
            count = 0;
            currentMoviesArray = [];
          }
        }
      }
      state.recommendActiveIndex = 0;
      state.activeRecommendMovies =
        state.recommendMovies[state.recommendActiveIndex];
      console.log(state.activeRecommendMovies);
    };

    const divideupFreeMovies = () => {
      if (state.viewportWidth == 10) {
        let count = 0;
        let currentMovies = [];
        for (let i = 0; i < state.freeMovies.length; i++) {
          if (count < 5) {
            currentMovies.push(state.freeMovies[i]);
            count++;
          } else if (count == 5) {
            currentMovies.push(state.freeMovies[i]);
            state.freeMovieDivide.push(currentMovies);
            count = 0;
            currentMovies = [];
          }
        }
        state.freeMoviesActiveIndex = 0;
        state.freeMoviesActiveSlider =
          state.freeMovieDivide[state.freeMoviesActiveIndex];
        console.log("active free movies:", state.freeMoviesActiveSlider);
      }
    };

    const divideupSellMovies = () => {
      if (state.viewportWidth == 10) {
        let count = 0;
        let currentMovies = [];
        for (let i = 0; i < state.sellMovies.length; i++) {
          if (count < 5) {
            currentMovies.push(state.sellMovies[i]);
            count++;
          } else if (count == 5) {
            currentMovies.push(state.sellMovies[i]);
            state.sellMovieDivide.push(currentMovies);
            count = 0;
            currentMovies = [];
          }
        }

        state.sellMovieActiveIndex = 0;
        state.sellMovieActiveSlider =
          state.sellMovieDivide[state.sellMovieActiveIndex];
        console.log("sell movie slider:", state.sellMovieActiveSlider);
      }
    };

    const switchToBrowse = () => {
      state.browse = true;
      state.purchased = false;
      state.viewAll = false;
    };

    const switchToPurchased = () => {
      state.browse = false;
      state.purchased = true;
    };

    onMounted(() => {});
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

    const nextRecommendMovies = () => {
      console.log("Next Recommend!");
      if (state.recommendMovies.length - 1 > state.recommendActiveIndex) {
        console.log("pass 1");
        state.recommendActiveIndex++;
        console.log(state.recommendActiveIndex);
        state.activeRecommendMovies =
          state.recommendMovies[state.recommendActiveIndex];
        console.log(state.activeRecommendMovies);
      }
    };

    const prevRecommendMovies = () => {
      console.log("Prev Recommend!");
      if (state.recommendActiveIndex != 0) {
        console.log("pass 1");
        state.recommendActiveIndex--;
        console.log(state.recommendActiveIndex);
        state.activeRecommendMovies =
          state.recommendMovies[state.recommendActiveIndex];
        console.log(state.activeRecommendMovies);
      }
    };

    const switchViewAll = () => {
      state.viewAll = !state.viewAll;
    };

    return {
      ...toRefs(state),
      switchToBrowse,
      switchToPurchased,
      sunset,
      nextRecommendMovies,
      prevRecommendMovies,
      switchViewAll
    };
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
