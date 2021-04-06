<template>
  <div class="channelwrap">
    <div
      :class="[
        myWidth == 7
          ? 'channelwrap__channel__wrap__header__details__left--7 '
          : myWidth == 8
          ? 'channelwrap__channel__wrap__header__details__left--8'
          : 'channelwrap__channel__wrap__header__details__left'
      ]"
    >
      <slot v-if="customizeProfile"></slot>
      <img
        v-else
        :src="profile"
        :class="[
          myWidth == 7
            ? 'channelwrap__channel__wrap__header__details__left__channel--7'
            : myWidth == 7
            ? 'channelwrap__channel__wrap__header__details__left__channel--8'
            : 'channelwrap__channel__wrap__header__details__left__channel'
        ]"
        alt="channel image"
      />
      <div
        :class="[
          myWidth == 7
            ? 'channelwrap__channel__wrap__header__details__left__nameAndSub--7'
            : myWidth == 8
            ? 'channelwrap__channel__wrap__header__details__left__nameAndSub--8'
            : 'channelwrap__channel__wrap__header__details__left__nameAndSub'
        ]"
      >
        <div
          class="channelwrap__channel__wrap__header__details__left__nameAndSub__name"
          :style="{ color: titleColor }"
          @click="goBackToSection"
        >
          {{ title ? title : "Unknown" }} <i class="fas fa-check-circle"></i>
        </div>
        <div
          v-if="showSubscriber"
          :style="{ color: titleColor }"
          class="channelwrap__channel__wrap__header__details__left__nameAndSub__subcount"
        >
          {{ subScriberAmount ? subScriberAmount : 500 }} Subscribers
        </div>
      </div>
    </div>
    <div
      :class="[
        myWidth == 7
          ? 'channelwrap__channel__wrap__header__details__right--7'
          : myWidth == 8
          ? 'channelwrap__channel__wrap__header__details__right--8'
          : 'channelwrap__channel__wrap__header__details__right'
      ]"
    >
      <button
        class="channelwrap__channel__wrap__header__details__right__button"
      >
        SUBSCRIBE
      </button>
      <div class="channelwrap__channel__wrap__header__details__right__bell">
        <i class="far fa-bell"></i>
      </div>
    </div>
  </div>
</template>

<script>
import profile from "@/assets/profile.png";

export default {
  name: "channelWrap",
  props: {
    title: {
      type: String,
      required: true
    },
    subScriberAmount: {
      type: Number,
      required: false
    },
    showSubscriber: {
      type: Boolean,
      require: false
    },
    customizeProfile: {
      type: Boolean,
      require: false
    },
    myWidth: {
      type: Number,
      required: false
    },
    titleColor: {
      type: String,
      required: false
    },
    goBackToSection: Function
  },
  setup() {
    return { profile };
  }
};
</script>

<style scoped>
.channelwrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  color: black;
}

.channelwrap__channel__wrap__header__details__left {
  width: 850px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-family: Roboto, Arial, sans-serif;
}
.channelwrap__channel__wrap__header__details__left--7 {
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-family: Roboto, Arial, sans-serif;
}
.channelwrap__channel__wrap__header__details__left--8 {
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-family: Roboto, Arial, sans-serif;
}
.channelwrap__channel__wrap__header__details__left__channel {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
}
.channelwrap__channel__wrap__header__details__left__channel--7 {
  display: none;
}
.channelwrap__channel__wrap__header__details__left__channel--8 {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
}
.channelwrap__channel__wrap__header__details__left__nameAndSub {
  width: 700px;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  margin-left: 30px;
  text-align: left;
  color: white;
}
.channelwrap__channel__wrap__header__details__left__nameAndSub--7 {
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  margin-left: 10px;
  text-align: left;
  color: white;
}
.channelwrap__channel__wrap__header__details__left__nameAndSub--8 {
  width: 70%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  margin-left: 30px;
  text-align: left;
  color: white;
}
.channelwrap__channel__wrap__header__details__left__nameAndSub__name {
  width: 100%;
  height: 40%;
  line-height: 45px;
  font-size: 1rem;
  font-weight: 500;
}
.channelwrap__channel__wrap__header__details__left__nameAndSub__name:hover {
  cursor: pointer;
}
.fas {
  line-height: 44px;
}
.channelwrap__channel__wrap__header__details__left__nameAndSub__subcount {
  width: 100%;
  height: 30%;
  font-size: 0.75rem;
  color: white;
}

.channelwrap__channel__wrap__header__details__right {
  width: 15%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
.channelwrap__channel__wrap__header__details__right--7 {
  width: 35%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
}
.channelwrap__channel__wrap__header__details__right--8 {
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
}
.channelwrap__channel__wrap__header__details__right__button {
  width: 70%;
  height: 50%;
  background-color: red;
  border: 0;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  font-family: Roboto, Arial, sans-serif;
  border-radius: 2px;
}
.channelwrap__channel__wrap__header__details__right__button:hover {
  cursor: pointer;
}
.channelwrap__channel__wrap__header__details__right__button:focus {
  outline: 0px;
}
.channelwrap__channel__wrap__header__details__right__bell {
  width: 20%;
  height: 50%;
  font-size: 1.5rem;
  line-height: 48px;
  display: none;
}
.channelwrap__channel__wrap__header__details__right__bell:hover {
  cursor: pointer;
}
</style>
