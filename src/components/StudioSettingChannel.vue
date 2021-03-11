<template>
  <div class="studioSettingChannel">
    <div class="studioSettingChannel__head">
      <div
        :class="[
          basicInfo
            ? 'studioSettingChannel__head__list head--active'
            : 'studioSettingChannel__head__list'
        ]"
        @click="switchToBasicInfo"
      >
        Basic info
      </div>
      <div
        :class="[
          advancedSettings
            ? 'studioSettingChannel__head__list head--active'
            : 'studioSettingChannel__head__list'
        ]"
        @click="switchToAdvancedSetting"
      >
        Advanced settings
      </div>
      <div
        :class="[
          featureEligibility
            ? 'studioSettingChannel__head__list head--active'
            : 'studioSettingChannel__head__list'
        ]"
        @click="switchToFeatureEligibility"
      >
        Feature eligibility
      </div>
    </div>
    <div class="studioSettingChannel__content">
      <div v-if="basicInfo" class="studioSettingChannel__content__basicInfo">
        <div class="studioSettingChannel__content__basicInfo__name">Name</div>
        <div class="studioSettingChannel__content__basicInfo__nameText">
          REdi
        </div>
        <div class="studioSettingChannel__content__basicInfo__subText">
          To edit channel name, visit your
          <span class="link__tag">
            Google account <i class="fas fa-external-link-alt"></i
          ></span>
        </div>
        <div class="studioSettingChannel__content__basicInfo__country">
          <div class="studioSettingChannel__content__basicInfo__country__title">
            Country of residence
          </div>
          <select
            class="studioSettingChannel__content__basicInfo__country__select"
          >
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
          </select>
        </div>
        <div class="studioSettingChannel__content__basicInfo__subText">
          Choose the country where you're currencly based.
          <span class="link__tag">Learn more</span>
        </div>
        <div class="studioSettingChannel__content__basicInfo__keywords">
          <div
            class="studioSettingChannel__content__basicInfo__keywords__title"
          >
            Keyword
          </div>
          <textarea
            class="studioSettingChannel__content__basicInfo__keywords__textarea"
            placeholder="Add keywords"
          >
          </textarea>
        </div>
        <div class="studioSettingChannel__content__basicInfo__subText">
          Enter comma-separated values
        </div>
      </div>
      <div
        v-if="advancedSettings"
        class="studioSettingChannel__content__advancedSetting"
      >
        <div class="studioSettingChannel__content__advancedSetting__title">
          Audience
        </div>
        <div class="studioSettingChannel__content__advancedSetting__subText">
          Simplify your workflow by selecting a channel setting. If you skip
          this question, you'll be required to identify each video on your
          channel that's made for kids. This setting will affect existing and
          future videos. Settings for individual videos will override the
          channel setting.
        </div>
        <div class="studioSettingChannel__content__advancedSetting__title">
          Do you want to set your channel as made for kids?
        </div>
        <div class="studioSettingChannel__content__advancedSetting__subText">
          Regardless of your location, you're legally required to comply with
          the Children's Online Privacy Protection Act (COPPA) and/or other
          laws. You're required to tell us whether your videos are made for
          kids.<span class="link__tag"> What's content made for kids?</span>
        </div>
        <input
          class="studioSettingChannel__content__advancedSetting__inputRadio"
          type="radio"
          id="yes"
          name="forkids"
          value="yes"
        />
        <label
          class="studioSettingChannel__content__advancedSetting__label"
          for="yes"
        >
          Yes, set this channel as made for kids. I always upload content that's
          made for kids.</label
        >
        <br />
        <input
          class="studioSettingChannel__content__advancedSetting__inputRadio"
          type="radio"
          id="no"
          name="forkids"
          value="no"
        />
        <label
          class="studioSettingChannel__content__advancedSetting__label"
          for="no"
        >
          No, set this channel as not made for kids. I never upload content
          that's made for kids.
        </label>
        <br />
        <input
          class="studioSettingChannel__content__advancedSetting__inputRadio"
          type="radio"
          id="review"
          name="forkids"
          value="review"
        />
        <label
          class="studioSettingChannel__content__advancedSetting__label"
          for="review"
        >
          I want to review this setting for every video.</label
        >
        <br />
        <div class="studioSettingChannel__content__advancedSetting__wrap">
          <div
            class="studioSettingChannel__content__advancedSetting__wrap__title"
          >
            Google Ads account linking
          </div>
          <div
            class="studioSettingChannel__content__advancedSetting__wrap__link"
          >
            LINK ACCOUNT
          </div>
        </div>
        <div class="studioSettingChannel__content__advancedSetting__subText">
          Link your YouTube channel to a Google Ads account to let the linked
          Google Ads account run ads based on interactions with your channel's
          videos and to access insights from your channel's videos.
          <span class="link__tag">Learn more</span>
        </div>
        <div class="studioSettingChannel__content__advancedSetting__title">
          Auto-generated captions
        </div>
        <input
          type="checkbox"
          class="studioSettingChannel__content__advancedSetting__checkbox"
          id="donotshow"
          name="donotshow"
          value="donotshow"
        />
        <label
          class="studioSettingChannel__content__advancedSetting__label"
          for="donotshow"
          >Don’t show potentially inappropriate words</label
        >
        <div class="studioSettingChannel__content__advancedSetting__subText">
          Auto-captioning occasionally makes mistakes. This setting prevents
          potentially inappropriate words from being displayed.
          <span class="link__tag">Learn more</span>
        </div>
        <div class="studioSettingChannel__content__advancedSetting__title">
          Subscriber count
        </div>
        <input
          type="checkbox"
          class="studioSettingChannel__content__advancedSetting__checkbox"
          id="subscriber"
          name="subscriber"
          value="subscriber"
        />
        <label
          class="studioSettingChannel__content__advancedSetting__label"
          for="subscriber"
          >Display the number of people subscribed to my channel</label
        >
        <div class="studioSettingChannel__content__advancedSetting__title">
          Advertisements
        </div>
        <input
          type="checkbox"
          class="studioSettingChannel__content__advancedSetting__checkbox"
          id="disableAds"
          name="disableAds"
          value="disableAds"
        />
        <label
          class="studioSettingChannel__content__advancedSetting__label"
          for="disableAds"
          >Disable interest-based ads</label
        >
        <div class="studioSettingChannel__content__advancedSetting__subText">
          If you select this option, personalized ads will not be shown on
          videos on your channel, such as ads based on a viewer's interests or
          remarketing ads. This may significantly reduce your channel's revenue.
          In addition, earned action reports and remarketing lists will stop
          working for your channel.
        </div>
        <div class="studioSettingChannel__content__advancedSetting__title">
          Other settings
        </div>
        <div class="studioSettingChannel__content__advancedSetting__link">
          Manage YouTube account <i class="fas fa-external-link-alt"></i>
        </div>
        <div class="studioSettingChannel__content__advancedSetting__link">
          Remove YouTube content <i class="fas fa-external-link-alt"></i>
        </div>
        <div class="studioSettingChannel__content__advancedSetting__link">
          Advance channel settings <i class="fas fa-external-link-alt"></i>
        </div>
      </div>
      <div
        v-if="featureEligibility"
        class="studioSettingChannel__content__feature"
      >
        <div class="studioSettingChannel__content__feature__text">
          See how to gain access to the features you're interested in below.
        </div>
        <div class="studioSettingChannel__content__feature__wrap">
          <div class="studioSettingChannel__content__feature__wrap__head">
            <div
              class="studioSettingChannel__content__feature__wrap__head__title"
            >
              Default Features
            </div>
            <div
              class="studioSettingChannel__content__feature__wrap__head__enable"
            >
              Enabled
            </div>
            <div
              class="studioSettingChannel__content__feature__wrap__head__expand"
            >
              <i class="fas fa-angle-down"></i>
            </div>
          </div>
          <div class="studioSettingChannel__content__feature__wrap__text">
            Upload videos, create playlists and add collaborators and new videos
            to playlists
          </div>
        </div>
        <div class="studioSettingChannel__content__feature__wrap">
          <div class="studioSettingChannel__content__feature__wrap__head">
            <div
              class="studioSettingChannel__content__feature__wrap__head__title"
            >
              Features that require phone verification
            </div>
            <div
              class="studioSettingChannel__content__feature__wrap__head__enable eligible--true"
            >
              Eligible
            </div>
            <div
              class="studioSettingChannel__content__feature__wrap__head__expand"
            >
              <i class="fas fa-angle-down"></i>
            </div>
          </div>
          <div class="studioSettingChannel__content__feature__wrap__text">
            Videos over 15 minutes, custom thumbnails, live streaming, and
            Content ID appeals
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "StudioSettingChannel",
  setup() {
    const state = reactive({
      basicInfo: false,
      advancedSettings: false,
      featureEligibility: true
    });
    const switchToBasicInfo = () => {
      state.basicInfo = true;
      state.advancedSettings = false;
      state.featureEligibility = false;
    };
    const switchToAdvancedSetting = () => {
      state.basicInfo = false;
      state.advancedSettings = true;
      state.featureEligibility = false;
    };
    const switchToFeatureEligibility = () => {
      state.basicInfo = false;
      state.advancedSettings = false;
      state.featureEligibility = true;
    };

    return {
      ...toRefs(state),
      switchToBasicInfo,
      switchToAdvancedSetting,
      switchToFeatureEligibility
    };
  }
};
</script>

