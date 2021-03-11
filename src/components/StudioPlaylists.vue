<template>
  <div class="studioPlaylists">
    <div class="studioPlaylists__title">
      <div class="studioPlaylists__title__text">Channel playlists</div>
      <div
        class="studioPlaylists__title__addNewPlaylist"
        @click="switchNewPlaylist"
      >
        NEW PlAYLIST
      </div>
      <div v-if="newPlaylist" class="studioPlaylists__title__newPlaylist">
        <div class="studioPlaylists__title__newPlaylist__wrap">
          <div class="studioPlaylists__title__newPlaylist__wrap__text">
            Playlist title (required)
          </div>
          <textarea
            type="text"
            class="studioPlaylists__title__newPlaylist__wrap__inputText"
            placeholder="Add title"
          ></textarea>
        </div>
        <div class="studioPlaylists__title__newPlaylist__wrap2">
          <div class="studioPlaylists__title__newPlaylist__wrap2__title">
            Visibility
          </div>
          <select
            class="studioPlaylists__title__newPlaylist__wrap2__select"
            id="visility"
            name="visility"
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Unlist">Unlist</option>
          </select>
        </div>
        <div class="studioPlaylists__title__newPlaylist__wrap3">
          <div
            class="studioPlaylists__title__newPlaylist__wrap3__buttonCancel"
            @click="switchNewPlaylist"
          >
            CANCEL
          </div>
          <div class="studioPlaylists__title__newPlaylist__wrap3__buttonCreate">
            CREATE
          </div>
        </div>
      </div>
    </div>
    <div class="studioPlaylists__filter" @click="switchFilterOption">
      <div class="studioPlaylists__filter__icon">
        <i class="fas fa-sliders-h"></i>
      </div>
      <input
        type="text"
        placeholder="Filter"
        class="studioPlaylists__filter__input"
      />
      <div v-if="filterOption" class="studioPlaylists__filter__list">
        <div class="studioPlaylists__filter__list__text">Title</div>
      </div>
    </div>
    <div class="studioPlaylists__header">
      <div class="studioPlaylists__header__title">Playlist</div>
      <div class="studioPlaylists__header__visibility">Visibility</div>
      <div class="studioPlaylists__header__lastUpdate">Last updated</div>
      <div class="studioPlaylists__header__videoCount">Video count</div>
    </div>
    <div class="studioPlaylists__lists">
      <StudioPlaylistWrap />
    </div>
    <div class="studioPlaylists__pagination">
      <div class="studioPlaylists__pagination__row">Rows per page</div>
      <select name="rows" id="rows" class="studioPlaylists__pagination__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <div class="studioPlaylists__pagination__xofx">1-1 of many</div>
      <i class="fas fa-step-backward"></i>
      <i class="fas fa-angle-left"></i>
      <i class="fas fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
import StudioPlaylistWrap from "@/components/StudioPlaylistWrap.vue";
import { reactive, toRefs } from "vue";

