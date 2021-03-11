<template>
  <div class="channel">
    <div class="channel__banner">
      <img :src="skyscrapper" class="channel__banner__img" />
    </div>
    <div class="channel__wrap">
      <div class="channel__wrap__header">
        <div class="channel__wrap__header__details">
          <ChannelWrap
            :showSubscriber="true"
            :myWidth="viewportWidth"
            title="Redi"
          />
        </div>

        <ul class="channel__wrap__navigator">
          <li
            :class="[
              home
                ? 'channel__wrap__navigator__list channel__wrap__navigator__list__border--bottom'
                : 'channel__wrap__navigator__list'
            ]"
            @click="switchToHome"
          >
            HOME
          </li>
          <li
            :class="[
              video
                ? 'channel__wrap__navigator__list channel__wrap__navigator__list__border--bottom'
                : 'channel__wrap__navigator__list'
            ]"
            @click="switchToVideos"
          >
            VIDEOS
          </li>
          <li
            :class="[
              playlists
                ? 'channel__wrap__navigator__list channel__wrap__navigator__list__border--bottom'
                : 'channel__wrap__navigator__list'
            ]"
            @click="switchToPlaylists"
          >
            PLAYLISTS
          </li>
          <li
            :class="[
              community
                ? 'channel__wrap__navigator__list channel__wrap__navigator__list__border--bottom'
                : 'channel__wrap__navigator__list'
            ]"
            @click="switchToCommunity"
          >
            COMMUNITY
          </li>
          <li
            :class="[
              channels
                ? 'channel__wrap__navigator__list channel__wrap__navigator__list__border--bottom'
                : 'channel__wrap__navigator__list'
            ]"
            @click="switchToChannels"
          >
            CHANNELS
          </li>
          <li
            :class="[
              about
                ? 'channel__wrap__navigator__list channel__wrap__navigator__list__border--bottom'
                : 'channel__wrap__navigator__list'
            ]"
            @click="switchToAbout"
          >
            ABOUT
          </li>
          <li class="channel__wrap__navigator__list">
            <i class="fas fa-search"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="channel__component">
      <ChannelHome :myWidth="viewportWidth" v-if="home" />
      <ChannelVideos :myWidth="viewportWidth" v-if="video" />
      <ChannelPlaylists :myWidth="viewportWidth" v-if="playlists" />
      <ChannelCommunity :myWidth="viewportWidth" v-if="community" />
      <ChannelChannels :myWidth="viewportWidth" v-if="channels" />
      <ChannelAbout v-if="about" />
    </div>
  </div>
</template>

<script>
import skyscrapper from "@/assets/skyscrapper.jpg";

import ChannelHome from "@/components/ChannelHome.vue";
import ChannelVideos from "@/components/ChannelVideos.vue";
import ChannelPlaylists from "@/components/ChannelPlaylists.vue";
import ChannelCommunity from "@/components/ChannelCommunity.vue";
import ChannelChannels from "@/components/ChannelChannels.vue";
import ChannelAbout from "@/components/ChannelAbout.vue";
import ChannelWrap from "@/components/ChannelWrap.vue";

