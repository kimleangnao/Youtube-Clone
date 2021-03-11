<template>
  <div
    :class="[
      liveNow ? 'lv lv--liveNow' : recentStream ? 'lv lv--recentStream' : 'lv'
    ]"
    @click="goToVideo"
  >
    <div class="lv__thumbnail">
      <img :src="rocks" alt="image thumbnail" class="lv__thumbnail__img" />
      <div v-if="recentStream" class="lv__thumbnail__live">5:55:06</div>
      <div
        v-else
        :class="[
          liveNow
            ? 'lv__thumbnail__live lv__thumbnail__live--liveNow'
            : 'lv__thumbnail__live'
        ]"
      >
        LIVE
      </div>
    </div>
    <div v-if="recentStream" class="live__wrap__recent">
      <div class="live__wrap__recent__details">
        <div class="lv__title">
          Watch NASA's Perseverance Rover Land on Mars!
        </div>
        <div class="lv__channel">NASA</div>
        <div class="lv__views">211K views</div>
        <div class="lv__schedule">Streamed 2 hours ago</div>
      </div>
      <div class="live__wrap__option" @click.stop="showOptionSwitch">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      <div v-if="showOption" class="live__wrap__optionMenu"></div>
    </div>

    <div v-else-if="liveNow" class="lv__wrap__liveNow">
      <div class="lv__wrap__liveNow__details">
        <div class="lv__title">
          Watch NASA's Perseverance Rover Land on Mars!
        </div>
        <div class="lv__channel">NASA</div>
        <div class="lv__views">211K watching</div>
      </div>
      <div class="lv__wrap__liveNow__option" @click.stop="showOptionSwitch">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      <div v-if="showOption" class="live__wrap__optionMenu"></div>
    </div>
    <div v-else class="lv__wrap__waiting">
      <div class="lv__wrap__waiting__details">
        <div class="lv__title">
          Watch NASA's Perseverance Rover Land on Mars!
        </div>
        <div class="lv__channel">NASA</div>
        <div class="lv__views">211K waiting</div>
        <div class="lv__schedule">Scheduled for 2//18/21, 11:15</div>
        <div v-if="Video360" class="lv__360">360<sup>o</sup></div>
        <button class="lv__reminder">SET REMINDER</button>
      </div>
      <div class="lv__wrap__waiting__option" @click.stop="showOptionSwitch">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      <div v-if="showOption" class="live__wrap__optionMenu"></div>
    </div>
  </div>
</template>

<script>
import rocks from "@/assets/rocks.png";
import { reactive, toRefs } from "vue";
export default {
  name: "LiveVideo",
  props: {
    liveNow: {
      type: Boolean,
      required: false
    },
    recentStream: {
      type: Boolean,
      required: false
    },
    Video360: {
      type: Boolean,
      required: false
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

    return { ...toRefs(state), rocks, showOptionSwitch, goToVideo };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.lv {
  width: 100%;
  height: 300px;
  text-align: left;
  font-family: "Roboto", Arial, sans-serif;
  color: black;
}
.lv:hover {
  cursor: pointer;
}
.lv--liveNow {
  width: 100%;
  height: 250px;
  text-align: left;
  font-family: "Roboto", Arial, sans-serif;
}

.lv--recentStream {
  width: 100%;
  height: 270px;
  text-align: left;
  font-family: "Roboto", Arial, sans-serif;
}
.lv__thumbnail {
  width: 100%;
  height: 117px;
  background-color: blue;
  position: relative;
}
.lv__thumbnail__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.lv__thumbnail__live {
  position: absolute;
  color: white;
  background-color: black;
  font-size: 0.9rem;
  font-weight: 500;
  right: 5px;
  bottom: 5px;
  padding: 0px 5px;
}
.lv__thumbnail__live--liveNow {
  position: absolute;
  color: white;
  background-color: red;
  font-size: 0.9rem;
  font-weight: 500;
  right: 5px;
  bottom: 5px;
  padding: 0px 5px;
}

.live__wrap__recent,
.lv__wrap__liveNow,
.lv__wrap__waiting {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
}
.live__wrap__recent:hover .live__wrap__option {
  display: block;
}
.lv__wrap__liveNow:hover .lv__wrap__liveNow__option {
  display: block;
}
.lv__wrap__waiting:hover .lv__wrap__waiting__option {
  display: block;
}
.live__wrap__recent__details,
.lv__wrap__liveNow__details,
.lv__wrap__waiting__details {
  width: 95%;
}
.live__wrap__option,
.lv__wrap__liveNow__option,
.lv__wrap__waiting__option {
  width: 5%;
  height: 100%;
  text-align: center;
  padding: 5px 0;
  display: none;
}
.live__wrap__option:hover,
.lv__wrap__liveNow__option:hover,
.lv__wrap__waiting__option:hover {
  cursor: pointer;
}

.live__wrap__optionMenu {
  position: absolute;
  width: 213px;
  height: 125px;
  box-shadow: 0 0 5px grey;
  background-color: white;
  top: 30px;
}

.lv__title {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  font-weight: 500;
}
.lv__channel {
  width: 100%;
  height: 24px;
  line-height: 24px;
  font-weight: 400;
  font-size: 0.9rem;
}
.lv__views {
  width: 100%;
  height: 18px;
  font-size: 0.8rem;
  line-height: 18px;
}
.lv__schedule {
  width: 100%;
  height: 18px;
  font-size: 0.8rem;
  line-height: 18px;
}
.lv__360 {
  width: 100%;
  height: 18px;
  font-size: 0.8rem;
  line-height: 18px;
}
.lv__reminder {
  font-family: "Roboto", Arial, sans-serif;
  padding: 5px 10px;
  background-color: lightgrey;
  color: rgb(10, 7, 7);
  font-weight: 500;
  margin: 4px 0;
  border: unset;
}
.lv__reminder:hover {
  cursor: pointer;
}
.lv__reminder:focus {
  outline: unset;
}
</style>
