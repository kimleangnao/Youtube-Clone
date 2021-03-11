<template>
  <div class="channelcomponent" @click="goToChannel">
    <img :src="profile" class="channelcomponent__channel" alt="profile image" />
    <div class="channelcomponent__name">REdi</div>
    <div class="channelcomponent__sub">20K subscriber</div>
    <div class="channelcomponent__subbutton">SUBSCRIBE</div>
  </div>
</template>

<script>
import profile from "@/assets/profile.png";
export default {
  name: "Channel",
  setup() {
    const goToChannel = () => {
      window.location.href = "/channel/dfdf";
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
  color: rgb(155, 155, 155);
}
.channelcomponent__subbutton {
  width: 100px;
  height: 20px;
  background-color: lightgrey;
  color: rgb(94, 94, 94);
  font-weight: 500;
  margin: 10px auto;
  line-height: 20px;
}
.channelcomponent__subbutton:hover {
  cursor: pointer;
}
</style>
