<template>
  <div class="studioCutomizationBranding">
    <div class="studioCutomizationBranding__title">Profile picture</div>
    <div class="studioCutomizationBranding__subText">
      Your profile picture will appear where your channel is presented on
      YouTube, like next to your videos and comments. Changes you make here will
      be reflected across other Google services.
    </div>
    <div class="studioCutomizationBranding__wrap">
      <div class="studioCutomizationBranding__wrap__profile">
        <img
          :src="profile"
          alt="profile image"
          class="studioCutomizationBranding__wrap__profile__img"
        />
      </div>
      <div class="studioCutomizationBranding__wrap__text">
        <div class="studioCutomizationBranding__wrap__text__subText">
          It’s recommended to use a picture that’s at least 98 x 98 pixels and
          4MB or less. Use a PNG or GIF (no animations) file. Make sure your
          picture follows the YouTube Community Guidelines.
          <span class="link__tag">Learn more</span>
        </div>
        <div class="studioCutomizationBranding__wrap__tex__buttons">
          <div class="studioCutomizationBranding__wrap__tex__buttons__change">
            CHANGE
          </div>
          <div class="studioCutomizationBranding__wrap__tex__buttons__remove">
            REMOVE
          </div>
        </div>
      </div>
    </div>
    <div class="studioCutomizationBranding__title">Banner image</div>
    <div class="studioCutomizationBranding__subText">
      This image will appear across the top of your channel
    </div>
    <div class="studioCutomizationBranding__wrap">
      <div class="studioCutomizationBranding__wrap__profile">
        <img
          :src="profile"
          alt="profile image"
          class="studioCutomizationBranding__wrap__profile__img--banner"
        />
      </div>
      <div class="studioCutomizationBranding__wrap__text">
        <div class="studioCutomizationBranding__wrap__text__subText">
          For the best results on all devices, use an image that’s at least 2048
          x 1152 pixels and 6MB or less.
          <span class="link__tag">Learn more</span>
        </div>
        <div class="studioCutomizationBranding__wrap__tex__buttons">
          <div class="studioCutomizationBranding__wrap__tex__buttons__change">
            UPLOAD
          </div>
        </div>
      </div>
    </div>
    <div class="studioCutomizationBranding__title">Video watermark</div>
    <div class="studioCutomizationBranding__subText">
      The watermark will appear on your videos in the right-hand corner of the
      video player
    </div>
    <div class="studioCutomizationBranding__wrap">
      <div class="studioCutomizationBranding__wrap__profile">
        <div class="studioCutomizationBranding__wrap__profile__watermark"></div>
      </div>
      <div class="studioCutomizationBranding__wrap__text">
        <div class="studioCutomizationBranding__wrap__text__subText">
          An image that’s 150 x 150 pixels is recommended. Use a PNG, GIF (no
          animations), BMP, or JPEG file that’s 1MB or less.
        </div>
        <div class="studioCutomizationBranding__wrap__tex__buttons">
          <div class="studioCutomizationBranding__wrap__tex__buttons__change">
            UPLOAD
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profile from "@/assets/profile.png";
export default {
  name: "StudioCustomizationBranding",
  setup() {
    return { profile };
  }
};
</script>

<style scoped>
.studioCutomizationBranding {
  width: 50%;
  height: 100%;
  margin: 25px;
}
.studioCutomizationBranding__title {
  text-align: left;
  font-size: 0.9rem;
  font-weight: 500;
}
.studioCutomizationBranding__subText {
  text-align: left;
  font-size: 0.85rem;
}
.studioCutomizationBranding__wrap {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 25px;
}
.studioCutomizationBranding__wrap__profile {
  width: 35%;
  height: 160px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(233, 233, 233);
  position: relative;
}
.studioCutomizationBranding__wrap__profile__img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
}
.studioCutomizationBranding__wrap__profile__img--banner {
  width: 80%;
  height: 80%;
  object-fit: cover;
}
.studioCutomizationBranding__wrap__profile__watermark {
  position: absolute;
  width: 50px;
  height: 60px;
  background-color: grey;
  right: 0;
  bottom: 0;
}
.studioCutomizationBranding__wrap__text {
  width: 40%;
  height: 100%;
  margin-left: 25px;
  display: flex;
  flex-flow: row nowrap;
  display: flex;
  flex-flow: row wrap;
}
.studioCutomizationBranding__wrap__text__subText {
  width: 100%;
  text-align: left;
  font-size: 0.8rem;
}
.studioCutomizationBranding__wrap__tex__buttons {
  width: 100%;
  height: 40px;
  margin-top: 15px;
  display: flex;
  flex-flow: row nowrap;
  line-height: 40px;
  font-size: 0.9rem;
  font-weight: 500;
}
.studioCutomizationBranding__wrap__tex__buttons__change {
  color: dodgerblue;
}
.studioCutomizationBranding__wrap__tex__buttons__change:hover {
  cursor: pointer;
}
.studioCutomizationBranding__wrap__tex__buttons__remove {
  color: dodgerblue;
  margin-left: 25px;
}
.studioCutomizationBranding__wrap__tex__buttons__remove:hover {
  cursor: pointer;
}
.link__tag {
  color: dodgerblue;
  cursor: pointer;
}
</style>
