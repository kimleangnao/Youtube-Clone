<template>
  <div class="live">
    <div class="live__component">
      <ChannelWrap
        :myWidth="viewportWidth"
        title="Live"
        :customizeProfile="true"
        titleColor="black"
      >
        <svg class="channelwrap__svg">
          <circle cx="45" cy="45" r="10" class="svg__white" />
          <path
            d="M22 35 Q 18 45, 22 55 L 18 58 Q 14 45 , 18 32 Z"
            class="svg__white"
          />
          <path
            d="M32 38 Q 28 45, 32 52 L 28 55 Q 24 45 , 28 35 Z"
            class="svg__white"
          />
          <path
            d="M68 35 Q 72 45, 68 55 L 72 58 Q 77 45 , 72 32 Z"
            class="svg__white"
          />
          <path
            d="M58 38 Q 62 45, 58 52 L 62 55 Q 66 45 , 62 35 Z"
            class="svg__white"
          />
        </svg>
      </ChannelWrap>
    </div>
    <ul class="live__navigator">
      <li
        :class="[
          home ? 'live__navigator__list--border' : 'live__navigator__list'
        ]"
        @click="switchToHome"
      >
        HOME
      </li>
      <li
        :class="[
          about ? 'live__navigator__list--border' : 'live__navigator__list'
        ]"
        @click="switchToAbout"
      >
        ABOUT
      </li>
    </ul>
  </div>
  <div class="live__content">
    <LiveHome :myWidth="viewportWidth" v-if="home" />
    <LiveAbout :myWidth="viewportWidth" v-if="about" />
  </div>
</template>

<script>
import ChannelWrap from "@/components/ChannelWrap.vue";
import LiveHome from "@/components/LiveHome.vue";
import LiveAbout from "@/components/LiveAbout.vue";

import { onMounted, reactive, toRefs } from "vue";

export default {
  name: "Live",
  components: { ChannelWrap, LiveHome, LiveAbout },
  setup() {
    const state = reactive({
      home: true,
      about: false,
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

    const switchToHome = () => {
      state.home = true;
      state.about = false;
    };
    const switchToAbout = () => {
      state.home = false;
      state.about = true;
    };

    return { ...toRefs(state), switchToHome, switchToAbout };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");

@media only screen and (min-width: 321px) {
  .live {
    margin-top: 60px;
    width: 100%;
    font-family: "Roboto", Arial, sans-serif;
    background-color: #f1f1f1;
  }

  .live__component {
    width: 90%;
    height: 90px;
    margin: 0 auto;
    padding-top: 10px;
  }

  .live__content {
    width: 90%;
    min-height: 85vh;
    margin: 0 auto;
  }
  .live__navigator {
    width: 90%;
    height: 50px;
    margin: 0 auto;
    list-style: none;
    text-align: left;
    line-height: 50px;
    padding-left: 0;
  }
}
@media only screen and (min-width: 768px) {
  .live {
    margin-top: 60px;
    width: 100%;
    font-family: "Roboto", Arial, sans-serif;
    background-color: #f1f1f1;
  }
  .live__component {
    width: 90%;
    height: 90px;
    margin: 0 auto;
    padding-top: 10px;
  }

  .live__content {
    width: 90%;
    min-height: 85vh;
    margin: 0 auto;
  }
  .live__navigator {
    width: 90%;
    height: 50px;
    margin: 0 auto;
    list-style: none;
    text-align: left;
    line-height: 50px;
    padding-left: 0;
  }
}
@media only screen and (min-width: 1224px) {
  .live {
    margin-top: 60px;
    width: 100%;
    font-family: "Roboto", Arial, sans-serif;
    background-color: #f1f1f1;
  }
  .live__component {
    width: 1100px;
    height: 90px;
    margin: 0 auto;
    padding-top: 10px;
  }
  .live__content {
    width: 1100px;
    min-height: 85vh;
    margin: 0 auto;
  }
  .live__navigator {
    width: 1100px;
    height: 50px;
    margin: 0 auto;
    list-style: none;
    text-align: left;
    line-height: 50px;
    padding-left: 0;
  }
}
@media only screen and (min-width: 1824px) {
  .live {
    margin-top: 60px;
    width: 100%;
    font-family: "Roboto", Arial, sans-serif;
    background-color: #f1f1f1;
  }
  .live__component {
    width: 1281px;
    height: 90px;
    margin: 0 auto;
    padding-top: 10px;
  }
  .live__content {
    width: 1281px;
    min-height: 85vh;
    margin: 0 auto;
  }
  .live__navigator {
    width: 1281px;
    height: 50px;
    margin: 0 auto;
    list-style: none;
    text-align: left;
    line-height: 50px;
    padding-left: 0;
  }
}

.live__navigator__list {
  display: inline-block;
  font-size: 0.9rem;
  padding: 0 35px;
  font-weight: 500;
  color: black;
}
.live__navigator__list--border {
  display: inline-block;
  font-size: 1rem;
  padding: 0 35px;
  font-weight: 500;
  color: black;
  border-bottom: 2px solid black;
}
.live__navigator__list:hover {
  cursor: pointer;
  border-bottom: 2px solid black;
}

.channelwrap__svg {
  width: 90px;
  height: 90px;
  background-color: rgb(46, 46, 46);
  border-radius: 50%;
}
.svg__white {
  fill: white;
  stroke: white;
}
</style>
