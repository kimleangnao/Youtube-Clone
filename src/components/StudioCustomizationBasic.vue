<template>
  <div class="studioCustomizationBasic">
    <div class="studioCustomizationBasic__title">
      Channel name and description
    </div>
    <div class="studioCustomizationBasic__channelName">
      REdi <i class="fas fa-pen"></i>
    </div>
    <div class="studioCustomizationBasic__textarea">
      <div class="studioCustomizationBasic__textarea__title ">
        Channel description
      </div>
      <textarea
        class="studioCustomizationBasic__textarea__textarea"
        placeholder="Write your channel description here..."
      ></textarea>
    </div>
    <div class="studioCustomizationBasic__addLanguage">
      <i class="fas fa-plus"></i>
      <div class="studioCustomizationBasic__addLanguage__text">
        ADD LANGUAGE
      </div>
    </div>
    <div class="studioCustomizationBasic__title margin-top">
      Channel URL
    </div>
    <div class="studioCustomizationBasic__subText">
      This is the standard web address for your channel. It includes your unique
      channel ID, which is the numbers and letters at the end of the URL.
      <span class="link__tag">Learn more</span>
    </div>
    <div class="studioCustomizationBasic__link">
      <div class="studioCustomizationBasic__link__text">
        www.youtube.com/channel/dfdf
      </div>
      <div class="studioCustomizationBasic__link__copy">
        <i class="far fa-clone"></i>
      </div>
    </div>
    <div class="studioCustomizationBasic__title margin-top">
      Links
    </div>
    <div class="studioCustomizationBasic__subText">
      Add links to sites you want to share with your viewers
    </div>
    <div class="studioCustomizationBasic__addLanguage">
      <i class="fas fa-plus"></i>
      <div class="studioCustomizationBasic__addLanguage__text">
        ADD LINKS
      </div>
    </div>
    <div class="studioCustomizationBasic__title margin-top">
      Contact info
    </div>
    <div class="studioCustomizationBasic__subText">
      Let people know how to contact you with business inquiries. The email
      address you enter may appear in the About section of your channel and be
      visible to viewers.
    </div>
    <div class="studioCustomizationBasic__email">
      <div class="studioCustomizationBasic__email__text">Email</div>
      <input type="email" class="studioCustomizationBasic__email__input" />
    </div>
  </div>
</template>

<script>
export default {
  name: "StudioCustomizationBasic",
  setup() {
    return {};
  }
};
</script>

<style scoped>
.studioCustomizationBasic {
  width: 50%;
  height: 100%;
  margin-left: 25px;
  margin-top: 25px;
}
.studioCustomizationBasic__title {
  text-align: left;
  font-size: 0.9rem;
  font-weight: 500;
}
.studioCustomizationBasic__channelName {
  text-align: left;
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 5px;
}
.studioCustomizationBasic__textarea {
  width: 100%;
  height: 100%;
  border: 1px solid lightgrey;
  margin-top: 20px;
  border-radius: 2px;
}
.studioCustomizationBasic__textarea__title {
  text-align: left;
  margin: 20px;
}
.studioCustomizationBasic__textarea__textarea {
  width: 95%;
  margin-bottom: 15px;
  height: 140px;
  font-size: 0.9rem;
  resize: none;
  font-family: Roboto, Arial, sans-serif;
  border: unset;
  margin-top: -10px;
}
.studioCustomizationBasic__textarea__textarea:focus {
  outline: unset;
}

.studioCustomizationBasic__addLanguage {
  width: 140px;
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: 20px;
}
.studioCustomizationBasic__addLanguage:hover {
  cursor: pointer;
}
.studioCustomizationBasic__addLanguage .fas {
  color: dodgerblue;
}
.studioCustomizationBasic__addLanguage__text {
  margin-left: 5px;
  color: dodgerblue;
  font-weight: 500;
  font-size: 0.9rem;
}

.studioCustomizationBasic__subText {
  color: grey;
  font-size: 0.9rem;
  text-align: left;
}
.studioCustomizationBasic__link {
  width: 100%;
  height: 30px;
  border: 1px solid grey;
  margin-top: 10px;
  border-radius: 4px;
  display: flex;
  flex-flow: row nowrap;
}
.studioCustomizationBasic__link__text {
  width: 95%;
  height: 100%;
  text-align: left;
  line-height: 30px;
  text-indent: 10px;
  font-size: 0.9rem;
}
.studioCustomizationBasic__link__copy {
  width: 5%;
  height: 100%;
}
.studioCustomizationBasic__link__copy .far {
  line-height: 30px;
}
.studioCustomizationBasic__link__copy:hover {
  cursor: pointer;
}
.studioCustomizationBasic__email {
  width: 350px;
  height: 100%;
  border: 1px solid grey;
  margin-top: 10px;
  border-radius: 5px;
}
.studioCustomizationBasic__email__text {
  text-align: left;
  margin: 5px 5px;
  font-size: 0.9rem;
}
.studioCustomizationBasic__email__input {
  width: 95%;
  height: 20px;
  margin: 0 auto;
  border: unset;
}
.studioCustomizationBasic__email__input:focus {
  outline: unset;
}
.margin-top {
  margin-top: 25px;
}
.link__tag {
  cursor: pointer;
  color: dodgerblue;
}
</style>
