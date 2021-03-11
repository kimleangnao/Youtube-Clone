<template>
  <div class="studioSubtitlesAll">
    <div class="studioSubtitlesAll__wrap">
      <div class="studioSubtitlesAll__wrap__video">
        <div class="studioSubtitlesAll__wrap__video__thumbnail">
          <img
            :src="profile"
            class="studioSubtitlesAll__wrap__video__thumbnail__img"
            alt="thumbnail"
          />
          <div class="studioSubtitlesAll__wrap__video__thumbnail__time">
            15:43
          </div>
        </div>
        <div class="studioSubtitlesAll__wrap__video__details">
          <div class="studioSubtitlesAll__wrap__video__details__title">
            Lorem Ipsum
          </div>
          <div class="studioSubtitlesAll__wrap__video__details__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            massa purus, scelerisque at feugiat ut, aliquet quis sapien.
            Suspendisse sed lorem cursus, mollis justo sit amet, eleifend risus.
            Vivamus ac diam sem.
          </div>
        </div>
      </div>
      <div class="studioSubtitlesAll__wrap__languages">
        <div class="studioSubtitlesAll__wrap__languages__amount">
          1 <i class="fas fa-angle-down"></i>
        </div>
      </div>
      <div class="studioSubtitlesAll__wrap__modified">
        <div class="studioSubtitlesAll__wrap__modified__date">Jule 3, 2022</div>
      </div>
      <div class="studioSubtitlesAll__wrap__titleDescription">
        <div class="studioSubtitlesAll__wrap__titleDescription__text">-</div>
      </div>
      <div class="studioSubtitlesAll__wrap__subtitles">
        <div class="studioSubtitlesAll__wrap__subtitles__text">-</div>
      </div>
    </div>
  </div>
</template>

<script>
import profile from "@/assets/profile.png";
export default {
  name: "StudioSubtitlesAll",
  setup() {
    return { profile };
  }
};
</script>

<style scoped>
.studioSubtitlesAll {
  width: 100%;
  height: 100px;
}
.studioSubtitlesAll__wrap {
  width: 100%;
  height: 83px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.studioSubtitlesAll__wrap__video {
  width: 40%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.studioSubtitlesAll__wrap__video__thumbnail {
  width: 20%;
  height: 85%;
  margin-left: 25px;
  position: relative;
}
.studioSubtitlesAll__wrap__video__thumbnail__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.studioSubtitlesAll__wrap__video__thumbnail__time {
  position: absolute;
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  background-color: black;
  right: 5px;
  bottom: 5px;
}
.studioSubtitlesAll__wrap__video__details {
  width: 70%;
  height: 85%;
  margin-left: 25px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
.studioSubtitlesAll__wrap__video__details__title {
  width: 100%;
  height: 30%;
  text-align: left;
  font-weight: 500;
  font-size: 0.9rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.studioSubtitlesAll__wrap__video__details__description {
  margin-top: -15px;
  width: 100%;
  height: 50%;
  text-align: left;
  font-size: 0.9rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
.studioSubtitlesAll__wrap__languages {
  width: 10%;
  height: 100%;
  text-align: left;
}
.studioSubtitlesAll__wrap__languages__amount {
  line-height: 35px;
  font-size: 0.9rem;
}

.studioSubtitlesAll__wrap__languages__amount .fas {
  line-height: 35px;
  font-size: 0.9rem;
}
.studioSubtitlesAll__wrap__modified {
  width: 15%;
  height: 100%;
}
.studioSubtitlesAll__wrap__modified__date {
  text-align: left;
  font-size: 0.9rem;
  line-height: 35px;
}
.studioSubtitlesAll__wrap__titleDescription {
  width: 15%;
  height: 100%;
}
.studioSubtitlesAll__wrap__titleDescription__text {
  line-height: 35px;
  font-size: 0.9rem;
  text-align: left;
}
.studioSubtitlesAll__wrap__subtitles {
  width: 20%;
  height: 100%;
}
.studioSubtitlesAll__wrap__subtitles__text {
  line-height: 35px;
  font-size: 0.9rem;
  text-align: left;
}
</style>
