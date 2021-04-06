<template>
  <div class="playlistwrap">
    <div class="playlistwrap__fixed">
      <div class="playlistwrap__fixed__thumbnail" v-if="playlist.thumbnail">
        <img
          :src="require('@/assets/' + playlist.thumbnail)"
          class="playlistwrap__fixed__thumbnail__img"
          alt="thumbnail"
        />
        <div
          class="playlistwrap__fixed__thumbnail__play"
          @click="playThisPlaylist"
        >
          <i class="fas fa-play"></i> PLAY ALL
        </div>
      </div>

      <div class="playlistwrap__fixed__title">
        {{ playlist.name }}
      </div>
      <div class="playlistwrap__fixed__details">
        {{ playlist.videos.length }} videos &bullet; 0 views &bullet; Last
        updated Aug 12, 2020
      </div>
      <div class="playlistwrap__fixed__functions">
        <div
          class="playlistwrap__fixed__functions__button"
          @click="deleteThisPlaylist(playlist.id)"
        >
          <i class="fas fa-trash-alt"></i>
        </div>
        <div
          class="playlistwrap__fixed__functions__button"
          @click="playThisPlaylist"
        >
          <i class="fas fa-random"></i>
        </div>
        <div class="playlistwrap__fixed__functions__button">
          <i class="fas fa-share"></i>
        </div>
        <div class="playlistwrap__fixed__functions__button">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div class="playlistwrap__fixed__description">
        {{ playlist.description }}
      </div>
      <div class="playlistwrap__fixed__channel" v-if="playlist.creatorProfile">
        <img
          :src="require('@/assets/' + playlist.creatorProfile)"
          class="playlistwrap__fixed__channel__profile"
          alt="channel profile"
        />
        <div class="playlistwrap__fixed__channel__name">
          {{ playlist.creator }}
        </div>
        <div class="playlistwrap__fixed__channel__subscribe">
          SUBSCRIBE
        </div>
      </div>
    </div>
    <div class="playlistwrap__lists">
      <template v-for="(video, index) in playlist.videos" :key="video.id">
        <PlaylistVideo
          :playlistId="playlist.id"
          :id="index + 1"
          :video="video"
        />
      </template>
    </div>
  </div>
</template>

<script>
import PlaylistVideo from "@/components/PlaylistVideo.vue";
import profile from "@/assets/profile.png";
export default {
  name: "PlaylistWrap",
  components: {
    PlaylistVideo
  },
  props: {
    playlist: Object,
    deleteThisPlaylist: Function
  },
  setup(props) {
    const playThisPlaylist = () => {
      window.location.href =
        "/watch/playlist=" + props.playlist.id + "&index=1";
    };
    return { profile, playThisPlaylist };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");

.playlistwrap {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, sans-serif;
  padding-top: 20px;
}

.playlistwrap__fixed {
  position: fixed;
  width: 417px;
  height: 100vh;
}

.playlistwrap__fixed__thumbnail {
  width: 96.5%;
  height: 230px;
  background-color: red;
  position: relative;
}
.playlistwrap__fixed__thumbnail:hover {
  cursor: pointer;
}
.playlistwrap__fixed__thumbnail__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.playlistwrap__fixed__thumbnail__play {
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: black;
  bottom: 0px;
  line-height: 50px;
  font-size: 1rem;
  font-weight: 300;
  color: white;
}
.fa-play {
  color: white;
  line-height: 50px;
  margin-right: 5px;
}

.playlistwrap__fixed__title {
  font-family: "Roboto", Arial, sans-serif;
  width: 96.5%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: 1.3rem;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.playlistwrap__fixed__details {
  width: 96.5%;
  height: 40px;
  text-align: left;
  font-size: 0.9rem;
}
.playlistwrap__fixed__functions {
  width: 96.5%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.playlistwrap__fixed__functions__button {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
.playlistwrap__fixed__functions__button:hover {
  cursor: pointer;
}

.playlistwrap__fixed__functions__button .fas {
  font-size: 1.3rem;
  line-height: 40px;
}

.playlistwrap__fixed__description {
  width: 96.5%;
  max-height: 420px;
  overflow: hidden;
  text-align: left;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 20px;
}
.playlistwrap__fixed__channel {
  width: 96.5%;
  height: 70px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: 20px;
}
.playlistwrap__fixed__channel__profile {
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  object-fit: cover;
}
.playlistwrap__fixed__channel__name {
  text-align: left;
  margin-left: 10px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.playlistwrap__fixed__channel__name:hover {
  cursor: pointer;
}
.playlistwrap__fixed__channel__subscribe {
  width: 120px;
  height: 40px;
  background-color: red;
  margin-left: 20px;
  line-height: 40px;
  color: white;
  font-weight: 500;
  border-radius: 2px;
}
.playlistwrap__fixed__channel__subscribe:hover {
  cursor: pointer;
}
.playlistwrap__lists {
  width: 867px;
  margin-left: 417px;
}
/*

.playlistwrap__lists {
  width: 867px;
  margin-left: 417px;
}
.playlistwrap__lists__list {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
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
*/
</style>
