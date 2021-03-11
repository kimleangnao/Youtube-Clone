<template>
  <div class="studioSettingUploadDefault">
    <div class="studioSettingUploadDefault__head">
      <div
        :class="[
          basicInfo
            ? 'studioSettingUploadDefault__head__title head--active'
            : 'studioSettingUploadDefault__head__title'
        ]"
        @click="switchToBasicInfo"
      >
        Basic info
      </div>
      <div
        :class="[
          advancedSetting
            ? 'studioSettingUploadDefault__head__title head--active'
            : 'studioSettingUploadDefault__head__title'
        ]"
        @click="switchToAdvancedSetting"
      >
        Advanced settings
      </div>
    </div>
    <div class="studioSettingUploadDefault__content">
      <div
        v-if="basicInfo"
        class="studioSettingUploadDefault__content__basicInfo"
      >
        <div class="studioSettingUploadDefault__content__basicInfo__wrap">
          <div
            class="studioSettingUploadDefault__content__basicInfo__wrap__title"
          >
            Title
          </div>
          <textarea
            class="studioSettingUploadDefault__content__basicInfo__wrap__textarea--t"
            placeholder="Add a title that describes your video"
          ></textarea>
        </div>
        <div class="studioSettingUploadDefault__content__basicInfo__wrap">
          <div
            class="studioSettingUploadDefault__content__basicInfo__wrap__title"
          >
            Description
          </div>
          <textarea
            class="studioSettingUploadDefault__content__basicInfo__wrap__textarea--d"
            placeholder="Tell viewers about your video"
          ></textarea>
        </div>
        <div
          class="studioSettingUploadDefault__content__basicInfo__wrap--visibility"
        >
          <div
            class="studioSettingUploadDefault__content__basicInfo__wrap__title"
          >
            Visibility
          </div>
          <select
            class="studioSettingUploadDefault__content__basicInfo__wrap__select"
            id="visibility"
            name="visibility"
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Unlisted">Unlisted</option>
          </select>
        </div>
        <div class="studioSettingUploadDefault__content__basicInfo__wrap">
          <div
            class="studioSettingUploadDefault__content__basicInfo__wrap__title"
          >
            Tags
          </div>
          <textarea
            class="studioSettingUploadDefault__content__basicInfo__wrap__title__textarea"
            placeholder="Add tag"
          ></textarea>
        </div>
        <div class="studioSettingUploadDefault__content__basicInfo__subText">
          Enter comma-separated values
        </div>
      </div>
      <div
        v-if="advancedSetting"
        class="studioSettingUploadDefault__content__advanceSetting"
      >
        <div class="studioSettingUploadDefault__content__advanceSetting__wrap">
          <div
            class="studioSettingUploadDefault__content__advanceSetting__wrap__box"
          >
            <div
              class="studioSettingUploadDefault__content__advanceSetting__wrap__box__title"
            >
              License
            </div>
            <select
              class="studioSettingUploadDefault__content__advanceSetting__wrap__box__select"
            >
              <option value="Standard YouTube License"
                >Standard YouTube License</option
              >
              <option value="Creative Commons - Attribution"
                >Creative Commons - Attribution</option
              >
            </select>
          </div>
          <div
            class="studioSettingUploadDefault__content__advanceSetting__wrap__box"
          >
            <div
              class="studioSettingUploadDefault__content__advanceSetting__wrap__box__title"
            >
              Category
            </div>
            <select
              class="studioSettingUploadDefault__content__advanceSetting__wrap__box__select"
            >
              <option value="None">None</option>
              <option value="Film & Animation">Film & Animation</option>
              <option value="Autos & Vehicles">Autos & Vehicles</option>
            </select>
          </div>
        </div>
        <div class="studioSettingUploadDefault__content__advanceSetting__wrap">
          <div
            class="studioSettingUploadDefault__content__advanceSetting__wrap__title"
          >
            Original video language, subtitles, and CC
          </div>
          <div
            class="studioSettingUploadDefault__content__advanceSetting__wrap__box"
          >
            <div
              class="studioSettingUploadDefault__content__advanceSetting__wrap__box__title"
            >
              Video language
            </div>
            <select
              class="studioSettingUploadDefault__content__advanceSetting__wrap__box__select"
            >
              <option value="English">English</option>
              <option value="Khmer">Khmer</option>
              <option value="Japanese">Japanese</option>
              <option value="Chinese">Chinese</option>
            </select>
          </div>
          <div
            class="studioSettingUploadDefault__content__advanceSetting__wrap__box"
          >
            <div
              class="studioSettingUploadDefault__content__advanceSetting__wrap__box__title"
            >
              Caption certification
            </div>
            <select
              class="studioSettingUploadDefault__content__advanceSetting__wrap__box__select"
            >
              <option value="None">None</option>
              <option
                value="This content has never aired on television in the U.S"
                >This content has never aired on television in the U.S</option
              >
            </select>
          </div>
          <div
            class="studioSettingUploadDefault__content__advanceSetting__wrap__box"
          >
            <div
              class="studioSettingUploadDefault__content__advanceSetting__wrap__box__title"
            >
              Title and description language
            </div>
            <select
              class="studioSettingUploadDefault__content__advanceSetting__wrap__box__select"
            >
              <option value="Select" disabled selected>Select</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
        <div class="studioSettingUploadDefault__content__advanceSetting__wrap">
          <div
            class="studioSettingUploadDefault__content__advanceSetting__wrap__title"
          >
            Comments
          </div>
          <div
            class="studioSettingUploadDefault__content__advanceSetting__wrap__box"
          >
            <div
              class="studioSettingUploadDefault__content__advanceSetting__wrap__box__title"
            >
              Comment visibility
            </div>
            <select
              class="studioSettingUploadDefault__content__advanceSetting__wrap__box__select"
            >
              <option value="Select" disabled selected>Select</option>
              <option value="Allow all comments">Allow all comments</option>
            </select>
          </div>
        </div>
        <div
          class="studioSettingUploadDefault__content__advanceSetting__wrap--input"
        >
          <input
            type="checkbox"
            id="viewRating"
            name="viewRating"
            value="viewRating"
            class="studioSettingUploadDefault__content__advanceSetting__checkbox"
          />
          <label
            class="studioSettingUploadDefault__content__advanceSetting__label"
            for="viewRating"
          >
            Users can view ratings for this video</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "StudioSettingUploadDefault",
  setup() {
    const state = reactive({
      basicInfo: false,
      advancedSetting: true
    });

    const switchToBasicInfo = () => {
      state.basicInfo = true;
      state.advancedSetting = false;
    };
    const switchToAdvancedSetting = () => {
      state.basicInfo = false;
      state.advancedSetting = true;
    };
    return { ...toRefs(state), switchToBasicInfo, switchToAdvancedSetting };
  }
};
</script>

