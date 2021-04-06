<template>
  <div class="setting__nav">
    <div class="setting__nav__list">SETTINGS</div>
    <div
      :class="[
        account
          ? 'setting__nav__list setting__nav__list--select'
          : 'setting__nav__list'
      ]"
      @click="switchToAccount"
    >
      Account
    </div>
    <div
      :class="[
        notification
          ? 'setting__nav__list setting__nav__list--select'
          : 'setting__nav__list'
      ]"
      @click="switchToNotification"
    >
      Notifications
    </div>
    <div
      :class="[
        playbackAndPerformance
          ? 'setting__nav__list setting__nav__list--select'
          : 'setting__nav__list'
      ]"
      @click="switchToPlaybackAndPerformance"
    >
      Playback and performance
    </div>
    <div
      :class="[
        privacy
          ? 'setting__nav__list setting__nav__list--select'
          : 'setting__nav__list '
      ]"
      @click="switchToPrivacy"
    >
      Privacy
    </div>
    <div
      :class="[
        connectedApp
          ? 'setting__nav__list setting__nav__list--select'
          : 'setting__nav__list'
      ]"
      @click="switchToConnectedApp"
    >
      Connected apps
    </div>
    <div
      :class="[
        billing
          ? 'setting__nav__list setting__nav__list--select'
          : 'setting__nav__list '
      ]"
      @click="switchToBilling"
    >
      Billing and payments
    </div>
    <div
      :class="[
        advanceSetting
          ? 'setting__nav__list setting__nav__list--select'
          : 'setting__nav__list'
      ]"
      @click="switchToAdvanceSetting"
    >
      Advanced settings
    </div>
  </div>
  <div class="setting__content">
    <div class="setting__content__component">
      <SettingAccount v-if="account" />
      <SettingNotifications v-if="notification" />
      <SettingPlaybackAndPerformance v-if="playbackAndPerformance" />
      <SettingPrivacy v-if="privacy" />
      <SettingConnectedApps v-if="connectedApp" />
      <SettingBilling :myWidth="viewportWidth" v-if="billing" />
      <SettingAdvanced v-if="advanceSetting" />
    </div>
  </div>
</template>

<script>
import SettingAccount from "@/components/SettingAccount.vue";
import SettingNotifications from "@/components/SettingNotifications.vue";
import SettingPlaybackAndPerformance from "@/components/SettingPlaybackAndPerformance.vue";
import SettingPrivacy from "@/components/SettingPrivacy.vue";
import SettingConnectedApps from "@/components/SettingConnectedApps.vue";
import SettingBilling from "@/components/SettingBilling.vue";
import SettingAdvanced from "@/components/SettingAdvanced.vue";

