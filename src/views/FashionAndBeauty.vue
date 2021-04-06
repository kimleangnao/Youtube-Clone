<template>
  <div class="outer--fab">
    <div class="fab">
      <img :src="rocks" alt="banner image" class="fab__banner" />
      <img :src="natural" alt="channel profile" class="fab__channel" />
      <div class="fab__info">REdi &bullet; 300 views &bullet; 4 hours ago</div>
      <div class="fab__title">FALL PRESENTATION - 2021</div>
      <div class="fab__subnav">
        <img :src="rocks" class="fab__subnav__image" alt="sub image nav" />
        <img :src="natural" class="fab__subnav__image" alt="sub image nav" />
        <img :src="rocks" class="fab__subnav__image" alt="sub image nav" />
        <img :src="natural" class="fab__subnav__image" alt="sub image nav" />
        <img :src="rocks" class="fab__subnav__image" alt="sub image nav" />
      </div>
    </div>
    <div class="fab__component">
      <ChannelWrap
        :myWidth="viewportWidth"
        title="Fashion & Beauty"
        :customizeProfile="true"
        :showSubscriber="true"
        :subScriberAmount="5000"
        :goBackToSection="goBackToSection"
      >
        <svg class="fab__component__svg">
          <path
            d="M45 35 L 46 35 L 46 32 L 44 32 L 44 35Z"
            class="svg__white"
          />
          <path d="M45 32 L 50 25 L 45 20 L 40 25" class="svg__white--nofill" />
          <path d="M45 35 L 25 50 L 65 50 Z" class="svg__white--nofill" />
          <path d="M35 65 L37 65 L 37 70 L 35 70" class="svg__grey" />
          <path d="M40.5 65 L42.5 65 L 42.5 70 L 40.5 70" class="svg__grey" />
          <path d="M46 65 L48 65 L 48 70 L 46 70" class="svg__grey" />
          <path d="M50 50 L 50 65 L 35 65 L 35 50" class="svg__white" />
          <path d="M50 50 L 55 50 L 55 58 L 50 58" class="svg__grey" />
        </svg>
      </ChannelWrap>
    </div>
    <template v-if="viewAll">
      <div class="outer__wrap__viewall">
        <WrapComponent
          :myWidth="viewportWidth"
          title="Fashion Videos"
          subTitle="Enjoy the show"
          :nextButton="false"
          :viewall="false"
          :subTitleColor="true"
        >
          <template v-for="each in fashion" :key="each.id">
            <PromoteVideo
              :titleColor="true"
              :channelColor="true"
              :infoColor="true"
              :video="each"
              :userId="each.userId"
            />
          </template>
        </WrapComponent>
      </div>
    </template>
    <template v-if="!viewAll">
      <div class="outer__wrap__component">
        <WrapComponent
          :myWidth="viewportWidth"
          title="London Fashion Week"
          subTitle="Curated by the British Fashion Council"
          :nextButton="false"
          :viewall="false"
          :subTitleColor="true"
        >
          <template v-for="event in events" :key="event.id">
            <PromoteVideo
              :titleColor="true"
              :channelColor="true"
              :infoColor="true"
              :video="event"
              :userId="event.userId"
            />
          </template>
        </WrapComponent>

        <WrapComponent
          :myWidth="viewportWidth"
          title="The collections"
          subTitle="Fashion shows straight from the runway"
          :nextButton="false"
          :viewall="true"
          :subTitleColor="true"
          :switchViewAll="switchViewAll"
        >
          <template v-for="collection in collection" :key="collection.id">
            <PromoteVideo
              :titleColor="true"
              :channelColor="true"
              :infoColor="true"
              :video="collection"
              :userId="collection.userId"
            />
          </template>
        </WrapComponent>
        <WrapComponent
          :myWidth="viewportWidth"
          title="Stories of style"
          subTitle="You look inside the fashion industry"
          :nextButton="false"
          :viewall="false"
          :subTitleColor="true"
        >
          <template v-for="story in stories" :key="story.id">
            <PromoteVideo
              :titleColor="true"
              :channelColor="true"
              :infoColor="true"
              :video="story"
              :userId="story.userId"
            />
          </template>
        </WrapComponent>
        <WrapComponent
          :myWidth="viewportWidth"
          title="Channels to explore"
          subTitle="Fashion and beauty channels to watch"
          :nextButton="false"
          :viewall="false"
          :subTitleColor="true"
          componentType="Channel"
        >
          <template v-for="channel in channels" :key="channel.id">
            <Channel :channel="channel" />
          </template>
        </WrapComponent>
      </div>
    </template>
  </div>
</template>