export default {
  name: "StudioPlaylists",
  components: { StudioPlaylistWrap },
  setup() {
    const state = reactive({
      filterOption: false,
      newPlaylist: false
    });
    const switchFilterOption = () => {
      state.filterOption = !state.filterOption;
    };
    const switchNewPlaylist = () => {
      state.newPlaylist = !state.newPlaylist;
    };
    return { ...toRefs(state), switchFilterOption, switchNewPlaylist };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioPlaylists {
  width: 100%;
  font-family: Roboto, Arial, sans-serif;
}
.studioPlaylists__title {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: relative;
}
.studioPlaylists__title__text {
  margin-left: 25px;
  line-height: 80px;
  font-size: 1.5rem;
}
.studioPlaylists__title__addNewPlaylist {
  margin-right: 25px;
  line-height: 80px;
  font-size: 0.9rem;
  font-weight: 500;
  color: dodgerblue;
}
.studioPlaylists__title__addNewPlaylist:hover {
  cursor: pointer;
}
.studioPlaylists__title__newPlaylist {
  position: absolute;
  width: 576px;
  height: 260px;
  z-index: 10;
  right: 20px;
  top: 20px;
  background-color: white;
  box-shadow: 0 0 5px grey;
}
.studioPlaylists__title__newPlaylist__wrap {
  width: 528px;
  height: 112px;
  border: 1px solid lightgrey;
  margin: 20px auto 0;
  border-radius: 5px;
}
.studioPlaylists__title__newPlaylist__wrap__text {
  text-align: left;
  width: 95%;
  margin: 5px auto 0;
  font-size: 0.8rem;
}
.studioPlaylists__title__newPlaylist__wrap__inputText {
  width: 95%;
  height: 60%;
  margin: 10px auto 0;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.9rem;
  resize: none;
  border: unset;
}
.studioPlaylists__title__newPlaylist__wrap__inputText:focus {
  outline: unset;
}

.studioPlaylists__title__newPlaylist__wrap2 {
  width: 528px;
  height: 56px;
  border: 1px solid lightgrey;
  margin: 10px auto 0;
  border-radius: 5px;
}
.studioPlaylists__title__newPlaylist__wrap2__title {
  text-align: left;
  width: 95%;
  margin: 5px auto;
  font-size: 0.8rem;
  color: grey;
}
.studioPlaylists__title__newPlaylist__wrap2__select {
  width: 95%;
  height: 55%;
  border: unset;
}
.studioPlaylists__title__newPlaylist__wrap2__select:focus {
  outline: unset;
}

.studioPlaylists__title__newPlaylist__wrap3 {
  width: 528px;
  height: 44px;
  margin: 10px auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
}
.studioPlaylists__title__newPlaylist__wrap3__buttonCancel {
  line-height: 44px;
  margin: 0 20px;
  font-weight: 500;
  color: dodgerblue;
}
.studioPlaylists__title__newPlaylist__wrap3__buttonCancel:hover {
  cursor: pointer;
}
.studioPlaylists__title__newPlaylist__wrap3__buttonCreate {
  line-height: 44px;
  font-weight: 500;
  color: grey;
}
.studioPlaylists__title__newPlaylist__wrap3__buttonCreate:hover {
  cursor: pointer;
}

.studioPlaylists__filter {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: relative;
}
.studioPlaylists__filter__icon {
  margin-left: 25px;
}
.studioPlaylists__filter__icon:hover {
  cursor: pointer;
}
.studioPlaylists__filter__input {
  margin-left: 25px;
  width: 50%;
  height: 50%;
  background-color: transparent;
  border: unset;
}
.studioPlaylists__filter__input:focus {
  outline: unset;
}
.studioPlaylists__filter__list {
  width: 120px;
  top: 50px;
  left: 68px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  box-shadow: 0 0 5px grey;
}
.studioPlaylists__filter__list__text {
  width: 100%;
  height: 40px;
  margin: 5px 0;
  line-height: 40px;
  text-align: left;
  text-indent: 20px;
}
.studioPlaylists__filter__list__text:hover {
  cursor: pointer;
  background-color: rgb(233, 231, 231);
}

.studioPlaylists__header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}

.studioPlaylists__header__title {
  width: 45%;
  height: 100%;
  margin-left: 25px;
  line-height: 50px;
  text-align: left;
  font-size: 0.9rem;
}
.studioPlaylists__header__visibility,
.studioPlaylists__header__lastUpdate,
.studioPlaylists__header__videoCount {
  width: 18%;
  height: 100%;
  text-align: left;
  line-height: 50px;
  font-size: 0.9rem;
}

.studioPlaylists__lists {
  width: 100%;
  height: 100%;
}

.studioPlaylists__pagination {
  position: absolute;
  width: 450px;
  height: 50px;
  right: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  line-height: 50px;
  color: grey;
}
.studioPlaylists__pagination__row {
  font-size: 0.9rem;
}
.studioPlaylists__pagination__select {
  height: 50%;
  width: 70px;
  margin: 0 20px;
  border: unset;
}
.studioPlaylists__pagination__select:focus {
  outline: unset;
}
.studioPlaylists__pagination__xofx {
  font-size: 0.9rem;
}
.studioPlaylists__pagination .fas {
  line-height: 50px;
  margin: 0 20px;
  font-size: 0.9rem;
}
.studioPlaylists__pagination .fas:hover {
  cursor: pointer;
}
.studioPlaylists__pagination .fa-angle-left {
  font-size: 1.2rem;
}

.studioPlaylists__pagination .fa-angle-right {
  font-size: 1.2rem;
}
</style>