<style scoped>
.studioSettingUploadDefault {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.studioSettingUploadDefault__head {
  width: 100%;
  height: 60px;
  line-height: 80px;
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid lightgrey;
}
.head--active {
  color: dodgerblue;
  border-bottom: 3px solid dodgerblue;
}
.studioSettingUploadDefault__head__title {
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 25px;
}
.studioSettingUploadDefault__head__title:hover {
  color: dodgerblue;
  border-bottom: 3px solid dodgerblue;
  cursor: pointer;
}

.studioSettingUploadDefault__content__basicInfo__wrap {
  width: 90%;
  border: 1px solid lightgrey;
  margin: 25px 0 0 25px;
  border-radius: 5px;
  text-align: left;
}

.studioSettingUploadDefault__content__basicInfo__wrap__title {
  margin: 10px 0 0 15px;
  color: grey;
  font-size: 0.9rem;
}
.studioSettingUploadDefault__content__basicInfo__wrap__textarea--t {
  width: 95%;
  height: 80px;
  margin-left: 15px;
  font-size: 0.9rem;
  font-family: Roboto, Arial, sans-serif;
  resize: none;
  border: unset;
}
.studioSettingUploadDefault__content__basicInfo__wrap__title__textarea:focus,
.studioSettingUploadDefault__content__basicInfo__wrap__textarea--t:focus,
.studioSettingUploadDefault__content__basicInfo__wrap__textarea--d:focus {
  outline: unset;
}
.studioSettingUploadDefault__content__basicInfo__wrap__textarea--d {
  width: 95%;
  height: 120px;
  margin-left: 15px;
  font-size: 0.9rem;
  font-family: Roboto, Arial, sans-serif;
  resize: none;
  border: unset;
}
.studioSettingUploadDefault__content__basicInfo__wrap--visibility {
  width: 50%;
  border: 1px solid lightgrey;
  margin: 25px 25px;
  border-radius: 5px;
  text-align: left;
}
.studioSettingUploadDefault__content__basicInfo__wrap__select {
  width: 95%;
  height: 20px;
  margin-left: 15px;
  border: unset;
  margin-bottom: 15px;
}
.studioSettingUploadDefault__content__basicInfo__wrap__title__textarea {
  width: 95%;
  height: 50px;
  margin-left: 15px;
  font-size: 0.9rem;
  font-family: Roboto, Arial, sans-serif;
  resize: none;
  border: unset;
}
.studioSettingUploadDefault__content__basicInfo__subText {
  width: 100%;
  text-align: left;
  text-indent: 25px;
  font-size: 0.8rem;
  color: grey;
  margin-top: 10px;
  margin-bottom: 50px;
}

/*advanced*/
.studioSettingUploadDefault__content__advanceSetting__wrap {
  width: 95%;
  margin-left: 15px;
  margin-top: 25px;
  display: flex;
  flex-flow: row wrap;
  text-align: left;
}
.studioSettingUploadDefault__content__advanceSetting__wrap__box {
  width: 45%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 10px 10px;
}
.studioSettingUploadDefault__content__advanceSetting__wrap__box__title {
  margin: 10px 0 0 15px;
  font-size: 0.8rem;
  color: grey;
}
.studioSettingUploadDefault__content__advanceSetting__wrap__box__select {
  width: 90%;
  margin-left: 10px;
  margin-bottom: 10px;
  border: unset;
  font-size: 0.9rem;
}
.studioSettingUploadDefault__content__advanceSetting__wrap__box__select:focus {
  outline: unset;
}

.studioSettingUploadDefault__content__advanceSetting__wrap__title {
  width: 100%;
  margin: 10px 0 0 10px;
  font-weight: 500;
}
.studioSettingUploadDefault__content__advanceSetting__wrap--input {
  width: 95%;
  margin-left: 15px;
  margin-top: 25px;
  display: flex;
  flex-flow: row wrap;
  text-align: left;
  margin-bottom: 25px;
}
.studioSettingUploadDefault__content__advanceSetting__checkbox {
  transform: scale(1.5);
  margin-left: 15px;
}
.studioSettingUploadDefault__content__advanceSetting__label {
  padding: 0 5px;
  font-size: 1rem;
}
</style>