<script>
import rocks from "@/assets/rocks.png";
import natural from "@/assets/natural.png";
import ChannelWrap from "@/components/ChannelWrap.vue";
import WrapComponent from "@/components/WrapComponent.vue";
import PromoteVideo from "@/components/PromoteVideo.vue";
import Channel from "@/components/Channel.vue";
import EventService from "@/services/EventService.js";

import { onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "FashionAndBeauty",
  props: {
    changeCurrentRoute: Function
  },
  setup(props) {
    const state = reactive({
      viewAll: false,
      viewportWidth: 10,
      fashion: [],
      events: [],
      collection: [],
      stories: [],
      channels: []
    });
    //pass route name back to app
    let name = useRoute().path;
    console.log(useRoute());
    console.log("passname:", name);
    props.changeCurrentRoute(name);

    EventService.getFashion().then(response => {
      console.log("fashion!:", state.fashion);
      let fashion = [];
      let event = [];
      let collection = [];
      let stories = [];
      let channels = [];
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].category != "channel") {
          fashion.push(response.data[i]);
        }
        if (response.data[i].category == "event") {
          event.push(response.data[i]);
        } else if (response.data[i].category == "collection") {
          collection.push(response.data[i]);
        } else if (response.data[i].category == "story") {
          stories.push(response.data[i]);
        } else if (response.data[i].category == "channel") {
          channels.push(response.data[i]);
        }
      }
      state.events = event;
      state.collection = collection;
      state.stories = stories;
      state.channels = channels;
      state.fashion = fashion;
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
      window.location.href = "/fashion";
    };
    const switchViewAll = () => {
      console.log("true!");
      state.viewAll = true;
      console.log("switchto true:", state.fashion);
    };
    return {
      ...toRefs(state),
      rocks,
      natural,
      ChannelWrap,
      WrapComponent,
      PromoteVideo,
      Channel,
      goBackToSection,
      switchViewAll
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
.outer--fab {
  width: 100%;
  min-height: 100vh;
  background-color: rgb(54, 54, 54);
  color: white;
}

@media only screen and (min-width: 321px) {
  .outer--fab {
    width: 100%;
    min-height: 100vh;
    color: white;
  }
  .fab__component {
    width: 90%;
    height: 90px;
    margin: 0 auto;
    padding-top: 10px;
    color: white;
    margin-bottom: 30px;
  }
  .outer__wrap__component {
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
  .fab__component__svg {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    transform: scale(0.9);
  }
}
@media only screen and (min-width: 768px) {
  .outer--fab {
    width: 100%;
    min-height: 100vh;
    background-color: rgb(54, 54, 54);
    color: white;
  }
  .fab__component {
    width: 90%;
    height: 90px;
    margin: 0 auto;
    padding-top: 10px;
    color: white;
    margin-bottom: 30px;
  }
  .outer__wrap__component {
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 1224px) {
  .outer--fab {
    width: 100%;
    min-height: 100vh;
    color: white;
  }
  .fab__component {
    width: 1224px;
    height: 90px;
    margin: 0 auto;
    padding-top: 10px;
    color: white;
    margin-bottom: 30px;
  }
  .outer__wrap__component {
    width: 1224px;
    height: 100%;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 1824px) {
  .outer--fab {
    width: 100%;
    min-height: 100vh;
    color: white;
  }
  .fab__component {
    width: 1281px;
    height: 90px;
    margin: 0 auto;
    padding-top: 10px;
    color: white;
    margin-bottom: 30px;
  }
  .outer__wrap__component {
    width: 1281px;
    height: 100%;
    margin: 0 auto;
  }
  .outer__wrap__viewall {
    width: 1281px;
    min-height: 500px;
    margin: 0 auto;
  }
}

.fab {
  margin-top: 60px;
  width: 100%;
  height: 450px;
  position: relative;
  font-family: Roboto, Arial, sans-serif;
}
.fab__banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.fab__channel {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  top: 25%;
  left: 15%;
  object-fit: cover;
}
.fab__info {
  position: absolute;
  top: 48%;
  left: 15%;
  font-size: 1rem;
  color: rgb(173, 173, 173);
}
.fab__title {
  position: absolute;
  top: 58%;
  left: 15%;
  font-size: 2.5rem;
  color: white;
  line-height: 2.5rem;
  text-align: left;
}
.fab__subnav {
  position: absolute;
  top: 80%;
  left: 15%;
  width: 400px;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
}
.fab__subnav__image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.fab__subnav__image:first-child {
  border-bottom: 2px solid white;
}

.svg__white {
  fill: white;
  stroke: white;
  stroke-width: 1.8px;
}
.svg__grey {
  fill: grey;
  stroke: grey;
  stroke-width: 1.8px;
}
.svg__grey--nofill {
  fill: transparent;
  stroke: grey;
  stroke-width: 1.8px;
}
.svg__white--nofill {
  fill: transparent;
  stroke: white;
  stroke-width: 1.8px;
}
</style>
