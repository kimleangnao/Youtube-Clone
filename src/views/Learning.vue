<template>
  <div class="learning">
    <img :src="jungle" class="learning__img" alt="banner video" />
    <div class="learning__title">
      Mission Overview: NASA's Perseverance Mars Rover
    </div>
    <div class="learning__channelInfo">
      NASA Jet Propulsion Laboratory &bullet; 400K views &bullet; 6 months ago
    </div>
    <button class="learning__watch">WATCH</button>
    <div class="learning__subnavi">
      <img :src="jungle" class="learning__subnavi__box" alt="sub nav image" />
      <img :src="jungle" class="learning__subnavi__box" alt="sub nav image" />
      <img :src="jungle" class="learning__subnavi__box" alt="sub nav image" />
      <img :src="jungle" class="learning__subnavi__box" alt="sub nav image" />
      <img :src="jungle" class="learning__subnavi__box" alt="sub nav image" />
    </div>
  </div>
  <div class="learning__channel">
    <ChannelWrap
      :myWidth="viewportWidth"
      titleColor="black"
      title="Learning"
      :customizeProfile="true"
      :goBackToSection="goBackToSection"
    >
      <svg class="learning__channel__svg">
        <circle cx="40" cy="35" r="20" class="svg__white" />
        <path d="M30 53 L 50 53 L 50 60 L 30 60" class="svg__white" />
        <path d="M30 56 L 50 56 Z" class="svg__black" />
        <circle cx="36" cy="35" r="2" class="svg__black" />
        <circle cx="44" cy="35" r="2" class="svg__black" />
        <path d="M37 35 L 37 56 Z" class="svg__black" />
        <path d="M43 35 L 43 56 Z" class="svg__black" />
      </svg>
    </ChannelWrap>
  </div>
  <div class="learning__content">
    <template v-if="viewAll">
      <WrapComponent
        :myWidth="viewportWidth"
        title="Helpful videos to keep you moving forwards"
        subTitle="Enjoy "
        :nextButton="false"
        :playall="false"
        :viewall="false"
      >
        <template v-for="video in videos" :key="video.id">
          <PromoteVideo
            :titleColor="false"
            :channelColor="false"
            :infoColor="false"
            :video="video"
            :userId="video.userId"
          />
        </template>
      </WrapComponent>
    </template>
    <template v-if="!viewAll">
      <WrapComponent
        :myWidth="viewportWidth"
        title="Tips for Studying From Home"
        subTitle="From room evironment setting to study methods, find the study tips that works best for you"
        :nextButton="false"
        :playall="false"
        :viewall="true"
        :switchViewAll="switchAll"
      >
        <template v-for="tip in tips" :key="tip.id">
          <PromoteVideo
            :titleColor="false"
            :channelColor="false"
            :infoColor="false"
            :video="tip"
            :userId="tip.userId"
          />
        </template>
      </WrapComponent>

      <WrapComponent
        :myWidth="viewportWidth"
        title="CS50's Introduction to Game Development"
        subTitle="Learning objectives This course picks up where Harvard University's CS50 leaves off, focusing on the development of 2D interactive games. Students explore the design of such childhood game as"
        :nextButton="false"
      >
        <template v-for="video in CS50" :key="video.id">
          <PromoteVideo
            :titleColor="false"
            :channelColor="false"
            :infoColor="false"
            :video="video"
            :userId="video.userId"
          />
        </template>
      </WrapComponent>

      <WrapComponent
        :myWidth="viewportWidth"
        title="How much sleep do we really need?"
        subTitle="Whether you sleep 4,6 or 8 hours a night, this playlist will help you determine what your body needs and why its important to keep yourself refreshed."
        :nextButton="false"
      >
        <template v-for="video in random" :key="video.id">
          <PromoteVideo
            :titleColor="false"
            :channelColor="false"
            :infoColor="false"
            :video="video"
            :userId="video.userId"
          />
        </template>
      </WrapComponent>
    </template>
  </div>
</template>

<script>
import ChannelWrap from "@/components/ChannelWrap.vue";
import WrapComponent from "@/components/WrapComponent.vue";
import PromoteVideo from "@/components/PromoteVideo.vue";
import EventService from "@/services/EventService.js";

