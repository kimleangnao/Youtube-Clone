<template>
  <div class="search">
    <div class="search__result">
      <SearchFilter />
      <SearchResultVideo :myWidth="viewportWidth" />
      <SearchResultVideo :myWidth="viewportWidth" />
      <SearchResultVideo :myWidth="viewportWidth" />
      <SearchResultVideo :myWidth="viewportWidth" />
      <SearchResultVideo :myWidth="viewportWidth" />
    </div>
  </div>
</template>

<script>
import SearchFilter from "@/components/SearchFilter.vue";
import SearchResultVideo from "@/components/SearchResultVideo.vue";
import { onMounted, reactive, toRefs } from "vue";

export default {
  name: "Search",
  components: {
    SearchFilter,
    SearchResultVideo
  },
  setup() {
    const state = reactive({
      viewportWidth: 10
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
  }
}
@media only screen and (min-width: 768px) {
  .search__result {
    width: 95%;

    margin: 70px auto;
    font-family: Roboto, Arial, sans-serif;
  }
}
@media only screen and (min-width: 1224px) {
  .search__result {
    width: 1096px;

    margin: 70px auto;
    font-family: Roboto, Arial, sans-serif;
  }
}
@media only screen and (min-width: 1824px) {
  .search__result {
    width: 1096px;

    margin: 70px auto;
    font-family: Roboto, Arial, sans-serif;
  }
}
</style>
