<template>
  <div class="cp">
    <div class="cp__select">
      All playlists <i class="fas fa-caret-down"></i>
    </div>
    <div class="cp__wrap">
      <WrapComponent
        title="Created playlists"
        :playall="false"
        :nextButton="true"
        :myWidth="myWidth"
      >
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </WrapComponent>
      <WrapComponent
        :myWidth="myWidth"
        title="JavaScript"
        :playall="false"
        :nextButton="true"
      >
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </WrapComponent>
      <WrapComponent
        :myWidth="myWidth"
        title="HTML"
        :playall="false"
        :nextButton="true"
      >
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </WrapComponent>
      <WrapComponent
        :myWidth="myWidth"
        title="CSS"
        :playall="false"
        :nextButton="true"
      >
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
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
