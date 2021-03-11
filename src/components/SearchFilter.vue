<template>
  <div class="searchFilter">
    <div class="searchFilter__filter">
      <div class="searchFilter__filter__wrap" @click="switchFilterOption">
        <svg class="searchFilter__filter__wrap__svg">
          <path
            d="M5 10 L 25 10"
            class="searchFilter__filter__wrap__svg__grey"
          />
          <path
            d="M28 13 L 28 7"
            class="searchFilter__filter__wrap__svg__grey"
          />
          <path
            d="M28 10 L 35 10"
            class="searchFilter__filter__wrap__svg__grey"
          />

          <path
            d="M5 19 L 12 19"
            class="searchFilter__filter__wrap__svg__grey"
          />
          <path
            d="M12 22 L 12 16"
            class="searchFilter__filter__wrap__svg__grey"
          />
          <path
            d="M15 19 L 35 19"
            class="searchFilter__filter__wrap__svg__grey"
          />

          <path
            d="M5 28 L 19 28"
            class="searchFilter__filter__wrap__svg__grey"
          />
          <path
            d="M19 31 L 19 25"
            class="searchFilter__filter__wrap__svg__grey"
          />
          <path
            d="M22 28 L 35 28"
            class="searchFilter__filter__wrap__svg__grey"
          />
        </svg>
        <div class="searchFilter__filter__wrap__text">
          FILTER
        </div>
      </div>
    </div>
    <div
      :class="[
        filterOption ? 'searchFilter__types' : 'searchFilter__types__hide'
      ]"
    >
      <div class="searchFilter__types__uploadDate">
        <div class="searchFilter__types__uploadDate__title">
          UPLOAD DATE
        </div>
        <div class="searchFilter__types__uploadDate__list">
          Last hour
        </div>
        <div class="searchFilter__types__uploadDate__list">
          Today
        </div>
        <div class="searchFilter__types__uploadDate__list">
          This week
        </div>
        <div class="searchFilter__types__uploadDate__list">
          This month
        </div>
        <div class="searchFilter__types__uploadDate__list">
          This year
        </div>
      </div>
      <div class="searchFilter__types__categories">
        <div class="searchFilter__types__categories__title">
          TYPE
        </div>
        <div class="searchFilter__types__categories__list">
          Video
        </div>
        <div class="searchFilter__types__categories__list">
          Channel
        </div>
        <div class="searchFilter__types__categories__list">
          Playlist
        </div>
        <div class="searchFilter__types__categories__list">
          Movie
        </div>
        <div class="searchFilter__types__categories__list">
          Show
        </div>
      </div>
      <div class="searchFilter__types__duration">
        <div class="searchFilter__types__duration__title">
          DURATION
        </div>
        <div class="searchFilter__types__duration__list">
          Short (&lt;4 minutes)
        </div>
        <div class="searchFilter__types__duration__list">
          Long (&gt;20 minutes)
        </div>
      </div>
      <div class="searchFilter__types__features">
        <div class="searchFilter__types__features__title">
          FEATURES
        </div>
        <div class="searchFilter__types__features__list">
          Live
        </div>
        <div class="searchFilter__types__features__list">
          4K
        </div>
        <div class="searchFilter__types__features__list">
          HD
        </div>
        <div class="searchFilter__types__features__list">
          Subtitles/CC
        </div>
        <div class="searchFilter__types__features__list">
          Creative Commons
        </div>
        <div class="searchFilter__types__features__list">360<sup>o</sup></div>
        <div class="searchFilter__types__features__list">
          VR180
        </div>
        <div class="searchFilter__types__features__list">
          3D
        </div>
        <div class="searchFilter__types__features__list">
          HDR
        </div>
        <div class="searchFilter__types__features__list">
          Location
        </div>
        <div class="searchFilter__types__features__list">
          Purchased
        </div>
      </div>
      <div class="searchFilter__types__sortby">
        <div class="searchFilter__types__sortby__title">
          SORT BY
        </div>
        <div class="searchFilter__types__sortby__list bold ">
          Relevance
        </div>
        <div class="searchFilter__types__sortby__list">
          Upload date
        </div>
        <div class="searchFilter__types__sortby__list">
          View count
        </div>
        <div class="searchFilter__types__sortby__list">
          Rating
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "SearchFilter",
  props: {
    myWidth: {
      type: Number,
      required: false
    }
  },
  setup() {
    const state = reactive({
      filterOption: false
    });
    const switchFilterOption = () => {
      state.filterOption = !state.filterOption;
    };
    return {
      ...toRefs(state),
      switchFilterOption
    };
  }
};
</script>

<style scoped>
.searchFilter {
  width: 100%;
  border-bottom: 1px solid lightgrey;
}
.searchFilter__filter {
  width: 100%;
  min-height: 40px;
}
.searchFilter__filter__wrap {
  width: 100px;
  height: 100%;
  display: inline-block;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.searchFilter__filter__wrap:hover {
  cursor: pointer;
}
.searchFilter__filter__wrap:active {
  background-color: lightgrey;
}
.searchFilter__filter__wrap__svg {
  display: inline-block;
  width: 40px;
  height: 40px;
}
.searchFilter__filter__wrap__svg__grey {
  fill: grey;
  stroke: grey;
  stroke-width: 2px;
}
.searchFilter__filter__wrap__text {
  line-height: 40px;
  font-weight: 500;
  font-size: 0.95rem;
  font-family: "Roboto", Arial, sans-serif;
  margin-left: 7px;
}
.searchFilter__types {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-bottom: 20px;
}
.searchFilter__types__uploadDate {
  width: 18%;
}
.searchFilter__types__categories {
  width: 18%;
}
.searchFilter__types__duration {
  width: 18%;
}
.searchFilter__types__features {
  width: 18%;
}
.searchFilter__types__sortby {
  width: 18%;
}

.searchFilter__types__uploadDate__title,
.searchFilter__types__categories__title,
.searchFilter__types__duration__title,
.searchFilter__types__features__title,
.searchFilter__types__sortby__title {
  line-height: 50px;
  width: 100%;
  min-height: 50px;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: left;
  border-bottom: 1px solid lightgrey;
}
.searchFilter__types__uploadDate__list,
.searchFilter__types__categories__list,
.searchFilter__types__duration__list,
.searchFilter__types__features__list,
.searchFilter__types__sortby__list {
  text-align: left;
  width: 100%;
  height: 30px;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  margin: 15px 0;
}
.bold {
  font-weight: 500;
}
.searchFilter__types__hide {
  display: none;
}
</style>
