<template>
  <div class="liveHome">
    <WrapComponent
      :myWidth="myWidth"
      title="Featured live streams"
      :nextButton="false"
      :playall="true"
      componentType="live"
    >
      <LiveVideo />
      <LiveVideo />
      <LiveVideo :Video360="true" />
      <LiveVideo />
      <LiveVideo />
    </WrapComponent>
    <WrapComponent
      :myWidth="myWidth"
      title="Live Now"
      :nextButton="true"
      :playall="true"
      componentType="live"
    >
      <LiveVideo :liveNow="true" />
      <LiveVideo :liveNow="true" />
      <LiveVideo :liveNow="true" />
      <LiveVideo :liveNow="true" />
      <LiveVideo :liveNow="true" />
      <LiveVideo :liveNow="true" />
    </WrapComponent>
    <WrapComponent
      :myWidth="myWidth"
      title="Recommend"
      :nextButton="true"
      :playall="true"
      componentType="live"
    >
      <LiveVideo :recentStream="true" />
      <LiveVideo :recentStream="true" />
      <LiveVideo :recentStream="true" />
      <LiveVideo :recentStream="true" />
      <LiveVideo :recentStream="true" />
      <LiveVideo :recentStream="true" />
    </WrapComponent>
  </div>
</template>

<script>
import WrapComponent from "@/components/WrapComponent.vue";
import LiveVideo from "@/components/LiveVideo.vue";
export default {
  name: "LiveHome",
  components: { WrapComponent, LiveVideo },
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
.liveHome {
  width: 100%;
  color: black;
}
</style>
