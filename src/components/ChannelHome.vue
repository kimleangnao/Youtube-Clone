<template>
  <div class="ch">
    <div
      :class="[
        myWidth == 7
          ? 'ch__channel__featureVideo--7'
          : myWidth == 8
          ? 'ch__channel__featureVideo--8'
          : myWidth == 9
          ? 'ch__channel__featureVideo--9'
          : myWidth == 10
          ? 'ch__channel__featureVideo--10'
          : 'ch__channel__featureVideo'
      ]"
    >
      <div
        class="ch__channel__featureVideo__wrap"
        v-if="user.myChannelHighlight"
      >
        <TrendingVideo
          :video="user.myChannelHighlight"
          :myWidth="myWidth"
          :userId="user.id"
        />
      </div>
    </div>
    <div
      :class="[
        myWidth == 7
          ? 'ch__channel__featureChannel--7'
          : myWidth == 8
          ? 'ch__channel__featureChannel--8'
          : 'ch__channel__featureChannel'
      ]"
    >
      <div class="ch__channel__featureChannel__title">
        Featured channels
      </div>
      <div class="ch__channel__featureChannel__wrap">
        <template v-for="channel in user.featureChannels" :key="channel.id">
          <Channel :channel="channel" />
        </template>
      </div>
    </div>
    <div class="ch__channel__component" v-if="user">
      <WrapComponent :myWidth="myWidth" title="Uploads" :playall="true">
        <template v-for="(video, index) in user.videos" :key="video.id">
          <PromoteVideo v-if="index < 6" :video="video" :userId="user.id" />
        </template>
      </WrapComponent>
    </div>
  </div>
</template>

<script>
import TrendingVideo from "@/components/TrendingVideo.vue";
import Channel from "@/components/Channel.vue";
import WrapComponent from "@/components/WrapComponent.vue";
import PromoteVideo from "@/components/PromoteVideo.vue";

import { reactive, toRefs } from "vue";

export default {
  name: "ChannelHome",
  components: {
    TrendingVideo,
    Channel,
    WrapComponent,
    PromoteVideo
  },
  props: {
    myWidth: {
      type: Number,
      required: false
    },
    user: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      videoUploadWrap: []
    });

    return { ...toRefs(state) };
  }
};
</script>

<style scoped>
.ch {
  width: 100%;
  height: 100%;
}

.ch__channel__featureVideo {
  width: 1281px;
  height: 140px;
  margin: 20px auto;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(185, 185, 185);
}
.ch__channel__featureVideo--7 {
  width: 100%;
  height: 140px;
  margin: 20px auto;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(185, 185, 185);
}
.ch__channel__featureVideo--8 {
  width: 100%;
  height: 140px;
  margin: 20px auto;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(185, 185, 185);
}
.ch__channel__featureVideo--9 {
  width: 100%;
  height: 140px;
  margin: 20px auto;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(185, 185, 185);
}
.ch__channel__featureVideo--10 {
  width: 100%;
  height: 140px;
  margin: 20px auto;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(185, 185, 185);
}
.ch__channel__featureVideo__wrap {
  width: 100%;
}

.ch__channel__featureChannel {
  width: 1281px;
  height: 278px;
  margin: 0 auto;
}
.ch__channel__featureChannel--7 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.ch__channel__featureChannel--8 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.ch__channel__featureChannel--9 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.ch__channel__featureChannel__title {
  width: 100%;
  height: 28px;
  text-align: left;
  font-weight: 500;
  font-size: 1.2rem;
}
.ch__channel__featureChannel__wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  border-bottom: 1px solid rgb(185, 185, 185);
}

.ch__channel__component {
  width: 100%;
  height: 100%;
}
</style>
