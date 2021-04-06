<template>
  <div class="wc">
    <div
      :class="[
        myWidth == 7
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
      <div class="wc__channel__upload__header">
        <img
          :src="require('@/assets/' + image)"
          class="wc__channel__upload__header__image"
          alt="game logo"
        />
        <div class="wc__channel__upload__header__left">
          <div class="wc__channel__upload__header__text">
            <div class="wc__channel__upload__header__maintext">
              {{ title }}
            </div>
            <div v-if="subTitle" class="wc__channel__upload__header__subtext">
              {{ subTitle }}
            </div>
          </div>
        </div>
      </div>
      <div
        :class="[
          myWidth == 7
            ? 'wc__channel__upload__wrap--7'
            : myWidth == 8
            ? 'wc__channel__upload__wrap--8'
            : myWidth == 9
            ? 'wc__channel__upload__wrap--9'
            : myWidth == 10
            ? 'wc__channel__upload__wrap--10'
            : 'wc__channel__upload__wrap'
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
  name: "WrapComponentGame",
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false
    },
    myWidth: {
      type: Number,
      required: false
    },
    image: String,
    nextButton: Boolean
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
  margin-top: 20px;
}

.wc__channel__upload {
  width: 1281px;
  height: 300px;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
}
.wc__channel__upload--7 {
  width: 100%;
  height: 300px;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
}

.wc__channel__upload--8 {
  width: 100%;
  height: 300px;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
}

.wc__channel__upload--9 {
  width: 100%;
  height: 300px;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
}

.wc__channel__upload--10 {
  width: 100%;
  height: 300px;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
}
.wc__channel__upload__header {
  width: 100%;
  height: 70px;
  display: flex;
  flex-flow: row nowrap;

  justify-content: flex-start;
  align-items: center;
}
.wc__channel__upload__header__image {
  height: 70%;
  width: 40px;
  background-color: red;
  object-fit: cover;
}

.wc__channel__upload__header__left {
  height: 100%;
  width: 150px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-left: 5px;
}

.wc__channel__upload__header__text {
  height: 30%;
  margin-top: -10px;
  font-family: "Roboto", Arial, sans-serif;
  text-align: left;
  font-weight: 500;
}
.wc__channel__upload__header__subtext {
  width: 100%;
  height: 20px;
  text-align: left;
  font-size: 0.85rem;
  color: rgb(26, 26, 26);
  font-weight: 300;
  line-height: 15px;
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
  height: 224px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
  position: relative;
}
.wc__channel__upload__wrap--8 {
  width: 100%;
  height: 224px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
  position: relative;
}
.wc__channel__upload__wrap--9 {
  width: 100%;
  height: 224px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
  position: relative;
}
.wc__channel__upload__wrap--10 {
  width: 100%;
  height: 224px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 5px;
  position: relative;
}
</style>
