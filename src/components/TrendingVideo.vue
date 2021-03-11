<template>
  <div :class="[myWidth == 8 ? 'tv--100' : myWidth == 7 ? 'tv--100' : 'tv']">
    <div
      :class="[
        myWidth == 7
          ? 'tv__thumbnail--7'
          : myWidth == 8
          ? 'tv__thumbnail--8'
          : 'tv__thumbnail',
        fromHistoryWidth == 8 ? 'tv__thumbnail--h8' : ''
      ]"
    >
      <img :src="profile" class="tv__thumbnail__image" @click="goToVideo" />
      <div class="tv__thumbnail__length">2:50</div>
      <div class="tv__thumbnail__watchLater">
        <svg class="tv__thumbnail__watchLater__svg">
          <circle
            cx="15"
            cy="15"
            r="8"
            class="tv__thumbnail__watchLater__svg__white"
          />
          <path
            d="M15 8 L 15 15 L 21 18"
            class="tv__thumbnail__watchLater__svg__black"
          />
        </svg>
      </div>
      <div class="tv__thumbnail__addToQueue">
        <svg class="tv__thumbnail__addToQueue__svg">
          <path
            d="M7 7.5 L 22.5 7.5 L 22.5 10  L 7 10"
            class="tv__thumbnail__addToQueue__svg__white"
          />
          <path
            d="M10 13 L 22.5 13 L 22.5 16  L 10 16"
            class="tv__thumbnail__addToQueue__svg__white"
          />
          <path
            d="M7.5 17 L 7.5 23 L 12 20"
            class="tv__thumbnail__addToQueue__svg__white"
          />
          <path
            d="M14 19 L 22.5 19 L 22.5 22 L 14 22"
            class="tv__thumbnail__addToQueue__svg__white"
          />
        </svg>
      </div>
    </div>
    <div
      v-if="fromHistoryWidth != 8"
      :class="[
        myWidth == 7
          ? 'tv__details--7'
          : myWidth == 8
          ? 'tv__details--8'
          : 'tv__details'
      ]"
    >
      <div class="tv__details__wrap" @click="goToVideo">
        <div class="tv__details__wrap__title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at elit
          ut enim molestie mollis vitae in erat.
        </div>
        <div class="tv__details__wrap__info">
          <div class="tv__details__wrap__info__list" @click.stop="goToChannel">
            Redi
            <i class="fas fa-check-circle"></i>
          </div>
          <div class="tv__details__wrap__info__list">
            500K views &bullet; 2 days ago
          </div>
        </div>
        <div class="tv__details__wrap__description">
          🙆🏻‍♂️ New Year Wake Up 🙆🏻‍♀️ Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis at elit ut enim molestie mollis vitae in erat.
          Maecenas nisi erat, sagittis at purus non, dictum elementum enim.
          Suspendisse mauris dui, gravida vel libero vehicula, malesuada
          venenatis ante. Integer fringilla gravida pharetra. Integer et leo
          nunc. Vestibulum id tincidunt mi. Etiam nec vehicula sapien. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus est
          ut gravida vehicula. Vestibulum vitae elit nisi. Sed quis posuere dui,
          non fringilla nunc. Aliquam in augue a tortor aliquam varius.
          Phasellus dignissim enim id eros hendrerit accumsan.
        </div>
        <div v-if="showOption" class="tv__details__wrap__optionMenu">
          <div class="tv__details__wrap__optionMenu__actions">
            <div class="tv__details__wrap__optionMenu__actions__addToQueue">
              <div
                class="tv__details__wrap__optionMenu__actions__addToQueue__icon"
              >
                <i class="fas fa-list-ol"></i>
              </div>
              <div
                class="tv__details__wrap__optionMenu__actions__addToQueue__text"
              >
                Add to queue
              </div>
            </div>
            <div class="tv__details__wrap__optionMenu__actions__watchLater">
              <div
                class="tv__details__wrap__optionMenu__actions__watchLater__icon"
              >
                <i class="fas fa-clock"></i>
              </div>
              <div
                class="tv__details__wrap__optionMenu__actions__watchLater__text"
              >
                Save to Watch Later
              </div>
            </div>
            <div class="tv__details__wrap__optionMenu__actions__saveToPlaylist">
              <div
                class="tv__details__wrap__optionMenu__actions__saveToPlaylist__icon"
              >
                <i class="fas fa-list-ol"></i>
              </div>
              <div
                class="tv__details__wrap__optionMenu__actions__saveToPlaylist__text"
              >
                Save to playlist
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tv__option">
      <svg class="tv__option__svg" @click.stop="showOptionSwitch">
        <circle cx="5" cy="5" r="3" class="tv__option__svg__grey" />
        <circle cx="5" cy="15" r="3" class="tv__option__svg__grey" />
        <circle cx="5" cy="25" r="3" class="tv__option__svg__grey" />
      </svg>
    </div>
  </div>
</template>

<script>
import profile from "@/assets/profile.png";
import { reactive, toRefs } from "vue";

