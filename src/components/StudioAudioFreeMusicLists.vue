<template>
  <div class="studioAudioFreeMusicLists">
    <div class="studioAudioFreeMusicLists__wrap">
      <div class="studioAudioFreeMusicLists__wrap__icon">
        <i class="fas fa-play-circle "></i>
      </div>
      <div class="studioAudioFreeMusicLists__wrap__icon">
        <i class="far fa-star"></i>
      </div>
      <div class="studioAudioFreeMusicLists__wrap__text">19th floor</div>
    </div>
    <div class="studioAudioFreeMusicLists__wrap">
      <div class="studioAudioFreeMusicLists__wrap__text2">
        Dance & Electronic
      </div>
      <div class="studioAudioFreeMusicLists__wrap__icon" v-if="sort">
        <i class="fas fa-sliders-h"></i>
      </div>
    </div>
    <div class="studioAudioFreeMusicLists__wrap">
      <div class="studioAudioFreeMusicLists__wrap__text2">Dark</div>
      <div class="studioAudioFreeMusicLists__wrap__icon" v-if="sort">
        <i class="fas fa-sliders-h"></i>
      </div>
    </div>
    <div class="studioAudioFreeMusicLists__wrap">
      <div class="studioAudioFreeMusicLists__wrap__text2">Bobby Richards</div>
      <div class="studioAudioFreeMusicLists__wrap__icon">
        <i class="fas fa-external-link-alt"></i>
      </div>
      <div class="studioAudioFreeMusicLists__wrap__icon" v-if="sort">
        <i class="fas fa-sliders-h"></i>
      </div>
    </div>
    <div class="studioAudioFreeMusicLists__wrap">
      <div class="studioAudioFreeMusicLists__wrap__text2">2:01</div>
    </div>
    <div class="studioAudioFreeMusicLists__wrap">
      <div class="studioAudioFreeMusicLists__wrap__icon">
        <i class="fab fa-youtube"></i>
      </div>
    </div>
    <div class="studioAudioFreeMusicLists__wrap">
      Dec 2020
      <div class="studioAudioFreeMusicLists__wrap__download">DOWNLOAD</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudioAudioFreeMusicLists",
  props: {
    sort: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
.studioAudioFreeMusicLists {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.studioAudioFreeMusicLists:hover .studioAudioFreeMusicLists__wrap__download {
  display: block;
}
.studioAudioFreeMusicLists:hover
  .studioAudioFreeMusicLists__wrap__icon
  .fa-sliders-h,
.studioAudioFreeMusicLists:hover
  .studioAudioFreeMusicLists__wrap__icon
  .fa-external-link-alt {
  display: block;
}
.studioAudioFreeMusicLists__wrap {
  width: 11.2%;
  text-align: left;
  font-size: 0.9rem;
  line-height: 50px;
  display: flex;
  position: relative;
  flex-flow: row nowrap;
}

.studioAudioFreeMusicLists__wrap:first-child {
  width: 32%;
  height: 100%;
  text-indent: 100px;
}
.studioAudioFreeMusicLists__wrap__icon {
  width: 10%;
  height: 100%;
  text-align: center;
  text-indent: 0;
  margin: 0 5px;
}
.studioAudioFreeMusicLists__wrap__icon .fas,
.studioAudioFreeMusicLists__wrap__icon .far,
.studioAudioFreeMusicLists__wrap__icon .fab {
  line-height: 50px;
  font-size: 0.9rem;
}

.studioAudioFreeMusicLists__wrap__icon .fa-play-circle,
.studioAudioFreeMusicLists__wrap__icon .fa-star,
.studioAudioFreeMusicLists__wrap__icon .fa-youtube {
  font-size: 1.3rem;
}

.studioAudioFreeMusicLists__wrap__icon .fas:hover,
.studioAudioFreeMusicLists__wrap__icon .far:hover,
.studioAudioFreeMusicLists__wrap__icon .fab:hover {
  cursor: pointer;
  color: dodgerblue;
}

.studioAudioFreeMusicLists__wrap__icon .fa-sliders-h,
.studioAudioFreeMusicLists__wrap__icon .fa-external-link-alt {
  display: none;
}

.studioAudioFreeMusicLists__wrap__text {
  width: 75%;
  text-align: left;
  height: 100%;
  text-indent: 15px;
}
.studioAudioFreeMusicLists__wrap__text2 {
  height: 100%;
  text-align: left;
}

.studioAudioFreeMusicLists__wrap__download {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  color: dodgerblue;
  font-weight: 500;
}
.studioAudioFreeMusicLists__wrap__download:hover {
  cursor: pointer;
}
</style>
