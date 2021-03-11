<template>
  <div class="playlistwrap__lists__list" @click="goToVideo">
    <div class="playlistwrap__lists__list__count">{{ id }}</div>
    <div class="playlistwrap__lists__list__thumbnail">
      <img
        :src="profile"
        class="playlistwrap__lists__list__thumbnail__img"
        alt="thumbnail"
      />
      <div class="playlistwrap__lists__list__thumbnail__timer">3:20</div>
    </div>
    <div class="playlistwrap__lists__list__details">
      <div class="playlistwrap__lists__list__details__title">
        What is SASS?
      </div>
      <div class="playlistwrap__lists__list__details__by">
        REdi
      </div>
    </div>
    <div class="playlistwrap__lists__list__option">
      <svg
        class="playlistwrap__lists__list__option__svg"
        @click.stop="showOptionSwitch"
      >
        <circle
          cx="8"
          cy="5"
          r="3"
          class="playlistwrap__lists__list__option__svg__grey"
        />
        <circle
          cx="8"
          cy="15"
          r="3"
          class="playlistwrap__lists__list__option__svg__grey"
        />
        <circle
          cx="8"
          cy="25"
          r="3"
          class="playlistwrap__lists__list__option__svg__grey"
        />
      </svg>
    </div>
    <div v-if="showOption" class="playlistwrap__lists__list__optionMenu">
      <div class="playlistwrap__lists__list__optionMenu__actions">
        <div class="playlistwrap__lists__list__optionMenu__actions__addToQueue">
          <div
            class="playlistwrap__lists__list__optionMenu__actions__addToQueue__icon"
          >
            <i class="fas fa-list-ol"></i>
          </div>
          <div
            class="playlistwrap__lists__list__optionMenu__actions__addToQueue__text"
          >
            Add to queue
          </div>
        </div>
        <div class="playlistwrap__lists__list__optionMenu__actions__watchLater">
          <div
            class="playlistwrap__lists__list__optionMenu__actions__watchLater__icon"
          >
            <i class="fas fa-clock"></i>
          </div>
          <div
            class="playlistwrap__lists__list__optionMenu__actions__watchLater__text"
          >
            Save to Watch later
          </div>
        </div>
        <div
          class="playlistwrap__lists__list__optionMenu__actions__saveToPlaylist"
        >
          <div
            class="playlistwrap__lists__list__optionMenu__actions__saveToPlaylist__icon"
          >
            <i class="fas fa-list-ol"></i>
          </div>
          <div
            class="playlistwrap__lists__list__optionMenu__actions__saveToPlaylist__text"
          >
            Save to playlist
          </div>
        </div>
      </div>
      <div class="playlistwrap__lists__list__optionMenu__more">
        <div class="playlistwrap__lists__list__optionMenu__more__remove">
          <div
            class="playlistwrap__lists__list__optionMenu__more__remove__icon"
          >
            <i class="fas fa-trash"></i>
          </div>
          <div
            class="playlistwrap__lists__list__optionMenu__more__remove__text"
          >
            Remove from JavaScript
          </div>
        </div>
        <div class="playlistwrap__lists__list__optionMenu__more__moveTop">
          <div
            class="playlistwrap__lists__list__optionMenu__more__moveTop__icon"
          >
            <i class="fas fa-long-arrow-alt-up"></i>
          </div>
          <div
            class="playlistwrap__lists__list__optionMenu__more__moveTop__text"
          >
            Move to top
          </div>
        </div>
        <div class="playlistwrap__lists__list__optionMenu__more__moveBottom">
          <div
            class="playlistwrap__lists__list__optionMenu__more__moveBottom__icon"
          >
            <i class="fas fa-long-arrow-alt-down"></i>
          </div>
          <div
            class="playlistwrap__lists__list__optionMenu__more__moveBottom__text"
          >
            Move to bottom
          </div>
        </div>
        <div
          class="playlistwrap__lists__list__optionMenu__more__setAsPlaylistThumbnail"
        >
          <div
            class="playlistwrap__lists__list__optionMenu__more__setAsPlaylistThumbnail__icon"
          >
            <i class="fas fa-image"></i>
          </div>
          <div
            class="playlistwrap__lists__list__optionMenu__more__setAsPlaylistThumbnail__text"
          >
            Set as playlist thumbnail
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profile from "@/assets/profile.png";
import { reactive, toRefs } from "vue";
export default {
  name: "PlaylistVideo",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = reactive({
      showOption: false
    });
    const showOptionSwitch = () => {
      state.showOption = !state.showOption;
    };
    const goToVideo = () => {
      window.location.href = "/watch";
    };
    return { ...toRefs(state), profile, goToVideo, showOptionSwitch };
  }
};
</script>

<style scoped>
.playlistwrap__lists__list {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: relative;
}

