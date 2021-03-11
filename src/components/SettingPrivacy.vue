<template>
  <div class="settingprivacy">
    <div class="settingprivacy__title">
      Privacy
    </div>
    <div class="settingprivacy__boldText">
      Manage what you share on YouTube
    </div>
    <div class="settingprivacy__subText1">
      Choose who can see your saved playlists and subscriptions
    </div>
    <div class="settingprivacy__subText2">
      Review <span class="link__tag">YouTube Terms of Service </span> and
      <span class="link__tag"> Google Privacy Policy</span>
    </div>
  </div>
  <div class="settingprivacy__wrap">
    <div class="settingprivacy__wrap__title">Playlists and subscriptions</div>
    <div class="settingprivacy__wrap__detail">
      <div class="settingprivacy__wrap__detail__wrap">
        <div
          class="settingprivacy__wrap__detail__wrap__slide"
          @click="agreeToPrivatePlaylist"
        >
          <NSA :agree="privatePlaylist" />
        </div>
        <div class="settingprivacy__wrap__detail__wrap__text">
          <div class="settingprivacy__wrap__detail__wrap__text__bold">
            Keep all my saved playlists private
          </div>
          <div class="settingprivacy__wrap__detail__wrap__text__subtext">
            Playlists created by others won’t appear on your channel. Playlists
            created by you have separate, individual privacy settings.
            <span class="link__tag"> Learn more </span>
          </div>
        </div>
      </div>
      <div class="settingprivacy__wrap__detail__wrap">
        <div
          class="settingprivacy__wrap__detail__wrap__slide"
          @click="agreeToPrivateSubscription"
        >
          <NSA :agree="privateSubscription" />
        </div>
        <div class="settingprivacy__wrap__detail__wrap__text">
          <div class="settingprivacy__wrap__detail__wrap__text__bold">
            Keep all my subscriptions private
          </div>
          <div class="settingprivacy__wrap__detail__wrap__text__subtext">
            Your subscriptions will not be visible to others. Manage your
            subscriptions <span class="link__tag"> here. </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="settingprivacy__wrap">
    <div class="settingprivacy__wrap__title">Ads on YouTube</div>
    <div class="settingprivacy__wrap__detail">
      <div class="settingprivacy__wrap__detail__wrap">
        <div class="settingprivacy__wrap__detail__wrap__text">
          <div class="settingprivacy__wrap__detail__wrap__text__subtext">
            You may see ads on YouTube based on general factors, like the topic
            of a video. The ads you see may also depend on your
            <span class="link__tag"> Google Ads Settings</span>. To learn more
            about how ads work for family accounts with kids, visit the
            <span class="link__tag"> Google for Families Help Center. </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NSA from "@/components/NotificationSlideAnimation.vue";
import { reactive, toRefs } from "vue";
export default {
  name: "SettingPrivacy",
  components: { NSA },
  setup() {
    const state = reactive({
      privatePlaylist: false,
      privateSubscription: false
    });

    const agreeToPrivatePlaylist = () => {
      state.privatePlaylist = !state.privatePlaylist;
    };
    const agreeToPrivateSubscription = () => {
      state.privateSubscription = !state.privateSubscription;
    };

    return {
      ...toRefs(state),
      agreeToPrivatePlaylist,
      agreeToPrivateSubscription
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.settingprivacy {
  width: 100%;
  height: 100%;
  text-align: left;
  font-family: Roboto, Arial, sans-serif;
  color: black;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 40px;
}
.settingprivacy__title {
  font-weight: 500;
  padding: 40px 0;
}
.settingprivacy__boldText {
  font-size: 1.5rem;
}
.settingprivacy__subText1 {
  font-size: 0.9rem;
  color: grey;
  margin: 20px 0 0;
}
.settingprivacy__subText2 {
  font-size: 0.9rem;
  color: grey;
}
.link__tag {
  color: rgb(19, 102, 185);
}

.settingprivacy__wrap {
  width: 100%;
  height: 100%;
  text-align: left;
  font-family: Roboto, Arial, sans-serif;
  color: black;
  margin: 40px 0;
  display: flex;
  flex-flow: row wrap;
}
.settingprivacy__wrap__title {
  width: 15%;
  font-size: 0.9rem;
  font-weight: 500;
}
.settingprivacy__wrap__detail {
  width: 78%;
  margin-left: 6%;
}
.settingprivacy__wrap__detail__wrap {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 20px;
}
.settingprivacy__wrap__detail__wrap__slide {
  width: 60px;
  height: 30px;
}
.settingprivacy__wrap__detail__wrap__text {
  width: 90%;
  margin-left: 20px;
}
.settingprivacy__wrap__detail__wrap__text__bold {
  font-size: 0.9rem;
  font-weight: 500;
}
.settingprivacy__wrap__detail__wrap__text__subtext {
  font-size: 0.9rem;
  font-weight: 400;
  color: grey;
}
.link__tag {
  color: rgb(21, 111, 201);
}
</style>
