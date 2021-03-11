<template>
  <div class="studioPlaylistWrap">
    <div class="studioPlaylistWrap__info">
      <div class="studioPlaylistWrap__info__thumbnail">
        <img
          :src="profile"
          alt="image thumbnail"
          class="studioPlaylistWrap__info__thumbnail__image"
        />
        <div class="studioPlaylistWrap__info__thumbnail__count">
          <div class="studioPlaylistWrap__info__thumbnail__count__num">30</div>
          <div class="studioPlaylistWrap__info__thumbnail__count__icon">
            <i class="fas fa-list-ul"></i>
          </div>
        </div>
      </div>
      <div class="studioPlaylistWrap__info__details">
        <div class="studioPlaylistWrap__info__details__title">Blade</div>
        <div class="studioPlaylistWrap__info__details__description">
          Description
        </div>
      </div>
    </div>
    <div class="studioPlaylistWrap__visibility">
      <div class="studioPlaylistWrap__visibility__text">
        <i class="fas fa-eye"></i> Public
      </div>
    </div>
    <div class="studioPlaylistWrap__lastUpdated">
      <div class="studioPlaylistWrap__lastUpdated__text">Feb 25, 2011</div>
    </div>
    <div class="studioPlaylistWrap__videoCount">
      <div class="studioPlaylistWrap__videoCount__text">30</div>
    </div>
  </div>
</template>

<script>
import profile from "@/assets/profile.png";
export default {
  name: "StudioPlaylistWrap",
  setup() {
    return { profile };
  }
};
</script>

<style scoped>
.studioPlaylistWrap {
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid lightgrey;
}
.studioPlaylistWrap__info {
  width: 45%;
  height: 100%;
  margin-left: 25px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.studioPlaylistWrap__info__thumbnail {
  width: 120px;
  height: 85%;
  position: relative;
}
.studioPlaylistWrap__info__thumbnail__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.studioPlaylistWrap__info__thumbnail__count {
  position: absolute;
  width: 30%;
  height: 100%;
  background-color: rgba(37, 37, 37, 0.9);
  top: 0;
  right: 0;
}
.studioPlaylistWrap__info__thumbnail__count__num {
  color: white;
  margin-top: 20px;
}
.studioPlaylistWrap__info__thumbnail__count__icon .fas {
  color: white;
}

.studioPlaylistWrap__info__details {
  width: 82%;
  height: 85%;
}
.studioPlaylistWrap__info__details__title {
  width: 100%;
  margin-top: 20px;
  text-align: left;
  font-size: 0.9rem;
  text-indent: 10px;
}
.studioPlaylistWrap__info__details__description {
  width: 100%;
  height: 25px;
  overflow: hidden;
  text-align: left;
  font-size: 0.9rem;
  text-indent: 10px;
  color: grey;
}

.studioPlaylistWrap__visibility,
.studioPlaylistWrap__lastUpdated,
.studioPlaylistWrap__videoCount {
  width: 18%;
  height: 100%;
  font-size: 0.9rem;
}

.studioPlaylistWrap__visibility__text {
  line-height: 40px;
  text-align: left;
}
.studioPlaylistWrap__visibility__text .fas {
  line-height: 40px;
  color: rgb(11, 85, 11);
}

.studioPlaylistWrap__lastUpdated__text {
  line-height: 40px;
  text-align: left;
}
.studioPlaylistWrap__videoCount__text {
  line-height: 40px;
  text-align: left;
}
</style>