.playlistwrap__lists__list:hover .playlistwrap__lists__list__option__svg {
  display: block;
}
.playlistwrap__lists__list:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.playlistwrap__lists__list__count {
  width: 4%;
  height: 80%;
  line-height: 80px;
  font-weight: 500;
}
.playlistwrap__lists__list__thumbnail {
  width: 14%;
  height: 80%;
  background-color: grey;
  position: relative;
}
.playlistwrap__lists__list__thumbnail__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.playlistwrap__lists__list__thumbnail__timer {
  position: absolute;
  color: white;
  background-color: black;
  font-weight: 500;
  font-size: 0.9rem;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
}

.playlistwrap__lists__list__details {
  width: 80%;
  height: 80%;
}
.playlistwrap__lists__list__details__title {
  width: 100%;
  height: 50%;
  text-align: left;
  padding-left: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-direction: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
}
.playlistwrap__lists__list__details__by {
  width: 100%;
  height: 50%;
  text-align: left;
  font-size: 0.9rem;
  padding-left: 10px;
}

.playlistwrap__lists__list__option {
  width: 2%;
  height: 80%;
  display: flex;
  align-items: center;
}

.playlistwrap__lists__list__option__svg {
  width: 100%;
  height: 40%;
  display: none;
}
.playlistwrap__lists__list__option__svg:hover {
  cursor: pointer;
}
.playlistwrap__lists__list__option__svg__grey {
  fill: grey;
  stroke: grey;
}
.playlistwrap__lists__list__optionMenu {
  position: absolute;
  width: 245px;
  min-height: 225px;
  background-color: white;
  box-shadow: 0 0 5px grey;
  top: 70px;
  right: 0;
  z-index: 10;
}
.playlistwrap__lists__list__optionMenu__actions {
  width: 100%;
  border-bottom: 1px solid lightgrey;
  margin: 5px 0;
}
.playlistwrap__lists__list__optionMenu__actions__addToQueue,
.playlistwrap__lists__list__optionMenu__actions__watchLater,
.playlistwrap__lists__list__optionMenu__actions__saveToPlaylist {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 30px;
}

.playlistwrap__lists__list__optionMenu__actions__addToQueue:hover,
.playlistwrap__lists__list__optionMenu__actions__watchLater:hover,
.playlistwrap__lists__list__optionMenu__actions__saveToPlaylist:hover {
  cursor: pointer;
  background-color: rgb(226, 226, 226);
}

.playlistwrap__lists__list__optionMenu__actions__addToQueue__icon,
.playlistwrap__lists__list__optionMenu__actions__watchLater__icon,
.playlistwrap__lists__list__optionMenu__actions__saveToPlaylist__icon {
  width: 20%;
  text-align: center;
}

.playlistwrap__lists__list__optionMenu__actions__addToQueue__icon .fas,
.playlistwrap__lists__list__optionMenu__actions__watchLater__icon .fas,
.playlistwrap__lists__list__optionMenu__actions__saveToPlaylist__icon .fas {
  line-height: 30px;
}

.playlistwrap__lists__list__optionMenu__actions__addToQueue__text,
.playlistwrap__lists__list__optionMenu__actions__watchLater__text,
.playlistwrap__lists__list__optionMenu__actions__saveToPlaylist__text {
  width: 80%;
  line-height: 30px;
  text-align: left;
}

.playlistwrap__lists__list__optionMenu__more {
  width: 100%;
  margin: 5px 0;
}

.playlistwrap__lists__list__optionMenu__more__remove,
.playlistwrap__lists__list__optionMenu__more__moveTop,
.playlistwrap__lists__list__optionMenu__more__moveBottom,
.playlistwrap__lists__list__optionMenu__more__setAsPlaylistThumbnail {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 30px;
}

.playlistwrap__lists__list__optionMenu__more__remove:hover,
.playlistwrap__lists__list__optionMenu__more__moveTop:hover,
.playlistwrap__lists__list__optionMenu__more__moveBottom:hover,
.playlistwrap__lists__list__optionMenu__more__setAsPlaylistThumbnail:hover {
  cursor: pointer;
  background-color: rgb(226, 226, 226);
}

.playlistwrap__lists__list__optionMenu__more__remove__icon,
.playlistwrap__lists__list__optionMenu__more__moveTop__icon,
.playlistwrap__lists__list__optionMenu__more__moveBottom__icon,
.playlistwrap__lists__list__optionMenu__more__setAsPlaylistThumbnail__icon {
  width: 20%;
  text-align: center;
}

.playlistwrap__lists__list__optionMenu__more__remove__text,
.playlistwrap__lists__list__optionMenu__more__moveTop__text,
.playlistwrap__lists__list__optionMenu__more__moveBottom__text,
.playlistwrap__lists__list__optionMenu__more__setAsPlaylistThumbnail__text {
  width: 80%;
  line-height: 30px;
  text-align: left;
}
</style>