export default {
  name: "TrendingVideo",
  props: {
    myWidth: {
      type: Number,
      required: true
    },
    fromHistoryWidth: {
      type: Number,
      required: false
    }
  },
  setup() {
    const state = reactive({
      showOption: false
    });
    const goToVideo = () => {
      window.location.href = "/watch";
    };
    const goToChannel = () => {
      window.location.href = "/channel/dfdf";
    };
    const showOptionSwitch = () => {
      state.showOption = !state.showOption;
    };
    return {
      ...toRefs(state),
      goToVideo,
      profile,
      goToChannel,
      showOptionSwitch
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.tv {
  width: 75%;
  height: 140px;
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  color: black;
}
.tv:hover {
  cursor: pointer;
}
.tv--100 {
  width: 100%;
  height: 140px;
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  color: black;
}
.tv--100:hover {
  cursor: pointer;
}
.tv:hover .tv__option {
  display: block;
}
.tv--100:hover .tv__option {
  display: block;
}

.tv:hover .tv__thumbnail__watchLater {
  display: block;
}
.tv--100:hover .tv__thumbnail__watchLater {
  display: block;
}

.tv:hover .tv__thumbnail__addToQueue {
  display: block;
}
.tv--100:hover .tv__thumbnail__addToQueue {
  display: block;
}

.tv__thumbnail {
  width: 25%;
  height: 100%;
  position: relative;
}
.tv__thumbnail--7 {
  width: 45%;
  height: 100%;
  position: relative;
}
.tv__thumbnail--8 {
  width: 30%;
  height: 100%;
  position: relative;
}
.tv__thumbnail--h8 {
  width: 30%;
  height: 100%;
  position: relative;
}
.tv__thumbnail:hover {
  cursor: pointer;
}
.tv__thumbnail__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tv__thumbnail__length {
  font-family: Roboto, Arial, sans-serif;
  position: absolute;
  font-weight: 500;
  color: white;
  background-color: black;
  right: 5px;
  bottom: 5px;
}
.tv__thumbnail__watchLater {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: rgba(8, 8, 8, 0.8);
  right: 5px;
  top: 5px;
  display: none;
}
.tv__thumbnail__watchLater__svg {
  width: 100%;
  height: 100%;
}
.tv__thumbnail__watchLater__svg__black {
  fill: transparent;
  stroke: black;
}
.tv__thumbnail__watchLater__svg__white {
  fill: white;
  stroke: white;
}
.tv__thumbnail__addToQueue {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: rgba(8, 8, 8, 0.8);
  right: 5px;
  top: 40px;
  display: none;
}
.tv__thumbnail__addToQueue__svg {
  width: 100%;
  height: 100%;
}
.tv__thumbnail__addToQueue__svg__red {
  fill: red;
  stroke: red;
}
.tv__thumbnail__addToQueue__svg__white {
  fill: white;
  stroke: white;
}
.tv__details {
  width: 70%;
  height: 100%;
}
.tv__details--7 {
  width: 48%;
  height: 100%;
}
.tv__details--8 {
  width: 65%;
  height: 100%;
}
.tv__details:hover {
  cursor: pointer;
}
.tv__details__wrap {
  width: 90%;
  height: 100%;
  padding-left: 15px;
  position: relative;
}
.tv__details__wrap__title {
  width: 100%;
  font-family: Roboto, Arial, sans-serif;
  text-align: left;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1.1rem;
  font-weight: 400;
}
.tv__details__wrap__info {
  width: 100%;
  height: 25px;
  display: flex;
  flex-flow: row nowrap;
  line-height: 25px;
  font-size: 0.8rem;
  overflow: hidden;
}
.tv__details__wrap__info__list {
  margin: 4px 5px 0 0;
}
.tv__details__wrap__description {
  width: 100%;
  height: 35px;
  margin-top: 10px;
  text-align: left;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.85rem;
}
.tv__option {
  width: 10px;
  display: none;
  margin-left: 15px;
}
.tv__option__svg {
  width: 100%;
  height: 23%;
}
.tv__option__svg:hover {
  cursor: pointer;
}
.tv__option__svg__grey {
  fill: grey;
  stroke: grey;
}
.tv__details__wrap__optionMenu {
  position: absolute;
  width: 213px;
  min-height: 124px;
  background-color: white;
  box-shadow: 0 0 5px grey;
  z-index: 10;
  top: 35px;
  right: -90px;
}

.tv__details__wrap__optionMenu__actions {
  width: 100%;
  height: 100%;
  margin: 5px 0;
}
.tv__details__wrap__optionMenu__actions__addToQueue,
.tv__details__wrap__optionMenu__actions__watchLater,
.tv__details__wrap__optionMenu__actions__saveToPlaylist {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 40px;
  text-align: left;
}
.tv__details__wrap__optionMenu__actions__addToQueue:hover,
.tv__details__wrap__optionMenu__actions__watchLater:hover,
.tv__details__wrap__optionMenu__actions__saveToPlaylist:hover {
  cursor: pointer;
  background-color: rgb(226, 226, 226);
}

.tv__details__wrap__optionMenu__actions__addToQueue__icon,
.tv__details__wrap__optionMenu__actions__watchLater__icon,
.tv__details__wrap__optionMenu__actions__saveToPlaylist__icon {
  width: 20%;
  text-align: center;
}
.tv__details__wrap__optionMenu__actions__addToQueue__icon .fas,
.tv__details__wrap__optionMenu__actions__watchLater__icon .fas,
.tv__details__wrap__optionMenu__actions__saveToPlaylist__icon .fas {
  line-height: 40px;
}
.tv__details__wrap__optionMenu__actions__addToQueue__text,
.tv__details__wrap__optionMenu__actions__watchLater__text,
.tv__details__wrap__optionMenu__actions__saveToPlaylist__text {
  width: 80%;
  line-height: 40px;
}
</style>
