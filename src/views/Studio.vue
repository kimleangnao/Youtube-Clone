<template>
  <div class="studio">
    <div class="studio__nav">
      <div class="studio__nav__channel">
        <div class="studio__nav__channel__profile">
          <img
            :src="profile"
            alt="profile picture"
            class="studio__nav__channel__profile__image"
          />
        </div>
        <div class="studio__nav__channel__yourChannel">Your channel</div>
        <div class="studio__nav__channel__name">REdi</div>
      </div>
      <div class="studio__nav__wrap">
        <div class="studio__nav__wrap__actions">
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToDashboard"
          >
            <div
              v-if="dashboard"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[dashboard ? 'fas fa-th-large red' : 'fas fa-th-large']"
              ></i>
            </div>
            <div
              :class="[
                dashboard
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Dashboard
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToContent"
          >
            <div
              v-if="content"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i :class="[content ? 'fas fa-video red' : 'fas fa-video']"></i>
            </div>
            <div
              :class="[
                content
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Content
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToPlaylist"
          >
            <div
              v-if="playlist"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[playlist ? 'fas fa-list-ol red' : 'fas fa-list-ol']"
              ></i>
            </div>
            <div
              :class="[
                playlist
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Playlists
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToAnalytics"
          >
            <div
              v-if="analytics"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[
                  analytics ? 'far fa-chart-bar red' : 'far fa-chart-bar'
                ]"
              ></i>
            </div>
            <div
              :class="[
                analytics
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Analytics
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToComments"
          >
            <div
              v-if="comments"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[
                  comments ? 'fas fa-comment-alt red' : 'fas fa-comment-alt'
                ]"
              ></i>
            </div>
            <div
              :class="[
                comments
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Comments
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToSubtitles"
          >
            <div
              v-if="subtitles"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[
                  subtitles
                    ? 'fas fa-closed-captioning red'
                    : 'fas fa-closed-captioning'
                ]"
              ></i>
            </div>
            <div
              :class="[
                subtitles
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Subtitles
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToCopyright"
          >
            <div
              v-if="copyright"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[
                  copyright ? 'fas fa-copyright red' : 'fas fa-copyright'
                ]"
              ></i>
            </div>
            <div
              :class="[
                copyright
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Copyright
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToMonetization"
          >
            <div
              v-if="monetization"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[
                  monetization ? 'fas fa-dollar-sign red' : 'fas fa-dollar-sign'
                ]"
              ></i>
            </div>
            <div
              :class="[
                monetization
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Monetization
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToCustomization"
          >
            <div
              v-if="customization"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[customization ? 'fas fa-magic red' : 'fas fa-magic']"
              ></i>
            </div>
            <div
              :class="[
                customization
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Customization
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToAudioLibrary"
          >
            <div
              v-if="audioLibrary"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[
                  audioLibrary ? 'fas fa-file-audio red' : 'fas fa-file-audio '
                ]"
              ></i>
            </div>
            <div
              :class="[
                audioLibrary
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Audio library
            </div>
          </div>
        </div>
        <div class="studio__nav__wrap__more">
          <div class="studio__nav__wrap__more__list" @click="switchSetting">
            <div class="studio__nav__wrap__more__list__icon">
              <i class="fas fa-cog"></i>
            </div>
            <div class="studio__nav__wrap__more__list__text">Settings</div>
          </div>
          <div class="studio__nav__wrap__more__list">
            <div class="studio__nav__wrap__more__list__icon">
              <i class="fas fa-exclamation-circle"></i>
            </div>
            <div
              class="studio__nav__wrap__more__list__text"
              @click="switchFeedBack"
            >
              Send feedback
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="studio__content" :style="{ width: widthSize + 'px' }">
      <StudioDashboard v-if="dashboard" />
      <StudioContent v-if="content" />
      <StudioPlaylists v-if="playlist" />
      <StudioAnalytics v-if="analytics" />
      <StudioComments v-if="comments" />
      <StudioSubtitles v-if="subtitles" />
      <StudioCopyright v-if="copyright" />
      <StudioMonetization v-if="monetization" />
      <StudioCustomization v-if="customization" />
      <AudioLibrary v-if="audioLibrary" />
    </div>
    <div v-if="absoluteDisplay" class="studio__absolute">
      <div class="studio__absolute__setting">
        <div class="studio__absolute__setting__title">
          <div class="studio__absolute__setting__title__text">Settings</div>
        </div>
        <div class="studio__absolute__setting__content">
          <div class="studio__absolute__setting__content__left">
            <div
              :class="[
                settingGeneral
                  ? 'studio__absolute__setting__content__left__list list--active'
                  : 'studio__absolute__setting__content__left__list'
              ]"
              @click="switchToSettingGeneral"
            >
              General
            </div>
            <div
              :class="[
                settingChannel
                  ? 'studio__absolute__setting__content__left__list list--active'
                  : 'studio__absolute__setting__content__left__list'
              ]"
              @click="switchToSettingChannel"
            >
              Channel
            </div>
            <div
              :class="[
                settingUploadDefault
                  ? 'studio__absolute__setting__content__left__list list--active'
                  : 'studio__absolute__setting__content__left__list'
              ]"
              @click="switchToSettingUploadDefault"
            >
              Upload defaults
            </div>
            <div
              :class="[
                settingPermissions
                  ? 'studio__absolute__setting__content__left__list list--active'
                  : 'studio__absolute__setting__content__left__list'
              ]"
              @click="switchToSettingPermissions"
            >
              Permissions
            </div>
            <div
              :class="[
                settingCommunity
                  ? 'studio__absolute__setting__content__left__list list--active'
                  : 'studio__absolute__setting__content__left__list'
              ]"
              @click="switchToSettingCommunity"
            >
              Community
            </div>
            <div
              :class="[
                settingAgreements
                  ? 'studio__absolute__setting__content__left__list list--active'
                  : 'studio__absolute__setting__content__left__list'
              ]"
              @click="switchToSettingAgreement"
            >
              Agreements
            </div>
          </div>
          <div class="studio__absolute__setting__content__right">
            <!-- content of setting for each nav click -->
            <StudioSettingGeneral v-if="settingGeneral" />
            <StudioSettingChannel v-if="settingChannel" />
            <StudioSettingUploadDefault v-if="settingUploadDefault" />
            <StudioSettingPermissions v-if="settingPermissions" />
            <StudioSettingCommunity v-if="settingCommunity" />
            <StudioSettingAgreements v-if="settingAgreements" />
          </div>
        </div>
        <div class="studio__absolute__setting__bottom">
          <div
            class="studio__absolute__setting__bottom__close"
            @click="switchSetting"
          >
            CLOSE
          </div>
          <div class="studio__absolute__setting__bottom__save">SAVE</div>
        </div>
      </div>
    </div>
    <div v-if="absoluteFeedback" class="studio__absolute">
      <div class="studio__absolute__wrap">
        <StudioSendFeedback :closeFeedback="switchFeedBack" />
      </div>
    </div>
  </div>
