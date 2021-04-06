<template>
  <div class="movie">
    <div class="movie__frame" v-if="activeRecommendMovie">
      <img
        :src="require('@/assets/' + activeRecommendMovie.thumbnail)"
        alt="movie banner"
        class="movie__frame__image"
      />
    </div>
    <div class="movie__details" v-if="activeRecommendMovie">
      <div class="movie__details__title">
        {{ activeRecommendMovie.title }}
      </div>

      <div v-if="!viewers" class="movie__details__amount">Pay to Watch</div>
      <div
        v-else
        class="movie__details__amount movie__details__amount--watching"
      >
        {{ activeRecommendMovie.viewscount }} watching worldwide
      </div>
    </div>
  </div>
</template>

<script>
import sunset from "@/assets/sunset.jpg";

export default {
  name: "Movie",
  props: {
    viewers: {
      type: Number,
      required: false
    },
    activeRecommendMovie: Object
  },
  setup() {
    return { sunset };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.movie {
  width: 100%;
  height: 330px;
  margin-bottom: 50px;
}
.movie:hover {
  cursor: pointer;
}
.movie__frame {
  width: 100%;
  height: 280px;
}
.movie__frame__image {
  width: 100%;
  height: 100%;
  border: 1px solid lightgrey;
  object-fit: cover;
}
.movie__details {
  width: 100%;
  height: 70px;
}
.movie__details__title {
  width: 100%;
  margin-top: 10px;
  max-height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-direction: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  text-align: left;
  font-size: 1rem;
  font-family: "Roboto", Arial, sans-serif;
}
.movie__details__amount {
  width: 100%;
  height: 20px;
  line-height: 30px;
  text-align: left;
  font-size: 0.8rem;
  color: green;
  font-weight: 400;
  font-family: "Roboto", Arial, sans-serif;
}
.movie__details__amount--watching {
  color: grey;
}
</style>
