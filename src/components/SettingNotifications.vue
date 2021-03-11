<template>
  <div class="SN">
    <div class="SN__title">Notifications</div>
    <div class="SN__choose">Choose when and how to be notified</div>
    <div class="SN__subtext">
      Select push and email notifications you'd like to receive
    </div>
  </div>
  <div class="SN__general">
    <div class="SN__general__title">General</div>
    <div class="SN__general__subtext">
      Manage your mobile and desktop notifications
    </div>
    <div class="SN__general__preference">
      <div class="SN__general__preference__title">Your preferences</div>
      <div class="SN__general__preference__detail">
        <div class="SN__general__preference__detail__type">
          <div
            class="SN__general__preference__detail__type__component"
            @click="subscriptionSwitch"
          >
            <NSA :agree="subscription" />
          </div>
          <div class="SN__general__preference__detail__type__info">
            <div class="SN__general__preference__detail__type__info__name">
              Subscriptions
            </div>
            <div class="SN__general__preference__detail__type__info__subtext">
              Notify me about activity from the channels I'm subscribed to
            </div>
          </div>
        </div>
        <div class="SN__general__preference__detail__type">
          <div
            class="SN__general__preference__detail__type__component"
            @click="RecommendedSwitch"
          >
            <NSA :agree="recommendedVideo" />
          </div>
          <div class="SN__general__preference__detail__type__info">
            <div class="SN__general__preference__detail__type__info__name">
              Recommended videos
            </div>
            <div class="SN__general__preference__detail__type__info__subtext">
              Notify me of videos I might like based on what I watch
            </div>
          </div>
        </div>
        <div class="SN__general__preference__detail__type">
          <div
            class="SN__general__preference__detail__type__component"
            @click="activityOnMyChannelSwitch"
          >
            <NSA :agree="activityOnMyChannel" />
          </div>
          <div class="SN__general__preference__detail__type__info">
            <div class="SN__general__preference__detail__type__info__name">
              Activity on my channel
            </div>
            <div class="SN__general__preference__detail__type__info__subtext">
              Notify me about comments and other activity on my channel or
              videos
            </div>
          </div>
        </div>
        <div class="SN__general__preference__detail__type">
          <div
            class="SN__general__preference__detail__type__component"
            @click="activityOnMyCommentsSwitch"
          >
            <NSA :agree="activityOnMyComments" />
          </div>
          <div class="SN__general__preference__detail__type__info">
            <div class="SN__general__preference__detail__type__info__name">
              Activity on my comments
            </div>
            <div class="SN__general__preference__detail__type__info__subtext">
              Notify me about activity on my comments on others' videos
            </div>
          </div>
        </div>
        <div class="SN__general__preference__detail__type">
          <div
            class="SN__general__preference__detail__type__component"
            @click="repliesToMyCommentsSwitch"
          >
            <NSA :agree="repliesToMyComments" />
          </div>
          <div class="SN__general__preference__detail__type__info">
            <div class="SN__general__preference__detail__type__info__name">
              Replies to my comments
            </div>
            <div class="SN__general__preference__detail__type__info__subtext">
              Notify me about replies to my comments
            </div>
          </div>
        </div>
        <div class="SN__general__preference__detail__type">
          <div
            class="SN__general__preference__detail__type__component"
            @click="mentionsSwitch"
          >
            <NSA :agree="mentions" />
          </div>
          <div class="SN__general__preference__detail__type__info">
            <div class="SN__general__preference__detail__type__info__name">
              Mentions
            </div>
            <div class="SN__general__preference__detail__type__info__subtext">
              Notify me when others mentions my channel
            </div>
          </div>
        </div>
        <div class="SN__general__preference__detail__type">
          <div
            class="SN__general__preference__detail__type__component"
            @click="sharedcontentSwitch"
          >
            <NSA :agree="sharedcontent" />
          </div>
          <div class="SN__general__preference__detail__type__info">
            <div class="SN__general__preference__detail__type__info__name">
              Shared content
            </div>
            <div class="SN__general__preference__detail__type__info__subtext">
              Notify me when others share my content on their channels
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="SN__emailnotification">
    <div class="SN__emailnotification__title">Email notifications</div>
    <div class="SN__emailnotification__subtext">
      Your emails are sent to codingsunday@gmail.com. To unsubscribe from an
      email, click the 'Unsubscribe' link at the bottom of it. Learn more about
      emails from YouTube.
    </div>
    <div class="SN__emailnotification__detail">
      <div class="SN__emailnotification__detail__permission">
        <div class="SN__emailnotification__detail__permission__title">
          Permission
        </div>
        <div class="SN__emailnotification__detail__permission__details">
          <div class="SN__general__preference__detail__type">
            <div
              class="SN__general__preference__detail__type__component"
              @click="permissionSwitch"
            >
              <NSA :agree="permission" />
            </div>
            <div class="SN__general__preference__detail__type__info">
              <div class="SN__general__preference__detail__type__info__name">
                Send me emails about my YouTube activity and updates I requested
              </div>
              <div class="SN__general__preference__detail__type__info__subtext">
                If this setting is turned off, YouTube may still send you
                messages regarding your account, required service announcements,
                legal notifications, and privacy matters
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="permission" class="SN__emailnotification__detail__permission">
        <div class="SN__emailnotification__detail__permission__title">
          You preference
        </div>
        <div class="SN__emailnotification__detail__permission__details">
          <div class="SN__general__preference__detail__type">
            <div
              class="SN__general__preference__detail__type__component"
              @click="generalUpdateSwitch"
            >
              <NSA :agree="generalUpdate" />
            </div>
            <div class="SN__general__preference__detail__type__info">
              <div class="SN__general__preference__detail__type__info__name">
                General product updates
              </div>
              <div class="SN__general__preference__detail__type__info__subtext">
                Announcements and recommendations
              </div>
            </div>
          </div>
          <div class="SN__general__preference__detail__type">
            <div
              class="SN__general__preference__detail__type__component"
              @click="creatorUpdateSwitch"
            >
              <NSA :agree="creatorUpdate" />
            </div>
            <div class="SN__general__preference__detail__type__info">
              <div class="SN__general__preference__detail__type__info__name">
                Creator updates and announcements
              </div>
              <div class="SN__general__preference__detail__type__info__subtext">
                Product announcements, creator events, and personalized tips to
                grow your YouTube channel
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="SN__emailnotification__detail__permission">
        <div class="SN__emailnotification__detail__permission__title">
          You preference
        </div>
        <div class="SN__emailnotification__detail__permission__details">
          <div class="SN__emailnotification__detail__permission__details__box">
            <div
              class="SN__emailnotification__detail__permission__details__box__title"
            >
              Email language
            </div>
            <select name="pets" id="pet-select">
              <option value="">English</option>
              <option value="cat">Chinese</option>
              <option value="">English</option>
              <option value="cat">Chinese</option>
              <option value="">English</option>
              <option value="cat">Chinese</option>
              <option value="">English</option>
              <option value="cat">Chinese</option>
            </select>
          </div>
          <div
            class="SN__emailnotification__detail__permission__details__warning"
          >
            This setting applies to emails only
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
  name: "SettingNotifications",
  components: {
    NSA
  },
  setup() {
    const state = reactive({
      subscription: false,
      recommendedVideo: false,
      activityOnMyChannel: true,
      activityOnMyComments: true,
      repliesToMyComments: true,
      mentions: true,
      sharedcontent: true,
      permission: true,
      generalUpdate: false,
      creatorUpdate: false
    });
    const subscriptionSwitch = () => {
      state.subscription = !state.subscription;
    };
    const RecommendedSwitch = () => {
      state.recommendedVideo = !state.recommendedVideo;
    };
    const activityOnMyChannelSwitch = () => {
      state.activityOnMyChannel = !state.activityOnMyChannel;
    };
    const activityOnMyCommentsSwitch = () => {
      state.activityOnMyComments = !state.activityOnMyComments;
    };
    const repliesToMyCommentsSwitch = () => {
      state.repliesToMyComments = !state.repliesToMyComments;
    };
    const mentionsSwitch = () => {
      state.mentions = !state.mentions;
    };
    const sharedcontentSwitch = () => {
      state.sharedcontent = !state.sharedcontent;
    };
    const permissionSwitch = () => {
      state.permission = !state.permission;
    };
    const generalUpdateSwitch = () => {
      state.generalUpdate = !state.generalUpdate;
    };
    const creatorUpdateSwitch = () => {
      state.creatorUpdate = !state.creatorUpdate;
    };

    return {
      ...toRefs(state),
      subscriptionSwitch,
      RecommendedSwitch,
      activityOnMyChannelSwitch,
      activityOnMyCommentsSwitch,
      repliesToMyCommentsSwitch,
      mentionsSwitch,
      sharedcontentSwitch,
      permissionSwitch,
      generalUpdateSwitch,
      creatorUpdateSwitch
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.SN {
  width: 100%;
  border-bottom: 1px solid lightgrey;
  text-align: left;
  color: black;
  font-family: Roboto, Arial, sans-serif;
  padding-bottom: 50px;
}
.SN__title {
  padding: 40px 0;
  font-size: 1rem;
  font-weight: 500;
}
.SN__choose {
  font-size: 1.5rem;
  font-weight: 400;
}
.SN__subtext {
  font-size: 0.9rem;
  margin: 10px 0;
}

.SN__general {
  width: 100%;
  border-bottom: 1px solid lightgrey;
  text-align: left;
  color: black;
  font-family: Roboto, Arial, sans-serif;
  padding-bottom: 50px;
}
.SN__general__title {
  padding: 30px 0 0;
  font-size: 1rem;
  font-weight: 500;
}
.SN__general__subtext {
  font-size: 0.9rem;
  margin: 10px 0;
}
.SN__general__preference {
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-flow: row nowrap;
}
.SN__general__preference__title {
  width: 20%;
  font-size: 0.95rem;
  font-weight: 500;
}
.SN__general__preference__detail {
  width: 80%;
}
.SN__general__preference__detail__type {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: 13px 0;
}
.SN__general__preference__detail__type__component {
  width: 60px;
  height: 30px;
}
.SN__general__preference__detail__type__info {
  width: 70%;
  margin-left: 20px;
}
.SN__general__preference__detail__type__info__name {
  font-size: 0.95rem;
  font-weight: 500;
}
.SN__general__preference__detail__type__info__subtext {
  font-size: 0.85rem;
  color: rgb(107, 107, 107);
}

.SN__emailnotification {
  width: 100%;
  border-bottom: 1px solid lightgrey;
  text-align: left;
  color: black;
  font-family: Roboto, Arial, sans-serif;
  padding-bottom: 50px;
}
.SN__emailnotification__title {
  font-weight: 500;
  font-size: 1rem;
  padding: 30px 0 10px;
}
.SN__emailnotification__subtext {
  font-size: 0.9rem;
  color: grey;
}

.SN__emailnotification__detail {
  width: 100%;
  margin-top: 40px;
}

.SN__emailnotification__detail__permission {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: 20px 0;
}
.SN__emailnotification__detail__permission__title {
  width: 20%;
  font-size: 0.95rem;
  font-weight: 500;
}
.SN__emailnotification__detail__permission__details {
  width: 80%;
}
.SN__emailnotification__detail__permission__details__box {
  width: 320px;
  height: 60px;
  background-color: lightgrey;
}
.SN__emailnotification__detail__permission__details__box__title {
  font-size: 0.9rem;
  padding: 10px 0 0 15px;
}
.SN__emailnotification__detail__permission__details__warning {
  margin: 5px 0;
  font-size: 0.9rem;
  color: grey;
}

#pet-select {
  margin-left: 12px;
  width: 92%;
  height: 20px;
  background-color: lightgrey;
  border: unset;
  border-bottom: 2px solid black;
  color: rgb(58, 58, 58);
  font-size: 0.9rem;
}
#pet-select:focus {
  outline: unset;
}
</style>
