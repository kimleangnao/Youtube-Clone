<template>
  <div class="studioCustomizationLayout">
    <div class="studioCustomizationLayout__title">Video spotlight</div>
    <div class="studioCustomizationLayout__subText">
      Add a video to the top of your channel home page
    </div>
    <div class="studioCustomizationLayout__trailer">
      <div class="studioCustomizationLayout__trailer__left">
        <div class="studioCustomizationLayout__trailer__left__icon">
          <i class="fas fa-film"></i>
        </div>
        <div class="studioCustomizationLayout__trailer__left__text">
          <div class="studioCustomizationLayout__trailer__left__text__title">
            Channel trailer for people who haven't subscribed
          </div>
          <div class="studioCustomizationLayout__trailer__left__text__subText">
            Share a preview of your channel shown with people who haven't
            subscribed yet. <span class="link__tag">Learn more</span>
          </div>
        </div>
      </div>
      <div class="studioCustomizationLayout__trailer__right">
        ADD
      </div>
    </div>
    <div class="studioCustomizationLayout__trailer">
      <div class="studioCustomizationLayout__trailer__left">
        <div class="studioCustomizationLayout__trailer__left__icon">
          <i class="fas fa-video"></i>
        </div>
        <div class="studioCustomizationLayout__trailer__left__text">
          <div class="studioCustomizationLayout__trailer__left__text__title">
            Featured video for returning subscribers
          </div>
          <div class="studioCustomizationLayout__trailer__left__text__subText">
            Highlight a video for your subscribers to watch. This video won’t be
            shown again at the top of your page for subscribers who have watched
            it. <span class="link__tag">Learn more</span>
          </div>
        </div>
      </div>
      <div class="studioCustomizationLayout__trailer__right">
        ADD
      </div>
    </div>
    <div class="studioCustomizationLayout__feature">
      <div class="studioCustomizationLayout__feature__left">
        <div class="studioCustomizationLayout__feature__left__title">
          Featured sections
        </div>
        <div class="studioCustomizationLayout__feature__left__subText">
          Customize the layout of your channel homepage with up to 10 sections.
          <span class="link__tag">Learn more</span>
        </div>
      </div>
      <div class="studioCustomizationLayout__feature__right">
        <i class="fas fa-plus"></i>
        <div class="studioCustomizationLayout__feature__right__text">
          ADD SECTION
        </div>
      </div>
    </div>
    <div class="studioCustomizationLayout__featureVideo">
      <div class="studioCustomizationLayout__featureVideo__left">
        <i class="fas fa-grip-lines"></i>
      </div>
      <div class="studioCustomizationLayout__featureVideo__right">
        <div class="studioCustomizationLayout__featureVideo__right__title">
          Uploads (0)
        </div>
        <div class="studioCustomizationLayout__featureVideo__right__subText">
          This section will appear when a video has been uploaded
        </div>
      </div>
      <div class="studioCustomizationLayout__featureVideo__option">
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudioCustomizationLayout",
  setup() {
    return {};
  }
};
</script>

<style scoped>
.studioCustomizationLayout {
  width: 100%;
  height: 100%;
}
.studioCustomizationLayout__title {
  text-align: left;
  margin-left: 25px;
  margin-top: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  width: 50%;
}
.studioCustomizationLayout__subText {
  text-align: left;
  margin-left: 25px;
  margin-top: 5px;
  font-size: 0.8rem;
  color: grey;
  width: 50%;
}
.studioCustomizationLayout__trailer {
  width: 50%;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-left: 25px;
  margin-top: 15px;
  display: flex;
  flex-flow: row nowrap;
}
.studioCustomizationLayout__trailer__left {
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
}
.studioCustomizationLayout__trailer__left__icon {
  width: 10%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
.studioCustomizationLayout__trailer__left__icon .fas {
  background-color: lightgrey;
  padding: 10px 9px;
  border-radius: 50%;
  font-size: 1.5rem;
}
.studioCustomizationLayout__trailer__left__icon .fa-film {
  background-color: lightgrey;
  padding: 7px 8px;
  border-radius: 50%;
  font-size: 1.5rem;
}
.studioCustomizationLayout__trailer__left__text {
  width: 90%;
}
.studioCustomizationLayout__trailer__left__text__title {
  text-align: left;
  margin-top: 10px;
  width: 100%;
  height: 30px;
  line-height: 40px;
  font-weight: 500;
  font-size: 0.95rem;
}
.studioCustomizationLayout__trailer__left__text__subText {
  text-align: left;
  width: 100%;
  line-height: 20px;
  font-size: 0.8rem;
  margin-bottom: 10px;
}
.link__tag {
  cursor: pointer;
  color: dodgerblue;
}
.studioCustomizationLayout__trailer__right {
  width: 10%;
  font-size: 0.9rem;
  color: dodgerblue;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}
.studioCustomizationLayout__trailer__right:hover {
  cursor: pointer;
}

.studioCustomizationLayout__feature {
  width: 50%;
  height: 50px;
  margin: 25px 25px;
  display: flex;
  flex-flow: row nowrap;
}
.studioCustomizationLayout__feature__left {
  width: 80%;
  height: 100%;
}
.studioCustomizationLayout__feature__left__title {
  text-align: left;
  font-size: 0.9rem;
  font-weight: 500;
  height: 50%;
}
.studioCustomizationLayout__feature__left__subText {
  text-align: left;
  font-size: 0.8rem;
}
.studioCustomizationLayout__feature__right {
  width: 20%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.studioCustomizationLayout__feature__right:hover {
  cursor: pointer;
}
.studioCustomizationLayout__feature__right .fa-plus {
  font-size: 0.9rem;
  color: dodgerblue;
}
.studioCustomizationLayout__feature__right__text {
  font-weight: 500;
  font-size: 0.9rem;
  color: dodgerblue;
  margin-left: 5px;
}

.studioCustomizationLayout__featureVideo {
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin-left: 25px;
  border: 1px solid lightgrey;
}
.studioCustomizationLayout__featureVideo:hover
  .studioCustomizationLayout__featureVideo__option
  .fas {
  display: block;
}
.studioCustomizationLayout__featureVideo__left {
  width: 10%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.studioCustomizationLayout__featureVideo__left .fas {
  font-size: 1rem;
}
.studioCustomizationLayout__featureVideo__right {
  width: 80%;
  height: 70px;
}
.studioCustomizationLayout__featureVideo__right__title {
  width: 100%;
  height: 20px;
  margin-top: 15px;
  text-align: left;
  font-size: 0.9rem;
  font-weight: 500;
}
.studioCustomizationLayout__featureVideo__right__subText {
  width: 100%;
  height: 20px;
  text-align: left;
  font-size: 0.85rem;
}
.studioCustomizationLayout__featureVideo__option {
  width: 10%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.studioCustomizationLayout__featureVideo__option .fas {
  cursor: pointer;
  display: none;
}
</style>
