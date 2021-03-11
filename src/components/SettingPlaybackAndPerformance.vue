<template>
  <div class="SPP">
    <div class="SPP__title">Playback and performance</div>
    <div class="SPP__boldText">Control your video viewing experience</div>
    <div class="SPP__subText">Playback settings apply to this browser only</div>
  </div>
  <div class="SPP__infocard">
    <div class="SPP__infocard__title">Info cards</div>
    <div class="SPP__infocard__detail">
      <div class="SPP__infocard__detail__input">
        <input
          type="checkbox"
          class="SPP__infocard__detail__input__checkbox"
          checked
        />
      </div>
      <div class="SPP__infocard__detail__text">
        Show in-video info cards <i class="fas fa-question-circle"></i>
      </div>
    </div>
  </div>
  <div class="SPP__infocard">
    <div class="SPP__infocard__title">Subtitles and Closed Captions</div>
    <div class="SPP__infocard__detail">
      <div class="SPP__infocard__detail__wrap">
        <div class="SPP__infocard__detail__input">
          <input
            type="checkbox"
            class="SPP__infocard__detail__input__checkbox"
          />
        </div>
        <div class="SPP__infocard__detail__text">Always show captions</div>
      </div>
      <div class="SPP__infocard__detail__wrap">
        <div class="SPP__infocard__detail__input">
          <input
            type="checkbox"
            class="SPP__infocard__detail__input__checkbox"
            checked
          />
        </div>
        <div class="SPP__infocard__detail__text">
          Include auto-generated captions (when available)
        </div>
      </div>
    </div>
  </div>
  <div class="SPP__infocard">
    <div class="SPP__infocard__title">AV1 settings</div>
    <div class="SPP__infocard__detail">
      <div class="SPP__infocard__detail__wrap">
        <div class="SPP__infocard__detail__input">
          <input
            type="radio"
            name="AV1"
            class="SPP__infocard__detail__input__checkbox"
            checked
          />
        </div>
        <div class="SPP__infocard__detail__text">Auto (recommended)</div>
      </div>
      <div class="SPP__infocard__detail__wrap">
        <div class="SPP__infocard__detail__input">
          <input
            type="radio"
            name="AV1"
            class="SPP__infocard__detail__input__checkbox"
          />
        </div>
        <div class="SPP__infocard__detail__text">
          Prefer AV1 for SD<i class="fas fa-question-circle"></i>
        </div>
      </div>
      <div class="SPP__infocard__detail__wrap">
        <div class="SPP__infocard__detail__input">
          <input
            type="radio"
            name="AV1"
            class="SPP__infocard__detail__input__checkbox"
          />
        </div>
        <div class="SPP__infocard__detail__text">
          Always prefer AV1 <i class="fas fa-question-circle"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingPlaybackAndPerformance",
  setup() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.SPP {
  width: 100%;
  color: black;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 50px;
  text-align: left;
  font-family: Roboto, Arial, sans-serif;
}
.SPP__title {
  padding: 40px 0;
  font-weight: 500;
}
.SPP__boldText {
  font-size: 1.5rem;
}
.SPP__subText {
  color: grey;
  font-size: 0.9rem;
  margin: 10px 0;
}

.SPP__infocard {
  width: 100%;
  height: 100%;
  margin: 40px 0;
  display: flex;
  flex-flow: row nowrap;
  text-align: left;
  font-family: Roboto, Arial, sans-serif;
}
.SPP__infocard__title {
  width: 15%;
  font-weight: 500;
  font-size: 0.9rem;
}
.SPP__infocard__detail {
  width: 70%;
  margin-left: 6%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
}
.SPP__infocard__detail__wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 15px;
}
.SPP__infocard__detail__input {
  width: 25px;
  height: 25px;
}
.SPP__infocard__detail__text {
  width: 70%;
  height: 100%;
  line-height: 25px;
  padding-left: 20px;
  font-size: 0.9rem;
}
.SPP__infocard__detail__input__checkbox {
  width: 100%;
  height: 100%;
  margin: 0;
}

.SPP__infocard__detail__input__checkbox:focus {
  outline: unset;
}

.fa-question-circle {
  padding: 0 25px;
}
</style>
