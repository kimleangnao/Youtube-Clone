<template>
  <div class="playlist">
    <PlaylistWrap />
  </div>
</template>

<script>
import PlaylistWrap from "@/components/PlaylistWrap.vue";

export default {
  name: "Playlist",
  components: {
    PlaylistWrap
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
.playlist {
  width: 100%;
  margin-top: 60px;
}
</style>
