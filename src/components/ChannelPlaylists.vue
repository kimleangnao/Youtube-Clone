<template>
  <div class="cp">
    <div class="cp__select">
      All playlists <i class="fas fa-caret-down"></i>
    </div>
    <div class="cp__wrap">
      <WrapComponent
        title="Created playlists"
        :playall="false"
        :nextButton="user.playlists.length > 6 ? true : false"
        :myWidth="myWidth"
      >
        <template v-for="playlist in user.playlists" :key="playlist.id">
          <Playlist :playlist="playlist" />
        </template>
      </WrapComponent>
    </div>
  </div>
</template>

<script>
import WrapComponent from "@/components/WrapComponent.vue";
import Playlist from "@/components/Playlist.vue";

export default {
  name: "ChannelPlaylist",
  components: { WrapComponent, Playlist },
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
.cp {
  width: 100%;
  text-align: left;
}
.cp__select {
  display: inline-block;
  margin: 20px 0;
}
.cp__select .fas {
  line-height: 20px;
}
.cp__select:hover {
  cursor: pointer;
}
.cp__wrap {
  width: 100%;
}
</style>
