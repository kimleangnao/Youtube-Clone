<template>
  <div class="playlist" @click="goToPlaylist">
    <img :src="JS" alt="thumbnail" class="playlist__thumbnail" />
    <div class="playlist__cover">
      <div class="playlist__cover__count">25</div>
      <svg class="playlist__cover__svg">
        <path
          d="M 0 2 L 25 2 L 25 4 L 0 4Z"
          class="playlist__cover__svg__white"
        />
        <path
          d="M 0 8 L 25 8 L 25 10 L 0 10Z"
          class="playlist__cover__svg__white"
        />
        <path
          d="M 0 14 L 15 14 L 15 16 L 0 16Z"
          class="playlist__cover__svg__white"
        />
        <path d="M 18 14 L 25 18 L 18 22" class="playlist__cover__svg__white" />
      </svg>
    </div>
    <div class="playlist__play">
      <div class="playlist__play__wrap">
        <i class="fas fa-play"></i> PLAY ALL
      </div>
    </div>
    <div class="playlist__details">
      <div class="playlist__details__title">
        JavaScript
      </div>
      <div class="playlist__details__madeBy">REdi</div>
      <div class="playlist__details__fullView">VIEW FULL PLAYLIST</div>
    </div>
  </div>
</template>

<script>
import JS from "@/assets/JS.png";
export default {
  name: "playlist",
  setup() {
    const goToPlaylist = () => {
      window.location.href = "/playlist";
    };
    return { JS, goToPlaylist };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.playlist {
  width: 100%;
  height: 100%;
  text-align: left;
  font-family: Roboto, Arial, sans-serif;
  position: relative;
  color: black;
}
.playlist:hover {
  cursor: pointer;
}
.playlist:hover .playlist__play {
  cursor: pointer;
  display: block;
}

.playlist__thumbnail {
  width: 100%;
  height: 100px;
  background-color: lightgrey;
}
.playlist__cover {
  position: absolute;
  width: 50%;
  height: 100px;
  background-color: rgba(15, 15, 15, 0.9);
  top: 0;
  right: 0;
}
.playlist__cover__count {
  color: white;
  text-align: center;
  margin-top: 30px;
}
.playlist__cover__svg {
  display: block;
  width: 25px;
  height: 25px;
  margin: 0 auto;
}
.playlist__cover__svg__white {
  fill: white;
  stroke: white;
}

.playlist__play {
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: rgba(15, 15, 15, 0.9);
  top: 0;
  right: 0;
  display: none;
}
.playlist__play__wrap {
  width: 100%;
  height: 20px;
  margin-top: 40px;
  text-align: center;
  color: white;
}

.playlist__details {
  width: 100%;
  height: 80px;
}
.playlist__details__title {
  width: 100%;
  height: 40%;
  margin-top: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.85rem;
  font-weight: 500;
}
.playlist__details__title:hover {
  cursor: pointer;
}

.playlist__details__madeBy {
  width: 100%;
  height: 30%;
  font-size: 0.8rem;
  line-height: 23px;
}
.playlist__details__madeBy:hover {
  cursor: pointer;
}

.playlist__details__fullView {
  width: 100%;
  height: 30%;
  font-weight: 500;
  font-size: 0.85rem;
}

.playlist__details__fullView:hover {
  cursor: pointer;
}
</style>