</template>

<script>
import StudioDashboard from "@/components/StudioDashboard.vue";
import StudioContent from "@/components/StudioContent.vue";
import StudioPlaylists from "@/components/StudioPlaylists.vue";
import StudioAnalytics from "@/components/StudioAnalytics.vue";
import StudioComments from "@/components/StudioComments.vue";
import StudioSubtitles from "@/components/StudioSubtitles.vue";
import StudioCopyright from "@/components/StudioCopyright.vue";
import StudioMonetization from "@/components/StudioMonetization.vue";
import StudioCustomization from "@/components/StudioCustomization.vue";
import AudioLibrary from "@/components/StudioAudio.vue";

import StudioSettingGeneral from "@/components/StudioSettingGeneral.vue";
import StudioSettingChannel from "@/components/StudioSettingChannel.vue";
import StudioSettingUploadDefault from "@/components/StudioSettingUploadDefault.vue";
import StudioSettingPermissions from "@/components/StudioSettingPermissions.vue";
import StudioSettingCommunity from "@/components/StudioSettingCommunity.vue";
import StudioSettingAgreements from "@/components/StudioSettingAgreements.vue";
import StudioSendFeedback from "@/components/StudioSendFeedback.vue";
import profile from "@/assets/profile.png";

import { onMounted, reactive, toRefs } from "vue";
export default {
  name: "Studio",
  components: {
    StudioDashboard,
    StudioContent,
    StudioPlaylists,
    StudioAnalytics,
    StudioComments,
    StudioSubtitles,
    StudioCopyright,
    StudioMonetization,
    StudioCustomization,
    AudioLibrary,
    StudioSettingGeneral,
    StudioSettingChannel,
    StudioSettingUploadDefault,
    StudioSettingPermissions,
    StudioSettingCommunity,
    StudioSettingAgreements,
    StudioSendFeedback
  },
  setup() {
    const state = reactive({
      widthSize: null,
      absoluteDisplay: false,
      absoluteFeedback: false,
      dashboard: true,
      content: false,
      playlist: false,
      analytics: false,
      comments: false,
      subtitles: false,
      copyright: false,
      monetization: false,
      customization: false,
      audioLibrary: false,
      settingGeneral: false,
      settingChannel: false,
      settingUploadDefault: false,
      settingPermissions: false,
      settingCommunity: false,
      settingAgreements: true
    });

    onMounted(() => {
      console.log("state:", state.widthSize);
      window.addEventListener("resize", function() {
        let sizeWidth = document.documentElement.clientWidth;
        sizeWidth -= 256;
        console.log("sizeWidth:", sizeWidth);
        state.widthSize = sizeWidth;
      });
    });

    const switchToDashboard = () => {
      state.dashboard = true;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToContent = () => {
      state.dashboard = false;
      state.content = true;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToPlaylist = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = true;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToAnalytics = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = true;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToComments = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = true;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToSubtitles = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = true;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToCopyright = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = true;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToMonetization = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = true;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToCustomization = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = true;
      state.audioLibrary = false;
    };
    const switchToAudioLibrary = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = true;
    };
    const switchSetting = () => {
      state.absoluteDisplay = !state.absoluteDisplay;
    };

    const switchToSettingGeneral = () => {
      state.settingGeneral = true;
      state.settingChannel = false;
      state.settingUploadDefault = false;
      state.settingPermissions = false;
      state.settingCommunity = false;
      state.settingAgreements = false;
    };
    const switchToSettingChannel = () => {
      state.settingGeneral = false;
      state.settingChannel = true;
      state.settingUploadDefault = false;
      state.settingPermissions = false;
      state.settingCommunity = false;
      state.settingAgreements = false;
    };
    const switchToSettingUploadDefault = () => {
      state.settingGeneral = false;
      state.settingChannel = false;
      state.settingUploadDefault = true;
      state.settingPermissions = false;
      state.settingCommunity = false;
      state.settingAgreements = false;
    };

    const switchToSettingPermissions = () => {
      state.settingGeneral = false;
      state.settingChannel = false;
      state.settingUploadDefault = false;
      state.settingPermissions = true;
      state.settingCommunity = false;
      state.settingAgreements = false;
    };
    const switchToSettingCommunity = () => {
      state.settingGeneral = false;
      state.settingChannel = false;
      state.settingUploadDefault = false;
      state.settingPermissions = false;
      state.settingCommunity = true;
      state.settingAgreements = false;
    };

    const switchToSettingAgreement = () => {
      state.settingGeneral = false;
      state.settingChannel = false;
      state.settingUploadDefault = false;
      state.settingPermissions = false;
      state.settingCommunity = false;
      state.settingAgreements = true;
    };

    const switchFeedBack = () => {
      state.absoluteFeedback = !state.absoluteFeedback;
    };

    return {
      ...toRefs(state),
      profile,
      switchToDashboard,
      switchToContent,
      switchToPlaylist,
      switchToAnalytics,
      switchToComments,
      switchToSubtitles,
      switchToCopyright,
      switchToMonetization,
      switchToCustomization,
      switchToAudioLibrary,
      switchSetting,
      switchToSettingGeneral,
      switchToSettingChannel,
      switchToSettingUploadDefault,
      switchToSettingPermissions,
      switchToSettingCommunity,
      switchToSettingAgreement,
      switchFeedBack
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studio {
  width: 100%;
  position: relative;
  font-family: Roboto, Arial, sans-serif;
  color: black;
}
.studio__absolute {
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(77, 77, 77, 0.7);
  z-index: 50;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.studio__absolute__setting {
  width: 960px;
  height: 620px;
  background-color: white;
  border-radius: 5px;
}
.studio__absolute__setting__title {
  width: 100%;
  height: 65px;
  border-bottom: 1px solid lightgrey;
}
.studio__absolute__setting__title__text {
  text-align: left;
  text-indent: 25px;
  line-height: 70px;
  font-size: 1.25rem;
  font-weight: 500;
}
.studio__absolute__setting__content {
  width: 100%;
  height: 500px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.studio__absolute__setting__content__left {
  width: 30%;
  height: 100%;
  border-right: 1px solid lightgrey;
}
.list--active {
  background-color: rgb(240, 239, 239);
}
.studio__absolute__setting__content__left__list {
  width: 100%;
  height: 50px;
  text-align: left;
  text-indent: 25px;
  line-height: 50px;
  font-size: 0.8rem;
  font-weight: 500;
}
.studio__absolute__setting__content__left__list:hover {
  cursor: pointer;
  background-color: rgb(240, 239, 239);
}
.studio__absolute__setting__content__right {
  width: 70%;
  height: 100%;
}
.studio__absolute__setting__bottom {
  width: 100%;
  height: 55px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
}
.studio__absolute__setting__bottom__close {
  height: 100%;
  line-height: 50px;
  margin: 0 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: dodgerblue;
}
.studio__absolute__setting__bottom__close:hover {
  cursor: pointer;
}
.studio__absolute__setting__bottom__save {
  height: 100%;
  line-height: 50px;
  margin: 0 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: grey;
}
.studio__absolute__setting__bottom__save:hover {
  cursor: pointer;
}

.studio__nav {
  width: 255px;
  height: 94vh;
  position: fixed;
  border-right: 1px solid lightgrey;
  margin-top: 0px;
}
.studio__nav__channel {
  width: 100%;
  height: 20vh;
  display: flex;
  flex-flow: row wrap;
}
.studio__nav__channel__profile {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 20px auto 10px;
}
.studio__nav__channel__profile__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.studio__nav__channel__yourChannel {
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 0.9rem;
  font-family: Roboto, Arial, sans-serif;
}
.studio__nav__channel__name {
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  font-family: Roboto, Arial, sans-serif;
  color: grey;
}
.studio__nav__wrap {
  width: 100%;
  height: 74vh;
}
.studio__nav__wrap__actions {
  width: 100%;
  height: 53vh;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-items: flex-start;
}
.studio__nav__wrap__actions__list {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-flow: row nowrap;
}

.studio__nav__wrap__actions__list:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.studio__nav__wrap__actions__list:first-child {
  margin-top: 10px;
}
.studio__nav__wrap__actions__list__icon {
  width: 30%;
}
.studio__nav__wrap__actions__list__icon .fas {
  line-height: 50px;
  color: rgb(90, 90, 90);
}
.studio__nav__wrap__actions__list__text {
  width: 70%;
  text-align: left;
  font-weight: 500;
  font-family: Roboto, Arial, sans-serif;
  color: rgb(90, 90, 90);
  font-size: 0.9rem;
}
.studio__nav__wrap__more {
  width: 100%;
  height: 10vh;
  margin-top: 10.8vh;
}
.studio__nav__wrap__more__list {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-flow: row nowrap;
}
.studio__nav__wrap__actions__list__block {
  width: 5px;
  height: 100%;
  background-color: red;
}

.studio__nav__wrap__more__list:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.studio__nav__wrap__more__list__icon {
  width: 30%;
}
.studio__nav__wrap__more__list__icon .fas {
  line-height: 50px;
  padding-left: 0;
  color: rgb(90, 90, 90);
}
.studio__nav__wrap__more__list__text {
  width: 70%;
  text-align: left;
  font-weight: 500;
  font-family: Roboto, Arial, sans-serif;
  color: rgb(90, 90, 90);
  font-size: 0.9rem;
}

.highlight {
  background-color: rgb(235, 232, 232);
  color: red;
}
.studio__nav__wrap__actions__list__icon .red {
  color: red;
}
.red {
  color: red;
}

.studio__content {
  height: 100%;
  min-height: 93.8vh;
  background-color: rgb(255, 255, 255);
  margin-top: 60px;
  margin-left: 256px;
  overflow: auto;
}
.studio__absolute__wrap {
  width: 360px;
  height: 580px;
  background-color: white;
}
</style>
