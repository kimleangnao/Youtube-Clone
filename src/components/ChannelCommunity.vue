<template>
  <div class="cc">
    <template v-for="comment in user.communityComments" :key="comment.id">
      <ChannelCommunityPost :comment="comment" :myWidth="myWidth" />
    </template>
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
.cc {
  width: 100%;
}
</style>
