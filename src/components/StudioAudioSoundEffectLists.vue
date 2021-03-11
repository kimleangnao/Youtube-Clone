<template>
  <div class="studioAudioSoundEffectLists">
    <div class="studioAudioSoundEffectLists__title">
      <div class="studioAudioSoundEffectLists__title__icon">
        <i class="fas fa-play-circle"></i>
      </div>
      <div class="studioAudioSoundEffectLists__title__name">Bubble pop</div>
    </div>
    <div class="studioAudioSoundEffectLists__duration">3:34</div>
    <div class="studioAudioSoundEffectLists__category">
      <div class="studioAudioSoundEffectLists__category__texts">
        Ambiences <i class="fas fa-sliders-h"></i>
      </div>
    </div>
    <div class="studioAudioSoundEffectLists__added">
      Jul 2014
      <div class="studioAudioSoundEffectLists__added__download">
        DOWNLOAD NOW
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudioAudioSoundEffectLists",
  setup() {
    return {};
  }
};
</script>

<style scoped>
.studioAudioSoundEffectLists {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  text-align: left;
  line-height: 50px;
  font-size: 0.85rem;
}
.studioAudioSoundEffectLists:hover
  .studioAudioSoundEffectLists__added__download {
  display: block;
}
.studioAudioSoundEffectLists__title {
  width: 55%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.studioAudioSoundEffectLists__title__icon {
  margin: 0 25px;
}
.studioAudioSoundEffectLists__title__icon:hover .fas {
  cursor: pointer;
  color: black;
}
.studioAudioSoundEffectLists__title__icon .fas {
  line-height: 50px;
  font-size: 1.3rem;
}

.studioAudioSoundEffectLists__duration {
  width: 10%;
  height: 100%;
}
.studioAudioSoundEffectLists__category {
  width: 25%;
  height: 100%;
}
.studioAudioSoundEffectLists__category .fa-sliders-h {
  line-height: 50px;
  font-size: 0.9rem;
  margin: 0 5px;
}
.studioAudioSoundEffectLists__category .fa-sliders-h:hover {
  cursor: pointer;
  color: black;
}
.studioAudioSoundEffectLists__added {
  width: 10%;
  height: 100%;
  position: relative;
}
.studioAudioSoundEffectLists__added__download {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  color: dodgerblue;
  font-weight: 500;
  top: 0;
}
.studioAudioSoundEffectLists__added__download:hover {
  cursor: pointer;
}
</style>
