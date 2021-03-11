<template>
  <div class="studioSettingCommunity">
    <div class="studioSettingCommunity__head">
      <div
        :class="[
          automatedFilter
            ? 'studioSettingCommunity__head__list head--active'
            : 'studioSettingCommunity__head__list'
        ]"
        @click="switchToAutomateFilter"
      >
        Automated Filters
      </div>
      <div
        :class="[
          defaults
            ? 'studioSettingCommunity__head__list head--active'
            : 'studioSettingCommunity__head__list'
        ]"
        @click="switchToDefaults"
      >
        Defaults
      </div>
    </div>
    <div class="studioSettingCommunity__content">
      <div
        v-if="automatedFilter"
        class="studioSettingCommunity__content__automated"
      >
        <div class="studioSettingCommunity__content__automated__wrap">
          <div class="studioSettingCommunity__content__automated__wrap__title">
            Moderators
          </div>
          <textarea
            class="studioSettingCommunity__content__automated__wrap__textarea"
            placeholder="Add moderator"
          ></textarea>
        </div>
        <div class="studioSettingCommunity__content__automated__subText">
          Paste the channel URL of a user to add as a moderator.
        </div>
        <div class="studioSettingCommunity__content__automated__wrap">
          <div class="studioSettingCommunity__content__automated__wrap__title">
            Approved users
          </div>
          <textarea
            class="studioSettingCommunity__content__automated__wrap__textarea"
            placeholder="Add approved user"
          ></textarea>
        </div>
        <div class="studioSettingCommunity__content__automated__subText">
          Paste the channel URL of a user to add as an approved user.
        </div>
        <div class="studioSettingCommunity__content__automated__wrap">
          <div class="studioSettingCommunity__content__automated__wrap__title">
            Hidden users
          </div>
          <textarea
            class="studioSettingCommunity__content__automated__wrap__textarea"
            placeholder="Add hidden user"
          ></textarea>
        </div>
        <div class="studioSettingCommunity__content__automated__subText">
          Paste the channel URL of a user to add as a hidden user.
        </div>
        <div class="studioSettingCommunity__content__automated__wrap">
          <div class="studioSettingCommunity__content__automated__wrap__title">
            Blocked words
          </div>
          <textarea
            class="studioSettingCommunity__content__automated__wrap__textarea"
            placeholder="Add blocked words"
          ></textarea>
        </div>
        <div class="studioSettingCommunity__content__automated__subText">
          Enter comma-separated values
        </div>
        <div
          class="studioSettingCommunity__content__automated__wrap --checkbox"
        >
          <input
            type="checkbox"
            name="blockLinks"
            id="blockLinks"
            value="blockLinks"
            class="studioSettingCommunity__content__automated__wrap__checkbox"
          />
          <label for="blockLinks">Block links</label>
        </div>
        <div class="studioSettingCommunity__content__automated__subText">
          If you select this option, new comments with hashtags and URLs will be
          held for review. Live chat messages with URLs will be blocked. This
          setting doesn't apply to you, moderators, or approved users.
        </div>
      </div>
      <div v-if="defaults" class="studioSettingCommunity__content__defaults">
        <div class="studioSettingCommunity__content__defaults__wrap">
          <div class="studioSettingCommunity__content__defaults__wrap__outer">
            <div
              class="studioSettingCommunity__content__defaults__wrap__outer__title"
            >
              Comments on your new videos
            </div>
            <div
              class="studioSettingCommunity__content__defaults__wrap__outer__box"
            >
              <select
                class="studioSettingCommunity__content__defaults__wrap__outer__box__select"
              >
                <option value="Allow all comments">Allow all comments</option>
              </select>
            </div>
          </div>
          <div class="studioSettingCommunity__content__defaults__wrap__outer">
            <div
              class="studioSettingCommunity__content__defaults__wrap__outer__title"
            >
              Comments on your Discussions tab
            </div>
            <div
              class="studioSettingCommunity__content__defaults__wrap__outer__box"
            >
              <select
                class="studioSettingCommunity__content__defaults__wrap__outer__box__select"
              >
                <option value="Allow all comments">Allow all comments</option>
              </select>
            </div>
          </div>
        </div>
        <div class="studioSettingCommunity__content__defaults__title">
          Messages in your live chat
        </div>
        <div class="studioSettingCommunity__content__defaults__wrap">
          <input
            type="checkbox"
            id="hold"
            name="hold"
            value="hold"
            class="studioSettingCommunity__content__defaults__wrap__checkbox"
          />
          <label
            for="hold"
            class="studioSettingCommunity__content__defaults__wrap__label"
          >
            Hold potentially inappropriate chat messages for review</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "StudioSettingCommunity",
  setup() {
    const state = reactive({
      automatedFilter: false,
      defaults: true
    });
    const switchToAutomateFilter = () => {
      state.automatedFilter = true;
      state.defaults = false;
    };
    const switchToDefaults = () => {
      state.automatedFilter = false;
      state.defaults = true;
    };
    return { ...toRefs(state), switchToAutomateFilter, switchToDefaults };
  }
};
</script>

