<template>
  <div class="liveHome">
    <template v-if="viewAll">
      <WrapComponent
        :myWidth="myWidth"
        title="Live"
        :nextButton="false"
        :playall="false"
        componentType="live"
      >
        <template v-for="live in live" :key="live.id">
          <LiveVideo :liveNow="true" :liveChannel="live" />
        </template>
      </WrapComponent>
    </template>
    <template v-if="!viewAll">
      <WrapComponent
        :myWidth="myWidth"
        title="Featured live streams"
        :nextButton="false"
        :playall="true"
        componentType="live"
      >
        <template
          v-for="featurestream in featurestreams"
          :key="featurestream.id"
        >
          <LiveVideo :liveChannel="featurestream" />
        </template>
      </WrapComponent>
      <WrapComponent
        :myWidth="myWidth"
        title="Live Now"
        :nextButton="false"
        :viewall="true"
        componentType="live"
        :switchViewAll="switchViewAll"
      >
        <template v-for="live in live" :key="live.id">
          <LiveVideo :liveNow="true" :liveChannel="live" />
        </template>
      </WrapComponent>
      <WrapComponent
        :myWidth="myWidth"
        title="Recommend"
        :nextButton="false"
        :playall="false"
        componentType="live"
      >
        <template v-for="waslive in lived" :key="waslive.id">
          <LiveVideo :recentStream="true" :liveChannel="waslive" />
        </template>
      </WrapComponent>
    </template>
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
    },
    featurestreams: Array,
    live: Array,
    lived: Array,
    viewAll: Boolean,
    switchViewAll: Function
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
