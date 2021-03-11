<template>
  <div class="channelchannels">
    <WrapComponent
      title="Featured channels"
      :playall="false"
      componentType="Channel"
      :myWidth="myWidth"
    >
      <Channel />
      <Channel />
      <Channel />
      <Channel />
      <Channel />
    </WrapComponent>
    <WrapComponent
      title="Other Euducator channels"
      :playall="false"
      :nextButton="true"
      componentType="Channel"
      :myWidth="myWidth"
    >
      <Channel />
      <Channel />
      <Channel />
      <Channel />
      <Channel />
      <Channel />
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
