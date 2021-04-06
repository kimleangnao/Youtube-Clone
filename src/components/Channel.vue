<template>
  <div class="channelcomponent" @click="goToChannel">
    <img :src="profile" class="channelcomponent__channel" alt="profile image" />
    <div class="channelcomponent__name">{{ channel.userName }}</div>
    <div class="channelcomponent__sub">
      {{ channel.subscriber }} Subscribers
    </div>
    <div class="channelcomponent__subbutton">SUBSCRIBE</div>
  </div>
</template>

<script>
import profile from "@/assets/profile.png";
export default {
  name: "Channel",
  props: {
    channel: {
      type: Object,
      require: true
    }
  },
  setup(props) {
    const goToChannel = () => {
      window.location.href = "/channel/" + props.channel.id;
    };
    return { profile, goToChannel };
  }
};
</script>

<style scoped>
.channelcomponent {
  width: 210px;
  height: 180px;
}
.channelcomponent:hover {
  cursor: pointer;
}
.channelcomponent__channel {
  width: 80px;
  height: 80px;
  background-color: red;
  margin: 0 auto;
  border-radius: 50%;
  object-fit: cover;
}
.channelcomponent__name {
  width: 100%;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  font-size: 0.95rem;
}
.channelcomponent__sub {
  font-size: 0.82rem;
  color: rgb(121, 121, 121);
}
.channelcomponent__subbutton {
  width: 100px;
  height: 22px;
  background-color: lightgrey;
  color: rgb(58, 58, 58);
  font-weight: 500;
  font-size: 0.95rem;
  margin: 10px auto;
  line-height: 22px;
}
.channelcomponent__subbutton:hover {
  cursor: pointer;
}
</style>
