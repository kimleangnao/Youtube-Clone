<template>
  <div class="mb" v-if="recommendMovies && !viewAll">
    <WrapComponent
      :myWidth="myWidth"
      title="Recommended movies for you"
      :playall="false"
      :prevButton="recommendActiveIndex != 0 ? true : false"
      :nextButton="
        recommendMovies.length - 1 == recommendActiveIndex ? false : true
      "
      componentType="movie"
      :prevRecommendMovies="prevRecommendMovies"
      :nextRecommendMovies="nextRecommendMovies"
    >
      <template
        v-for="activeRecommendMovie in activeRecommendMovies"
        :key="activeRecommendMovie.id"
      >
        <Movie
          :activeRecommendMovie="activeRecommendMovie"
          @click="goToMovie(activeRecommendMovie.id)"
        />
      </template>
    </WrapComponent>
    <WrapComponent
      :myWidth="myWidth"
      title="Free To watch"
      :playall="false"
      :prevButton="false"
      :nextButton="false"
      componentType="movie"
      :viewall="true"
      :switchViewAll="switchViewAll"
    >
      <template
        v-for="activeRecommendMovie in freeMoviesActiveSlider"
        :key="activeRecommendMovie.id"
      >
        <Movie
          :activeRecommendMovie="activeRecommendMovie"
          @click="goToMovie(activeRecommendMovie.id)"
        />
      </template>
    </WrapComponent>
    <WrapComponent
      :myWidth="myWidth"
      title="Top Selling"
      :playall="false"
      :nextButton="false"
      componentType="movie"
    >
      <template
        v-for="activeRecommendMovie in sellMovieActiveSlider"
        :key="activeRecommendMovie.id"
      >
        <Movie
          :activeRecommendMovie="activeRecommendMovie"
          @click="goToMovie(activeRecommendMovie.id)"
        />
      </template>
    </WrapComponent>
  </div>
  <div class="viewAll" v-if="viewAll">
    <h3 class="viewAll__title">Free movies</h3>
    <WrapComponent
      :myWidth="myWidth"
      title="Top Selling"
      :playall="false"
      :nextButton="false"
      componentType="movie"
    >
      <template
        v-for="activeRecommendMovie in freeMovies"
        :key="activeRecommendMovie.id"
      >
        <Movie
          :activeRecommendMovie="activeRecommendMovie"
          @click="goToMovie(activeRecommendMovie.id)"
        />
      </template>
    </WrapComponent>
  </div>
</template>

<script>
import WrapComponent from "@/components/WrapComponent.vue";
import Movie from "@/components/Movie.vue";

export default {
  name: "MovieBrowse",
  components: { WrapComponent, Movie },
  props: {
    myWidth: {
      type: Number,
      required: false
    },
    activeRecommendMovies: Array,
    prevRecommendMovies: Function,
    nextRecommendMovies: Function,
    recommendActiveIndex: Number,
    recommendMovies: Array,
    freeMoviesActiveSlider: Array,
    freeMovieDivide: Array,
    freeMoviesActiveIndex: Number,
    switchViewAll: Function,
    viewAll: Boolean,
    freeMovies: Array,
    sellMovieDivide: Array,
    sellMovieActiveIndex: Number,
    sellMovieActiveSlider: Array
  },
  setup() {
    let goToMovie = movieId => {
      window.location.href = "/watch/" + movieId;
    };
    return { goToMovie };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.mb {
  width: 100%;
  font-family: "Roboto", Arial, sans-serif;
}
.mb__title {
  width: 100%;
  height: 50px;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  line-height: 50px;
}
.viewAll__title {
  text-align: left;
  font-size: 1.2rem;
}
.viewAll {
  width: 100%;
}
</style>
