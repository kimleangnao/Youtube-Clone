<template>
  <div class="studioNavbar">
    <div class="studioNavbar__left">
      <div class="studioNavbar__left__navbar">
        <i class="fas fa-bars"></i>
      </div>
      <div class="studioNavbar__left__logo" @click="goToStudio">
        <i class="fab fa-youtube"></i>Studio
      </div>
    </div>
    <div class="studioNavbar__middle">
      <div class="studioNavbar__middle__wrap">
        <div class="studioNavbar__middle__wrap__search">
          <i class="fas fa-search"></i>
        </div>
        <input
          type="search"
          class="studioNavbar__middle__wrap__input"
          placeholder="Search across your channel"
        />
      </div>
    </div>
    <div class="studioNavbar__right">
      <div class="studioNavbar__right__help">
        <i class="far fa-question-circle"></i>
      </div>
      <div class="studioNavbar__right__create">
        <div class="studioNavbar__right__create__icon">
          <i class="fas fa-video"></i>
        </div>
        <div
          class="studioNavbar__right__create__text"
          @click="switchCreateMenu"
        >
          CREATE
        </div>
        <div v-if="createMenu" class="studioNavbar__right__create__absolute">
          <div class="studioNavbar__right__create__absolute__list">
            <div class="studioNavbar__right__create__absolute__list__icon">
              <i class="fas fa-upload"></i>
            </div>
            <div class="studioNavbar__right__create__absolute__list__text">
              Upload videos
            </div>
          </div>
          <div class="studioNavbar__right__create__absolute__list">
            <div class="studioNavbar__right__create__absolute__list__icon">
              <i class="fas fa-satellite-dish"></i>
            </div>
            <div class="studioNavbar__right__create__absolute__list__text">
              Go live
            </div>
          </div>
        </div>
      </div>
      <div class="studioNavbar__right__userLogo">
        <img
          :src="profile"
          alt="profile logo"
          class="studioNavbar__right__userLogo__image"
          @click="switchUserOption"
        />
        <div class="studioNavbar__right__userLogo__absolute" v-if="userOption">
          <div class="studioNavbar__right__userLogo__absolute__user">
            <img
              :src="profile"
              alt="profile icon"
              class="studioNavbar__right__userLogo__absolute__user__profile"
            />
            <div class="studioNavbar__right__userLogo__absolute__user__text">
              REdi
            </div>
          </div>
          <div class="studioNavbar__right__userLogo__absolute__functions">
            <div
              class="studioNavbar__right__userLogo__absolute__functions__list"
            >
              <div
                class="studioNavbar__right__userLogo__absolute__functions__list__icon"
              >
                <i class="fas fa-portrait"></i>
              </div>
              <div
                class="studioNavbar__right__userLogo__absolute__functions__list__text"
              >
                Your channel
              </div>
            </div>
            <div
              class="studioNavbar__right__userLogo__absolute__functions__list"
            >
              <div
                class="studioNavbar__right__userLogo__absolute__functions__list__icon"
              >
                <i class="fab fa-youtube"></i>
              </div>
              <div
                class="studioNavbar__right__userLogo__absolute__functions__list__text"
              >
                Youtube
              </div>
            </div>
            <div
              class="studioNavbar__right__userLogo__absolute__functions__list"
            >
              <div
                class="studioNavbar__right__userLogo__absolute__functions__list__icon"
              >
                <i class="fas fa-user-friends"></i>
              </div>
              <div
                class="studioNavbar__right__userLogo__absolute__functions__list__text"
              >
                Switch account
              </div>
              <div
                class="studioNavbar__right__userLogo__absolute__functions__list__nextIcon "
              >
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
            <div
              class="studioNavbar__right__userLogo__absolute__functions__list"
            >
              <div
                class="studioNavbar__right__userLogo__absolute__functions__list__icon"
              >
                <i class="fas fa-sign-out-alt"></i>
              </div>
              <div
                class="studioNavbar__right__userLogo__absolute__functions__list__text"
              >
                Sign out
              </div>
            </div>
          </div>
          <div class="studioNavbar__right__userLogo__absolute__feedback">
            <div
              class="studioNavbar__right__userLogo__absolute__feedback__list"
            >
              <div
                class="studioNavbar__right__userLogo__absolute__feedback__list__icon"
              >
                <i class="fas fa-comment-alt"></i>
              </div>
              <div
                class="studioNavbar__right__userLogo__absolute__feedback__list__text"
              >
                Send feedback
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profile from "@/assets/profile.png";
import { reactive, toRefs } from "vue";
export default {
  name: "StudioNavbar",
  setup() {
    const state = reactive({
      createMenu: false,
      userOption: false
    });
    const goToStudio = () => {
      window.location.href = "/studio";
    };
    const switchCreateMenu = () => {
      state.createMenu = !state.createMenu;
    };
    const switchUserOption = () => {
      state.userOption = !state.userOption;
    };

    return {
      ...toRefs(state),
      profile,
      goToStudio,
      switchCreateMenu,
      switchUserOption
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioNavbar {
  top: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: white;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-family: Roboto, Arial, sans-serif;
}
.studioNavbar__left {
  width: 200px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
}
.studioNavbar__left__navbar {
  width: 40px;
  height: 40px;
}
.studioNavbar__left__navbar:hover {
  cursor: pointer;
}
.studioNavbar__left__navbar .fa-bars {
  line-height: 40px;
  font-size: 1.3rem;
}
.studioNavbar__left__logo {
  height: 40px;
  line-height: 38px;
  font-weight: 500;
  text-align: left;
  font-size: 1.7rem;
  font-family: "Oswald", sans-serif;
}
.studioNavbar__left__logo:hover {
  cursor: pointer;
}
.studioNavbar__left__logo .fa-youtube {
  line-height: 40px;
  font-size: 2rem;
  color: red;
}

.studioNavbar__middle {
  width: 780px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.studioNavbar__middle__wrap {
  width: 100%;
  height: 35px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
}
.studioNavbar__middle__wrap__search {
  width: 7%;
  height: 35px;
}
.studioNavbar__middle__wrap__search .fa-search {
  line-height: 35px;
}
.studioNavbar__middle__wrap__search .fa-search:hover {
  cursor: pointer;
}
.studioNavbar__middle__wrap__input {
  font-family: Roboto, Arial, sans-serif;
  width: 92%;
  height: 100%;
  border: unset;
  font-size: 1rem;
}
.studioNavbar__middle__wrap__input:focus {
  outline: unset;
}

.studioNavbar__right {
  width: 230px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}
.studioNavbar__right__help {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.studioNavbar__right__help:hover {
  cursor: pointer;
}
.studioNavbar__right__help .fa-question-circle {
  line-height: 40px;
  font-size: 1.5rem;
}
.studioNavbar__right__create {
  width: 100px;
  height: 35px;
  display: flex;
  border: 1px solid lightgrey;
  flex-flow: row nowrap;
  justify-content: center;
  border-radius: 2px;
  position: relative;
}
.studioNavbar__right__create__absolute {
  position: absolute;
  width: 180px;
  height: 100px;
  background-color: white;
  box-shadow: 0 1px 5px grey;
  top: 36px;
  right: 0px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
.studioNavbar__right__create__absolute__list {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
}
.studioNavbar__right__create__absolute__list:hover {
  background-color: rgb(241, 241, 241);
}
.studioNavbar__right__create__absolute__list__icon {
  width: 25%;
  height: 40px;
}
.studioNavbar__right__create__absolute__list__icon .fas {
  line-height: 40px;
}
.studioNavbar__right__create__absolute__list__text {
  width: 75%;
  height: 40px;
  line-height: 40px;
  text-align: left;
}
.studioNavbar__right__create:hover {
  cursor: pointer;
}
.studioNavbar__right__create__icon .fa-video {
  font-size: 1.2rem;
  line-height: 35px;
  color: red;
}
.studioNavbar__right__create__text {
  line-height: 35px;
  color: rgb(63, 62, 62);
  font-weight: 500;
  font-size: 0.9rem;
  margin: 0 5px;
}
.studioNavbar__right__userLogo {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
}
.studioNavbar__right__userLogo:hover {
  cursor: pointer;
}
.studioNavbar__right__userLogo__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.studioNavbar__right__userLogo__absolute {
  position: absolute;
  width: 300px;
  background-color: white;
  box-shadow: 0 1px 5px grey;
  left: -265px;
  top: 36px;
}
.studioNavbar__right__userLogo__absolute__user {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.studioNavbar__right__userLogo__absolute__user__profile {
  width: 16%;
  height: 80%;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 10px;
}
.studioNavbar__right__userLogo__absolute__user__text {
  width: 70%;
  height: 80%;
  line-height: 50px;
  text-align: left;
  font-weight: 500;
  text-indent: 15px;
}
.studioNavbar__right__userLogo__absolute__functions {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid lightgrey;
}
.studioNavbar__right__userLogo__absolute__functions__list {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
}
.studioNavbar__right__userLogo__absolute__functions__list:hover {
  background-color: rgb(238, 238, 238);
  cursor: pointer;
}
.studioNavbar__right__userLogo__absolute__functions__list:first-child {
  margin-top: 5px;
}
.studioNavbar__right__userLogo__absolute__functions__list:last-child {
  margin-bottom: 5px;
}
.studioNavbar__right__userLogo__absolute__functions__list__icon {
  width: 15%;
  height: 100%;
}
.studioNavbar__right__userLogo__absolute__functions__list__icon .fas,
.studioNavbar__right__userLogo__absolute__functions__list__icon .fab {
  line-height: 40px;
  font-size: 1.3rem;
}
.studioNavbar__right__userLogo__absolute__functions__list__text {
  width: 70%;
  height: 100%;
  text-align: left;
  line-height: 40px;
  text-indent: 10px;
}
.studioNavbar__right__userLogo__absolute__functions__list__nextIcon {
  width: 15%;
}
.studioNavbar__right__userLogo__absolute__functions__list__nextIcon .fas {
  line-height: 40px;
}
.studioNavbar__right__userLogo__absolute__feedback {
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.studioNavbar__right__userLogo__absolute__feedback__list {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
}
.studioNavbar__right__userLogo__absolute__feedback__list__icon {
  width: 15%;
  height: 100%;
}
.studioNavbar__right__userLogo__absolute__feedback__list__icon .fas {
  line-height: 40px;
}
.studioNavbar__right__userLogo__absolute__feedback__list__text {
  width: 70%;
  height: 100%;
  line-height: 40px;
  text-align: left;
  text-indent: 10px;
}
</style>
