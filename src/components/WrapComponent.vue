<template>
  <div class="wc">
    <div
      :class="[
        componentType == 'Channel'
          ? 'wc__channel__upload wc__channel__upload--240px'
          : componentType == 'movie'
          ? 'wc__channel__upload wc__channel__upload--movie'
          : componentType == 'live'
          ? 'wc__channel__upload wc__channel__upload--live'
          : myWidth == 7
          ? 'wc__channel__upload--7'
          : myWidth == 8
          ? 'wc__channel__upload--8'
          : myWidth == 9
          ? 'wc__channel__upload--9'
          : myWidth == 10
          ? 'wc__channel__upload--10'
          : 'wc__channel__upload'
      ]"
    >
      <div
        :class="[
          componentType == 'live'
            ? 'wc__channel__upload__header wc__channel__upload__header--live'
            : 'wc__channel__upload__header'
        ]"
      >
        <div
          :class="[
            myWidth == 7 && playall == false && viewall == false
              ? 'wc__channel__upload__header__left--7--100'
              : 'wc__channel__upload__header__left'
          ]"
        >
          <div class="wc__channel__upload__header__text">
            <div
              :class="[
                componentType == 'sports'
                  ? 'wc__channel__upload__header__maintext wc__channel__upload__header__maintext--sports'
                  : 'wc__channel__upload__header__maintext'
              ]"
            >
              {{ title }}
            </div>
            <div
              v-if="subTitle"
              :class="[
                subTitleColor
                  ? 'wc__channel__upload__header__subtext wc__channel__upload__header__subtext--grey '
                  : 'wc__channel__upload__header__subtext'
              ]"
            >
              {{ subTitle }}
            </div>
          </div>
          <div v-if="playall" class="wc__channel__upload__header__playall">
            <i class="fas fa-play"></i> PLAY ALL
          </div>
        </div>
        <div v-if="viewall" class="wc__channel__upload__header__right">
          <button class="wc__channel__upload__header__button">
            VIEW ALL
          </button>
        </div>
      </div>

      <div
        :class="[
          componentType == 'movie'
            ? 'wc__channel__upload__wrap wc__channel__upload__wrap--movie'
            : componentType == 'live'
            ? 'wc__channel__upload__wrap wc__channel__upload__wrap--live'
            : 'wc__channel__upload__wrap',
          myWidth == 7
            ? 'wc__channel__upload__wrap--7'
            : myWidth == 8
            ? 'wc__channel__upload__wrap--8'
            : myWidth == 9
            ? 'wc__channel__upload__wrap--9'
            : myWidth == 10
            ? 'wc__channel__upload__wrap--10'
            : 'wc__channel__upload__wrap',
          gridRepeat == 4 ? 'wc__channel__upload__wrap__gridRepeat--4' : ''
        ]"
      >
        <slot></slot>
        <i v-if="nextButton" class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WrapComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false
    },
    subTitleColor: {
      type: Boolean,
      required: false
    },
    playall: {
      type: Boolean,
      required: false
    },
    nextButton: {
      type: Boolean,
      required: false
    },
    componentType: {
      type: String,
      required: false
    },
    viewall: {
      type: Boolean,
      required: false
    },
    gridRepeat: {
      type: Number,
      required: false
    },
    myWidth: {
      type: Number,
      required: false
    }
  },
  components: {},
  setup() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.wc {
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
}

.wc__channel__upload {
  width: 100%;
  height: 320px;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
}
.wc__channel__upload--7 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
}
.wc__channel__upload--8 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
}
.wc__channel__upload--9 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
}
.wc__channel__upload--10 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
}
.wc__channel__upload--10 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
}

.wc__channel__upload--240px {
  min-height: 240px;
}

.wc__channel__upload--movie {
  height: 100%;
}
.wc__channel__upload--live {
  height: 100%;
}
.wc__channel__upload__header {
  width: 100%;
  max-height: 70px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.wc__channel__upload__header--live {
  height: 30px;
  padding: 10px 0;
}

.wc__channel__upload__header__left {
  height: 100%;
  width: 60%;
  display: flex;
  flex-flow: row nowrap;
}
.wc__channel__upload__header__left--7--100 {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.wc__channel__upload__header__right {
  height: 100%;
  width: 100px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.wc__channel__upload__header__button {
  font-family: "Roboto", Arial, sans-serif;
  width: 100%;
  height: 30px;
  font-size: 0.9rem;
  border: 0px;
  color: dodgerblue;
  font-weight: 500;
  background-color: transparent;
}
.wc__channel__upload__header__button:hover {
  cursor: pointer;
}
.wc__channel__upload__header__button:focus {
  outline: 0px;
}

.wc__channel__upload__header__text {
  min-height: 30px;
  line-height: 30px;
  font-family: "Roboto", Arial, sans-serif;
  text-align: left;
  font-weight: 500;
}
.wc__channel__upload__header__maintext {
  font-size: 1rem;
}
.wc__channel__upload__header__maintext--sports {
  font-size: 1.5rem;
}
.wc__channel__upload__header__subtext {
  text-align: left;
  width: 100%;
  font-size: 0.85rem;
  color: rgb(109, 109, 109);
  font-weight: 400;
}
.wc__channel__upload__header__subtext--grey {
  color: rgb(182, 181, 181);
}
.wc__channel__upload__header__playall {
  height: 30px;
  line-height: 30px;
  margin-left: 20px;
  font-weight: 500;
  color: rgb(20, 20, 20);
  font-size: 0.9rem;
}
.wc__channel__upload__header__playall:hover {
  cursor: pointer;
}
.wc__channel__upload__header__playall .fas {
  line-height: 30px;
  color: rgb(20, 20, 20);
  font-size: 0.9rem;
}

.wc__channel__upload__wrap {
  width: 100%;
  height: 224px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 5px;
  position: relative;
}
.wc__channel__upload__wrap--7 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
  position: relative;
}
.wc__channel__upload__wrap--8 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
  position: relative;
}
.wc__channel__upload__wrap--9 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
  position: relative;
}
.wc__channel__upload__wrap--10 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 5px;
  position: relative;
}
.wc__channel__upload__wrap__gridRepeat--4 {
  grid-template-columns: repeat(4, 1fr);
}
.wc__channel__upload__wrap--movie {
  height: 100%;
}
.wc__channel__upload__wrap--live {
  height: 100%;
}
.fa-chevron-right {
  display: inline-block;
  width: 10px;
  height: 10px;
  padding: 15px;
  border-radius: 50%;
  background-color: white;
  line-height: 10px;
  position: absolute;
  right: -20px;
  top: 35px;
  box-shadow: 0 0 5px grey;
}
.fa-chevron-right:hover {
  cursor: pointer;
}
</style>
