<template>
  <div class="channelchannels">
    <WrapComponent
      title="Featured channels"
      :playall="user.featureChannels.length > 6 ? true : false"
      componentType="Channel"
      :myWidth="myWidth"
    >
      <template v-for="channel in user.featureChannels" :key="channel.id">
        <Channel :channel="channel" />
      </template>
    </WrapComponent>
    <WrapComponent
      title="Other channels"
      :playall="false"
      :nextButton="user.recommendedChannel.length > 6 ? true : false"
      componentType="Channel"
      :myWidth="myWidth"
    >
      <template v-for="channel in user.recommendedChannel" :key="channel.id">
        <Channel :channel="channel" />
      </template>
    </WrapComponent>
  </div>
</template>

<script>
import WrapComponent from "@/components/WrapComponent.vue";
import Channel from "@/components/Channel.vue";
export default {
  name: "ChannelChannels",
  components: { WrapComponent, Channel },
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
    return {};
  }
};
</script>

<style scoped>
.channelchannels {
  width: 100%;
  margin-top: 20px;
}
</style>
