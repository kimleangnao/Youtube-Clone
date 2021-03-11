<template>
  <div class="history">
    <div class="history__navigate">
      <div class="history__navigate__wrap">
        <div
          :class="[
            searchInputFocus
              ? 'history__navigate__wrap__search border--bottom--2px'
              : 'history__navigate__wrap__search'
          ]"
        >
          <button class="history__navigate__wrap__search__button">
            <i class="fas fa-search"></i>
          </button>
          <form class="history__navigate__wrap__search__form">
            <input
              type="search"
              class="history__navigate__wrap__search__form__input"
              name="search"
              placeholder="Search watch history"
              @focus="searchInputFocus = true"
              @blur="searchInputFocus = false"
            />
          </form>
        </div>
        <form class="history__navigate__wrap__types">
          <div class="history__navigate__wrap__types__choice">History type</div>
          <div class="history__navigate__wrap__types__choice">
            <label
              for="watchhistory"
              class="history__navigate__wrap__types__choice__label"
              >Watch history</label
            >
            <input
              type="radio"
              id="watchhistory"
              name="history"
              value="Watch history"
              class="history__navigate__wrap__types__choice__input"
              checked
            />
          </div>
          <div class="history__navigate__wrap__types__choice">
            <label
              for="community"
              class="history__navigate__wrap__types__choice__label"
              >Community</label
            >
            <input
              type="radio"
              id="community"
              name="history"
              value="Watch history"
              class="history__navigate__wrap__types__choice__input"
            />
          </div>
        </form>
        <div class="history__navigate__wrap__manage">
          <div class="history__navigate__wrap__manage__icon">
            <i class="fas fa-trash"></i>
          </div>
          <div class="history__navigate__wrap__manage__text">
            CLEAR ALL WATCH HISTORY
          </div>
        </div>
        <div class="history__navigate__wrap__manage">
          <div class="history__navigate__wrap__manage__icon">
            <i class="far fa-pause-circle"></i>
          </div>
          <div class="history__navigate__wrap__manage__text">
            PAUSE WATCH HISTORY
          </div>
        </div>
        <div class="history__navigate__wrap__manage">
          <div class="history__navigate__wrap__manage__icon">
            <i class="fas fa-cog"></i>
          </div>
          <div class="history__navigate__wrap__manage__text">
            MANAGE ALL HISTORY
          </div>
        </div>
        <div class="history__navigate__wrap__lists">
          Watch and search history
        </div>
        <div class="history__navigate__wrap__lists">
          Comments
        </div>
        <div class="history__navigate__wrap__lists">
          Live chat
        </div>
      </div>
    </div>
    <div class="history__wrap">
      <div class="history__wrap__title">Watch history</div>
      <div class="history__wrap__date">Today</div>
      <div class="history__wrap__component">
        <TrendingVideo
          :fromHistoryWidth="viewportWidth"
          :myWidth="viewportWidth"
        />
        <TrendingVideo
          :fromHistoryWidth="viewportWidth"
          :myWidth="viewportWidth"
        />
        <TrendingVideo
          :fromHistoryWidth="viewportWidth"
          :myWidth="viewportWidth"
        />
        <TrendingVideo
          :fromHistoryWidth="viewportWidth"
          :myWidth="viewportWidth"
        />
        <TrendingVideo
          :fromHistoryWidth="viewportWidth"
          :myWidth="viewportWidth"
        />
        <TrendingVideo
          :fromHistoryWidth="viewportWidth"
          :myWidth="viewportWidth"
        />
        <TrendingVideo
          :fromHistoryWidth="viewportWidth"
          :myWidth="viewportWidth"
        />
        <TrendingVideo
          :fromHistoryWidth="viewportWidth"
          :myWidth="viewportWidth"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TrendingVideo from "@/components/TrendingVideo.vue";
