<template>
  <div class="search">
    <div class="search__result">
      <SearchFilter />
      <template v-if="searchResult.length >= 1">
        <template v-for="result in searchResult" :key="result.id">
          <SearchResultVideo :result="result" :myWidth="viewportWidth" />
        </template>
      </template>
      <template v-else>
        <h3>Nothing to see here!</h3>
      </template>
    </div>
  </div>
</template>

<script>
import SearchFilter from "@/components/SearchFilter.vue";
import SearchResultVideo from "@/components/SearchResultVideo.vue";
import EventService from "@/services/EventService.js";

import { onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Search",
  components: {
    SearchFilter,
    SearchResultVideo
  },
  setup() {
    const state = reactive({
      searchResult: [],
      viewportWidth: 10
    });

    let paramQuery = useRoute().query.search_query;

    EventService.getVideos().then(response => {
      let searchResult = [];
      for (let i = 0; i < response.data.length; i++) {
        //
        if (paramQuery != "") {
          if (
            response.data[i].title
              .toLowerCase()
              .includes(paramQuery.toLowerCase())
          ) {
            //
            searchResult.push(response.data[i]);
          }
        }
      }
      state.searchResult = searchResult;
    });

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
    return { ...toRefs(state) };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");

@media only screen and (min-width: 321px) {
  .search__result {
    width: 95%;
    margin: 70px auto;
    font-family: Roboto, Arial, sans-serif;
    background-color: white;
  }
}
@media only screen and (min-width: 768px) {
  .search__result {
    width: 95%;
    margin: 70px auto;
    font-family: Roboto, Arial, sans-serif;
    background-color: white;
  }
}
@media only screen and (min-width: 1224px) {
  .search__result {
    width: 1096px;
    background-color: white;
    margin: 70px auto;
    font-family: Roboto, Arial, sans-serif;
  }
}
@media only screen and (min-width: 1824px) {
  .search__result {
    width: 1096px;
    background-color: white;
    margin: 70px auto;
    font-family: Roboto, Arial, sans-serif;
  }
}
</style>