import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Setting",
  components: {
    SettingAccount,
    SettingNotifications,
    SettingPlaybackAndPerformance,
    SettingPrivacy,
    SettingConnectedApps,
    SettingBilling,
    SettingAdvanced
  },
  props: {
    changeCurrentRoute: Function
  },
  setup(props) {
    const state = reactive({
      account: true,
      notification: false,
      playbackAndPerformance: false,
      privacy: false,
      connectedApp: false,
      billing: false,
      advanceSetting: false,
      viewportWidth: 10
    });

    //pass route name back to app
    let name = useRoute().path;
    console.log(useRoute());
    console.log("passname:", name);
    props.changeCurrentRoute(name);

    const switchToAccount = () => {
      state.account = true;
      state.notification = false;
      state.playbackAndPerformance = false;
      state.privacy = false;
      state.connectedApp = false;
      state.billing = false;
      state.advanceSetting = false;
    };
    const switchToNotification = () => {
      state.account = false;
      state.notification = true;
      state.playbackAndPerformance = false;
      state.privacy = false;
      state.connectedApp = false;
      state.billing = false;
      state.advanceSetting = false;
    };
    const switchToPlaybackAndPerformance = () => {
      state.account = false;
      state.notification = false;
      state.playbackAndPerformance = true;
      state.privacy = false;
      state.connectedApp = false;
      state.billing = false;
      state.advanceSetting = false;
    };
    const switchToPrivacy = () => {
      state.account = false;
      state.notification = false;
      state.playbackAndPerformance = false;
      state.privacy = true;
      state.connectedApp = false;
      state.billing = false;
      state.advanceSetting = false;
    };
    const switchToConnectedApp = () => {
      state.account = false;
      state.notification = false;
      state.playbackAndPerformance = false;
      state.privacy = false;
      state.connectedApp = true;
      state.billing = false;
      state.advanceSetting = false;
    };
    const switchToBilling = () => {
      state.account = false;
      state.notification = false;
      state.playbackAndPerformance = false;
      state.privacy = false;
      state.connectedApp = false;
      state.billing = true;
      state.advanceSetting = false;
    };
    const switchToAdvanceSetting = () => {
      state.account = false;
      state.notification = false;
      state.playbackAndPerformance = false;
      state.privacy = false;
      state.connectedApp = false;
      state.billing = false;
      state.advanceSetting = true;
    };
    const checkViewport = () => {
      //
      window.addEventListener("resize", function() {
        let viewWidth = document.documentElement.clientWidth;
        if (viewWidth >= 1824) {
          state.viewportWidth = 10;
        } else if (viewWidth >= 1224) {
          state.viewportWidth = 9;
        } else if (viewWidth >= 768) {
          state.viewportWidth = 8;
        } else if (viewWidth >= 321) {
          state.viewportWidth = 7;
        }
      });
    };
    checkViewport();
    return {
      ...toRefs(state),
      switchToAccount,
      switchToNotification,
      switchToPlaybackAndPerformance,
      switchToPrivacy,
      switchToConnectedApp,
      switchToBilling,
      switchToAdvanceSetting
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
@media only screen and (min-width: 321px) {
  .setting__nav {
    position: fixed;
    width: 250px;
    min-height: 100vh;
    background-color: rgb(238, 237, 237);
    display: none;
  }
  .setting__content {
    margin-left: 0px;
    width: 100%;
    min-height: 90vh;
    margin-top: 60px;
  }
  .setting__content__component {
    width: 90%;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 768px) {
  .setting__nav {
    position: fixed;
    width: 250px;
    min-height: 100vh;
    background-color: rgb(238, 237, 237);
    display: block;
  }
  .setting__content {
    margin-left: 250px;
    width: 75%;
    min-height: 90vh;
    margin-top: 60px;
  }
  .setting__content__component {
    width: 90%;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 1224px) {
  .setting__nav {
    position: fixed;
    width: 250px;
    min-height: 100vh;
    background-color: rgb(238, 237, 237);
    display: block;
  }
  .setting__content {
    margin-left: 250px;
    width: 1100px;
    min-height: 90vh;
    margin-top: 60px;
  }
  .setting__content__component {
    width: 90%;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 1824px) {
  .setting__nav {
    position: fixed;
    width: 240px;
    min-height: 100vh;
    background-color: rgb(238, 237, 237);
    display: block;
  }
  .setting__content {
    width: 1100px;
    min-height: 90vh;
    margin-top: 60px;
    margin: 0px auto;
  }
  .setting__content__component {
    width: 90%;
    margin: 0px auto;
  }
}

.setting__nav__list {
  width: 100%;
  height: 55px;
  line-height: 55px;
  text-align: left;
  text-indent: 30px;
  font-size: 0.9rem;
  color: rgb(54, 54, 54);
  font-weight: 500;
  font-family: Roboto, Arial, sans-serif;
}
.setting__nav__list:hover {
  background-color: lightgrey;
  cursor: pointer;
}
.setting__nav__list:first-child {
  font-size: 1rem;
  cursor: context-menu;
}
.setting__nav__list:first-child:hover {
  background-color: rgb(238, 237, 237);
}
.setting__nav__list--select {
  background-color: lightgrey;
}
</style>