import { reactive, toRefs } from "vue";
export default {
  name: "Channel",
  components: {
    ChannelHome,
    ChannelVideos,
    ChannelPlaylists,
    ChannelCommunity,
    ChannelChannels,
    ChannelAbout,
    ChannelWrap
  },
  setup() {
    const state = reactive({
      home: true,
      video: false,
      playlists: false,
      community: false,
      channels: false,
      about: false,
      viewportWidth: 1900
    });

    const switchToHome = () => {
      state.home = true;
      state.video = false;
      state.playlists = false;
      state.community = false;
      state.channels = false;
      state.about = false;
    };
    const switchToVideos = () => {
      state.home = false;
      state.video = true;
      state.playlists = false;
      state.community = false;
      state.channels = false;
      state.about = false;
    };
    const switchToPlaylists = () => {
      state.home = false;
      state.video = false;
      state.playlists = true;
      state.community = false;
      state.channels = false;
      state.about = false;
    };
    const switchToCommunity = () => {
      state.home = false;
      state.video = false;
      state.playlists = false;
      state.community = true;
      state.channels = false;
      state.about = false;
    };
    const switchToChannels = () => {
      state.home = false;
      state.video = false;
      state.playlists = false;
      state.community = false;
      state.channels = true;
      state.about = false;
    };

    const switchToAbout = () => {
      state.home = false;
      state.video = false;
      state.playlists = false;
      state.community = false;
      state.channels = false;
      state.about = true;
    };

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
      skyscrapper,
      switchToHome,
      switchToVideos,
      switchToPlaylists,
      switchToCommunity,
      switchToChannels,
      switchToAbout,
      ...toRefs(state)
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

@media only screen and (min-width: 321px) {
  .channel {
    width: 100%;
    background-color: #f1f1f1;
    margin-top: 60px;
    font-family: Roboto, Arial, sans-serif;
    color: black;
    padding-bottom: 50px;
    margin: 60px auto;
  }
  .channel__component {
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }
  .channel__wrap__header {
    width: 95%;
    height: 180px;
    margin: 0 auto;
  }
  .channel__wrap__navigator {
    width: 100%;
    height: 30%;
    margin-top: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-left: 0;
    line-height: 55px;
    padding: 0;
  }
  .channel__wrap__navigator__list {
    list-style: none;
    font-weight: 500;
    padding: 0px 7px;
    font-size: 0.8rem;
  }
}
@media only screen and (min-width: 768px) {
  .channel {
    width: 100%;
    background-color: #f1f1f1;
    margin-top: 60px;
    font-family: Roboto, Arial, sans-serif;
    color: black;
    padding-bottom: 50px;
    margin: 60px auto;
  }
  .channel__component {
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }
  .channel__wrap__header {
    width: 95%;
    height: 180px;
    margin: 0 auto;
  }
  .channel__wrap__navigator {
    width: 100%;
    height: 30%;
    margin-top: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-left: 0;
    line-height: 55px;
    padding: 0;
  }
  .channel__wrap__navigator__list {
    list-style: none;
    font-weight: 500;
    padding: 0px 18px;
    font-size: 1rem;
  }
}
@media only screen and (min-width: 1224px) {
  .channel {
    width: 100%;
    background-color: #f1f1f1;
    margin-top: 60px;
    font-family: Roboto, Arial, sans-serif;
    color: black;
    padding-bottom: 50px;
    margin: 60px auto;
  }
  .channel__component {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
  }
  .channel__wrap__header {
    width: 1100px;
    height: 180px;
    margin: 0 auto;
  }
  .channel__wrap__navigator {
    width: 1100px;
    height: 30%;
    margin-top: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-left: 0;
    line-height: 55px;
    padding: 0;
  }
  .channel__wrap__navigator__list {
    list-style: none;
    font-weight: 500;
    padding: 0px 18px;
    font-size: 1rem;
  }
}
@media only screen and (min-width: 1824px) {
  .channel {
    width: 100%;
    background-color: #f1f1f1;
    margin-top: 60px;
    font-family: Roboto, Arial, sans-serif;
    color: black;
    padding-bottom: 50px;
    margin: 60px auto;
  }
  .channel__component {
    width: 1280px;
    height: 100%;
    margin: 0 auto;
  }
  .channel__wrap__header {
    width: 1280px;
    height: 180px;
    margin: 0 auto;
  }
  .channel__wrap__navigator {
    width: 1280px;
    height: 30%;
    margin-top: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-left: 0;
    line-height: 55px;
    padding: 0;
  }
  .channel__wrap__navigator__list {
    list-style: none;
    font-weight: 500;
    padding: 0px 18px;
    font-size: 1rem;
  }
}

.channel__banner {
  width: 100%;
  height: 300px;
}
.channel__banner__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.channel__wrap {
  width: 100%;
  background-color: #f9f9f9;
}

.channel__wrap__header__details {
  padding-top: 20px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.channel__wrap__navigator__list:hover {
  cursor: pointer;
  border-bottom: 2px solid black;
}
.channel__wrap__navigator__list .fas {
  line-height: 55px;
}
.channel__wrap__navigator__list__border--bottom {
  border-bottom: 2px solid black;
}
</style>
