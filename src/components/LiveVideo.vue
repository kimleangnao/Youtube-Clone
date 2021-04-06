<template>
  <div
    :class="[
      liveNow ? 'lv lv--liveNow' : recentStream ? 'lv lv--recentStream' : 'lv'
    ]"
    @click="goToVideo(liveChannel.id)"
  >
    <div class="lv__thumbnail">
      <template v-if="liveChannel.thumbnail != undefined">
        <img
          :src="require('@/assets/' + liveChannel.thumbnail)"
          alt="image thumbnail"
          class="lv__thumbnail__img"
        />
      </template>

      <div v-if="recentStream" class="lv__thumbnail__live">
        {{ liveChannel.videoLengthMinute }}
      </div>
      <div
        v-else-if="liveNow"
        :class="[
          liveNow
            ? 'lv__thumbnail__live lv__thumbnail__live--liveNow'
            : 'lv__thumbnail__live'
        ]"
      >
        LIVE
      </div>
      <div
        v-else
        :class="[
          liveNow
            ? 'lv__thumbnail__live lv__thumbnail__live--soon'
            : 'lv__thumbnail__live'
        ]"
      >
        LIVE
      </div>
    </div>
    <div v-if="recentStream" class="live__wrap__recent">
      <div class="live__wrap__recent__details">
        <div class="lv__title">
          {{ liveChannel.title }}
        </div>
        <div class="lv__channel">{{ liveChannel.profileName }}</div>
        <div class="lv__views">{{ liveChannel.viewscount }} views</div>
        <div class="lv__schedule">
          Streamed on {{ liveChannel.profilePostDate }}
        </div>
      </div>
      <!--
      <div class="live__wrap__option" @click.stop="showOptionSwitch">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      <div v-if="showOption" class="live__wrap__optionMenu"></div>
         -->
    </div>

    <div v-else-if="liveNow" class="lv__wrap__liveNow">
      <div class="lv__wrap__liveNow__details">
        <div class="lv__title">
          {{ liveChannel.title }}
        </div>
        <div class="lv__channel">{{ liveChannel.profileName }}</div>
        <div class="lv__views">{{ liveChannel.viewscount }} watching</div>
        <div class="lv__liveNow">LIVE NOW</div>
      </div>
      <!--
      <div class="lv__wrap__liveNow__option" @click.stop="showOptionSwitch">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      <div v-if="showOption" class="live__wrap__optionMenu"></div>
      -->
    </div>
    <div v-else class="lv__wrap__waiting">
      <div class="lv__wrap__waiting__details">
        <div class="lv__title">
          {{ liveChannel.title }}
        </div>
        <div class="lv__channel">{{ liveChannel.profileName }}</div>
        <div class="lv__views">{{ liveChannel.viewscount }} waiting</div>
        <div class="lv__schedule">
          Scheduled for {{ liveChannel.scheduled }}
        </div>
        <div v-if="Video360" class="lv__360">360<sup>o</sup></div>
        <button class="lv__reminder">SET REMINDER</button>
      </div>
      <!--
      <div class="lv__wrap__waiting__option" @click.stop="showOptionSwitch">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      <div v-if="showOption" class="live__wrap__optionMenu">
      </div>
       -->
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
    },
    liveChannel: Object
  },
  setup(props) {
    const state = reactive({
      showOption: false
    });
    console.log(props.liveChannel);

    const showOptionSwitch = () => {
      state.showOption = !state.showOption;
    };
    const goToVideo = id => {
      window.location.href = "/watch/" + id;
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
  font-size: 0.9rem;
  font-weight: 500;
  right: 5px;
  bottom: 5px;
  padding: 0px 5px;
  background-color: black;
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
.lv__thumbnail__live--soon {
  position: absolute;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  right: 5px;
  bottom: 5px;
  padding: 0px 5px;
  background-color: black;
}
.live__wrap__recent,
.lv__wrap__liveNow,
.lv__wrap__waiting {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
}
.live__wrap__recent:hover .live__wrap__option .fa-ellipsis-v {
  display: block;
}
.lv__wrap__liveNow:hover .lv__wrap__liveNow__option .fa-ellipsis-v {
  display: block;
}
.lv__wrap__waiting:hover .lv__wrap__waiting__option .fa-ellipsis-v {
  display: block;
}
.live__wrap__recent__details,
.lv__wrap__liveNow__details,
.lv__wrap__waiting__details {
  width: 90%;
}
.live__wrap__option,
.lv__wrap__liveNow__option,
.lv__wrap__waiting__option {
  width: 10%;
  height: 30px;
  text-align: center;
}
.live__wrap__option .fa-ellipsis-v,
.lv__wrap__liveNow__option .fa-ellipsis-v,
.lv__wrap__waiting__option .fa-ellipsis-v {
  margin: 5px 0;
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
  max-height: 40px;
  margin: 10px 0;
  font-weight: 500;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.lv__channel {
  width: 100%;
  height: 25px;
  line-height: 20px;
  font-weight: 400;
  font-size: 0.9rem;
}
.lv__views {
  width: 100%;
  height: 18px;
  font-size: 0.8rem;
  line-height: 18px;
}
.lv__liveNow {
  display: inline-block;
  border: 1.8px solid red;
  color: red;
  font-size: 0.8rem;
  padding: 2px 4px;
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