import { onMounted, reactive, toRefs } from "vue";
export default {
  name: "History",
  setup() {
    const state = reactive({
      searchInputFocus: false,
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
    return {
      ...toRefs(state),
      TrendingVideo
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

@media only screen and (min-width: 321px) {
  .history {
    width: 100%;
    font-family: Roboto, Arial, sans-serif;
    margin: 0 auto;
  }
  .history__navigate {
    width: 100%;
    margin-top: 60px;
    height: 60vh;
    background-color: #f1f1f1;
  }
  .history__wrap {
    width: 90%;
    margin: 0 auto;
  }
  .history__wrap__component {
    width: 100%;
  }
}
@media only screen and (min-width: 768px) {
  .history {
    width: 100%;
    font-family: Roboto, Arial, sans-serif;
    margin: 0 auto;
  }
  .history__navigate {
    position: fixed;
    width: 441px;
    margin-top: 0px;
    height: 100vh;
    background-color: #f1f1f1;
    right: 0;
    z-index: 10;
  }
  .history__wrap {
    width: 90%;
    margin: 60px 20px;
  }
  .history__wrap__component {
    width: 100%;
  }
}
@media only screen and (min-width: 1224px) {
  .history {
    width: 1224px;
    font-family: Roboto, Arial, sans-serif;
    margin: 0 auto;
  }
  .history__navigate {
    position: fixed;
    width: 441px;
    margin-top: 0px;
    height: 100vh;
    background-color: #f1f1f1;
    right: 0;
    z-index: 10;
  }
  .history__wrap {
    width: 80%;
    margin: 60px 20px;
  }
  .history__wrap__component {
    width: 100%;
  }
}
@media only screen and (min-width: 1824px) {
  .history {
    width: 1281px;
    font-family: Roboto, Arial, sans-serif;
    margin: 0 auto;
  }
  .history__navigate {
    position: fixed;
    width: 441px;
    margin-top: 0px;
    height: 100vh;
    background-color: #f1f1f1;
    right: 0;
    z-index: 10;
  }
  .history__wrap {
    width: 1281px;
    margin: 60px 20px;
  }
  .history__wrap__component {
    width: 100%;
  }
}

.history__wrap__title {
  width: 814px;
  height: 50px;
  font-weight: 500;
  text-align: left;
  line-height: 60px;
}
.history__wrap__date {
  width: 814px;
  height: 50px;
  text-align: left;
  line-height: 50px;
}

.history__navigate__wrap {
  width: 90%;
  margin: 20px auto;
}
.history__navigate__wrap__search {
  width: 65%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid black;
}
.history__navigate__wrap__search__button {
  cursor: pointer;
  border: 1px solid #f1f1f1;
}
.history__navigate__wrap__search__button:focus {
  outline: 0px;
}
.history__navigate__wrap__search__form {
  width: 90%;
  height: 100%;
  background-color: red;
}
.history__navigate__wrap__search__form__input {
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
}
.history__navigate__wrap__search__form__input:focus {
  outline: 0px;
}

.history__navigate__wrap__types {
  width: 100%;
  height: 150px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 30px;
}
.history__navigate__wrap__types__choice {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgb(116, 108, 108);
  line-height: 50px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.history__navigate__wrap__types__choice__label {
  display: block;
  width: 90%;
  height: 100%;
  line-height: 50px;
  font-size: 0.95rem;
}
.history__navigate__wrap__types__choice__input {
  width: 10%;
  height: 40%;
}

.history__navigate__wrap__manage {
  width: 80%;
  height: 40px;
  margin-top: 15px;
  display: flex;
  flex-flow: row nowrap;
}
.history__navigate__wrap__manage:hover {
  cursor: pointer;
}

.history__navigate__wrap__manage__icon {
  display: inline-block;
  width: 15%;
  height: 100%;
  line-height: 40px;
  font-size: 1.5rem;
  color: rgb(34, 33, 33);
}
.history__navigate__wrap__manage__icon .fas {
  line-height: 40px;
  font-size: 1.5rem;
  color: rgb(34, 33, 33);
}
.history__navigate__wrap__manage__text {
  width: 85%;
  height: 100%;
  line-height: 40px;
  text-align: left;
  font-weight: 500;
  font-size: 0.9rem;
}

.history__navigate__wrap__lists {
  text-align: left;
  margin-left: 12%;
  margin-top: 20px;
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
}

.border--bottom--2px {
  border-bottom: 2px solid black;
}
</style>