<style scoped>
.studioSettingCommunity {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.studioSettingCommunity__head {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.head--active {
  color: dodgerblue;
  border-bottom: 3px solid dodgerblue;
}
.studioSettingCommunity__head__list {
  margin: 0 25px;
  line-height: 80px;
  font-size: 0.9rem;
  font-weight: 500;
}
.studioSettingCommunity__head__list:hover {
  color: dodgerblue;
  border-bottom: 3px solid dodgerblue;
  cursor: pointer;
}
.studioSettingCommunity__content__automated__wrap {
  width: 90%;
  margin-left: 10px;
  margin-top: 20px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  text-align: left;
}
.studioSettingCommunity__content__automated__wrap__title {
  margin: 10px;
  font-size: 0.9rem;
  color: grey;
}
.studioSettingCommunity__content__automated__wrap__textarea {
  width: 95%;
  height: 50px;
  margin-left: 10px;
  resize: none;
  margin-bottom: 10px;
  border: unset;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.9rem;
}
.studioSettingCommunity__content__automated__wrap__textarea:focus {
  outline: unset;
}
.studioSettingCommunity__content__automated__subText {
  text-align: left;
  margin-left: 10px;
  margin-top: 5px;
  font-size: 0.85rem;
  color: grey;
}
.--checkbox {
  margin: 30px 10px 10px;
  border: unset;
}

/*defaults*/
.studioSettingCommunity__content__defaults__wrap {
  width: 90%;
  margin: 25px;
  display: flex;
  flex-flow: row nowrap;
  text-align: left;
}
.studioSettingCommunity__content__defaults__wrap__outer {
  width: 45%;
}
.studioSettingCommunity__content__defaults__wrap__outer:last-child {
  margin-left: 30px;
}
.studioSettingCommunity__content__defaults__wrap__outer__title {
  font-size: 0.95rem;
  font-weight: 500;
}
.studioSettingCommunity__content__defaults__wrap__outer__box {
  width: 100%;
  height: 40px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 15px 0;
}

.studioSettingCommunity__content__defaults__wrap__outer__box__select {
  width: 100%;
  height: 60%;
  margin-top: 3%;
  font-size: 1rem;
  border: unset;
}
.studioSettingCommunity__content__defaults__wrap__outer__box__select:focus {
  outline: unset;
}
.studioSettingCommunity__content__defaults__title {
  text-align: left;
  font-size: 0.9rem;
  font-weight: 500;
  text-indent: 25px;
}
.studioSettingCommunity__content__defaults__wrap__checkbox {
  transform: scale(1.5);
}
.studioSettingCommunity__content__defaults__wrap__label {
  margin: 0 10px;
}
</style>
