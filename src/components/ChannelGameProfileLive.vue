<template>
  <div class="ChannelGameProfileLive">
    <div class="ChannelGameProfileLive__header">
      <div class="ChannelGameProfileLive__header__top">
        <div class="ChannelGameProfileLive__header__title">Live</div>
      </div>
      <div class="ChannelGameProfileLive__header__sub">World wide view</div>
    </div>
    <div class="ChannelGameProfileLive__wrap">
      <template v-for="liveChannel in liveChannels" :key="liveChannel.id">
        <LiveVideo :liveNow="true" :liveChannel="liveChannel" />
      </template>
    </div>
  </div>
</template>

<script>
import LiveVideo from "@/components/LiveVideo.vue";

export default {
  name: "ChannelGameProfileLive",
  components: { LiveVideo },
  props: {
    liveChannels: Array
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
@media only screen and (min-width: 321px) {
  .ChannelGameProfileLive {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, sans-serif;
    margin: 0 auto;
  }
  .ChannelGameProfileLive__header {
    width: 100%;
    height: 100px;
    text-align: left;
  }
  .ChannelGameProfileLive__header__top {
    width: 50%;
    height: 40px;
    display: inline-block;
    margin-top: 10px;
  }
  .ChannelGameProfileLive__header__title {
    height: 40px;
    width: 80px;
    line-height: 40px;
    font-size: 1rem;
    font-weight: 500;
  }
  .ChannelGameProfileLive__header__sub {
    font-size: 0.85rem;
  }
  /*wrap*/
  .ChannelGameProfileLive__wrap {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
  }
  .ChannelGameProfileLive__header__title {
    height: 40px;
    width: 80px;
    line-height: 40px;
    font-size: 1rem;
    font-weight: 500;
    margin-left: 5px;
  }
  .ChannelGameProfileLive__header__sub {
    font-size: 0.85rem;
    margin-left: 5px;
  }
  /*wrap*/
  .ChannelGameProfileLive__wrap {
    width: 98%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 768px) {
  .ChannelGameProfileLive {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, sans-serif;
    margin: 0 auto;
  }
  .ChannelGameProfileLive__header {
    width: 100%;
    height: 100px;
    text-align: left;
  }
  .ChannelGameProfileLive__header__top {
    width: 50%;
    height: 40px;
    display: inline-block;
    margin-top: 10px;
  }
  .ChannelGameProfileLive__header__title {
    height: 40px;
    width: 80px;
    line-height: 40px;
    font-size: 1rem;
    font-weight: 500;
    margin-left: 10px;
  }
  .ChannelGameProfileLive__header__sub {
    font-size: 0.85rem;
    margin-left: 10px;
  }

  /*wrap*/
  .ChannelGameProfileLive__wrap {
    width: 98%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 1224px) {
  .ChannelGameProfileLive {
    width: 1180px;
    height: 100%;
    font-family: "Roboto", Arial, sans-serif;
    margin: 0 auto;
  }
  .ChannelGameProfileLive__header {
    width: 100%;
    height: 100px;
    text-align: left;
  }
  .ChannelGameProfileLive__header__top {
    width: 50%;
    height: 40px;
    display: inline-block;
    margin-top: 10px;
  }
  .ChannelGameProfileLive__header__title {
    height: 40px;
    width: 80px;
    line-height: 40px;
    font-size: 1rem;
    font-weight: 500;
    margin-left: 0;
  }
  .ChannelGameProfileLive__header__sub {
    font-size: 0.85rem;
    margin-left: 0;
  }
  .ChannelGameProfileLive__header {
    width: 100%;
    height: 100px;
    text-align: left;
    margin: 0 auto;
  }
  /*wrap*/
  .ChannelGameProfileLive__wrap {
    width: 1180px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 1824px) {
  .ChannelGameProfileLive {
    width: 1280px;
    height: 100%;
    font-family: "Roboto", Arial, sans-serif;
    margin: 0 auto;
  }
  .ChannelGameProfileLive__header {
    width: 100%;
    height: 100px;
    text-align: left;
  }
  .ChannelGameProfileLive__header__top {
    width: 50%;
    height: 40px;
    display: inline-block;
    margin-top: 10px;
  }
  .ChannelGameProfileLive__header__title {
    height: 40px;
    width: 80px;
    line-height: 40px;
    font-size: 1rem;
    font-weight: 500;
  }
  .ChannelGameProfileLive__header__sub {
    font-size: 0.85rem;
  }
  /*wrap*/
  .ChannelGameProfileLive__wrap {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
  }
}
</style>