<style scoped>
.studioSettingChannel {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.studioSettingChannel__head {
  width: 100%;
  height: 65px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  line-height: 80px;
}
.studioSettingChannel__head__list {
  margin: 0 25px;
  font-size: 0.9rem;
  font-weight: 500;
}
.head--active {
  color: dodgerblue;
  border-bottom: 3px solid dodgerblue;
}
.studioSettingChannel__head__list:hover {
  color: dodgerblue;
  border-bottom: 3px solid dodgerblue;
  cursor: pointer;
}
.studioSettingChannel__content {
  width: 100%;
  text-align: left;
}
.studioSettingChannel__content__basicInfo__name {
  text-indent: 25px;
  padding-top: 20px;
  color: grey;
  font-size: 0.9rem;
}
.studioSettingChannel__content__basicInfo__nameText {
  text-indent: 25px;
  padding-top: 5px;
  font-size: 0.95rem;
}
.studioSettingChannel__content__basicInfo__subText {
  text-indent: 25px;
  padding-top: 5px;
  font-size: 0.8rem;
  color: grey;
}
.studioSettingChannel__content__basicInfo__subText .fas {
  font-size: 0.8rem;
  margin-left: -20px;
  margin-top: -5px;
  color: dodgerblue;
}
.link__tag {
  color: dodgerblue;
}
.link__tag:hover {
  cursor: pointer;
}

.studioSettingChannel__content__basicInfo__country {
  width: 300px;
  height: 55px;
  border: 1px solid lightgrey;
  margin: 20px 0 0 25px;
  border-radius: 5px;
}
.studioSettingChannel__content__basicInfo__country__title {
  margin: 10px 0 0 10px;
  font-size: 0.9rem;
  color: grey;
}
.studioSettingChannel__content__basicInfo__country__select {
  width: 95%;
  height: 20px;
  margin: 0 0 0 7px;
  font-size: 0.95rem;
  border: unset;
}
.studioSettingChannel__content__basicInfo__country__select:focus {
  outline: unset;
}
.studioSettingChannel__content__basicInfo__keywords {
  width: 90%;
  height: 100px;
  border: 1px solid lightgrey;
  margin: 25px 0 0 25px;
  border-radius: 5px;
}
.studioSettingChannel__content__basicInfo__keywords__title {
  margin: 10px 0 0 10px;
  color: grey;
  font-size: 0.9rem;
}
.studioSettingChannel__content__basicInfo__keywords__textarea {
  margin: 10px 0 0 10px;
  font-size: 0.9rem;
  width: 95%;
  height: 50%;
  resize: none;
  font-size: 1rem;
  font-family: Roboto, Arial, sans-serif;
  border: unset;
}
.studioSettingChannel__content__basicInfo__keywords__textarea:focus {
  outline: unset;
}

/*advanced setting*/
.studioSettingChannel__content__advancedSetting__title {
  margin: 25px 0 0 25px;
  font-weight: 500;
  font-size: 0.95rem;
}
.studioSettingChannel__content__advancedSetting__subText {
  margin: 10px 0 0 25px;
  font-size: 0.82rem;
}
.studioSettingChannel__content__advancedSetting__inputRadio {
  margin: 10px 10px 0 25px;
  transform: scale(1.5);
}
.studioSettingChannel__content__advancedSetting__label {
  font-size: 0.95rem;
}
.studioSettingChannel__content__advancedSetting__wrap {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 20px 0;
  line-height: 40px;
}
.studioSettingChannel__content__advancedSetting__wrap__title {
  font-size: 0.85rem;
  text-indent: 25px;
  color: grey;
}
.studioSettingChannel__content__advancedSetting__wrap__link {
  color: dodgerblue;
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 25px;
}
.studioSettingChannel__content__advancedSetting__wrap__link .fas {
  line-height: 40px;
  font-size: 0.9rem;
  color: dodgerblue;
}
.studioSettingChannel__content__advancedSetting__wrap__link:hover {
  cursor: pointer;
}
.studioSettingChannel__content__advancedSetting__checkbox {
  margin: 10px 10px 0 25px;
  transform: scale(1.5);
}
.studioSettingChannel__content__advancedSetting__label {
  font-size: 0.95rem;
}
.studioSettingChannel__content__advancedSetting__link {
  margin: 10px 25px;
  color: dodgerblue;
  font-weight: 500;
}
.studioSettingChannel__content__advancedSetting__link .fas {
  font-size: 0.9rem;
  line-height: 15px;
}
.studioSettingChannel__content__advancedSetting__link:hover {
  cursor: pointer;
}
/*Feature eligibility*/
.studioSettingChannel__content__feature__text {
  margin: 20px 0 0 25px;
  font-size: 0.9rem;
  color: grey;
}
.studioSettingChannel__content__feature__wrap {
  width: 90%;
  height: 90px;
  border: 1px solid lightgrey;
  margin: 25px 25px;
}
.studioSettingChannel__content__feature__wrap__head {
  width: 100%;
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
  line-height: 30px;
  margin: 20px 0 5px 0;
}
.studioSettingChannel__content__feature__wrap__head__title {
  text-indent: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  width: 400px;
}
.studioSettingChannel__content__feature__wrap__head__enable {
  padding: 0 5px;
  margin-left: 80px;
  background-color: rgb(199, 236, 199);
  font-weight: 500;
  color: green;
  font-size: 0.9rem;
}
.studioSettingChannel__content__feature__wrap__head__expand {
  margin-left: 10px;
  padding: 0 5px;
}
.studioSettingChannel__content__feature__wrap__head__expand:hover {
  cursor: pointer;
}
.studioSettingChannel__content__feature__wrap__head__expand .fas {
  line-height: 30px;
}
.studioSettingChannel__content__feature__wrap__text {
  margin-left: 25px;
  font-size: 0.85rem;
  color: grey;
}
.eligible--true {
  margin-left: 80px;
  padding: 0 5px;
  background-color: rgb(241, 241, 241);
  font-weight: 500;
  font-size: 0.9rem;
  color: grey;
}
</style>
