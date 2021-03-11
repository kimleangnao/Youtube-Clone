<template>
  <div class="searchResultVideo" @click="goToVideo">
    <div class="searchResultVideo__thumbnail">
      <img
        :src="imageLogo"
        class="searchResultVideo__thumbnail__img"
        alt="thumbnail"
      />
    </div>
    <div class="searchResultVideo__details">
      <div class="searchResultVideo__details__title">
        Relaxing Japanese Zen Music - Best Sleep Music & Peaceful Music Relaxing
      </div>
      <div class="searchResultVideo__details__viewdate">
        94M &bullet; 11 years ago
      </div>
      <div class="searchResultVideo__details__channel">
        <img
          :src="imageLogo"
          class="searchResultVideo__details__channel__profile"
          alt="profile picture"
        />
        <div class="searchResultVideo__details__channel__name">Redi</div>
      </div>
      <div class="searchResultVideo__details__description">
        Thank you for listening, I hope you will have a good time here :)
      </div>
      <div class="searchResultVideo__details__cc">
        <div class="searchResultVideo__details__cc__box">CC</div>
      </div>
    </div>
  </div>
</template>

<script>
import imageLogo from "@/assets/profile.png";
export default {
  name: "searchResultVideo",
  props: {
    myWidth: {
      type: Number,
      required: false
    }
  },
  setup() {
    const goToVideo = () => {
      window.location.href = "/watch";
    };
    return {
      imageLogo,
      goToVideo
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.searchResultVideo {
  width: 100%;
  height: 200px;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 20px;
}
.searchResultVideo:hover {
  cursor: pointer;
}
.searchResultVideo__thumbnail {
  width: 30%;
  height: 100%;
  background-color: lightgrey;
}
.searchResultVideo__thumbnail__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.searchResultVideo__details {
  width: 70%;
  height: 100%;
  text-align: left;
  font-family: Roboto, Arial, sans-serif;
  padding: 0 0 0 10px;
}
.searchResultVideo__details__title {
  width: 100%;
  padding: 3px 0;
  font-size: 1.15rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 500;
}
.searchResultVideo__details__viewdate {
  width: 100%;
  height: 10%;
  font-size: 0.8rem;
  line-height: 20px;
}

.searchResultVideo__details__channel {
  width: 100%;
  height: 15%;
  display: flex;
  flex-flow: row nowrap;
  margin: 5px 0;
}
.searchResultVideo__details__channel__profile {
  width: 30px;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.searchResultVideo__details__channel__name {
  height: 100%;
  font-size: 0.8rem;
  line-height: 30px;
  margin-left: 5px;
}
.searchResultVideo__details__description {
  margin-top: 15px;
  width: 100%;
  height: 20%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.searchResultVideo__details__cc {
  width: 100%;
  height: 12%;
}
.searchResultVideo__details__cc__box {
  margin-top: 5px;
  width: 30px;
  height: 100%;
  background-color: lightgrey;
  line-height: 25px;
  text-align: center;
  font-weight: 500;
  border-radius: 2px;
}
</style>