import jungle from "@/assets/jungle.jpg";
import { onMounted, reactive, toRefs } from "vue";
export default {
  name: "Learning",
  components: { ChannelWrap, WrapComponent, PromoteVideo },
  setup() {
    const state = reactive({
      viewAll: false,
      searchInputFocus: false,
      viewportWidth: 10,
      videos: [],
      CS50: [],
      random: [],
      tips: []
    });
    EventService.getLearning().then(response => {
      state.videos = response.data;
      let random = [];
      let CS50 = [];
      let tips = [];
      for (let i = 0; i < response.data.length; i++) {
        //
        if (response.data[i].category == "CS50") {
          CS50.push(response.data[i]);
        } else if (response.data[i].category == "tips") {
          tips.push(response.data[i]);
        } else if (response.data[i].category == "random") {
          random.push(response.data[i]);
        }
      }
      state.CS50 = CS50;
      state.random = random;
      state.tips = tips;
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
    const goBackToSection = () => {
      window.location.href = "/learning";
    };
    const switchAll = () => {
      state.viewAll = true;
    };
    return { ...toRefs(state), jungle, switchAll, goBackToSection };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");

@media only screen and (min-width: 321px) {
  .learning {
    width: 100%;
    height: 450px;
    background-color: #f1f1f1;
    position: relative;
    font-family: "Roboto", Arial, sans-serif;
    margin-top: 60px;
  }
  .learning__channel {
    width: 90%;
    height: 90px;
    margin: 0 auto;
    padding: 20px 0;
  }
  .learning__content {
    width: 90%;
    background-color: #f9f9f9;
    color: black;
    margin: 0 auto;
  }
  .learning__title {
    color: white;
    position: absolute;
    font-size: 2.5rem;
    left: 15%;
    width: 70%;
    text-align: left;
    top: 28%;
    font-weight: 500;
  }
  .learning__channelInfo {
    color: white;
    position: absolute;
    left: 15%;
    top: 70%;
    text-align: left;
  }
  .learning__subnavi {
    position: absolute;
    width: 280px;
    height: 50px;
    top: 80%;
    left: 40%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 5px;
  }
}
@media only screen and (min-width: 768px) {
  .learning {
    width: 100%;
    height: 450px;
    background-color: #f1f1f1;
    position: relative;
    font-family: "Roboto", Arial, sans-serif;
    margin-top: 60px;
  }
  .learning__channel {
    width: 90%;
    height: 90px;
    margin: 0 auto;
    padding: 20px 0;
  }
  .learning__content {
    width: 90%;
    background-color: #f9f9f9;
    color: black;
    margin: 0 auto;
  }
  .learning__title {
    color: white;
    position: absolute;
    font-size: 2.5rem;
    left: 15%;
    width: 70%;
    text-align: left;
    top: 42%;
    font-weight: 500;
  }
  .learning__channelInfo {
    color: white;
    position: absolute;
    left: 15%;
    top: 70%;
    text-align: left;
  }
  .learning__subnavi {
    position: absolute;
    width: 280px;
    height: 50px;
    top: 80%;
    left: 60%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 5px;
  }
}
@media only screen and (min-width: 1224px) {
  .learning {
    width: 100%;
    height: 450px;
    background-color: #f1f1f1;
    position: relative;
    font-family: "Roboto", Arial, sans-serif;
    margin-top: 60px;
  }

  .learning__channel {
    width: 1100px;
    height: 90px;
    margin: 0 auto;
    padding: 20px 0;
  }
  .learning__content {
    width: 1100px;
    background-color: #f9f9f9;
    color: black;
    margin: 0 auto;
  }

  .learning__title {
    color: white;
    position: absolute;
    font-size: 2.5rem;
    left: 15%;
    width: 70%;
    text-align: left;
    top: 45%;
    font-weight: 500;
  }
  .learning__channelInfo {
    color: white;
    position: absolute;
    left: 15%;
    top: 70%;
    text-align: left;
  }
  .learning__subnavi {
    position: absolute;
    width: 400px;
    height: 50px;
    top: 80%;
    left: 60%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 5px;
  }
}
@media only screen and (min-width: 1824px) {
  .learning {
    width: 100%;
    height: 450px;
    background-color: #f1f1f1;
    position: relative;
    font-family: "Roboto", Arial, sans-serif;
    margin-top: 60px;
  }
  .learning__channel {
    width: 1281px;
    height: 90px;
    margin: 0 auto;
    padding: 20px 0;
  }
  .learning__content {
    width: 1281px;
    background-color: #f9f9f9;
    color: black;
    margin: 0 auto;
  }
  .learning__title {
    color: white;
    position: absolute;
    font-size: 3rem;
    left: 15%;
    width: 70%;
    text-align: left;
    top: 53%;
    font-weight: 500;
  }
  .learning__channelInfo {
    color: white;
    position: absolute;
    left: 15%;
    top: 70%;
    text-align: left;
  }
  .learning__subnavi {
    position: absolute;
    width: 400px;
    height: 50px;
    top: 80%;
    left: 60%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 5px;
  }
}

.learning__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.learning__watch {
  font-family: "Roboto", Arial, sans-serif;
  position: absolute;
  left: 15%;
  top: 80%;
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 2px;
  font-weight: 500;
}
.learning__watch:hover {
  position: absolute;
  cursor: pointer;
}

.learning__subnavi__box {
  width: 100%;
  height: 50px;
  object-fit: cover;
}
.learning__subnavi__box:hover {
  cursor: pointer;
}
.learning__subnavi__box:first-child {
  border-bottom: 2px solid white;
}

.learning__channel__svg {
  width: 80px;
  height: 80px;
  background-color: rgb(34, 34, 34);
  border-radius: 50%;
}
.svg__white {
  fill: rgb(221, 221, 221);
  stroke: rgb(221, 221, 221);
}
.svg__black {
  fill: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}
</style>
