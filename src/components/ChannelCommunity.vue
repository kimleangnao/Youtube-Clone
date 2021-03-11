<template>
  <div class="cc">
    <ChannelCommunityPost :myWidth="myWidth" />
    <ChannelCommunityPost :myWidth="myWidth" />
    <ChannelCommunityPost :myWidth="myWidth" />
    <ChannelCommunityPost :myWidth="myWidth" />
    <ChannelCommunityPost :myWidth="myWidth" />
  </div>
</template>

<script>
import ChannelCommunityPost from "@/components/ChannelCommunityPost.vue";
export default {
  name: "ChannelCommunity",
  components: {
    ChannelCommunityPost
  },
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
.cc {
  width: 100%;
}
</style>
